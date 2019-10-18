// NOTE: TRACCIA
// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65

// dichiarazione variabili
var nome,cognome,km,eta,prezzoStandard,under18,over65,silente,prezzoScontato18,prezzoScontato65,prezzoScontatoSilente,numRand,sesso;

// creo il random per il codice Biglietto
numRand = Math.floor(Math.random() * 1000000000000);
document.getElementById('random').innerHTML = numRand;

//creo funzione per convalida Biglietto
function convalida(){
  document.getElementById('convalida').style = "background:green";
  document.getElementById('convalida').innerHTML = "Biglietto convalidato";
}

//chiedo nome
nome = prompt("Buongiorno, come ti chiami?");
document.getElementById('nome').innerHTML = nome;
//chiedo cognome
cognome = prompt("E qual è il tuo cognome?");
document.getElementById('cognome').innerHTML = cognome;

// chiedo numero km
km = parseInt(prompt("Quanti chilometri devi percorrere?"));
document.getElementById('tratta').innerHTML = km + " km"
// console.log("questa è la distanza che devi percorrere: " , km , "km");

// chiedo età
eta = parseInt(prompt("Quanti anni hai?"));
document.getElementById('anni').innerHTML = eta + " anni"
// console.log("questa è la tua età: ",eta);

sesso = prompt("Sei un uomo o una donna? m/f");
if(sesso == "m" || sesso == "M"){
  document.getElementById('m_f').innerHTML = "uomo";
}else{
  document.getElementById('m_f').innerHTML = "donna";
}

// prezzo standard
prezzoStandard = parseFloat(0.21* km);
// console.log("prezzo standard: ", prezzoStandard, "€");

// imposto le condizioni

//condizioni per età superiore o inferiore a 12anni
if(eta > 12){
function show(){
  document.getElementById('ticket').style = "text-shadow: 0 0 0px white";
  document.getElementById('ticket').style = "color:white";
  document.getElementById('ticket').style.transition = "all 3s";
  }
}else if(eta < 12){
  function show(){
    document.getElementById('notwizard').innerHTML = "Mi dispiace , ma tu non sei un mago , torna a casa!";
  }
}
if(eta < 18){
  under18 = parseFloat(prezzoStandard / 100 * 20) ;
  prezzoScontato18 = prezzoStandard - under18;
  if(sesso === "m" || sesso === "M"){
    document.getElementById('foto').innerHTML = "<img src='img/harry-potter-700x467.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve aspirante mago il prezzo del tuo biglietto è: " + prezzoScontato18 + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/hermione.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve aspirante maga il prezzo del tuo biglietto è: " + prezzoScontato18 + "€" ;
  }
}else if(eta>100 ){
  silente = parseFloat(prezzoStandard / 100 * 100);
  prezzoScontatoSilente = prezzoStandard - silente;
  if(sesso === "m" || sesso === "M"){
    document.getElementById('foto').innerHTML = "<img src='img/silente.jpg'>"
    document.getElementById('ticket').innerHTML = "Oddìo Silente è proprio lei ?!Per lei il prezzo del biglietto è : " + prezzoScontatoSilente + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/mcgranitt.jpg'>"
    document.getElementById('ticket').innerHTML = "Oddìo Professoressa Mcgranitt è proprio lei ?!Per lei il prezzo del biglietto è : " + prezzoScontatoSilente + "€" ;
  }
}else if(eta > 65){
  over65 = parseFloat(prezzoStandard / 100 * 40) ;
  prezzoScontato65 = prezzoStandard - over65;
  if(sesso === "m" || sesso === "M"){
    document.getElementById('foto').innerHTML = "<img src='img/piton.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve mago il prezzo del tuo biglietto è: " + prezzoScontato65 + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/mcgranitt.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve maga il prezzo del tuo biglietto è: " + prezzoScontato65 + "€" ;
  }
}else{
  prezzoStandard = prezzoStandard;
  if(sesso === "m" || sesso === "M"){
    document.getElementById('foto').innerHTML = "<img src='img/Sirius-Black.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve mago in erba il prezzo del tuo biglietto è: " + prezzoStandard + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/cho-chang.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve maga in erba il prezzo del tuo biglietto è: " + prezzoStandard + "€";
  }
}





// inserisco il numero di biglietto random in pagina
