import React from "react";

interface SavedPlaylistMessageProps {
  playlistName: string;
  trackCount: number;
}

const SavedPlaylistMessage: React.FC<SavedPlaylistMessageProps> = ({
  playlistName,
  trackCount,
}) => {
  return (
    <div>
      <h2>Your Playlist Has Been Saved!</h2>
      <p>
        The playlist <strong>{playlistName}</strong> with {trackCount}{" "}
        {trackCount === 1 ? "track" : "tracks"} has been successfully saved to
        your Spotify account.
      </p>
    </div>
  );
};

export default SavedPlaylistMessage;
