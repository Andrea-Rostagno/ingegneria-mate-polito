---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["probability current", "densità di corrente di probabilità", "probability current density", "equazione di continuità della probabilità", "conservazione della probabilità", "conservation of probability"]
tags: [competenza, area/fisica]
---

# Corrente di probabilità

> La densità di probabilità $\rho=|\psi|^2$ obbedisce a un'equazione di continuità con corrente $\vec j$: ne segue che la probabilità totale (la normalizzazione) si conserva nel tempo.

## Definizione / enunciato
Moltiplicando l'equazione di Schrödinger per $\psi^*$, la sua coniugata per $\psi$ e sottraendo (con $U$ reale), i termini di potenziale si cancellano e resta una divergenza:
$$i\hbar\,\partial_t|\psi|^2=-\frac{\hbar^2}{2m}\nabla\cdot(\psi^*\nabla\psi-\psi\nabla\psi^*)$$
cioè un'equazione di continuità per $\rho$ con corrente $\vec j$.

## Formule chiave
$$\partial_t\rho+\mathrm{div}\,\vec j=0,\qquad \vec j=\frac{\hbar}{2mi}\left(\psi^*\nabla\psi-\psi\nabla\psi^*\right)$$
Con $\psi=|\psi|e^{i\theta}$: $\vec j=\frac\hbar m|\psi|^2\nabla\theta=\rho\vec v$, $\vec v=\frac\hbar m\nabla\theta$.
Forma integrale (teorema della divergenza): $\partial_tP(V)=\int_V\partial_t\rho\,d^3r=-\oint_S\vec j\cdot\vec u\,dS$.

## Intuizione
La probabilità si comporta come un fluido: diminuisce in un volume solo se "esce" attraverso il bordo. In un volume finito $\psi=0$ sul bordo; in $\mathbb R^3$, per $\psi$ normalizzabile, il flusso all'infinito si annulla, quindi $\int|\psi|^2d^3r$ è costante: la normalizzazione imposta a $t=0$ vale per sempre.

## Come si usa
Per verificare la decrescenza all'infinito si scrive $\psi\simeq f(r)/r^k$ con $f$ limitata: il flusso va a zero se $k>1$, e la normalizzabilità richiede (a posteriori) $k>3/2$. Per un'onda sferica $f=Ae^{ikr}$, $(f^*\nabla f-\text{c.c.})\cdot\vec u_r=2A^2ik$ (`2022_QP.pdf` pp. 36-37).
## Nei corsi
- **Quantum physics** (triennale): §4.2 della dispensa di V. Penna; §1 delle note di M. Re Fiorentin (eq. 1.7-1.10). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 35-37); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 1-3).

## Prerequisiti
- [[Equazione di Schrödinger]]: si combina con la sua coniugata
- [[Teorema della divergenza]]: dalla forma locale a quella integrale

## Porta a
- [[Spazio di Hilbert]]: la norma conservata rende L² lo spazio degli stati

## Collegati
- [[Equazione di continuità della carica]]: stessa struttura per la carica elettrica
- [[Equazione di continuità]]: stesso bilancio per la massa di un fluido
- [[Ampiezza di probabilità]]: interpretazione di $|\psi|^2$ come densità
