import React from "react";
import video1 from "../../components/images/show-video.mp4";
import "./home.css";

function Home() {
  return (
    <>
      <div className="video-container">
        <div className="video-container-text">
          <div>
            <h1>
              <span>Welcome&nbsp;</span>
              <span> to&nbsp;</span>
              <span> a&nbsp;</span>
              <span> new&nbsp;</span>
              <span> Comunity&nbsp;</span>
            </h1>
          </div>
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
