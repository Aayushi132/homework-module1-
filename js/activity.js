// $(function () {
//   $(".highlight td").click(function () {
//     var cell = $(".highlight td").index(this);
//     if (cell != 0) {
//       var str = $(this).text();
//       if (str != "Not Available") {
//         $(this).toggleClass("greenBackground");
//       }
//     }
//   });
// });

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

//User interaction with table cells//


$("td").click(function () {
  var content = $(this).text();

  if (content != "Not Available") {
    $(this).toggleClass("greenBackground");

    if ($(this).hasClass("greenBackground")) {
      $("#displaySelected").css("visibility", "visible");
      $("#displaySelected").css("margin-top", "2em");
      $("#result").append("<p>" + content + "</p>");
    } else {
      $("#result p:contains(" + content + ")").remove();

      if ($("#result").has("p").length == false) {
        $("#displaySelected").css("visibility", "hidden");
        $("#displaySelected").css("margin-top", "0");
      }
    }
  }
});

