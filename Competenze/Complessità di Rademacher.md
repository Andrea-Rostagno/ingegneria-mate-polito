---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Rademacher complexity", "complessità di Rademacher empirica", "empirical Rademacher complexity", "variabili di Rademacher", "Rademacher variables", "bound di Koltchinskii-Panchenko"]
tags: [competenza, area/data-ml]
---

# Complessità di Rademacher

> Misura della ricchezza di una famiglia di funzioni come capacità di correlarsi con rumore casuale $\pm1$; dà bound di generalizzazione anche per insiemi di ipotesi infiniti.

## Definizione / enunciato
$G$ famiglia di funzioni $Z\to[a,b]$, campione $S=(z_1,\dots,z_m)$, $\sigma_i$ **variabili di Rademacher** indipendenti uniformi su $\{-1,+1\}$.
- **Empirica:** $\hat{\mathfrak R}_S(G)=\mathbb E_\sigma\Big[\sup_{g\in G}\frac1m\sum_{i=1}^m\sigma_ig(z_i)\Big]$ (correlazione con il rumore $\boldsymbol\sigma$).
- **Media:** $\mathfrak R_m(G)=\mathbb E_{S\sim D^m}\big[\hat{\mathfrak R}_S(G)\big]$.

## Formule chiave
**Teorema** (Koltchinskii-Panchenko, 2002). $G$ a valori in $[0,1]$. Per ogni $\delta>0$, con probabilità almeno $1-\delta$, per ogni $g\in G$:
$$\mathbb E[g(z)]\le\frac1m\sum_{i=1}^mg(z_i)+2\mathfrak R_m(G)+\sqrt{\frac{\log\frac1\delta}{2m}},\qquad \mathbb E[g(z)]\le\frac1m\sum_{i=1}^mg(z_i)+2\hat{\mathfrak R}_S(G)+3\sqrt{\frac{\log\frac2\delta}{2m}}.$$
Per $H$ a valori in $\{-1,+1\}$ e $G$ la famiglia delle perdite 0-1, $\mathfrak R_m(G)=\frac12\mathfrak R_m(H)$, da cui (corollario) con probabilità $\ge1-\delta$, per ogni $h\in H$:
$$R(h)\le\hat R(h)+\mathfrak R_m(H)+\sqrt{\frac{\log\frac1\delta}{2m}},\qquad R(h)\le\hat R(h)+\hat{\mathfrak R}_S(H)+3\sqrt{\frac{\log\frac2\delta}{2m}}.$$

## Intuizione
Se una classe riesce a "seguire" anche etichette puramente casuali, può adattarsi a qualunque campione e il suo errore empirico non dice nulla sull'errore vero. Il primo bound dipende dalla distribuzione, il secondo dai dati (calcolabile sul campione).

## Come si usa
Calcolare $\hat{\mathfrak R}_S(H)$ richiede di risolvere problemi di tipo ERM ($\mathbb E_\sigma[\sup_h\frac1m\sum\sigma_ih(x_i)]$), in genere difficili: per questo la si maggiora con misure combinatorie, la funzione di crescita e la dimensione VC. Compare nella definizione di SRM ($\mathfrak R_m(H_k)$ come penalità). Negli appunti il rumore è collegato a "$\Pr[1\mid x]=\Pr[-1\mid x]$: tutto rumoroso".

## Nei corsi
- **Matematica per l'AI** (triennale): lezione "Learning with infinite hypothesis sets". Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 73-83); `FML.pdf` §3.1.

## Prerequisiti
- [[Disuguaglianza di McDiarmid]]: strumento della dimostrazione
- [[Bound di apprendimento per H finito (caso inconsistente)]]: caso che si vuole generalizzare

## Porta a
- [[Funzione di crescita]]: maggiorazione combinatoria via lemma di Massart
- [[Structural risk minimization]]: la penalità usa $\mathfrak R_m(H_k)$

## Collegati
- [[Errore di generalizzazione]]: il bound controlla $R(h)-\hat R(h)$
- [[Errore di Bayes]]: le variabili di Rademacher modellano etichette di puro rumore
