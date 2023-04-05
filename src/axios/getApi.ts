import axios from 'axios';
export const blogApi = axios.create({
    baseURL:'https://postsapi-production-8963.up.railway.app/api'
});


