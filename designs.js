// Select color input
// NOTE Implement functionality of color change and still draw afterwards
var color = $('#colorPicker').val();

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  // Define size input
  var height = $('#inputHeight').val();
  var width = $('#inputWeight').val();
  makeGrid(height,width);
};

  // Create grid
function makeGrid(height,width){
  height =10;
  width =10;
  for(var i= 0; i < width; i++){
    var row = $('<tr></tr>').appendTo($('#pixelCanvas'));
    for (var j= 0; j < height; j++){
      var cell = $('<td></td>').appendTo(row);
    };
  };
};
