import api from "./api-config";

export const getAllLikes = async (id) => {
  const resp = await api.get(`/posts/${id}/likes`);
  return resp.data;
};

export const createLike = async (post_id, body) => {
  const resp = await api.post(`/posts/${post_id}/likes`, body);
  return resp.data;
};
