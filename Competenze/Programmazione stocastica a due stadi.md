---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["two-stage stochastic programming", "programmazione stocastica con ricorso", "stochastic programming with recourse", "programmazione lineare stocastica a due stadi", "two-stage stochastic linear program", "here-and-now", "wait-and-see decisions", "funzione di ricorso", "recourse function", "expected value function", "cost-to-go function", "matrice di ricorso", "recourse matrix", "technology matrix", "deterministico equivalente", "deterministic equivalent", "farmer problem", "problema dell'agricoltore", "stadi e periodi", "vincoli soft"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione stocastica a due stadi

> Si decide ora $\mathbf x$ (here-and-now), si osserva l'incertezza $\xi$, poi si corregge con un ricorso $\mathbf y(\xi)$ (wait-and-see); si minimizza il costo di primo stadio più il costo atteso del ricorso.

## Definizione / enunciato
$$\min_{\mathbf x}\ \mathbf c^T\mathbf x+\mathbb E\big[Q(\mathbf x,\xi(\omega))\big]\quad\text{s.t. }A\mathbf x=\mathbf b,\ \mathbf x\ge\mathbf 0,$$
$$Q(\mathbf x,\xi(\omega))=\min_{\mathbf y}\{\mathbf q^T(\omega)\mathbf y:\ W(\omega)\mathbf y=\mathbf h(\omega)-T(\omega)\mathbf x,\ \mathbf y\ge\mathbf 0\},$$
con $W$ **matrice di ricorso** e $T$ **matrice tecnologica**. $Q(\cdot,\cdot)$ è la funzione valore, $\mathcal Q(\mathbf x)=\mathbb E[Q(\mathbf x,\xi)]$ la funzione di ricorso (expected cost-to-go). Il **deterministico equivalente** è $\min\mathbf c^T\mathbf x+\mathcal Q(\mathbf x)$, $A\mathbf x=\mathbf b$, $\mathbf x\ge\mathbf 0$; con scenari finiti diventa un unico grande LP con una copia di $\mathbf y$ per scenario.

## Formule chiave
Uno **stadio** è un istante in cui si rivela nuova informazione e si decide: non coincide con il periodo. Pianificazione su 12 mesi con piano $x_t$ fissato a inizio anno e acquisti spot $y^+_{ts}$ o stoccaggio $y^-_{ts}$ dopo aver visto la domanda:
$$\min\sum_{t=1}^{12}cx_t+\sum_s\pi_s\sum_{t=1}^{12}\big(p\,y^+_{ts}+h\,y^-_{ts}\big),\quad x_t+y^+_{ts}-y^-_{ts}=D_{ts}:$$
12 periodi ma 2 stadi. **Vincoli soft**: $\min cx+\mathbb E[p\,s(\omega)]$ con $x+s(\omega)\ge d(\omega)$, $p\gg c$ costo della domanda persa.

## Intuizione
Il primo stadio deve funzionare "in media" su tutti gli scenari: la soluzione stocastica copre gli scenari invece di ottimizzare per uno solo, e non prende decisioni che sarebbero ottime solo con previsione perfetta.

## Come si usa
**Farmer problem** (500 acri, grano, mais, barbabietole con quota 6000 t): con rese medie la soluzione è 120, 80, 300 acri e profitto 118 600 €; con rese +20% 183.33, 66.67, 250 (167 667 €); con −20% 100, 25, 375 (59 950 €). Con tre scenari equiprobabili il modello stocastico (una copia delle variabili di vendita e acquisto per scenario) sceglie 170, 80, 250 acri con profitto atteso 108 390 €: non vende mai barbabietole al prezzo ridotto e dimensiona il mais sul fabbisogno con rese medie.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): Parte I (esempi) e Parte II (teoria) delle lezioni. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 3, 6-13, 21-26).

## Prerequisiti
- [[Programmazione lineare]]: primo e secondo stadio sono LP
- [[Ottimizzazione sotto incertezza]]: formulazione con valore atteso
- [[Problema del newsvendor]]: il caso più semplice a due stadi

## Porta a
- [[Ricorso completo e relativamente completo]]: ammissibilità del secondo stadio
- [[Convessità della funzione di ricorso]]: proprietà di $Q$ e $\mathcal Q$
- [[Sample average approximation]]: valore atteso approssimato con scenari
- [[Valore dell'informazione perfetta]]: confronto con il wait-and-see
- [[Valore della soluzione stocastica]]: confronto con la soluzione del valore medio
- [[Metodo L-shaped]]: soluzione per decomposizione
- [[Programmazione stocastica multistadio]]: estensione a più stadi

## Collegati
- [[Albero degli scenari]]: rappresentazione dell'incertezza discreta
- [[Vincoli probabilistici]]: alternativa al ricorso per l'ammissibilità
