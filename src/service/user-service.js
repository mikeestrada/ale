const axios = require('axios');
const baseUrl = 'https://reqres.in/';

export function getUsers() {
    return axios.get(baseUrl + 'api/users?page=2');
}