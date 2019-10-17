// NOTE: TRACCIA
// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65


// dichiarazione variabili
var km,eta,prezzoStandard,under18,over65,prezzoScontato18,prezzoScontato65;

// chiedo numero km
km = prompt("Quanti chilometri devi percorrere?");
console.log("questa è la distanza che devi percorrere: " + km + "km");

// chiedo età
eta = prompt("Quanti anni hai?");
console.log("questa è la tua età: " + eta);

// prezzo standard
prezzoStandard = 0.21* km;
console.log("prezzo standard: " + prezzoStandard + "€");

// sconto under18
under18 = prezzoStandard / 100 * 20 ;
console.log("sconto per under18 : " + under18 + "€");

// sconto over65
over65 = prezzoStandard / 100 * 40 ;
console.log("sconto per over65 : " + over65 + "€");

if(eta < 18){
  prezzoScontato18 = prezzoStandard - under18;
  console.log("questo è il prezzo per gli under18: " + prezzoScontato18 + "€");

}else if(eta > 65){
  prezzoScontato65 = prezzoStandard - over65;
  console.log("questo è il prezzo per gli over65: " + prezzoScontato65 + "€");

}else{
  prezzoStandard = prezzoStandard;
  console.log("tu paghi : " + prezzoStandard + "€");
}
