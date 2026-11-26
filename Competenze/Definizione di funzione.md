---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [def, chiamata di funzione, invocare una funzione, scatola nera, black box]
tags: [competenza, area/informatica]
---

# Definizione di funzione

> Sequenza di istruzioni con un nome, definita con def e invocata passando argomenti, che può restituire un valore: una scatola nera riusabile.

## Definizione / enunciato
Una **funzione** è una sequenza di istruzioni a cui viene dato un nome. Si **invoca** scrivendo il nome e gli **argomenti** tra parentesi (`round(6.8275, 2)` restituisce 6.83); quando termina, il **valore restituito** torna al punto della chiamata e può essere usato in un'espressione.

**Definizione**: l'intestazione `def nome(parametri):` apre un blocco con il **corpo** della funzione; il valore si restituisce con `return`. Definire una funzione non la esegue: serve una chiamata. Una funzione va definita **prima** di essere invocata (altrimenti `NameError`), ma può essere chiamata dal corpo di un'altra funzione definita prima di lei, purché la chiamata avvenga dopo entrambe le definizioni.

Le funzioni si progettano come **scatole nere**: a chi le usa basta conoscerne la specifica (argomenti e risultato), non l'implementazione.

## Formule chiave
```python
def cubeVolume(sideLength) :
    volume = sideLength ** 3
    return volume

result1 = cubeVolume(2)    # 8
result2 = cubeVolume(10)   # 1000
```

## Intuizione
Nella chiamata: 1) il valore dell'argomento inizializza la variabile parametro (come `sideLength = 2`); 2) si esegue il corpo; 3) il risultato torna al chiamante. Come un termostato: si imposta la temperatura senza sapere come funziona dentro.

## Come si usa
Passi per implementare una funzione (P5 p. 45-47): descrivere cosa fa, elencare gli input, determinare i tipi di parametri e risultato, scrivere lo pseudocodice, implementare il corpo, collaudarla isolatamente (unit test). Esempio `pyramidVolume(height, baseLength)`: `baseArea = baseLength * baseLength; return height * baseArea / 3`. Commentare le funzioni (scopo, parametri, valore restituito).

## Nei corsi
- **Informatica** (triennale): unità P2 (invocare funzioni) e P5 sezioni 5.1-5.2. Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 36-37), `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 3-24, 45-48, 59-60).

## Prerequisiti
- [[Variabile]]: parametri e risultato sono variabili
- [[Algoritmo]]: incapsula un sotto-algoritmo con un nome

## Porta a
- [[Moduli e import]]: un modulo raccoglie funzioni correlate
- [[Passaggio di parametri]]: gli argomenti inizializzano i parametri
- [[Istruzione return]]: restituisce il risultato della funzione
- [[Funzione main]]: main è una funzione come le altre
- [[Ambito di visibilità delle variabili]]: le funzioni delimitano l'ambito locale
- [[Raffinamenti successivi]]: ogni sotto-problema diventa una funzione
