// File: cgp-authentication.js
// Author: Brandon Shreve
// Date: 1/9/2017
// Desc: Authentication module that handles integrating with CGP Authentication.
//       Handles redirecting to GAME login page and reading the cookie that has our authorization token.
//       Has methods to get the authorization token as well as the logged in user's information.
// Other Contributors: Joseph M Diaz

import { config } from '../config/config';
import { cgpCookieHelper } from './cgp-cookie-helper';

function singleSignOnRedirect(redirectLink: Location) {
    const cgpSecurityUrl = config.authentication.ssoBaseLoginUrl + redirectLink;
    window.location.replace(cgpSecurityUrl);
};

function validateToken(callback: Function) {
    // const token = getAuthToken();

    // if (token) {
    //     const url = config.authentication.authenticationBaseUrl + 'validateToken';
    //     const http = new XMLHttpRequest();

    //     http.open('POST', url, true);
    //     http.setRequestHeader('Content-type', 'application/json');
    //     http.setRequestHeader('Authorization', token);

    //     http.onreadystatechange = function() {
    //         if (http.readyState !== XMLHttpRequest.DONE) {
    //             return;
    //         }

    //         if (http.status === 200) {
    //             if (callback) { callback(); }
    //         }
    //         else {
    //             singleSignOnRedirect(document.location);
    //         }
    //     };
    //     http.send();
    // }
    // else {
    //     singleSignOnRedirect(document.location);
    // }

    if (callback) { callback(); }
}

function refreshToken(callback: Function) {
    const token = getAuthToken();
    const url = config.authentication.authenticationBaseUrl + 'validateToken';
    const http = new XMLHttpRequest();

    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', token);

    http.onreadystatechange = function() {
        if (http.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        if (http.status === 200) {
            let newToken = http.getResponseHeader(config.authentication.authenticationCookie);
            cgpCookieHelper.setAuthCookie(newToken.replace(/^\s*:\s*Bearer\s*/, ""));
            if (callback) { callback(null, 'success'); }
        }
        else {
            if (callback) { callback('error', null); }
        }
    };
    http.send();
};

function invalidateToken(callback: Function) {
    // TODO: Uncomment code once CGP Services implements invalidateToken method
    //

    // const token = getAuthToken();
    // const url = config.authentication.authenticationBaseUrl + 'inValidateToken';
    // const http = new XMLHttpRequest();
    //
    // http.open('POST', url, true);
    // http.setRequestHeader('Content-type', 'application/json');
    // http.setRequestHeader('Authorization', token);
    //
    // http.onreadystatechange = function() {
    //     if (http.readyState !== XMLHttpRequest.DONE) {
    //         return;
    //     }
    //
    //     if (http.status === 200) {
    //         if (callback) { callback(null, 'success'); }
    //     }
    //     else {
    //         if (callback) { callback('error', null); }
    //     }
    // };
    // http.send();
    cgpCookieHelper.deleteAuthCookie();
}

function parseToken(token) {
    if (token) {
        const parsedToken = token.replace('Bearer_', 'Bearer ');
        return parsedToken;
    }
    else {
        return '';
    }
}

function getAuthToken() {
    const token = cgpCookieHelper.retrieveCookie(config.authentication.authenticationCookie);
    return parseToken(token);
}

function getUserInfo() {
    // const userInfo = cgpCookieHelper.retrieveCookie(config.authentication.userInfoCookie);

    // if (userInfo) {
    //     return JSON.parse(JSON.parse(userInfo));
    // }

    // return null;
    return JSON.parse("{\"displayName\":\"Developer, Diane\",\"uid\":\"nzj32b\",\"gmuniqueidentifier\":\"645706133\",\"givenName\":\"\",\"sn\":\"Developer\",\"mail\":\"notarealemail@gm.com\",\"gmPersonType\":\"C\",\"nonGMPersonType\":\"\",\"initials\":\"\",\"entryStatus\":\"\",\"cn\":\"Diane Developer\",\"region\":\"North America\",\"title\":\"Software Developer\",\"gmLocationCity\":\"\",\"gmLocationState\":\"\",\"gmContractorCompany\":\"\",\"gmOrgDirect\":\"\"}");
}

export const cgpAuthentication = {
    singleSignOnRedirect: singleSignOnRedirect,
    getAuthToken: getAuthToken,
    getUserInfo: getUserInfo,
    validateToken: validateToken,
    invalidateToken: invalidateToken,
    refreshToken: refreshToken
}