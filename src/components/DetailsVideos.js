import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./DetailsVideos.scss";
const DetailsVideos = (props) => {
  const { videos } = props;
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    videos && setSelectedVideo(videos[0]);
  }, []);

  if (!videos) {
    return null;
  }
  console.log(selectedVideo);
  return (
    <React.Fragment>
      <div className="accent-video-wrapper">
        <iframe
          className="accent-video"
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
        ></iframe>

        <img
          onClick={() => setSelectedVideo(videos && videos[1])}
          src={`https://img.youtube.com/vi/${videos && videos[1]}/0.jpg`}
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  videos: state.selectedAccent && state.selectedAccent.videos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsVideos);
