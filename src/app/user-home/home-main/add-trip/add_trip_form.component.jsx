import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = props => {
  return (
    <div className="section center-align">
      <form onSubmit={props.handleSubmit} className="container col s3">
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
        <div className="row">
          <div className="col s6">
            <label htmlFor="start-date">Start Date</label>
            <Field
              className="validate"
              name="startDate"
              component="input"
              type="date"
              id="start-date"
            />
          </div>
          <div className="col s6">
            <label htmlFor="end-date">End Date</label>
            <Field
              className="validate"
              name="endDate"
              component="input"
              type="date"
              id="end-date"
            />
          </div>
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

const AddTripForm = reduxForm({
  form: "trip"
})(Form);

export default AddTripForm;
