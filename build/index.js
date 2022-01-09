"use strict";
var body = document.getElementsByTagName('body')[0];
var h1Tag = body.querySelector('h1.title');
function handleClick(e) {
    console.log(e.target);
    console.log(e);
}
h1Tag.addEventListener('click', function (e) { return handleClick(e); });
