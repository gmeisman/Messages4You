//Copywrite Year
setElementText("#copywrite-year", (new Date()).getFullYear());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}