---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["properties of the recourse function", "convexity of the value function", "convessità della funzione valore", "funzione valore lineare a tratti", "piecewise linear value function", "teorema sulla funzione valore di secondo stadio"]
tags: [competenza, area/ottimizzazione]
---

# Convessità della funzione di ricorso

> Il valore ottimo del secondo stadio, come funzione dei dati, è convesso e lineare a tratti in $(\mathbf h,T,\mathbf x)$ e concavo lineare a tratti in $\mathbf q$: per questo il valore atteso del ricorso si approssima bene con piani di taglio.

## Definizione / enunciato
**Teorema.** Fissato $\xi$, la funzione valore $Q(\mathbf x,\xi)=\min\{\mathbf q^T\mathbf y: W\mathbf y=\mathbf h-T\mathbf x,\ \mathbf y\ge\mathbf 0\}$ è
1. convessa lineare a tratti in $(\mathbf h,T)$;
2. concava lineare a tratti in $\mathbf q$;
3. convessa lineare a tratti in $\mathbf x$ su $K_2$.

Se $\xi$ è discreta finita, $\mathcal Q(\mathbf x)=\mathbb E[Q(\mathbf x,\xi)]$ è lineare a tratti e convessa su $K_2$; la convessità non richiede l'ipotesi di $\xi$ discreta.

## Formule chiave
Duale: $Q(\mathbf x,\xi)=\max\{(\mathbf h-T\mathbf x)^T\boldsymbol\pi: W^T\boldsymbol\pi\le\mathbf q\}$. L'insieme $\Pi$ dipende solo da $W$ e $\mathbf q$; con vertici $\boldsymbol\pi_1,\dots,\boldsymbol\pi_L$:
$$Q(\mathbf x,\xi)=\max_{\ell=1,\dots,L}(\mathbf h-T\mathbf x)^T\boldsymbol\pi_\ell,$$
massimo di funzioni affini; nel primale $Y$ non dipende da $\mathbf q$ e $Q=\min_m\mathbf q^T\mathbf y_m$, minimo di funzioni lineari. Concavità in $\mathbf q$: $\min_{\mathbf y\in Y}(\lambda\mathbf q_1+(1-\lambda)\mathbf q_2)^T\mathbf y\ge\lambda\min\mathbf q_1^T\mathbf y+(1-\lambda)\min\mathbf q_2^T\mathbf y$.

## Intuizione
Cambiare il lato destro sposta solo la funzione obiettivo del duale su un poliedro fisso: il valore ottimo è il più alto fra un numero finito di "piani", quindi convesso a tratti. Le stesse proprietà valgono stadio per stadio nei problemi multistadio, e su di esse si basano L-shaped e SDDP.

## Come si usa
Mini-modello: $\min_{x\in[0,6]}\mathcal Q(x)$ con $Q(x,\xi)=\min\{y^++y^-: y^+-y^-=\xi-x\}=|\xi-x|$ e $\xi\in\{1,3,5\}$ equiprobabili: $\mathcal Q(x)=\frac13(|1-x|+|3-x|+|5-x|)$, convessa lineare a tratti con angoli in 1, 3, 5 e minimo in $x^*=3$, la mediana. In generale $\mathbb E[Q]$ è un integrale difficile e si ricorre al Monte Carlo.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): Teorema 1 della Parte II con dimostrazione, ripreso per SDDP. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 26-29); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 17).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: definisce la funzione valore
- [[Dualità nella programmazione lineare]]: il duale ha regione indipendente da $(\mathbf h,T,\mathbf x)$
- [[Soluzione basica ammissibile]]: l'ottimo è in un vertice

## Porta a
- [[Metodo L-shaped]]: approssimazione esterna con tagli
- [[Stochastic dual dynamic programming]]: stesse proprietà a ogni stadio

## Collegati
- [[Operazioni che preservano la convessità]]: massimo puntuale di funzioni affini
- [[Funzioni lineari a tratti]]: forma della funzione di ricorso con scenari finiti
