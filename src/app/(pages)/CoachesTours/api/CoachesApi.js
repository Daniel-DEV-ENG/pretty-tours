import { useEffect, useState } from "react";
import axios from "axios";

const CoachesApi = () => {
  const [data, setData] = useState(null);
  


  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get(`https://backend.prettytours.net/api/coach-tours`);
        setData(response.data?.data);
      } catch (error) {
      }
    };
    
    GetData();
  }, []);

  return data;
};

export default CoachesApi;
