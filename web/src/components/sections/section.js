import React from "react";
import './Section.css'

function Section({ className, title, icon, children }) {
  return (
    <>
    <div className='screen'>
    <section className={className}>
      <h1 className="m-4 fw-light">
        {icon && <i className={`fa fa-${icon} me-1`} />}
        {title}
      </h1>
      <hr className="mt-0" />
      {children}
    </section>
    </div>
    </>
  );
}

Section.defaultProps = {
  className: "",
  icon: undefined,
};

export default Section;
