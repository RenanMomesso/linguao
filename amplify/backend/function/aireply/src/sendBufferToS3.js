const aws = require("aws-sdk");

const s3 = new aws.S3();
const key = `audio/${Date.now()}-speech.mp3`;

const bucketName = "linguaoimagebucket13eb4-dev";

const uploadBufferToS3 = async (buffer) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: buffer,
    ContentType: "audio/mp3",
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully at ${data.Location}`);
    return data.Location;
  } catch (err) {
    console.error("Error uploading file to S3:", err);
    throw err;
  }
};

module.exports = { uploadBufferToS3 };
