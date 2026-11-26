---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Shamir secret sharing, secret sharing, schema a soglia, threshold scheme, schema (m n), ombre, shadows, schema a soglia per gruppi]
tags: [competenza, area/informatica]
---

# Schema a soglia di Shamir

> Divide un segreto $M$ in $n$ ombre in modo che **$m$ qualsiasi** lo ricostruiscano e meno di $m$ non bastino. Si basa sull'interpolazione polinomiale in $\mathbb Z_p$.

## Definizione / enunciato
**Schema $(m,n)$** (A. Shamir, *How to share a secret*, 1979):
1. si sceglie e si rende pubblico un primo $p$ più grande di ogni segreto possibile;
2. si genera un polinomio casuale di grado $m-1$ con termine noto $M$:
$$F(x)=M+a_1x+a_2x^2+\dots+a_{m-1}x^{m-1}\in\mathbb Z_p[x];$$
3. si fissano e si pubblicano $n$ punti distinti $x_1,\dots,x_n\in\mathbb Z_p$ e si calcolano le **ombre**
$$(x_i,y_i),\qquad y_i=F(x_i)\bmod p,\quad i=1,\dots,n;$$
4. si cancellano i coefficienti e si consegna un'ombra a ciascuna persona.

## Formule chiave
Con $m$ ombre si ha un sistema lineare quadrato in $\mathbb Z_p$ nelle incognite $M,a_1,\dots,a_{m-1}$. La sua matrice è di Vandermonde, con determinante
$$\prod_{i>j}(x_i-x_j)\not\equiv 0\pmod p.$$
È non nullo perché gli $x_i$ sono distinti in $\mathbb Z_p$. La soluzione è quindi unica, e la sua prima componente è il segreto $M$.

## Intuizione
Un polinomio di grado $m-1$ è determinato da $m$ punti. Con $m-1$ punti, ogni valore del termine noto resta possibile.

## Come si usa
- **Gerarchie:** si danno più ombre alle persone più importanti.
- **Schema per gruppi:** con due gruppi ostili si pone $M=M_AM_B$ e si costruiscono due polinomi $F_A$, $F_B$ con termini noti $M_A$, $M_B$. In generale $M=\prod_{i=1}^n M_i$, con un polinomio per gruppo.
- **Secret broadcasting** con soglia $(m+a+1,\,2m+a+1)$ per nascondere il numero di destinatari (vedi [[Secret splitting]]).

## Nei corsi
- **Crittografia** (magistrale): slide di Bazzanella "Protocolli di base 2". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto11.pdf` (pp. 10-16, 22).

## Prerequisiti
- [[Interpolazione polinomiale]]: esistenza e unicità del polinomio per $m$ punti
- [[Classi di resto modulo n]]: si calcola in $\mathbb Z_p$, campo per $p$ primo
- [[Secret splitting]]: caso "tutti o nessuno" che lo schema generalizza

## Porta a
- [[Schema di Blakley]]: le soglie si costruiscono anche nella versione geometrica

## Collegati
- [[Rappresentazione di Lagrange]]: modo alternativo di ricostruire $F(0)=M$
- [[Teorema di Rouché-Capelli]]: unicità della soluzione del sistema quadrato
