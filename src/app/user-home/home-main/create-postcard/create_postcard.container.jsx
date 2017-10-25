import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import ReactFilestack from "filestack-react";

// actions
import { createPostcard, fetchUser } from "../../home.action.jsx";
import { setPostcardCreated } from "../../home_utils.action.jsx";

//form
import CreatePostcardForm from "./create_postcard_form.component.jsx";

class CreatePostcard extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    console.log("CreatePostcard props:", props);
  }

  onSubmit(values) {
    console.log("CreatePostcard onSubmit values:", values);
    this.props.createPostcard(this.props.trip._id, values);
  }

  componentWillUnmount() {
    this.props.fetchUser();
    this.props.setPostcardCreated(false);
  }

  render() {
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

    const { postcardCreated } = this.props;

    return postcardCreated ? (
      <Redirect to="/home" />
    ) : (
      <div>
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
        <CreatePostcardForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    trip: store.homeReducer.details,
    postcardCreated: store.homeUtilsReducer.postcardCreated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createPostcard, fetchUser, setPostcardCreated },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostcard);
