export const verifyUser = async (event, callback) => {
  event.response.autoConfirmUser = true;
  if (event.request.userAttributes.hasOwnProperty("email")) {
    event.response.autoVerifyEmail = true;
  }

  if (event.request.userAttributes.hasOwnProperty("phone_number")) {
    event.response.autoVerifyPhone = true;
  }

  callback(null, event);
};
