import axios from "../api/axios";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { auth, loginUser, logoutUser } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.post("/Account/RefreshToken", {
        AccessToken: auth?.Token,
        RefreshToken: auth?.RefreshToken,
      });

      loginUser(response.data);

      return response.data.AccessToken;
    } catch (error) {
      logoutUser();
      return null;
    }
  };

  return refresh;
};

export default useRefreshToken;
