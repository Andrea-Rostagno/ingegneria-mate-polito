---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [test case, collaudo, testing, condizioni limite]
tags: [competenza, area/informatica]
---

# Casi di test

> Insiemi di input scelti per verificare che il programma produca l'output corretto, coprendo tutti i rami e le condizioni limite.

## Definizione / enunciato
Un **test** (caso di test) è un insieme di input usato per verificare se il programma genera l'output corretto in quel caso specifico. Nessun test è completo al 100%, ma l'insieme dei test deve coprire tutti i comportamenti del programma:
- un test per ogni alternativa (es. nazionale/internazionale);
- le **condizioni limite**: minimo e massimo, valori appena sopra e appena sotto, appena sopra/sotto una soglia interna;
- valori speciali: 0, 1, numeri molto grandi;
- valori non validi: negativi, stringhe al posto di numeri, valori vuoti.

## Intuizione
Gli errori stanno quasi sempre ai bordi (il `<` al posto del `<=`): per questo si testano i valori a cavallo delle soglie, non solo valori "tipici".

## Come si usa
Esempio della promozione "Kilobyte Day" (P3 p. 57-60): sconto 8% se il prezzo è < 128 dollari, 16% se almeno 128. Test con 127, 128, 129 per il confronto, e verifiche attese 0,92 × 100 = 92 e 0,84 × 200 = 168; poi prezzi non validi (negativi). In P6 (p. 106-107) si progettano test per i casi eccezionali: lista vuota o con un solo elemento.

## Nei corsi
- **Informatica** (triennale): unità P1 sezione 3.6; ripreso in P3 (vendite), P5 (unit test di una funzione, p. 47) e P6 (test per le eccezioni). Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 61-63), `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 57-60).

## Prerequisiti
- [[Algoritmo]]: verifica che l'algoritmo dia l'output atteso

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Errori di sintassi e logici]]: i test servono a scovare gli errori logici
- [[Hand-tracing]]: si traccia con input dal risultato noto
- [[Raffinamenti successivi]]: gli stub e i test unitari collaudano i pezzi
