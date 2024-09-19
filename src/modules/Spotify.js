import exp = require("constants");

const clientId = "ac5c9dfb8e824407940ac56457a97438";
const redirectUri = "http://localhost:8888/callback";
let accessToken;

const Spotify = {
  getAccessToken() {
    //Checking if access token is already stored in local storage
    if (accessToken) {
      return accessToken;
    }

    // Check if the access token is in the URL hash
    const tokenMatch = window.location.href.match("/access_token=([^&]*)/");
    const expiresInMatch = window.location.href.match("/expires_in=([^&]*)/");

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      //Clear the token after it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState('Access Token', null, "/")

      return accessToken;
    } else {
      //Redirect to Spotify for authorization if no token is present
      const scope = "playlist-modify-public playlist-modify-private";
      const accessUrl= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

      window.location = accessUrl;
    }
  },
};
