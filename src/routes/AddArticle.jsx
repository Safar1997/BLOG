import React from 'react';
import { useDispatch } from 'react-redux';
import ArticleForm from '../components/AddNewArticle';
import { addArticleAction } from '../store/actions';

const AddArticle = () => {
  const dispatch = useDispatch();
  const actionToDispatch = values => dispatch(addArticleAction(values));

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    backgroundColor: 'white',
  };

  return (
    <div className="wrapper" style={styles}>
        <div className="content" style={{ width: '500px' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <h1 style={{ marginLeft: 'auto' }}> Adding an atricle</h1>
          </div>
          <ArticleForm actionToDispatch={actionToDispatch} />
        </div>
    </div>
  );
};

export default AddArticle;
