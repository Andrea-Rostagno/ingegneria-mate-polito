---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["successive over-relaxation", "SOR", "metodo di rilassamento", "metodi di rilassamento", "sovrarilassamento", "sottorilassamento", "relaxation method"]
tags: [competenza, area/numerica]
---

# Metodo SOR

> Metodo di rilassamento: la correzione di Gauss-Seidel viene moltiplicata per un parametro $\omega$ scelto per rendere minimo il raggio spettrale della matrice di iterazione.

## Definizione / enunciato
Sottraendo $x_i^{(k-1)}$ nella formula di Gauss-Seidel si ottiene la correzione
$$r_i^{(k-1)}=x_i^{(k)}-x_i^{(k-1)}=\frac{b_i-\sum_{j=1}^{i-1}a_{ij}x_j^{(k)}-\sum_{j=i}^{n}a_{ij}x_j^{(k-1)}}{a_{ii}} .$$
Il **metodo di rilassamento** è $x_i^{(k)}=x_i^{(k-1)}+\omega\,r_i^{(k-1)}$, $\omega\ne0$: **sottorilassamento** se $\omega<1$, **sovrarilassamento** (SOR, *Successive Over Relaxation*) se $\omega>1$, Gauss-Seidel se $\omega=1$.

## Formule chiave
Con $A=L+D+U$ (`D=diag(diag(A))`, `L=tril(A,-1)`, `U=triu(A,1)`):
$$(D+\omega L)\mathbf x^{(k)}=\omega\mathbf b+[(1-\omega)D-\omega U]\mathbf x^{(k-1)},$$
$$B(\omega)=(D+\omega L)^{-1}[(1-\omega)D-\omega U].$$
Converge se e solo se $\rho(B)<1$. Si dimostra che $\rho(B)\ge1$ per $\omega\le0$ o $\omega\ge2$ (nessuna convergenza); se $A$ è simmetrica e definita positiva converge per ogni $0<\omega<2$. In alcuni casi si può determinare $\omega_{\rm opt}$ che minimizza $\rho(B)$.

## Intuizione
Gauss-Seidel indica la direzione della correzione; $\omega$ ne regola l'ampiezza. Spingersi un po' oltre ($\omega>1$) può accelerare molto la convergenza.

## Come si usa
Function `SOR(A,b,x0,omega,tol,kmax)` del corso (file `rilassamento.m`): `x = (D+omega*L)\(omega*b+((1-omega)*D-omega*U)*x0)` con arresto sull'incremento relativo.

## Nei corsi
- **Metodi numerici** (triennale): "metodi di rilassamento". Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 55-59); codice `triennale/ANNO 2/metodi numerici/rilassamento.m`.

## Prerequisiti
- [[Metodo di Gauss-Seidel]]: caso $\omega=1$
- [[Metodo iterativo stazionario]]: convergenza se e solo se $\rho(B)<1$

## Porta a
- Nessuno.

## Collegati
- [[Matrice simmetrica definita positiva]]: convergenza per $0<\omega<2$
- [[Norma spettrale]]: $\omega$ si sceglie per minimizzare il raggio spettrale
