const testDA = require('./testDA');
const { HttpUtil, isNumber } = require('../../utils');
const { messages } = require('../../constants');
const validator = require('./validator');

const { TESTMESSAGES } = messages;


exports.getData = async (req, res, next) => {
  const result = await testDA.getAllData();
  return res.json(HttpUtil.getSuccess(result));
};

exports.getRecordBasedOnId = async (req, res, next) => {
  const { attributeId } = req.query
  if (!isNumber(attributeId)) throw TESTMESSAGES.INVALID_ATTRIBUTE_ID;
  const result = await testDA.getBasedOnId(attributeId);
  return res.json(HttpUtil.getSuccess(result));
};

exports.createData = async (req, res, next) => {
  try {
    const data = req.body;
    validator.generalDetailsValidation(data);
    data.createdata = new Date();
    data.createdata = new Date(data.createdata);
    const result = testDA.createRecordData(data);
    return res.json(HttpUtil.getCreated(result, `${TESTMESSAGES.CREATE_RECORD_SUCCESS}`));
  }
  catch (error) {
    if (error.name === 'ValidationError') {
      throw error;
    }
    return res.json(HttpUtil.getException());
  }
};

exports.updateData = async (req, res, next) => {

  try {
    const { recordId } = req.params;
    const data = req.body;
    await validator.AttributeDetailsValidation(data);
    data.modifiedDate = new Date();
    const result = await testDA.updateAttributeRecord(data, recordId);
    return res.json(
      HttpUtil.getSuccess(result, `${TESTMESSAGES.UPDATE_RECORD_SUCCESS}`)
    );
  }
  catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      throw error;
    }
    return res.json(HttpUtil.getException());
  }
};