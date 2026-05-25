import axiosInstance from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export const loginUser = async (data) => {

  // conssole.log("Logging in with data:", data); // Debugging statement
   const response = await axiosInstance.post(
    "/auth/login/",
    data
  );

  return response.data;
};


export const getCurrentUser = async () => {

  const response = await axiosInstance.get(
    "/auth/me/"
  );

  return response.data;
};