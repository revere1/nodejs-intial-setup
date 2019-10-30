const Joi = require('@hapi/joi');
const { messages } = require('../../constants');

const { TESTMESSAGES } = messages;

exports.AttributeDetailsValidation = async data => {
  const schema = Joi.object().keys({
    systemAttributeName: Joi.string().max(50).required().error(() => TESTMESSAGES.SYSTEM_ATTRIBUTE_NAME),
    systemAttributeDesc: Joi.string().max(50).required().error(() => TESTMESSAGES.SYSTEM_ATTRIBUTE_DESC)
  }).unknown();
  return Joi.validate(data, schema);
};