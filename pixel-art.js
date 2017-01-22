document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  var outer = document.getElementById('outer');
  for (var i = 0; i < 5029; i++) {
    var div = document.createElement('div');
    div.className = 'divSquare'
    outer.appendChild(div);
  }
});
document.getElementById('outer').addEventListener('click', function(event) {
    event.target.style["background-color"] = brushColor;
});

var brushColor;

document.getElementById('palette').addEventListener('click', function(event) {
  brushColor = event.target.style["background-color"];
  var indicator = document.getElementById('indicator-color')
  indicator.style["background-color"] = brushColor;
})
