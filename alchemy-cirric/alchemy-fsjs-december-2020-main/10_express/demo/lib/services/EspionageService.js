const Espionage = require('../models/Espionage');
const { spy } = require('../utils/twilio');

module.exports = class EspionageService {
  static async start({ meetingId, notify, durationInSeconds }) {
    // insert a new espionage in the db
    const espionage = await Espionage.insert({
      meetingId,
      notify,
      durationInSeconds,
      complete: false,
      callSid: null
    });

    // initialize a twilo call to the meeting id
    const { sid } = await spy(meetingId, notify, durationInSeconds);
    await Espionage.update(espionage.id,  { ...espionage, callSid: sid });

    // return the created espionage
    return espionage;
  }

  static async complete({ CallSid, RecordingUrl }) {
    const espionage = await Espionage.findByCallSid(CallSid);

    return Espionage.update(espionage.id, {
      ...espionage,
      complete: true,
      recordingUrl: RecordingUrl
    });
  }
};
