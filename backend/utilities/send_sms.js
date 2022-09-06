require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello from Starting Strength!',
     from: '+19706144722',
     to: '+17344742903'
   })
  .then(message => console.log(message.sid));