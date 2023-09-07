import React from "react";
//import thumbnail from "../../../static/img/youtube-thumbnail.jpg";

export default function VideoTutorial() {
  return (
    <a
      style={{ position: "relative", display: "flex", alignItems: "flex-end", marginBottom: "8px" }}
      href='https://www.youtube.com/watch?v=Rqsy0nL4WK8'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={require("@site/static/img/youtube-thumbnail.jpg").default}
        alt='YouTube Tutorial'
        style={{ height: "100%" }}
      />
      <img
        src={require("@site/static/img/youtube-play-button.png").default}
        alt='YouTube Play button'
        style={{ position: "absolute", left: "50%", top: "50%", height: 64, transform: "translate(-50%, -50%)" }}
      />
      <span
        style={{
          background: "gray",
          position: "absolute",
          left: 0,
          bottom: 0,
          lineHeight: 3,
          paddingInline: "12px",
          fontSize: "large",
          fontWeight: 500,
          color: "white",
        }}
      >
        Watch On YouTube
      </span>
    </a>
  );
}
