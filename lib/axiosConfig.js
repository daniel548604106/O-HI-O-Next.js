import axios from "axios";
import Cookie from "js-cookie";

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${process.env.PUBLIC_URL}/api/v1/`
      : "http://localhost:3000/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookie.get("token")}`,
  },
});

export default request;
