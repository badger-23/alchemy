const pool = require('../utils/pool');

module.exports = class Espionage {
  id;
  meetingId;
  complete;
  callSid
  notify;
  durationInSeconds;
  recordingUrl;

  constructor(row) {
    this.id = row.id;
    this.meetingId = row.meeting_id;
    this.complete = row.complete;
    this.callSid = row.call_sid;
    this.notify = row.notify;
    this.durationInSeconds = row.duration_in_seconds;
    this.recordingUrl = row.recording_url;
  }

  static async insert(espionage) {
    const {
      meetingId,
      complete,
      callSid,
      notify,
      durationInSeconds,
      recordingUrl
    } = espionage;

    const { rows } = await pool.query(
      `INSERT INTO espionages
        (meeting_id, complete, call_sid, notify, duration_in_seconds, recording_url)
        VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [meetingId, complete, callSid, notify, durationInSeconds, recordingUrl]
    );

    return new Espionage(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM espionages WHERE id=$1',
      [id]
    );

    if(!rows[0]) throw new Error(`No espionage with id ${id} found`);

    return new Espionage(rows[0]);
  }

  static async findByCallSid(callSid) {
    const { rows } = await pool.query(
      'SELECT * FROM espionages WHERE call_sid=$1',
      [callSid]
    );

    if(!rows[0]) throw new Error(`No espionage with call_sid ${callSid} found`);

    return new Espionage(rows[0]);
  }

  static async update(id, { meetingId, complete, callSid, notify, durationInSeconds, recordingUrl }) {
    const { rows } = await pool.query(
      `UPDATE espionages
        SET meeting_id=$1,
            complete=$2,
            call_sid=$3,
            notify=$4,
            duration_in_seconds=$5,
            recording_url=$6
        WHERE id=$7
        RETURNING *`,
      [meetingId, complete, callSid, notify, durationInSeconds, recordingUrl, id]
    );

    if(!rows[0]) throw new Error(`No espionage with id ${id} found`);

    return new Espionage(rows[0]);
  }
};
