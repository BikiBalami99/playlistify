import React, { useState, useEffect } from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";

interface SearchBarProps {
  setSearchResults: (results: any[]) => void;
  allTracks: TrackInterface[];
}

const SearchBar = ({ setSearchResults, allTracks }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  //Search feature per keyboard input
  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setSearchResults([]);
    } else {
      const searchTermLC = debouncedSearchTerm.toLowerCase();
      setSearchResults(
        allTracks.filter((track) => {
          const trackNameLC = track.name.toLowerCase();
          const albumNameLC = track.album.toLowerCase();
          const artistNameLC = track.artist.toLowerCase();
          return (
            trackNameLC.includes(searchTermLC) ||
            artistNameLC.includes(searchTermLC) ||
            albumNameLC.includes(searchTermLC)
          );
        })
      );
    }
  }, [debouncedSearchTerm, allTracks, setSearchResults]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
    </form>
  );
};

export default SearchBar;
