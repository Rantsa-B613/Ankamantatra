
// AUDIO DU QUIZZ
const Audioeach = document.getElementById("AudioQuizz");
const tableau = [
    { audio: "AUDIO/01.mp3"},
    { audio: "AUDIO/SARY.mp3"},
    { audio: "AUDIO/0.mp3"},
];





// BOUTON KILALAO 
function ChoixQuizz() {
    let AcceuilQizz = document.getElementById("Quizz");
    AcceuilQizz.style.display = "none";

    let pageChoix = document.getElementById("SelectionDeQuizz");
    pageChoix.style.display = "block";

    Audioeach.src = tableau[0].audio;
}

// BOUTON SELECTION DE QUIZZ
function SaryIrayQuizz() {
    let QizzChoisi = document.getElementById("SelectionDeQuizz");
    QizzChoisi.style.display = "none";

    let pageChoixUn = document.getElementById("SaryIrayTenyIray");
    pageChoixUn.style.display = "block";

}
function AnkamantQuizz() {
    let QizzChoisi = document.getElementById("SelectionDeQuizz");
    QizzChoisi.style.display = "none";

    let pageChoixDeux = document.getElementById("Ankamantatra");
    pageChoixDeux.style.display = "block";

}
function SaryEfatraQuizz() {
    let QizzChoisi = document.getElementById("SelectionDeQuizz");
    QizzChoisi.style.display = "none";

    let pageChoixTrois = document.getElementById("SaryIrayTenyEfatra");
    pageChoixTrois.style.display = "block";

}

// COMMENCER LE QUIZZ
function QuizzSaryIray() {
    let pageChoixUn = document.getElementById("SaryIrayTenyIray");
    pageChoixUn.style.display = "none";

    let QuizzSaryIrayTenyIray = document.getElementById("QuizzSaryIrayTenyIray");
    QuizzSaryIrayTenyIray.style.display = "block";

    Audioeach.src = tableau[1].audio;
}
function QuizzAnkamanatatrta() {
    let pageChoixUn = document.getElementById("Ankamantatra");
    pageChoixUn.style.display = "none";

    let QuizzSaryIrayTenyIray01 = document.getElementById("QuizzAnakamantatra");
    QuizzSaryIrayTenyIray01.style.display = "block";

    Audioeach.src = tableau[1].audio;
}
function QuizzSaryEfatra() {
    let pageChoixUn = document.getElementById("SaryIrayTenyEfatra");
    pageChoixUn.style.display = "none";

    let QuizzSaryIrayTenyIray02 = document.getElementById("QuizzSaryIrayTenyEfatra");
    QuizzSaryIrayTenyIray02.style.display = "block";

    Audioeach.src = tableau[1].audio;
}

// REVENIR AU CHOIX DE QUIZZ
function Retour() {
    let pageChoix = document.getElementById("SelectionDeQuizz");
    pageChoix.style.display = "block";

    let pageChoixUn = document.getElementById("SaryIrayTenyIray");
    pageChoixUn.style.display = "none";
    let QuizzSaryIrayTenyIray = document.getElementById("QuizzSaryIrayTenyIray");
    QuizzSaryIrayTenyIray.style.display = "none";
    let pageChoixDeux = document.getElementById("Ankamantatra");
    pageChoixDeux.style.display = "none";
    let QuizzSaryIrayTenyIray01 = document.getElementById("QuizzAnakamantatra");
    QuizzSaryIrayTenyIray01.style.display = "none";
    let pageChoixTrois = document.getElementById("SaryIrayTenyEfatra");
    pageChoixTrois.style.display = "none";
    let QuizzSaryIrayTenyIray02 = document.getElementById("QuizzSaryIrayTenyEfatra");
    QuizzSaryIrayTenyIray02.style.display = "none";

    Audioeach.src = tableau[0].audio;

}

let kilalaobtn = document.getElementById('ButtonLogo');
kilalaobtn.addEventListener("click", ChoixQuizz);
let SaryIray = document.getElementById('ButtonQuiz01');
SaryIray.addEventListener("click", SaryIrayQuizz);
let Ankamant = document.getElementById('ButtonQuiz02');
Ankamant.addEventListener("click",AnkamantQuizz);
let SaryEfatra = document.getElementById('ButtonQuiz03');
SaryEfatra.addEventListener("click", SaryEfatraQuizz);

let EnySaryIray= document.getElementById('BoutonEnyVOalohany');
EnySaryIray.addEventListener("click", QuizzSaryIray);
let Ankamantatra12 = document.getElementById('BoutonEnyFaharoa');
Ankamantatra12.addEventListener("click", QuizzAnkamanatatrta)
let EnySaryEfatra = document.getElementById('BoutonEnyFahatelo');
EnySaryEfatra.addEventListener("click", QuizzSaryEfatra);

let retoutchoix01 = document.getElementById('retour01');
retoutchoix01.addEventListener("click", Retour);
let retoutchoix02 = document.getElementById('retour02');
retoutchoix02.addEventListener("click", Retour);
let retoutchoix03 = document.getElementById('retour03');
retoutchoix03.addEventListener("click", Retour);
let retoutchoix04 = document.getElementById('retour04');
retoutchoix04.addEventListener("click", Retour);
let retoutchoix05 = document.getElementById('retour05');
retoutchoix05.addEventListener("click", Retour);
let retoutchoix06 = document.getElementById('retour06');
retoutchoix06.addEventListener("click", Retour);










