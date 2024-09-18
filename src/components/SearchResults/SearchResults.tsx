import React from "react";
import { Track } from "../../Interfaces/TrackInterface";

interface SearchBarProps {
  tracks: Track[];
}

const SearchResults = ({ tracks }: SearchBarProps) => {
  // Helper function to format the duration
  const formatDuration = (ms: number) =>
    `${Math.floor(ms / 60000)} min ${Math.floor((ms % 60000) / 1000)} seconds`;

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
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
