---
tipo: competenza
area: finanza
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["asset-liability management", "ALM", "dedicazione di portafoglio"]
tags: [competenza, area/finanza]
---

# Cash flow matching

> Modello LP di asset-liability management: costruire un portafoglio di obbligazioni di costo minimo che copra una sequenza di passività, eventualmente reinvestendo surplus e finanziando shortfall a breve.

## Definizione / enunciato
Passività $L_t$ in $t=1,\dots,T$; $n$ obbligazioni di prezzo $P_i$ che pagano flussi $F_{it}$; $x_i$ quantità acquistata. Versione base:
$$\min\sum_{i=1}^nP_ix_i\quad\text{s.t.}\ \sum_{i=1}^nF_{it}x_i\ge L_t,\ t\in[T];\qquad x_i\ge0 .$$

## Formule chiave
Con gestione della liquidità (tasso a breve $r_f$, spread $\delta$ sul prestito, budget $b_0$, surplus $v_t^+$ e shortfall $v_t^-$):
$$\max v_T^+\ \ \text{s.t.}\ b_0-\sum_iP_ix_i=v_0^+-v_0^-,$$
$$\sum_iF_{it}x_i+(1+r_f)v_{t-1}^++v_t^-=L_t+v_t^++(1+r_f+\delta)v_{t-1}^-,\ t=1,\dots,T;\qquad v_T^-=0,\ v_t^\pm,x_i\ge0 .$$

## Intuizione
Ogni istante è un nodo di una rete con flussi "verticali" (cedole in entrata, passività in uscita) e "orizzontali" (denaro portato al periodo successivo con fattore $1+r_f$, o debito che cresce con $1+r_f+\delta$): ogni nodo è in equilibrio fra tre flussi entranti e tre uscenti.

## Come si usa
Il modello base è rigido: non si può reinvestire il surplus né finanziare lo shortfall. La versione con liquidità massimizza il surplus finale senza debito residuo. Restano limiti: non si vendono obbligazioni prima della scadenza né se ne comprano in futuro, perché servirebbe modellare l'incertezza dei prezzi futuri, legata alla stocasticità dei tassi.

## Nei corsi
- **Ricerca operativa** (triennale): unico esempio della parte "modelli per applicazioni in ambito finanziario". Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 55-57).

## Prerequisiti
- [[Programmazione lineare]]: entrambe le versioni sono LP

## Collegati
- [[Flusso a costo minimo]]: equilibrio dei flussi in ogni nodo temporale
- [[Pianificazione della produzione multiperiodo]]: stessa struttura di bilancio fra periodi
- [[Opportunità di arbitraggio]]: altro modello finanziario del corso
