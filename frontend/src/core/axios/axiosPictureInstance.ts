import axios from "axios";

const pictureAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL_PICTURES,
  headers: { "Content-Type": "application/json" },
});

export default pictureAxios;
