---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["conditional probability", "P(A|B)", "formula moltiplicativa", "legge delle probabilità composte", "multiplication rule"]
tags: [competenza, area/probabilita]
---

# Probabilità condizionata

> La probabilità di $A$ sapendo che si è verificato $B$: si restringe il modello a $B$ e si rinormalizza.

## Definizione / enunciato
Siano $A,B\in\mathcal F$ con $\mathbb P(B)>0$. La **probabilità di $A$ condizionata a $B$** è
$$\mathbb P(A\mid B)=\frac{\mathbb P(A\cap B)}{\mathbb P(B)}.$$
Fissato $B$, $\mathbb P(\cdot\mid B)$ è una misura di probabilità su $\mathcal F$ (non negativa, σ-additiva, $\mathbb P(\Omega\mid B)=1$).

## Formule chiave
$\mathbb P(A\cap B)=\mathbb P(A\mid B)\,\mathbb P(B)$ e la **formula moltiplicativa** (probabilità composte), se $\mathbb P(A_1\cap\dots\cap A_{m-1})>0$:
$$\mathbb P(A_1\cap\dots\cap A_m)=\mathbb P(A_1)\,\mathbb P(A_2\mid A_1)\,\mathbb P(A_3\mid A_1\cap A_2)\cdots\mathbb P(A_m\mid A_1\cap\dots\cap A_{m-1}).$$

## Intuizione
L'esempio introduttivo con due dadi: $\mathbb P(\text{somma }5)=\frac4{36}=\frac19$; se il primo dado dà 2, il nuovo spazio uniforme ha 6 esiti e la probabilità diventa $\frac16=\frac{\mathbb P(A\cap B)}{\mathbb P(B)}=\frac{1/36}{6/36}$. Il prodotto della formula moltiplicativa è telescopico.

## Come si usa
Urna con 5 bianche e 10 nere, estrazioni senza reimmissione (lezione 5): $\mathbb P(B_1\cap B_2)=\frac5{15}\cdot\frac4{14}=\frac2{21}$; quattro bianche di fila: $\frac5{15}\cdot\frac4{14}\cdot\frac3{13}\cdot\frac2{12}=\frac1{273}$. Attenzione: $\mathbb P(A^c\mid B)=1-\mathbb P(A\mid B)$, ma in generale $\mathbb P(A\mid B^c)\ne1-\mathbb P(A\mid B)$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 5 (appunto manoscritto); formula nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione05(29-03-23) (4).pdf` (lezione 5, pp. 1-7); `formularioprobabilita (1).pdf`.

## Prerequisiti
- [[Spazio di probabilità]]: nuova misura di probabilità

## Porta a
- [[Formula delle probabilità totali]]: decomposizione su una partizione
- [[Formula di Bayes]]: inversione
- [[Indipendenza di eventi]]: $\mathbb P(A\mid B)=\mathbb P(A)$

## Collegati
- [[Speranza condizionata]]: generalizzazione
