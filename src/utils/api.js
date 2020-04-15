const axios = require('axios');

const request = axios.create({
  baseURL: 'https://nicks-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic, sorting) => {
  const { sort_by, order } = sorting;
  if (topic === 'all') {
    const { data } = await request.get('/articles', {
      params: { sort_by, order },
    });
    return data.articles;
  } else {
    const { data } = await request.get('/articles', {
      params: { topic, sort_by, order },
    });
    return data.articles;
  }
};

export const getSingleArticle = async (article_id) => {
  const article = await request.get(`articles/${article_id}`);
  const comments = await request.get(`articles/${article_id}/comments`);
  return { article: article.data.article, comments: comments.data.comments };
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

export const patchVote = async (comment_id, inc_votes) => {
  const { data } = await request.patch(`/comments/${comment_id}`, {
    inc_votes,
  });

  return data.comment;
};
