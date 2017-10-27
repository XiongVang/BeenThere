import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-materialize";

const Landing = props => {
  return (
    <div>
      <Parallax imageSrc="https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?w=800" />
      <div className="section white">
        <div className="row container valign-wrapper">
          <i className="material-icons medium col">map</i>
          <div className="col">
            <h3 className="header">Travel</h3>
            <p className="grey-text text-darken-3 lighten-3">Be adventurous.</p>
          </div>
        </div>
      </div>
      <Parallax imageSrc="https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?w=800" />
      <div className="section white">
        <div className="row container valign-wrapper">
          <i className="material-icons medium col">file_upload</i>
          <div className="col">
            <h3 className="header">Post</h3>
            <p className="grey-text text-darken-3 lighten-3">Create moments.</p>
          </div>
        </div>
      </div>
      <Parallax imageSrc="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=700" />
      <div className="section white">
        <div className="row container valign-wrapper">
          <i className="material-icons medium col">share</i>
          <div className="col">
            <h3 className="header">Share</h3>
            <p className="grey-text text-darken-3 lighten-3">
              Bring the world along.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
