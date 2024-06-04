/* Amplify Params - DO NOT EDIT
	API_LINGUAO_GRAPHQLAPIENDPOINTOUTPUT
	API_LINGUAO_GRAPHQLAPIIDOUTPUT
	API_LINGUAO_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const AppSyncID = process.env.API_LINGUAO_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppSyncID}-${env}`;

console.log({ TableName });

const userExists = async id => {
  console.log("🚀 ~ userExists ~ id:", id);
  const params = {
    TableName,
    Key: {
      id,
    },
  };
  try {
    const data = await ddb.get(params).promise();
    console.log("🚀 ~ userExists ~ data:", data);
    return data.Item;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

const saveUser = async user => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    ...user,
    __typename: "User",
    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
  };

  try {
    await ddb.put(params).promise();
    return user;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

exports.handler = async (event, context, callback) => {
  if (!event?.request?.userAttributes) {
    console.log("No user data available");
    return;
  }

  const { sub, name, email } = event.request.userAttributes; // {sub, email, name}

  const newUser = {
    id: sub,
    email,
    name,
    age: 20,
    languageLevel: 0
  };

  const id = event.request.userAttributes.sub;
  const user = {
    id,
  };
  console.log("User", user, await userExists(user.id));
  return event;
};
