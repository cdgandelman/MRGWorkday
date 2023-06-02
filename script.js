$(function () {
    // TODO: Add a listener for click events on the save button.
    $('.saveBtn').on('click', function () {
      // Get the user input from the textarea
      var description = $(this).siblings('.description').val();
  
      // Get the id of the containing time-block
      var timeBlockId = $(this).parent().attr('id');
  
      // Save the user input in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, description);
    });
  
    // TODO: Apply the past, present, or future class to each time block
    $('.time-block').each(function () {
      // Get the id of the time-block
      var timeBlockId = $(this).attr('id');
  
      // Get the current hour using Day.js
      var currentHour = dayjs().hour();
      var timeBlockHour = parseInt(timeBlockId.split('-')[1]);  
      // Compare the time-block id to the current hour and add the appropriate class
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  
    // TODO: Get the user input from localStorage and set the textarea values
    $('.time-block').each(function () {
      // Get the id of the time-block
      var timeBlockId = $(this).attr('id');
  
      // Get the user input from localStorage using the time-block id as the key
      var description = localStorage.getItem(timeBlockId);
  
      // Set the textarea value with the user input
      $(this).find('.description').val(description);
    });
  
    // TODO: Display the current date in the header of the page
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDate);
  });
  