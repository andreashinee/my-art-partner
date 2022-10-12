import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1/shows",
});

export function getShows() {
  return http.get().then((res) => res.data);
}

export function getShow(id) {
  return http.get(`/${id}`).then((res) => res.data);
}