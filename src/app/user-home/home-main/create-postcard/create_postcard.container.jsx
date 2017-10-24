import React from "react";
import ReactFilestack from "filestack-react";

const CreatePostcard = props => {
  const fileStackOptions = {
    accept: "image/*",
    fromSources: [
      "local_file_system",
      "webcam",
      "url",
      "imagesearch",
      "facebook",
      "instagram",
      "flickr"
    ],
    maxFiles: 1,
    minFiles: 1,
    imageDim: [800, 600],
    storeTo: { access: "public" }
  };

  return (
    <div>
      <h3>Add Postcard</h3>

      {/* filestack upload */}
      <ReactFilestack
        apikey="AEdmA9b3IRtDdvGXicdxAz"
        buttonText="Add picture"
        buttonClass="btn"
        onSuccess={result => {
          console.log("FileStack success -->", result);
        }}
        onError={error => {
          console.log("FileStack error -->", error);
        }}
        options={fileStackOptions}
      />
    </div>
  );
};

export default CreatePostcard;
