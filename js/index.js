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

// #4 drag (An element or text selection is being dragged (Fired continuously every 350ms).) / drop (An element is dropped on a valid drop target.)
 
document.querySelectorAll('img, p').forEach(elem => {
    elem.ondrag = (event) => {
        if(event.target.tagName.toLowerCase() === 'img') {
            elem.src = 'img/bananas.jpeg';
        }
        if(event.target.tagName.toLowerCase() === 'p') {
            elem.style.display = 'none';
        }
    }
});

// #5 load (A resource and its dependent resources have finished loading.)
window.addEventListener('load', (event) => {
    const myArea = document.createElement('textarea'); //creating new element <textarea>
    myArea.className = 'test-input'; // set class name
    myArea.style.width = '200px';
    myArea.style.marginTop = '20px';
    myArea.style.display = 'none'; // <---- <textarea> styling
    const myParrent = document.querySelector('.destination'); // grabing parent
    myParrent.appendChild(myArea);
    document.body.style.backgroundImage = 'repeating-linear-gradient(45deg, yellow, yellow 10px, red 10px, red 20px)';
    document.body.style.color = '#164566';
});


// #6 focus (An element has received focus (does not bubble).)
let anchors = document.querySelectorAll('a');
anchors.forEach(elem => {
    elem.onfocus = (event) => {
        elem.style.border = '1px #212529 solid';
        elem.style.backgroundColor = '#17A2B8';
        elem.style.padding = '5px';
        elem.style.color = 'white';
        elem.style.borderRadius = '5px';
        event.stopPropagation();
    }
// #7 blur (An element has lost focus (does not bubble).)
    elem.onblur = (event) => {
        elem.style.border = 'none';
        elem.style.backgroundColor = 'transparent';
        elem.style.padding = '0';
        elem.style.color = '#212529';
        elem.style.borderRadius = 'none';
    }
    elem.onclick = (event) => {
        event.preventDefault(); //prevent refreshing the page
    }
});

// #8 scroll (The document view or an element has been scrolled.)
window.addEventListener('scroll', (event) => {
    body.style.background = 'linear-gradient(55deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 85%)'; 
});

// #9 dblclick (A pointing device button is clicked twice on an element.)
let firstButton = document.querySelector('.btn');

firstButton.addEventListener('dblclick', (event) => {
    let myArea = document.querySelector('.test-input');
    myArea.style.display = 'initial';
    myArea.innerHTML = 'You clicked this button!';
});

firstButton.addEventListener('click', (event) => {
    let myArea = document.querySelector('.test-input');
    myArea.style.display = 'initial';
    myArea.innerHTML = 'Hello!';
    firstButton.style.color = '#17A2B8';
});

// #10 select (Some text is being selected.)
//NOTE: in HTML, select events can be dispatched only on form <input type="text"> and <textarea> elements
//NOTE: we can't put eventListener directly on the dinamically created element

document.querySelector('body').addEventListener('select', function(event) {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        let myTextArea = document.querySelector('.test-input');
        myTextArea.innerHTML = '';
    }
});

// resize (The document view has been resized.)
//TO-DO: change all img

// document.querySelector('body').addEventListener('click', function(event) {
//     let allImgs = document.querySelectorAll('img');
//     allImgs.forEach(elem => {
//         elem.src = './img/bananas.jpeg';
//     });
// });



// wheel (A wheel button of a pointing device is rotated in any direction.