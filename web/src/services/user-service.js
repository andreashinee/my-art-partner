import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function getUsers() {
  return http.get("/users").then((res) => res.data);
}

export function getUser(id) {
  return http.get(`/users/${id}`).then((res) => res.data);
}

export function createUser(user) {
  return http.post("/users", user).then((res) => res.data);

}

export function authenticate(data) {
  return http.post("/authenticate", data);
}



export function getSingleUser(id, data) {
  return http.get(`/user/${id}`, data).then((res) => res.data);
}

