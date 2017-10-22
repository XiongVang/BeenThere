$(document).ready(function() {
  console.log("---> DOCUMENT IS READY <---");

  // activates mobile drop menu for NotAuthNavBar
  $(document).on("mouseover", ".not-auth-dropdown", function(event) {
    $(this).dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: "left", // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }); // end dropdown config

    $(this).dropdown("open");
  }); // end mouseover

  // activates mobile drop menu for IsAuthNavBar
  $(document).on("mouseover", ".is-auth-dropdown", function(event) {
    $(this).dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: "left", // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }); // end dropdown config

    $(this).dropdown("open");
  }); // end mouseover
});
