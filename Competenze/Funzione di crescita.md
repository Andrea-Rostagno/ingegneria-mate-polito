---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["growth function", "shatter coefficient", "numero di dicotomie", "dichotomies", "lemma di Massart", "Massart's lemma"]
tags: [competenza, area/data-ml]
---

# Funzione di crescita

> Numero massimo di modi diversi in cui $m$ punti possono essere etichettati dalle ipotesi di $H$; misura combinatoria della complessità che maggiora la complessità di Rademacher.

## Definizione / enunciato
Per un insieme di ipotesi $H$ la funzione di crescita $\Pi_H:\mathbb N\to\mathbb N$ è
$$\Pi_H(m)=\max_{\{x_1,\dots,x_m\}\subseteq\mathcal X}\Big|\big\{\big(h(x_1),\dots,h(x_m)\big):h\in H\big\}\Big| .$$
Per etichette binarie $\Pi_H(m)\le2^m$.

## Formule chiave
**Lemma di Massart** (2000). Se $A\subseteq\mathbb R^m$ è finito e $r=\max_{x\in A}\|x\|_2$:
$$\mathbb E_\sigma\Big[\frac1m\sup_{x\in A}\sum_{i=1}^m\sigma_ix_i\Big]\le\frac{r\sqrt{2\log|A|}}{m}.$$
(Prova: Jensen sull'esponenziale, sup ≤ somma, Hoeffding sui singoli $\sigma_ix_i$, ottimizzazione in $t$.)
**Corollario.** Per $G$ a valori in $\{-1,+1\}$: $\mathfrak R_m(G)\le\sqrt{\frac{2\log\Pi_G(m)}{m}}$ (si applica Massart all'insieme dei vettori $(g(z_1),\dots,g(z_m))$, con $r=\sqrt m$).
**Bound di generalizzazione.** Con probabilità almeno $1-\delta$, per ogni $h\in H$:
$$R(h)\le\hat R(h)+\sqrt{\frac{2\log\Pi_H(m)}{m}}+\sqrt{\frac{\log\frac1\delta}{2m}} .$$
Versione classica (Vapnik-Chervonenkis): $\Pr\big[|R(h)-\hat R(h)|>\epsilon\big]\le4\Pi_H(2m)\exp(-m\epsilon^2/8)$.

## Intuizione
Anche se $H$ è infinito, su $m$ punti fissati produce solo un numero finito di etichettature: è come se $H$ fosse finito di cardinalità $\Pi_H(m)$, e $\log|H|$ viene sostituito da $\log\Pi_H(m)$.

## Come si usa
Il bound è utile solo se $\Pi_H(m)$ cresce meno che esponenzialmente: il lemma di Sauer mostra che ciò accade esattamente quando la dimensione VC è finita, con $\Pi_H(m)=O(m^d)$.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 85-91, 114); `FML.pdf` §3.2.

## Prerequisiti
- [[Complessità di Rademacher]]: la quantità che si vuole maggiorare
- [[Disuguaglianza di Hoeffding]]: usata nel lemma di Massart

## Porta a
- [[Dimensione VC]]: la più grande $m$ con $\Pi_H(m)=2^m$
- [[Lemma di Sauer]]: crescita polinomiale di $\Pi_H$

## Collegati
- [[Bound di apprendimento per H finito (caso inconsistente)]]: stesso bound con $|H|$ al posto di $\Pi_H(m)$
- [[Disuguaglianza di Jensen condizionata]]: Jensen (versione non condizionata) nel lemma di Massart
