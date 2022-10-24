import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";

import "../shows/ShowTemplate.css";

function UsersTemplate({
  id,
  name,
  picture,
  city,
  age,
  description,
  band,
  song,
  alterego,
  ilustrator,
  book,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="box">
        <div className="image">
          <div className="d-felx show-item flex-column">
            <img
              className="w-100 rounded-1"
              width="250"
              height="250"
              src={picture}
              alt={name}
            />
          </div>
          <div className="info">
            <div className="mt-2 fs-2 justify-content-between align-items-baseline">
              <h3 className="m-2 fs-4"> {name}</h3>
              <h6 className="m-2 fs-6 fw-lighter"> Home: {city}</h6>
              <h6 className="m-2 fs-6 fw-lighter"> Age: {age}</h6>
              <h6 className="m-2 fs-6 fw-lighter">My inspiration: {alterego}</h6>
              <h6 className="m-2 fs-6 fw-lighter">My favorite band: {band}</h6>
              <h6 className="m-2 fs-6 fw-lighter">My favorite song: {song}</h6>
              <h6 className="m-2 fs-6 fw-lighter">I love this book: {book}</h6>
              <h6 className="m-2 fs-6 fw-lighter">My favorite ilustrator is: {ilustrator}</h6>
              <Link className="m-2 fs-5 fw-lighter" to={`/user/${id}`}>
              Info about me!
            </Link>
           
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default UsersTemplate;
