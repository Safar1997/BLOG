import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import ArticlesList from '../components/ArticlesLists';
import { articlesAction, changePageAction } from '../store/actions';
import UserProfile from '../components/UserProfile';

const Home = () => {
  const { loggedIn } = useSelector(state => state.userParametrs);
  const dispatch = useDispatch();
  const { currentPage, pageSize, articlesCount, params } = useSelector(({ articlesParametrs, pageSettings }) => ({
    articles: articlesParametrs.articles,
    articlesCount: articlesParametrs.articlesCount,
    currentPage: pageSettings.currentPage,
    pageSize: pageSettings.pageSize,
    params: articlesParametrs.params,
  }));

  useEffect(() => {
    dispatch(articlesAction({ limit: 10 }));
  }, []);

  const handlePageChange = page => {
    dispatch(changePageAction(page));
    dispatch(articlesAction({ ...params, offset: (page - 1) * pageSize }));
  };

  return (
    <div style={{ padding: '40px', display: 'flex' }}>
      {loggedIn && <UserProfile />}
      <div style={{ flexGrow: '1' }}>
        <ArticlesList />
        {articlesCount > pageSize && (
          <Pagination
            style={{ marginTop: '30px' }}
            current={currentPage}
            total={articlesCount}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
