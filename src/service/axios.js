import { getItem } from "@/helpers/persistaneStorge";
import auth from "@/modules/auth";
import axios  from "axios";

axios.defaults.baseURL = "http://localhost:3000/api"

axios.interceptors.request.use(config => {
  const token = getItem('token')
  const authorization = token ? `Token ${token}` : ''
  // console.log(authorization);
  config.headers.Authorization = authorization
  return config
})

export default axios