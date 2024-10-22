const client = require('twilio')('AC3adb89f0797303ea5987ee2b8f7afc3a', '2213481761ffce82cb56f4a1c7393745');
const { twiml } = require('twilio');


const response = new twiml.VoiceResponse();
response.record({ maxLength: 5 });
response.say({ voice: 'alice' }, 'Join the singularity');
// dial -> wait -> enter meeting id + # -> wait -> # -> wait -> *6
client.calls
  .create({
    twiml: response.toString(),
    to: '+16465588656',
    from: '+16157515375',
    sendDigits: '119978303#ww#wwwwwwwwwwwwwwwwwwwwwwwwww*6'
  })
  .then(console.log)
  .catch(console.log);
