import request from "./config";

export const createSector = async (id, data) => {
  const response = await request.post(`/factories/${id}/sectors`, data);
  return response;
};

export const getSectors = async (id) => {
  const response = await request.get(`/factories/${id}/sectors`);
  return response;
};
