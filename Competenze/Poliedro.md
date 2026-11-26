---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["polyhedron", "politopo", "polytope", "punto estremo", "extreme point", "vertice di un poliedro", "direzione di recessione", "recession direction", "direzione estrema", "raggio di un poliedro"]
tags: [competenza, area/ottimizzazione]
---

# Poliedro

> Intersezione di un numero finito di semispazi, $P=\{\mathbf x:A\mathbf x\ge\mathbf b\}$; è la regione ammissibile di ogni LP e si rappresenta anche tramite i suoi vertici e le sue direzioni estreme.

## Definizione / enunciato
Un **poliedro** $P\subseteq\mathbb R^n$ è l'intersezione di un numero finito di semispazi, quindi convesso: $P=\{\mathbf x\in\mathbb R^n\mid A\mathbf x\ge\mathbf b\}$. Un poliedro limitato è un **politopo**.

**Punto estremo (vertice):** $\mathbf x\in P$ che non è combinazione convessa stretta di due punti distinti di $P$: se $\mathbf x=\lambda\mathbf x'+(1-\lambda)\mathbf x''$ con $\lambda\in(0,1)$, $\mathbf x',\mathbf x''\in P$, allora $\mathbf x'=\mathbf x''$.

**Raggio** $\{\mathbf x_0+\lambda\mathbf d:\lambda\ge0\}$; $\mathbf d$ è **direzione di recessione** di un convesso $S$ se un raggio di direzione $\mathbf d$ sta tutto in $S$. Per $P=\{A\mathbf x\ge\mathbf b\}$: $\mathbf d\ne\mathbf 0$ è di recessione se e solo se $A\mathbf d\ge\mathbf 0$. **Direzione estrema:** non è combinazione conica a coefficienti strettamente positivi di due direzioni di $P$ non equivalenti ($\mathbf d_1,\mathbf d_2$ equivalenti se $\mathbf d_1=\mu\mathbf d_2$, $\mu>0$).

## Formule chiave
Politopo di vertici $\mathbf x_1,\dots,\mathbf x_J$: $\mathbf x=\sum_j\lambda_j\mathbf x_j$, $\sum_j\lambda_j=1$, $\lambda_j\ge0$. Poliedro generale, con direzioni estreme $\mathbf d_k$:
$$\mathbf x=\sum_{j=1}^J\lambda_j\mathbf x_j+\sum_{k=1}^K\mu_k\mathbf d_k,\qquad\sum_j\lambda_j=1,\ \ \lambda_j,\mu_k\ge0 .$$

## Intuizione
Un poliedro illimitato è "un politopo più un cono": dai vertici ci si può allontanare indefinitamente lungo le direzioni estreme senza uscire. Le due descrizioni (semispazi o vertici + direzioni) sono equivalenti.

## Come si usa
È la base geometrica dell'LP: se esiste un ottimo finito, ce n'è uno in un vertice; le direzioni estreme contano solo quando l'ottimo non è finito. Nel mix ottimo di produzione il poliedro ha i 5 vertici $M_0,\dots,M_4$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 9, 30, 34-35); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 12-13).
- **Ottimizzazione in condizione di incertezza** (magistrale): le due rappresentazioni (semispazi oppure punti estremi più direzioni estreme, $\mathbf x=\sum_j\lambda_j\mathbf x_j+\sum_k\mu_k\mathbf d_k$) non sono una migliore dell'altra: l'ipercubo $H_n$ ha $2n$ disuguaglianze ma $2^n$ vertici, la palla $\ell_1$ ha $2n$ vertici ma molte facce. Le disuguaglianze si prestano ai piani di taglio (approssimazioni esterne), vertici e direzioni alle approssimazioni interne: è la base di Benders (punti estremi e raggi del duale) e di Dantzig-Wolfe. Insiemi di incertezza poliedrali e politopici. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 6-8); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 19-21, 27-28).

## Prerequisiti
- [[Insieme convesso]]: intersezione di semispazi convessi
- [[Combinazioni coniche, affini e convesse]]: rappresentazione con vertici e direzioni

## Porta a
- [[Soluzione basica ammissibile]]: i vertici in forma algebrica
- [[Cono convesso]]: la parte illimitata del poliedro

## Collegati
- [[Programmazione lineare]]: la regione ammissibile è un poliedro
- [[Rilassamento continuo]]: poliedro del rilassamento e $\mathrm{conv}$ dei punti interi
