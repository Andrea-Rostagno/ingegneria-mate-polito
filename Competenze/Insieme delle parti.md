---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["power set", "P(A)", "insieme potenza", "numero dei sottoinsiemi", "2^n sottoinsiemi", "stringhe binarie"]
tags: [competenza, area/algebra-geometria]
---

# Insieme delle parti

> L'insieme $\mathcal P(A)$ di tutti i sottoinsiemi di $A$. Se $|A|=n$ ha $2^n$ elementi, perché ogni sottoinsieme corrisponde a una stringa binaria di lunghezza $n$.

## Definizione / enunciato
**Teorema 1.2.10 (Counting subsets).** Se $A$ è finito, il numero dei sottoinsiemi di $A$, vuoto compreso, è
$$|\mathcal P(A)|=2^{|A|}.$$
**Dimostrazione.** Per $n=0$ c'è il solo sottoinsieme $\emptyset$ e $2^0=1$. Per $n\ge1$ si scrive $A=\{a_1,\dots,a_n\}$ e a ogni $S\subseteq A$ si associa la stringa $s\in\{0,1\}^n$ con $s_i=1$ se $a_i\in S$ e $s_i=0$ altrimenti. La mappa $\mathcal P(A)\to\{0,1\}^n$ è biiettiva, e $|\{0,1\}^n|=2^n$ per la regola del prodotto.

## Formule chiave
$$|\mathcal P(A)|=|\{0,1\}^n|=2^n=\sum_{k=0}^n\binom nk.$$

## Intuizione
Costruire un sottoinsieme significa decidere, elemento per elemento, "dentro" o "fuori": sono $n$ scelte binarie. Il sottoinsieme vuoto corrisponde a $(0,\dots,0)$ e $A$ stesso a $(1,\dots,1)$.

## Come si usa
- **Lezione 4:** $S=\emptyset$ corrisponde a $(0,\dots,0)$ e $S=A$ a $(1,\dots,1)$. Si osserva esplicitamente che $\mathcal P(A)\to\{0,1\}^n$ è biunivoca.
- **Somma dei binomiali:** spezzando $\mathcal P(A)$ secondo la cardinalità $k$ dei sottoinsiemi (regola della somma) si ottiene $\sum_k\binom nk=2^n$. La lezione 4 risponde così alla domanda "quanto vale $\sum_k\binom nk$?".
- È il modello di ogni scelta "sì/no" ripetuta.

## Nei corsi
- **Matematica discreta** (triennale): lezione 4, dopo i coefficienti binomiali. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 10-11); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Teor. 1.2.10, pp. 10-11).

## Prerequisiti
- [[Cardinalità di un insieme finito]]: si conta tramite una biiezione con le stringhe
- [[Regola del prodotto]]: $|\{0,1\}^n|=2^n$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Teorema binomiale]]: con $x=y=1$ dà $\sum_k\binom nk=2^n$
- [[Insieme numerabile]]: nel caso infinito, per Cantor, $X$ non è equipotente a $\mathcal P(X)$
