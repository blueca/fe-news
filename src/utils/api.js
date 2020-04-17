const axios = require('axios');

const request = axios.create({
  baseURL: 'https://nicks-nc-news.herokuapp.com/api',
});

//limit of 100 until pagination is implemented
export const getArticles = async (topic, sorting) => {
  const { sort_by, order } = sorting;
  topic = topic === 'all' ? undefined : topic;
  const { data } = await request.get('/articles', {
    params: { topic, sort_by, order, limit: 100 },
  });

  return data.articles;
};

//limit of 100 until pagination is implemented
export const getSingleArticle = async (article_id) => {
  const fetchedArticle = await request.get(`articles/${article_id}`);
  const fetchedComments = await request.get(
    `articles/${article_id}/comments?limit=100`
  );
  const { article } = fetchedArticle.data;
  const { comments } = fetchedComments.data;

  return { article, comments };
};

export const getTopics = async () => {
  const { data } = await request.get('/topics');

  return data.topics;
};

export const postComment = async (article_id, comment) => {
  const { data } = await request.post(
    `/articles/${article_id}/comments`,
    comment
  );

  return data.comment;
};

export const deleteComment = async (comment_id) => {
  await request.delete(`/comments/${comment_id}`);
};

export const patchVote = async (id, votee, inc_votes) => {
  const { data } = await request.patch(`/${votee}/${id}`, {
    inc_votes,
  });

  return data.comment;
};

export const getUser = async (username) => {
  const { data } = await request.get(`/users/${username}`);

  return data.user;
};
