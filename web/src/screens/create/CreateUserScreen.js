import React from "react";
import Section from "../../components/sections/Section";
import UserForm from "../show-form/UserForm";
import video3 from "../../components/images/girl-user.mp4";
import "./CreateScreen.css";

function CreateUserScreen() {
  return (
    <>
      <h2>Create your user</h2>
      <br />
      <Section title=" " icon=" ">
        <div className="box-form ">
          <video
            style={{
              maxWidth: "22%",
              width: "1500px",
              margin: "5",
              objectFit: "cover",
              position: "relative",
              pointerEvents: "none",
            }}
            playsInline
            loop
            muted
            alt="All the devices"
            src={video3}
            autoPlay
            fluid={false}
          />
            <UserForm></UserForm>
          </div>

      </Section>
    </>
  );
}

export default CreateUserScreen;
