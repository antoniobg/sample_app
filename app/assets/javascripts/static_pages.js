
$(document).ready(function() {
  updateCountdown();
  $('#micropost_content').change(updateCountdown);
  $('#micropost_content').keyup(updateCountdown);
});

function updateCountdown() {
  var remaining = 140 - $('#micropost_content').val().length;
  $('#post_countdown').text(remaining + ' char(s) to go...');
};