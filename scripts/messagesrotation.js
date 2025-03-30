function getRandomElement(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

let OGquotes = ['"The best thing to hold onto in life is each other." - Audrey Hepburn', '"Where this is love ther is life." -Mahatma Gandhi', '"I have decided to stick with love. Hate is too great a burden to bear." - Martin Luther King, Jr.', '"We are shaped and fashioned by those we love." - Goethe', '"Love is not only something you feel, it is something yoiu do." - David Wilkerson']

let date = null
let message = null
/*
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
*/
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

/*let phrase = null;
function newmessage(){
    phrase = document.getElementById("newMessage")
    console.log(phrase)
    quotes.push(phrase);
    console.log(quotes)
}*/
function runAtMidnight(){
    let oldquotes = ['"Where this is love there is life." -Mahatma Gandhi', 'I still remember sitting in a car with a switch and rocket league. I remember being so nervous I didnt think I could ever do anything again. I didnt know if I had to poop, pee, or to just lean over and take your hand. The following days when we leaned on eachother at Craigs place made me more giddy than any other feeling in the world.', "You are", '"We are shaped and fashioned by those we love." - Goethe', '"Love is not only something you feel, it is something yoiu do." - David Wilkerson', '"Where this is love there is life." -Mahatma Gandhi','I cannot believe how lucky I am too have you. I have never been more blessed than in the moment I laid eyes on you. God blessed me and set us up to be together forever! I Love You!', 'The times taht I hold you are the times I feel most alive. It is funny that the time I am most comfortable isnt when I am home or any certain place but rather when I am in your arms.', 'Never give up baby! If you ever start to struggle just call me. You will always be believed in. So if you ever doubt yourself, just remember I dont doubt you.']
    let oldquotes2 = ["Things in life will always happen. Good, bad, happy, sad, life, death, yin, and yang. There will always be balance. The one thing that you can count on is that I will always be there for you and that I love you. Nothing will ever change that.", "I am in love with you. Nothing, no distance, no fear no anything will ever change that. I will always be with you in your heart, just as you will always be in mine 😘.", "I will always be looking for ways to improve your life. Not because I think you need to have more stuff or because I am trying to buy your affection. I am going to get yoiu things because I love you enough to want to improve your life anyway that I can."]
    let oldquotes3 = ["You are invincible. Don't forget that. You will always be the one person that I would bet on changing the world. I love you!", "I miss you baby. I hope that you always remember that I will love you! Never forget your worth!", "I love you baby. You are one of the people that has made my life so beautiful. You are the Vango that has started to make my life a master piece!", "You're so hot that if you were bread you would poop out toast!", "You are sweeter than anything on this Earth. You give life more meaning by being the flavor of my life. Lighting everything up."]
    let quotes = ["You will not know the effect of what you do now until later. So dont doubt your value now when you know your emense value from the past."]
    let chosenQuote = "I Love You!";
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let specificDate0 = new Date(2024, 4, 24)
    specificDate0.setHours(0, 0, 0, 0)
    let specificDate1 = new Date(2024, 4, 25)
    specificDate1.setHours(0, 0, 0, 0)
    let specificDate2 = new Date(2024, 4, 26)
    specificDate2.setHours(0, 0, 0, 0)
    let specificDate3 = new Date(2024, 4, 27)
    specificDate3.setHours(0, 0, 0, 0)
    let specificDate4 = new Date(2024, 4, 28)
    specificDate4.setHours(0, 0, 0, 0)
    let specificDate5 = new Date(2024, 4, 29)
    specificDate5.setHours(0, 0, 0, 0)
    let specificDate6 = new Date(2024, 4, 30)
    specificDate6.setHours(0, 0, 0, 0)
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
    else{
        chosenQuote = "You are special. You have no idea the power you have on me and the influence you have on me. I am so sorry for making you feel so tiny, unimportant and belittled. Thank you for being such a patient and strong example. Let me know when you wee this and I will change it up.";
    }
    setElementText("#message", chosenQuote);

    function setElementText(element, text){
        document.querySelector(element).innerText = text;
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
//console.log(chosenQuote);
runAtMidnight()
//Copywrite Year
/*setElementText(".Message", (chosenQuote).toString());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}*/