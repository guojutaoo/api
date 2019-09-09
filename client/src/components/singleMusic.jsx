import React from "react";
import "../css/singleMusic.css";
import AudioPlayer from "react-h5-audio-player";
import musicfile from "../music/周杰伦 - 七里香.mp3"; 

const SingeMusic = props => {
  const { music, returnMusicList, renderVideo } = props;
  const images = [
    require("../img/Jay.jpg"),
    require("../img/范特西.jpg"),
    require("../img/八度空间.jpg"),
    require("../img/叶惠美.jpg"),
    require("../img/七里香.jpg"),
    require("../img/11月的萧邦.jpg"),
    require("../img/依然范特西.jpg"),
    require("../img/牛仔很忙.jpg"),
    require("../img/摩羯座.jpg"),
    require("../img/跨时代.jpg"),
    require("../img/惊叹号.jpg"),
    require("../img/12月新作.jpg"),
    require("../img/哎呦，不错哦.jpg"),
    require("../img/周杰伦的床边故事.jpg")
  ];
  const image = images[music[0].albumId - 1];

  return (
    <React.Fragment>
      <div className="intro">
        <img src={image} alt="" />
        <div className="text">
          <p>Album: {music[0].title}</p>
          <p>ID: {music[0].albumId}</p>
          <p>Liricist: {music[0].lyricist}</p>
          <div className="audioplayer">
            <AudioPlayer src={musicfile} onPlay={e => console.log("onPlay")} />
          </div>
        </div>
      </div>
      <div className="download">
        <p className="download-link">Video: </p>
        <button className="btn btn-primary" id="btn-download" onClick={renderVideo}>
          Common
        </button>{" "}
        <button className="btn btn-primary" id="btn-download">
          Deluxe
        </button>
        {/* <ReactAudioPlayer src="" autoPlay controls /> */}
      </div>
      <button
        className="btn btn-success"
        id="btn-return"
        onClick={returnMusicList}
      >
        Return
      </button>
    </React.Fragment>
  );
};

export default SingeMusic;
