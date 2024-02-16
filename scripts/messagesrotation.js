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
    const GitHubAPI = 'https://api.github.com/repos/gmeisman/Messages4You/contents/messages.txt';
    fetch(GitHubAPI, {
        headers: {
            //'Authorization': `Token $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`
            //'Authorization': `Token $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`
            //'Authorization': `Token $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`
            'Authorization': `Token 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`

        }
    })
    .then(res => res.json())
    .then(data => {
        let newContent = '"Where this is love ther is life." -Mahatma Gandhi';

        //pushing the change
        return fetch(GitHubAPI, {
            headers: {
                'Authorization': `Token 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`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'commit message',
                conent: btoa(newContent),
                sha: data.sha
            })
        });
    })
    .then(res => res.json())
    .then(data => console.log(data));
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