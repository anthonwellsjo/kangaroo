export const getUsers = () => {
  axios.get(`https://kangaroo-auth-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
    .then(res => {
      console.log("got user data", data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    })
}