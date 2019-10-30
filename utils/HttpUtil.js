/** Success message */
exports.getSuccess = (payLoad = null, message = 'OK') => {
  return {
    status: 200,
    errorCode: null,
    message,
    payLoad
  };

};
/** Success message for create and update */
exports.getCreated = (payLoad = null, message = 'created') => {
  return {
    status: 201,
    errorCode: null,
    messsage,
    payLoad
  }
}
/**  Bad Request */
exports.getBadRequest = (error = [null, 'Bad Request']) => {
  return {
    status: 400,
    errorCode: error[0],
    errorMessage: error[1],
    payLoad: null
  }

}
/** exception */

exports.getException = (error = [null, 'Internal Server Error']) => {
  return {
    status: 500,
    errorCode: error[0],
    errorMessage: error[1],
    payLoad: null
  }
}

