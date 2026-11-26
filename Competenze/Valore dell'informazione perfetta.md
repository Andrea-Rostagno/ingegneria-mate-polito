---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["EVPI", "expected value of perfect information", "valore atteso dell'informazione perfetta", "wait-and-see", "WS", "soluzione wait-and-see", "recourse problem", "RP"]
tags: [competenza, area/ottimizzazione]
---

# Valore dell'informazione perfetta

> Quanto si guadagnerebbe conoscendo in anticipo la realizzazione dell'incertezza: differenza fra il valore della soluzione stocastica (RP) e la media dei valori ottimi scenario per scenario (WS).

## Definizione / enunciato
Per $\min_{\mathbf x\in X}\mathbb E_\xi[z(\mathbf x,\xi)]=\min_{\mathbf x\in X}f_1(\mathbf x)+\mathbb E_\xi[f_2(\mathbf x,\xi)]$, con $f_2(\mathbf x,\xi)=\min_{\mathbf y\in Y(\mathbf x,\xi)}f_2(\mathbf y\mid\mathbf x,\xi)$:
- **RP** (recourse problem) $=\mathbb E_\xi[z(\mathbf x^*,\xi)]$, valore ottimo del problema stocastico;
- **WS** (wait-and-see) $=\mathbb E_\xi[z(\bar{\mathbf x}(\xi),\xi)]$, dove $\bar{\mathbf x}(\xi)$ è ottimo per il singolo $\xi$.

## Formule chiave
$$\mathrm{EVPI}=\mathrm{RP}-\mathrm{WS}\ \ (\text{minimo}),\qquad \mathrm{EVPI}=\mathrm{WS}-\mathrm{RP}\ \ (\text{massimo}),$$
e per un problema di minimo $\mathrm{WS}\le\mathrm{RP}\le\mathrm{EEV}$.

## Intuizione
Il wait-and-see rimuove i vincoli di non anticipatività: decide dopo aver visto $\xi$. L'EVPI è quindi il massimo che converrebbe pagare per una previsione perfetta (ad esempio informazioni di mercato o previsioni meteo), e misura quanto pesa l'incertezza nel problema.

## Come si usa
- **Farmer problem** (massimo): $\mathrm{WS}=\frac13(118\,600+167\,667+59\,950)=115\,406$ €, $\mathrm{RP}=108\,390$ €, quindi $\mathrm{EVPI}=7\,016$ € (sottrazione fatta sui numeri delle lezioni).
- **TSP con domanda aleatoria** (minimo; cliente C con domanda 1 o 7, capacità 10): $\mathrm{WS}=\frac12\cdot10+\frac12\cdot14=12$, $\mathrm{RP}=\frac12\cdot11+\frac12\cdot14=12.5$, quindi $\mathrm{EVPI}=0.5$ (calcolo dai dati delle lezioni).

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Indicatori" della Parte II, con esempi farmer, TSP e newsvendor. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 12, 18-20, 36-37).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: definisce RP
- [[Vincoli di non anticipatività]]: WS è il problema senza di essi

## Porta a
- [[Valore della soluzione stocastica]]: indicatore complementare

## Collegati
- [[Problema del commesso viaggiatore]]: esempio con domanda aleatoria
