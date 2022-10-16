import React from 'react';
import Section from '../../components/sections/Section';
import UserForm from '../show-form/UserForm';
import video3 from "../../components/images/girl-user.mp4";
import './CreateScreen.css'


function CreateUserScreen() {
  return (
    <>
    <h2>Create your user</h2>
    <br />
    <Section title='Register now!' icon='edit'>

<video
          style={{
            maxWidth: "20%",
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
          src={video3}
          autoPlay
          fluid={false}
          
        />

    <UserForm></UserForm>

    </Section>
    </>
  )
}

export default CreateUserScreen