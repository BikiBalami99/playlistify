const clientId = "ac5c9dfb8e824407940ac56457a97438";
const redirectUri = "http://localhost:3000/callback"; // Update this to match your registered URI
let accessToken;

const Spotify = {
  getAccessToken() {
    // Checking if access token is already stored in local storage
    if (accessToken) {
      return accessToken;
    }

    // Check if the access token is in the URL hash
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear the token after it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      // Redirect to Spotify for authorization if no token is present
      const scope = "playlist-modify-public playlist-modify-private";
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(
        scope
      )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

      window.location = accessUrl;
    }
  },

  createPlaylist(name) {
    const accessToken = Spotify.getAccessToken();
    return fetch("https://api.spotify.com/v1/me/playlists", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: "A playlist created from Jammming app",
        public: true, // or false for a private playlist
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.id); // Return the new playlist ID
  },

  addTracksToPlaylist(playlistId, trackUris) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: trackUris,
      }),
    });
  },

  savePlaylist(name, trackUris) {
    return Spotify.createPlaylist(name).then((playlistId) => {
      return Spotify.addTracksToPlaylist(playlistId, trackUris);
    });
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
        term
      )}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
          duration_ms: track.duration_ms,
          albumArt: track.album.images[0].url,
        }));
      });
  },

  getUserDetails() {
    const accessToken = Spotify.getAccessToken();

    return fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((user) => ({
        username: user.display_name,
        profilePicture: user.images[0]?.url, // Optional chaining in case no profile image
      }));
  },
};

export default Spotify;
