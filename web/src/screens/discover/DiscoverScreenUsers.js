import React from "react";
import Section from "../../components/sections/Section";
import Users from "../../components/users/Users";

import "./DescoverScreen.css";

function DiscoverScreenUsers() {

  return (
    <>
      <div ClassName="screen">
        <br />
        <h2>Partners</h2>
        <br />
        <br />
        <br />
        <Section title=" " icon="watch" className="mb-3">
          <Users />
          </Section>
      </div>
    </>
  );
}

export default DiscoverScreenUsers;
