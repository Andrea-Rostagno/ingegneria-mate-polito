---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["agnostic PAC learning", "PAC agnostico", "agnostic PAC model", "caso non realizzabile", "non-realizable case"]
tags: [competenza, area/data-ml]
---

# Apprendimento PAC agnostico

> Estensione del modello PAC in cui non si suppone che esista un concetto target in $H$: si chiede di avvicinarsi al miglior errore ottenibile in $H$.

## Definizione / enunciato
Nello scenario stocastico la distribuzione $D$ è su $\mathcal X\times\mathcal Y$ e in generale non esiste una funzione $f:\mathcal X\to\mathcal Y$ "da imparare" (appunti: "non esiste $f$ da imparare"). $H$ è **agnosticamente PAC-apprendibile** se esiste un algoritmo $\mathcal A$ tale che per ogni $\epsilon>0$, $\delta>0$ e ogni distribuzione $D$, per campioni di taglia $m=\mathrm{poly}(1/\epsilon,1/\delta)$:
$$\Pr_{S\sim D^m}\Big[R(h_S)-\inf_{h\in H}R(h)\le\epsilon\Big]\ge1-\delta .$$

## Formule chiave
Lower bound nel caso non realizzabile (Anthony e Bartlett, 1999): se $\mathrm{VCdim}(H)=d>1$, per ogni algoritmo esiste $D$ su $\mathcal X\times\{0,1\}$ con
$$\Pr_{S\sim D^m}\Big[R_D(h_S)-\inf_{h\in H}R_D(h)>\sqrt{\frac{d}{320m}}\Big]\ge\frac1{64},$$
cioè la complessità campionaria verifica $m\ge\frac{d}{320\epsilon^2}$.

## Intuizione
Se le etichette sono rumorose nemmeno la migliore ipotesi ha errore nullo: l'obiettivo realistico è competere con la migliore ipotesi della classe. Il riferimento diventa $\inf_{h\in H}R(h)$, che a sua volta dista dall'errore di Bayes per l'errore di approssimazione.

## Come si usa
I bound uniformi (H finito inconsistente, Rademacher, VC) danno l'apprendibilità agnostica tramite ERM: l'eccesso di rischio dell'ipotesi ERM è al più due volte lo scarto uniforme $\sup_h|R(h)-\hat R(h)|$.

## Nei corsi
- **Matematica per l'AI** (triennale): appunti "Agnostic PAC learning" e slide del lower bound. Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 120-122); `FML.pdf` §2.4.

## Prerequisiti
- [[Modello PAC]]: stessa definizione con riferimento diverso
- [[Errore di Bayes]]: scenario stocastico e rumore

## Porta a
- [[Empirical risk minimization]]: realizza l'apprendimento agnostico quando c'è convergenza uniforme
- [[Lower bound VC]]: limiti inferiori nel caso non realizzabile

## Collegati
- [[Bound di apprendimento per H finito (caso inconsistente)]]: garanzia agnostica per H finito
