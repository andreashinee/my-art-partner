import React from "react";
import video1 from "../../components/images/show-video.mp4";
import "./home.css";

function Home() {
  return (
    <>
      <div className="video-container">
        <div className="video-container-text">
          <div>Welcome to a new community</div>
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
          src={video1}
          autoPlay

        />
      </div>
    </>
  );
}

export default Home;
