import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import MyTrack from "../MyTrack/MyTrack";
import Spotify from "../../modules/Spotify";
import styles from "./Playlist.module.css";

interface PlaylistProp {
  playlist: TrackInterface[];
  setPlaylist: React.Dispatch<React.SetStateAction<TrackInterface[]>>;
  savedPlaylistUri: string[];
  setSavedPlaylistUri: React.Dispatch<React.SetStateAction<string[]>>;
}

const Playlist = ({
  playlist,
  setPlaylist,
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
    <div className={styles.playlistContainer}>
      <section className={styles.myPlaylistTitle}>
        <p>Playlist</p>
        <input
          onChange={(e) => setPlaylistName(e.target.value)}
          value={playlistName}
          type="text"
        />
      </section>

      <section className={styles.myPlaylistPreview}>
        <section className={styles.saveDetails}>
          <p>4 songs, 17 min 17 sec</p>

          <button onClick={handleSavePlaylist}>Save Playlist</button>
        </section>
        <section className={styles.allTracksTitles}>
          <p>Title</p>
          <p>Album</p>
          <p>Duration</p>
        </section>

        {playlist.map((track) => (
          <MyTrack key={track.id} setPlaylist={setPlaylist} myTrack={track} />
        ))}
      </section>
    </div>
  );
};

export default Playlist;
