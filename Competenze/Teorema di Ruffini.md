---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["factor theorem", "teorema del resto", "radice di un polinomio su un campo", "zero di un polinomio", "radice semplice", "simple root", "al più n radici", "principio di identità dei polinomi"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Ruffini

> $a$ è radice di $f$ se e solo se $x-a$ divide $f$. Ne segue che un polinomio non nullo di grado $n$ su un campo ha al più $n$ radici.

## Definizione / enunciato
**Def. 9.** $a\in K$ è una **radice** (o zero) di $f\in K[x]$ se $f(a)=0$.

**Teorema di Ruffini.** $a$ è radice di $f$ se e solo se $(x-a)\mid f(x)$.

**Def. 10.**
- $a$ è una radice **semplice** se $(x-a)\mid f$ ma $(x-a)^2\nmid f$.
- La **molteplicità** di $a$ è il massimo $m$ con $(x-a)^m\mid f$.

**Prop. 11.** Un polinomio non nullo $f\in K[x]$ di grado $n$ ha al più $n$ radici in $K$, contate con molteplicità.

**Prop. (lezione 30, p. 3, pagina molto degradata).** Per $f\in K[x]$ e $a,\alpha\in K$: $f\equiv\alpha\pmod{x-a}\iff f(a)=\alpha$ (da verificare sul PDF).

## Formule chiave
$$f(x)=q(x)(x-a)+f(a),\qquad \prod_i(x-a_i)^{k_i}\mid f\ \Rightarrow\ \sum_ik_i\le\deg f$$

## Intuizione
- Dividendo $f$ per $x-a$ il resto ha grado $<1$, quindi è una costante $r$. Valutando in $a$ si trova $r=f(a)$.
- Ogni radice stacca un fattore lineare, e i fattori non possono superare il grado.

## Come si usa
- **Serve un campo:** in $\mathbb Z_{15}[x]$ il polinomio $x^2-\bar1$ ha le quattro radici $\bar1$, $\overline{14}$, $\bar4$, $\overline{11}$ (Oss. 12).
- **Principio di identità:** due polinomi di grado $\le n$ che coincidono in $n+1$ punti sono uguali, perché la differenza avrebbe troppe radici. È questo che dà l'unicità del polinomio interpolante.
- **Irriducibilità in grado basso:** per $\deg f\le3$, $f$ è riducibile se e solo se ha una radice. Per esempio $x^3-\bar9\in\mathbb Z_{11}[x]$ ha la radice $\bar4$, e $x^3-\bar9=(x-\bar4)(x^2+\bar4x+\bar5)$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 28-29, ripreso nella 30 come congruenza modulo $x-a$. Fonti: `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 16-20); `triennale/ANNO 2/istituzioni/Alg-12-12-22.pdf` (lezione 30, p. 3).

## Prerequisiti
- [[Divisione tra polinomi]]: divisione per $x-a$ con resto costante

## Porta a
- [[Polinomio irriducibile]]: criterio delle radici per i gradi 2 e 3

## Collegati
- [[Teorema cinese dei resti]]: le congruenze modulo $x-n_i$ sono condizioni di interpolazione
- [[Teorema fondamentale dell'algebra]]: su $\mathbb C$ le radici sono esattamente $n$
- [[Interpolazione polinomiale]]: unicità del polinomio interpolante per il principio di identità
