import React from "react";
import video2 from "../../components/images/people-video.mp4";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="video-container-user">
        <div className="video-container-text-user">
          <div>            <h1>
              <span>Who&nbsp;</span>
              <span> are&nbsp;</span>
              <span> we&nbsp;</span>
              <span> ?&nbsp;</span>
            </h1></div>
          <p>
            {" "}
            We are a community of people who love music. This is a safe space
            where you can meet people like you! People who like the same music
            as you! <br></br>You will never go to concerts alone again. it's over! <br></br>This
            app is designed to announce all the current concerts in Spanish
            territory for the moment. We hope to grow a lot and become a
            worldwide community! <br></br>Important: This community is based on respect.
            Any racist, homophobic, sexist, classist behavior or insults will be
            grounds for expulsion.
          </p>
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
        />
      </div>
    </>
  );
}

export default AboutUs;
