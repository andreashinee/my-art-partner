import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true
});

export function getShows() {
  return http.get("/shows").then((res) => res.data);
}

export function getShow(id) {
  return http.get(`/shows/${id}`).then((res) => res.data);
}