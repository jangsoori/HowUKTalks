import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAccent } from "../redux/actions";
import { Popup as MapPopup } from "react-map-gl";
import "./Popup.css";
import { Segment, Grid, Header, Button, Embed } from "semantic-ui-react";

function Popup({ accent, selectAccent }) {
  return (
    accent && (
      <section className="popup-wrapper">
        <div className="popup-content">
          <p className="popup-content-header">{accent.name}</p>
          <div className="popup-content-main">
            <div className="popup-content-left">
              <h2 className="popup-content-title">Trivia</h2>
              <p className="popup-content-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, mollitia nesciunt. Ducimus recusandae odit id saepe
                iure fugit et harum.
              </p>
            </div>
            <div className="popup-content-right">
              <h2 className="popup-content-title">Can you understand?</h2>
              <iframe
                className="popup-content-video"
                src={`https://www.youtube.com/embed/${accent.videos[0]}`}
                frameborder="0"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
          <Button
            className="popup-content-close"
            onClick={() => selectAccent(null)}
            color="red"
          >
            Close
          </Button>
        </div>
      </section>
    )
  );
}

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

export default connect(mapStateToProps, { selectAccent })(Popup);
