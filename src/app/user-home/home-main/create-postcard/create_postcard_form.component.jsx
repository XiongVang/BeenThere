import React from "react";
import { Field, reduxForm } from "redux-form";

/**
 * title: { type: String, required: true },
 * body: { type: String },
 * date: { type: Date, required: true },
 * location: { type: String }
 */

const Form = props => {
  const { handleSubmit, onSubmit } = props;

  return (
    <div className="section center-align">
      <form onSubmit={handleSubmit(onSubmit)} className="container col s3">
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
