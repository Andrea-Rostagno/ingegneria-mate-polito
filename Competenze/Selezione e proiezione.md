---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [selezione, proiezione, selection, projection, operatore sigma, operatore pi, decomposizione orizzontale, decomposizione verticale]
tags: [competenza, area/informatica]
---

# Selezione e proiezione

> I due operatori unari dell'algebra relazionale: la selezione estrae un sottoinsieme orizzontale (righe), la proiezione un sottoinsieme verticale (colonne).

## Definizione / enunciato
**Selezione** $R = \sigma_p A$: genera una relazione con lo **stesso schema** di $A$ che contiene tutte le tuple di $A$ per cui il predicato $p$ è vero. $p$ è un'espressione booleana ($\wedge, \vee, \neg$) di confronti tra attributi o tra attributi e costanti. Opera una decomposizione orizzontale.

**Proiezione** $R = \pi_L A$: genera una relazione con schema la lista di attributi $L$ (sottoinsieme dello schema di $A$) e contiene tutte le tuple di $A$ ristrette a $L$; i **duplicati** dovuti all'esclusione degli attributi non in $L$ sono **eliminati**. Se $L$ include una chiave candidata non vi sono duplicati. Opera una decomposizione verticale.

## Formule chiave
$$\sigma_{\text{Città}=\text{'Torino'} \wedge \text{Età}>18}, \qquad \sigma_{\text{DataRestituzione} > \text{DataConsegna}+10}$$
$$R = \pi_{\text{NomeCorso}}\big(\sigma_{\text{Semestre}=2}\,\text{Corsi}\big)$$

## Intuizione
La selezione lavora riga per riga, la proiezione colonna per colonna. Poiché una relazione è un insieme, la proiezione deve togliere i duplicati: proiettare `Docenti` su Dipartimento dà {Informatica, Elettronica}, non tre righe.

## Come si usa
In SQL la selezione è la clausola `WHERE` e la proiezione è la lista dopo `SELECT`, con una differenza: SQL **non** elimina i duplicati salvo `DISTINCT` (`SELECT CodP FROM FP` ripete i codici; `SELECT DISTINCT CodP FROM FP` no). `SELECT CodF, NSoci FROM F WHERE Sede='Milano'` corrisponde a $\pi_{\text{CodF,NSoci}}\,\sigma_{\text{Sede}=\text{'Milano'}} F$. Nella normalizzazione le relazioni decomposte si ottengono come proiezioni, per esempio $R_1 = \pi_{\text{MatrStudente,Residenza}} R$.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 8-20); `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 15-19).

## Prerequisiti
- [[Algebra relazionale]]: sono i suoi operatori unari

## Porta a
- [[Join relazionale]]: il join è una selezione sul prodotto cartesiano
- [[Istruzione SELECT]]: WHERE e lista SELECT
- [[Decomposizione senza perdita]]: le relazioni decomposte sono proiezioni

## Collegati
- Nessuno.
