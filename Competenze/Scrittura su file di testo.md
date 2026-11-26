---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [write, writelines, print file=, file di output]
tags: [competenza, area/informatica]
---

# Scrittura su file di testo

> Scrivere testo su un file aperto in scrittura con write(), writelines() o print(..., file=f), gestendo esplicitamente gli a capo.

## Definizione / enunciato
- `outfile.write(stringa)`: scrive la stringa; a differenza di `print` **non aggiunge** il fine-riga, che va scritto esplicitamente con `'\n'`.
- `outfile.writelines(righe)`: scrive una lista di stringhe, ciascuna già terminata da `'\n'` (il terminatore non viene aggiunto).
- `print(..., file=outfile)`: come `print` (con separatori e a capo), ma sul file.

Comodo usare `write` con stringhe formattate per allineare i valori.

## Formule chiave
```python
outfile.write("Hello, World!\n")
outfile.write("Number of entries: %d\nTotal: %8.2f\n" % (count, total))
outfile.write(f"Number of entries: {count}\nTotal: {total:8.2f}\n")
print("Il risultato è:", val, file=outfile)
```

## Intuizione
Il file è una sequenza di caratteri: le righe esistono solo perché ci sono i caratteri `'\n'`, che `print` aggiunge da solo e `write` no.

## Come si usa
Esempio P7 (densità di popolazione): leggere `worldpop.txt` e `worldarea.txt` riga per riga in parallelo e scrivere `world_pop_density.txt` con i nomi allineati a sinistra e i numeri a destra. Ricordarsi di chiudere il file (o usare `with`), altrimenti l'output può andare perso.

## Nei corsi
- **Informatica** (triennale): unità P7 sezione 7.1. Fonti: `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 19-23, 59-69), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3).

## Prerequisiti
- [[Apertura e chiusura di file]]: si scrive su un file aperto in scrittura
- [[Output formattato]]: le righe scritte si formattano come le stampe

## Porta a
- Nessun seguito diretto nel corso.
