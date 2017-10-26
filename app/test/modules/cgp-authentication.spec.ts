import { cgpCookieHelper } from '../../src/modules/cgp-cookie-helper';
import { cgpAuthentication } from '../../src/modules/cgp-authentication';
import { config } from '../../src/config/config';

const fakeAuthToken = 'Bearer_eyJhbGciOiJIUlI1NiJ9.eyJpc3MiOiJjZ3AiLCJnbWluIjoiMzY5MDE2MzE2IiwiZXhwIjoxNDg0Njc1OTgxNzEwLBJpYXQiOjE0ODQ2NzIzODE3MTAsImp0aSI6IjAxNjIxYmYyLWEzZjMtNDQ2NC1hYjM2LTYzYjJiMDMzNDk1NyJ7.Qr9B6whsXotf39U31TlXOYZgxu160vaFOvanEvYjVZ8';
const fakeUserInfo = "{\"displayName\":\"Bar, Foo\",\"uid\":\"XXXXXX\",\"gmuniqueidentifier\":\"000000000\",\"givenName\":\"\",\"sn\":\"Bar\",\"mail\":\"foo.bar@gm.com\",\"gmPersonType\":\"C\",\"nonGMPersonType\":\"\",\"initials\":\"\",\"entryStatus\":\"\",\"cn\":\"Foo Bar\",\"region\":\"North America\",\"title\":\"Software Developer in Manufacturing\",\"gmLocationCity\":\"\",\"gmLocationState\":\"\",\"gmContractorCompany\":\"\",\"gmOrgDirect\":\"\"}";

var retrieveCookieSpy = null;

function fakeRetrieveCookie(name) {
    if(name === config.authentication.authenticationCookie) {
        return fakeAuthToken
    }
    else if (name === config.authentication.userInfoCookie) {
        return JSON.stringify(fakeUserInfo);
    }
    else {
        throw 'attempting to access an invalid authentication cookie';
    }
}

function fakeSetRequestHeader(header, value) {
    if (header === 'Content-type') {
        expect(value).toBe('application/json')
    }
    else if (header === 'Authorization') {
        expect(value).toBe(fakeAuthToken.replace('_', ' '));
    }
    else {
        throw 'unexpected request header';
    }
}

describe('CGP Authentication', () => {
    beforeEach(() => {
        retrieveCookieSpy = spyOn(cgpCookieHelper, 'retrieveCookie').and.callFake(fakeRetrieveCookie);
        spyOn(cgpCookieHelper, 'deleteAuthCookie').and.callThrough();
        spyOn(cgpCookieHelper, 'setAuthCookie').and.callThrough();
        spyOn(XMLHttpRequest.prototype, 'getResponseHeader').and.callThrough();
        spyOn(XMLHttpRequest.prototype, 'setRequestHeader').and.callFake(fakeSetRequestHeader);
        spyOn(XMLHttpRequest.prototype, 'send').and.returnValue(null);
    });

    describe('Get Auth Token', () => {
        it('should return auth token', () => {
            let authToken = cgpAuthentication.getAuthToken();
            authToken = authToken.replace(' ', '_');
            expect(authToken).toMatch(fakeAuthToken);
        });

        it('null token should return empty string', () => {
            retrieveCookieSpy.and.returnValue(null);

            let authToken = cgpAuthentication.getAuthToken();
            expect(authToken).toMatch('');
        });
    });

    describe('Get User Info', () => {
        it('should return a user object', () => {
            let userInfo = cgpAuthentication.getUserInfo();
            expect(userInfo['cn']).toMatch('Foo Bar');
        });

        it('null token should return null', () => {
            retrieveCookieSpy.and.returnValue(null);

            let userInfo = cgpAuthentication.getUserInfo();
            expect(userInfo).toBe(null);
        });
    });

    describe('Validate Token', () => {
        it('failure should redirect', () => {
            // TODO
        });    
        it('success should callback', () => {
            // TODO
        });
    });

    describe('Invalidate Token', () => {
        it('should call cgp security api and delete token', () => {
            cgpAuthentication.invalidateToken(() => {});
            expect(cgpCookieHelper.retrieveCookie).toHaveBeenCalled();
            expect(cgpCookieHelper.deleteAuthCookie).toHaveBeenCalled();
        });
    });

    describe('Refresh Token', () => {
        it('should call cgp security api and replace token', () => {
            cgpAuthentication.refreshToken(() => {});
            expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
        });
    });

});