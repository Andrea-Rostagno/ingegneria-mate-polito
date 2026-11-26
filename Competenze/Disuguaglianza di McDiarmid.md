---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["McDiarmid's inequality", "bounded differences inequality", "disuguaglianza delle differenze limitate"]
tags: [competenza, area/probabilita]
---

# Disuguaglianza di McDiarmid

> Concentrazione attorno alla speranza per qualunque funzione di variabili indipendenti che cambia poco quando si modifica una sola variabile.

## Definizione / enunciato
(McDiarmid, 1989) Siano $X_1,\dots,X_m$ variabili indipendenti a valori in $U$ e $f:U^m\to\mathbb R$ tale che per ogni $i\in[1,m]$
$$\sup_{x_1,\dots,x_m,x_i'}\big|f(x_1,\dots,x_i,\dots,x_m)-f(x_1,\dots,x_i',\dots,x_m)\big|\le c_i .$$
Allora per ogni $\epsilon>0$
$$\Pr\Big[\big|f(X_1,\dots,X_m)-\mathbb E[f(X_1,\dots,X_m)]\big|>\epsilon\Big]\le 2\exp\Big(\frac{-2\epsilon^2}{\sum_{i=1}^mc_i^2}\Big).$$

## Formule chiave
Con $f$ = media empirica di variabili in $[a,b]$ si ha $c_i=(b-a)/m$ e si ritrova Hoeffding. Nella teoria di Rademacher si applica a
$$\Phi(S)=\sup_{g\in G}\big(\mathbb E[g]-\hat{\mathbb E}_S[g]\big),$$
che cambia al più di $1/m$ se si modifica un punto di $S$ (funzioni a valori in $[0,1]$), e poi alla complessità di Rademacher empirica, che varia anch'essa al più di $1/m$.

## Intuizione
Non serve che $f$ sia una somma: basta che nessuna singola variabile abbia troppa influenza. Allora $f$ si comporta come una media e si concentra con code gaussiane.

## Come si usa
Passo chiave della dimostrazione del bound di Koltchinskii-Panchenko: (1) McDiarmid su $\Phi(S)$ dà $\Phi(S)\le\mathbb E[\Phi(S)]+\sqrt{\log(1/\delta)/(2m)}$; (2) con la simmetrizzazione $\mathbb E[\Phi(S)]\le 2\mathfrak R_m(G)$; (3) una seconda applicazione sostituisce $\mathfrak R_m$ con la versione empirica (da cui il $3\sqrt{\log(2/\delta)/(2m)}$).

## Nei corsi
- **Matematica per l'AI** (triennale): richiami di probabilità e dimostrazione del bound di Rademacher. Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 31, 77-80); `FML.pdf` cap. 3.

## Prerequisiti
- [[Disuguaglianza di Hoeffding]]: caso particolare della media empirica
- [[Indipendenza di variabili aleatorie]]: le $X_i$ devono essere indipendenti

## Porta a
- [[Complessità di Rademacher]]: strumento della dimostrazione del bound di generalizzazione

## Collegati
- [[Valore atteso]]: la concentrazione è attorno a $\mathbb E[f]$
