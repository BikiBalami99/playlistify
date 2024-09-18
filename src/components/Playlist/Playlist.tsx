import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import MyTrack from "../MyTrack/MyTrack";

interface PlaylistProp {
  playlist: TrackInterface[];
  setPlaylist: React.Dispatch<React.SetStateAction<TrackInterface[]>>;
}

const Playlist = ({ playlist, setPlaylist }: PlaylistProp) => {
  return (
    <div>
      <h2>Your Playlist</h2>
      <ul>
        {playlist.map((track) => {
          return <MyTrack setPlaylist={setPlaylist} myTrack={track} />;
        })}
      </ul>
    </div>
  );
};

export default Playlist;
