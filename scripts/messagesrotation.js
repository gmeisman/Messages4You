function getRandomElement(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

let OGquotes = ['"The best thing to hold onto in life is each other." - Audrey Hepburn', '"Where this is love ther is life." -Mahatma Gandhi', '"I have decided to stick with love. Hate is too great a burden to bear." - Martin Luther King, Jr.', '"We are shaped and fashioned by those we love." - Goethe', '"Love is not only something you feel, it is something yoiu do." - David Wilkerson']

let date = null
let message = null

function getDate(message){
    fetch('date.txt')
        .then(response => response.text())
        .then(data => {
            date = data;
            let elementContainer = document.getElementById("message");
            elementContainer.textContent = message.toString()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

fetch('messages.txt')
    .then(response => response.text())
    .then(data => {
        message = data;
        getDate(message)
        console.log(message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function getChosenQuote(message, date){
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
}

//This is going to be the part that writes to the txt files
function updateFiles(file){
    fetch(file, {
        headers: {
            'Authorization': `Token $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`
        }
    })
    .then(res => res.json())
    .then(newContent = doSomeModifications('"Where this is love ther is life." -Mahatma Gandhi'))
}

updateFiles('messages.txt');
/*function runAtMidnight(){
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
}

function timeTillMidnight() {
    const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0
    );
    return midnight - now;
}*/

/*
setTimeout(runAtMidnight, timeTillMidnight());
let elementContainer = document.getElementById("message");
elementContainer.textContent = message.toString()*/
console.log(message);

//Copywrite Year
/*setElementText(".Message", (chosenQuote).toString());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}*/