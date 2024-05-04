import { useEffect, useState } from "react";
import axios from "axios";

const AboutApi = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get(`https://backend.prettytours.net/api/about-us`);
        setData(response.data?.data);
      } catch (error) {
      }
    };
    
    GetData();
  }, []);

  return data;
};

export default AboutApi;
