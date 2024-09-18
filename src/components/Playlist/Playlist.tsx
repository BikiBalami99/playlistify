import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import MyTrack from "../MyTrack/MyTrack";

interface PlaylistProp {
  playlist: TrackInterface[];
}

const Playlist = ({ playlist }: PlaylistProp) => {
  return (
    <div>
      <h2>Your Playlist</h2>
      <ul>
        {playlist.map((track) => {
          return <MyTrack myTrack={track} />;
        })}
      </ul>
    </div>
  );
};

export default Playlist;
