// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

// BEGIN new burger button----------
$("#new-burger-button").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('new-burger-button clicked!!')

    var newBurger = {
      name: $("#new-burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", { 
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger!");
        // Reload the page to get the updated list
        location.reload();
        $('#new-burger-name').empty();
      }
    );
  });
// END new burger button------------

function changedevoured(x) {
  if (x === 0) {
    return 1;
  } else {
    return 0;
  } 
};

    $(".change-devoured").on("click", function(event) {
      console.log('change-devoured clicked!');
      var id = $(this).data("id");
      console.log('id = ', id)
      var currentDevoured = $(this).data('devoured');
      let newDevoured = changedevoured(currentDevoured);
      console.log(currentDevoured, newDevoured);

  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log(`changed devoured from ${currentDevoured} to ${newDevoured}` );
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

  });
  