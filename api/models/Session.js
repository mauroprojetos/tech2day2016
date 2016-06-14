/**
 * Session.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK:true,
  schema:true,

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },

    title: {
      type: 'string',
      required: true
    },

    url: {
      type: 'url',
      required: true
    },

    description: {
      type: 'string',
      size: 2048,
      required: true
    },

    day: {
      type: 'string',
      enum: ['mercredi', 'jeudi', 'vendredi'],
      defaultsTo: 'mercredi',
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
      required: true
    },

    endDate: {
      type: 'date',
      required: true
    },

    category: { 
      type: 'string',
      enum: ['hands-on', 'talk'],
      defaultsTo: 'talk',
      required: true
    },

    location: {
      type: 'string',
      required: true
    },

    location_url: {
      type: 'url',
      required: true
    },

    speaker: { 
      type: 'string',
      required: true
    },

    speaker_url: { 
      type: 'url',
      required: true
    },

    // Hide internal structure
    toJSON: function () {
      var obj = this.toObject();
      delete obj.createdAt;
      delete obj.updatedAt;
      return obj;
    }

  }
};

