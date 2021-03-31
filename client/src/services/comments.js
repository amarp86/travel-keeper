import api from "./api-config";

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const addComment = async (postId, commentId) => {
  const resp = await api.post(`/posts/${postId}/comments/${commentId}`);
  return resp.data;
};
