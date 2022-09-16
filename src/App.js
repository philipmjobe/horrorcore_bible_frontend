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
      <Row xs={1} md={2} className="g-4">
        {this.state.artists.map((artist) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

{
  /* <>
  <li key={artist.id}>{artist.name}</li>
  <img src={artist.image} alt="artist" className="image" style={{ height: 400, width: 400 }} />
</>; */
}
// export default Artist;
