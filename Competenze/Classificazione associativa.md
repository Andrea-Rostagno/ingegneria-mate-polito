---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["associative classification", "CBA", "classificazione basata su regole di associazione"]
tags: [competenza, area/data-ml]
---

# Classificazione associativa

> Classificatore il cui modello è un insieme di regole di associazione con l'etichetta di classe nel conseguente, selezionate e ordinate per supporto, confidenza e correlazione.

## Definizione / enunciato
Il modello è definito da regole di associazione $(\text{Condizione})\to y$ in cui il corpo è un **itemset** e la testa l'etichetta di classe. Generazione del modello:
1. **selezione e ordinamento** delle regole in base a soglie di supporto, confidenza e correlazione;
2. **pruning** delle regole con il criterio di **copertura del database**: il training set viene coperto scegliendo le regole in testa all'ordinamento.

## Formule chiave
Le misure sono quelle delle regole di associazione: $\sup$, $\text{conf}=\sup(A,B)/\sup(A)$ e correlazione $\text{conf}(r)/\sup(B)$.

## Intuizione
Le regole di associazione considerano insieme più attributi, quindi catturano correlazioni fra attributi che un albero, un attributo alla volta, può perdere. Il prezzo è il costo dell'estrazione degli itemset frequenti.

## Come si usa
Valutazione delle slide: accuratezza più alta di alberi e classificatori a regole (considera la correlazione tra attributi); modello e predizioni interpretabili; la generazione delle regole può essere lenta e dipende dalla soglia di supporto, la classificazione è molto veloce; scalabile nel numero di record ma meno nel numero di attributi (la generazione può diventare impraticabile); non incrementale; non risente dei dati mancanti e robusto agli outlier.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Associative classification" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 71-73).
- **Business intelligence per big data** (magistrale): stesse slide "Associative classification" e valutazione. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 71-73).

## Prerequisiti
- [[Regola di associazione]]: regole con la classe nel conseguente
- [[Classificatori basati su regole]]: classificatore a regole da itemset frequenti

## Porta a
- Nessuno.

## Collegati
- Nessuno.
