let name, lastname, favoriteColor, message;

name = prompt("come ti chiami?");
lastname = prompt("inserisci il tuo cognome?");
color = prompt("qual è il tuo colore preferito?");

message = name + lastname + color + 23;

const outputPass = (document.getElementById("passwordClint").innerHTML =
  message);
