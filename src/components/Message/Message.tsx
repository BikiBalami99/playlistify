import React from "react";
import styles from "./Message.module.css";

interface MessageProps {
  playlistName: string;
  trackCount: number;
}

function Message({ playlistName, trackCount }: MessageProps) {
  return (
    <div className={styles.message}>
      <h2 className={styles.heading}>New Playlist Preview</h2>
      <p className={styles.description}>
        Your newly created playlist can be previewed here. After you hit the
        Save Playlist button, the playlist will be added to your spotify account
        automatically.
      </p>
    </div>
  );
}

export default Message;
