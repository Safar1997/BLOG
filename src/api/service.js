import axios from 'axios';

const api = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

// Перехватываем запрос и перед отправкой добавляем заголовок авторизации, если такой имеется
api.interceptors.request.use(
  request => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};
    if (token) {
      request.headers.Authorization = `Token ${token}`;
    }
    return request;
  },
  err => Promise.reject(err)
);

export const login = async user => {
  const response = await api.post('/users/login', { user });
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data.user;
};

export const registration = async user => {
  const response = await api.post('/users', { user });
  return response.data.user;
};
// Query Parameters: tag, author, favorited, limit, offcet/skip
export const getArticles = async params => {
  const response = await api.get('/articles', { params });
  return response.data;
};
// id of particular page
export const getOneArticle = async slug => {
  const response = await api.get(`/articles/${slug}`);
  const {
    data: { article },
  } = response;
  return article;
};
// we know the specific url, so use put (update article)
export const editArticle = async (slug, articleInfo) => {
  const response = await api.put(`/articles/${slug}`, { article: articleInfo });
  const {
    data: { article },
  } = response;
  return article;
};

export const addArticle = async articleInfo => {
  const response = await api.post('/articles', { article: articleInfo });
  const {
    data: { article },
  } = response;
  return article;
};

export const deleteArticle = async slug => {
  const response = await api.delete(`/articles/${slug}`);
  return response;
};

export const setFavorite = async slug => {
  const response = await api.post(`/articles/${slug}/favorite`);
  const {
    data: { article },
  } = response;
  return article;
};

export const unsetFavorite = async slug => {
  const response = await api.delete(`/articles/${slug}/favorite`);
  const {
    data: { article },
  } = response;
  return article;
};

export default api;
