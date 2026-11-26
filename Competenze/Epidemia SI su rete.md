---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["SI epidemics", "modello SI", "SI model", "epidemia SI", "tempo di infezione totale", "time to full infection"]
tags: [competenza, area/network]
---

# Epidemia SI su rete

> Modello di contagio senza guarigione: ogni infetto contagia i vicini suscettibili lungo i link a tasso $\beta W_{ij}$; tutti finiscono infetti e la domanda è quanto tempo serve, che dipende fortemente dalla topologia.

## Definizione / enunciato
Grafo non orientato $\mathcal G=(\mathcal V,\mathcal E,W)$, $\beta>0$, $X_i(t)\in\{S,I\}$. Link con orologi di Poisson indipendenti di tasso $\beta W_{ij}$; se suona $(i,j)$ con $X_i=S$ e $X_j=I$, allora $X_i$ diventa $I$ (contagio); altrimenti nulla cambia. Configurazioni assorbenti $S\mathbb 1$ e $I\mathbb 1$; partendo con almeno un infetto su un grafo connesso si arriva a $I\mathbb 1$.

## Formule chiave
Con $N(t)$ infetti, il prossimo contagio arriva a tasso $\beta\zeta_+(X(t))$ (bordo attivo), quindi il tempo atteso fino al contagio successivo è $1/(\beta\zeta_+)$.
- **Anello**, un infetto: bordo attivo sempre 2, $\mathbb E[T]=\frac{n-1}{2\beta}$.
- **Stella**, infetto il centro: con $k$ infetti il bordo attivo è $n-k$,
$$\mathbb E[T]=\frac1\beta\sum_{k=1}^{n-1}\frac1{n-k}=\frac{H_{n-1}}\beta\sim\frac{\log n}\beta .$$
- **Grafo completo**: $\zeta_+=k(n-k)$, $\tau_n=0$, $\tau_k=\frac1{k(n-k)\beta}+\tau_{k+1}$,
$$\tau_1=\sum_{k=1}^{n-1}\frac1{k(n-k)\beta}=\frac2{\beta n}\sum_{k=1}^{n-1}\frac1k\sim\frac2\beta\frac{\log n}n .$$

## Intuizione
Il tempo è la somma dei tempi d'attesa tra contagi successivi, ciascuno inversamente proporzionale al numero di coppie (infetto, suscettibile) adiacenti. Più il grafo è "espanso", più il bordo attivo è grande e l'infezione è rapida.

## Come si usa
Per grafi in cui $\zeta_+$ dipende solo da $k$, $N(t)$ è una catena di nascita pura e il tempo atteso è una somma esplicita. Per la stella si sfrutta che il centro è infetto, per il completo la simmetria.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 8, "SI epidemics", "Absorbing time for SI on the ring graph / star graph / complete graph". Fonti: `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 3, 7, 50-63).

## Prerequisiti
- [[Sistemi di interazione a coppie]]: formalismo generale e bordo attivo

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Epidemia SIS su rete]]: stesso contagio con guarigione
- [[Processo di Poisson]]: tempi esponenziali tra contagi
- [[Modello SIR]]: altro modello di Kermack e McKendrick
