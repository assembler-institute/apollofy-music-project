import { makeRequest } from "./api-utils";
import { urlWithQuery } from "../utils/utils";

function makeApi(request = makeRequest()) {
  function login(body) {
    return request({
      url: "/login",
      requestMethod: "POST",
      body: body,
    });
  }

  function signUp({ body, headers = {} }) {
    return request({
      url: "/sign-up",
      requestMethod: "POST",
      body: body,
      headers: headers,
    });
  }

  function signOut(headers) {
    return request({
      url: "/sign-out",
      requestMethod: "POST",
      headers: headers,
    });
  }

  function search(headers) {
    return request({
      url: "/search",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getGenres(headers) {
    return request({
      url: "/genres",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getUserById(userID) {
    return request({
      url: `/users/${userID}`,
      requestMethod: "GET",
    });
  }

  function getUsers(headers) {
    return request({
      url: "/users",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getFollowingUsers(headers) {
    return request({
      url: "/me/users/following",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getFollowersUsers(headers) {
    return request({
      url: "/me/users/followers",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getPopularUsers(headers) {
    return request({
      url: "/users/popular",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function createPlaylist({ body, headers }) {
    return request({
      url: "/playlists",
      requestMethod: "POST",
      body: body,
      headers: headers,
    });
  }

  function getPlaylists(headers) {
    return request({
      url: urlWithQuery("/playlists", "fullFetch", true),
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getOwnPlaylists(headers) {
    return request({
      url: "/me/playlists",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getFollowingPlaylists(headers) {
    return request({
      url: "/me/playlists/following",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getPopularPlaylists(headers) {
    return request({
      url: "/playlists/popular",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function createTrack({ body, headers = {} }) {
    return request({
      url: "/tracks",
      requestMethod: "POST",
      body: body,
      headers: headers,
    });
  }

  function getTrackById(trackID) {
    return request({
      url: `/tracks/${trackID}`,
      requestMethod: "GET",
    });
  }

  function getTracks(headers) {
    return request({
      url: "/tracks",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getPopularTracks(headers) {
    return request({
      url: "/tracks/popular",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getRecommendedTracks(headers) {
    return request({
      url: "/me/tracks/recommended",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function addTrackPlayback({ trackID, headers = {}, body }) {
    return request({
      url: `/tracks/${trackID}/playback`,
      requestMethod: "POST",
      headers: headers,
      body: body,
    });
  }

  return {
    login: login,
    signUp: signUp,
    signOut: signOut,
    search: search,
    getGenres: getGenres,
    getUserById: getUserById,
    getUsers: getUsers,
    getFollowingUsers: getFollowingUsers,
    getFollowersUsers: getFollowersUsers,
    getPopularUsers: getPopularUsers,
    createPlaylist: createPlaylist,
    getPlaylists: getPlaylists,
    getOwnPlaylists: getOwnPlaylists,
    getFollowingPlaylists: getFollowingPlaylists,
    getPopularPlaylists: getPopularPlaylists,
    createTrack: createTrack,
    getTrackById: getTrackById,
    getTracks: getTracks,
    getPopularTracks: getPopularTracks,
    getRecommendedTracks: getRecommendedTracks,
    addTrackPlayback: addTrackPlayback,
  };
}

export default makeApi();
