import React from "react";
import Section from "../../components/sections/Section";
import Users from "../../components/users/Users";
import { useNavigate } from "react-router-dom";
import './DescoverScreen.css'

function DiscoverScreenUsers() {
  const navigate = useNavigate();

  return (
    <>
      <br />
      <h2>Partners</h2>
      <br />
      <button onClick={() => navigate("/Register")}>Register now!</button>
      <br />
      <Section title="For today" icon="watch" className="mb-3">
        <Users />
      </Section>
    </>
  );
}

export default DiscoverScreenUsers;
