---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["canonical quantization", "regola di quantizzazione di Heisenberg", "relazioni di commutazione canoniche", "canonical commutation relations", "[x,p]=iħ", "problema dell'ordinamento", "ordering problem"]
tags: [competenza, area/fisica]
---

# Quantizzazione canonica

> Procedura che trasforma un sistema hamiltoniano classico in uno quantistico: le variabili canoniche diventano operatori e le parentesi di Poisson diventano commutatori moltiplicati per $i\hbar$.

## Definizione / enunciato
**Regola (Heisenberg):** $x_j,p_k\ \Rightarrow\ \hat x_j,\hat p_k$ e
$$\{x_k,p_j\}\ \Rightarrow\ [\hat x_k,\hat p_j]:=i\hbar\{x_k,p_j\}=i\hbar\delta_{kj}.$$
Se le $\hat q_j$ sono operatori di moltiplicazione, la forma di $\hat p_k$ si ricava dal commutatore: per le coordinate cartesiane $\hat p_k=-i\hbar\,\partial_k$.
Le relazioni tra operatori quantistici (es. $[\hat L_j,\hat p_n]=i\hbar\varepsilon_{jnk}\hat p_k$) riproducono quelle classiche tra parentesi di Poisson ($\{L_j,p_n\}=\varepsilon_{jnk}p_k$).

## Formule chiave
$$[x_i,x_j]=0,\quad [\hat p_k,\hat p_j]=0,\quad [x_k,\hat p_j]=i\hbar\delta_{kj},\quad [\hat p_k,f(\hat x)]=-i\hbar\,\partial_{x_k}f$$
Regola di Leibniz: $[A,BC]=B[A,C]+[A,B]C$.
$$[\hat L_j,\hat p_n]=i\hbar\varepsilon_{jnk}\hat p_k,\quad [\hat L_j,\hat x_n]=i\hbar\varepsilon_{jnk}\hat x_k,\quad [\hat L_j,\hat p^2]=[\hat L_j,\hat x^2]=0$$

## Intuizione
La somiglianza formale tra parentesi di Poisson e commutatori fornisce una ricetta generale per quantizzare qualunque sistema hamiltoniano: basta conoscere le variabili canoniche.

## Come si usa
Il limite della regola è il **problema dell'ordinamento** (non risolto): la funzione classica $x_1^2p_1$ dà operatori diversi, $x_1^2\hat p_1$, $x_1\hat p_1x_1=x_1^2\hat p_1-i\hbar x_1$, $\hat p_1x_1^2=x_1^2\hat p_1-2i\hbar x_1$, e anche le forme simmetrizzate non sono uniche (`2022_QP.pdf` p. 41). Un altro caso: per il momento radiale, $[r,p_r]=i\hbar$ è soddisfatto da $-i\hbar\partial_r+f(r)$; la scelta hermitiana è $p_r=-i\hbar(\partial_r+1/r)$ (p. 113). La stessa regola quantizza il campo e.m. ($[b_{k\sigma},b^+_{n\gamma}]=\delta_{\sigma\gamma}\delta_{kn}$, p. 184).

## Nei corsi
- **Quantum physics** (triennale): §4.3 della dispensa di V. Penna (operatori fisici, commutatori, quantizzazione canonica). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 38-41, 113, 153, 184).

## Prerequisiti
- [[Parentesi di Poisson]]: si sostituiscono con i commutatori
- [[Equazioni di Hamilton]]: fornisce le variabili canoniche da quantizzare

## Porta a
- [[Commutatore di operatori]]: i commutatori canonici sono il caso base
- [[Teorema di Ehrenfest]]: usa $[x_j,H]=i\hbar p_j/m$ e $[p_j,H]=-i\hbar\partial_jU$
- [[Potenziale centrale quantistico]]: definizione hermitiana di $p_r$
- [[Quantizzazione del campo elettromagnetico]]: la stessa regola applicata ai modi del campo

## Collegati
- [[Operatori quantistici]]: posizione e impulso come operatori su L²
- [[Principio di indeterminazione di Heisenberg]]: $[x,p]=i\hbar$ dà $\Delta x\Delta p\ge\hbar/2$
