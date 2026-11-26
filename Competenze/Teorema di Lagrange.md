---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["mean value theorem", "teorema del valor medio", "teorema di Cauchy", "seconda formula dell'incremento finito", "punti di Lagrange"]
tags: [competenza, area/analisi]
---

# Teorema di Lagrange

> Per una funzione continua su $[a,b]$ e derivabile in $(a,b)$ esiste un punto interno in cui la tangente è parallela alla corda: $f'(c)=\frac{f(b)-f(a)}{b-a}$.

## Definizione / enunciato
**Teorema 1.3 (di Lagrange o del valor medio)** (Mazzi). Se $f$ è continua su $[a,b]$ e derivabile su $(a,b)$, esiste $c\in(a,b)$ tale che
$$f'(c)=\frac{f(b)-f(a)}{b-a}.$$
I punti che soddisfano la formula si chiamano **punti di Lagrange**.

**Teorema 1.4 (di Cauchy).** Se $f,g$ sono continue su $[a,b]$ e derivabili su $(a,b)$, esiste $c\in(a,b)$ con $[g(b)-g(a)]f'(c)=[f(b)-f(a)]g'(c)$.

**Seconda formula dell'incremento finito** (cor. 1.2). Se $f$ è derivabile su un intervallo aperto $I$ e $x_0\in I$, per ogni $x\in I$ esiste $c(x)$ tra $x_0$ e $x$ con
$$f(x)=f(x_0)+f'(c(x))(x-x_0).$$

## Formule chiave
Dimostrazione: si applica Rolle a $g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a)$, che ha $g(a)=g(b)=f(a)$.

## Intuizione
La velocità media su $[a,b]$ è assunta come velocità istantanea in almeno un istante (oss. 1.7). Rolle è il caso particolare $f(a)=f(b)$.

## Come si usa
È la base di tutti i risultati globali: funzioni a derivata nulla, legame tra monotonia e segno di $f'$, de l'Hôpital (tramite Cauchy), formula di Taylor con resto di Lagrange. Esempi di Mazzi (es. 1.9): $x+\sqrt{1-x^2}$ soddisfa le ipotesi su $[-1,1]$ con unico punto di Lagrange $x=0$; $\sqrt[3]x$ non le soddisfa su $[-1,1]$ (non derivabile in $0$). Esercizi tipo: esercitazione 14 (2022-23, es. 1 e 7).

## Nei corsi
- **Analisi 1** (triennale): "teoremi di Rolle e Lagrange", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.6-1.7, teor. 1.3-1.4, cor. 1.2, es. 1.9, oss. 1.7, pp. 17-19); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.2.3-4.2.4, PDF pp. 127-128).

## Prerequisiti
- [[Teorema di Rolle]]: si applica a g

## Porta a
- [[Funzioni a derivata nulla]]: seconda formula dell'incremento finito
- [[Monotonia e segno della derivata]]: f(x2)-f(x1)=f'(c)(x2-x1)
- [[Teorema di de l'Hôpital]]: si usa il teorema di Cauchy
- [[Formula di Taylor con resto di Lagrange]]: è il caso n=0

## Collegati
- Nessuno.
