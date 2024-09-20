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
    <div>
      <h2 className={styles.heading}>New Playlist Preview</h2>
      <p className={styles.description}>
        Your newly created playlist can be previewed here. After you hit the
        Save Playlist button, the playlist will be added to your spotify account
        automatically.
      </p>
      <section className={styles.myPlaylist}>
        <section className={styles.myPlaylistTitle}>
          <p>Playlist</p>
          <input
            onChange={(e) => setPlaylistName(e.target.value)}
            value={playlistName}
            type="text"
          />
          <p>4 songs, 17 min 17 sec</p>
        </section>
        <section className={styles.myPlaylistPreview}>
          <div className={styles.heading3}>
            <h3>Title</h3>
            <h3>Album</h3>
            <h3>Duration</h3>
          </div>
          <ul className={styles.myAllTracks}>
            {playlist.map((track) => (
              <MyTrack
                key={track.id}
                setPlaylist={setPlaylist}
                myTrack={track}
              />
            ))}
          </ul>
          <button onClick={handleSavePlaylist}>Save Playlist</button>
        </section>
      </section>
    </div>
  );
};

export default Playlist;
