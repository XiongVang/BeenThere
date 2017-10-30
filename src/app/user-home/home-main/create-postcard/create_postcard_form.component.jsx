import React from "react";
import { Field, reduxForm } from "redux-form";
import ReactFilestack from "filestack-react";

/**
 * title: { type: String, required: true },
 * body: { type: String },
 * date: { type: Date, required: true },
 * location: { type: String }
 */

const Form = props => {
  const {
    handleSubmit,
    onSubmit,
    imageUploaded,
    handleUploadSuccess,
    imageUrl
  } = props;

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

  const image = imageUploaded ? (
    <div className="container col s6 m3">
      <div className="card">
        <div className="card-image">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  ) : (
    <ReactFilestack
      render={({ onPick }) => (
        <div>
          <a
            onClick={onPick}
            className="waves-effect waves-light btn yellow darken-4"
          >
            <i className="material-icons left">file_upload</i>
            Upload image
          </a>
        </div>
      )}
      apikey="AEdmA9b3IRtDdvGXicdxAz"
      onSuccess={handleUploadSuccess}
      onError={error => {
        console.log("FileStack error -->", error);
      }}
      options={fileStackOptions}
    />
  );
  return (
    <div className="section center-align">
      {image}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="section container col s3"
      >
        <div className="input-field col s3">
          <Field
            className="validate"
            name="title"
            component="input"
            type="text"
            id="title"
          />
          <label htmlFor="title">Title</label>
        </div>

        <div className="col s3">
          <label htmlFor="date">Date</label>
          <Field
            className="validate"
            name="date"
            component="input"
            type="date"
            id="date"
          />
        </div>

        <div className="input-field col s3">
          <Field
            className="validate, materialize-textarea"
            name="body"
            component="textarea"
            id="body"
          />
          <label htmlFor="body">Message</label>
        </div>

        <div className="input-field col s3">
          <Field
            className="validate"
            name="location"
            component="input"
            type="text"
            id="location"
          />
          <label htmlFor="location">Location</label>
        </div>

        <div className="section">
          <button
            className=" btn waves-effect waves-light"
            type="submit"
            name="Submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

const CreatePostCard = reduxForm({
  form: "createTrip"
})(Form);

export default CreatePostCard;
