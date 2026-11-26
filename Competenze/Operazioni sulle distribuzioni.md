---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["operations on distributions", "traslazione di una distribuzione", "riscalamento di una distribuzione", "moltiplicazione per una funzione C infinito", "distribuzione pari", "distribuzione dispari"]
tags: [competenza, area/analisi]
---

# Operazioni sulle distribuzioni

> Traslazione, riscalamento e prodotto per una funzione $C^\infty$ si definiscono "per dualità": si guarda cosa succede alle distribuzioni regolari con un cambio di variabile e si sposta l'operazione sulla funzione test.

## Definizione / enunciato
Per $T\in\mathcal D'$, $\varphi\in\mathcal D$:
- **Traslazione** (4.8), $x_0\in\mathbb R$: $\ \langle T(x-x_0),\varphi(x)\rangle=\langle T(x),\varphi(x+x_0)\rangle$.
- **Riscalamento** (4.10), $a\neq0$: $\ \langle T(ax),\varphi(x)\rangle=\big\langle T(x),\tfrac1{|a|}\varphi\big(\tfrac xa\big)\big\rangle$.
- **Moltiplicazione** per $\psi\in C^\infty(\mathbb R)$: $\ \langle\psi T,\varphi\rangle=\langle T,\psi\varphi\rangle$.

Due distribuzioni in generale **non** si possono moltiplicare tra loro: serve $\psi\in C^\infty$ perché $\psi\varphi$ resti una funzione test.

## Formule chiave
Per le regolari le definizioni discendono dal cambio di variabile:
$$\int f(x-x_0)\varphi(x)\,dx=\int f(x)\varphi(x+x_0)\,dx,\qquad \int f(ax)\varphi(x)\,dx=\int f(x)\frac1{|a|}\varphi\Big(\frac xa\Big)dx.$$
Esempio 4.16: $\psi\,\delta_a=\psi(a)\,\delta_a$. Con $a=-1$ si definiscono le distribuzioni pari ($T(-t)=T(t)$) e dispari (Def. 5.41).

## Intuizione
Una distribuzione non ha valori puntuali, quindi "$T(x-x_0)$" non si può calcolare punto per punto: si sposta in senso opposto lo strumento di misura $\varphi$. Le formule sono scelte in modo da coincidere con le operazioni usuali quando $T=T_f$.

## Come si usa
Si combinano con la derivata (Prop. 4.26-4.28): $T(ax+b)'=aT'(ax+b)$ e $(\psi T)'=\psi'T+\psi T'$. Esempio 4.29: $T=(x^2-9)T_{I_{[-2,3]}}$ con $T_{I_{[-2,3]}}=T_{H(x+2)}-T_{H(x-3)}$ si deriva con Leibniz, ottenendo $2xT_{I_{[-2,3]}}$ più i termini $(x^2-9)\delta$ nei punti $-2$ e $3$, che si semplificano con $\psi\delta_a=\psi(a)\delta_a$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.5.1-4.5.3 e Def. 5.41. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 14-17 del PDF); `10 - Derivata distribuzionale e Convergenza.pdf` (Richiami di teoria).

## Prerequisiti
- [[Distribuzione (funzione generalizzata)]]: operazioni definite per dualità

## Porta a
- [[Convoluzione]]: costruita con le traslazioni

## Collegati
- [[Trasformazioni del grafico]]: traslazioni e dilatazioni delle funzioni
