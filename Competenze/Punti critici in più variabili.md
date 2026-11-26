---
tipo: competenza
area: analisi
corsi: [Analisi 2, Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["critical points of functions of several variables", "punti stazionari in più variabili", "punto di sella", "saddle point", "massimo e minimo locale in più variabili", "condizione necessaria del primo ordine"]
tags: [competenza, area/analisi]
---

# Punti critici in più variabili

> Nei punti di massimo o minimo locale interni di una funzione differenziabile il gradiente si annulla; un punto critico può però essere anche una sella.

## Definizione / enunciato
$P_0$ è **punto di minimo (massimo) locale** se esiste un intorno $I_{P_0}$ con $f(P)\ge f(P_0)$ (risp. $\le$) per ogni $P\in I_{P_0}$.

**Teorema.** Se $f$ è differenziabile in $P_0$ e $P_0$ è di massimo o minimo locale, allora $P_0$ è un **punto critico**: $\nabla f(P_0)=(0,\dots,0)$.

Dimostrazione: se fosse $\frac{\partial f}{\partial x_i}(P_0)\ne0$, muovendo solo la $i$-esima coordinata $f$ salirebbe o scenderebbe strettamente (Analisi I).

## Formule chiave
Per $f\in C^1$ i punti critici risolvono il sistema non lineare $\frac{\partial f}{\partial x_1}=0,\dots,\frac{\partial f}{\partial x_n}=0$.

## Intuizione
In un punto critico il piano tangente è orizzontale e ci sono tre scenari: minimo locale, massimo locale, oppure **sella**, cioè in ogni intorno di $P_0$ ci sono punti con $f>f(P_0)$ e punti con $f<f(P_0)$.

## Come si usa
Esempi della lezione: $x^2+y^2$ ha in $(0,0)$ un minimo, $-x^2-y^2$ un massimo, $x^2-y^2$ una sella ($f>0$ attorno all'asse $x$, $f<0$ attorno all'asse $y$). Per gli estremi assoluti su un compatto si combina con il teorema di Weierstrass.

## Nei corsi
- **Analisi 2** (triennale): lezione del 12/10/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 05 2022 taylor II max min.pdf` (pp. 5-8).
- **Ricerca operativa** (triennale): "condizione necessaria del primo ordine" per il problema non vincolato $\min_{\mathbf x\in\mathbb R^n}f(\mathbf x)$: se $f\in C^1$ e $\mathbf x^*$ è minimo locale, $\nabla f(\mathbf x^*)=\mathbf 0_n$; definizioni di minimo globale, locale e stretto ($\mathbf x^*\in\arg\min f$, intorno $N_\epsilon(\mathbf x^*)$). La condizione è solo necessaria; diventa necessaria e sufficiente per l'ottimalità globale nel caso convesso differenziabile. Il sistema $\nabla f=\mathbf 0$ è in generale non lineare e non si risolve direttamente: si usano metodi iterativi di discesa. Controesempio: $\min_{x\in\mathbb R}e^x$, convessa e differenziabile, senza minimo. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 3-4, 7).
- **Numerical opt** (magistrale): "Teorema 1" (condizione necessaria del primo ordine) per $\min_{x\in\mathbb R^n}f(x)$ con $f\in C^1$ vicino a $x^*$: un minimo locale è stazionario, $\nabla f(x^*)=0$. Nel caso vincolato su un convesso diventa $\nabla f(x^*)^T(x-x^*)\ge0$ (vedi [[Condizione di ottimalità su insieme convesso]]). Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 1).

## Prerequisiti
- [[Differenziabilità in più variabili]]: ipotesi del teorema sui punti critici
- [[Gradiente]]: punto critico: ∇f(P0)=0
- [[Teorema di Fermat]]: analogo in una variabile

## Porta a
- [[Classificazione dei punti critici]]: natura dei punti critici

## Collegati
- [[Punti di estremo locale]]: massimi e minimi locali in una variabile
- [[Teorema di Weierstrass]]: estremi assoluti su un compatto
- [[Serie di Fourier]]: minimo dello scarto quadratico con derivate parziali nulle
