// business logic
function toDo(item) {
  this.item = item;
}


// front end logic
$(document).ready(function() {
  $("form#new-to-do").submit(function(event){
    event.preventDefault();

    var inputtedItem = $('input#new-item').val();

    var newToDo = new toDo(inputtedItem);

    $('ul#outputList').append("<li><span class='clickItem'>" + newToDo.item + "</span></li>");

    $('#outputList').children("li").click(function(){
      $(this).hide();
    });

    // $(".btn").on('click', function () {
    //   $('div#check').append('<input type="checkbox" name="myCheckbox" />' + $("").val());
    // });

    $('input#new-item').val("");
  });
});
