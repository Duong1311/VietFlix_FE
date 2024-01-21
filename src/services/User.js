import axios from "./CustomizeAxios";

const getUserInfo = (message) => {
  const api = "members/viewMemberInfo/" + message;
  return axios.get(api);
};

export { getUserInfo };
