// get start code javascript project Virtual Keyboard
let $ = document;
// -> variables of const
const titleElm = $.querySelector(".title");
const btnChangeTheme = $.querySelector(".btn-changeTheme");


// function set animation keyBoard
function setAnimationHandler (event) {
    let eventKeyValue = event.key.toUpperCase();
    let mainKeyElm = $.getElementById(eventKeyValue);

    // append data keyboard to title panel
    appendDataKeyboard(event);

    // add class animation
    mainKeyElm.classList.add("animeActive");

    // add event listener for animation end
    mainKeyElm.addEventListener("animationend",function () {
        // remove class animation
        mainKeyElm.classList.remove("animeActive");
    });
}

// -> function append data keyboard to title panel
function appendDataKeyboard (event) {
    // Condition
    titleElm.innerHTML.length > -1 ? titleElm.classList.remove("title-panel") : titleElm.classList.add("title-panel");
    // condition's 
    if (event.key === "Backspace") {
        titleElm.innerHTML = titleElm.innerHTML.slice(0,-1);
        return
    } else if (event.key === "Enter") {
        event.key = null;
        return
    } else if (event.key === "Control") {
        event.key = null;
        return
    } else if (event.key === "CapsLock") {
        event.key = null;
        return
    } else if (event.key === "Tab") {
        event.key = null;
        return
    } else if (event.key === "Escape") {
        event.key = null;
        return
    }

    

    // append event key to title panel element 
    titleElm.innerHTML += event.key;
}














// -> add event listeners for set animation form the keyboard clicked user
document.addEventListener("keyup",setAnimationHandler);