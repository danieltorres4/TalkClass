const btnStartRecord = document.querySelector('.start-record');
const btnStopRecord = document.querySelector('.stop-record');
const btnStartStudentAnswer = document.querySelector('.start-studentanswer');
const texto = document.querySelector('.texto');
const resultQuestion = document.querySelector('.result');

var flag = false;
var counter = 0;
var studentAnswer = "";
var sswwrtpk = 0; //similar student's words with respect to professor's keywords
var questionScore = 0;
var finalScore = 0;
keyWords = ["ciencia","ingeniería","inteligentes","inteligencia humana"];
var professorConcept = "Es la ciencia y la ingeniería de crear máquinas inteligentes, especialmente programas de computación inteligentes, que comprendan la inteligencia humana";

class voiceRec {
    constructor() {
        this.createAnswer();
    }

    createAnswer() {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'es-MX';
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const results = event.results;
            const phrase = results[results.length-1][0].transcript;
            texto.value += phrase;
        }
        
        recognition.onend = (event) => {
            console.log("Recording stop");
            console.log("Score: " + questionScore);
            resultQuestion.value = questionScore;

            sswwrtpk = 0;
            questionScore = 0;
        }
        
        recognition.onerror = (event) => { 
            console.log(event.error);
        }
        
        btnStartRecord.addEventListener('click', () => {
            recognition.start();
        });
        
        btnStopRecord.addEventListener('click', () => {
            recognition.abort();
            studentAnswer = getText(texto.value)
        
            /* METHOD TO EVALUATE KEYWORDS IN STUDENT'S ANSWER */
            for(var i = 0; i < keyWords.length; i++){
                var word = keyWords[i]
                var myRegex = new RegExp(word);
        
                if(myRegex.test(studentAnswer)) {
                    counter += 1;
                    console.log("MATCH FOUND\nStudent: " + studentAnswer.match(myRegex) + "\t\t Professor keyword: " + myRegex);
                } else {
                    console.log("MATCH NOT FOUND\nStudent: " + studentAnswer.match(myRegex) + "\t\t Professor keyword: " + myRegex);
                }
        
            }

            /* METHOD TO EVALUATE STUDENT'S ANSWER WITH CONCEPT OPTION*/
            professorRegExp = new RegExp(professor); 
            if(student.match(professorRegExp) != null) {
                finalScore = 1;
            }   
            

            sswwrtpk = counter;
            questionScore = sswwrtpk / keyWords.length;
            finalScore += questionScore;
        
            console.log("\n\nKeywords that appeared in the student's answer: " + sswwrtpk)
            console.log("Professor's keywords: " + keyWords.length)
            console.log("Question score: " + questionScore)

            
        });
        
        
        
        function getText(text) {
            const speech = new SpeechSynthesisUtterance();
        
            speech.text = text;
            speech.volume = 0.8;
            speech.rate = 1;
            speech.pitch = 1;
        
            window.speechSynthesis.speak(speech);
        
            printScore(speech.text);
        
            return speech.text
        }
        
        function printScore(score) {
        
        }
    }
    
}


const startStudentAnswer = () => {
    flag = true;
    if(flag == true){
        new voiceRec();
        console.log("Se empezó la respuesta");
        flag = false;
    }
}
    
btnStartStudentAnswer.addEventListener('click', startStudentAnswer);



/*
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-MX';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const phrase = results[results.length-1][0].transcript;
    texto.value += phrase;
}

recognition.onend = (event) => {
    console.log("Recording stop");
    console.log("Score: " + questionScore);
    resultQuestion.value = questionScore;
}

recognition.onerror = (event) => { 
    console.log(event.error);
}

btnStartRecord.addEventListener('click', () => {
    recognition.start();
});
*/
/*
btnStopRecord.addEventListener('click', () => {
    recognition.abort();
    studentAnswer = getText(texto.value)*/

    /* METHOD TO EVALUATE KEYWORDS IN STUDENT'S ANSWER */
    /*for(var i = 0; i < keyWords.length; i++){
        var word = keyWords[i]
        var myRegex = new RegExp(word);

        if(myRegex.test(studentAnswer)) {
            counter += 1;
            console.log("MATCH FOUND\nStudent: " + studentAnswer.match(myRegex) + "\t\t Professor keyword: " + myRegex);
        } else {
            console.log("MATCH NOT FOUND\nStudent: " + studentAnswer.match(myRegex) + "\t\t Professor keyword: " + myRegex);
        }

    }
    sswwrtpk = counter;
    questionScore = sswwrtpk / keyWords.length;
    finalScore += questionScore;

    console.log("\n\nKeywords that appeared in the student's answer: " + sswwrtpk)
    console.log("Professor's keywords: " + keyWords.length)
    console.log("Question score: " + questionScore)
});



function getText(text) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = text;
    speech.volume = 0.8;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    printScore(speech.text);

    return speech.text
}

function printScore(score) {

}

const startStudentAnswer = () => {
    new voiceRec();
    console.log("Se empezó la respuesta");
    flag = true
}
    
btnStartStudentAnswer.addEventListener('click', startStudentAnswer);


*/