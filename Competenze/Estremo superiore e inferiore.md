---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["supremum", "infimum", "sup", "inf", "maggiorante", "minorante", "massimo e minimo di un insieme", "insieme limitato"]
tags: [competenza, area/analisi]
---

# Estremo superiore e inferiore

> Il più piccolo dei maggioranti (sup) e il più grande dei minoranti (inf) di un insieme di numeri reali: esistono sempre per insiemi limitati, anche quando massimo e minimo non esistono.

## Definizione / enunciato
Sia $A\subseteq\mathbb R$. $A$ è **superiormente limitato** se $\exists M\in\mathbb R:\ \forall x\in A,\ x\le M$; ogni tale $M$ è un **maggiorante** (analogamente minorante, inferiormente limitato; limitato = entrambe le cose).

Se $A$ è superiormente limitato, $s=\sup A$ è il numero tale che (Mazzi, def. 1.4)
1. $\forall x\in A,\ x\le s$ ($s$ è un maggiorante);
2. $\forall\varepsilon>0\ \exists x\in A:\ s-\varepsilon<x\le s$ (nessun numero più piccolo è maggiorante).

Simmetricamente $i=\inf A$: $i\le x\ \forall x\in A$ e $\forall\varepsilon>0\ \exists x\in A:\ i\le x<i+\varepsilon$.

Se $\sup A\in A$ è il **massimo** $\max A$; se $\inf A\in A$ è il **minimo** $\min A$. Se $A$ non è superiormente (inferiormente) limitato si scrive $\sup A=+\infty$ ($\inf A=-\infty$). Sup, inf, max e min, se esistono, sono unici.

**Esistenza (prop. 1.6).** Ogni $A\ne\emptyset$ superiormente limitato ha estremo superiore in $\mathbb R$ (e ogni inferiormente limitato ha estremo inferiore).

## Formule chiave
$$s=\sup A\iff\begin{cases}x\le s\quad\forall x\in A\\ \forall\varepsilon>0\ \exists x\in A:\ s-\varepsilon<x\le s\end{cases}$$

## Intuizione
Il massimo può mancare perché l'insieme "si avvicina" a un bordo senza toccarlo; il sup è quel bordo. In $\mathbb Q$ il bordo può non esistere: $A=(-\infty,\sqrt2]\cap\mathbb Q$ ha $\sup A=\sqrt2\notin\mathbb Q$ (Mazzi, oss. 1.1). Per questo l'esistenza del sup è una forma della completezza di $\mathbb R$.

## Come si usa
Per provare che un numero è il sup si verificano le due condizioni; la seconda si dimostra trovando, per ogni $\varepsilon$, un elemento oltre $s-\varepsilon$. Esempi delle fonti: $A=(1,2)$ ha $\inf A=1$, $\sup A=2$ e né minimo né massimo; $A=(-1,3]$ ha $\max A=\sup A=3$; $A=\{1/n:n\ge1\}$ ha $\max A=1$ e $\inf A=0$ non raggiunto (per la proprietà archimedea). Nella lezione del 30/09/2021 il controesempio $A=[0,1)$ mostra che "superiormente limitato" non implica "esiste il massimo".

## Nei corsi
- **Analisi 1** (triennale): insiemi limitati, estremi, massimi e minimi, subito dopo il principio di Dedekind. Mazzi dimostra l'esistenza del sup applicando l'assioma di completezza alla coppia (non maggioranti, maggioranti); Morandotti (def. 1.18) prende invece l'esistenza del sup come terzo assioma dei reali, e nella def. 1.5.13 scrive la condizione (ii) come $s-\varepsilon\le b$. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.4, pp. 17-19, def. 1.3-1.6, prop. 1.6-1.7, es. 1.4); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 1.5.11-1.5.15, PDF pp. 24-25); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-09-30.pdf` (p. 1).

## Prerequisiti
- [[Assioma di Dedekind]]: garantisce l'esistenza del sup
- [[Quantificatori]]: caratterizzazione con ε

## Porta a
- [[Funzioni monotone]]: il limite è sup o inf
- [[Teorema sulle successioni monotone]]: il limite è il sup
- [[Integrale di Riemann]]: s(f)=sup, S(f)=inf

## Collegati
- Nessuno.
