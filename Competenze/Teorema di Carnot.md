---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["Carnot's theorem", "rendimento massimo", "maximum efficiency", "macchine reversibili"]
tags: [competenza, area/fisica]
---

# Teorema di Carnot

> Tutte le macchine reversibili che lavorano tra le stesse due sorgenti hanno lo stesso rendimento; ogni altra macchina tra le stesse sorgenti ha rendimento minore.

## Definizione / enunciato
Si suppone una macchina X con rendimento maggiore di una reversibile R. Facendo funzionare R come frigorifero alimentato dal lavoro di X, il sistema X+R non scambia lavoro con l'esterno e ha come unico effetto il passaggio di calore dalla sorgente fredda alla calda: viola Clausius. Quindi $\eta_X\le\eta_R$; se anche X è reversibile si scambiano i ruoli e $\eta_X=\eta_R$. Il risultato non dipende dalla sostanza: il rendimento calcolato con il gas ideale vale per tutte le macchine reversibili.

## Formule chiave
$$\eta_{max}=1-\frac{T_1}{T_2},\qquad \eta=1+\frac{Q_1}{Q_2}\le1-\frac{T_1}{T_2}\ \Rightarrow\ \frac{Q_1}{T_1}+\frac{Q_2}{T_2}\le0$$
(uguaglianza per macchine reversibili).

## Intuizione
La reversibilità è il "limite ideale": ogni irreversibilità (attriti, scambi a temperature diverse) spreca parte del lavoro possibile.

## Come si usa
Dà il rendimento massimo teorico di qualsiasi macchina tra due temperature e la disuguaglianza $\sum Q_i/T_i\le0$ che il teorema di Clausius generalizza.

## Nei corsi
- **Fisica 1** (triennale): lezione del 23/05/2022; dimostrazione richiesta all'orale. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione4.pdf` (pp. 34-43).

## Prerequisiti
- [[Secondo principio della termodinamica]]: la dimostrazione usa l'enunciato di Clausius
- [[Ciclo di Carnot]]: fornisce il valore del rendimento

## Porta a
- [[Temperatura termodinamica assoluta]]: il rendimento reversibile non dipende dalla sostanza
- [[Teorema di Clausius]]: Q1/T1 + Q2/T2 ≤ 0 per due sorgenti

## Collegati
- Nessuno.
