import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password });
};
