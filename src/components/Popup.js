import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAccent } from "../redux/actions";
import { Popup as MapPopup } from "react-map-gl";
import "./Popup.css";
import { Segment, Grid, Header, Button, Embed } from "semantic-ui-react";

function Popup({ accent, selectAccent }) {
  return (
    accent && (
      <Segment
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%",
        }}
        secondary
        size="massive"
      >
        <Grid columns={2} textAlign="center">
          <Grid.Row>{accent.name}</Grid.Row>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header>Trivia</Header>
            </Grid.Column>
            <Grid.Column>
              <Header>Try to understand!</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>hi</Grid.Column>
            <Grid.Column>
              <Embed
                id={accent.videos[0]}
                placeholder="/images/image-16by9.png"
                source="youtube"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="middle" style={{ height: "100%" }}>
            <Button onClick={() => selectAccent(null)} color="red">
              Close
            </Button>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  );
}

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

export default connect(mapStateToProps, { selectAccent })(Popup);
