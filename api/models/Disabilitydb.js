/**
 * Disabilitydb.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  firstName: {
    type: 'string',
    size: 24,
    required: true
  },

    lastName: {
    type: 'string',
    size: 24,
    required: true
  },

  email: {
    type: 'string',
    unique: true,
    required: true,
    email: true
  },

  password: {
    type: 'string',
    required: true
  },

  homePhone: {
    type: 'string',
    required: true
},

 cellPhone: {
    type: 'string',
    required: true
},

bestContact: {
	type: 'string',
	required: true
},

disability: {
    type: 'string',
    size: 50,
    required: true
  },

  approved: {
  	type: 'string',
    enum: ["yes","no"],
  	required: true
  },

  amountOfPayment: {
  	type: 'integer',
  	required: true
  },



  }
};

