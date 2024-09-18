import React from "react";
import { TrackInterface } from "../../Interfaces/TrackInterface";
import { formatDuration } from "../../util/utilities";

interface MyTrackInterface {
  myTrack: TrackInterface;
}

const MyTrack = ({ myTrack }: MyTrackInterface) => {
  return (
    <li key={myTrack.id}>
      <ul>
        <li>Track: {myTrack.name}</li>
        <li>Artist: {myTrack.artist}</li>
        <li>Album: {myTrack.album}</li>
        <li>Duration: {formatDuration(myTrack.duration_ms)}</li>
      </ul>
    </li>
  );
};

export default MyTrack;
