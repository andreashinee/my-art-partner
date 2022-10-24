import React from "react";
import Section from "../../components/sections/Section";
import Shows from "../../components/shows/Shows";
import { useNavigate } from "react-router-dom";
import "./DescoverScreen.css";

function DiscoverScreenShows() {
  const navigate = useNavigate();

  return (
    <>
      <div ClassName='screen'>
      <br />
      <h2>Shows</h2>
      <br />
      <button onClick={() => navigate("/AddShow")}>Add a Show!</button>
      <br />
      <Section title=" " icon="watch" className="mb-3">
        <Shows />
      </Section>
      </div>
    </>
  );
}

export default DiscoverScreenShows;
