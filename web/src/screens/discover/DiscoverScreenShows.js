import React from "react";
import Section from "../../components/sections/Section";
import Shows from "../../components/shows/Shows";
import { useNavigate } from 'react-router-dom';


function DiscoverScreenShows() {
  const navigate = useNavigate()


  return (
   

    <>
       <button onClick={() =>navigate("/AddShow")}>Add a Show!</button>
      <Section title="For today" icon="watch" className="mb-3">
        <Shows />
      </Section>

    </>

   
  );
}

export default DiscoverScreenShows;
