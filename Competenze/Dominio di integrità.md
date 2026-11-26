---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["integral domain", "dominio d'integrità", "divisori dello zero", "zero divisors", "legge di semplificazione per il prodotto", "cancellation law"]
tags: [competenza, area/algebra-geometria]
---

# Dominio di integrità

> Un anello commutativo con unità in cui un prodotto è nullo solo se lo è un fattore. Equivale a poter semplificare i fattori non nulli.

## Definizione / enunciato
**Def. 10.** $a,b\in A$ sono **divisori dello zero** se $a\neq0$, $b\neq0$ e $ab=0$ (oppure $ba=0$). Un anello commutativo con unità privo di divisori dello zero è un **dominio di integrità**.

Risultati:
- **Prop. 11:** $A$ è un dominio $\iff$ vale la semplificazione per il prodotto, cioè $a\neq0$ e $ab=ac$ implicano $b=c$.
- **Cor. 13:** ogni campo è un dominio di integrità.
- **Prop. 15:** la caratteristica di un dominio è $0$ o un numero primo.
- **Prop. 9 (lezioni 28-29):** se $A$ è un dominio, lo è anche $A[x]$.
- **Cor. 6 (lezione 24):** $A$ è un dominio $\iff(0)$ è un ideale primo.

## Formule chiave
$$ab=0\ \Rightarrow\ a=0\ \vee\ b=0\qquad\iff\qquad (a\neq0,\ ab=ac\Rightarrow b=c)$$

## Intuizione
- Se $ab=ac$ con $a\neq0$, allora $a(b-c)=0$, e senza divisori dello zero $b=c$.
- Viceversa, $ab=0=a\cdot0$ e la semplificazione dà $b=0$.

In un campo la semplificazione segue dall'esistenza di $a^{-1}$. In un dominio vale anche senza inversi: è il caso di $\mathbb Z$.

## Come si usa
Esempi delle lezioni:
- $\mathbb Z$ è un dominio ma non un campo;
- $\mathbb Z_n$ è un dominio $\iff n$ è primo. In $\mathbb Z_6$, $\bar2\cdot\bar3=\bar0$, e i divisori dello zero sono le classi $\bar a$ con $\mathrm{MCD}(6,a)\neq1$;
- in $M(2,\mathbb R)$, $\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}\alpha&0\\0&0\end{pmatrix}=0$, mentre il prodotto nell'ordine opposto non è nullo;
- $\mathbb R^{\mathbb R}$ non è un dominio: si prendono $f=x$ per $x\ge0$, $0$ altrimenti, e $g=x$ per $x\le0$, $0$ altrimenti. Entrambe sono continue e non nulle, e $fg=0$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 17-18, ripreso nelle lezioni 24 e 28-29. Fonti: `triennale/ANNO 2/istituzioni/Alg-02-10-22-1.pdf` (lezioni 17-18, pp. 9-13); `triennale/ANNO 2/istituzioni/Alg-28-12-22.pdf` (lezione 24 del 28/11/22, pp. 5-6); `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 4-5).

## Prerequisiti
- [[Anello]]: un dominio è un anello commutativo con unità

## Porta a
- [[Caratteristica di un anello]]: in un dominio la caratteristica è $0$ o un primo
- [[Ideali primi e massimali]]: $I$ è primo se e solo se $A/I$ è un dominio
- [[Dominio a ideali principali]]: PID è un dominio con ideali tutti principali
- [[Anello dei polinomi]]: $A$ dominio implica $A[x]$ dominio

## Collegati
- [[Campo (struttura algebrica)]]: ogni campo è un dominio
- [[Classi di resto modulo n]]: $\mathbb Z_n$ è un dominio se e solo se $n$ è primo
