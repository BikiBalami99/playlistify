import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import { formatDuration } from "../../util/utilities";
import styles from "./MyTrack.module.css";

interface MyTrackInterface {
  myTrack: TrackInterface;
  setPlaylist: React.Dispatch<React.SetStateAction<TrackInterface[]>>;
}

const MyTrack = ({ myTrack, setPlaylist }: MyTrackInterface) => {
  function handleRemoveMyTrack(trackName: string) {
    setPlaylist((prev: TrackInterface[]) => {
      return prev.filter((tracks) => !(trackName === tracks.name));
    });
  }
  return (
    <li className={styles.track} key={myTrack.id}>
      <img className={styles.albumArt} src={myTrack.albumArt} alt="" />
      <div className={styles.trackHeader}>
        <h4>{myTrack.name}</h4>
        <p>{myTrack.artist}</p>
      </div>
      <p className={styles.album}>{myTrack.album}</p>
      <p className={styles.duration}> {formatDuration(myTrack.duration_ms)}</p>
      <button onClick={() => handleRemoveMyTrack(myTrack.name)}>del</button>
    </li>
  );
};

export default MyTrack;
