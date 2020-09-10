import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

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
  console.log(selectedVideo);
  return (
    <React.Fragment>
      <section className="accent-details-title">
        <h3>Videos</h3>
      </section>
      <section className="accent-details-content">
        <div className="accent-details-videos">
          <iframe
            className="accent-video-selected"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
          ></iframe>
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
