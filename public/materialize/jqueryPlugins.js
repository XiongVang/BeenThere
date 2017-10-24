$(document).ready(function() {
  console.log("---> DOCUMENT IS READY <---");

  var dropdownConfig = {
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: "left", // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  };
  // activates mobile drop menu for NotAuthNavBar
  $(document).on("click", ".not-auth-dropdown-trigger", function(event) {
    $(this).dropdown(dropdownConfig); // end dropdown config

    $(this).dropdown("open");
  }); // end mouseover not-auth-dropdown

  // activates mobile drop menu for IsAuthNavBar
  $(document).on("click", ".is-auth-dropdown-trigger", function(event) {
    $(this).dropdown(dropdownConfig); // end dropdown config

    $(this).dropdown("open");
  }); // end mouseover is-auth-dropdown

  // activates side nav on user home page
  $(document).on("click", ".home-side-nav-trigger", function(event) {
    $(this).sideNav({
      menuWidth: 200, // Default is 300
      edge: "left", // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens,
    });

    $(this).sideNav("show");
  }); // onClick home-side-nav
});
