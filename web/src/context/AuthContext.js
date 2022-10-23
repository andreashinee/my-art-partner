import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")));

  function login(registerUser) {
    setRegisterUser(registerUser);
    localStorage.setItem("registerUser", JSON.stringify(registerUser))
  }

  const value = { registerUser, setRegisterUser: login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;