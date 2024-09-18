import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import { formatDuration } from "../../util/utilities";

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
    <ul>
      {tracks.map((track) => {
        return (
          <li key={track.id}>
            <ul>
              <li>Track: {track.name}</li>
              <li>Artist: {track.artist}</li>
              <li>Album: {track.album}</li>
              <li>Duration: {formatDuration(track.duration_ms)}</li>
            </ul>
            <button onClick={() => handleAdditionToPlaylist(track)}>
              Add to playlist
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
