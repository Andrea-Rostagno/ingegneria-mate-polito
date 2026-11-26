---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Riesz's lemma", "lemma di quasi-ortogonalità di Riesz", "non compattezza della palla unitaria", "compattezza della palla e dimensione finita"]
tags: [competenza, area/analisi]
---

# Lemma di Riesz

> In uno spazio normato, da ogni sottospazio chiuso proprio si trova un vettore unitario "lontano"; ne segue che la palla unitaria è compatta solo in dimensione finita.

## Definizione / enunciato
**Lemma 4.23 (Riesz).** Sia $(X,\|\cdot\|)$ normato e $Y\subsetneq X$ un sottospazio chiuso proprio. Allora esiste $w\in X$ con
$$\|w\|=1\qquad\text{e}\qquad d(w,Y)\ge\tfrac12.$$
(Variante, Oss. 4.24: per ogni $\epsilon>0$ si può avere $d(w,Y)\ge1/(1+\epsilon)$.)
**Teor. 4.25.** Se $\dim X=\infty$, la palla chiusa $\overline B(0,1)$ e la sfera $S(0,1)$ non sono compatte.
**Cor. 4.26.** Sono equivalenti: (i) ogni successione limitata ha una sottosuccessione convergente; (ii) ogni chiuso e limitato è compatto; (iii) $\overline B(0,1)$ è compatta; (iv) $\dim X<\infty$.

## Formule chiave
Costruzione: preso $x\notin Y$, si sceglie $z\in Y$ con $d(x,Y)\le\|x-z\|<2d(x,Y)$ e si pone $w=(x-z)/\|x-z\|$. Iterando con $Y=\operatorname{span}\{x_0,\dots,x_n\}$ (chiuso perché di dimensione finita) si ottiene $(x_n)\subseteq S(0,1)$ con
$$\|x_n-x_m\|\ge\tfrac12\quad\forall n\ne m,$$
che non ha sottosuccessioni di Cauchy.

## Intuizione
In uno spazio di Hilbert si potrebbe prendere $w$ ortogonale a $Y$, a distanza 1; in un normato qualunque non c'è ortogonalità, ma si ottiene una "quasi-ortogonalità" con distanza almeno $1/2$. Con infinite direzioni a disposizione si costruiscono infiniti vettori unitari ben separati.

## Come si usa
Spiega perché in dimensione infinita servono strumenti nuovi per la compattezza: criteri ad hoc (Ascoli-Arzelà), operatori compatti, convergenza debole (Banach-Alaoglu). Conseguenza diretta: se $\dim X=\infty$, l'identità $\mathrm{id}_X$ non è un operatore compatto.

## Nei corsi
- **Analisi funzionale** (triennale): §4.5 "Compattezza in spazi normati" (Lemma 4.23, Oss. 4.24, Teor. 4.25, Cor. 4.26). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 38-39); `triennale/ANNO 3/analisi funzionale/03_spazinormati_handout.pdf` (p. 8).

## Prerequisiti
- [[Spazio normato]]: distanze da un sottospazio
- [[Compattezza in spazi metrici]]: compattezza per successioni
- [[Norme equivalenti]]: i sottospazi di dimensione finita sono chiusi

## Porta a
- [[Operatore compatto]]: l'identità non è compatta in dimensione infinita

## Collegati
- [[Teorema di Ascoli-Arzelà]]: criterio di compattezza che aggira il lemma in C(M)
- [[Teorema di Banach-Alaoglu]]: recupera la compattezza in senso debole
