/*
Descrizione:
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/


let listaSpesa = document.createElement("ul");
const elementiLista = ["pane", "biscotti", "salumi", "acqua", "formaggio", "latte"];

let indexElemento = 0;
while (indexElemento < elementiLista.length) {
    let elementoLista = document.createElement("li");
    elementoLista.innerText = elementiLista[indexElemento];
    listaSpesa.appendChild(elementoLista);
    indexElemento++;
}
document.body.appendChild(listaSpesa);