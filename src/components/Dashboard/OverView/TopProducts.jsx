import { ErrorDisplay } from "@/components/Error/ErrorDisplay";
import LoadingMaterials from "@/components/Loading/LoadingMaterials";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://sugarytestapi.azurewebsites.net";

const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/Materials/GetAll/`);
  return response.data;
};

const TopProducts = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const sortedProducts = data?.Materials.sort(
        (a, b) => b.SalesPrice - a.SalesPrice
      ).slice(0, 5);
      setTopProducts(sortedProducts);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <LoadingMaterials />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorDisplay error={error} onRetry={() => refetch()} />
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-purple-700">
        Top 5 Products
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-purple-50 text-purple-700">
            <tr>
              <th className="p-3 border-b font-semibold">Image</th>
              <th className="p-3 border-b font-semibold">Title</th>
              <th className="p-3 border-b font-semibold">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr
                key={product.Id}
                className="hover:bg-purple-50 transition-colors duration-200"
              >
                <td className="p-3 border-b">
                  <img
                    src={`https://d1wh1xji6f82aw.cloudfront.net/${product.CoverPhoto}`}
                    alt={product.Title}
                    className="w-[80px] h-[70px] object-cover rounded"
                  />
                </td>
                <td className="p-3 border-b font-medium text-gray-800">
                  {product.Title}
                </td>
                <td className="p-3 border-b text-gray-600">
                  {product.SalesPrice}$
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
