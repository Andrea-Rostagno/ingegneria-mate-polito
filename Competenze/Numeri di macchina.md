---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Informatica, Metodi numerici, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["machine numbers", "insieme F", "IEEE 754", "doppia precisione", "realmin", "realmax"]
tags: [competenza, area/numerica]
---

# Numeri di macchina

> Insieme finito dei reali esattamente rappresentabili da un calcolatore con $t$ cifre di mantissa ed esponente in $[L,U]$.

## Definizione / enunciato
Se la mantissa ha al più $t$ cifre e l'esponente soddisfa $L\le q\le U$ ($L<0<U$ interi), i **numeri di macchina** sono
$$\mathbb F=\{0\}\cup\{(-1)^s\,0.a_1a_2\dots a_t\cdot N^q:\ 0\le a_i<N,\ a_1\ne0,\ L\le q\le U\}.$$
È un insieme finito: non tutti i reali sono rappresentabili. Il più piccolo positivo è $m=0.100\dots0\cdot N^L$, il più grande $M=0.(N-1)(N-1)\dots(N-1)\cdot N^U$ ($t$ cifre).

## Formule chiave
$$m=0.\underbrace{10\dots0}_{t}\cdot N^{L},\qquad M=0.\underbrace{(N-1)\dots(N-1)}_{t}\cdot N^{U}$$
Standard IEEE 754 in doppia precisione: $N=2$, 64 bit = 1 bit di segno + 52 bit di mantissa (53 effettivi, il primo bit vale sempre 1) + 11 bit di esponente.

## Intuizione
Il calcolatore riserva uno spazio finito a mantissa ed esponente: la finitezza di $t$ limita la precisione, quella di $[L,U]$ limita l'ordine di grandezza. I numeri fuori da $\mathbb F$ vanno arrotondati o generano underflow/overflow.

## Come si usa
Esempi con $N=10$, $t=5$, $L=-127$, $U=128$: $1.58291=0.158291\cdot10^1$ non è di macchina (6 cifre); $0.38245\cdot10^{-2}$ lo è; $0.1229\cdot10^{130}$ no (esponente oltre $U$). In Matlab: `realmin` $\approx2.2\cdot10^{-308}$, `realmax` $\approx1.8\cdot10^{308}$, `eps` $\approx2.2\cdot10^{-16}$. 53 cifre binarie corrispondono a circa 16 cifre decimali.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 10-15, 34-35).
- **Informatica** (triennale): unità T1: formato IEEE-754, singola precisione (`float`) 1 bit di segno + 8 di esponente + 23 di mantissa, doppia (`double`) 1 + 11 + 52; valori come 0.1 e 0.6 non sono numeri di macchina e vengono approssimati. Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 38-40).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): $F=\{0\}\cup\{(-1)^s0.a_1a_2\dots a_t\cdot N^q,\ 0\le a_i<N,\ a_1\ne0,\ L\le q\le U\}$, con $m=0.10\dots0\cdot N^L$ e $M=0.(N-1)\dots(N-1)\cdot N^U$; in Matlab (IEEE 754 doppia precisione, 64 bit: 1 di segno, 52+1 di mantissa, 11 di esponente) `realmin` $\approx2.2\cdot10^{-308}$ e `realmax` $\approx1.8\cdot10^{308}$. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 6-7, 15-16).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale. Per implementare gli algoritmi geometrici si ricorda che si lavora in un'**algebra finita**: ogni $a\in\mathbb R$ è sostituito da $\bar a\in\mathbb F$ con $\frac{|a-\bar a|}{|a|}<\varepsilon$, $|\varepsilon|\le\varepsilon_m$, dove $\mathbb F=\{a\in\mathbb R:\ a=(-1)^s0.a_1a_2\dots a_t\cdot N^q,\ 0\le a_i<N,\ a_1\ne0,\ L\le q\le U,\ s\in\{0,1\}\}\cup\{0\}$. Da qui la necessità delle tolleranze nei confronti. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1, scansione letta visivamente).

## Prerequisiti
- [[Rappresentazione floating-point]]: mantissa ed esponente con spazio limitato

## Porta a
- [[Underflow e overflow]]: limiti L e U dell'esponente
- [[Precisione di macchina]]: arrotondamento a un numero di macchina

## Collegati
- [[Confronto tra numeri floating point]]: insieme finito, non tutti i reali sono rappresentabili esattamente
