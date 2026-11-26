---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["ERM", "minimizzazione del rischio empirico", "empirical risk minimisation", "bound di stima di ERM"]
tags: [competenza, area/data-ml]
---

# Empirical risk minimization

> Algoritmo che sceglie in $H$ l'ipotesi con il minimo errore sul campione di addestramento; il suo errore di stima è controllato dalla deviazione uniforme fra errore vero ed empirico.

## Definizione / enunciato
Scelto l'insieme di ipotesi $H$,
$$h_{\rm erm}=\arg\min_{h\in H}\hat R(h).$$
Se più ipotesi hanno lo stesso errore minimo, ERM ne restituisce una arbitraria. Rischi: $H$ troppo complesso, campione troppo piccolo.

## Formule chiave
**Teorema (bound di ERM).** Per ogni campione $S$:
$$\Pr\Big[R(h_{\rm erm})-\inf_{h\in H}R(h)>\epsilon\Big]\le\Pr\Big[\sup_{h\in H}|R(h)-\hat R(h)|>\frac\epsilon2\Big].$$
**Dimostrazione.** Per ogni $\epsilon'>0$ esiste $h_{\epsilon'}$ con $R(h_{\epsilon'})\le\inf_HR+\epsilon'$; per definizione di ERM $\hat R(h_{\rm erm})\le\hat R(h_{\epsilon'})$, quindi
$$R(h_{\rm erm})-\inf_HR\le R(h_{\rm erm})-\hat R(h_{\rm erm})+\hat R(h_{\epsilon'})-R(h_{\epsilon'})+\epsilon'\le2\sup_{h\in H}|R(h)-\hat R(h)|+\epsilon',$$
e si fa tendere $\epsilon'\to0$.

## Intuizione
Se l'errore empirico approssima uniformemente quello vero su tutta $H$, minimizzare quello empirico quasi minimizza quello vero. Per questo i bound uniformi (H finito, Rademacher, VC) si traducono direttamente in garanzie per ERM.

## Come si usa
Con $H$ finito, VC o Rademacher si inserisce il bound sulla deviazione uniforme. ERM non decide però quale $H$ usare: questo è il compito di SRM e cross-validation. Nella cross-validation si esegue ERM su una parte del campione per ogni classe $H_k$. Calcolarlo esattamente è spesso difficile (es. iperpiano con minimo errore 0-1, NP-difficile), per cui si usano perdite surrogate convesse come la hinge loss.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/ERM_SRM_CV.pdf` (p. 10-12); `MIA_01W.pdf` (p. 22-23, 26); `FML.pdf` §4.2.

## Prerequisiti
- [[Errore di generalizzazione]]: si minimizza $\hat R$ al posto di $R$
- [[Errore di stima ed errore di approssimazione]]: ERM controlla la parte di stima

## Porta a
- [[Structural risk minimization]]: ERM con penalità di complessità
- [[Metodi di stima dell'accuratezza]]: la cross-validation sceglie fra soluzioni ERM

## Collegati
- [[Bound di apprendimento per H finito (caso consistente)]]: nel caso realizzabile ERM è consistente
- [[Apprendimento PAC agnostico]]: ERM realizza l'apprendimento agnostico
- [[SVM a margine morbido]]: la hinge loss sostituisce la perdita 0-1 non trattabile
