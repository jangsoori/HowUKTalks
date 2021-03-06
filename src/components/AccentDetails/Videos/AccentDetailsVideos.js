import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AccentDetailsTabTitle from "../AccentDetailsTabTitle";
import "./AccentDetailsVideos.scss";
const AccentDetailsVideos = (props) => {
  const { videos } = props;
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    videos && setSelectedVideo(videos[0]);
  }, [videos]);

  if (!videos) {
    return null;
  }

  const renderVideosThumbnails = () => {
    return videos.map((video, index) => {
      return (
        <img
          key={index}
          onClick={() => setSelectedVideo(videos && video)}
          src={`https://img.youtube.com/vi/${videos && video}/1.jpg`}
          alt=""
          className={`accent-video-thumbnail ${
            video === selectedVideo ? "video-active" : ""
          }`}
        />
      );
    });
  };
  return (
    <React.Fragment>
      <AccentDetailsTabTitle title="Videos" />
      <section className="accent-details-content">
        <div className="accent-details-videos">
          <div className="accent-video-selected-wrapper">
            <iframe
              className="accent-video-selected"
              // width="100%"
              // height="100%"
              title="video"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
            ></iframe>
          </div>
          <div className="accent-videos-thumbnails">
            {renderVideosThumbnails()}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  videos: state.selectedAccent && state.selectedAccent.videos,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccentDetailsVideos);
