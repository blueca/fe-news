const axios = require('axios');

const request = axios.create({
  baseURL: 'https://nicks-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic) => {
  console.log(topic);
  if (topic === 'all') {
    const { data } = await request.get('/articles');
    return data.articles;
  } else {
    const { data } = await request.get('/articles', { params: { topic } });
    return data.articles;
  }
};

export const getTopics = async () => {
  const { data } = await request.get('/topics');
  return data.topics;
};
