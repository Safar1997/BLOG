import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Navigation = props => {
  const { loggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(actions.logout());
    dispatch(actions.articlesAction({ limit: 10 }));
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px', display: 'flex' }}
    >
      <Menu.Item key="/home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      {!loggedIn && (
        <Menu.Item key="/login" style={{ marginLeft: 'auto' }}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
      {loggedIn && (
        <Menu.Item style={{ marginLeft: 'auto' }} onClick={handleLogoutClick}>
          Log out
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navigation;
