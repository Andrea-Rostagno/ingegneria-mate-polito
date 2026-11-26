---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Benders decomposition", "Benders' decomposition", "delayed constraint generation", "generazione ritardata di vincoli", "tagli di ottimalità", "optimality cuts", "tagli di ammissibilità", "feasibility cuts", "master problem di Benders", "variabili di collegamento", "linking variables"]
tags: [competenza, area/ottimizzazione]
---

# Decomposizione di Benders

> Per problemi con variabili complicanti $\mathbf y$: fissate le $\mathbf y$ resta un LP facile; il suo duale fornisce tagli di ottimalità e di ammissibilità che si aggiungono a un problema master in $\mathbf y$.

## Definizione / enunciato
Problema $\min\mathbf c^T\mathbf x+\mathbf f^T\mathbf y$ s.t. $A\mathbf x+B\mathbf y\ge\mathbf b$, $\mathbf x\ge\mathbf 0$, $\mathbf y\in Y$ (principio di restrizione). Con $p(\mathbf y)=\min_{\mathbf x\ge\mathbf 0}\{\mathbf c^T\mathbf x: A\mathbf x\ge\mathbf b-B\mathbf y\}$ si scrive il **master**
$$\min\ \mathbf f^T\mathbf y+z\quad\text{s.t. }z\ge p(\mathbf y),\ \mathbf y\in Y,$$
e per dualità forte $p(\mathbf y)=d(\mathbf y)=\max\{(\mathbf b-B\mathbf y)^T\mathbf u: A^T\mathbf u\le\mathbf c,\ \mathbf u\ge\mathbf 0\}$, la cui regione ammissibile non dipende da $\mathbf y$.

## Formule chiave
Dato $\bar{\mathbf y}$:
1. $d(\bar{\mathbf y})$ finito con ottimo $\mathbf u^*(\bar{\mathbf y})$: **taglio di ottimalità** $z\ge(\mathbf b-B\mathbf y)^T\mathbf u^*(\bar{\mathbf y})$; $-\mathbf u^*(\bar{\mathbf y})^TB$ è un subgradiente di $d$ in $\bar{\mathbf y}$.
2. $d(\bar{\mathbf y})$ illimitato ($p(\bar{\mathbf y})$ inammissibile) lungo un raggio estremo $\tilde{\mathbf u}$ con $A^T\tilde{\mathbf u}\le\mathbf 0$: **taglio di ammissibilità** $(\mathbf b-B\mathbf y)^T\tilde{\mathbf u}\le0$.
3. $d(\bar{\mathbf y})$ inammissibile: c'è un problema nei vincoli, indipendente da $\bar{\mathbf y}$.

Con tutti i punti estremi $\mathbf u_i$ (o $\boldsymbol\pi_e$) e raggi $\mathbf r_q$ del duale il master è esatto; in pratica si risolve un **master ristretto** generando i tagli dinamicamente, fino a convergenza come in Kelley.

## Intuizione
Le variabili $\mathbf y$ propongono, il sottoproblema risponde con un prezzo (le variabili duali): i tagli di ottimalità sono iperpiani di supporto della funzione valore $V(\mathbf y)$ del sottoproblema, quelli di ammissibilità escludono proposte che rendono il sottoproblema impossibile.

## Come si usa
Nato per MILP con struttura speciale ($\min\mathbf f^T\mathbf y+\mathbf c^T\mathbf x$, $A\mathbf y=\mathbf b$, $B\mathbf y+D\mathbf x=\mathbf d$, $\mathbf y\in\mathbb Z_+^{n_1}$, $\mathbf x\in\mathbb R_+^{n_2}$): il master contiene le variabili intere, il sottoproblema è un LP. Nei problemi stocastici a due stadi le variabili di primo stadio sono le variabili di collegamento e il sottoproblema si separa per scenari: è il metodo L-shaped.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Benders' Decomposition [Ripasso]" e "Cutting planes and Benders decomposition". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 45-49); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 3-6, 19-21).

## Prerequisiti
- [[Algoritmo di Kelley]]: il master è un'approssimazione a piani di taglio
- [[Dualità nella programmazione lineare]]: tagli costruiti dalle soluzioni duali
- [[Poliedro]]: punti estremi e raggi estremi del duale

## Porta a
- [[Metodo L-shaped]]: applicazione ai problemi stocastici a due stadi
- [[Decomposizione di Benders annidata]]: applicazione ricorsiva su un albero

## Collegati
- [[Programmazione lineare mista-intera]]: classe di problemi d'origine
- [[Decomposizione di Dantzig-Wolfe]]: duale concettuale, genera colonne invece di righe
- [[Rilassamento lagrangiano]]: decomposizione per vincoli complicanti invece che per variabili
