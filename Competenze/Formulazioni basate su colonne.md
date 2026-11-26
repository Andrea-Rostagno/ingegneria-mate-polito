---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["column-based formulation", "formulazione basata su colonne", "staffing", "problema di staffing", "pattern di turno"]
tags: [competenza, area/ottimizzazione]
---

# Formulazioni basate su colonne

> Modellazione in cui ogni variabile corrisponde a un "pattern" ammissibile (una colonna di una matrice binaria) e il modello sceglie quante volte usare ciascun pattern.

## Definizione / enunciato
Problema di staffing (casse di un ipermercato): giornata di 8 ore $t=1,\dots,8$ con fabbisogno $R_t$; ogni turno dura 4 ore consecutive con pattern (lavoro, pausa, lavoro, lavoro) o (lavoro, lavoro, pausa, lavoro) e può iniziare in $t=1,\dots,5$. Si ottengono 10 colonne $\mathbf a_j\in\{0,1\}^8$ raccolte in $A\in\{0,1\}^{8\times10}$, con $a_{tj}=1$ se chi segue il pattern $j$ lavora nell'ora $t$. Variabili $x_j\in\mathbb Z_+$: numero di lavoratori con il pattern $j$.

## Formule chiave
Con pattern di costo uguale si minimizza il numero di assunti:
$$\min\sum_{j=1}^{10}x_j\quad\text{s.t.}\ \sum_{j=1}^{10}a_{tj}x_j\ge R_t,\ t=1,\dots,8;\qquad x_j\in\mathbb Z_+ .$$

## Intuizione
I vincoli complicati (durata del turno, posizione della pausa) non compaiono come disequazioni: sono già "incorporati" nelle colonne. Il modello è un covering intero generale.

## Come si usa
Si elencano tutti i pattern ammissibili (qui 10, due per ogni ora di inizio), si costruisce $A$ e si risolve il MILP. Se le colonne sono troppe per essere elencate si generano dinamicamente (column generation).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 7-8).

## Prerequisiti
- [[Set covering, partitioning e packing]]: stessa struttura $A\mathbf x\ge$ fabbisogno
- [[Programmazione lineare mista-intera]]: variabili intere

## Porta a
- [[Vehicle routing problem]]: le route possono essere colonne generate dinamicamente

## Collegati
- [[Pianificazione della produzione multiperiodo]]: fabbisogni variabili nel tempo
