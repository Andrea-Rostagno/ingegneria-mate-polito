---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Informatica, Metodi numerici, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["machine precision", "unit roundoff", "epsilon di macchina", "rounding to even", "arrotondamento al pari", "errore di arrotondamento"]
tags: [competenza, area/numerica]
---

# Precisione di macchina

> Massimo errore relativo commesso arrotondando un reale al numero di macchina più vicino: $\varepsilon_m=\tfrac12N^{1-t}$.

## Definizione / enunciato
**Arrotondamento "rounding to even".** La mantissa $p$ viene sostituita dalla mantissa di macchina $\bar p$ più vicina; se $p$ è equidistante da due mantisse consecutive $\bar p_1=0.a_1\dots a_t$ e $\bar p_2=\bar p_1+N^{-t}$, si sceglie quella con l'ultima cifra pari. Operativamente: si somma $\tfrac12N^{-t}$ a $p$ e si tronca alla $t$-esima cifra (salvo il caso di equidistanza). Il numero di macchina associato ad $a$ è $\bar a=(-1)^s\bar p N^q$.

L'errore che si commette sostituendo $a$ con $\bar a$ è l'**errore di arrotondamento**. Si definiscono
$$\text{eps}=N^{1-t}\ \ (\text{epsilon di macchina}),\qquad \varepsilon_m=\tfrac12N^{1-t}\ \ (\text{precisione di macchina}).$$

## Formule chiave
$$|p-\bar p|\le\tfrac12N^{-t},\qquad |a-\bar a|\le\tfrac12N^{q-t},\qquad \frac{|a-\bar a|}{|a|}\le\tfrac12N^{1-t}=\varepsilon_m$$
$$\bar a=a(1+\varepsilon),\qquad|\varepsilon|\le\varepsilon_m$$

## Intuizione
L'errore assoluto dipende dall'esponente $q$, quello relativo no: grazie a $p\ge N^{-1}$ (normalizzazione) il rapporto è limitato da una costante della sola aritmetica. Per questo $\varepsilon_m$ caratterizza un sistema floating-point ed è la massima precisione relativa raggiungibile: non ha senso chiedere approssimazioni più accurate di $\varepsilon_m$.

## Come si usa
Esempi con $N=10$, $t=3$: $p=0.15814\to0.158$; $0.1585432\to0.159$; $0.158812\to0.159$; $0.1585\to0.158$ (equidistante, ultima cifra pari); $0.1595\to0.160$. In IEEE doppia precisione (Matlab) $\text{eps}\approx2.2\cdot10^{-16}$ e $\varepsilon_m\approx1.1\cdot10^{-16}$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 19-35). La relazione $\bar a=a(1+\varepsilon)$ è il punto di partenza per l'analisi delle operazioni di macchina.
- **Informatica** (triennale): unità P2-P3, lato pratico in Python: `4.35 * 100` stampa `434.99999999999994`, `math.sqrt(2.0)**2` vale `2.0000000000000004`; per questo i float si confrontano con una tolleranza (`EPSILON = 1E-14`) o con `math.isclose`. Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 47), `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 50-53).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): rounding to even (con $N=10$, $t=3$: $0.1585\to0.158$, $0.1595\to0.160$); $\frac{|a-\bar a|}{|a|}\le\frac12N^{1-t}$, eps $=N^{1-t}$, $\varepsilon_m=\frac12N^{1-t}$, $\bar a=a(1+\varepsilon)$ con $|\varepsilon|\le\varepsilon_m$; in Matlab eps $\approx2.2\cdot10^{-16}$, $\varepsilon_m\approx1.1\cdot10^{-16}$. $\varepsilon_m$ è la massima precisione relativa raggiungibile, ed è il limite inferiore per le tolleranze dei metodi iterativi. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 9-11, 16-17).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale, $\varepsilon_m=\frac12N^{1-t}$ con $t$ lunghezza della mantissa, usata per motivare le tolleranze degli algoritmi geometrici; esempio con $t=3$: $\varepsilon_m=\frac12 10^{1-3}=0.005$. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1, scansione letta visivamente).

## Prerequisiti
- [[Numeri di macchina]]: arrotondamento a un numero di macchina
- [[Rappresentazione floating-point]]: la normalizzazione p >= 1/N limita l'errore relativo
- [[Errore assoluto e relativo]]: stima dell'errore relativo di arrotondamento

## Porta a
- [[Operazioni di macchina]]: risultato arrotondato con errore al più eps_m
- [[Stabilità di un algoritmo]]: errore confrontato con eps_m

## Collegati
- [[Confronto tra numeri floating point]]: la tolleranza va scelta in rapporto a eps
