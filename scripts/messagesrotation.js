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

//This is going to be the part that writes to the txt files using a txt file, but I couldnt get it to update the txt file
/*
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

updateFiles('messages.txt');*/
//updated quotes
function runAtMidnight(){
    let quotes = ['I still remember sitting in a car with a switch and rocket league. I remember being so nervous I didnt think I could ever do anything again. I didnt know if I had to poop, pee, or to just lean over and take your hand. The following days when we leaned on eachother at Craigs place made me more giddy than any other feeling in the world.', '"Where this is love ther is life." -Mahatma Gandhi', '"I have decided to stick with love. Hate is too great a burden to bear." - Martin Luther King, Jr.', '"We are shaped and fashioned by those we love." - Goethe', '"Love is not only something you feel, it is something yoiu do." - David Wilkerson']
    let chosenQuote = "empty";
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let specificDate0 = new Date(2024, 1, 22)
    specificDate.setHours(0, 0, 0, 0)
    let specificDate1 = new Date(2024, 1, 23)
    specificDate.setHours(0, 0, 0, 0)
    let specificDate2 = new Date(2024, 1, 24)
    specificDate.setHours(0, 0, 0, 0)
    let specificDate3 = new Date(2024, 1, 25)
    specificDate.setHours(0, 0, 0, 0)
    let specificDate4 = new Date(2024, 1, 26)
    specificDate.setHours(0, 0, 0, 0)
    let specificDate5 = new Date(2024, 1, 27)
    specificDate.setHours(0, 0, 0, 0)
    let specificDate6 = new Date(2024, 1, 28)
    specificDate.setHours(0, 0, 0, 0)
    if(specificDate0.getDate() == currentDate.getDate()){
        chosenQuote = quotes[0];
    }
    else if(specificDate1.getDate() == currentDate.getDate()){
        chosenQuote = quotes[1];
    }
    else if(specificDate2.getDate() == currentDate.getDate()){
        chosenQuote = quotes[2];
    }
    else if(specificDate3.getDate() == currentDate.getDate()){
        chosenQuote = quotes[3];
    }
    else if(specificDate4.getDate() == currentDate.getDate()){
        chosenQuote = quotes[4];
    }
    else if(specificDate5.getDate() == currentDate.getDate()){
        chosenQuote = quotes[5];
    }
    else if(specificDate6.getDate() == currentDate.getDate()){
        chosenQuote = quotes[6];
    }
    /*else{
        chosenQuote = getRandomElement(quotes)
    }*/
}
/*
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
console.log(chosenQuote);

//Copywrite Year
setElementText(".Message", (chosenQuote).toString());
/*
function setElementText(element, text){
    document.querySelector(element).innerText = text;
}*/