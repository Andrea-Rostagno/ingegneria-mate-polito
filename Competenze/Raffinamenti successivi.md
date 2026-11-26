---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [stepwise refinement, scomposizione del problema, top-down, stub, miglioramenti successivi]
tags: [competenza, area/informatica]
---

# Raffinamenti successivi

> Strategia di progetto che scompone un problema complesso in sotto-problemi sempre più semplici, ciascuno affidato a una funzione.

## Definizione / enunciato
Per risolvere un problema complesso lo si scompone in problemi più semplici, e si continua a scomporre finché si ottengono problemi che si sanno risolvere. Ogni sotto-problema diventa una funzione con nome, parametri e valore restituito descritti prima di scriverla; una funzione può richiedere altre funzioni più semplici.

Consigli (P5 p. 89): funzioni brevi (se occupano più di uno schermo, spezzarle); tracciarne l'esecuzione; nei programmi ampi usare **stub**, funzioni provvisorie che restituiscono un valore calcolato in modo banale (anche sbagliato), per collaudare il prima possibile il contesto in cui vengono chiamate.

## Intuizione
È la stessa idea del passaggio da soluzione informale a soluzione formale vista per gli algoritmi, applicata alla struttura del codice: ogni livello parla solo con quello sotto.

## Come si usa
Esempio delle slide: scrivere in inglese un intero tra 0 e 999 (per un assegno). Si scompone in `intName(numero)` che usa `digitName(cifra)` ("", "one", "two", ...), `teenName(numero)` ("ten", "eleven", ...) e `tensName(numero)` ("twenty", "thirty", ...), gestendo centinaia, decine (caso speciale 10-19) e unità (`intname.py`). Esempio del caffè: istantaneo o in infusione, a sua volta scomposti in passi eseguibili. In P6 lo stesso metodo pianifica `readFloats`, `removeMinimum` e `countInputs`.

## Nei corsi
- **Informatica** (triennale): unità P5 sezione 5.7; applicato in P6 sezioni 6.5 e in P7 (sei passi per elaborare file). Fonti: `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 73-89, 92).

## Prerequisiti
- [[Definizione di funzione]]: ogni sotto-problema diventa una funzione
- [[Pseudocodice]]: i sotto-problemi si descrivono prima in pseudocodice

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Casi di test]]: gli stub e i test unitari collaudano i pezzi
- [[Elaborazione di file di record]]: l'ultimo dei sei passi è dividere in funzioni
