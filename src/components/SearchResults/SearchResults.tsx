import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import { formatDuration } from "../../util/utilities";
import styles from "./SearchResults.module.css";

interface SearchBarProps {
  tracks: TrackInterface[];
  setPlaylist: React.Dispatch<React.SetStateAction<TrackInterface[]>>;
  playlist: TrackInterface[];
}

const SearchResults = ({ tracks, playlist, setPlaylist }: SearchBarProps) => {
  //Adding current song to playlist
  function handleAdditionToPlaylist(track: TrackInterface) {
    if (!playlist.includes(track)) {
      setPlaylist((prev: TrackInterface[]) => [...prev, track]);
    }
  }

  return (
    <ul className={styles.searchResults}>
      {tracks.map((track) => (
        <li key={track.id} className={styles.card}>
          {/* The button surrounds the whole content of the card */}
          <button
            className={styles.addButton}
            onClick={() => handleAdditionToPlaylist(track)}
          >
            <ul>
              <li className={styles.albumArt}>
                <img src={track.albumArt} alt="Album Art" />
              </li>
              <li className={styles.trackName}>{track.name}</li>
              <li className={styles.artist}>{track.artist}</li>
            </ul>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
