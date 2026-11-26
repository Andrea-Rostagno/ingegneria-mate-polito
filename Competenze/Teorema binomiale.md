---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["binomial theorem", "binomio di Newton", "formula del binomio", "triangolo di Tartaglia", "triangolo di Pascal", "formula di Stifel", "proprietà ricorsiva dei coefficienti binomiali", "simmetria dei coefficienti binomiali"]
tags: [competenza, area/algebra-geometria]
---

# Teorema binomiale

> Sviluppa $(x+y)^n$ come somma di termini $\binom nk x^{n-k}y^k$. Il coefficiente conta in quanti modi si scelgono, fra gli $n$ fattori, i $k$ da cui prendere $y$.

## Definizione / enunciato
**Coefficiente binomiale** (Tilli, Def. 1.4.1): per $0\le k\le n$, $\binom nk=\dfrac{n!}{k!(n-k)!}$ con $0!=1$. È il numero dei sottoinsiemi di cardinalità $k$ di un insieme di $n$ elementi.

**Teorema 1.4.3 (Binomial Theorem).** Per $x,y\in\mathbb R$ e $n\ge0$:
$$(x+y)^n=\sum_{k=0}^n\binom nk x^{n-k}y^k.$$

**Teorema 1.4.2 (proprietà ricorsiva).** Per $1\le k\le n-1$:
$$\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}.$$
È la regola di costruzione del triangolo di Tartaglia.

## Formule chiave
$$\binom nk=\binom n{n-k},\qquad \binom n0=\binom nn=1,\qquad \binom n1=n,\qquad \binom n2=\frac{n(n-1)}2,\qquad \sum_{k=0}^n\binom nk=2^n.$$

## Intuizione
Sviluppando $(x+y)(x+y)\cdots(x+y)$ si ottengono prodotti $f_1\cdots f_n$ con ogni $f_i\in\{x,y\}$. Il termine $x^{n-k}y^k$ compare tante volte quanti sono i modi di scegliere i $k$ fattori che danno $y$, cioè $\binom nk$. La **simmetria** si vede col complementare: scegliere $k$ elementi equivale a scartarne $n-k$.

## Come si usa
- **Strette di mano** (lezione 4): fra 120 persone le strette di mano sono $\binom{120}2=7140$. Si ritrova lo stesso numero sommando $(n-1)+(n-2)+\dots+1$: la persona 1 stringe $n-1$ mani, la 2 ne stringe $n-2$ nuove, e così via.
- **Proprietà ricorsiva:** si dimostra col calcolo diretto oppure col doppio conteggio, distinguendo i sottoinsiemi che contengono un elemento fissato da quelli che non lo contengono.
- **Identità di doppio conteggio** (Tilli §1.4): un comitato di $n$ persone scelto fra $n$ uomini e $n$ donne si conta in due modi. Si ottiene $\sum_{k}\binom nk^2=\binom{2n}{n}$. La (1.13) del testo riporta $\binom{2n}{2}$ (da verificare sul PDF), ma la dimostrazione conta $\binom{2n}{n}$.

## Nei corsi
- **Matematica discreta** (triennale): lezione 4, nella parte sulle proprietà del coefficiente binomiale. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 9-11); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§1.4, Teor. 1.4.2-1.4.3, pp. 14-20).

## Prerequisiti
- [[Calcolo combinatorio]]: il coefficiente binomiale conta le combinazioni

## Porta a
- Nessuno nel corso.

## Collegati
- [[Insieme delle parti]]: la somma dei coefficienti è il numero dei sottoinsiemi
- [[Permutazioni con ripetizione]]: il teorema multinomiale generalizza la formula a $k$ addendi
- [[Principio di induzione]]: dimostrazione alternativa per induzione (Istituzioni algebra)
