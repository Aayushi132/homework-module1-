function imagesFooter() {
  for (var i = 1; i < 7; i++) {
    var ul = document.getElementById("partners");
    var li = document.createElement("li");
    li.setAttribute("class", "partner"); // added line
    var img = document.createElement("img");
    img.src = "partners/" + i + ".png";
    li.appendChild(img);
    ul.appendChild(li);
  }
}
imagesFooter();
