---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [input validation, controllo dell'input, sys.exit]
tags: [competenza, area/informatica]
---

# Validazione dell'input

> Controllare che i valori forniti dall'utente siano accettabili prima di usarli, chiedendoli di nuovo o terminando il programma.

## Definizione / enunciato
Regola generale (P3 p. 112): **non fidarsi mai dell'input dell'utente**. Prima di proseguire si controlla che i valori siano accettabili; se non lo sono si stampa un messaggio e:
- si richiede il valore (con un ciclo), oppure
- si esce dal programma: `from sys import exit` e `exit("Valore non accettabile")`.

Per l'input non numerico (lettere al posto di cifre) la conversione solleva `ValueError`, che si gestisce con le eccezioni (P7).

## Formule chiave
```python
if floor == 13 :
    print("Error: There is no thirteenth floor.")
if floor <= 0 or floor > 20 :
    print("Error: The floor must be between 1 and 20.")

valid = False
while not valid :
    value = int(input("Please enter a positive value < 100: "))
    if value > 0 and value < 100 :
        valid = True
    else :
        print("Invalid input.")
```

## Intuizione
"È impossibile rendere un programma a prova di stupido perché gli stupidi sono molto ingegnosi" (variante della legge di Murphy citata in P3). La validazione è range checking: condizione "fuori intervallo" scritta con `or`.

## Come si usa
Esempio P3: simulatore d'ascensore con pulsanti da 1 a 20 senza il 13, da testare con 12, 14, 13, −1, 0, 23, 19. In P5 (`readIntUpTo(high)`) la validazione diventa una funzione parametrizzata riusabile per ore (0-23) e minuti (0-59).

## Nei corsi
- **Informatica** (triennale): unità P3 sezione 3.9, P4 sezione 4.5 (input fino a un valore valido), P5 sezione 5.6 (funzione parametrizzata). Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 107-112), `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 45), `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 62-64).

## Prerequisiti
- [[Istruzione if]]: controlla le condizioni di validità
- [[Conversione di tipo]]: l'input va convertito e può fallire

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Equivalenza logica]]: la condizione fuori intervallo è la negazione di De Morgan di quella dentro
- [[Gestione delle eccezioni]]: un input non numerico si intercetta come ValueError
