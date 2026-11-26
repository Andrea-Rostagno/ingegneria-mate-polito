---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["systems of applied vectors", "risultante", "momento risultante", "legge di trasporto dei momenti", "invariante scalare", "scalar invariant", "sistemi di forze equivalenti", "equivalent systems of forces", "asse centrale", "sistema equilibrato", "riduzione di un sistema di vettori"]
tags: [competenza, area/fisica]
---

# Sistemi di vettori applicati

> Un insieme di vettori con i loro punti di applicazione (tipicamente le forze) si caratterizza con risultante e momento risultante; due sistemi con gli stessi $\vec R$ e $\vec M_O$ sono equivalenti.

## Definizione / enunciato
Dato $S=\{(P_i,\vec u_i)\}_{i=1}^n$:
$$\vec R=\sum_i\vec u_i,\qquad\vec M_O=\sum_i(P_i-O)\wedge\vec u_i\qquad(5.5)$$
**Legge di trasporto:** $\vec M_Q=(O-Q)\wedge\vec R+\vec M_O$ (5.6). Una coppia $\{(P,\vec u),(Q,-\vec u)\}$ ha $\vec R=\vec 0$ e momento $(P-Q)\wedge\vec u$ indipendente dal polo (5.7). Due sistemi sono **equivalenti** se $\vec R=\vec R'$ e $\vec M_O=\vec M_O'$ per un polo, e quindi per tutti (5.10). Un sistema è **equilibrato** se $\vec R$ e $\vec M_O$ sono nulli.

## Formule chiave
Invariante scalare $I=\vec R\cdot\vec M_O$, indipendente dal polo (5.8-5.9); $I=0$ per sistemi piani e per vettori paralleli.
**Riduzione:** (i) $\vec R=\vec 0=\vec M_O$: sistema nullo; (ii) $\vec R=\vec 0$, $\vec M_O\neq\vec 0$: una coppia; (iii) $\vec R\neq\vec 0$, $I=0$: il solo $\vec R$ applicato in un punto di
$$\overrightarrow{OP^*}=\frac{\vec R_S\wedge\vec M_{O_S}}{R_S^2}+\lambda\vec R_S\qquad(5.12),$$
retta detta **asse centrale** nel manoscritto; (iv) $\vec R\neq\vec 0$, $I\neq0$: un vettore più una coppia.

## Intuizione
Le operazioni elementari (traslare un vettore lungo la sua retta d'azione, sommare vettori concorrenti, aggiungere o togliere coppie di braccio nullo) non cambiano $\vec R$ e $\vec M$, quindi producono sistemi equivalenti. Per un corpo rigido, sistemi equivalenti hanno le stesse configurazioni di equilibrio (Prop. 6.3).

## Come si usa
Si riduce un sistema di forze per calcolarne il lavoro su un corpo rigido o per scrivere le equazioni cardinali. Esempio: la forza peso di un sistema di punti è equivalente al peso totale applicato nel baricentro.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (pp. 46-48, eqq. 5.1-5.12; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezione 1 del 06/03/2017, "Sistemi di vettori applicati", pp. 7-12).

## Prerequisiti
- [[Vettori applicati e vettori liberi]]: coppia punto e vettore
- [[Momento di una forza]]: momento di un singolo vettore
- [[Prodotto vettoriale]]: definizione del momento

## Porta a
- [[Potenza delle forze su un corpo rigido]]: dipende solo da R e M_Q
- [[Equilibrio statico del corpo rigido]]: equazioni cardinali R = 0, M = 0

## Collegati
- [[Asse di Mozzi]]: stessa costruzione con l'invariante v·ω
- [[Centro di massa]]: il peso equivale al peso totale nel baricentro
