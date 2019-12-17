// Chiedi all’utente il suo nome
var name = prompt('Inserisci qui il tuo Nome');
// chiedi il suo cognome,
var secondName = prompt('Inserisci qui il tuo Cognome (senza spazi)');
// chiedi il suo colore preferito.
var prefColor = prompt('Indica qui il tuo colore preferito');

document.getElementById('pwd-gen').innerHTML = name + secondName + prefColor + '19';
