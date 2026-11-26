---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["evolutionary dynamics", "dinamica evolutiva", "probabilità di fissazione su rete", "fixation probability on networks", "invasione di un mutante", "competing species on networks"]
tags: [competenza, area/network]
---

# Dinamica evolutiva su rete

> Due specie in competizione sui nodi di un grafo: lungo un link la specie del vicino invade con probabilità pari alla sua fitness. Su grafi non orientati la probabilità che un mutante conquisti tutto è quella della rovina del giocatore, indipendente dalla posizione iniziale.

## Definizione / enunciato
Grafo non orientato $\mathcal G=(\mathcal V,\mathcal E,W)$, $\beta>0$, $X_i(t)\in\{0,1\}$, fitness $f_0,f_1\in[0,1]$. Se suona il link $(i,j)$, con probabilità $f_{X_j(t^-)}$ si ha $X_i(t)=X_j(t^-)$ (invasione), altrimenti nulla cambia. Nel formalismo a coppie $\psi=I$, $\varphi(c)=(1-f_c)I+f_c\mathbb 1\delta^{(c)\prime}$.

**Teorema.** $\mathcal G$ connesso non orientato, $\rho=f_1/f_0$, $k=\sum_ix_i$:
$$\mathbb P_x\Big(\lim_{t\to+\infty}X(t)=\mathbb 1\Big)=\begin{cases}k/n&\rho=1\\[2pt]\dfrac{1-\rho^{-k}}{1-\rho^{-n}}&\rho\neq1.\end{cases}$$

## Formule chiave
Prova: $N(t)=\sum_iX_i(t)$ non è una catena di Markov, perché sale a tasso $\beta\zeta(x)f_1$ e scende a tasso $\beta\zeta(x)f_0$ con $\zeta$ bordo attivo; ma il rapporto dei tassi non dipende da $x$, quindi ha le stesse probabilità di assorbimento della sua catena dei salti, una nascita-morte su $\{0,\dots,n\}$ con
$$p=\frac{f_1}{f_0+f_1},\qquad q=\frac{f_0}{f_0+f_1},\qquad \frac pq=\rho .$$

## Intuizione
Ogni volta che il confine tra le specie si sposta, avanza la specie 1 con probabilità $p$ e la 0 con probabilità $q$, qualunque sia la forma del confine: per questo la geometria del grafo sparisce.

## Come si usa
Interpretazione biologica delle slide: in una popolazione nativa di 0 si introduce un solo mutante 1 con vantaggio $f_1>f_0$; la probabilità che il mutante sostituisca la specie nativa è
$$\frac{1-\rho^{-1}}{1-\rho^{-n}},$$
indipendentemente dalla posizione iniziale del mutante.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 8, "Evolutionary dynamics", "Fixation probability for evolutionary dynamics". Fonti: `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 23, 28, 70-71).

## Prerequisiti
- [[Sistemi di interazione a coppie]]: formalismo generale
- [[Catena di nascita e morte discreta]]: catena dei salti di $N(t)$

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Rovina del giocatore]]: stessa probabilità di assorbimento
- [[Modello di Wright-Fisher]]: fissazione genetica in popolazione senza struttura
- [[Modello del votante]]: caso senza vantaggio di fitness
