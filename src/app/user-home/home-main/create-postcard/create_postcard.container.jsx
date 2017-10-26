import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import ReactFilestack from "filestack-react";

// actions
import { createPostcard, fetchUser } from "../../home.action.jsx";
import {
  setPostcardCreated,
  setImageUploaded
} from "../../home_utils.action.jsx";

//form
import CreatePostcardForm from "./create_postcard_form.component.jsx";

class CreatePostcard extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }

  onSubmit(values) {
    console.log("CreatePostcard onSubmit values:", Object.assign({}, values, { imageUrl: this.state.imageUrl }));

    this.props.createPostcard(
      this.props.trip._id,
      Object.assign({}, values, { imageUrl: this.state.imageUrl })
    );
  }

  handleUploadSuccess(response) {
    console.log("handleUploadSuccess response:", response);
    this.setState({ imageUrl: response.filesUploaded[0].url });
    this.props.setImageUploaded(true);
    console.log("CreatePostcard state:", this.state);
  }

  componentWillUnmount() {
    if (this.props.postcardCreated) {
      this.props.fetchUser();
      this.props.setPostcardCreated(false);
      this.props.setImageUploaded(false);
    }
  }

  render() {
    const { postcardCreated, imageUploaded } = this.props;

    return postcardCreated ? (
      <Redirect to="/home" />
    ) : (
      <div className="section center-align">
        <CreatePostcardForm
          imageUploaded={imageUploaded}
          handleUploadSuccess={this.handleUploadSuccess}
          onSubmit={this.onSubmit}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    trip: store.homeReducer.details,
    postcardCreated: store.homeUtilsReducer.postcardCreated,
    imageUploaded: store.homeUtilsReducer.imageUploaded
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createPostcard, fetchUser, setPostcardCreated, setImageUploaded },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostcard);
