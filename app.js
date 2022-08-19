$(document).mousemove(function (event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".container-gradient").css(
    "background",
    "radial-gradient(at " +
      mouseXpercentage +
      "% " +
      mouseYpercentage +
      "%, #036bb9, #001b33)"
  );
});
