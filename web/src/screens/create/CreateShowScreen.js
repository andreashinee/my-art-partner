import React from "react";
import Section from "../../components/sections/Section";
import ShowForm from "../show-form/ShowForm";
import video4 from "../../components/images/band-video.mp4";
import "./CreateScreen.css";

function CreateShowScreen() {
  return (
    <>
      <h2>Add a Show!</h2>
      
      <br />
      <Section title=" " icon=" ">
        <div className="box-form ">
          <video
            style={{
              maxWidth: "23%",
              width: "2000px",
              margin: "5",
              objectFit: "cover",
              position: "relative",
              pointerEvents: "none",
            }}
            playsInline
            loop
            muted
            alt="All the devices"
            src={video4}
            autoPlay
            fluid={false}
          />

          <ShowForm></ShowForm>
        </div>
      </Section>
    </>
  );
}

export default CreateShowScreen;

//rfce
