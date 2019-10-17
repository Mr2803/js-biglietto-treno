// NOTE: TRACCIA
// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65

// dichiarazioni variabili
var km,eta,prezzo,under18,over65,prezzoScontato18,prezzoScontato65;
// chiedo numero km
km = prompt("Quanti chilometri devi percorrere?");

// chiedo età
eta = prompt("Quanti anni hai?");

// prezzo
prezzo = 2* km;
console.log("prezzo standard " + prezzo);

// sconto under18
under18 = prezzo / 100 * 20 ;
console.log("sconto per under18 : " + under18);
// sconto over65
over65 = prezzo / 100 * 40 ;
console.log("sconto per over65 : " + over65);

if(eta < 18){
  prezzoScontato18 = prezzo - under18;
  console.log("questo è il prezzo per i minorenni: " + prezzoScontato18);

}else if(eta > 65){
  prezzoScontato65 = prezzo - over65;
  console.log("questo è il prezzo per gli over65: " + prezzoScontato65);

}else{
  prezzo = prezzo;
  console.log(prezzo);
}
