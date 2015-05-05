$(function () {
  var activeNavItem;
  // Grab the current nav item by href attribute
  activeNavItem = $('.site-sidebar .nav-items > li > a[href="' + window.location.pathname + '"]');

  if (activeNavItem.length > 0) {
    // Add the selected class
    activeNavItem.parent().addClass('selected');
    // Scroll to the nav item
    $('.site-sidebar').get(0).scrollTop = activeNavItem.offset().top - 200
  }

  $('#post_select').change(function (event) {
    location.href = location.origin + event.target.value;
  });
});
