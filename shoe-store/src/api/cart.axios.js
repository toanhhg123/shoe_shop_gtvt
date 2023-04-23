import server from "./axios";

export const AddToCart = async (id) => {
  try {
    const { data } = await server.post("/api/GioHangs?sanPhamId=" + id);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const DeleteCart = async (id) => {
  try {
    const { data } = await server.delete("/api/GioHangs/" + id);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
