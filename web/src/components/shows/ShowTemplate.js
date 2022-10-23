import React from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

import "./ShowTemplate.css";

function ShowTemplate({ id, title, picture, city, date }) {
  const navigate = useNavigate();
  return (
    <div className="d-felx show-item flex-column">
      <img
        className="w-100 rounded-1"
        width="250"
        height="250"
        src={picture}
        alt={title}
      />
      <div className="mt-2 fs-2 justify-content-between align-items-baseline">
        <h3 className="m-2 fs-4"> {title}</h3>
        <h6 className="m-2 fs-6 fw-lighter"> {city}</h6>
        <h6 className="m-2 fs-6 fw-lighter">
          {" "}
          {moment(date).utc().format("DD-MM-YYYY")}
        </h6>
        <Link className="m-2 fs-5 fw-lighter" to={`/shows/${id}`}>
          More information!
        </Link>
      </div>
    </div>
  );
}
export default ShowTemplate;
