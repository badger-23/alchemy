import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = ({ title, url, image }) => (
  <a className={styles.Article} href={url}>
    <figure>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </a>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Article;
