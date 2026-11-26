---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [pseudo-codice, pseudocode]
tags: [competenza, area/informatica]
---

# Pseudocodice

> Descrizione di un algoritmo a metà tra linguaggio naturale e linguaggio di programmazione, che si traduce quasi direttamente in Python.

## Definizione / enunciato
Lo pseudocodice è una via di mezzo tra il linguaggio naturale e un linguaggio di programmazione: elenca i passi con costrutti come "poni", "finché", "se ... altrimenti", senza la sintassi rigida del codice.

Confronto delle slide (P1 p. 39):
- **pseudocodice**: pro, immediato; contro, descrizione poco astratta e interpretazione più complessa;
- **flow chart**: più intuitivo e astratto, ma richiede di imparare i blocchi e rende difficili le operazioni complesse.

## Formule chiave
```
Poni il valore dell'anno a 0
Poni il valore del saldo a 10000
Finché il saldo è minore di 20000
    Aggiungi 1 al valore dell'anno
    Moltiplica il saldo per 1.05
Restituisci il valore dell'anno
```
(dal problema del conto corrente, P1 p. 44)

## Intuizione
Si divide il problema in sotto-problemi più semplici e si descrive ciascuno in pseudocodice; scrivere il programma diventa allora "quasi immediato".

## Come si usa
Esempio dell'auto (P1 p. 41): per ciascuna auto, carburante annuo = km annui / efficienza; costo annuo = prezzo al litro × carburante annuo; costo operativo = durata × costo annuo; costo totale = prezzo d'acquisto + costo operativo. Se costo totale 1 < costo totale 2 scegli l'auto 1, altrimenti l'auto 2.

## Nei corsi
- **Informatica** (triennale): unità P1. Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 39-44); pseudocodice usato anche in P4 (cicli annidati, p. 73-74, 85) e P5 (raffinamenti successivi).

## Prerequisiti
- [[Algoritmo]]: formalizza i passi dell'algoritmo

## Porta a
- [[Raffinamenti successivi]]: i sotto-problemi si descrivono prima in pseudocodice

## Collegati
- [[Diagramma di flusso]]: due formalismi alternativi per la soluzione formale
