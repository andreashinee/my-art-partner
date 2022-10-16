import React from "react";
import video2 from "../../components/images/people-video.mp4";
import './AboutUs.css'

function AboutUs() {
  return (
    <>
      <div class="video-container-user">
        <div class="video-container-text-user">
          <div>Who we are?</div>
          <p> hddndjndjndjndj</p>
        </div>

        <video
          style={{
            maxWidth: "100%",
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
          src={video2}
          autoPlay
          fluid={false}
          
        />
      </div>

    </>
  );
}

export default AboutUs;
