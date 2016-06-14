/**
 * Session.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },

    shortid: {
      type: 'string',
      required: true
    },

    url: {
      type: 'url',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    day: {
      type: 'string',
       required: true
    },

    begin: {
      type: 'string',
       required: true
    },

    end: {
      type: 'string',
       required: true
    },

    beginDate: {
      type: 'date',
      required: true,
    },

    endDate: {
      type: 'date',
      required: true,
    },

    category: { // hands-on, talk
      type: 'string',
      required: true,
    },

    location: {
      type: 'string',
      required: true,
    },

    location_url: {
      type: 'url',
      required: true,
    },

    speaker: { 
      type: 'string',
      required: true,
    },

    speaker_url: { 
      type: 'url',
      required: true,
    }


  }
};

