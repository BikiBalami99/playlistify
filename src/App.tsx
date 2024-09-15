import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
