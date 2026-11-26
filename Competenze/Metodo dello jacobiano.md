---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["Jacobian method", "trasformazioni vettoriali", "densità di un vettore trasformato", "C1-diffeomorfismo", "trasformazione lineare di un vettore aleatorio", "change of variables for random vectors"]
tags: [competenza, area/probabilita]
---

# Metodo dello jacobiano

> Se $\mathbf W=g(\mathbf Z)$ con $g$ diffeomorfismo $C^1$, la densità di $\mathbf W$ è $f_{\mathbf Z}(g^{-1}(\mathbf w))\,|\det J_{g^{-1}}(\mathbf w)|$: è il cambio di variabili negli integrali multipli letto sulle densità.

## Definizione / enunciato
$g:A\to\mathbb R^2$ ($A$ aperto) è un **$C^1$-diffeomorfismo** se è $C^1$, invertibile, con determinante jacobiano mai nullo su $A$ e inversa $C^1$.
**Teorema** (senza dimostrazione). $\mathbf Z=(X,Y)$ a.c. con densità $f_{\mathbf Z}$ e $\mathbb P(\mathbf Z\in A)=1$, $A=A_0\cup A_1\cup\dots\cup A_m$ partizione quasi certa ($A_i$ aperti disgiunti, $\mathbf m(A_0)=0$), $g_i=g|_{A_i}$ $C^1$-diffeomorfismi. Allora $\mathbf W=g(\mathbf Z)$ è a.c. con
$$f_{\mathbf W}(\mathbf w)=\sum_{i=1}^mf_{\mathbf Z}(g_i^{-1}(\mathbf w))\,\big|\det J_{g_i^{-1}}(\mathbf w)\big|\,\mathbb 1_{g(A_i)}(\mathbf w).$$

## Formule chiave
Caso lineare $g(\mathbf z)=A\mathbf z+\mathbf b$, $A$ invertibile:
$$f_{A\mathbf Z+\mathbf b}(\mathbf w)=\frac1{|\det A|}f_{\mathbf Z}\big(A^{-1}(\mathbf w-\mathbf b)\big).$$
Per $T=h(X,Y)$ reale: o si usa la funzione di ripartizione $F_T(t)=\int_{h^{-1}((-\infty,t])}f_{(X,Y)}$, o si completa $h$ a un diffeomorfismo $(h(x,y),k(x,y))$ (tipicamente $k=x$ o $k=y$) e si marginalizza $f_T(t)=\int f_{(T,V)}(t,v)dv$.

## Intuizione
$|\det J|$ è il fattore con cui la trasformazione dilata le aree: la densità si divide per esso perché la stessa probabilità si spalma su un'area diversa.

## Come si usa
- $X,Y$ i.i.d. $\mathcal N(0,1)$, $(U,V)=(X+Y,X-Y)$: $\det A=-2$, $f_{(U,V)}(u,v)=\frac1{4\pi}e^{-(u^2+v^2)/4}$, quindi $U,V$ i.i.d. $\mathcal N(0,2)$ (lezione 8).
- $(S,T)=(X+Y,X-Y)$ con $X\sim$ esponenziale simmetrica e $Y\sim U(0,1)$; $(S,T)=(X+Y,\frac X{X+Y})$ con $X,Y$ Gamma, che dà la Beta (lezione 10).
- $X\cdot Y$ con $X,Y$ i.i.d. $U(0,1)$: $f_V(v)=-\log v\,\mathbb 1_{(0,1)}(v)$.

## Nei corsi
- **Prob e statistica** (triennale): lezioni 8-10 ("trasformazioni da $\mathbb R^2$ in $\mathbb R^2$ e in $\mathbb R$"); usato nelle slide per la densità della normale multivariata. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione08(19-10-2023).pdf` (pp. 9-13); `2023Lezione09(20-10-2023).pdf` (pp. 7-8); `2023Lezione10(26-10-2023).pdf` (pp. 3-10); `statistica/Distribuzioni lez1.pdf` (Normale Multivariata X).

## Prerequisiti
- [[Trasformazione di una variabile aleatoria]]: caso unidimensionale
- [[Densità congiunta]]: densità di $\mathbf Z$ e marginalizzazione
- [[Cambiamento di variabili negli integrali multipli]]: stessa formula per gli integrali
- [[Matrice jacobiana]]: determinante jacobiano

## Porta a
- [[Distribuzione Beta]]: $X/(X+Y)$ con $X,Y$ Gamma
- [[Vettore gaussiano]]: densità di $\boldsymbol\mu+A\mathbf X$

## Collegati
- [[Somma di variabili aleatorie indipendenti]]: $g(x,y)=(x,x+y)$ dà la convoluzione
