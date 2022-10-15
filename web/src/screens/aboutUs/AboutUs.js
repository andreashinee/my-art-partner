import React from 'react'
import video2 from '../../components/images/people-video.mp4'

function AboutUs() {
  return (
    <>
    <video
          style={{ maxWidth: "100%", width: "2000px", margin: "5", objectFit: "cover",position: "relative", pointerEvents: "none" }}
          playsInline
          loop
          muted
          alt="All the devices"
          src={video2}
          autoPlay
          fluid={false}
          

        />
    </>
  )
}

export default AboutUs