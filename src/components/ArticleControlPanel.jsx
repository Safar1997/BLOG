import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import Like from './Like';
import history from '../history';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { deleteArticleAction } from '../store/actions';

const ArticleControlPanel = ({ article, user }) => {
  const { author = {}, slug } = article;
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteArticleAction(slug));
    history.push(`/`);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '20px' }}>
        <Like article={article} />
      </span>
      {user.username === author.username && (
        <div>
          <Button
            type="primary"
            size="large"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => {
              history.push(`/articles/${slug}/edit`);
            }}
          />
          <Button
            type="danger"
            size="large"
            shape="circle"
            icon={<CloseCircleOutlined />}
            onClick={handleDeleteClick}
          />
        </div>
      )}
    </div>
  );
};

ArticleControlPanel.propTypes = {
  article: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object),
};

ArticleControlPanel.defaultProps = {
  article: {},
  user: {},
};

export default ArticleControlPanel;
