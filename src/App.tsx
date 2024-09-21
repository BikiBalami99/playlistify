import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import Message from "./components/Message/Message";
import { TrackInterface } from "./Interfaces/TrackInterface";
import Spotify from "./modules/Spotify";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [searchResults, setSearchResults] = useState<TrackInterface[]>([]);
  const [playlist, setPlaylist] = useState<TrackInterface[]>([]);
  const [savedPlaylistUri, setSavedPlaylistUri] = useState<string[]>([]);
  const [savedPlaylistName, setSavedPlaylistName] = useState<string>("");
  const [trackCount, setTrackCount] = useState<number>(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userinfo, setUserinfo] = useState<{
    username: any;
    profilePicture: any;
  }>({ username: "", profilePicture: "" });

  useEffect(() => {
    if (savedPlaylistUri.length > 0) {
      setSavedPlaylistName("My Playlist");
      setTrackCount(savedPlaylistUri.length);
    }
  }, [savedPlaylistUri]);

  useEffect(() => {
    const token = Spotify.getAccessToken();
    if (token) {
      setIsSignedIn(true);
      Spotify.getUserDetails().then((user) => {
        setUserinfo({
          username: user.username,
          profilePicture: user.profilePicture,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar
          profilePicture={userinfo.profilePicture}
          username={userinfo.username}
        />
      </header>
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
          <Message playlistName={savedPlaylistName} trackCount={trackCount} />
          <Playlist
            setSavedPlaylistUri={setSavedPlaylistUri}
            savedPlaylistUri={savedPlaylistUri}
            setPlaylist={setPlaylist}
            playlist={playlist}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
