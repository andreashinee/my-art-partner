import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1/users",
});

export function getUsers() {
  return http.get("/").then((res) => res.data);
}

export function getUser(id) {
  return http.get(`/${id}`).then((res) => res.data);
}