/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_LINGUAO_GRAPHQLAPIIDOUTPUT
	API_LINGUAO_GRAPHQLAPIENDPOINTOUTPUT
	API_LINGUAO_GRAPHQLAPIKEYOUTPUT
	API_LINGUAO_MESSAGETABLE_NAME
	API_LINGUAO_MESSAGETABLE_ARN
	linguaoaireply
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { sendMessageToOpenAI } = require("./openAiService");
const { generateSpeechFromText } = require("./textToSpeech");
const { uploadBufferToS3 } = require("./sendBufferToS3");

exports.handler = async event => {
  const userText = event.arguments.userAudio;
  if (!userText) {
    return {
      statusCode: 400,
      text: "No userAudio provided",
    };
  }
  const generateText = await sendMessageToOpenAI(userText);
  const generatedTextResponse = generateText.choices[0].message.content;
  if (!generatedTextResponse) {
    return {
      statusCode: 400,
      text: "No content in generateText",
    };
  }
  const generateSpeech = await generateSpeechFromText(
    generateText.choices[0].message.content,
  );
  const sendToS3 = await uploadBufferToS3(generateSpeech);

  return {
    statusCode: 200,
    text: generatedTextResponse,
    audio: sendToS3,
  };
};
