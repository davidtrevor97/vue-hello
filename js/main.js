// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)
var vue = new Vue({
  el: "#vue",
  data: {
    markup: `Ciaooo Vue:
      ecco un'immagine di Termoli`  ,
    img : "./img/torre.jpg",
  },
});
