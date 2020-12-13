import request from "./config";

export const createFactory = async (data) => {
  const response = await request.post("/factories", data);
  return response;
};

export const getFactories = async () => {
  const response = await request.get("/factories");
  return response;
};
