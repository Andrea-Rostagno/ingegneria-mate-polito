---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Informatica, Metodi numerici]
livello: [triennale]
aliases: ["machine operations", "floating-point arithmetic", "aritmetica di macchina", "equivalenza nell'aritmetica del calcolatore", "non associatività"]
tags: [competenza, area/numerica]
---

# Operazioni di macchina

> Le operazioni aritmetiche eseguite dal calcolatore: risultato esatto arrotondato, commutative ma non associative né distributive.

## Definizione / enunciato
Il risultato di un'operazione tra numeri di macchina non è in genere un numero di macchina. L'**operazione di macchina** $\oplus,\ominus,\otimes,\oslash$ associa a due numeri di macchina l'arrotondamento del risultato esatto: $\bar a_1\oplus\bar a_2=\overline{\bar a_1+\bar a_2}$.

Proprietà: vale la commutativa, ma **in generale non valgono** l'associativa e la distributiva. Inoltre $\bar a_1\oplus\bar a_2=\bar a_1$ quando $|\bar a_2|\ll|\bar a_1|$, in particolare se $|\bar a_2|<|\bar a_1|\,\text{eps}$.

Due espressioni $e_1,e_2$ sono **equivalenti nell'aritmetica del calcolatore** se la loro differenza relativa $|\bar e_1-\bar e_2|/|\bar e_1|$ è dell'ordine di $\varepsilon_m$ o minore.

## Formule chiave
$$\bar a_1\odot\bar a_2=(\bar a_1\cdot\bar a_2)(1+\varepsilon),\qquad|\varepsilon|\le\varepsilon_m,\quad \cdot\in\{+,-,\times,/\}$$

## Intuizione
Ogni singola operazione introduce al più un errore relativo $\varepsilon_m$; il problema nasce quando gli errori si accumulano o vengono amplificati. Leggi algebriche "ovvie" smettono di valere perché ogni passaggio arrotonda in modo diverso.

## Come si usa
Esempio ($N=10$, $t=4$): $0.5823\oplus0.6214=0.1204\cdot10$, mentre la somma esatta $0.12037\cdot10$ non è di macchina. In Matlab `5+1.0e-18` restituisce `5`. Le espressioni $y_1=(1+x)-1$ e $y_2=(1-1)+x$: per $x=0.1$ la differenza relativa è $8.3\cdot10^{-16}$ (equivalenti); per $x=10^{-11}$ è $8.27\cdot10^{-8}$ (non equivalenti: si è verificata cancellazione).

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 36-45).
- **Informatica** (triennale): unità T1: in floating point la somma non è associativa. Esempio delle slide: $x=-1.5\cdot10^{38}$, $y=+1.5\cdot10^{38}$, $z=1.0$ danno $x+(y+z)=0$ ma $(x+y)+z=1$. Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 42).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): $\bar a_1\odot\bar a_2=(\bar a_1\cdot\bar a_2)(1+\varepsilon_\odot)$ con $|\varepsilon_\odot|\le\varepsilon_m$; vale la commutativa ma non, in generale, associativa e distributiva; $\bar a_1\oplus\bar a_2=\bar a_1$ quando $|\bar a_2|<|\bar a_1|\,$eps. Definizione di espressioni equivalenti nell'aritmetica del calcolatore (differenza relativa dell'ordine di $\varepsilon_m$). Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 12-14, 17).

## Prerequisiti
- [[Precisione di macchina]]: risultato arrotondato con errore al più eps_m

## Porta a
- [[Cancellazione numerica]]: sottrazione di macchina di operandi arrotondati

## Collegati
- [[Confronto tra numeri floating point]]: ogni operazione arrotonda il risultato esatto
