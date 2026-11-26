---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["extendability of solutions", "soluzione globale", "global solution", "funzione sublineare", "crescita sublineare", "esistenza globale"]
tags: [competenza, area/analisi]
---

# Prolungabilità delle soluzioni

> Se $f$ cresce al più linearmente in $x$, la soluzione locale data dal teorema di Cauchy si prolunga a tutto l'intervallo $I$ dei tempi.

## Definizione / enunciato
**Def. (sublinearità).** $f:I\times\mathbb R^n\to\mathbb R^n$ è **sublineare** se esistono $a,b:I\to\mathbb R$ con (i) $a,b\in C^0(I)$, (ii) $a(t),b(t)\ge0$, tali che
$$\|f(t,x)\|\le a(t)\|x\|+b(t)\qquad\forall t\in I,\ \forall x\in\mathbb R^n .$$
Per $n=1$: $|f(t,x)|\le a(t)|x|+b(t)$, cioè il grafico di $|f|$ sta sotto una "V" di pendenza $a(t)$.
**Teorema.** Valgano le ipotesi del teorema di Cauchy su $I\times\mathbb R^n$ (cioè con $J=\mathbb R^n$) e sia $f$ sublineare in $I\times\mathbb R^n$. Allora la soluzione del problema di Cauchy è definita su tutto $I$ e si chiama **soluzione globale**.

## Formule chiave
- Se $I=\mathbb R$ e la soluzione è globale, $x(t)$ è definita per ogni $t\in\mathbb R$.
- Le condizioni sono **sufficienti ma non necessarie**.

## Intuizione
Il teorema di Cauchy dà la soluzione solo in $(t_0-\delta,t_0+\delta)$, con $\delta$ legato a $M=\sup\|f\|$ su un rettangolo. Una crescita al più lineare impedisce alla soluzione di "esplodere" in tempo finito, e così la si può prolungare indefinitamente.

## Come si usa
Applicazione principale: il sistema lineare $\dot x=Ax$ soddisfa tutte le ipotesi di Cauchy ed è sublineare (con $a=\|A\|$, $b=0$: esplicitazione nostra), quindi ha sempre un'unica soluzione definita globalmente per ogni $t\in\mathbb R$ (L04 p. 1).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/03 - Lezione 06_10_23.pdf` (pp. 1-2); `triennale/ANNO 3/eq fisica matematica/04 - Lezione 10_10_23.pdf` (p. 1). Teorema enunciato senza dimostrazione.

## Prerequisiti
- [[Teorema di esistenza e unicità locale]]: fornisce la soluzione locale da prolungare

## Porta a
- [[Sistemi lineari di ODE a coefficienti costanti]]: Ax è sublineare, quindi la soluzione è globale
