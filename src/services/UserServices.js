import axios from 'axios';

axios.defaults.baseURL = 'https://64419460fadc69b8e087884d.mockapi.io/';

export async function getUsersBase() {
  const response = await axios.get(`/users`);
  //   console.log(response.data);
  return response.data;
}
