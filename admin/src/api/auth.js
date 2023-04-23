import server from "./axios";

export const login = async (username, password) => {
  try {
    const { data } = await server.post(
      `/Authentication/login?phone=${username}&password=${password}`
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
