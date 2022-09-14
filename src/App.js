import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class Artist extends React.Component {
  state = {
    artists: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3000/artists").then((res) => {
      const artists = res.data;
      this.setState({ artists });
    });
  }

  render() {
    return (
      <ul>
        {this.state.artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    );
  }
}

// export default Artist;
