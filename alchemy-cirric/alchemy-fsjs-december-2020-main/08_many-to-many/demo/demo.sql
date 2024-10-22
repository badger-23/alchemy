CREATE TABLE tweets (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  text VARCHAR(256) NOT NULL
);

CREATE TABLE tags (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE tweets_tags (
  tweet_id BIGINT REFERENCES tweets(id),
  tag_id BIGINT REFERENCES tags(id),
  PRIMARY KEY (tweet_id, tag_id)
);


INSERT INTO tags (title) VALUES ('pdx');
INSERT INTO tags (title) VALUES ('portland');
INSERT INTO tags (title) VALUES ('pdxtech');
INSERT INTO tags (title) VALUES ('pdxfoodie');
INSERT INTO tags (title) VALUES ('pdxgraffiti');

INSERT INTO tweets (text) VALUES ('raining...again');
INSERT INTO tweets (text) VALUES ('heading to the react meetup');
INSERT INTO tweets (text) VALUES ('best food ever');
INSERT INTO tweets (text) VALUES ('art');
INSERT INTO tweets (text) VALUES ('next.js conf in a few days!');
INSERT INTO tweets (text) VALUES ('sceendoor good as always');
INSERT INTO tweets (text) VALUES ('baes yum!');

SELECT * FROM tags
SELECT * FROM tweets;

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (1, 1);
INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (1, 2);

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (2, 1);
INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (2, 2);
INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (2, 3);

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (3, 1);
INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (3, 4);

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (4, 5);

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (5, 1);
INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (5, 3);

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (6, 4);

INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (7, 1);
INSERT INTO tweets_tags (tweet_id, tag_id) VALUES (7, 4);

SELECT
	tags.title,
	array_agg(tweets.text)
FROM
	tweets_tags
JOIN tweets
ON tweets_tags.tweet_id = tweets.id
JOIN tags
ON tweets_tags.tag_id = tags.id
WHERE tag_id = 1
GROUP BY tags.title;


SELECT
	tweets.*,
	array_agg(tags.title)
FROM
	tweets_tags
JOIN tags
ON tweets_tags.tag_id = tags.id
JOIN tweets
ON tweets_tags.tweet_id = tweets.id
WHERE tweets.id = 1
GROUP BY tweets.id, tweets.text;


SELECT
	tags.title,
	COUNT(*)
FROM
	tweets_tags
JOIN tags
ON tweets_tags.tag_id = tags.id
GROUP BY tags.title
ORDER BY count DESC
LIMIT 3
