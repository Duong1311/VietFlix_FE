import axios from "./CustomizeAxios";

const getUserInfo = (message) => {
  const api = "members/viewMemberInfo/" + message;
  return axios.get(api);
};
const getUserLogin = (email, pass) => {
  const api = "members/login/" + email + "-" + pass;
  return axios.get(api);
};

export { getUserInfo, getUserLogin };
