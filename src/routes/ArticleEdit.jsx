import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Spin } from 'antd';
import ArticleForm from '../components/AddNewArticle';
import { editArticleAction } from '../store/actions';

const ArticleEdit = ({ match }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();
  const { article, isLoading } = useSelector(({ articlesParametrs }) => ({
    article: articlesParametrs.articles.find(item => item.slug === slug),
    isLoading: articlesParametrs.isLoading,
  }));
  const actionToDispatch = values => dispatch(editArticleAction(slug, values));
  // const storageArticle = JSON.parse(localStorage.getItem('openedArticle')); = isEmpty(article) ? storageArticle :
  const { title, body, description, tagList } = article;

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '70px',
  };

  return (
    <div className="wrapper" style={styles}>
      {isLoading ? (
        <Spin style={{ width: '100%' }} size="large" />
      ) : (
        <div className="content" style={{ width: '500px' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <h1 style={{ marginLeft: 'auto' }}> Редактирование статьи</h1>
          </div>
          <ArticleForm
            initialValues={{ title, body, description, tagList }}
            actionToDispatch={actionToDispatch}
          />
        </div>
      )}
    </div>
  );
};

ArticleEdit.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ArticleEdit;
