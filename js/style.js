/* EX della settimana:
Milestone di oggi: MILESTONE#1
NOME REPO:  js-html-css-boolzap
DESCRIZIONE:
RI-Creare layout e funzionalità di whatzapp web: https://web.whatsapp.com/
vi metto comunque uno screeshot sotto di quello visto insieme.
Funzionalità, non tutte ma quelle dettate di volta in volta dai milestones.
Il doc di specifiche lo trovate qui: https://docs.google.com/document/d/1dujso_x1_UTTAR-XmwuURIec2CR79Ap8z81flzSYckY/edit#
BONUS:
per ora nessuno, ci sarà tempo dopo.
NOTE:
Giorno per giorno, si lavora sempre sul milestone assegnato;
vedete voi come organizzarvi negli setp del milestone interessato, come detto a lezione;
non correte, ma cercate ad ogni milestone di arrivare ad una situazione che vi permetta almeno di partire in modo pulito e sicuro il giorno dopo, per il milestone successivo;
quindi approccio: tengo il mio codice il più pulito possibile e parto dalla questione macro, e lascio via via la definizione di dettaglio per dopo;
l’ex prenderà come detto vari giorni quindi abbiamo il tempo poi pian piano, di andare ad affinare la dove, per questioni di tempo abbiam dovuto tralasciare i dettagli;
come detto: Prima di iniziare, come Milestone#0, la questione è leggere per bene le specifiche e fare tutte domande del caso, per non fare lavoro inutile.
Buon coding, e ci si vede domattina per fare un pò di codereview sul milestone#1. */

$(document).ready(function () {

//cliccando l'emote invio il messaggio
   $(".fa-smile").click(send)




//Funzione esterna per invio dei messaggi
function send(){
   //input utente
   var messaggio = $(".msg").val();

   var elementmsg = $("#template .msgsent").clone();

   console.log(elementmsg);

   elementmsg.find(".testo").text(messaggio);



  //il messaggio si resetta ad ogni invio;
      $(".msg").val("");
   }

}
});
