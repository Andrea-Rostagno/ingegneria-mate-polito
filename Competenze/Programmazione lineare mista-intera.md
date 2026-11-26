---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["mixed-integer linear programming", "MILP", "programmazione lineare intera", "ILP", "integer linear programming", "programmazione binaria", "BIP", "binary integer programming", "variabili binarie"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione lineare mista-intera

> Modelli lineari in cui alcune variabili sono intere o binarie; la regione ammissibile non è convessa e il problema è molto più difficile di un LP.

## Definizione / enunciato
$$\min\ \mathbf c^T\mathbf x+\mathbf d^T\mathbf y\quad\text{s.t. }A\mathbf x+E\mathbf y\le\mathbf b,\ \ \mathbf x\in\mathbb R^{n_1}_+,\ \mathbf y\in\mathbb Z^{n_2}_+ .$$
Casi speciali: **ILP** (intera pura), **BIP** (binaria pura, $x_j\in\{0,1\}$). Le variabili intere servono per quantità discrete o lotti; molto più spesso si usano variabili binarie per rappresentare decisioni logiche.

## Formule chiave
Esempio di ILP "patologico":
$$\max x_1+x_2\ \ \text{s.t. }10x_1-8x_2\le13,\ 2x_1-2x_2\ge1,\ x_1,x_2\in\mathbb Z_+ .$$
Il rilassamento continuo dà $x^*=(4.5,4)$ con valore $8.5$; l'ottimo intero è $(2,1)$ con valore 3, e gli unici punti interi ammissibili sono $(1,0)$ e $(2,1)$.

## Intuizione
L'idea "risolvo l'LP e arrotondo" non garantisce l'ottimalità e può non dare nemmeno una soluzione ammissibile: nell'esempio arrotondare $(4.5,4)$ fa uscire dalla regione, stretta e allungata. Non esistono condizioni che certifichino l'ottimalità: servono metodi enumerativi.

## Come si usa
Nel mix ottimo di produzione l'interezza abbassa l'ottimo da 538.46 a 505. Le tecniche di modellazione con variabili binarie (zaino, set covering, vincoli logici, grande M, funzioni lineari a tratti) portano a MILP risolti dai solver commerciali con branch and bound / branch and cut basati sul rilassamento continuo.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 14, 30); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 3); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 2-3).

## Prerequisiti
- [[Programmazione lineare]]: stesso modello con vincoli di interezza

## Porta a
- [[Rilassamento continuo]]: bound ottimistico sull'ottimo intero
- [[Algoritmo branch and bound]]: metodo di enumerazione implicita
- [[Problema dello zaino]]: prototipo binario puro
- [[Vincoli logici con variabili binarie]]: uso tipico delle binarie

## Collegati
- [[Problema di ottimizzazione convessa]]: l'interezza rende la regione non convessa
- [[Mix ottimo di produzione]]: ottimo intero 505 contro 538.46
