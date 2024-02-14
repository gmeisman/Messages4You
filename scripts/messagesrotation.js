function getRandomElement(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

let quotes = ['"The best thing to hold onto in life is each other." - Audrey Hepburn', '"Where this is love ther is life." -Mahatma Gandhi', '"I have decided to stick with love. Hate is too great a burden to bear." - Martin Luther King, Jr.', '"We are shaped and fashioned by those we love." - Goethe', '"Love is not only something you feel, it is something yoiu do." - David Wilkerson']
let chosenQuote = "empty";
let currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
let specificDate = new Date(2024, 1, 14)
specificDate.setHours(0, 0, 0, 0)
if(specificDate.getDate() == currentDate.getDate()){
    chosenQuote = "Happy Valentines Day! 💓"
}
else{
    chosenQuote = getRandomElement(quotes)
}

let elementContainer = document.getElementById("message");
elementContainer.textContent = chosenQuote.toString()
//Copywrite Year
/*setElementText(".Message", (chosenQuote).toString());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}*/