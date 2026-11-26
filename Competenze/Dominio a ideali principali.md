---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["principal ideal domain", "PID", "anello a ideali principali", "dominio euclideo", "Euclidean domain", "valutazione euclidea", "Euclidean function"]
tags: [competenza, area/algebra-geometria]
---

# Dominio a ideali principali

> Un dominio di integrità in cui ogni ideale è generato da un solo elemento. Esempi: $\mathbb Z$ e $K[x]$ con $K$ campo. Non lo sono invece $\mathbb Z[x]$ e $\mathbb R[x,y]$.

## Definizione / enunciato
**Def. 7.** Un anello è **a ideali principali** se tutti i suoi ideali sono principali, cioè della forma $(x)$. Un dominio di integrità a ideali principali si chiama **PID**.

**Def. 14 (dominio euclideo).** Un dominio $A$ è **euclideo** se esiste $\delta:A\setminus\{0\}\to\mathbb N$ tale che per ogni $a$ e ogni $b\neq0$ esistono $q,r$ con
$$a=qb+r,\qquad r=0\ \text{oppure}\ \delta(r)<\delta(b).$$

Risultati:
- **Esempi:** $\mathbb Z$ è euclideo con $\delta(z)=|z|$, e $K[x]$ è euclideo con $\delta=\deg$ (Teor. 13, Oss. 15).
- **Oss. 18:** ogni dominio euclideo è un PID.
- **Teor. 17:** se $K$ è un campo, $K[x]$ è un PID.
- In $\mathbb Z$ gli ideali sono tutti e soli gli $(n)=n\mathbb Z$.
- **Teor. A:** in un PID, $a$ è irriducibile $\iff(a)$ è primo.
- **Teor. B:** in un PID, ogni ideale primo $I\neq(0)$ è massimale.

## Formule chiave
$$I\neq(0)\ \text{ideale di}\ K[x]\ \Rightarrow\ I=(f),\quad f\in I\ \text{di grado minimo}$$

## Intuizione
- In $K[x]$, il polinomio non nullo di grado minimo in $I$ divide tutti gli altri.
- Se $g=fq+r$, allora $r=g-fq\in I$ ha grado minore, e per la minimalità $r=0$.

È la stessa dimostrazione che i sottogruppi di $\mathbb Z$ sono gli $n\mathbb Z$, con il grado al posto del valore assoluto.

## Come si usa
- **$\mathbb Z[x]$ non è un PID:** $I=\{p\mid a_0\text{ pari}\}=(2,x)$ è il nucleo della mappa $\mathbb Z[x]\to\mathbb Z_2$, $p\mapsto\bar a_0$. Se fosse $(2,x)=(a)$, allora $a\mid2$ e $a\mid x$, quindi $a=\pm1$ e $(a)=\mathbb Z[x]$: assurdo.
- **Polinomio minimo:** in un PID l'ideale dei polinomi che si annullano in $s$ è $(p)$.
- **Massimalità:** in $K[x]$, $p$ irriducibile implica $(p)$ primo (Teor. A), quindi massimale (Teor. B), quindi $K[x]/(p)$ è un campo.

## Nei corsi
- **Istituzioni algebra** (triennale): definizione nelle lezioni 20-21, dominio euclideo e $K[x]$ nelle 28-29. Fonti: `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, p. 6); `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 9-11, 18); `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, p. 2).

## Prerequisiti
- [[Ideale]]: ideali principali
- [[Dominio di integrità]]: un PID è un dominio
- [[Divisione tra polinomi]]: $K[x]$ è euclideo, quindi PID

## Porta a
- [[Ideali primi e massimali]]: nei PID i primi non nulli sono massimali
- [[Polinomio irriducibile]]: $(p)$ massimale se e solo se $p$ è irriducibile
- [[Polinomio minimo]]: l'ideale degli annullatori è principale

## Collegati
- [[Gruppo ciclico]]: i sottogruppi di $\mathbb Z$ sono $n\mathbb Z$, stessa dimostrazione
