// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65

var km,eta,prezzo,under18,over65,prezzoscontato18,prezzoscontato65;
// chiedo numero km
km = prompt("Quanti chilometri devi percorrere?");


// chiedo età
eta = prompt("Quanti anni hai?");

// prezzo
prezzo = 0.21* km;
console.log(prezzo);

// sconto under18
under18 = prezzo / 100 * 20 ;
console.log(under18);
//over65
over65 = prezzo / 100 * 40 ;
console.log(over65);

if(eta < 18){
  prezzoscontato18 = prezzo - under18;
  console.log(prezzoscontato18);
}if else(eta > 65){
  prezzoscontato65 = prezzo - over65;
  console.log(over65);
}
//
// prezzoover65 = prezzo - 40%
//
// if(eta < 18){
//   prezzo = prezzominorenni ;
//   console.log(prezzo)
// }if else(eta > 65){
//   prezzo = prezzoover65;
//   console.log(prezzo)
// }else{
//   prezzo = prezzo;
//   console.log(prezzo)
//
// }
