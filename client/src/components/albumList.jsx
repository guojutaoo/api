import React, { Component } from "react";

const AlbumList = props => {
    const {album, onGetMusic} = props;
  return (
    <React.Fragment>
      <h1>Album </h1>
      <table className="table table-bordered" id="album-table">
        <thead className="tr">
          <tr className="title">
            <th>Album</th>
            <th>Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {album &&
            Object.values(album).map(data => (
              <tr key={data._id}>
                <td
                  className="body"
                  onClick={() => onGetMusic(data.albumId)}
                >
                  {data.title}
                </td>
                <td>{data.year}</td>
                <td>{data.rating}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default AlbumList;
