---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["minimal polynomial", "polinomio minimo di un elemento algebrico", "elemento algebrico", "algebraic element", "elemento trascendente", "transcendental element"]
tags: [competenza, area/algebra-geometria]
---

# Polinomio minimo

> Il polinomio monico di grado minimo che si annulla in un elemento algebrico $s$. È irriducibile, e genera l'ideale di tutti i polinomi che si annullano in $s$.

## Definizione / enunciato
Siano $K\subseteq F$ campi e $s\in F$.

**Def. 8.** $s$ è **algebrico** su $K$ se è radice di un polinomio non nullo di $K[x]$, altrimenti è **trascendente**.

**Oss. 9.** Se $s$ è algebrico, $I=\{f\in K[x]\mid f(s)=0\}$ è un ideale di $K[x]$. Poiché $K[x]$ è un PID, $I=(p(x))$ con $p$ di grado minimo in $I$, che si può prendere monico.

**Def. 10.** Questo $p$ si chiama **polinomio minimo** di $s$ su $K$.

**Prop. 11.** Il polinomio minimo è irriducibile in $K[x]$.

## Formule chiave
$$\{f\in K[x]\mid f(s)=0\}=(p(x)),\qquad K[x]/(p(x))\simeq K[s]$$

## Intuizione
Prop. 11: $K[x]/(p)$ è isomorfo a $K[s]\subseteq F$, che è un dominio perché sta dentro un campo. Allora $(p)$ è primo, e quindi $p$ è irriducibile. Se $p=gh$, uno tra $g(s)$ e $h(s)$ sarebbe nullo con grado più piccolo di $p$.

## Come si usa
Ricetta:
1. si trova un polinomio razionale che si annulla in $s$, eliminando i radicali;
2. si dimostra che è irriducibile, oppure si verifica che $s$ non ha grado più basso.

**Esempi svolti a lezione:**
- **$1-\sqrt2$ su $\mathbb Q$** (dispense, p. 11). Non è razionale, quindi ha grado $\ge2$. Il polinomio minimo è $(x-(1+\sqrt2))(x-(1-\sqrt2))=x^2-2x-1$. Nel testo l'elemento compare come $1-\alpha^2$ con $\alpha^2=\sqrt2$, indice della radice da verificare sul PDF.
- **$\sqrt3+\sqrt7$ su $\mathbb Q$** (pp. 12-13). Da $\alpha^2=10+2\sqrt{21}$ e $(\alpha^2-10)^2=84$ si ottiene $p(x)=x^4-20x^2+16$.
  - È irriducibile su $\mathbb Q$: non ha radici razionali e non è un prodotto di due quadratici razionali.
  - Su $\mathbb R$ invece si spezza come $(x^2-\alpha_1)(x^2-\alpha_2)$, con $\alpha_{1,2}=10\pm2\sqrt{21}$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 33/34. Fonti: `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 9-13).

## Prerequisiti
- [[Estensione di campi]]: $s$ sta in un'estensione di $K$
- [[Dominio a ideali principali]]: l'ideale degli annullatori è principale
- [[Polinomio irriducibile]]: il polinomio minimo è irriducibile

## Porta a
- [[Estensione semplice]]: $[K(s):K]=\deg p$

## Collegati
