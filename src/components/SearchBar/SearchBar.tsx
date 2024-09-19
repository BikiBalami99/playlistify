import React, { useState, useEffect } from "react";
import Spotify from "../../modules/Spotify";

interface SearchBarProps {
  setSearchResults: (results: any[]) => void;
}

const SearchBar = ({ setSearchResults }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  //Debounce Search term to reduce the number of API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Search Spotify API when the debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setSearchResults([]);
      return;
    }

    Spotify.search(debouncedSearchTerm).then((tracks) => {
      setSearchResults(tracks);
    });
  }, [debouncedSearchTerm, setSearchResults]);

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
