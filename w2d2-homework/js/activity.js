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
  var index = $(this).index();
  var heading = $("th").eq(index).text();

  var content = $(this).text();

  if (content != "Not Available") {
    $(this).toggleClass("greenBackground");

    if ($(this).hasClass("greenBackground")) {
      $("#myModal").modal("show");
      $(".modal-body").append("<p>" + content + " at " + heading + "</p>");
    } else {
      $(".modal-body p:contains(" + content + ")").remove();

      if ($(".modal-body").has("p").length == false) {
        $("#myModal").modal("hide");
      }
    }
  }
});

$(".back").click(function () {
  $("#myModal").modal("hide");
}
  );
