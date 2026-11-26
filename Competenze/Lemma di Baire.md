---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Baire category theorem", "teorema di Baire", "teorema della categoria di Baire", "intersezione di aperti densi"]
tags: [competenza, area/analisi]
---

# Lemma di Baire

> In uno spazio metrico completo un'intersezione numerabile di aperti densi è densa; equivalentemente, uno spazio completo non è unione numerabile di chiusi a parte interna vuota.

## Definizione / enunciato
**Teor. 7.29 (lemma di Baire).** Sia $(M,d)$ uno spazio metrico completo.
(i) Se $\{A_n\}_{n\in\mathbb N}$ sono aperti densi di $M$, allora $\overline{\bigcap_nA_n}=M$.
(ii) Se $M\ne\emptyset$ e $\{C_n\}_{n\in\mathbb N}$ sono chiusi con $\bigcup_nC_n=M$, esiste $n$ con $\mathring C_n\ne\emptyset$.

## Formule chiave
Costruzione per (i): dati $x\in M$ ed $\epsilon>0$ si scelgono induttivamente $x_n$, $r_n$ con
$$\overline B(x_n,r_n)\subseteq A_n\cap B(x_{n-1},r_{n-1}),\qquad\overline B(x_0,r_0)\subseteq A_0\cap B(x,\epsilon),\qquad r_n\le2^{-n};$$
le palle sono incapsulate, $(x_n)$ è di Cauchy, il limite sta in $B(x,\epsilon)\cap\bigcap_nA_n$ (le palle in (7.21) sono chiuse, verificato sulla pagina renderizzata).

## Intuizione
La completezza impedisce che lo spazio sia "piccolo" nel senso topologico: non lo si può ricoprire con una quantità numerabile di insiemi "magri" (chiusi senza interno). (ii) segue da (i) passando ai complementari $A_n=M\setminus C_n$.

## Come si usa
È lo strumento della dimostrazione del teorema di Banach-Steinhaus: gli insiemi $C_n=\{x:\sup_{T\in\mathcal F}\|Tx\|\le n\}$ sono chiusi e ricoprono $X$, quindi uno ha interno non vuoto, e da lì si ottiene una stima uniforme della norma operatoriale.

## Nei corsi
- **Analisi funzionale** (triennale): §7.4 "Il principio di uniforme limitatezza" (Teor. 7.29, con dimostrazione per cenni). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 104-106); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 11).

## Prerequisiti
- [[Spazio metrico completo]]: ipotesi essenziale
- [[Aperti e chiusi in uno spazio metrico]]: aperti densi e parte interna

## Porta a
- [[Teorema di Banach-Steinhaus]]: principio di uniforme limitatezza

## Collegati
- [[Teorema dell'isomorfismo di Banach]]: altro teorema "di Baire" sugli spazi di Banach (dimostrazione omessa nelle note)
