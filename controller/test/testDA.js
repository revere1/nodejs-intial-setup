const mySql = require('../../utils/db');
const sql = require('./sql');
//const { messages } = require('../../constants');

//const { TESTMESSAGES } = messages;
exports.getAllData = () => mySql.query(sql.GET_ALL_ATTRIBUTES);

exports.getBasedOnId = (attributeId) => mySql.query(sql.GET_ATTRIBUTE_DETAILS, attributeId);

exports.createGeneralInformation = async (data) => {
  try {
    return mySql.query(sql.INSERT_GENERAL_INFORMATION, [
      data.idGeneralInformation,
      data.id8D,
      data.originType,
      data.createdDate
    ]);
  }
  catch (error) {
    console.log(error);
    throw error;
  }
};
exports.updateAttributeRecord = async (data, recordId) => {
  console.log("TCL: exports.updateAttributeRecord -> data", data)
  try {
    await mySql.query(sql.UPDATE_ATTRIBUTE_INFORMATION, [
      data.systemAttributeName,
      data.systemAttributeDesc,
      data.modifiedDate,
      recordId
    ]);
  }
  catch (error) {
    console.log(error);
    throw error;
  }
};
