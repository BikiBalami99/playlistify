import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import { mockApi } from "./mockdata/mock-songs";
import { Track } from "./Interfaces/TrackInterface";

function App() {
  const [allTracks, setAllTracks] = useState<Track[]>(mockApi.tracks);
  const [searchResults, setSearchResults] = useState<Track[]>([]);

  return (
    <div className="App">
      <SearchBar setSearchResults={setSearchResults} allTracks={allTracks} />
      <SearchResults tracks={searchResults} />
      <Playlist />
      <p>{mockApi.tracks[4].name}</p>
    </div>
  );
}

export default App;
