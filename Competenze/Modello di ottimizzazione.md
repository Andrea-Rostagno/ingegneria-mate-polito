---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["optimization model", "problema di ottimizzazione", "programmazione matematica", "mathematical programming", "variabili decisionali", "regione di ammissibilità", "funzione obiettivo", "classificazione dei modelli di ottimizzazione"]
tags: [competenza, area/ottimizzazione]
---

# Modello di ottimizzazione

> Formulazione astratta $\min_{\mathbf x\in S}f(\mathbf x)$ con i suoi tre ingredienti (variabili decisionali, regione ammissibile, obiettivo) e lo schema di classificazione dei modelli e dei solver.

## Definizione / enunciato
$$\min_{\mathbf x\in S}f(\mathbf x)$$
- **variabili decisionali** $\mathbf x\in\mathbb R^n$: la soluzione in forma matematica;
- **regione di ammissibilità** $S\subseteq\mathbb R^n$;
- **funzione obiettivo** $f$, che associa a ogni $\mathbf x\in S$ una misura di prestazione.

Tipicamente $S$ è descritta da $h_i(\mathbf x)=0$, $i\in E$; $g_i(\mathbf x)\le0$, $i\in I$; $\mathbf x\in X\subseteq\mathbb R^n$, dove $X$ può contenere vincoli box $x_j\in[l_j,u_j]$, interezza, o vincoli di dominio. Se $S\equiv\mathbb R^n$ il problema è **non vincolato**. Le variabili possono essere continue ($x_j\in\mathbb R_+$), intere ($x_j\in\mathbb Z_+$) o binarie ($x_j\in\{0,1\}$); con variabili in dimensione finita si parla di **programmazione matematica**.

## Formule chiave
$$\max_{\mathbf x\in S}f(\mathbf x)=-\min_{\mathbf x\in S}\,[-f(\mathbf x)].$$

## Intuizione
La difficoltà non dipende soprattutto dal numero di variabili o dalla linearità, ma dalla struttura: esistono problemi grandi più facili di problemi piccoli. La proprietà chiave è la convessità.

## Come si usa
Dimensioni di classificazione: dimensione finita/infinita, deterministico/stocastico, lineare/non lineare, convesso/non convesso, obiettivo singolo/multiplo. Criteri per valutare un solver: efficienza, efficacia (esatto o euristico), ottimalità locale o globale, requisiti sull'obiettivo (continuità, differenziabilità), generalità, robustezza, disponibilità. Abbinamenti delle slide: LP con simplesso e punti interni; NLP con solver locali con o senza derivate; QP convessi con punti interni; MILP e MIQP con branch and bound/cut o euristiche; non convessi con branch and bound o ricerca stocastica; obiettivo non in forma chiusa con ottimizzazione black-box.

## Nei corsi
- **Ricerca operativa** (triennale): "anatomia" e classificazione dei modelli, cap. 1 di Brandimarte. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 15-18, 36-37).
- **Numerical opt** (magistrale): forma generale $\min f(x)$ s.t. $g(x)\le0$, $h(x)=0$, con $g:\mathbb R^n\to\mathbb R^p$ letta componente per componente. Classificazione:
  - con o senza vincoli;
  - smooth o non smooth;
  - continua, discreta o mista intera;
  - deterministica o stocastica;
  - locale o globale;
  - LP, QP o NLP.

  Motivazione dal training di modelli: dataset $\{(a_j,y_j)\}$, funzione di loss da minimizzare, regressione o classificazione. Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 3-7).

## Prerequisiti
- [[Funzioni di più variabili]]: obiettivo e vincoli sono funzioni di $\mathbf x\in\mathbb R^n$

## Porta a
- [[Programmazione lineare]]: caso con obiettivo e vincoli lineari
- [[Problema di ottimizzazione convessa]]: la classe "facile"
- [[Programmazione lineare mista-intera]]: variabili intere e binarie
- [[Ottimizzazione surrogata]]: obiettivo valutabile solo per simulazione

## Collegati
- [[Modello EOQ]]: esempio con una variabile e vincolo $Q>0$
- [[Teorema di Weierstrass]]: esistenza del minimo su un compatto
