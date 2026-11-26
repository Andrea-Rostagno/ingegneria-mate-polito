---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Hoeffding's inequality", "Hoeffding inequality", "disuguaglianza di concentrazione di Hoeffding", "union bound", "disuguaglianza di Boole"]
tags: [competenza, area/probabilita]
---

# Disuguaglianza di Hoeffding

> Stima esponenziale della probabilità che la media di variabili indipendenti e limitate si allontani dal suo valore atteso; è lo strumento base dei limiti di generalizzazione.

## Definizione / enunciato
Siano $X_1,\dots,X_m$ variabili aleatorie **indipendenti** con la stessa speranza $\mu$ e $X_i\in[a,b]$, $a<b$. Allora per ogni $\epsilon>0$:
$$\Pr\Big[\mu-\frac1m\sum_{i=1}^mX_i>\epsilon\Big]\le\exp\Big(\frac{-2m\epsilon^2}{(b-a)^2}\Big),\qquad \Pr\Big[\frac1m\sum_{i=1}^mX_i-\mu>\epsilon\Big]\le\exp\Big(\frac{-2m\epsilon^2}{(b-a)^2}\Big).$$

## Formule chiave
**Corollario per l'apprendimento.** Per ogni ipotesi fissata $h:\mathcal X\to\{0,1\}$ (le perdite 0-1 stanno in $[0,1]$):
$$\Pr[R(h)-\hat R(h)\ge\epsilon]\le e^{-2m\epsilon^2},\qquad \Pr[|R(h)-\hat R(h)|\ge\epsilon]\le 2e^{-2m\epsilon^2}.$$
Strumenti di base usati insieme (slide "Basic Properties"): **union bound** $\Pr[A\vee B]\le\Pr[A]+\Pr[B]$; **inversione**: se $\Pr[X\ge\epsilon]\le f(\epsilon)$ allora per ogni $\delta>0$, con probabilità almeno $1-\delta$, $X\le f^{-1}(\delta)$.

## Intuizione
La media di $m$ variabili limitate si concentra attorno a $\mu$ con code che decadono come $e^{-cm\epsilon^2}$, molto più velocemente di quanto dice Chebyshev ($\propto 1/(m\epsilon^2)$). Invertendo, lo scarto tipico è dell'ordine di $\sqrt{\log(1/\delta)/m}$.

## Come si usa
Non si può applicare direttamente all'ipotesi $h_S$ restituita dall'algoritmo, perché dipende dal campione: si combina con lo union bound su tutte le $h\in H$ (convergenza uniforme). Così si ottiene il bound per $H$ finito, caso inconsistente. Compare anche nella dimostrazione del lemma di Massart e delle garanzie di SRM e cross-validation.

## Nei corsi
- **Matematica per l'AI** (triennale): richiami di probabilità nella prima lezione (union bound, Markov, Chebyshev, Hoeffding, McDiarmid). Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 28-30, 59).

## Prerequisiti
- [[Disuguaglianza di Chebyshev]]: Markov e Chebyshev sono le stime più deboli che precede
- [[Indipendenza di variabili aleatorie]]: ipotesi essenziale

## Porta a
- [[Bound di apprendimento per H finito (caso inconsistente)]]: Hoeffding più union bound
- [[Disuguaglianza di McDiarmid]]: generalizzazione a funzioni a differenze limitate
- [[Funzione di crescita]]: usata nella dimostrazione del lemma di Massart

## Collegati
- [[Legge dei grandi numeri]]: versione quantitativa non asintotica della convergenza della media
- [[Errore di generalizzazione]]: concentra $\hat R(h)$ attorno a $R(h)$
