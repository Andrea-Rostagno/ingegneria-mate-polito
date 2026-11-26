---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [main, punto di ingresso, __name__, dunder name, modalità standalone]
tags: [competenza, area/informatica]
---

# Funzione main

> Convenzione di mettere tutte le istruzioni del programma in funzioni, con main come punto di partenza invocato in fondo al file.

## Definizione / enunciato
È buona norma che tutte le istruzioni stiano dentro funzioni e che una di esse sia il **punto di partenza** dell'esecuzione; per convenzione si chiama `main` (nome usato in altri linguaggi diffusi). Serve poi un'istruzione che la invochi.

L'invocazione di `main` dovrebbe avvenire solo se il programma è eseguito in modalità **standalone**, non quando il file è importato come modulo. Si controlla la variabile speciale `__name__`, che contiene il nome del modulo oppure `'__main__'` se il file è eseguito direttamente. I nomi che iniziano e finiscono con doppio underscore si chiamano "dunder" (`__name__` si legge dunder-name).

## Formule chiave
```python
def main() :
    result = cubeVolume(2)
    print("A cube with side length 2 has volume", result)

def cubeVolume(sideLength) :
    return sideLength ** 3

if __name__ == '__main__' :
    main()
```

## Intuizione
Con `main` la chiamata avviene dopo tutte le definizioni, quindi l'ordine in cui sono scritte le funzioni non conta più.

## Come si usa
Esempio `cubes.py` (P5 p. 56). In P8 il modulo driver `salesreport.py` contiene `main`, mentre `tabulardata.py` contiene solo funzioni importabili.

## Nei corsi
- **Informatica** (triennale): unità P5 sezione 5.2 (la funzione main). Fonti: `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 53-60).

## Prerequisiti
- [[Definizione di funzione]]: main è una funzione come le altre

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Moduli e import]]: __name__ distingue esecuzione diretta e import
