import React, { Component } from "react";
import { Player } from "video-react";
import videofile from "../video/七里香.mp4";
import "../css/video.css";

const Video = props => {
  const { info, returnToSingleMusic } = props;
  return (
    <React.Fragment>
        <h1 className="video-title">{info.title}</h1>
      <div className="video-player">
      <Player
        playsInline
        poster={require("../img/七里香.jpg")}
        src={videofile}
      />
      </div>
      <button className="btn btn-secondary" id="video-btn" onClick={returnToSingleMusic}>
        Return
      </button>
    </React.Fragment>
  );
};

export default Video;
