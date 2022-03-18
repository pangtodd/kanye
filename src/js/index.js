import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import KanyeService from './ye.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showImg').text("");
  $('.showDescription').text("");
  // $('.showGif').text("");
}

$(document).ready(function() {
  $('#results').click(function() {
    clearFields();
    let promise = KanyeService.getYe();
    promise.then(function(response) {
      const body = JSON.parse(response);
      // $('.showImg').append(`<img src = "${}">`);
      $('.showQuote').text(`${body.quote}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
