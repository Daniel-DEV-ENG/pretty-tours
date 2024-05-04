import { useEffect, useState } from "react";
import axios from "axios";

const ContactApi = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get(`https://backend.prettytours.net/api/contact-us`);
        setData(response.data?.data);
      } catch (error) {
      }
    };
    
    GetData();
  }, []);

  return data;
};

export default ContactApi;
