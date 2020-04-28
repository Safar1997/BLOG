import React from 'react';
import PropTypes from 'prop-types';
import { HeartTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Like = ({ article }) => {
    const dispatch = useDispatch();
    const { favorited, favoritesCount, slug } = article;
    
    const Like = () => dispatch(actions.setFavoriteAction(slug));
    const doesntLike = () => dispatch(actions.unsetFavoriteAction(slug));
    return (
      <div>
        <HeartTwoTone
          twoToneColor={favorited ? "#eb2f96" : '#52c41a'} 
          style={{ fontSize: '20px' }}
          onClick={favorited ? doesntLike : Like}
        />
        <span style={{ fontSize: '22px' }}>{favoritesCount}</span>
      </div>
    );
  };
  
  Like.propTypes = {
    article: PropTypes.instanceOf(Object).isRequired,
  };
  
  export default Like;