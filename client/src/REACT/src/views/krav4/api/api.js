import axios from 'axios';

export let getUsers = new Promise((resolve, reject) => {
  axios.get(`https://kangaroo-auth-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    })
})

export const postUser = (userData) => new Promise((resolve, reject) => {
  axios.post(`https://kangaroo-auth-default-rtdb.europe-west1.firebasedatabase.app/users.json`, userData)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    })
})

export const deleteUser = (userId) => new Promise((resolve, reject) => {
  axios.delete(`https://kangaroo-auth-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    })
})

export const postChild = (userId, child) => new Promise((resolve, reject) => {
  axios.post(`https://kangaroo-auth-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/children.json`, child)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    })
})

export const getUserIdFromName = (users, name) => Object.keys(users).find(k => users[k].name == name);