import React, { useState, useEffect } from "react";
import * as userService from "../../services/user-service";
import "./User.css"


import { useParams } from "react-router-dom";

function UserTemplateMore({
  title,
  picture,
  city,
  date,
  location,
  description,
}) {
  const [userOne, setUserOne] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    userService.getSingleUser(id).then((user) => setUserOne(user));
  }, [id]);

  return (
    <>
      <div className="box">
        <div className="image">
          <div className="d-felx user-item flex-column">
            <img
              className="w-100 rounded-1"
              width="250"
              height="250"
              src={userOne?.picture}
              alt={userOne?.name}
            />
          </div>
          <div className="info">
            <div className="mt-3 justify-content-between align-items-baseline">
              <h3 className="m-3 fs-1"> {userOne?.name}</h3>
              <h6 className="m-3 fs-4 fw-lighter"> {userOne?.city}</h6>
              <h6 className="m-3 fs-5 fw-lighter"> {userOne?.description}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTemplateMore;
