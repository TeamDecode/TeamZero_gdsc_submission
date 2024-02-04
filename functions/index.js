const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// Example of a simple HTTP Cloud Function
exports.helloWorld = functions.https.onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
