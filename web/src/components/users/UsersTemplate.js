import React from "react";

function UsersTemplate({ name, picture }) {
  return (
    <div className="d-felx show-item flex-column">
      <img
        className="w-100 rounded-1"
        width="250"
        height="250"
        src={picture}
        alt={name}
      />
      <div className="d-flex mt-1 justify-content-between align-items-baseline">
        <h3 className="m-0 fs-4 fw-lighter"> {name}</h3>
      </div>
    </div>
  );
}

export default UsersTemplate;
