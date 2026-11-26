---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["shift operator", "shift verso sinistra", "left shift", "shift verso destra", "right shift", "operatore di traslazione su ℓ^2", "unilateral shift"]
tags: [competenza, area/analisi]
---

# Operatore di shift

> Lo shift su $\ell^2$, che sposta le componenti di una posizione: è l'esempio canonico di operatore limitato con comportamenti impossibili in dimensione finita (isometria non suriettiva, spettro residuo, non normalità).

## Definizione / enunciato
Shift verso sinistra $S\in\mathcal B(\ell^2)$ e il suo aggiunto (Es. 10.4(2)):
$$S(x_0,x_1,x_2,\dots)=(x_1,x_2,x_3,\dots),\qquad S^*(x_0,x_1,x_2,\dots)=(0,x_0,x_1,x_2,\dots).$$
$S^*$ è lo shift verso destra con aggiunta di uno zero.

## Formule chiave
- $SS^*=\mathrm{id}_{\ell^2}\ne S^*S$: $S$ non è normale (né autoaggiunto né unitario).
- Spettro (Es. 10.25): $\sigma(S)=\sigma(S^*)=\overline B(0,1)$;
$$\sigma_p(S)=B(0,1),\ \sigma_r(S)=\emptyset,\ \sigma_c(S)=\partial B(0,1);\qquad\sigma_p(S^*)=\emptyset,\ \sigma_r(S^*)=B(0,1),\ \sigma_c(S^*)=\partial B(0,1).$$
- Autovettori di $S$: $(S-\lambda I)x=0\iff x_{k+1}=\lambda x_k\iff x=x_0(1,\lambda,\lambda^2,\dots)$, che sta in $\ell^2$ se e solo se $|\lambda|<1$ (serie geometrica di ragione $|\lambda|^2$).
- Né $S$ né $S^*$ sono compatti.

## Intuizione
$S^*$ conserva la norma (si vede direttamente dalla formula) ma non è suriettivo (la prima componente dell'immagine è sempre 0): in dimensione finita un'isometria è sempre invertibile. $S$ è suriettivo ma non iniettivo. Questa asimmetria genera lo spettro residuo.

## Come si usa
È il controesempio di riferimento: mostra che iniettivo non implica suriettivo in dimensione infinita, che lo spettro può contenere un disco intero, che autoaggiunto/normale sono ipotesi non banali e che le isometrie non sono necessariamente unitarie.

## Nei corsi
- **Analisi funzionale** (triennale): Es. 10.4(2), Es. 10.11(1), Es. 10.25(2), Es. 11.11 ($SS^*=\mathrm{id}$ non compatto, quindi né $S$ né $S^*$ lo sono). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 148, 152, 159-161, 165); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 3, 7, 12); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (p. 4).

## Prerequisiti
- [[Spazi di successioni lp]]: agisce su ℓ^2
- [[Operatore aggiunto]]: S* è lo shift a destra

## Collegati
- [[Spettro di un operatore limitato]]: esempio di spettro residuo e continuo
- [[Operatore normale]]: esempio di operatore non normale
- [[Operatore compatto]]: esempio di operatore non compatto
- [[Isometria lineare]]: S* è un'isometria non suriettiva
