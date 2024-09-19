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
              <li key={track.id + track.name}>Track: {track.name}</li>
              <li key={track.id + track.artist}>Artist: {track.artist}</li>
              <li key={track.id + track.album}>Album: {track.album}</li>
              <li key={track.id + track.duration_ms}>
                Duration: {formatDuration(track.duration_ms)}
              </li>
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
