'use strict';

let settings = require('../config/settings');
let Response = require('../models/response');
let requestModule = require('request');

//exports
module.exports = {

    //start geocode
    getAddressGeoCode: function (request, reply) {
        let response = new Response;
        requestModule({
            url: settings.googleGeoCodeApiUrl,
            method: 'GET',
            qs: {
                address: request.query.address,
                key: settings.googleApiKey
            }
        }, function (error, result, body) {
            if (error) {
                response.statusCode = 0;
                response.message = " google geocode api failed, got errors";
                response.error = error;
            } else {
                response.statusCode = 1;
                response.message = " Able to geta data from google geocode api";
                response.data = (result.body) ? JSON.parse(result.body) : null;

            }
            reply(response);


        });

    }, //end of geocode 

    //start place api geocode finder
    getPlaceGeoCode: function (request, reply) {
            let response = new Response;
            requestModule({
                url: settings.googlePlaceApiTextSearchUrl,
                method: 'GET',
                qs: {
                    query: request.query.address,
                    key: settings.googleApiKey
                }
            }, function (error, result, body) {
                if (error) {
                    response.statusCode = 0;
                    response.message = "google place api failed, got errors";
                    response.error = error;
                } else {
                    response.statusCode = 1;
                    response.message = " Able to geta data from google place api";
                    response.data = (result.body) ? JSON.parse(result.body) : null;

                }
                reply(response);
            });
        } //end of place api geocode finder 

}