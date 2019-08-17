import React, { Component } from "react";
import AlbumList from "./albumList";
import MusicList from "./musicList";
import SingeMusic from './singleMusic';
import axios from "axios";
import "../css/home.css";

class Home extends Component {
  state = { album: [], musics: [], music:[] };
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

  singleMusic = (musicId) =>{
    const data = this.state.musics.filter(music=>musicId===music._id);
    this.setState({music: data});
  }

  goHomepage = () => {
    this.setState({ musics: [] });
  };

  returnMusicList=()=>{
    this.setState({ music: []});
  }

  render() {
    const album = this.state.album;
    const musics = this.state.musics;
    const music = this.state.music;
    console.log(musics);
    return (
      <React.Fragment>
        {music.length===0&&(musics.length === 0 && (
          <AlbumList album={album} onGetMusic={this.getMusic} />)
        )}
        {music.length===0&&musics.length !== 0 && <MusicList musics={musics} singleMusic={this.singleMusic}/>}
        {music.length!==0&&<SingeMusic music={music} returnMusicList={this.returnMusicList}/>}
        {music.length===0&&musics.length !== 0 && (
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
      </React.Fragment>
    );
  }
}

export default Home;
