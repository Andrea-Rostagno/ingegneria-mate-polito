---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["discontinuity points", "discontinuità eliminabile", "salto", "discontinuità di prima specie", "discontinuità di seconda specie", "singolarità"]
tags: [competenza, area/analisi]
---

# Punti di discontinuità

> Classificazione dei punti in cui una funzione non è continua (o non è definita): eliminabili, di salto (prima specie) e di seconda specie.

## Definizione / enunciato
Sia $A=\operatorname{dom}f$ (Mazzi, def. 1.24-1.26).
- $x_0\in A$ di accumulazione con $\lim_{x\to x_0}f(x)\ne f(x_0)$ (o limite inesistente): **punto di discontinuità**. Se $x_0\notin A$ ma $f$ è definita in un intorno bucato: **singolarità**.
- **Eliminabile**: $\lim_{x\to x_0}f(x)=m\in\mathbb R$ ma $m\ne f(x_0)$ (o $x_0\notin A$). Ridefinendo $\tilde f(x_0)=m$ la funzione diventa continua.
- **Salto (prima specie)**: $\lim_{x\to x_0^+}f=\ell_1$, $\lim_{x\to x_0^-}f=\ell_2$ reali con $\ell_1\ne\ell_2$; $|\ell_1-\ell_2|$ è il salto. Non si può rimediare cambiando il valore in $x_0$.
- **Seconda specie**: tutti gli altri casi (un limite laterale infinito o inesistente).

**Prop. 1.17.** Se $f$ è monotona su un intervallo, i suoi punti di discontinuità interni sono salti (Morandotti teor. 3.2.6: una monotona ha solo discontinuità di prima specie).

## Formule chiave
$$\text{salto}=\Big|\lim_{x\to x_0^+}f(x)-\lim_{x\to x_0^-}f(x)\Big|$$

## Intuizione
Eliminabile: il grafico ha un "buco" o un punto spostato. Salto: due rami che arrivano ad altezze diverse. Seconda specie: almeno da una parte la funzione esplode o oscilla.

## Come si usa
Esempi di Mazzi (es. 1.29-1.30): $\frac{\sin x}x$ ha in $0$ una singolarità eliminabile (limite $1$); $f(x)=x-1$ per $x\le0$, $x+1$ per $x>0$ ha un salto di ampiezza $2$; $[x]$ ha salti in ogni intero; $\operatorname{sgn}x$ è discontinua in $0$; $1/x$ ha in $0$ una singolarità di seconda specie. Lezione del 10/11/2021: $x\sin\frac1x$ (con $f(0)=0$) è continua in $0$.

## Nei corsi
- **Analisi 1** (triennale): "classificazione delle discontinuità" (definizioni sommarie anche in `analisi 1.docx`). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.15.1, def. 1.24-1.27, prop. 1.17, es. 1.29-1.30, pp. 48-51); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 3.2.3, teor. 3.2.6, PDF p. 95).

## Prerequisiti
- [[Funzione continua]]: classifica dove fallisce
- [[Limite di funzione]]: usa i limiti laterali

## Porta a
- Nessuno.

## Collegati
- [[Funzioni monotone]]: le monotone hanno solo salti
