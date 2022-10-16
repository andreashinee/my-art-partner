import React from 'react'
import Section from '../../components/sections/Section'
import ShowForm from '../show-form/ShowForm'
import video4 from "../../components/images/band-video.mp4";
import './CreateScreen.css'


function CreateShowScreen() {
  return (
    <>
    <h2>Add a Show!</h2>
    <br />
    <Section title='Add a Show' icon='edit'>

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
          src={video4}
          autoPlay
          fluid={false}
          
        />

    <ShowForm></ShowForm>

    </Section>
    </>
  )
}

export default CreateShowScreen

//rfce