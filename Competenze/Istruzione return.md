---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [return, valore restituito, return value, None, funzione senza valore, return multipli]
tags: [competenza, area/informatica]
---

# Istruzione return

> L'istruzione che termina una funzione e passa il risultato al chiamante; senza valore la funzione restituisce None.

## Definizione / enunciato
`return valore` fa due cose: **termina immediatamente** la funzione e **passa il valore** al chiamante. Il valore può essere un letterale, una variabile o un'espressione.
- Si restituisce **un solo valore**; per più valori si restituisce una **tupla**: `return (x, y)`.
- Una funzione può avere più `return` (uno per ramo), ma **tutti i rami** devono restituire un valore: se un ramo ne è privo Python restituisce il valore speciale `None`, che può causare errori a run-time.
- Alternativa ai return multipli: salvare il risultato in una variabile e restituirla nell'ultima istruzione.
- Funzioni **senza valore**: nessun `return`, o `return` senza valore (termina subito), es. `boxString` che stampa una stringa incorniciata.

## Formule chiave
```python
def cubeVolume(sideLength) :
    if sideLength >= 0 :
        return sideLength ** 3
    else :
        return 0          # senza questo ramo restituirebbe None
```

## Intuizione
Il return è l'unica "uscita" di una scatola nera: i dati entrano dai parametri ed escono dal valore restituito, invece che da variabili globali.

## Come si usa
Errore classico: dimenticare un ramo (`if sideLength >= 0: return ...` senza else). Con le tuple: `(month, day, year) = readDate()` estrae i tre valori restituiti (P6 p. 90).

## Nei corsi
- **Informatica** (triennale): unità P5 sezioni 5.4-5.5. Fonti: `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 38-52).

## Prerequisiti
- [[Definizione di funzione]]: restituisce il risultato della funzione

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Tupla in Python]]: una tupla restituisce più valori
