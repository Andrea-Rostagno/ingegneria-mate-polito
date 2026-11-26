---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["rule-based classifier", "regole di classificazione", "copertura", "sequential covering"]
tags: [competenza, area/data-ml]
---

# Classificatori basati su regole

> Classificatori che assegnano la classe con un insieme di regole "se condizione allora classe", ottenute dai dati o da altri modelli.

## Definizione / enunciato
Una regola ha forma $(\text{Condizione})\to y$, con condizione congiunzione di predicati semplici (antecedente, LHS) e $y$ etichetta di classe (conseguente, RHS). Una regola **copre** un'istanza se gli attributi dell'istanza soddisfano la condizione.

Proprietà di un insieme di regole:
- **mutuamente esclusive**: ogni record è coperto al più da una regola;
- **esaustive**: ogni record è coperto almeno da una regola.

Se le regole non sono esclusive si usa un insieme **ordinato** (*decision list*: vince la regola di priorità più alta attivata) o non ordinato con voto; se non sono esaustive si usa una **classe di default**.

## Formule chiave
Esempio di regola: $(\text{Taxable Income}<50K)\wedge(\text{Refund}=\text{Yes})\to \text{Cheat}=\text{No}$.

## Intuizione
Le regole estratte da un albero sono mutuamente esclusive ed esaustive e contengono la stessa informazione dell'albero; semplificandole (es. $(Refund=No)\wedge(Status=Married)\to No$ diventa $(Status=Married)\to No$) si perdono queste due proprietà.

## Come si usa
Esempio delle slide (vertebrati): R1 (Give Birth=no) $\wedge$ (Can Fly=yes) $\to$ Birds, …, R5 (Live in Water=sometimes) $\to$ Amphibians. Un lemure attiva solo R3 (mammifero), una tartaruga attiva R4 e R5, uno squalo dogfish nessuna. Costruzione: **metodi diretti** (RIPPER, CN2, 1R di Holte) o **indiretti** da altri modelli (C4.5rules). Valutazione: accuratezza più alta degli alberi, interpretabili, veloci, scalabili, robusti agli outlier, non incrementali.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Rule-based classification" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 59-70).
- **Business intelligence per big data** (magistrale): stessa sezione "Rule-based classification" (caratteristiche delle regole, dall'albero alle regole, semplificazione, insieme ordinato, costruzione, valutazione). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 59-70).

## Prerequisiti
- [[Classificazione supervisionata]]: un modello di classificazione

## Porta a
- [[Classificazione associativa]]: classificatore a regole da itemset frequenti

## Collegati
- [[Albero di decisione]]: regole estratte dall'albero
