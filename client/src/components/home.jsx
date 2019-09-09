import React, { Component } from "react";
import AlbumList from "./albumList";
import MusicList from "./musicList";
import SingeMusic from "./singleMusic";
import Video from "./video";
import axios from "axios";
import "../css/home.css";

class Home extends Component {
  state = { album: [], musics: [], music: [], video: [] };
  async componentDidMount() {
    axios.get("http://localhost:8080/album").then(res => {
      this.setState({ album: res.data });
    });
  }

  getMusic = async albumId => {
    axios.get("http://localhost:8080/music").then(res => {
      const musics = res.data.filter(data => data.albumId === albumId);
      this.setState({ musics });
    });
  };

  singleMusic = musicId => {
    const data = this.state.musics.filter(music => musicId === music._id);
    this.setState({ music: data });
  };

  goHomepage = () => {
    this.setState({ musics: [] });
  };

  returnMusicList = () => {
    this.setState({ music: [] });
  };

  returnToSingleMusic = () => {
    this.setState({music: this.state.video});
    this.setState({video: []})
  }

  renderVideo = () => {
    this.setState({ video: this.state.music });
    this.setState({music: []});
  }

  render() {
    const album = this.state.album;
    const musics = this.state.musics;
    const music = this.state.music;
    const video = this.state.video;
    console.log(video)
    return (
      <React.Fragment>
        {video.length === 0 &&
          music.length === 0 &&
          (musics.length === 0 && (
            <AlbumList album={album} onGetMusic={this.getMusic} />
          ))}
        {video.length === 0 && music.length === 0 && musics.length !== 0 && (
          <MusicList musics={musics} singleMusic={this.singleMusic} />
        )}
        {video.length === 0 && music.length !== 0 && (
          <SingeMusic music={music} returnMusicList={this.returnMusicList} renderVideo={this.renderVideo}/>
        )}
        {video.length === 0 && music.length === 0 && musics.length !== 0 && (
          <button
            className="btn btn-success"
            id="form-button"
            onClick={() => {
              this.goHomepage();
            }}
          >
            Return
          </button>
        )}
        {video.length !== 0 && <Video info={video[0]} returnToSingleMusic={this.returnToSingleMusic}/>}
      </React.Fragment>
    );
  }
}

export default Home;
