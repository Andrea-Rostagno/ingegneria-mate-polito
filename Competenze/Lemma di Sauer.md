---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Sauer's lemma", "lemma di Sauer-Shelah", "Sauer-Shelah lemma", "dicotomia della funzione di crescita"]
tags: [competenza, area/data-ml]
---

# Lemma di Sauer

> Se la dimensione VC è $d$, la funzione di crescita è al più polinomiale di grado $d$: è il ponte fra la definizione combinatoria e i bound di generalizzazione.

## Definizione / enunciato
(Vapnik e Chervonenkis, 1968-1971; Sauer, 1972) Sia $H$ con $\mathrm{VCdim}(H)=d$. Allora per ogni $m\in\mathbb N$
$$\Pi_H(m)\le\sum_{i=0}^d\binom mi .$$

## Formule chiave
**Corollario.** Per $m\ge d$:
$$\Pi_H(m)\le\sum_{i=0}^d\binom mi\Big(\frac md\Big)^{d-i}\le\Big(\frac md\Big)^d\sum_{i=0}^m\binom mi\Big(\frac dm\Big)^i=\Big(\frac md\Big)^d\Big(1+\frac dm\Big)^m\le\Big(\frac{em}{d}\Big)^d=O(m^d).$$
**Proprietà notevole:** o $\mathrm{VCdim}(H)=d<+\infty$ e $\Pi_H(m)=O(m^d)$, oppure $\mathrm{VCdim}(H)=+\infty$ e $\Pi_H(m)=2^m$ per ogni $m$.

## Intuizione
Appena $m$ supera $d$ la classe non riesce più a realizzare tutte le etichettature, e la perdita è drastica: si passa da crescita esponenziale a polinomiale. Nel bound $\log\Pi_H(m)$ diventa $d\log\frac{em}d$.

## Come si usa
**Dimostrazione per induzione su $m+d$** (base $m=1$, $d=0$ o $d=1$). Fissato $S=\{x_1,\dots,x_m\}$ con $\Pi_H(m)$ dicotomie e $G=H_{|S}$, si costruiscono su $S'=\{x_1,\dots,x_{m-1}\}$ le famiglie $G_1=G_{|S'}$ e $G_2=\{g'\subseteq S':g'\in G\wedge g'\cup\{x_m\}\in G\}$; si ha $|G|=|G_1|+|G_2|$, $\mathrm{VCdim}(G_1)\le d$ e $\mathrm{VCdim}(G_2)\le d-1$, e si conclude con $\binom{m-1}{i}+\binom{m-1}{i-1}=\binom mi$. Combinato con il bound tramite funzione di crescita dà il bound di generalizzazione VC.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 108-113); `FML.pdf` §3.3.

## Prerequisiti
- [[Dimensione VC]]: ipotesi del lemma
- [[Funzione di crescita]]: quantità che viene maggiorata
- [[Teorema binomiale]]: la somma di coefficienti binomiali nel corollario

## Porta a
- [[Structural risk minimization]]: bound espliciti per famiglie di VC data

## Collegati
- [[Complessità di Rademacher]]: tramite Massart dà $\mathfrak R_m(H)\le\sqrt{2d\log(em/d)/m}$
