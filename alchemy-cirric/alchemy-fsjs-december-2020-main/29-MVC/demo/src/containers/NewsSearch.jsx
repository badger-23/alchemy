import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { findArticles } from '../services/newsApi';

export default class NewSearch extends Component {
  state = {
    search: 'apple',
    articles: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    this.setState({ loading: true });
    findArticles(this.state.search).then((articles) =>
      this.setState({ articles, loading: false })
    );
  };

  handleSearch = ({ target }) => {
    this.setState({ search: target.value }, () => {
      this.fetchArticles();
    });
  };

  render() {
    const { search, articles, loading } = this.state;

    return (
      <>
        <Search search={search} onChange={this.handleSearch} />
        {loading && <h1>Loading</h1>}
        <ArticleList articles={articles} />
      </>
    );
  }
}
