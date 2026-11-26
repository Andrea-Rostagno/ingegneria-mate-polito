---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [generalizzazione, specializzazione, entità padre, entità figlia, ereditarietà, generalizzazione totale, generalizzazione parziale, generalizzazione esclusiva, generalizzazione sovrapposta, sottoinsieme, gerarchia ER, copertura della generalizzazione]
tags: [competenza, area/informatica]
---

# Generalizzazione nel modello ER

> Legame tra un'entità padre E e entità figlie E1, ..., En che ne sono casi particolari: le figlie ereditano tutte le proprietà del padre.

## Definizione / enunciato
Una **generalizzazione** collega un'entità $E$ (padre) a entità $E_1, \dots, E_n$ (figlie) che $E$ comprende come casi particolari: $E$ è una generalizzazione delle figlie, le figlie sono una specializzazione di $E$.

Proprietà:
- ogni occorrenza di una figlia è anche un'occorrenza del padre;
- ogni proprietà del padre (attributi, identificatori, relazioni, altre generalizzazioni) è anche proprietà di ogni figlia: **ereditarietà**;
- un'entità può essere coinvolta in più generalizzazioni diverse.

Caratteristiche ortogonali (copertura):
- **totale** se ogni occorrenza del padre è occorrenza di almeno una figlia, **parziale** altrimenti;
- **esclusiva** se ogni occorrenza del padre è occorrenza di al più una figlia, **sovrapposta** altrimenti.

## Formule chiave
La copertura si annota tra parentesi accanto alla gerarchia (iniziali di totale/parziale ed esclusiva/sovrapposta). Esempio delle slide: Sportivo con figlie Calciatore e Sciatore è $(p,s)$: ci sono sportivi né calciatori né sciatori, e sportivi sia l'uno sia l'altro.

**Sottoinsieme**: caso particolare con una sola entità figlia; è sempre parziale ed esclusivo.

## Intuizione
La generalizzazione evita di ripetere attributi e relazioni comuni: si dicono una volta sul padre. Le figlie aggiungono solo ciò che le distingue. Le figlie non ripetono l'identificatore, che ereditano.

## Come si usa
Nel caso ASL il Personale si specializza in Medico (con l'elenco delle specializzazioni) e Volontario (con l'associazione, se disponibile), e l'Esame in Esame specialistico (con medico e dieta): sono gerarchie che nella progettazione logica vanno eliminate, perché il modello relazionale non le rappresenta direttamente.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER-1.pdf` (pp. 58-72; esempi corretti e non corretti solo come immagini, pp. 66-69); `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (pp. 41-44).

## Prerequisiti
- [[Modello Entità-Relazione]]: costrutto del modello ER

## Porta a
- [[Eliminazione delle generalizzazioni]]: traduzione delle gerarchie nella progettazione logica

## Collegati
- [[Progettazione concettuale]]: un caso particolare di un concetto si modella come gerarchia
