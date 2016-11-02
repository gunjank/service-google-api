'use strict';

const Joi = require('joi');
let appHandler = require('../handlers/appHandler');

module.exports = function (server, options) {
    // read


    //geo code finder
    server.route({
        method: 'get',
        path: '/v1/googleApi/geocode',
        config: {
            handler: appHandler.getAddressGeoCode,
            description: 'get geocode location for matching address',
            notes: 'geocode location',
            tags: ['api'],
            validate: {
                query: {
                    address: Joi.string().required()
                }

            }
        }
    });
    //geo code finder through place api
    server.route({
        method: 'get',
        path: '/v1/googleApi/placeGeocode',
        config: {
            handler: appHandler.getPlaceGeoCode,
            description: 'get places nearby to given address with geo location',
            notes: 'get places nearby',
            tags: ['api'],
            validate: {
                query: {
                    address: Joi.string().required()
                }

            }
        }
    });
}