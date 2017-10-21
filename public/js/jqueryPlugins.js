$(document).ready(function() {
  console.log("---> DOCUMENT IS READY <---");

  // activates side-nav for NotAuthNavbar component
  $(".not-auth-button-collapse").sideNav({
    menuWidth: 100,
    edge: "right",
    closeOnClick: true,
    draggable: true
  });
});
