// src/api/jobs.jsx
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";


const handleAxiosError = (error) => {
  if (error.response) {
    console.error("Error data:", error.response.data);
    console.error("Error status:", error.response.status);
    console.error("Error headers:", error.response.headers);
  } else if (error.request) {
    console.error("Error request:", error.request);
  } else {
    console.error("Error message:", error.message);
  }
  console.error("Error config:", error.config);
}

const getJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getJob = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const searchJob = async (search, page = 1, limit = 10, sort = 'asc', filter = 'all') => {
  try {
    const params = { 
      search,
      page, 
      limit, 
      sort, 
      filter: filter === 'all' ? '' : filter,
    };
    const response = await axios.get(`${API_BASE_URL}/pub/jobs`, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getPagination = async (page = 1, limit = 10, sort = '', filter = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs`, {
      params: { page, limit, sort, filter },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { getJobs, getJob, searchJob, getPagination };
