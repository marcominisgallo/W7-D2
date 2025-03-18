const textInput = document.getElementById("name");
const nameH5 = document.getElementById("savedName");

// SAVE BUTTON

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
  // 1) recuperare il contenuto della textarea
  const text = textInput.value;

  // 2) salvare il contenuto della textarea nel localStorage
  localStorage.setItem("name", text);

  // 3) cambiare il testo dell'H5
  nameH5.innerText = `Nome salvato: ${text}`;
});

// RESET BUTTON

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  // svuotare la textarea
  textInput.value = "";

  // cancellare la chiave "notepad" dal localStorage
  localStorage.removeItem("name");

  // cancellare il testo da h5
  nameH5.innerText = "";
});

// Recupera il valore del contatore da sessionStorage o imposta a 0 se non esiste
let counter = sessionStorage.getItem("counter")
  ? parseInt(sessionStorage.getItem("counter"))
  : 0;

// Aggiorna il contatore nel DOM
document.getElementById("counter").innerText = counter;

// Funzione per incrementare il contatore
function incrementCounter() {
  counter++;
  document.getElementById("counter").innerText = counter;
  sessionStorage.setItem("counter", counter);
}

// Incrementa il contatore ogni secondo
setInterval(incrementCounter, 1000);
