import React, { useState, useEffect } from "react";
import * as showService from "../../services/show-service";

import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";


function ShowTemplateMore({ title, picture, city, date, location, description }) {
  const [showOne, setShowOne] = useState(null)
  const {id} = useParams();
  useEffect (() => {
      showService.getSingleShow(id)
      .then((sho) => setShowOne(sho))
  },[id])
  console.log("que", showOne)

  return (
    <div className="d-felx show-item flex-column">
      <img
        className="w-100 rounded-1"
        width="250"
        height="250"
        src={picture}
        alt={title}
      />
      <div className="mt-1 justify-content-between align-items-baseline">
        <h3 className="m-0 fs-4 fw-lighter"> {showOne?.title}</h3>
        <h6 className="m-0 fs-4 fw-lighter"> {showOne?.city}</h6>
        <h6 className="m-0 fs-4 fw-lighter"> {showOne?.location}</h6>
        <h6 className="m-0 fs-4 fw-lighter"> {showOne?.description}</h6>
        <h6 className="m-0 fs-4 fw-lighter"> {moment(showOne?.date).utc().format("DD-MM-YYYY")}</h6>
      </div>
    </div>
  );
}

export default ShowTemplateMore;


