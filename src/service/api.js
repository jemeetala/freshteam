import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    accept: "application/json",
    Authorization: "Bearer VCcK26hV70FYHIsD2h2spA",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getEmployees = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-team.freshteam.com/api/employees`,
    method: "get",
    params,
    headers,
    data,
  });
};
