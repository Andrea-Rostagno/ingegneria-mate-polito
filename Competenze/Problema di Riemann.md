---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Riemann problem", "dato a gradino", "problema di Riemann per una legge di conservazione"]
tags: [competenza, area/analisi]
---

# Problema di Riemann

> Problema di Cauchy per una legge di conservazione con dato iniziale costante a tratti con un solo salto; la sua soluzione è un'onda d'urto o un'onda di rarefazione, a seconda di come si dispongono le caratteristiche.

## Definizione / enunciato
**Def. (L17 p. 1).** Data $\partial_tu+\partial_xf(u)=0$, il problema di Riemann è
$$\begin{cases}\partial_tu+\partial_xf(u)=0&\text{in }Q=\mathbb R\times(0,+\infty)\\ u=u_0&\text{per }x\in\mathbb R,\ t=0\end{cases}\qquad u_0(x)=\begin{cases}u_\ell&x<0\\u_r&x>0\end{cases}$$
con $u_\ell,u_r\in\mathbb R$, $u_\ell\ne u_r$. Ipotesi di lavoro: $f\in C^2(\mathbb R)$ con concavità costante; per fissare le idee $f''>0$, quindi $f'$ strettamente crescente.

## Formule chiave
Caratteristiche: $x=f'(u_\ell)t+x_0$ per $x_0<0$ e $x=f'(u_r)t+x_0$ per $x_0>0$. Con $f''>0$:
- $u_\ell>u_r\Rightarrow f'(u_\ell)>f'(u_r)$: le caratteristiche **si intersecano** → onda d'urto $u=u_\ell$ per $x<st$, $u=u_r$ per $x>st$, con $s=\frac{f(u_r)-f(u_\ell)}{u_r-u_\ell}$;
- $u_\ell<u_r\Rightarrow f'(u_\ell)<f'(u_r)$: resta una regione $D$ **non raggiunta** dalle caratteristiche → si può mettere un urto oppure un'onda di rarefazione.
Con $f''<0$ la situazione è rovesciata (L19 p. 6).

## Intuizione
È il "mattone" delle leggi di conservazione: un solo salto iniziale, e la geometria delle caratteristiche dice se il salto sopravvive (urto) o si apre a ventaglio (rarefazione).

## Come si usa
Si confrontano $f'(u_\ell)$ e $f'(u_r)$, si disegna il diagramma delle caratteristiche, si costruisce la soluzione candidata e la si seleziona con il criterio di entropia. Per Burgers con $u_\ell<u_r$: $u=u_\ell$ per $x\le u_\ell t$, $u=x/t$ per $u_\ell t<x\le u_rt$, $u=u_r$ per $x>u_rt$ (L18 p. 4).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/17 - Lezione 15_11_23 (1).pdf` (pp. 1-2); `triennale/ANNO 3/eq fisica matematica/19 - Lezione 21_11_23.pdf` (pp. 5-6).

## Prerequisiti
- [[Legge di conservazione]]: equazione con dato iniziale a gradino
- [[Metodo delle caratteristiche]]: diagramma delle caratteristiche dei due stati

## Porta a
- [[Onda d'urto]]: soluzione quando le caratteristiche si intersecano
- [[Onda di rarefazione]]: soluzione continua nella regione non raggiunta
