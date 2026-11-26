---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["Bayesian classification", "naive Bayes", "classificatore bayesiano naive"]
tags: [competenza, area/data-ml]
---

# Classificatore bayesiano

> Classificatore probabilistico che assegna il record alla classe con probabilità a posteriori massima, calcolata col teorema di Bayes e, nella versione naive, con l'ipotesi di indipendenza degli attributi.

## Definizione / enunciato
Classe $C$ e attributi sono variabili aleatorie; $X=\langle x_1,\dots,x_k\rangle$ è il record da classificare. Si calcola $P(C|X)$ per tutte le classi e si assegna $X$ alla classe con $P(C|X)$ massima. Per il teorema di Bayes $P(C|X)=P(X|C)P(C)/P(X)$; $P(X)$ è uguale per tutte le classi e si ignora nel confronto.

**Ipotesi naive**: indipendenza statistica degli attributi data la classe. Non sempre vera, può peggiorare il modello. Le **reti bayesiane** permettono di specificare un sottoinsieme di dipendenze tra attributi.

## Formule chiave
$$P(C|X)=\frac{P(X|C)\,P(C)}{P(X)},\qquad P(C)=\frac{N_C}{N}$$
$$P(x_1,\dots,x_k|C)=P(x_1|C)\,P(x_2|C)\cdots P(x_k|C)$$
Attributi discreti: $P(x_k|C)=|x_{kC}|/N_C$, con $|x_{kC}|$ istanze con valore $x_k$ per l'attributo $k$ e classe $C$; attributi continui: si usa una distribuzione di probabilità.

## Intuizione
Si moltiplicano frequenze facili da contare invece di stimare una distribuzione congiunta impossibile da stimare su molti attributi. I pesi dei singoli fattori possono spiegare una predizione.

## Come si usa
Esempio delle slide (dataset "play", 14 record, da Han-Kamber): $P(p)=9/14$, $P(n)=5/14$. Per $X=\langle rain, hot, high, false\rangle$: $P(X|p)P(p)=\tfrac39\cdot\tfrac29\cdot\tfrac39\cdot\tfrac69\cdot\tfrac9{14}=0.010582$ e $P(X|n)P(n)=\tfrac25\cdot\tfrac25\cdot\tfrac45\cdot\tfrac25\cdot\tfrac5{14}=0.018286$, quindi $X$ va nella classe $n$. Valutazione: accuratezza simile o inferiore agli alberi, molto veloce, scalabile, completamente incrementale, non richiede il training set disponibile, risente della correlazione tra attributi.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Bayesian Classification" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 84-91).
- **Business intelligence per big data** (magistrale): stessa sezione "Bayesian Classification" (teorema di Bayes, ipotesi naive, esempio svolto, valutazione). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 84-94). Collegamento: [[Albero di decisione]], termine di confronto nella valutazione (accuratezza simile o inferiore).
- **Data science lab** (magistrale): stesso materiale ($P(C|X)=P(X|C)P(C)/P(X)$, $P(C)=N_c/N$, ipotesi naive di indipendenza, reti bayesiane come rilassamento, valutazione). Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 70-77).

## Prerequisiti
- [[Classificazione supervisionata]]: un modello di classificazione
- [[Formula di Bayes]]: probabilità a posteriori della classe

## Porta a
- Nessuno.

## Collegati
- Nessuno.
