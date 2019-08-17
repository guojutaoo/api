import React, { Component } from 'react';

const MusicList = (props) => {
    const {music} = props;
    return (     <React.Fragment>
        <h1>Music </h1>
        <table className="table table-bordered" id="album-table">
          <thead className="tr">
            <tr className="title">
              <th>Album</th>
              <th>Title</th>
              <th>Lyricist</th>
            </tr>
          </thead>
          <tbody>
            {music &&
              Object.values(music).map(data => (
                <tr key={data._id}>
                  <td
                    className="body"
                    onClick={() => this.getMusic(data.albumId)}
                  >
                    {data.albumId}
                  </td>
                  <td>{data.title}</td>
                  <td>{data.lyricist}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment> );
}
 
export default MusicList;