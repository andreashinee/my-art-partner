import axios from "axios";

const http = axios.create({
  baseURL: "http//localhost:3001/api/v1/partners",
});

export function getPartners() {
  return http.get("/").then((res) => res.data);
}

export function getPartner(id) {
  return http.get(`/${id}`).then((res) => res.data);
}
