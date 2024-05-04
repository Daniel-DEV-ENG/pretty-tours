import { useEffect, useState } from "react";
import axios from "axios";

const GetUser = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const GetData = async () => {
            try {
                const response = await axios.get(
                    "https://backend.prettytours.net/api/user",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fix the typo here
                        },
                    }
                );
                setData(response.data?.data);
            } catch (error) {
                // Handle errors if needed
            }
        };

        GetData();
    }, []);

    return data;
};

export default GetUser;
