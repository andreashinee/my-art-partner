import React, { useState, useEffect } from "react";
import * as userService from "../../services/user-service";
import UserTemplateMore from "../users/UserTemplateMore";

function SingleUser() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getUsers()
      .then((user) => setUsers(user))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className=" row row-cols-12 row-cols-sm-6 row-cols-md-5">
        <UserTemplateMore />
      </div>
    </>
  );
}

export default SingleUser;
