const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

const spy = (meetingId, text, duration) => {
  const response = new twilio.twiml.VoiceResponse();
  response.record({
    recordingStatusCallback: `${process.env.HOST_NAME}/api/v1/espionages/update`,
    playBeep: false,
    maxLength: duration
  });
  response.say(text);

  return client.calls
    .create({
      twiml: response.toString(),
      to: '+16465588656',
      from: process.env.TWILIO_NUMBER,
      sendDigits: `${meetingId}#ww#wwwwwwwwwwwwwwwwwwwwwwwwwwwww*6`
    });
};

module.exports = {
  spy
};
