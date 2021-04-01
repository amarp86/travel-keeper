import api from "./api-config";

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const addComment = async (post_id) => {
  const resp = await api.post(`/posts/${post_id}/comments/`);
  return resp.data;
};
