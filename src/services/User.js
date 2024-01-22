import axios from "./CustomizeAxios";

const getUserInfo = (message) => {
  const api = "members/viewMemberInfo/" + message;
  return axios.get(api);
};
const getUserLogin = (email, pass) => {
  const api = "members/login/" + email + "-" + pass;
  return axios.get(api);
};

const getUserPass = (member_id) => {
  const api = "members/getMemberPass/" + member_id;
  return axios.get(api);
};

const setUserInfo = (info) => {
  const api = "members/changeInfo";
  return axios.post(api, info);
};

//Package

const getListPackage = () => {
  return axios.get("package/viewAllPackage");
};

export { getUserInfo, getUserLogin, getUserPass, setUserInfo, getListPackage };
