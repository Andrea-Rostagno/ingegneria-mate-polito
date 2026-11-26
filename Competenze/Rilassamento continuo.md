---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["continuous relaxation", "rilassamento LP", "LP relaxation", "totale unimodularità", "total unimodularity", "matrice totalmente unimodulare", "forza della formulazione", "formulazione forte"]
tags: [competenza, area/ottimizzazione]
---

# Rilassamento continuo

> Il problema ottenuto togliendo i vincoli di interezza a un MILP: è un LP il cui ottimo è un bound ottimistico sull'ottimo intero, tanto più utile quanto più la sua regione è vicina alla ricopertura convessa dei punti interi.

## Definizione / enunciato
Dato $P(S)$: $\min\mathbf c^T\mathbf x+\mathbf d^T\mathbf y$ s.t. $A\mathbf x+E\mathbf y\le\mathbf b$, $\mathbf x\in\mathbb R^{n_1}_+$, $\mathbf y\in\mathbb Z^{n_2}_+$, il rilassamento continuo $P(\bar S)$ richiede solo $(\mathbf x,\mathbf y)\in\mathbb R^{n_1+n_2}_+$, con $S\subseteq\bar S$. Il suo ottimo è un **lower bound** per un problema di minimo (**upper bound** per uno di massimo).

## Formule chiave
Caso ideale: $\mathrm{conv}(S)=\bar S$; allora il MILP si risolve con il simplesso. Succede quando la matrice dei vincoli è **totalmente unimodulare** (trasporto con dati interi, assegnamento, certi problemi di flusso).

## Intuizione
L'efficienza del branch and bound dipende criticamente dalla qualità dei bound: bound deboli non potano l'albero. Più $\bar S$ è "largo" rispetto a $\mathrm{conv}(S)$, più il bound è debole. Esempio: con $x\le M\delta$ e $\delta\in[0,1]$ il rilassato è il triangolo sotto la retta di pendenza $M$; una $M$ grande lo allarga.

## Come si usa
Ottenere $\mathrm{conv}(S)$ esplicitamente è in genere troppo costoso; l'obiettivo realistico è restringere $\bar S$ con **tagli** (disuguaglianze valide) o con **riformulazioni** (per esempio la riformulazione plant location del CLSP). Esempi di bound: zaino $36.2$ contro ottimo 34; nell'ILP $\max x_1+x_2$ il rilassato vale $8.5$ e l'ottimo 3 (bound molto debole), e arrotondare il rilassato non dà nemmeno una soluzione ammissibile.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 2-3, 5, 13-14, 17); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 20).

## Prerequisiti
- [[Programmazione lineare mista-intera]]: problema da rilassare
- [[Programmazione lineare]]: il rilassato è un LP
- [[Insieme convesso]]: ricopertura convessa dei punti interi

## Porta a
- [[Algoritmo branch and bound]]: bound nei nodi
- [[Disuguaglianze di cover]]: tagli che rafforzano il rilassamento

## Collegati
- [[Vincoli con grande M]]: una grande M indebolisce il rilassamento
- [[Lot-sizing]]: riformulazione che rafforza il bound
- [[Problema del trasporto]]: totale unimodularità e soluzioni intere
- [[Poliedro]]: vertici interi o frazionari del rilassato
