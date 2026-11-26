---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [ergodic theorem CTMC, asymptotic reward CTMC, ricompensa asintotica per CTMC]
tags: [competenza, area/probabilita]
---

# Teorema ergodico per CTMC

> Per una CTMC irriducibile con stazionaria, la media temporale di una funzione dello stato converge quasi certamente alla sua media sotto $\pi$.

## Definizione / enunciato
**Teorema (asymptotic reward).** Sia $(X_t)$ una CTMC irriducibile, con legge iniziale qualsiasi, che ammette distribuzione stazionaria $\pi$. Allora per ogni $f:S\to\mathbb R$ con
$$\sum_{j\in S}|f(j)|\,\pi(j)<\infty$$
si ha
$$\lim_{t\to\infty}\frac1t\int_0^t f(X_s)\,\mathrm ds=\sum_{j\in S}f(j)\pi(j)\qquad\text{q.c.}$$

## Formule chiave
Caso $f=\mathbb 1_{\{j\}}$: si ritrova la frequenza asintotica $N_t(j)/t\to\pi(j)=\frac1{\mathbb E_j[T^c_j]\lambda(j)}$.

## Intuizione
"La media temporale converge alla media spaziale calcolata con $\pi$": scrivendo $f=\sum_j f(j)\mathbb 1_{\{j\}}$, il tempo passato in ciascuno stato si stabilizza sulla frazione $\pi(j)$. L'ipotesi di sommabilità garantisce che la media spaziale sia finita.

## Come si usa
Si dà a ogni stato una "ricompensa" per unità di tempo e si calcola $\sum f\pi$.
- Es. N (turbina eolica): stati $WN,WM,WS,CN,CM,CS$; con $f(WM)=304$, $f(WS)=608$ e $\pi(WM)=45/152$, $\pi(WS)=23/608$, la produzione media di lungo periodo è $304\cdot\frac{45}{152}+608\cdot\frac{23}{608}=113$ kW per ora.
- Es. O (due pannelli solari): con $f$ = kW prodotti al giorno in ogni stato e $\pi\approx(0.00853,0.00310,0.09545,0.04177,0.52102,0.33013)$ si ottiene circa $2.100796$ kW/giorno.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 7 ("risultati limite": frequenza asintotica, teorema ergodico, convergenza). Fonti: `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13, "Asymptotic reward"), `suggested_exercises_CTMC.pdf` (es. N, O; la soluzione lo cita come "Theorem 18 in the lecture notes"). Non presente nel `.tex`.

## Prerequisiti
- [[Frequenza asintotica per CTMC]]: estende a funzioni dello stato
- [[Distribuzione stazionaria di una CTMC]]: media temporale uguale a media in $\pi$

## Porta a
- —

## Collegati
- [[Teorema ergodico per DTMC]]: versioni a tempo discreto e continuo (somma $\frac1n\sum f(X_k)$ al posto dell'integrale)
