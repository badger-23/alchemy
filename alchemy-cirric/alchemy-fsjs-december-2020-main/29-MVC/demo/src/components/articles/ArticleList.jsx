import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import styles from './ArticleList.css';

const ArticleList = ({ articles }) => {
  if (articles.length < 1) return <h1>Make a search....</h1>;

  const articleElements = articles.map((article) => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles" className={styles.ArticleList}>
      {articleElements}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleList;
