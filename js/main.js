// rende codice più stretto
'use strict';
console.log('Collegato correttamente')

// salvo tariffa su costante
const tariffa = 0.21;
// chiedo km utente
const kmUtente = prompt('Inserisci km da percorrere');
console.log(kmUtente);

let prezzo = kmUtente*tariffa;

// chiedo età utente e trasformo in int
const ageUtente = parseInt(prompt('Inserisci età'));
console.log(ageUtente);

let percentualeSconto=0;

if(ageUtente<=18){
    percentualeSconto=20;
}
else if(ageUtente>=65){
    percentualeSconto=40;
}
prezzo-=prezzo*percentualeSconto/100;
console.log(prezzo);

