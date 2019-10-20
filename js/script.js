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
if (nome.length < 1 || !isNaN(nome)){
    alert("E tu saresti un mago ?Non sai nemmeno leggere! Inserisci il tuo nome.")
}//condizione per obbligare a scrivere una parola e non lasciare il campo vuoto

//chiedo cognome
cognome = prompt("E qual è il tuo cognome?");
document.getElementById('cognome').innerHTML = cognome;
if (cognome.length < 1 || !isNaN(cognome)){
  alert("E tu saresti un mago ?" + nome + "Non sai nemmeno leggere! Inserisci il tuo cognome.")
}//condizione per obbligare a scrivere una parola e non lasciare il campo vuoto

// chiedo numero km
km = parseInt(prompt("Quanti chilometri devi percorrere?"));
document.getElementById('tratta').innerHTML = km + " km";
if (isNaN(km)){
  alert("E tu saresti un mago " + nome + " " + cognome + "? Non sai nemmeno leggere! Inserisci un valore numerico corretto.")
}//condizione per obbligare a scrivere un numero nel campo km

// chiedo età
eta = parseInt(prompt("Quanti anni hai?"));
document.getElementById('anni').innerHTML = eta + " anni";
if (isNaN(eta)){
  alert("E tu saresti un mago " + nome + " " + cognome + "? Non sai nemmeno leggere! Inserisci un valore numerico corretto.")
}//condizione per obbligare a scrivere un numero nel campo età

// chiedo il sesso
sesso = prompt("Sei un uomo o una donna? m/f");
if(sesso == "m" || sesso == "M"){
  document.getElementById('m_f').innerHTML = " Uomo";
}else if(sesso == "f" || sesso == "F"){
  document.getElementById('m_f').innerHTML = " Donna";
}else if(sesso !=="m" && sesso !=="M" && sesso !=="f" && sesso !=="F"){
  alert("E tu saresti un mago ?Non sai nemmeno leggere! Inserisci un valore corretto : M/m o F/f")
}//condizione per obbligare a scrivere M-m-F-f

// prezzo standard
prezzoStandard = parseFloat(0.21* km);

// Condizioni

//condizione per età inferiore a 12 anni
if(eta < 12){
  function show(){
    document.getElementById('notwizard').innerHTML = "Mi dispiace , ma tu non sei un mago , torna a casa!";
    document.getElementById('hidden').style.transition = "all 8s";
    document.getElementById('hidden').style.opacity = "0";
  }
  function convalida(){
    document.getElementById('convalida').style = "background:black";
    document.getElementById('convalida').innerHTML = "Biglietto non valido";
  }
// Condizione generica per far ereditare alle altre le stesse proprietà
}else{
function show(){
  document.getElementById('ticket').style = "text-shadow: 0 0 0px white";
  document.getElementById('ticket').style = "color:white";
  document.getElementById('ticket').style.transition = "all 3s";
  }
}
// condizioni per applicazione sconti
if(eta>12 && eta < 18){
  under18 = parseFloat(prezzoStandard / 100 * 20) ;
  prezzoScontato18 = prezzoStandard - under18;
  if(sesso === "m" || sesso === "M"){
    document.getElementById('foto').innerHTML = "<img src='img/harry-potter-700x467.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve aspirante mago il prezzo del tuo biglietto è: " + prezzoScontato18.toFixed(2) + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/hermione.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve aspirante maga il prezzo del tuo biglietto è: " + prezzoScontato18.toFixed(2) + "€" ;
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
    document.getElementById('foto').innerHTML = "<img src='img/piton.jpg'>";
    document.getElementById('ticket').innerHTML = "Salve mago il prezzo del tuo biglietto è: " + prezzoScontato65.toFixed(2) + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/molly.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve maga il prezzo del tuo biglietto è: " + prezzoScontato65.toFixed(2) + "€" ;
  }
}else{
  prezzoStandard = prezzoStandard;
  if(sesso === "m" || sesso === "M"){
    document.getElementById('foto').innerHTML = "<img src='img/Sirius-Black.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve mago in erba il prezzo del tuo biglietto è: " + prezzoStandard + "€" ;
  }else if(sesso === "f" || sesso === "F"){
    document.getElementById('foto').innerHTML = "<img src='img/ginny.jpg'>"
    document.getElementById('ticket').innerHTML = "Salve maga in erba il prezzo del tuo biglietto è: " + prezzoStandard + "€";
  }
}
