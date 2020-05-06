// Main JavaScript File
'use strict';

let state = {
    text: 'Here is some text.'
};

let myArray = ["sky", "tree", "squirrel", "bird", "bees", "Puget Sound", "fake grass"]

let fel = _.first(myArray);
let lel = _.last(myArray);
let third = _.nth(myArray, -3);
let chunky = _.chunk(myArray, 4);
let slicey = _.slice(myArray, 3, -2);
let rando = _.random(60);
let sammy = _.sample(myArray);
let shuff = _.shuffle(myArray);

console.log(fel);
console.log(lel);
console.log(third);
console.log(chunky);
console.log(slicey);
console.log(rando);
console.log(sammy);
console.log(shuff);

// Wait for you page to load to assign events to the elements created in your index.html File
$(function () {
    // Select all svgs and change their attr "height" to 200
    $('svg').attr('height', 200);

    // Select your first svg and change it's width attribute to 10
    $('svg:first').attr('width', 10);

    // Select the input and set the attribute "placeholder" to "start typing"
    $('input').attr('placeholder', 'start typing');

    // Set the input val to state.text
    $('input').val(state.text);

    // Select elements with class "italics" and set their css "font-style", to "italic"
    $('.italics').css('font-style','italic')

    // Select even rows in the table and set their css "background" to "lightgray"
    $('tr:even').css('background','lightgray');

    // Assign an event handler to the <input> element that updates state.text
    $('input').on('change', function (){
        state.text = $(this).val();
        console.log(state.text);
    });

    // Create a new paragraph, add some text, and add it as the *first* element in the <main> tag
    let p = $('<p>');
    p.text('I made some new text!');
    $('main').prepend(p);

    // Assign an click event to the <button> element that changes the text of 
    // element with id "change" to the state.text, and resets the input
    $('button').on('click', function(){
        $('#change').text(state.text);
        $('input').val('');
    });

});
