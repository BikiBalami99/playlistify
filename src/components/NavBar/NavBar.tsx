import React from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  profilePicture: string;
  username: string;
}

export default function NavBar({ profilePicture, username }: NavBarProps) {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="30"
          viewBox="0 0 29 30"
          fill="none"
        >
          <path
            d="M26.5 22.443H8.5"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M26.5 18.443H8.5"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M26.5 14.443H8.5"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M26.5 10.443H12.5"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M9.97605 10.4435L6 12.8103V8.07668L9.97605 10.4435Z"
            fill="white"
            stroke="white"
          />
          <path
            d="M2.5 19.443V12.443C2.5 11.9126 2.71071 11.4039 3.08579 11.0288C3.46086 10.6537 3.96957 10.443 4.5 10.443H7.5"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
        <span>Playlistify</span>
      </div>
      <div className={styles.userInfo}>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="Profile Picture"
        />
        <div className={styles.username}>@{username}</div>
      </div>
    </div>
  );
}
