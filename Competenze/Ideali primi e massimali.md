---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["prime ideal", "maximal ideal", "ideale primo", "ideale massimale", "A/I dominio", "A/M campo"]
tags: [competenza, area/algebra-geometria]
---

# Ideali primi e massimali

> Un ideale è primo se il quoziente è un dominio, e massimale se il quoziente è un campo. Quindi ogni massimale è primo, ma non viceversa.

## Definizione / enunciato
Sia $A$ un anello commutativo con unità.

**Def. 1.**
- Un ideale $M\neq A$ è **massimale** se non è contenuto propriamente in nessun ideale proprio: $M\subseteq I\Rightarrow I=M$ oppure $I=A$.
- Un ideale $P$ è **primo** se $ab\in P\Rightarrow a\in P$ oppure $b\in P$.

**Prop. 2.** Ogni ideale massimale è primo. Se $ab\in M$ e $a\notin M$, allora $M+(a)=A\ni1=ca+m$, e quindi $b=cab+bm\in M$.

**Prop. 4.** Per $I$ ideale proprio:
1. $I$ è primo $\iff A/I$ è un dominio di integrità;
2. $I$ è massimale $\iff A/I$ è un campo.

**Cor. 6.** $A$ è un dominio $\iff(0)$ è primo.

## Formule chiave
$$I\ \text{primo}\iff A/I\ \text{dominio},\qquad M\ \text{massimale}\iff A/M\ \text{campo}$$

## Intuizione
- **Primo:** "$\bar a\bar b=\bar0\Rightarrow\bar a=\bar0$ o $\bar b=\bar0$" è la definizione di ideale primo letta nel quoziente.
- **Massimale:** se $x\notin M$, allora $M+(x)$ è più grande di $M$, quindi è tutto $A$, e $1=m+xy$ dà l'inverso di $\bar x$.

Poiché ogni campo è un dominio, si ritrova che massimale implica primo.

## Come si usa
Esempi delle lezioni:
- **In $\mathbb Z$:** gli ideali primi sono $(0)$ e $(p)$ con $p$ primo, e i massimali sono gli $(p)$.
- **In $\mathbb Z[x]$:** $(x)$ è primo ma non massimale, perché $\mathbb Z[x]/(x)\simeq\mathbb Z$. $(2,x)$ è massimale, perché $\mathbb Z[x]/(2,x)\simeq\mathbb Z_2$.
- **In $\mathbb R[x,y]$:** $(x)$ è primo e non massimale, perché $(x)\subsetneq(x)+(y)\neq\mathbb R[x,y]$.
- **In $\mathbb R[x]$:** $(x)$ è massimale; $(x^2-1)$ non è primo, perché $x^2-1=(x-1)(x+1)$.
- **In un PID:** ogni primo non nullo è massimale, quindi per $p$ irriducibile $K[x]/(p)$ è un campo.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 24 del 28/11/22 (il nome del file dice 28-12). Fonti: `triennale/ANNO 2/istituzioni/Alg-28-12-22.pdf` (lezione 24, pp. 2-9); `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, p. 18).

## Prerequisiti
- [[Ideale]]: definizioni sugli ideali
- [[Anello quoziente]]: la caratterizzazione passa per $A/I$
- [[Dominio di integrità]]: il quoziente per un primo è un dominio
- [[Dominio a ideali principali]]: Teor. B, primo non nullo implica massimale

## Porta a
- [[Polinomio irriducibile]]: $(p)$ massimale e $K[x]/(p)$ campo
- [[Estensione semplice]]: $K[x]/(p)$ è un campo che estende $K$

## Collegati
- [[Campo (struttura algebrica)]]: il quoziente per un massimale è un campo
- [[Teorema fondamentale dell'aritmetica]]: $(n)$ è primo in $\mathbb Z$ se e solo se $n$ è primo
