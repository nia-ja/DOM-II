// Your code goes here

// ====== create 10 event listeners and update the DOM in creative ways ======

// #1 mouseover (A pointing device is moved onto the element that has the listener attached or onto one of its children.)
document.querySelectorAll('.btn').forEach(node => {
    node.onmouseover =  (event) => {
        node.style.color = "#f9c27a";
        node.style.backgroundColor = "white";
        event.stopPropagation();
    }
// #2 mouseleave (A pointing device is moved off the element that has the listener attached.)
    node.onmouseleave = (event) => {
        node.style.color = "white";
        node.style.backgroundColor = "#f9c27a";
        event.stopPropagation();
    }
});

// #3 keydown (ANY key is pressed.)
let body = document.querySelector('body');
let navigation = document.querySelector('.main-navigation');
body.addEventListener('keydown', (event) => {
    body.style.backgroundColor = '#e0f9ff';
    navigation.style.backgroundColor = 'rgba(255, 235, 205, 0.8)';
});

// wheel (A wheel button of a pointing device is rotated in any direction.)


// #4 drag (An element or text selection is being dragged (Fired continuously every 350ms).) / drop (An element is dropped on a valid drop target.)
let noImage = document.querySelectorAll('img');
noImage.forEach(elem => {
    elem.ondrag = (event) => {
        elem.style.opacity = '.5';
        event.stopPropagation();
    }
});

// load (A resource and its dependent resources have finished loading.)




// #5 focus (An element has received focus (does not bubble).)
let anchors = document.querySelectorAll('a');
anchors.forEach(elem => {
    elem.onfocus = (event) => {
        elem.style.border = '1px #212529 solid';
        elem.style.backgroundColor = '#17A2B8';
        elem.style.padding = '5px';
        elem.style.color = 'white';
        elem.style.borderRadius = '5px';
    }
// #6 blur (An element has lost focus (does not bubble).)
    elem.onblur = (event) => {
        elem.style.border = 'none';
        elem.style.backgroundColor = 'transparent';
        elem.style.padding = '0';
        elem.style.color = '#212529';
        elem.style.borderRadius = 'none';
    }
});

// resize (The document view has been resized.)
//TO-DO: img animation?

// #7 scroll (The document view or an element has been scrolled.)
window.addEventListener('scroll', (event) => {
    body.style.background = 'linear-gradient(55deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 85%)'; 
    event.stopPropagation();
    event.preventDefault();
});

// select (Some text is being selected.) NO ELEMENT TO APPLY ON
//NOTE: in HTML, select events can be dispatched only on form <input type="text"> and <textarea> elements
//TO-DO: create text area where should be output of dblclick appear, onselect -> text - display:none.

//dblclick (A pointing device button is clicked twice on an element.)