import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Get all products
export const fetchAllData = async (_id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/find-item/${_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it to the calling code
  }
};

const GetAllProducts = (_id) => {
  // Using React-query for Better Data Handling
  return useQuery({
    queryKey: ["SpecificProduct", _id],
    queryFn: fetchAllData,
    config: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
    cacheTime: 10000,
    staleTime: 1000,
  });
};

export default GetAllProducts;
