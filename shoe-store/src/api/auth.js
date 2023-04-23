import server from "./axios";

export const login = async (phone, password) => {
  try {
    const { data } = await server.post(
      `/Authentication/login?phone=${phone}&password=${password}`
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const register = async (body) => {
  try {
    const { data } = await server.post(`/Authentication/register`, body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserCurrent = async () => {
  try {
    const { data } = await server.get("/api/khachhangs/user");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
