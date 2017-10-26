// File: config.base.js
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: Configuration items used throughout the application.
// Other Contributors:

const environment = {
    dev: 'DEV',
    local: 'LOCAL',
    prod: 'PROD'
};

const cgpSecurityUrl = {
    'DEV': 'https://epgidvlman1155.epga.nam.gm.com:15101/cgp-security-api',
    'LOCAL': 'https://epgidvlman1155.epga.nam.gm.com:15101/cgp-security-api',
    'PROD': 'https://epgidvlman1155.epga.nam.gm.com:15101/cgp-security-api'
};

export const baseConfig = {
    environment: environment.dev,
    appInfo: {
        name: 'CGP UI',
        version: '0.0.1',
        company: 'GENERAL MOTORS'
    },
    baseUrl: '',
    authentication : {
        ssoBaseLoginUrl: cgpSecurityUrl[environment.dev] + '/authn/LoginUser?RelayState=',
        authenticationBaseUrl: cgpSecurityUrl[environment.dev] + '/token/',
        authenticationCookie: 'Authorization',
        authenticationType: 'Bearer',
        userInfoCookie: 'UserInfo'
    }
};