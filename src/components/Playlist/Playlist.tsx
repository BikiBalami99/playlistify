import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import MyTrack from "../MyTrack/MyTrack";

interface PlaylistProp {
  playlist: TrackInterface[];
  setPlaylist: React.Dispatch<React.SetStateAction<TrackInterface[]>>;
  savedPlaylistUri: string[];
  setSavedPlaylistUri: React.Dispatch<React.SetStateAction<string[]>>;
}

const Playlist = ({
  playlist,
  setPlaylist,
  savedPlaylistUri,
  setSavedPlaylistUri,
}: PlaylistProp) => {
  const [playlistName, setPlaylistName] = React.useState("My Playlist");

  function handleSavePlaylist() {
    if (playlist.length !== 0) {
      playlist.forEach((track) => {
        console.log(track.uri);
        setSavedPlaylistUri((prev: string[]) => [...prev, track.uri]);
      });
      setPlaylist([]);
      setPlaylistName("My Playlist");
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setPlaylistName(e.target.value)}
        value={playlistName}
        type="text"
      />
      <ul>
        {playlist.map((track) => {
          return (
            <MyTrack key={track.id} setPlaylist={setPlaylist} myTrack={track} />
          );
        })}
      </ul>
      <button onClick={handleSavePlaylist}>Save Playlist</button>
    </div>
  );
};

export default Playlist;
