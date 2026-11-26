---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["Apriori", "principio Apriori", "antimonotonia del supporto", "generazione dei candidati"]
tags: [competenza, area/data-ml]
---

# Algoritmo Apriori

> Algoritmo level-wise che estrae gli itemset frequenti generando i candidati di lunghezza $k+1$ da quelli frequenti di lunghezza $k$ e potandoli con il principio Apriori.

## Definizione / enunciato
**Principio Apriori**: *se un itemset è frequente, tutti i suoi sottoinsiemi sono frequenti*. Vale per la proprietà di **antimonotonia** del supporto: il supporto di un itemset non supera mai quello dei suoi sottoinsiemi. Quindi ogni superinsieme di un itemset infrequente può essere scartato.

**Algoritmo** [Agr94], a ogni livello $k$:
1. *generazione dei candidati*: **join** dei $k$-itemset frequenti (ordinati lessicograficamente, si uniscono quelli con lo stesso prefisso di lunghezza $k-1$) e **prune** dei candidati di lunghezza $k+1$ che contengono un $k$-itemset non frequente;
2. *generazione degli itemset frequenti*: scansione del DB per contare il supporto dei candidati (memorizzati in un **hash-tree**) ed eliminazione di quelli sotto minsup.

## Formule chiave
$$A\subseteq B\ \Rightarrow\ \sup(A)\ge\sup(B)$$
Pseudocodice: $L_1$ = item frequenti; per $k=1$ finché $L_k\neq\emptyset$: $C_{k+1}$ = candidati da $L_k$; conta i candidati contenuti in ogni transazione; $L_{k+1}$ = candidati di $C_{k+1}$ con supporto $\ge$ minsup; restituisce $\bigcup_k L_k$.

## Intuizione
Il principio taglia lo spazio di ricerca senza perdere completezza. I limiti: insiemi di candidati enormi (la generazione dei 2-itemset è il passo critico), e $n+1$ scansioni del DB se il pattern frequente più lungo ha lunghezza $n$. Le prestazioni peggiorano con minsup bassa, molti item, DB grande e transazioni larghe (dati densi).

## Come si usa
Esempio delle slide: $L_3=\{abc,abd,acd,ace,bcd\}$; il self-join dà $abcd$ e $acde$; $acde$ è potato perché $ade$ e $cde$ non sono in $L_3$, quindi $C_4=\{abcd\}$. Nel DB di 10 transazioni con minsup $>1$, $\{A,B,E\}$ è potato perché $\{B,E\}$ (supporto 1) non è frequente, e $\{A,B,C,D\}$ ha supporto 1 quindi $L_4=\emptyset$. Miglioramenti: conteggio con hash, riduzione delle transazioni, partizionamento, campionamento, dynamic itemset counting.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzo "Association Rules Fundamentals", esempio svolto completo. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/11 - DSTBD_9-DMassrules.pdf` (pp. 16-40).
- **Business intelligence per big data** (magistrale): stesso esempio svolto completo (candidati $C_1,\dots,C_4$, potatura, insieme finale degli itemset frequenti) e problemi di prestazioni. Fonti: `magistrale/Business intelligence per big data/03-DMassrules_BI.pdf` (pp. 13-40).
- **Data science lab** (magistrale): principio Apriori ("se un itemset è frequente, tutti i suoi sottoinsiemi sono frequenti", per l'antimonotonia del supporto: $A\subseteq B\Rightarrow sup(A)\ge sup(B)$), pseudocodice e esempio svolto passo per passo con generazione e potatura dei candidati fino a $C_4$, conteggio del supporto e cenni alle tecniche di efficienza (partizionamento del DB). Fonti: `magistrale/Data science lab/slide testo/7-DMassrules.pdf` (p. 15-40).

## Prerequisiti
- [[Regola di associazione]]: estrazione degli itemset frequenti

## Porta a
- [[Regole di associazione generalizzate]]: estrazione su itemset generalizzati

## Collegati
- [[FP-growth]]: alternativa senza generazione di candidati
- [[Itemset massimali e chiusi]]: riducono l'output dell'estrazione
