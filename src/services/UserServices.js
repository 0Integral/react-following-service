import axios from 'axios';

axios.defaults.baseURL = 'https://64419460fadc69b8e087884d.mockapi.io/';

export async function getUsersBase() {
  const res = await axios.get(`/users`);
  return res.data;
}

export async function getMoreUsersInfo(page = 1) {
  const res = await axios.get(`/users?page=${page}&limit=6`);
  return res.data;
}

export const updateUser = async ({ id, body }) => {
  const res = await axios.put(`/users/${id}`, body);
  return res.data;
};
