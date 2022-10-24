import React, { useState, useEffect } from "react";
import * as showService from "../../services/show-service";

import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";

function ShowTemplateMore({
  title,
  picture,
  city,
  date,
  location,
  description,
}) {
  const [showOne, setShowOne] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    showService.getSingleShow(id).then((sho) => setShowOne(sho));
  }, [id]);
  console.log("que", showOne);

  return (
    <div className="d-felx show-item flex-column">
      <img
        className="w-100 rounded-1"
        width="250"
        height="250"
        src={showOne?.picture}
        alt={showOne?.title}
      />
      <div className="mt-3 justify-content-between align-items-baseline">
        <h3 className="m-3 fs-1"> {showOne?.title}</h3>
        <h6 className="m-3 fs-4 fw-lighter"> {showOne?.city}</h6>
        <h6 className="m-3 fs-5 fw-lighter"> Location: {showOne?.location}</h6>
        <h6 className="m-3 fs-5 fw-lighter"> {showOne?.description}</h6>
        <h6 className="m-3 fs-5 fw-lighter"> Duration: {showOne?.duration} hours</h6>
        <h6 className="m-3 fs-5 fw-lighter"> Price: {showOne?.price} €</h6>
        <h6 className="m-3 fs-5 fw-lighter"> Organizer: {showOne?.url} </h6>
        <h6 className="m-3 fs-5 fw-lighter">
          {" "}
          Date: {moment(showOne?.date).utc().format("DD-MM-YYYY")}
        </h6>
      </div>
    </div>
  );
}

export default ShowTemplateMore;
