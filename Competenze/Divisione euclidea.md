---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["Euclidean division", "division with remainder", "divisione con resto", "algoritmo euclideo di divisione", "quoziente e resto"]
tags: [competenza, area/algebra-geometria]
---

# Divisione euclidea

> Ogni intero si divide per un intero positivo in modo unico, con quoziente e resto e il resto più piccolo del divisore. È il passo base dell'aritmetica di $\mathbb Z$, delle congruenze e dell'algoritmo di Euclide.

## Definizione / enunciato
**Algoritmo euclideo di divisione.** Per ogni $a\in\mathbb N_0$ e $b\in\mathbb N$ esistono e sono unici $q,r\in\mathbb N_0$ (quoziente e resto) tali che
$$a=qb+r,\qquad 0\le r<b.$$
In particolare $b\mid a$ se e solo se il resto è $0$.

Il testo stampato scrive $0\le r\le b$, ma la dimostrazione a mano usa $0\le r<b$, che è la condizione corretta (da verificare sul PDF).

## Formule chiave
$$a=qb+r,\quad 0\le r<b,\qquad (q,r)\ \text{unici}$$

## Intuizione
- **Esistenza:** si toglie $b$ da $a$ finché si può. Il resto è il più piccolo elemento non negativo di $\{a-qb\}$, che esiste per il buon ordinamento.
- **Unicità:** due resti diversi differirebbero di un multiplo di $b$ più piccolo di $b$, quindi sono uguali.

## Come si usa
Dimostrazione (pp. 11-12):
1. $S=\{a-qb\mid q\in\mathbb N_0\}\cap\mathbb N_0$ è non vuoto e ha un primo elemento $r$.
2. Se fosse $r\ge b$, anche $r-b<r$ starebbe in $S$: assurdo.
3. Unicità: $b(q-q')=r'-r$ con $|r'-r|<b$ forza $r=r'$ e $q=q'$.

Applicazioni nel corso:
- $a\equiv_nb\iff$ $a$ e $b$ hanno lo stesso resto modulo $n$;
- ogni sottogruppo di $(\mathbb Z,+)$ è $n\mathbb Z$;
- $x^m=1\iff\mathrm{ord}(x)\mid m$;
- il nucleo del morfismo unitario è $m\mathbb Z$;
- Bézout e algoritmo di Euclide;
- modello per la divisione tra polinomi e per i domini euclidei, con $\delta(z)=|z|$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 3, enunciata in $\mathbb N_0$ e poi usata in $\mathbb Z$. Fonti: `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, pp. 11-12); `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, p. 9: $\mathbb Z$ dominio euclideo).

## Prerequisiti
- [[Principio di induzione]]: il buon ordinamento dà l'esistenza del resto

## Porta a
- [[Classi di resto modulo n]]: le classi sono i possibili resti
- [[Ordine di un elemento]]: $x^m=1$ se e solo se l'ordine divide $m$
- [[Gruppo ciclico]]: i sottogruppi di $\mathbb Z$ sono $n\mathbb Z$
- [[Identità di Bézout]]: il resto dimostra che $d$ divide $a$
- [[Algoritmo di Euclide]]: divisioni successive
- [[Divisione tra polinomi]]: stessa costruzione con il grado al posto del valore assoluto

## Collegati
