---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [variable, assegnazione, istruzione di assegnazione, costante, tipo di dato, int, float, NameError]
tags: [competenza, area/informatica]
---

# Variabile

> Zona di memoria dotata di nome che fa riferimento a un valore; in Python il tipo è associato al valore, non alla variabile.

## Definizione / enunciato
Una **variabile** è una zona di memoria con un nome che fa riferimento a un valore. Si definisce assegnandole un valore iniziale: `lattine = 4`. L'**istruzione di assegnazione** `=` calcola il valore a destra e lo memorizza nella variabile a sinistra, sostituendo il precedente: non è un confronto (l'uguaglianza si testa con `==`).

**Tipi** visti: intero (`int`, es. 7), virgola mobile (`float`, es. 8.88), stringa (`str`, es. "Bob"). Il tipo è associato al **valore**: la stessa variabile può ricevere valori di tipo diverso, ma usare un valore del tipo non previsto genera errore (`TypeError: can only concatenate str (not "int") to str`). Una variabile va definita prima dell'uso, altrimenti `NameError`.

**Nomi**: iniziano con lettera o `_`, poi lettere, cifre o `_`; niente spazi né simboli; niente parole riservate; maiuscole e minuscole sono diverse; convenzione camelCase. Le **costanti** sono variabili da non modificare, scritte in MAIUSCOLO (`BOTTLE_VOLUME = 2.0`).

## Formule chiave
```python
cansPerPack = 6
cansPerPack = cansPerPack + 2   # 1) calcola la destra 2) salva a sinistra
taxRate = 5        # int
taxRate = 5.5      # float
taxRate = "Non-taxable"  # str
```

## Intuizione
Il nome è un'etichetta su un valore in memoria: assegnare di nuovo sposta l'etichetta. Le costanti con nome rendono leggibili le formule (`bottles * BOTTLE_VOLUME` invece di `bottles * 2`).

## Come si usa
Trappola d'esame (P2 p. 18): con `taxRate = 5` e poi `taxrate = 5.5` il programma stampa ancora 5, perché `taxrate` è una variabile diversa (Python distingue le maiuscole). Visualizzare nomi e valori su pythontutor.com aiuta a seguire le assegnazioni.

## Nei corsi
- **Informatica** (triennale): unità P2 sezione 2.1. Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 4-27).

## Prerequisiti
- [[Componenti di un elaboratore]]: nome simbolico di una cella di memoria

## Porta a
- [[Operatori aritmetici]]: le espressioni combinano variabili e valori
- [[Conversione di tipo]]: cambia il tipo del valore
- [[Stringa in Python]]: valore di tipo str
- [[Operatori relazionali]]: confronta valori di variabili
- [[Hand-tracing]]: segue l'evoluzione dei valori delle variabili
- [[Definizione di funzione]]: parametri e risultato sono variabili
- [[Ambito di visibilità delle variabili]]: regola dove un nome è visibile
- [[Lista in Python]]: contenitore di più valori
