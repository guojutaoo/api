import React, { Component } from "react";
import AlbumList from "./albumList";
import MusicList from "./musicList";
import axios from "axios";
import "../css/home.css";

class Home extends Component {
  state = {album:[], music:[]};
  async componentDidMount(){
    axios
    .get("http://localhost:8080/album")
    .then(res=> {
      this.setState({album: res.data});
    });
  }
  
getMusic= async (albumId)=>{
    axios
    .get("http://localhost:8080/music")
    .then(res=> {
      const music = res.data.filter(data=>data.albumId===albumId);
      this.setState({music})
    });
}

goHomepage=()=>{
    this.setState({music:[]});
}

  render() {
      const album = this.state.album;
      const music = this.state.music;
      console.log(music);
    return (
      <React.Fragment>
          {music.length===0&&<AlbumList album={album} onGetMusic={this.getMusic}/>}
          {music.length!==0&&<MusicList music={music} />}
        <button className="btn btn-success" id="form-button">Click</button>
        {music.length!==0&&<button className="btn btn-success" id="form-button" onClick={()=>{this.goHomepage()}}>go back</button>}
      </React.Fragment>
    );
  }
}

export default Home;
