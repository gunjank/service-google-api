'use strict';


const cfenv = require("cfenv");
let appEnv = cfenv.getAppEnv();
let googleApiKeyService = appEnv.getService("google_api_key");


let getGoogleApiKey = function () {
    //** local testing **//

    if (googleApiKeyService == null) {
        log.error('googleApiKeyService not available, reading local hardcoded values');
        let dummyData = require('./notToCommit');
        googleApiKeyService = {};
        googleApiKeyService.credentials = {};
        googleApiKeyService.credentials.key = {};
        googleApiKeyService.credentials.key = dummyData.googleApiKey;
    } else {
        log.info('googleApiKeyService  available, reading  service details');
    }
    return googleApiKeyService.credentials.key;

}



let settings = {
    googleApiKey: getGoogleApiKey(),
    googleGeoCodeApiUrl: 'https://maps.googleapis.com/maps/api/geocode/json',
    googlePlaceApiTextSearchUrl: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
    port: process.env.PORT || 3004
}

module.exports = settings;