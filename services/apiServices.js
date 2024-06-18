// src/services/apiService.js

import axios from 'axios';

const baseURL = 'http://broker.hivemq.com:1883'; // Replace with your API base URL

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDashboardData = async () => {
  try {
    const response = await apiService.get('/your-api-endpoint'); // Replace with actual endpoint
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch dashboard data');
  }
};
