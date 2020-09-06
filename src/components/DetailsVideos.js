import React from "react";
import { connect } from "react-redux";
import "./DetailsVideos.scss";
const DetailsVideos = (props) => {
  if (!props.accent) {
    return <div className="">loading</div>;
  }
  const { videos } = props.accent;

  //   if (!videos) {
  //     return null;
  //   }
  console.log(videos);
  return (
    <div className="accent-video-wrapper">
      <iframe
        className="accent-video"
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${videos[0]}`}
      ></iframe>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsVideos);
