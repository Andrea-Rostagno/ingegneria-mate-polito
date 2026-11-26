---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Wardrop equilibrium", "user equilibrium", "equilibrio utente", "UO-TAP", "user optimum traffic assignment", "assegnazione del traffico all'equilibrio", "primo principio di Wardrop"]
tags: [competenza, area/ottimizzazione]
---

# Equilibrio di Wardrop

> Distribuzione del traffico in cui ogni guidatore usa un percorso di tempo minimo: nessuno ha interesse a cambiare strada. Coincide con il minimo di un costo "potenziale" integrale.

## Definizione / enunciato
Una massa $\upsilon$ di guidatori va da $o$ a $d$ scegliendo tra i cammini $\Gamma_{od}$; $z\in\mathbb R^{\Gamma_{od}}$, $z\ge0$, $\mathbb 1'z=\upsilon$, flusso sugli archi $f=Az$; ritardi $\tau_e(f_e)$ convessi non decrescenti. $f^{(0)}=Az$ è un **equilibrio di Wardrop** se per ogni $\gamma$
$$z_\gamma>0\ \Longrightarrow\ \sum_eA_{e\gamma}\tau_e(f^{(0)}_e)\le\sum_eA_{e\tilde\gamma}\tau_e(f^{(0)}_e)\quad\forall\tilde\gamma\in\Gamma_{od},$$
cioè ogni cammino usato ha ritardo totale minimo.

**Proposizione.** L'equilibrio di Wardrop è la soluzione dell'**UO-TAP**
$$\min_{f\in\mathbb R^{\mathcal E}_+,\ Bf=\upsilon(\delta^{(o)}-\delta^{(d)})}\ \sum_e\int_0^{f_e}\tau_e(s)\,ds .$$

## Formule chiave
Confronto con l'ottimo di sistema (SO-TAP): stesso vincolo, costo $\sum_ef_e\tau_e(f_e)$. Le condizioni CS dell'UO-TAP con $\psi_e(f)=\int_0^f\tau_e$, cioè $\psi'_e=\tau_e$, dicono esattamente che i cammini usati hanno ritardo uguale a $\lambda_o-\lambda_d$ e gli altri ritardo maggiore o uguale.

## Intuizione
È un equilibrio di Nash per una popolazione continua di guidatori egoisti. Il costo integrale è un potenziale: ogni guidatore che cambia percorso fa variare il potenziale quanto il proprio ritardo.

## Come si usa
Esempio di Braess (ritardi $f_{e_1}$, $1$, $0$, $1$, $f_{e_5}$, massa 1): l'equilibrio è $f^{(0)}=(1,0,1,0,1)$, tutti sul percorso che usa l'arco a ritardo 0, con ritardo 2; l'ottimo di sistema è $(1/2,1/2,0,1/2,1/2)$. Nel modello di campo medio con scelta logit, l'equilibrio $z^*(\beta)$ converge al Wardrop $(0,0,1)$ per $\beta\to+\infty$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 4, "When drivers choose their route", "Wardrop equilibrium"; ripreso in Slides 11. Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 23-27, 29); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 14-18).

## Prerequisiti
- [[Ottimizzazione convessa di flussi su rete]]: è il problema con costo integrale
- [[Decomposizione dei flussi]]: dai cammini agli archi, $f=Az$

## Porta a
- [[Prezzo dell'anarchia]]: confronto con l'ottimo di sistema
- [[Pedaggi a costo marginale]]: equilibrio con pedaggi

## Collegati
- [[Equilibrio di Nash]]: Wardrop è il Nash di un gioco con infiniti giocatori
- [[Giochi di congestione]]: versione con giocatori discreti e potenziale di Rosenthal
- [[Dinamica logit di campo medio]]: limite $\beta\to\infty$ dell'equilibrio logit
