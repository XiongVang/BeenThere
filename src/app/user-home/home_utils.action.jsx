export const SET_TRIP_CREATED = "SET_TRIP_CREATED";
export const SET_POSTCARD_CREATED = "SET_POSTCARD_CREATED";
export const SET_IMAGE_UPLOADED = "SET_IMAGE_UPLOADED";

export function setTripCreated(bool) {
  return {
    type: SET_TRIP_CREATED,
    payload: bool
  };
}

export function setPostcardCreated(bool) {
  return {
    type: SET_POSTCARD_CREATED,
    payload: bool
  };
}

export function setImageUploaded(bool) {
  console.log("inside setImageUpoaded param:", bool);
  return {
    type: SET_IMAGE_UPLOADED,
    payload: bool
  };
}
