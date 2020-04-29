import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import ArticlePreview from './ArticlePreview';
import { articlesAction } from '../store/actions';

const ArticlesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    articlesAction({ limit: 10 })(dispatch);
  }, []);

  const { articles, isLoading } = useSelector(state => ({
    articles: state.articles.articles,
    isLoading: state.articles.isLoading,
  }));

  const list = articles.map(article => <ArticlePreview key={article.slug} article={article} />);
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '10px',
    backgroundColor: 'white', 
  };

  return isLoading ? (
    <Spin tip="Loading..." style={{ width: '100%' }} size="large" />
  ) : (
    <div style={styles}>{list}</div>
  );
};

export default ArticlesList;
