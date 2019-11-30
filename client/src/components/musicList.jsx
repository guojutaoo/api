import React from "react";


const MusicList = props => {
  const { musics, singleMusic } = props;
  return (
    <React.Fragment>
        <h1>Music</h1>
        <table className="table table-bordered" id="album-table">
          <thead className="tr">
            <tr className="title">
              <th>Album</th>
              <th>Title</th>
              <th>Lyricist</th>
            </tr>
          </thead>
          <tbody>
            {musics &&
              Object.values(musics).map(data => (
                <tr key={data._id}>
                  <td>{data.albumId}</td>
                  <td className="body" onClick={() => singleMusic(data._id)}>
                    {data.title}
                  </td>
                  <td>{data.lyricist}</td>
                </tr>
              ))}
          </tbody>
        </table>

    </React.Fragment>
  );
};

export default MusicList;
