---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["Eisenstein's criterion", "criterio di Eisenstein", "criterio di riduzione modulo p", "reduction modulo p criterion", "polinomio ciclotomico", "cyclotomic polynomial", "Φ_p"]
tags: [competenza, area/algebra-geometria]
---

# Criterio di Eisenstein

> Se un primo $p$ divide tutti i coefficienti tranne quello direttivo e $p^2$ non divide il termine noto, il polinomio è irriducibile su $\mathbb Q$. Con la riduzione modulo $p$ è lo strumento pratico per dimostrare l'irriducibilità.

## Definizione / enunciato
**Criterio di Eisenstein.** Sia $f=a_0+a_1x+\dots+a_nx^n\in\mathbb Z[x]$ con $n\ge1$ e $a_n\neq0$, e sia $p$ un primo tale che:
1. $p\nmid a_n$;
2. $p\mid a_0,a_1,\dots,a_{n-1}$;
3. $p^2\nmid a_0$.

Allora $f$ è irriducibile in $\mathbb Q[x]$, e se è primitivo è irriducibile anche in $\mathbb Z[x]$.

**Criterio 1 (riduzione modulo $p$).** Sia $f\in\mathbb Z[x]$ primitivo e $p$ un primo che non divide il coefficiente direttivo. Se la riduzione $\bar f\in\mathbb Z_p[x]$ è irriducibile, allora $f$ è irriducibile in $\mathbb Z[x]$ e in $\mathbb Q[x]$.

**Oss. 13.** Il Criterio 1 non si inverte: $x^2+1$ è irriducibile in $\mathbb Z[x]$, ma $x^2+\bar1=(x+\bar2)(x+\bar3)$ in $\mathbb Z_5[x]$.

**Prop. 14.** Per $p$ primo, il polinomio ciclotomico $\Phi_p(x)=x^{p-1}+\dots+x+1$ è irriducibile in $\mathbb Q[x]$.

## Formule chiave
$$x^p-1=(x-1)\Phi_p(x),\qquad (x+1)^p-1=x\,\Phi_p(x+1)=\sum_{i=1}^p\binom pi x^i$$

## Intuizione
Se $f=gh$, modulo $p$ resta $\bar g\bar h=\bar a_nx^n$. Per la fattorizzazione unica in $\mathbb Z_p[x]$ si ha $\bar g=\bar b_kx^k$ e $\bar h=\bar c_{n-k}x^{n-k}$. Allora $p$ divide sia $b_0$ sia $c_0$, e quindi $p^2\mid b_0c_0=a_0$: assurdo.

## Come si usa
**Esempi delle dispense:**
- $x^4+2x+2$ è irriducibile su $\mathbb Q$ per Eisenstein con $p=2$.
- **Riduzione modulo 3:** $f_0=4x^4+6x^3+x^2-3x-4$ si riduce a $x^4+x^2-\bar1$ in $\mathbb Z_3[x]$.
  - Non ha radici: i valori in $\bar0,\bar1,\bar2$ sono $-\bar1,\bar1,\bar1$.
  - Non è un prodotto di due fattori quadratici.
  - Quindi $f_0$ è irriducibile.
- **Ciclotomico:** la sostituzione $x\mapsto x+1$ è un automorfismo di $\mathbb Q[x]$ che conserva l'irriducibilità. $\Phi_p(x+1)$ soddisfa Eisenstein con $p$, perché $p\mid\binom pi$ per $0<i<p$ e il termine noto è $\binom p1=p$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 31/32. Fonti: `triennale/ANNO 2/istituzioni/Alg-13-12-22.pdf` (lezioni 31/32, pp. 17-23).

## Prerequisiti
- [[Lemma di Gauss sui polinomi]]: riduzione al caso primitivo intero
- [[Classi di resto modulo n]]: si lavora in $\mathbb Z_p[x]$
- [[Polinomio irriducibile]]: fattorizzazione unica in $\mathbb Z_p[x]$

## Porta a

## Collegati
