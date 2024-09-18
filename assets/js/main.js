$(document).ready(function () {
  $(".navbar__btn-trigger").click(function () {
    $(this).toggleClass("active");
    $(".navbar__list").toggleClass("active");
  });
});
