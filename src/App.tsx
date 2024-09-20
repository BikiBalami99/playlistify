import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import SavedPlaylistMessage from "./components/SavedPlaylistMessage/SavedPlaylistMessage";
import { TrackInterface } from "./Interfaces/TrackInterface";

function App() {
  const [searchResults, setSearchResults] = useState<TrackInterface[]>([]);
  const [playlist, setPlaylist] = useState<TrackInterface[]>([]);
  const [savedPlaylistUri, setSavedPlaylistUri] = useState<string[]>([]);
  const [savedPlaylistName, setSavedPlaylistName] = useState<string>("");
  const [trackCount, setTrackCount] = useState<number>(0);

  useEffect(() => {
    if (savedPlaylistUri.length > 0) {
      // Assuming the playlist name is available from the Playlist component or elsewhere
      setSavedPlaylistName("My Playlist"); // Replace with actual playlist name if available
      setTrackCount(savedPlaylistUri.length);
    }
  }, [savedPlaylistUri]);

  return (
    <div className="App">
      <main className="main">
        <section className="searchAndResults">
          <SearchBar setSearchResults={setSearchResults} />
          <SearchResults
            playlist={playlist}
            setPlaylist={setPlaylist}
            tracks={searchResults}
          />
        </section>
        <section className="playlist">
          <Playlist
            setSavedPlaylistUri={setSavedPlaylistUri}
            savedPlaylistUri={savedPlaylistUri}
            setPlaylist={setPlaylist}
            playlist={playlist}
          />
          {savedPlaylistUri.length > 0 && (
            <SavedPlaylistMessage
              playlistName={savedPlaylistName}
              trackCount={trackCount}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
