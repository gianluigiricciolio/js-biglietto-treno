esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-trenoIl programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.Vi lascio un bonus: provate a completare il codice di Pari/Dispari di cui abbiamo parlato a lezione.

pseudo programma


salvo tariffa su costante
chiedo km utente
    gestire stringa vuota
    stringa di caratteri
    numero negativo
    numero decimale




chiedo età utente


se valori età e km sono corretti

    calcolo costo biglietto:
    tariffa*km da percorrere
    se età utente<18 costobiglietto*sconto minorenni
    se età utente>65 costobiglietto*sconto over
    altrimenti costobiglietto

altrimenti stampo errore