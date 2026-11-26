---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [recurrent neural network, RNN, reti ricorrenti, LSTM, Long Short Term Memory, backpropagation through time, BPTT, RNN srotolata, unrolled RNN]
tags: [competenza, area/data-ml]
---

# Rete neurale ricorrente

> Rete neurale che elabora dati sequenziali $x(t)$ mantenendo uno stato interno che evolve nel tempo; si usa per traduzione, riconoscimento vocale e previsione di serie storiche.

## Definizione / enunciato
A differenza di una rete feed-forward (FFNN), una RNN ha connessioni che formano un grafo orientato lungo la sequenza temporale e una **retroazione dello stato**: a ogni passo riceve in input il vettore $x(t)$ e lo stato al passo precedente $s(t-1)$, e produce l'uscita $y(t)$. Internamente contiene molti neuroni organizzati in strati. Grazie alla memoria dello stato interno elabora sequenze di input e mostra un comportamento dinamico nel tempo.

## Formule chiave
Le slide mostrano solo lo schema: input $x(t)$ con pesi $w$, stato $s(t-1)$ con pesi di retroazione $w'$, uscita $y(t)$. Nessuna equazione di aggiornamento esplicita.

## Intuizione
Nella figura "RNN vs FFNN" la sola differenza è l'anello di ogni neurone su sé stesso: è quell'anello che dà memoria. "Srotolando" la rete nel tempo si ottiene la stessa rete ripetuta a ogni istante, ed è su questa versione che si addestra.

## Come si usa
- **Addestramento**: *backpropagation through time*; data una coppia (sequenza $x(t)$, uscita attesa $y(t)$) l'errore si propaga all'indietro nel tempo e i pesi si aggiornano per minimizzare l'errore su tutti i passi.
- **Problema**: *vanishing gradient*, il gradiente dell'errore decresce rapidamente nel tempo, i pesi non si aggiornano bene e la memoria a lungo termine è difficile.
- **Soluzione**: **LSTM** (Long Short Term Memory), RNN con "gate" che fanno fluire l'informazione di stato su lunghi intervalli.
- Applicazioni: traduzione automatica, previsione di serie storiche (es. 72 valori meteorologici predetti), riconoscimento vocale, POS tagging.

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 130-138, pagine del PDF; i numeri stampati sulle slide sono spostati di 4); `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (pp. 41-43, RNN per il forecasting).

## Prerequisiti
- [[Rete neurale artificiale]]: la RNN aggiunge la retroazione alla rete feed-forward
- [[Backpropagation]]: addestramento esteso nel tempo (BPTT)

## Porta a
- [[Previsione di serie storiche]]: architettura per il forecasting

## Collegati
- [[Rete neurale convoluzionale]]: alternativa per la classificazione di serie e segnali
- [[Serie storica]]: tipico input sequenziale
