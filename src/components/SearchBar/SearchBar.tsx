import React, { useEffect, useState } from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";

interface SearchBarProps {
  setSearchResults: (results: any[]) => void;
  allTracks: TrackInterface[];
}

const SearchBar = ({ setSearchResults, allTracks }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(() => e.target.value);
  }

  function handleSearchAction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      const searchTermLC = searchTerm.toLowerCase();
      setSearchResults(
        allTracks.filter((track) => {
          const trackNameLC = track.name.toLowerCase();
          const albumNameLC = track.album.toLowerCase();
          const artistNameLC = track.artist.toLowerCase();
          if (trackNameLC.includes(searchTermLC)) {
            return true;
          } else if (artistNameLC.includes(searchTermLC)) {
            return true;
          } else if (albumNameLC.includes(searchTermLC)) {
            return true;
          }
        })
      );
    }
  }

  return (
    <form onSubmit={handleSearchAction}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
