import React, { Component } from "react";
import { Player } from "video-react";
import videofile from "../video/七里香.mp4";
import { AwesomeButtonSocial } from "react-awesome-button";
import PropTypes from "prop-types";

import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import "react-awesome-button/dist/styles.css";
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
      <div className="video-btn">
        <AwesomeButtonSocial
          type="instagram"
          onClick={returnToSingleMusic}
        >
          Return
        </AwesomeButtonSocial>
        ;
      </div>
    </React.Fragment>
  );
};

export default Video;
