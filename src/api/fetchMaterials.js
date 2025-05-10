import axios from "axios";

const API_URL = "https://sugarytestapi.azurewebsites.net";

export const fetchMaterials = async ({ pageProps = 1 }) => {
  const filter = {
    Skip: (pageProps - 1) * 20,
    Limit: 20,
    Types: [1],
  };
  const encodedFilter = btoa(JSON.stringify(filter));
  const response = await axios.get(`${API_URL}/Materials/GetAll/`, {
    params: { filter: encodedFilter },
  });
  return {
    materials: response.data.Materials,
    nextPage: pageProps + 1,
    total: response.data.TotalCount,
    hasMore: pageProps * 20 < response.data.TotalCount,
  };
};
