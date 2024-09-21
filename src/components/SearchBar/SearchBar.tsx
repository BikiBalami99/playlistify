import React, { useState, useEffect } from "react";
import Spotify from "../../modules/Spotify";
import styles from "./SearchBar.module.css";

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
    <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.155 20.4989L17.1896 16.5452C18.469 14.9152 19.1632 12.9024 19.1607 10.8303C19.1607 8.98497 18.6134 7.18104 17.5882 5.64668C16.563 4.11231 15.1058 2.91642 13.4009 2.21023C11.696 1.50404 9.81998 1.31927 8.01007 1.67928C6.20017 2.0393 4.53766 2.92792 3.23279 4.23279C1.92792 5.53766 1.0393 7.20017 0.679284 9.01007C0.319271 10.82 0.504043 12.696 1.21023 14.4009C1.91642 16.1058 3.11231 17.563 4.64668 18.5882C6.18104 19.6134 7.98497 20.1607 9.83033 20.1607C11.9024 20.1632 13.9152 19.469 15.5452 18.1896L19.4989 22.155C19.6073 22.2643 19.7363 22.3511 19.8784 22.4103C20.0205 22.4695 20.173 22.5 20.3269 22.5C20.4809 22.5 20.6334 22.4695 20.7755 22.4103C20.9176 22.3511 21.0466 22.2643 21.155 22.155C21.2643 22.0466 21.3511 21.9176 21.4103 21.7755C21.4695 21.6334 21.5 21.4809 21.5 21.3269C21.5 21.173 21.4695 21.0205 21.4103 20.8784C21.3511 20.7363 21.2643 20.6073 21.155 20.4989ZM2.83259 10.8303C2.83259 9.44631 3.243 8.09337 4.01192 6.94259C4.78084 5.79182 5.87374 4.8949 7.15241 4.36526C8.43108 3.83561 9.83809 3.69704 11.1955 3.96705C12.553 4.23705 13.7998 4.90353 14.7785 5.88218C15.7571 6.86083 16.4236 8.10771 16.6936 9.46514C16.9636 10.8226 16.825 12.2296 16.2954 13.5083C15.7658 14.7869 14.8688 15.8798 13.7181 16.6487C12.5673 17.4177 11.2144 17.8281 9.83033 17.8281C7.97441 17.8281 6.19451 17.0908 4.88218 15.7785C3.56985 14.4662 2.83259 12.6862 2.83259 10.8303Z"
          fill="white"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button className={styles.deleteButton} onClick={() => setSearchTerm("")}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="16"
            fill="url(#paint0_linear_32_864)"
            fill-opacity="0.9"
          />
          <path
            d="M10 22.7279L22.7279 9.99998"
            stroke="#363636"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M10 10L22.7279 22.7279"
            stroke="#363636"
            stroke-width="3"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_32_864"
              x1="27.0216"
              y1="1.10736e-06"
              x2="4.97839"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
