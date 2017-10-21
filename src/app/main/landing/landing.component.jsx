import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-materialize";

const Landing = props => {
  return (
    <div>
      <Parallax imageSrc="https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?w=1945" />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Travel.Post.Share</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Be adventurous.
          </p>
        </div>
      </div>
      <Parallax imageSrc="https://images.unsplash.com/photo-1499062918700-389fa905494e?w=700" />
    </div>
  );
};

export default Landing;
