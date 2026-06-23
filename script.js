const questions = [
     {
        question: "Wer gewann die FIFA Weltmeisterschaft 2022?",
        answers: ["Frankreich", "Argentinien", "Brasilien"],
        correct: "Argentinien"
    },

    {
        question: "Welches Land hat die meisten WM-Titel?",
        answers: ["Deutschland", "Brasilien", "Italien"],
        correct: "Brasilien"
    },

    {
        question: "In welchem Jahr fand die erste FIFA Weltmeisterschaft statt?",
        answers: ["1930", "1950", "1966"],
        correct: "1930"
    },

    {
        question: "Wer gewann die FIFA Weltmeisterschaft 2014?",
        answers: ["Argentinien", "Brasilien", "Deutschland"],
        correct: "Deutschland"
    },

    {
        question: "Wie viele Mannschaften nehmen an der FIFA WM 2026 teil?",
        answers: ["32", "48", "64"],
        correct: "48"
    },

    {

    question: "Welcher Spieler gewann den Goldenen Ball der WM 2022?",
    answers: ["Lionel Messi", "Kylian Mbappé", "Luka Modrić"],
    correct: "Lionel Messi"
    },

    {
        question: "Wie viele Tore erzielte Miroslav Klose bei Weltmeisterschaften insgesamt?",
        answers: ["14", "15", "16"],
        correct: "16"
    },

    {
        question: "Wer ist Rekordtorschütze der FIFA Weltmeisterschaften?",
        answers: ["Miroslav Klose", "Pelé", "Cristiano Ronaldo"],
        correct: "Miroslav Klose"
    },

    {
        question: "Welche Nation gewann die erste FIFA Weltmeisterschaft 1930?",
        answers: ["Argentinien", "Uruguay", "Brasilien"],
        correct: "Uruguay"
    },

    {
        question: "In welchem Land fand die FIFA WM 2010 statt?",
        answers: ["Brasilien", "Südafrika", "Deutschland"],
        correct: "Südafrika"
    },

];


const question = document.querySelector(".question");
const questionNr = document.querySelector(".question-nr");
const answer = document.querySelector(".answer");
const nextBtn = document.querySelector(".quiz-btn");
const scoreText = document.querySelector("#score");
const result = document.querySelector(".result");
const quizBlock = document.querySelector(".quiz-block");
const progressBar = document.querySelector("#progress-bar");
const restartBtn = document.querySelector("#restart-btn");

let index = 0;
let score = 0;
let answered = false;

result.style.display = "none";//cacher le resultat au debut
 
function ShowQuestion(){
    answer.innerHTML ="";//alte lösung entfernen
    answered = false;

    question.textContent = questions[index].question;//text der Frage anzeigen
    questionNr.textContent = `Frage ${index + 1} von ${questions.length}`; // fragenummer
    progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;

    questions[index].answers.forEach(function(item){
        
        const btn = document.createElement("button");//create button

        btn.textContent = item;//mettre les differente  valeur
        btn.classList.add("answer-btn");//ajouter une class au bouton creer

        btn.addEventListener("click",function(){

            if (answered) {
                return;
            }

            answered = true;

            if(item == questions[index].correct){
                btn.classList.add("correct");
                score++;
                confetti();

             } 
             else{
                    btn.classList.add("wrong");
                }
            
        });
        answer.appendChild(btn);//ajouter un elemnet

    });


}


nextBtn.addEventListener("click", function() {
    index++; //aller a la question suivante
    if(index < questions.length){

        ShowQuestion();//affiche la nouvelle question
    }
    else{
        quizBlock.style.display = "none";//cacher le quiz
        result.style.display = "block";//result anzeigen
        progressBar.style.width = "100%"; //progress bar ausfüllen
       scoreText.textContent = `Du hast ${score} von ${questions.length} Punkte erreicht`
    }

});

restartBtn.addEventListener("click", function() {
    index = 0;
    score = 0;

    quizBlock.style.display = "block";
    result.style.display = "none";

    ShowQuestion();
});


function confetti() {
    for (let i = 0; i < 40; i++) {
        const ball = document.createElement("div");

        ball.textContent = "⚽";
        ball.classList.add("ball");

        ball.style.left = Math.random() * window.innerWidth + "px";
        ball.style.top = "-50px";
        ball.style.animationDuration = Math.random() * 2 + 2 + "s";

        document.body.appendChild(ball);

        setTimeout(function() {
            ball.remove();
        }, 4000);
    }
}


ShowQuestion();



