---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["FP-tree", "frequent pattern growth", "conditional pattern base"]
tags: [competenza, area/data-ml]
---

# FP-growth

> Algoritmo di estrazione degli itemset frequenti senza generazione dei candidati, basato su una rappresentazione compressa del database in memoria, l'FP-tree.

## Definizione / enunciato
**FP-growth** [Han00] usa l'**FP-tree**, rappresentazione compressa e completa del database per il frequent pattern mining, che rispetta il vincolo di supporto. La compressione è alta per dati densi, minore per dati sparsi. Bastano **due scansioni** del DB: una per contare i supporti degli item, una per costruire l'albero.

**Costruzione**: (1) si contano i supporti e si eliminano gli item sotto minsup; (2) si costruisce la *Header Table* con gli item in ordine di supporto decrescente; (3) ogni transazione, con gli item riordinati come nella Header Table, è inserita nell'albero riusando il cammino del prefisso comune e creando un nuovo ramo dove il cammino diverge. I puntatori degli item aiutano la generazione.

**Estrazione**: si scorre la Header Table dall'item meno frequente; per ogni item $i$ si costruisce la sua **Conditional Pattern Base** ($i$-CPB, i cammini prefisso di $i$) e si invoca ricorsivamente FP-growth sulla $i$-CPB (divide et impera).

## Formule chiave
Nessuna formula: l'algoritmo è procedurale.

## Intuizione
Invece di generare e contare candidati, si scompone il problema in sottoproblemi più piccoli ("itemset che finiscono con $i$"), ciascuno su un albero condizionato più piccolo.

## Come si usa
Esempio delle slide (DB di 10 transazioni, minsup $>1$): Header Table B:8, A:7, C:7, D:5, E:3. Per l'item D la D-CPB è $\{B,A,C\}{:}1$, $\{B,A\}{:}1$, $\{B,C\}{:}1$, $\{A,C\}{:}1$, $\{A\}{:}1$; la ricorsione dà gli itemset frequenti con D: $\{D\}$ 5, $\{A,D\}$ 4, $\{B,D\}$ 3, $\{C,D\}$ 3, $\{A,B,D\}$ 2, $\{A,C,D\}$ 2, $\{B,C,D\}$ 2. Altri approcci usano rappresentazioni diverse, ad esempio il layout verticale con la tidset di ogni item [Zak00].

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzo "Association Rules Fundamentals", costruzione e visita dell'FP-tree passo per passo. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/11 - DSTBD_9-DMassrules.pdf` (pp. 41-74).
- **Business intelligence per big data** (magistrale): stessa costruzione dell'FP-tree e visita con le conditional pattern base di D, DC, DCB, DCA, DB, DBA, DA. Fonti: `magistrale/Business intelligence per big data/03-DMassrules_BI.pdf` (pp. 41-74).
- **Data science lab** (magistrale): costruzione dell'FP-tree e invocazione ricorsiva di FP-growth sulle conditional pattern base, con l'esempio svolto sul DB di 10 transazioni e minsup $>1$ (itemset con prefisso D: {D} 5, {A,D} 4, {B,D} 3, {C,D} 3, ...). Fonti: `magistrale/Data science lab/slide testo/7-DMassrules.pdf` (p. 41-73).

## Prerequisiti
- [[Regola di associazione]]: estrazione degli itemset frequenti

## Porta a
- Nessuno.

## Collegati
- [[Algoritmo Apriori]]: alternativa senza generazione di candidati
