import { config } from "../config/config";

function retrieveCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');

    if (parts.length === 2) {
        let cookie = parts.pop().split(';').shift();
        return cookie;
    }
}

function setAuthCookie(value) {
    var expires = "";
    document.cookie = config.authentication.authenticationCookie + '=Bearer_' + value + '; domain=.gm.com; path=/; expires=' + expires;
}

function deleteAuthCookie() {
    document.cookie = config.authentication.authenticationCookie + '=; domain=.gm.com; path=/; expires=-1';
}

export const cgpCookieHelper = {
    retrieveCookie: retrieveCookie,
    setAuthCookie: setAuthCookie,
    deleteAuthCookie: deleteAuthCookie
}