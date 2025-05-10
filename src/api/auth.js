import axios from "axios";

const API_URL = "https://sugarytestapi.azurewebsites.net";

export const login = async ({ username, password }) => {
  const response = await axios.post(`${API_URL}/AdminAccount/Login`, {
    UserName: username,
    Password: password,
  });
  return response.data;
};

export const refreshToken = async (Token, RefreshToken) => {
  try {
    const response = await axios.post(`${API_URL}/Account/RefreshToken`, {
      AccessToken: Token,
      RefreshToken: RefreshToken,
    });
    const newTokens = response.data;

    const updatedAuth = {
      ...auth,
      Token: newTokens.Token,
      RefreshToken: newTokens.RefreshToken,
    };

    localStorage.setItem("auth", JSON.stringify(updatedAuth));
    return updatedAuth;
  } catch (error) {
    console.error(
      "Token refresh failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
