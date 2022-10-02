$(function () {
  $(".highlight td").click(function () {
    var cell = $(".highlight td").index(this);
    if (cell != 0) {
      var str = $(this).text();
      if (str != "Not Available") {
        $(this).toggleClass("greenBackground");
      }
    }
  });
});

$(function () {
  $(".highlight td").hover(function () {
    var cell = $(".highlight td").index(this);
    if (cell != 0) {
      var str = $(this).text();
      if (str != "Not Available") {
        $(this).css("cursor", "pointer");
      }
    }
  });
});
