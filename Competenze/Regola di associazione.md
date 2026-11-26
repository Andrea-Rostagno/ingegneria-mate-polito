---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["association rule", "regole di associazione", "supporto", "confidenza", "itemset", "itemset frequente", "market basket analysis"]
tags: [competenza, area/data-ml]
---

# Regola di associazione

> Implicazione $A\Rightarrow B$ tra itemset che esprime una co-occorrenza frequente in un database transazionale, misurata da supporto e confidenza.

## Definizione / enunciato
Data una collezione di **transazioni** (insiemi non ordinati di item), una **regola di associazione** $A, B \Rightarrow C$ ha un **corpo** ($A,B$) e una **testa** ($C$). La freccia indica **co-occorrenza, non causalità**.

- **Itemset**: insieme di uno o più item; **k-itemset** se ne contiene $k$.
- **Support count** $\#$: numero di transazioni che contengono l'itemset.
- **Supporto**: frazione di transazioni che contengono l'itemset.
- **Itemset frequente**: supporto $\ge$ soglia *minsup*.

Data $T$ insieme di transazioni, l'**estrazione** trova tutte e sole (risultato completo e corretto) le regole con supporto $\ge$ minsup e confidenza $\ge$ minconf. Si divide in due passi: (1) estrazione degli itemset frequenti, il passo più costoso; (2) generazione delle regole come tutte le partizioni binarie di ogni itemset frequente, filtrate per confidenza.

## Formule chiave
$$\sup(A\Rightarrow B)=\frac{\#\{A,B\}}{|T|},\qquad \text{conf}(A\Rightarrow B)=\frac{\sup(A,B)}{\sup(A)}$$
Il supporto è la probabilità a priori dell'itemset $AB$ (frequenza della regola), la confidenza è la probabilità condizionata di trovare $B$ avendo trovato $A$ (la "forza" della freccia). Con $d$ item ci sono $2^d$ itemset candidati; la forza bruta costa $\sim O(|T|\,2^d\,w)$, con $w$ lunghezza della transazione.

## Intuizione
Si cerca ciò che "va insieme" senza ipotesi a priori: è una tecnica esplorativa applicabile a qualunque dato riconducibile a transazioni (carrelli della spesa, documenti come insiemi di parole, righe di tabella come insiemi di coppie attributo=valore, es. "TaxableIncome<80K").

## Come si usa
Esempio delle slide (5 scontrini): da {Milk, Diapers}, supporto $3/5=60\%$, nascono Milk $\Rightarrow$ Diapers con confidenza $3/4=75\%$ e Diapers $\Rightarrow$ Milk con confidenza $3/3=100\%$: stesso supporto, confidenze diverse. La soglia minsup va scelta con cura: troppo alta perde item rari ma interessanti (gioielli), troppo bassa rende l'estrazione costosissima.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzo "Association Rules Fundamentals" (Baralis, Chiusano). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/11 - DSTBD_9-DMassrules.pdf` (pp. 2-15, 81); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (p. 35).
- **Business intelligence per big data** (magistrale): stesso mazzo "Association Rules" (Baralis, Chiusano, Cerquitelli): formati transazionali, definizioni, supporto e confidenza con esempio, estrazione in due passi. Fonti: `magistrale/Business intelligence per big data/03-DMassrules_BI.pdf` (pp. 2-12).
- **Data science lab** (magistrale): stesso mazzo di Baralis-Chiusano (itemset, supporto, confidenza; esempio {Milk, Diapers}: Milk $\Rightarrow$ Diapers con sup $=3/5=60\%$, conf $=3/4=75\%$; estrazione in due passi, frequent itemset e generazione delle regole; complessità della forza bruta $O(|T|\,2^d\,w)$). Fonti: `magistrale/Data science lab/slide testo/7-DMassrules.pdf` (p. 1-15).

## Prerequisiti
- [[Processo KDD]]: tecnica di data mining

## Porta a
- [[Algoritmo Apriori]]: estrazione degli itemset frequenti
- [[FP-growth]]: estrazione degli itemset frequenti
- [[Itemset massimali e chiusi]]: compattano gli itemset frequenti
- [[Misure di interesse delle regole]]: valutano le regole oltre supporto e confidenza
- [[Regole di associazione generalizzate]]: estende item e transazioni
- [[Classificazione associativa]]: regole con la classe nel conseguente

## Collegati
- [[Discretizzazione]]: attributi binari come item
