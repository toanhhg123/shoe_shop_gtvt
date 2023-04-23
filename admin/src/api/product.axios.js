import server from "./axios";

export const getAll = async () => {
  try {
    const { data } = await server.get("/api/product");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const create = async (body) => {
  try {
    const { data } = await server.post("/api/product", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductId = async (id) => {
  try {
    const { data } = await server.get("/api/product/" + id);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const update = async (body) => {
  try {
    const { data } = await server.put("/api/product/" + body.id, body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
