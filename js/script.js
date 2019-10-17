// NOTE: TRACCIA
// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65


// dichiarazione variabili
var km,eta,prezzoStandard,under18,over65,silente,prezzoScontato18,prezzoScontato65,prezzoScontatoSilente;

// chiedo numero km
km = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log("questa è la distanza che devi percorrere: " , km , "km");

// chiedo età
eta = parseInt(prompt("Quanti anni hai?"));
console.log("questa è la tua età: ",eta);

// prezzo standard
prezzoStandard = parseFloat(0.21* km);
console.log("prezzo standard: ", prezzoStandard, "€");

// sconto under18
under18 = parseFloat(prezzoStandard / 100 * 20) ;
console.log("sconto per under18 : " , under18 , "€");

// sconto over65
over65 = parseFloat(prezzoStandard / 100 * 40) ;
console.log("sconto per over65 : " , over65 , "€");

// sconto silente
silente = parseFloat(prezzoStandard / 100 * 100);

if(eta < 18){
  prezzoScontato18 = prezzoStandard - under18;
  console.log("questo è il prezzo per gli under18: " , prezzoScontato18 , "€");
  document.getElementById('ticket').innerHTML = "Salve babbano il prezzo del tuo biglietto è: " + prezzoScontato18 + "€" ;

}else if(eta > 65){
  prezzoScontato65 = prezzoStandard - over65;
  console.log("questo è il prezzo per gli over65: " , prezzoScontato65 , "€");
  document.getElementById('ticket').innerHTML = "Salve babbano il prezzo del tuo biglietto è: " + prezzoScontato65 + "€" ;

}else if(eta>65 && eta>100){
  prezzoScontatoSilente = prezzoStandard - silente;
  // console.log("questo è il prezzo per gli over65: " , prezzoScontato65 , "€");
  document.getElementById('ticket').innerHTML = "Salve babbano il prezzo del tuo biglietto è: " + prezzoScontatoSilente + "€" ;
}else{
  prezzoStandard = prezzoStandard;
  console.log("tu paghi : " , prezzoStandard , "€");
  document.getElementById('ticket').innerHTML = "Salve babbano il prezzo del tuo biglietto è: " + prezzoStandard + "€";
}
