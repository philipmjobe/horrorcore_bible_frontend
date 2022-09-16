import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
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
      <Row xs={1} md={3} className="g-4">
        {this.state.artists.map((artist) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={artist.image}
                alt="artist"
                className="image"
                style={{ height: 400, width: 445 }}
              />
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
