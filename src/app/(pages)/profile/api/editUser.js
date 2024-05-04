// editUser.js
import axios from 'axios';

export const editUserProfile = async (formData) => {
    try {
        const response = await axios.post(
            'https://backend.prettytours.net/api/user/profile',
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return response.data?.data;
    } catch (error) {
        // Handle errors if needed
        throw error;
    }
};
