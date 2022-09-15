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
          <>
            <li key={artist.id}>{artist.name}</li>
            <img src={artist.image} alt="artist" className="image" style={{ height: 400, width: 400 }} />
          </>
        ))}
      </ul>
    );
  }
}

// export default Artist;
