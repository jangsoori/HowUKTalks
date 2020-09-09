import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
const DetailsVideos = (props) => {
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
    <div className="accent-videos">
      <div className="accent-selected-video-wrapper">
        <iframe
          className="accent-selected-video"
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
        ></iframe>
      </div>
      <div
        className="accent-videos-list"
        style={{ gridTemplateColumns: `repeat(5,1fr)` }}
      >
        {renderVideosThumbnails()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  videos: state.selectedAccent && state.selectedAccent.videos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsVideos);
