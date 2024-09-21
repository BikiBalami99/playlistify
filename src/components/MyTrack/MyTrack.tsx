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
    <div className={styles.allTracks} key={myTrack.id}>
      <div className={styles.title}>
        <img className={styles.albumArt} src={myTrack.albumArt} alt="" />
        <div className={styles.trackHeader}>
          <h4>{myTrack.name}</h4>
          <p>{myTrack.artist}</p>
        </div>
      </div>
      <p className={styles.album}>{myTrack.album}</p>
      <p className={styles.duration}>{formatDuration(myTrack.duration_ms)}</p>
      <button
        className={styles.removeButton}
        onClick={() => handleRemoveMyTrack(myTrack.name)}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_34_892)">
            <circle cx="20" cy="20" r="16" fill="url(#paint0_linear_34_892)" />
            <g filter="url(#filter1_d_34_892)">
              <path
                d="M14 20H26"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_34_892"
              x="0"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_34_892"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_34_892"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_34_892"
              x="11.5"
              y="17.5"
              width="17"
              height="5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_34_892"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_34_892"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_34_892"
              x1="31.0216"
              y1="4"
              x2="8.97839"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FE7373" />
              <stop offset="1" stop-color="#CE4949" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default MyTrack;
