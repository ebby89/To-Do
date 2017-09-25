// business logic

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// front end logic
$(document).ready(function() {
  $("form#new-place").submit(function(event){
    event.preventDefault();

var inputtedLocation = $("input#new-location").val();
var inputtedLandmarks = $("input#new-landmarks").val();
var inputtedTimeOfYear = $("input#new-timeOfYear").val();
var inputtedNotes = $("input#new-notes").val();
var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);

$("ul#places").append("<li><span class='places'>" + newPlace.location + "</span></li>");

  });
});
