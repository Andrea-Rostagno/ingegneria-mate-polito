---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [recurrence and transience of Brownian motion, comportamento a lungo termine del moto browniano, teorema di Kakutani]
tags: [competenza, area/probabilita]
---

# Ricorrenza e transienza del moto browniano

> Il moto browniano visita ogni palla infinite volte in dimensione 1 e 2, mentre in dimensione $d\ge3$ sfugge a ogni compatto.

## Definizione / enunciato
**Teorema.** Un moto browniano $d$-dimensionale
- in $d=1$ e $d=2$ visita ogni palla infinite volte (ricorrente);
- in $d\ge3$ sfugge a ogni insieme compatto (transiente).

Per $\|x\|_2>A$, la probabilità di entrare prima o poi nella palla di raggio $A$ si ottiene per continuità della misura:
$$P_x(\exists t:\|W_t\|_2\le A)=\lim_{n\to\infty}P_x\big(\|W_t\|_2\text{ tocca }A\text{ prima di }n\big).$$

## Formule chiave
Mandando il raggio esterno $B=n\to\infty$ nelle probabilità di uscita dalla corona:
$$d=1:\ \lim_n\frac{n-x}{n-A}=1,\qquad d=2:\ \lim_n\frac{\log n-\log\|x\|_2}{\log n-\log A}=1,$$
$$d\ge3:\ \lim_n\frac{n^{2-d}-\|x\|_2^{2-d}}{n^{2-d}-A^{2-d}}=\frac{\|x\|_2^{2-d}}{A^{2-d}}<1.$$

## Intuizione
In $d\le2$ la funzione armonica radiale ($r$ o $\log r$) diverge all'infinito, quindi la "fuga" lontanissima ha probabilità trascurabile; in $d\ge3$ la funzione $r^{2-d}$ tende a $0$ e resta una probabilità positiva di non tornare mai. Kakutani: "un ubriaco trova sempre la strada di casa, un uccello ubriaco può perdersi per sempre".

## Come si usa
È l'utilizzo del generatore "per la determinazione del comportamento a lungo termine" richiesto dall'argomento 17: generatore $\frac12\Delta$ → problema di Dirichlet → probabilità di uscita → limite $B\to\infty$. Analogo in tempo discreto della ricorrenza della passeggiata parzialmente riflessa calcolata con le martingale (lezione 19, $\lim_n P_1(T_0<T_n)$). Esercizio G: provare che il browniano non è limitato né dall'alto né dal basso; esercizio N: attraversa infinite volte ogni iperpiano.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 17. Il `.tex` cita solo che hitting e comportamento a lungo termine si traducono in equazioni col generatore. Fonti: `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24), `riassunto_del_corso.tex` §Moto browniano, `topics_2025_26.pdf` (argomento 17), `suggested_exercises_brownian_motion.pdf` (es. G, N).

## Prerequisiti
- [[Probabilità di uscita del moto browniano]]: raggio esterno mandato all'infinito

## Collegati
- [[Ricorrenza della passeggiata aleatoria]]: analogo continuo del teorema di Pólya
