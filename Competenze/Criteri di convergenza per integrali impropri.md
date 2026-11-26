---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["convergence tests for improper integrals", "criterio del confronto", "criterio del confronto asintotico", "limit comparison test"]
tags: [competenza, area/analisi]
---

# Criteri di convergenza per integrali impropri

> Per integrande di segno costante, la convergenza si decide confrontando con una funzione nota: direttamente (confronto) o tramite il limite del rapporto (confronto asintotico).

## Definizione / enunciato
Sia $f$ localmente integrabile su $[a,+\infty)$ (caso 1) o su $[a,b)$ (caso 2). Se $f\ge0$ l'integrale improprio converge o diverge positivamente, non oscilla (lezione del 15/12/2021, oss.).

**Criterio del confronto** (lezione del 15/12/2021; Lussardi teor. 4.4.4). Se $0\le f(x)\le g(x)$:
- $\int g$ converge $\Rightarrow\int f$ converge, e $0\le\int f\le\int g$;
- $\int f$ diverge positivamente $\Rightarrow\int g$ diverge positivamente.
Basta che la disuguaglianza valga in un intorno di $+\infty$ (caso 1) o di $b$ (caso 2).

**Criterio del confronto asintotico** (lezione del 15/12/2021, p. 3). Siano $f,g\ge0$ ed esista $\lim_{x\to+\infty}\frac{f(x)}{g(x)}=\omega\in\overline{\mathbb R}$:
- $\omega=0$: $\int g$ conv. $\Rightarrow\int f$ conv.; $\int f$ div. $\Rightarrow\int g$ div.;
- $\omega\in(0,+\infty)$: $\int f$ e $\int g$ hanno lo stesso carattere;
- $\omega=+\infty$: $\int g$ div. $\Rightarrow\int f$ div.; $\int f$ conv. $\Rightarrow\int g$ conv.

Forma con l'ordine (elenco dei teoremi del corso): se $f\ge0$ è infinitesima di ordine $\alpha$ rispetto a $1/x$ per $x\to+\infty$, l'integrale su $[a,+\infty)$ converge se $\alpha>1$ e diverge se $\alpha\le1$.

## Formule chiave
$$f\sim\frac k{x^\alpha}\ (x\to+\infty,\ k>0):\quad\int_a^{+\infty}f\ \text{converge}\iff\alpha>1$$
Morandotti (teor. 5.5.15): $|f(x)|\le A/|x|^\alpha$ con $\alpha>1$ ⇒ convergenza assoluta su $[a,+\infty)$; (teor. 5.5.6) $|f(x)|\le A/|b-x|^\alpha$ con $\alpha<1$ ⇒ convergenza assoluta su $[a,b)$.

## Intuizione
Conta solo come si comporta l'integranda vicino al punto critico, e lì conta solo la sua parte principale: si riduce tutto agli integrali campione $1/x^\alpha$.

## Come si usa
Si calcola la parte principale dell'integranda nel punto improprio e si confronta con $1/x^\alpha$ o $1/(b-x)^\alpha$. Esercizi dell'esercitazione 21 (2022-23): $\int_3^{+\infty}\frac{2x+1}{x^3-x}dx$, $\int_1^{+\infty}\ln\!\left(1+\frac1{x^2}\right)dx$, $\int_0^2\frac{dx}{\sqrt{4-x^2}}$; trovare gli $\alpha$ per cui $\int_0^{+\infty}\frac{\arctan x}{x^\alpha}dx$ converge (due punti impropri, si spezza).

## Nei corsi
- **Analisi 1** (triennale): "criteri di convergenza del confronto e del confronto asintotico". Fonti: `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-15.pdf` (pp. 1-3, lette come immagini); `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (teor. 4.4.4, p. 78); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 5.5.3, 5.5.6, 5.5.12, 5.5.15, PDF pp. 207-212); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_21.pdf`.

## Prerequisiti
- [[Integrale improprio]]: definizione e integrali campione
- [[Ordine di infinitesimo e parte principale]]: confronto con 1/x^α
- [[Funzioni monotone]]: con f≥0 la funzione integrale è crescente

## Porta a
- [[Convergenza assoluta degli integrali impropri]]: si applica il confronto a |f|

## Collegati
- Nessuno.
