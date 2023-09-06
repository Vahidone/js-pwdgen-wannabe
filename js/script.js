let name, lastname, favoriteColor, message, xNumber;

name = prompt("come ti chiami?");
lastname = prompt("inserisci il tuo cognome?");
color = prompt("qual è il tuo colore preferito?");
xNumber = 23;
message = name + lastname + color + xNumber;

const outputPass = (document.getElementById("passwordClint").innerHTML =
  message);
