---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [open, close, modalità di apertura, encoding utf-8, istruzione with, oggetto file]
tags: [competenza, area/informatica]
---

# Apertura e chiusura di file

> Aprire un file di testo con open() in lettura o scrittura (con la codifica corretta) e chiuderlo con close() o con il costrutto with.

## Definizione / enunciato
`infile = open("input.txt", "r")` apre un file e restituisce un **oggetto file**, da salvare in una variabile: tutte le operazioni successive passano da lì.
- `"r"` lettura (default): il file deve esistere ed essere accessibile, altrimenti eccezione (`FileNotFoundError`);
- `"w"` scrittura: crea il file se non esiste, lo **svuota** se esiste;
- altre modalità (P7 p. 11): `"x"` creazione esclusiva (fallisce se esiste), `"a"` aggiunta in coda, `"t"` testo (default), `"b"` binario, `"+"` lettura e scrittura.

**Codifica**: per file con lettere accentate si specifica sempre `encoding='utf-8'`, perché per default `open` usa la codifica del sistema operativo (es. cp1252).

**Chiusura**: `infile.close()`; se il programma termina senza chiudere un file in scrittura, l'output potrebbe non essere salvato. Il costrutto `with open(...) as f:` chiude il file automaticamente alla fine del blocco o se si verifica un'eccezione.

## Formule chiave
```python
infile = open('file.txt', 'r', encoding='utf-8')
outfile = open("output.txt", "w")
...
infile.close(); outfile.close()

with open(filename, "w") as outfile :
    outfile.write("...")      # tutta l'elaborazione dentro il blocco
```

## Intuizione
Aprire un file collega il programma a una risorsa del sistema operativo; chiuderlo la rilascia e svuota i buffer. Il `with` garantisce la chiusura anche nei percorsi d'errore.

## Come si usa
Errore frequente (P7 p. 24): nei percorsi scritti nel codice il backslash va raddoppiato, `"c:\\homework\\input.txt"`, perché `\` è il carattere di escape; non serve se il nome è letto con `input()`. Tipologie di file (P7 p. 3): binari o di testo; i testi possono essere liberi o strutturati (per righe, per parole, a record, CSV).

## Nei corsi
- **Informatica** (triennale): unità P7 sezione 7.1. Fonti: `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 3-12, 24, 53), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3).

## Prerequisiti
- [[Codifica dei caratteri]]: il file va aperto con la codifica giusta

## Porta a
- [[Lettura di file di testo]]: si legge da un file aperto in lettura
- [[Scrittura su file di testo]]: si scrive su un file aperto in scrittura

## Collegati
- [[Gestione delle eccezioni]]: finally e with garantiscono la chiusura del file
