// src/api/jobs.jsx
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const getJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request !== undefined) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
  }
};

const getJob = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
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
};

const searchJob = async (search, page = 1, limit = 10, sort= 'asc', jobType = 'all') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs`, {
      params: { search, page, limit, sort, jobType },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
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
};

const getPagination = async (page = 1, limit = 10, sort = '', jobType = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pub/jobs`, {
      params: { page, limit, sort, jobType },
    });
    return response.data;
  } catch (error) {
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
  return null;
};

export { getJobs, getJob, searchJob, getPagination };