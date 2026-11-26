---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["coloring game", "gioco della colorazione", "gioco di minoranza", "minority game", "anti-coordinazione su rete", "network anti-coordination game"]
tags: [competenza, area/network]
---

# Gioco di colorazione

> I nodi scelgono un colore tra $k$ e pagano una penalità per ogni vicino con lo stesso colore: è un gioco potenziale il cui potenziale conta le violazioni, quindi le colorazioni sono i suoi massimi. Con $k=2$ è il gioco di minoranza.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ non orientato non pesato, $\mathcal A=\{1,\dots,k\}$:
$$u_i(x_i;x_{-i})=-\sum_jW_{ij}\mathbb 1_{\{x_i=x_j\}} .$$
È separabile a coppie e potenziale esatto con
$$\Phi(x)=-\frac12\sum_{i,j}W_{ij}\mathbb 1_{\{x_i=x_j\}}.$$
**Gioco di minoranza** ($\mathcal A=\{-1,+1\}$, $\varphi(x,y)=-xy$): $u_i=-\sum_jW_{ij}x_ix_j=2(-|\{j\in N_i:x_j=x_i\}|+w_i/2)$; la miglior risposta è l'azione della minoranza dei vicini; potenziale $\Phi(x)=-\frac12\sum_{i,j}W_{ij}x_ix_j$.

## Formule chiave
- $-\Phi(x)$ conta le violazioni della colorazione; $\max\Phi=0$ se e solo se $\mathcal G$ è $k$-colorabile, e $\arg\max\Phi$ è l'insieme delle colorazioni con $k$ colori.
- Minoranza: gli $\arg\max\Phi$ sono equilibri, con il massimo numero di archi tra nodi in disaccordo; $\max\Phi=|\mathcal E|/2$ se e solo se il grafo è bipartito (equilibri in cui ogni arco unisce nodi in disaccordo).

## Intuizione
Il problema combinatorio di colorare un grafo diventa un gioco tra nodi egoisti che cercano di differenziarsi dai vicini. Gli equilibri sono "colorazioni localmente ottime", non sempre globalmente ottime.

## Come si usa
Algoritmo distribuito per la colorazione: si fa girare la noisy best response con $\beta$ grande; la catena campiona approssimativamente in modo uniforme le colorazioni. La best response pura invece può bloccarsi: esempio delle slide di due equilibri stretti della minoranza con $\Phi=6$ e $\Phi=7$, dove per passare all'ottimo bisogna attraversare configurazioni con $\Phi=4$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "The minority game", "Coloring graphs", "The coloring game", "NBR for coloring graphs". Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 30, 36-45, 71-73, 81).

## Prerequisiti
- [[Giochi separabili a coppie]]: struttura e potenziale
- [[Colorazione di un grafo]]: il problema combinatorio

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Noisy best response]]: algoritmo approssimato per trovare colorazioni
- [[Spettro dei grafi bipartiti]]: la minoranza raggiunge $|\mathcal E|/2$ solo sui bipartiti
- [[Giochi 2x2 simmetrici]]: su ogni arco si gioca un'anti-coordinazione
