DROP TABLE IF EXISTS espionages;

CREATE TABLE espionages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  meeting_id TEXT NOT NULL,
  complete BOOLEAN NOT NULL,
  call_sid TEXT,
  notify TEXT,
  duration_in_seconds INTEGER CHECK (duration_in_seconds > 0),
  recording_url TEXT
);
