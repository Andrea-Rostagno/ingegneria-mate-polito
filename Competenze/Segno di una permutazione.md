---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["sign of a permutation", "parity of a permutation", "parità di una permutazione", "permutazione pari", "permutazione dispari", "gruppo alterno", "alternating group", "A_n", "sgn"]
tags: [competenza, area/algebra-geometria]
---

# Segno di una permutazione

> Una permutazione si scompone in trasposizioni in molti modi, ma il loro numero è sempre pari o sempre dispari. Il segno $\pm1$ è un omomorfismo, e il suo nucleo è il gruppo alterno $A_n$.

## Definizione / enunciato
**Teorema 6.** La decomposizione in trasposizioni non è unica, ma il numero di trasposizioni in cui si decompone una permutazione è sempre pari oppure sempre dispari.

- **Def. 7:** una permutazione è **pari** (dispari) se tale è il numero delle sue trasposizioni.
- **Segno:** $\mathrm{sgn}(\sigma)=\pm1$ secondo la parità.
- **Def. 8:** le permutazioni pari formano il **gruppo alterno** $A_n$.

$\mathrm{sgn}:S_n\to\{\pm1\}$ è un omomorfismo di gruppi e $\mathrm{Ker}(\mathrm{sgn})=A_n$.

## Formule chiave
$$P=\prod_{i<j}(i-j),\qquad \sigma(P)=\prod_{i<j}(\sigma(i)-\sigma(j))=\pm P,\qquad \tau_{hk}(P)=-P$$
$$\mathrm{sgn}(\sigma_1\sigma_2)=\mathrm{sgn}(\sigma_1)\,\mathrm{sgn}(\sigma_2),\qquad A_n=\mathrm{Ker}(\mathrm{sgn})$$

## Intuizione
Si fa agire $\sigma$ sul prodotto $P$ di tutte le differenze $i-j$: il risultato è $\pm P$, e il segno dipende solo da $\sigma$. Ogni trasposizione cambia segno a $P$.
- Il fattore $(h-k)$ diventa $(k-h)$.
- Gli altri cambi di segno si compensano a coppie.

Così, se $\sigma=\tau_1\cdots\tau_n=\rho_1\cdots\rho_m$, allora $(-1)^nP=(-1)^mP$, e $n$ e $m$ hanno la stessa parità.

## Come si usa
- Per la parità di una permutazione si scompone in cicli: un ciclo di lunghezza $k$ è prodotto di $k-1$ trasposizioni.
- $A_n$ è normale in $S_n$: è il nucleo di un omomorfismo, e ha indice 2 con $S_n/A_n=\{A_n,\tau A_n\}$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 8-9 (enunciato) e 10 (dimostrazione con il prodotto $P$). Fonti: `triennale/ANNO 2/istituzioni/Alg-12-10-22.pdf` (lezioni 8-9, p. 13); `triennale/ANNO 2/istituzioni/Alg-17-10-22.pdf` (lezione 10, pp. 3-5); `triennale/ANNO 2/istituzioni/Alg-25-10-22.pdf` (lezione 14, p. 4).

## Prerequisiti
- [[Gruppo simmetrico]]: decomposizione in trasposizioni
- [[Omomorfismo di gruppi]]: sgn è un omomorfismo e $A_n$ ne è il nucleo

## Porta a
- [[Sottogruppo normale e gruppo quoziente]]: $A_n\lhd S_n$ è l'esempio tipico

## Collegati
