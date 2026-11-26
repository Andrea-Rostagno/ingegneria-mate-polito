---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["linear Diophantine equation", "equazione diofantea", "Diophantine equation", "ax+by=n", "risolubilità in interi"]
tags: [competenza, area/algebra-geometria]
---

# Equazione diofantea lineare

> L'equazione $ax+by=n$ ha soluzioni intere se e solo se $\mathrm{MCD}(a,b)$ divide $n$. È un'applicazione diretta dell'identità di Bézout.

## Definizione / enunciato
**Teorema 9.** Siano $a,b,n\in\mathbb Z$, con $a$ e $b$ non entrambi nulli. L'equazione
$$ax+by=n\qquad(\star)$$
ha soluzioni in $\mathbb Z$ se e solo se $\mathrm{MCD}(a,b)\mid n$.

**Oss. 10.** Si chiama **diofantea** ogni equazione algebrica di cui si cercano le soluzioni intere. L'esempio più famoso è l'ultimo teorema di Fermat, enunciato nel 1637 e dimostrato da A. Wiles alla fine del Novecento con metodi di geometria algebrica (le dispense scrivono "Wyles").

**Cor. 11.** In $\mathbb Z$, $a\mathbb Z+b\mathbb Z=\mathrm{MCD}(a,b)\mathbb Z$.

## Formule chiave
$$\exists\,x,y\in\mathbb Z:\ ax+by=n\iff n\in(a,b)=(\mathrm{MCD}(a,b))\iff\mathrm{MCD}(a,b)\mid n$$

## Intuizione
I valori di $ax+by$ al variare di $x,y$ sono esattamente i multipli di $\mathrm{MCD}(a,b)$, che è il generatore dell'ideale $(a)+(b)$. L'equazione è risolubile se e solo se $n$ è uno di questi multipli.

## Come si usa
Per risolvere $ax+by=n$:
1. si calcola $d=\mathrm{MCD}(a,b)$ con l'algoritmo di Euclide;
2. se $d\nmid n$ l'equazione non ha soluzioni intere;
3. altrimenti si scrive $d=\alpha a+\beta b$ risalendo le divisioni, e si moltiplica per $n/d$.

Un caso particolare è la congruenza $ax\equiv1\pmod n$, che equivale a $ax+ny=1$: è risolubile se e solo se $\mathrm{MCD}(a,n)=1$. È il criterio di invertibilità in $\mathbb Z_n$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 25-26. Le dispense enunciano il teorema con la sola dimostrazione per ideali, senza esempi numerici. Fonti: `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, p. 12).

## Prerequisiti
- [[Identità di Bézout]]: $\mathrm{MCD}(a,b)$ è combinazione di $a$ e $b$
- [[Ideale]]: la dimostrazione usa $(a,b)=(\mathrm{MCD}(a,b))$

## Porta a

## Collegati
