import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import { Card, Tag } from 'antd';
import Like from './Like';

import * as _ from 'lodash';

const { Meta } = Card;

const ArticlePreview = ({ article }) => {
  const { title, author, description, createdAt, slug, tagList } = article;
  const formattedDate = formatDistance(new Date(createdAt), new Date());

  const readMore = () => {
    localStorage.setItem('openedArticle', JSON.stringify(article));
  };
  return (
    <Card hoverable title={title} extra={<Like article={article} />}>
      <p>{description}</p>
      <Link to={`/articles/${slug}`} onClick={readMore}>
        Read more...
      </Link>
      <Meta description={`Created ${formattedDate} ago`} />
      <Meta description={`Author ${author.username}`} />
      {tagList.length > 0 && (
        <p>
          Тэги:
          {tagList.map(tag => (
            <Tag key={_.uniqueId()}>{tag}</Tag>
          ))}
        </p>
      )}
    </Card>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default ArticlePreview;
