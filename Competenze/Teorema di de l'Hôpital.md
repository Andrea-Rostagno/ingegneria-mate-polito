---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["L'Hôpital's rule", "de l'Hospital", "regola di de l'Hôpital"]
tags: [competenza, area/analisi]
---

# Teorema di de l'Hôpital

> Nelle forme $0/0$ e $\infty/\infty$ il limite di $f/g$ coincide con quello di $f'/g'$, se quest'ultimo esiste.

## Definizione / enunciato
**Teorema 1.8** (Mazzi). Sia $x_0\in\overline{\mathbb R}$ e $B(x_0)$ un suo intorno tali che
- $f,g$ sono definite e derivabili in $B(x_0)\setminus\{x_0\}$;
- $g(x)\ne0$ e $g'(x)\ne0$ in $B(x_0)\setminus\{x_0\}$;
- esiste $\lim_{x\to x_0}\frac{f'(x)}{g'(x)}=\ell\in\overline{\mathbb R}$;
- vale una tra $\lim f=\lim g=0$ e $\lim|f|=\lim|g|=+\infty$.

Allora esiste $\lim_{x\to x_0}\frac{f(x)}{g(x)}=\ell$.

**Caso semplice (prop. 1.8).** Se $f(x_0)=g(x_0)=0$, $f,g$ derivabili in $x_0$ con $g'(x_0)\ne0$, allora $\lim_{x\to x_0}\frac fg=\frac{f'(x_0)}{g'(x_0)}$.

## Formule chiave
$$\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f'(x)}{g'(x)}\quad\text{se il secondo esiste}\qquad\Big[\tfrac00\ \text{o}\ \tfrac\infty\infty\Big]$$

## Intuizione
Vicino a uno zero comune $f\approx f'(x_0)(x-x_0)$ e $g\approx g'(x_0)(x-x_0)$: il rapporto delle funzioni è il rapporto delle pendenze. La dimostrazione usa il teorema di Cauchy.

## Come si usa
Esempio di Mazzi (oss. 1.13): $\lim_{x\to+\infty}\frac{e^x}x=\lim\frac{e^x}1=+\infty$. Se $\lim f'/g'$ non esiste non si conclude nulla: $f(x)=\sin x+x$, $g(x)=3x+\cos x$ per $x\to+\infty$. Esercizio dell'esercitazione 14 (2022-23): calcolare $\lim_{x\to0}\frac{e^{\sin x}-e^x}{x^2}$. Tra le conseguenze c'è il teorema del limite della derivata.

## Nei corsi
- **Analisi 1** (triennale): "teoremi di de l'Hospital e applicazioni alla derivabilità". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.10, prop. 1.8, teor. 1.8, oss. 1.13, pp. 27-29); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.2.18, PDF p. 133); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_14.pdf` (es. 4).

## Prerequisiti
- [[Teorema di Lagrange]]: si usa il teorema di Cauchy
- [[Forme indeterminate]]: risolve 0/0 e ∞/∞

## Porta a
- [[Teorema del limite della derivata]]: applicato al rapporto incrementale

## Collegati
- [[Gerarchia degli infiniti]]: via alternativa per e^x/x
