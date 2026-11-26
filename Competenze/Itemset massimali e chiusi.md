---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["maximal itemset", "closed itemset", "rappresentazioni compatte"]
tags: [competenza, area/data-ml]
---

# Itemset massimali e chiusi

> Rappresentazioni compatte dell'insieme degli itemset frequenti: i massimali ne danno la frontiera, i chiusi conservano anche i supporti.

## Definizione / enunciato
Molti itemset sono ridondanti perché hanno lo stesso supporto dei loro superinsiemi; serve una **rappresentazione compatta**.
- Un itemset frequente è **massimale** se nessuno dei suoi superinsiemi immediati è frequente.
- Un itemset è **chiuso** se nessuno dei suoi superinsiemi immediati ha lo stesso supporto.

Vale l'inclusione: itemset frequenti massimali $\subseteq$ itemset frequenti chiusi $\subseteq$ itemset frequenti.

## Formule chiave
Esempio delle slide con tre blocchi di 10 item ciascuno ($A_1..A_{10}$, $B_1..B_{10}$, $C_1..C_{10}$) presenti in gruppi di transazioni disgiunti: il numero di itemset frequenti è
$$3\sum_{k=1}^{10}\binom{10}{k}$$
mentre bastano pochi itemset per descriverli.

## Intuizione
I massimali indicano il "bordo" tra frequenti e infrequenti nel reticolo: tutti i frequenti sono loro sottoinsiemi, ma i supporti si perdono. I chiusi permettono di ricostruire anche il supporto di ogni itemset frequente, al prezzo di essere più numerosi.

## Come si usa
Esempio delle slide (5 transazioni ABC, ABCD, BCE, ACDE, DE, minimo supporto 2): 9 itemset frequenti chiusi e 4 massimali; alcuni sono chiusi ma non massimali, altri chiusi e massimali. Esercizio tipico: dato un reticolo con le tidset, marcare frequenti, chiusi e massimali.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Compact Representations" del mazzo sulle regole di associazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/11 - DSTBD_9-DMassrules.pdf` (pp. 75-80).
- **Business intelligence per big data** (magistrale): stessa sezione "Compact Representations", con l'effetto della soglia di supporto. Fonti: `magistrale/Business intelligence per big data/03-DMassrules_BI.pdf` (pp. 75-81).
- **Data science lab** (magistrale): itemset frequente massimale (nessun superinsieme immediato è frequente) e chiuso (nessun superinsieme immediato ha lo stesso supporto), con il reticolo degli itemset e l'esempio di 5 transazioni. Fonti: `magistrale/Data science lab/slide testo/7-DMassrules.pdf` (p. 76-80).

## Prerequisiti
- [[Regola di associazione]]: compattano gli itemset frequenti

## Porta a
- Nessuno.

## Collegati
- [[Algoritmo Apriori]]: riducono l'output dell'estrazione
