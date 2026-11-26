---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["inequalities with absolute value", "disequazioni con il modulo", "disequazioni con modulo"]
tags: [competenza, area/analisi]
---

# Disequazioni con valore assoluto

> Una disequazione $|A(x)|\gtrless B(x)$ si risolve spezzando il modulo nei casi $A(x)\ge0$ e $A(x)<0$ e unendo le soluzioni dei due sistemi.

## Definizione / enunciato
Metodo generale per $|A(x)|\gtrless B(x)$: si risolvono i due sistemi e si **uniscono** le soluzioni
$$\begin{cases}A(x)\ge0\\ A(x)\gtrless B(x)\end{cases}\ \cup\ \begin{cases}A(x)<0\\ -[A(x)]\gtrless B(x)\end{cases}$$

## Formule chiave
Le condizioni di ciascun sistema si **intersecano**; i due sistemi si **uniscono**. Estremi: nell'unione "vince" il compreso, nell'intersezione il non compreso.

## Intuizione
Il modulo è una funzione definita a tratti: in ciascun tratto si sostituisce l'espressione esplicita e si risolve una disequazione ordinaria, ricordando di restare nel tratto.

## Come si usa
Lezione 1, es. 4: $x^2+1>2|x+1|$. Si riscrive come $|x+1|<\frac12(x^2+1)$ con $A(x)=x+1$, $B(x)=\frac12(x^2+1)$.
- Sistema 1: $x\ge-1$ e $x^2-2x-1>0$. Le radici sono $1\pm\sqrt2$ (da $\sqrt8=2\sqrt2$); la disequazione vale all'esterno ($>$ stretto, radici escluse). Intersecando: $S_1:\ -1\le x<1-\sqrt2\ \vee\ x>1+\sqrt2$. (Il testo a p. 4 scrive solo il primo intervallo, ma il grafico di $S_1$ e la soluzione finale includono anche $x>1+\sqrt2$.)
- Sistema 2: $x<-1$ e $x^2+2x+3>0$, sempre vera perché $\Delta<0$. $S_2:\ x<-1$.
- Unione: $S:\ x<1-\sqrt2\ \vee\ x>1+\sqrt2$.

Caso particolare (es. 9): $|x^2-8x+16|>0\iff x\ne4$.

## Nei corsi
- **Analisi 1** (triennale): esercitazione 1, correzione del test di ingresso. Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 3-5, 10).

## Prerequisiti
- [[Valore assoluto]]: si spezza il modulo nei due casi
- [[Operazioni sugli insiemi]]: unione delle soluzioni di due sistemi

## Porta a
- Nessuno.

## Collegati
- Nessuno.
