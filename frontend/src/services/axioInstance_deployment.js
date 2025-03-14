import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://lms-sitesculptors-backend.onrender.com/api', // Replace with your actual backend URL
});

export default instance;
