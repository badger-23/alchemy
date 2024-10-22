const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Espionage = require('../lib/models/Espionage');

describe('demo routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('creates a new espionage via POST', async() => {
    const response = await request(app)
      .post('/api/v1/espionages')
      .send({
        meetingId: '12345',
        notify: 'We hear you.',
        durationInSeconds: 30
      });

    expect(response.body).toEqual({
      id: '1',
      meetingId: '12345',
      complete: false,
      notify: 'We hear you.',
      durationInSeconds: 30,
      recordingUrl: null
    });
  });

  it('gets an espionage by id via GET', async() => {
    const espionage = await Espionage.insert({
      meetingId: '12345',
      complete: true,
      notify: 'We hear you.',
      durationInSeconds: 30,
      recordingUrl: 'http://test.com/recording.mp3'
    });

    const response = await request(app)
      .get(`/api/v1/espionages/${espionage.id}`);

    expect(response.body).toEqual(espionage);
  });
});
