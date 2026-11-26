---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["(s,S) policy", "politica (s, S)", "(s, S) periodic review policy", "politica a revisione periodica", "base stock policy", "politica base stock", "regola di decisione parametrica", "parameterized decision rule", "simulation-based optimization", "ottimizzazione basata su simulazione"]
tags: [competenza, area/ottimizzazione]
---

# Politica (s,S)

> Regola di riordino a revisione periodica con due parametri: se la scorta scende sotto $s$ si ordina fino a $S$. I parametri si ottimizzano simulando il sistema e usando un ottimizzatore black-box.

## Definizione / enunciato
In ADP e reinforcement learning si usano spesso **politiche** $x_t=\pi(s_t)$ che mappano stati in decisioni. Esempi per un singolo articolo (SKU):
- **base stock**: si ordina $x_t=B-s_t$, con $s_t$ la scorta disponibile (non necessariamente fisica);
- **(s, S) a revisione periodica**: a fine periodo, se la scorta finale è $\le s$ si ordina $S-$scorta finale, altrimenti nulla.

I parametri ottimi si trovano con **ottimizzazione basata su simulazione**: l'obiettivo è la media, su scenari di domanda, del costo totale simulato.

## Formule chiave
Nel simulatore delle slide, per ogni replica: scorta all'inizio periodo = scorta finale + ordine in arrivo; se la domanda la supera c'è stockout con vendite perse; costo totale
$$h\sum_t\bar I_t+b\sum_t(\text{vendite perse})_t+c\sum_t(\text{ordinato})_t+K\cdot\#\{t:\text{ordine}>0\},$$
con $\bar I_t$ media fra scorta iniziale e finale del periodo, $h$ costo di giacenza, $b$ penalità per vendita persa, $c$ costo unitario, $K$ costo fisso d'ordine.

## Intuizione
La regola parametrica riduce un problema dinamico a un'ottimizzazione in due variabili $(s,\,S-s)$, ma l'obiettivo è rumoroso e si valuta solo per simulazione. I metodi di ricerca a popolazione (algoritmi genetici, PSO) funzionano ma non sfruttano le "credenze correlate" quando la simulazione è costosa; per questo si usano pattern search o ottimizzazione surrogata.

## Come si usa
Codice MATLAB delle slide: costo unitario 10, giacenza $0.1\cdot10$, penalità $2\cdot10$, costo fisso 1000, domanda binomiale negativa ($R=20$, $P=0.3$), 30000 periodi in-sample; si ottimizza con `patternsearch` e `surrogateopt`. Verifica: con domanda costante $D=5$ e costo fisso 10000 il codice confronta il risultato con il lotto EOQ $\sqrt{2DK/h}$. Le domande di modellazione: quali sono le variabili di stato, i fattori di rischio esogeni, il clock della simulazione, e la differenza tra validazione e verifica; lo scenario out-of-sample serve a controllare la robustezza.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): esempio di ottimizzazione di regole decisionali parametriche. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 17-23); codice `magistrale/Ottimizzazione in condizione di incertezza/codici/SS_Simulation.m`, `SS_Optimization.m`, `Test_EOQ.m`.

## Prerequisiti
- [[Equazione di transizione di stato]]: la scorta evolve con ordini e domanda aleatoria
- [[Metodo Monte Carlo]]: il costo atteso è stimato su scenari simulati

## Porta a
- [[Pattern search]]: ottimizzatore derivative-free usato sui parametri
- [[Ottimizzazione surrogata]]: alternativa quando la simulazione è costosa

## Collegati
- [[Modello EOQ]]: caso deterministico usato per verificare il simulatore
- [[Problema del newsvendor]]: caso statico con un solo ordine
- [[Algoritmi genetici]]: ricerca stocastica a popolazione citata come alternativa
- [[Processo decisionale di Markov]]: le politiche $\pi(s)$ come mappa stato-azione
