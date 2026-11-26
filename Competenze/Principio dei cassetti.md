---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["pigeonhole principle", "principio della piccionaia", "principio di Dirichlet", "floor e ceiling", "parte intera", "funzione floor", "funzione ceiling"]
tags: [competenza, area/algebra-geometria]
---

# Principio dei cassetti

> Se si mettono $n+1$ oggetti in $n$ scatole, almeno una scatola ne contiene due. Nella forma generalizzata, con $n$ oggetti in $k$ scatole, una scatola ne contiene almeno $\lceil n/k\rceil$.

## Definizione / enunciato
**Forma semplice.** Sia $n\in\mathbb N$, $n\ge1$. Se $n+1$ oggetti sono disposti in $n$ scatole, almeno una scatola contiene almeno 2 oggetti.

**Floor e ceiling.** Per $x\in\mathbb R$: $\lfloor x\rfloor=\max\{n\in\mathbb Z: n\le x\}$ (parte intera) e $\lceil x\rceil=\min\{n\in\mathbb Z: n\ge x\}$. Se $x\in\mathbb Z$ coincidono con $x$; altrimenti sono gli interi più vicini a $x$, uno sotto e uno sopra.

**Teorema (forma generalizzata).** Se $n$ oggetti sono posti in $k$ scatole, allora:
- (a) almeno una scatola contiene **almeno** $\lceil n/k\rceil$ oggetti;
- (b) almeno una scatola contiene **al più** $\lfloor n/k\rfloor$ oggetti.

## Formule chiave
$$x-1<\lfloor x\rfloor\le x\le\lceil x\rceil<x+1.$$
Valore minimo di $n$ che garantisce almeno $r$ oggetti in una delle $k$ scatole: $n=k(r-1)+1$.

## Intuizione
Il caso peggiore distribuisce gli oggetti nel modo più uniforme possibile. Se ogni scatola contenesse meno di $\lceil n/k\rceil$ oggetti, il totale sarebbe troppo piccolo.

**Dimostrazione di (a), per assurdo.** Se ogni scatola $j$ contenesse $x_j\le\lceil n/k\rceil-1$ oggetti, allora $\sum_jx_j\le k(\lceil n/k\rceil-1)<k(n/k+1-1)=n$, contro il fatto che gli oggetti sono $n$. La (b) è simile.

## Come si usa
Esempi della lezione 4:
- fra 13 persone almeno 2 compiono gli anni nello stesso mese (13 oggetti in 12 scatole);
- **amici:** in un gruppo di $n\ge2$ persone, con l'amicizia simmetrica, due hanno lo stesso numero di amici. Le scatole sono "$i$ amici" per $i=0,\dots,n-1$. Le scatole 0 e $n-1$ non possono essere piene entrambe (chi non ha amici esclude chi è amico di tutti), quindi le scatole utili sono $n-1$ per $n$ persone;
- **test con voti A, B, C, D:** per avere almeno 6 studenti con lo stesso voto servono almeno $4\cdot5+1=21$ studenti (caso peggiore 5, 5, 5, 5).

## Nei corsi
- **Matematica discreta** (triennale): ultima parte della lezione 4, con le funzioni floor e ceiling. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 29-32, manoscritto). Non è nelle dispense di Tilli.

## Prerequisiti
- [[Dimostrazione per contrapposizione e per assurdo]]: la forma generalizzata si dimostra per assurdo

## Porta a
- [[Numeri di Ramsey]]: si applica alle relazioni di una persona con le altre 5

## Collegati
- [[Grafo]]: l'esempio degli amici dice che in ogni grafo con almeno 2 nodi due nodi hanno lo stesso grado
