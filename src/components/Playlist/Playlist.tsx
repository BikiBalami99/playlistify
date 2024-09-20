import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import MyTrack from "../MyTrack/MyTrack";
import Spotify from "../../modules/Spotify";

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
      const trackUris = playlist.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris)
        .then(() => {
          // Save track URIs to state
          setSavedPlaylistUri(trackUris);

          // Clear playlist and reset playlist name
          setPlaylist([]);
          setPlaylistName("My Playlist");
        })
        .catch((error) => {
          console.error("Error saving playlist:", error);
        });
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
        {playlist.map((track) => (
          <MyTrack key={track.id} setPlaylist={setPlaylist} myTrack={track} />
        ))}
      </ul>
      <button onClick={handleSavePlaylist}>Save Playlist</button>
    </div>
  );
};

export default Playlist;
