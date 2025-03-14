import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api', // Replace with your actual backend URL
  baseURL: 'https://lms-sitesculptors-backend.onrender.com/api',
});

export default instance;
