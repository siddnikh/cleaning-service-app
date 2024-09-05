import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API request functions as needed
