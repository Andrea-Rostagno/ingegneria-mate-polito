---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [lossless decomposition, lossless join, decomposizione senza perdita di informazione, tuple spurie, perdita di informazione]
tags: [competenza, area/informatica]
---

# Decomposizione senza perdita

> Una decomposizione è senza perdita se il join delle proiezioni restituisce esattamente la relazione originale, senza tuple spurie.

## Definizione / enunciato
La decomposizione di una relazione $r$ sugli insiemi di attributi $X_1$ e $X_2$ è **senza perdita di informazione** se il join delle proiezioni di $r$ su $X_1$ e $X_2$ è uguale a $r$ stessa (senza tuple "spurie"). Una decomposizione fatta per normalizzare deve essere senza perdita.

## Formule chiave
Data $r(X)$ e $X_1$, $X_2$ con
$$X = X_1 \cup X_2,\qquad X_0 = X_1 \cap X_2,$$
**se** $r$ soddisfa la dipendenza funzionale
$$X_0 \to X_1 \quad \text{oppure} \quad X_0 \to X_2,$$
la decomposizione di $r$ su $X_1$ e $X_2$ è senza perdita. In parole: gli attributi comuni formano una chiave per almeno una delle relazioni decomposte. (Le slide la danno come condizione sufficiente.)
$$\pi_{X_1} r \bowtie \pi_{X_2} r = r$$

## Intuizione
Il join ricompone le tuple attraverso gli attributi comuni: se questi identificano univocamente le tuple di almeno un lato, ogni tupla si riattacca al partner giusto. Se no, il join accoppia anche tuple che nell'originale non stavano insieme.

## Come si usa
Esempio `R(Impiegato, Categoria, Stipendio)` con Impiegato → Categoria, Impiegato → Stipendio, Categoria → Stipendio:
- $R_1(\text{Impiegato, Stipendio})$, $R_2(\text{Categoria, Stipendio})$: $X_0 = \{\text{Stipendio}\}$ non determina né $X_1$ né $X_2$; ricomponendo compaiono tuple spurie come (Rossi, 3, 1800) e (Verdi, 2, 1800) → **con perdita**;
- $R_1(\text{Impiegato, Categoria})$, $R_2(\text{Impiegato, Stipendio})$: $X_0 = \{\text{Impiegato}\}$ è chiave → senza perdita (ma perde Categoria → Stipendio);
- $R_1(\text{Impiegato, Categoria})$, $R_2(\text{Categoria, Stipendio})$: $X_0 = \{\text{Categoria}\}$ determina Stipendio → senza perdita, e conserva le dipendenze.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Normalizzazione-1.pdf` (pp. 25-35, 40-41, 44; simboli $\cup$ e $\cap$ verificati sull'immagine di p. 32).

## Prerequisiti
- [[Dipendenza funzionale]]: la condizione è una dipendenza sugli attributi comuni
- [[Forma normale di Boyce-Codd]]: la normalizzazione produce la decomposizione
- [[Join relazionale]]: la ricomposizione è un natural join
- [[Selezione e proiezione]]: le relazioni decomposte sono proiezioni

## Porta a
- Nessuno.

## Collegati
- [[Conservazione delle dipendenze]]: l'altra proprietà di una buona decomposizione
