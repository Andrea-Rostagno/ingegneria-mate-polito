---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["forward algorithm", "algoritmo forward-backward (parte forward)", "ricorsione forward", "forward recursion", "verosimiglianza marginale di un HMM"]
tags: [competenza, area/statistica]
---

# Algoritmo forward

> Ricorsione che calcola $a_i(k)=f(y_1,\dots,y_i,z_i=k)$ in un HMM, evitando la somma su tutte le $L^n$ sequenze di stati: dà la densità marginale dei dati e le quantità per campionare gli stati.

## Definizione / enunciato
La densità marginale $f(\mathbf y)=\sum_{k_1=1}^L\cdots\sum_{k_n=1}^Lf(\mathbf y\mid z_1=k_1,\dots,z_n=k_n)f(z_1=k_1,\dots,z_n=k_n)$ è complicata da calcolare direttamente. Si definisce
$$a_i(k)=f(y_1,\dots,y_i,z_i=k)=f(y_1,\dots,y_i\mid z_i=k)f(z_i=k).$$

## Formule chiave
- Inizio: $a_1(k)=f(y_1,z_1=k)=\pi_{z_0,k}f(y_1\mid z_1=k)$ (la slide scrive $f(\mathbf y\mid z_1=k)$, da leggere come $f(y_1\mid z_1=k)$).
- Passo: condizionando su $z_{i-1}$ e usando le indipendenze del DAG,
$$a_i(k)=\sum_{k_{i-1}=1}^Lf(y_i\mid z_i=k)\,\pi_{k_{i-1},k}\,a_{i-1}(k_{i-1}).$$
- Fine: $f(\mathbf y)=\sum_{k=1}^La_n(k)=\sum_{k=1}^Lf(y_1,\dots,y_n,z_n=k)$.

## Intuizione
Ogni passo propaga in avanti la probabilità congiunta di "dati finora e stato attuale" moltiplicando per la transizione e per la verosimiglianza del nuovo dato: costo lineare in $n$ invece che esponenziale. Nella congiunta marginale le osservazioni risultano dipendenti.

## Come si usa
Per la densità marginale dei dati dell'HMM e come primo passo del campionamento all'indietro degli stati. L'algoritmo assume $z_0$ noto (dentro i parametri) ma si può estendere marginalizzando su $z_0$. Il docente nota che marginalizzare $\mathbf z$ "lo sappiamo fare solo in maniera algoritmica", quindi non serve a costruire l'MCMC. Nel notebook la ricorsione è implementata in scala logaritmica.

## Nei corsi
- **Statistica computazionale** (magistrale): "HMM - Forward-Backward Algorithm". Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 37-39, 44); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (forward in R).

## Prerequisiti
- [[Hidden Markov model]]: il modello
- [[Formula delle probabilità totali]]: somma sullo stato precedente

## Porta a
- [[Forward filtering backward sampling]]: usa le $a_i(k)$

## Collegati
- [[Trucco log-sum-exp]]: stabilità numerica in scala log
- [[Equazioni di Chapman-Kolmogorov]]: stessa propagazione per somma sugli stati intermedi
