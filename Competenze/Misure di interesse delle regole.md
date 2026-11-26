---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["interestingness measures", "lift", "interest", "tabella di contingenza", "correlazione delle regole"]
tags: [competenza, area/data-ml]
---

# Misure di interesse delle regole

> Misure che classificano le regole estratte oltre supporto e confidenza; la principale è la correlazione (lift), che rivela regole fuorvianti.

## Definizione / enunciato
L'estrazione produce molti pattern, da ordinare per interesse.
- **Misure oggettive**: statistiche calcolate dai dati; il framework iniziale [Agr94] usava solo supporto e confidenza, ma ne esistono altre.
- **Misure soggettive**: dipendono dall'utente [Silb98]; un pattern è interessante se contraddice le sue aspettative o se è azionabile.

La confidenza può ingannare quando la testa della regola è molto frequente. La **correlazione** (o **lift**) confronta la probabilità congiunta con quella attesa sotto indipendenza.

## Formule chiave
$$\text{Correlation}=\frac{P(A,B)}{P(A)\,P(B)}=\frac{\text{conf}(r)}{\sup(B)},\qquad r: A\Rightarrow B$$
- $=1$: indipendenza statistica;
- $>1$: correlazione positiva;
- $<1$: correlazione negativa.

## Intuizione
Una confidenza del 66.7% sembra alta, ma se la testa compare comunque nel 75% delle transazioni la regola dice che il corpo *abbassa* la probabilità della testa.

## Come si usa
Esempio delle slide: 5000 studenti, 3750 mangiano cereali, 3000 giocano a basket, 2000 fanno entrambe le cose. La regola *play basket $\Rightarrow$ eat cereals* ha $\sup=40\%$ e $\text{conf}=66.7\%$, ma è fuorviante perché $\sup(\text{cereals})=75\%$: la correlazione vale $0.89$ (negativa). La regola *play basket $\Rightarrow$ not (eat cereals)* ha correlazione $1.34$.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Interestingness Measures" del mazzo sulle regole di associazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/11 - DSTBD_9-DMassrules.pdf` (pp. 82-85).
- **Business intelligence per big data** (magistrale): stessa sezione "Interestingness Measures" (la confidenza non è sempre affidabile; correlazione o lift con esempio). Fonti: `magistrale/Business intelligence per big data/03-DMassrules_BI.pdf` (pp. 82-85).
- **Data science lab** (magistrale): effetto della soglia di minsup (troppo alta perde item rari ma interessanti, troppo bassa è costosa), regola "interessante se azionabile", esempio dei 5000 studenti (play basket $\Rightarrow$ eat cereals: sup 40%, conf 66,7%, fuorviante perché eat cereals ha supporto 75%) e correlazione o lift $=P(A,B)/(P(A)P(B))=conf(r)/sup(B)$, con $=1$ indipendenza, $>1$ correlazione positiva, $<1$ negativa. Fonti: `magistrale/Data science lab/slide testo/7-DMassrules.pdf` (p. 81-85).

## Prerequisiti
- [[Regola di associazione]]: valutano le regole oltre supporto e confidenza

## Porta a
- Nessuno.

## Collegati
- [[Misure di similarità]]: lift e correlazione misurano la dipendenza
