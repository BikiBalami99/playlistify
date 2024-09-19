import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import MyTrack from "../MyTrack/MyTrack";

interface PlaylistProp {
  playlist: TrackInterface[];
  setPlaylist: React.Dispatch<React.SetStateAction<TrackInterface[]>>;
}

const Playlist = ({ playlist, setPlaylist }: PlaylistProp) => {
  const [playlistName, setPlaylistName] = React.useState("My Playlist");

  function handlePlaylistNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlaylistName(e.target.value);
  }

  return (
    <div>
      <input
        onChange={handlePlaylistNameChange}
        value={playlistName}
        type="text"
      />
      <ul>
        {playlist.map((track) => {
          return <MyTrack setPlaylist={setPlaylist} myTrack={track} />;
        })}
      </ul>
    </div>
  );
};

export default Playlist;
