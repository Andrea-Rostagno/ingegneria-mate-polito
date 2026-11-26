---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [tracciare a mano, esecuzione a mano, tracing, tabella delle variabili]
tags: [competenza, area/informatica]
---

# Hand-tracing

> Simulare a mano l'esecuzione di un programma su carta, tenendo una tabella dei valori delle variabili riga per riga.

## Definizione / enunciato
L'hand-tracing verifica se un programma funziona tracciando su un foglio l'evoluzione delle variabili:
1. si crea una tabella con una colonna per ogni variabile importante e i valori iniziali;
2. si segue il codice (o lo pseudocodice) istruzione per istruzione, aggiornando i valori in una nuova riga e cancellando i precedenti;
3. si usano dati di input che diano un risultato noto e che **testino tutti i rami**.

## Intuizione
È il modo per "pensare come il computer": la macchina non fa altro che aggiornare valori in memoria seguendo le istruzioni. Nei cicli fa vedere quando la condizione diventa falsa, e quindi gli errori off-by-one.

## Come si usa
Esempio P4 (p. 23-29): somma delle cifre di 1729 con colonne `n`, `total`, `digit`. A ogni iterazione `digit = n % 10`, `total = total + digit`, `n = n // 10`: n passa da 1729 a 172, 17, 1, 0; quando `n > 0` è falso si esce e si stampa la somma (1+7+2+9). Esempio P3: tracciare `taxes.py` con stato civile e reddito, seguendo quale ramo dell'if viene preso. In P4 (p. 82) il tracing dei cicli annidati mostra che `j` va da 0 a `i`.

## Nei corsi
- **Informatica** (triennale): unità P3 (hand-tracing dell'esempio delle tasse), P4 sezione 4.2 (hand-tracing di cicli), P5 (tracciare funzioni, p. 89). Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 70-73), `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 22-30).

## Prerequisiti
- [[Variabile]]: segue l'evoluzione dei valori delle variabili

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Casi di test]]: si traccia con input dal risultato noto
- [[Ciclo while]]: si traccia iterazione per iterazione
