import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import { mockApi } from "./mockdata/mock-songs";
import { TrackInterface } from "./Interfaces/TrackInterface";

function App() {
  const [allTracks, setAllTracks] = useState<TrackInterface[]>(mockApi.tracks);
  const [searchResults, setSearchResults] = useState<TrackInterface[]>([]);
  const [playlist, setPlaylist] = useState<TrackInterface[]>([]);
  const [savedPlaylistUri, setSavedPlaylistUri] = useState<string[]>([]);

  return (
    <div className="App">
      <SearchBar setSearchResults={setSearchResults} allTracks={allTracks} />
      <SearchResults
        playlist={playlist}
        setPlaylist={setPlaylist}
        tracks={searchResults}
      />
      <Playlist
        setSavedPlaylistUri={setSavedPlaylistUri}
        savedPlaylistUri={savedPlaylistUri}
        setPlaylist={setPlaylist}
        playlist={playlist}
      />
      <div>
        <h2>Saved Playlist</h2>
        {savedPlaylistUri.map((uri, index) => (
          <p key={index}>{uri}</p> // Add a key here
        ))}
      </div>
    </div>
  );
}

export default App;
