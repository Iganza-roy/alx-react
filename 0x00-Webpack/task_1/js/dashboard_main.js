import $ from 'jquery';
import debounce from 'lodash/debounce';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn">Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let clickCount = 0;

let updateCounter = () => {
  clickCount += 1;
  $('#count').text(`${clickCount} clicks on the button`);
};

const debouncedUpdaterCounter = debounce(updateCounter, 300);

$('#btn').on('click', debouncedUpdaterCounter);
