import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import { formatDuration } from "../../util/utilities";

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
    <li key={myTrack.id}>
      <ul>
        <li>Track: {myTrack.name}</li>
        <li>Artist: {myTrack.artist}</li>
        <li>Album: {myTrack.album}</li>
        <li>Duration: {formatDuration(myTrack.duration_ms)}</li>
      </ul>
      <button onClick={() => handleRemoveMyTrack(myTrack.name)}>Remove</button>
    </li>
  );
};

export default MyTrack;
