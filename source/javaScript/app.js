// get start code javascript project Virtual Keyboard
let $ = document;
// -> variables of const
const titleElm = $.querySelector(".title");
const btnChangeTheme = $.querySelector(".btn-changeTheme");


// function set animation keyBoard
function setAnimationHandler (event) {
    let eventKeyValue = event.key.toUpperCase();
    let mainKeyElm = $.getElementById(eventKeyValue);

    // add class animation
    mainKeyElm.classList.add("animeActive");

    // add event listener for animation end
    mainKeyElm.addEventListener("animationend",function () {
        // remove class animation
        mainKeyElm.classList.remove("animeActive");
    });
}

















// -> add event listeners for set animation form the keyboard clicked user
document.addEventListener("keyup",setAnimationHandler);