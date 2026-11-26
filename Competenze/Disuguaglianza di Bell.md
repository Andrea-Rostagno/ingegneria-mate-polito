---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Bell's inequality", "teorema di Bell", "Bell theorem", "paradosso EPR", "EPR paradox", "entanglement", "stato entangled", "entangled state", "variabili nascoste", "hidden variables", "non località", "non-locality"]
tags: [competenza, area/fisica]
---

# Disuguaglianza di Bell

> Ogni teoria a variabili nascoste locali deve soddisfare $|P(\vec a,\vec b)-P(\vec a,\vec c)|\le1+P(\vec b,\vec c)$; la meccanica quantistica, per lo stato di singoletto, la viola: la natura è non locale.

## Definizione / enunciato
**Entanglement:** uno stato è entangled se non si può scrivere come prodotto di due vettori appartenenti agli spazi di Hilbert dei due sottosistemi, $|\psi\rangle_U=\sum_ic_i|\phi_i\rangle_A|\chi_i\rangle_B$. Esempio: il singoletto $\frac1{\sqrt2}(|\uparrow\rangle_A|\downarrow\rangle_B-|\downarrow\rangle_A|\uparrow\rangle_B)$.
**Paradosso EPR:** una coppia elettrone-positrone in singoletto viene separata; se Alice misura spin su, Bob misurerà con certezza spin giù, a qualunque distanza. Per Einstein, Podolsky e Rosen il collasso istantaneo violerebbe la località: la meccanica quantistica sarebbe incompleta e servirebbero variabili nascoste $\lambda$.
**Bell:** con risultati $A(\vec a,\lambda),B(\vec b,\lambda)=\pm1$, anticorrelazione $A(\vec a,\lambda)=-B(\vec a,\lambda)$ e densità $\rho(\lambda)$, la media del prodotto è $P(\vec a,\vec b)=-\int d\lambda\,\rho(\lambda)A(\vec a,\lambda)A(\vec b,\lambda)$, e con $A^2=1$ si dimostra la disuguaglianza.

## Formule chiave
$$P_{QM}(\vec a,\vec b)=-\vec a\cdot\vec b,\qquad P(\vec a,\vec a)=-1,\quad P(\vec a,-\vec a)=+1$$
$$|P(\vec a,\vec b)-P(\vec a,\vec c)|\le1+P(\vec b,\vec c)$$
Controesempio: $\vec a\perp\vec b$, $\vec c$ a $\pi/4$ da entrambi: $P(\vec a,\vec b)=0$, $P(\vec a,\vec c)=P(\vec b,\vec c)=-\frac{\sqrt2}{2}$, e la disuguaglianza darebbe $\frac{\sqrt2}2\le1-\frac{\sqrt2}2$, cioè $\sqrt2\le1$: falso.

## Intuizione
La misura di Alice influenza istantaneamente il risultato di Bob, ma Alice non controlla il proprio risultato e quindi non può inviare informazione: le due serie di risultati sono singolarmente casuali, la correlazione emerge solo confrontandole con un canale classico. Nessun conflitto con la relatività ristretta.

## Come si usa
Si confrontano le correlazioni misurate con la disuguaglianza: gli esperimenti la violano, escludendo le variabili nascoste locali (`QM_notes3.pdf` pp. 53-55).

## Nei corsi
- **Quantum physics** (triennale): cap. 5 delle note di M. Re Fiorentin (numeri di pagina del PDF; la numerazione stampata è inferiore di 1 dopo la p. 37 bianca). Fonti: `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 53-55).

## Prerequisiti
- [[Singoletto e tripletto di spin]]: il singoletto è lo stato entangled di EPR
- [[Misura in meccanica quantistica]]: collasso della funzione d'onda

## Porta a
- Nessuno.

## Collegati
- [[Variabile aleatoria]]: le variabili nascoste sono descritte da una densità ρ(λ)
- [[Matrici di Pauli]]: misure di spin lungo direzioni arbitrarie
