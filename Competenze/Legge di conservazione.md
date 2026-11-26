---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["conservation law", "legge di conservazione scalare", "relazione costitutiva", "funzione di flusso", "equazione di Burgers", "Burgers equation", "equazione del traffico", "flusso convesso", "flusso concavo"]
tags: [competenza, area/analisi]
---

# Legge di conservazione

> Equazione $\partial_tu+\mathrm{div}F=0$ che esprime che la quantità totale di $u$ in ogni regione cambia solo per il flusso attraverso il bordo.

## Definizione / enunciato
$u$ è **conservata localmente** in $\Omega\subseteq\mathbb R^n$ se per ogni $B\subseteq\Omega$
$$\frac{d}{dt}\int_Bu(x,t)\,dx=-\int_{\partial B}F\cdot n\,d\sigma,$$
con $F(x,t)$ vettore flusso e $n$ normale uscente. Con il teorema di Gauss e l'arbitrarietà di $B$ (per $u,F\in C^1$) si ottiene la **forma puntuale**
$$\partial_tu+\mathrm{div}F=0\quad\text{in }\Omega\times(0,+\infty).$$
Con una **relazione costitutiva** $F=F(u)$: $\partial_tu+\mathrm{div}\,F(u)=0$, in generale non lineare. In 1D: $\partial_tu+\partial_xf(u)=0$, $f\in C^1$ funzione di flusso; per $u$ regolare $\partial_tu+f'(u)\partial_xu=0$, un trasporto con velocità dipendente da $u$.

## Formule chiave
Prototipi (L16 p. 4):
- **Burgers** (flusso convesso): $f(u)=\frac{u^2}2$, $\partial_tu+u\,\partial_xu=0$; $u$ = velocità di un fluido.
- **Traffico** (flusso concavo): $f(u)=u(1-u)$, $\partial_tu+(1-2u)\partial_xu=0$; $u$ = densità di auto.
- **Calore** (L27 p. 4): $\partial_tu-D\Delta u=0$ è $\partial_tu+\mathrm{div}F=0$ con $F=-D\nabla u$.

## Intuizione
La forma integrale è quella fisica e resta valida anche per $u$ discontinua; la forma puntuale richiede regolarità. Per questo, quando le caratteristiche si incrociano, si torna a una forma integrale (soluzione debole).

## Come si usa
Si riconosce il flusso $f$, se ne studia la concavità ($f''>0$, $f''<0$ o flesso) e si applica il metodo delle caratteristiche; per un dato a gradino si risolve il problema di Riemann. Per la diffusione, la condizione di flusso nullo $F\cdot n=0$ diventa la condizione di Neumann $\partial u/\partial n=0$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/15 - Lezione 10_11_23.pdf` (pp. 1-3); `triennale/ANNO 3/eq fisica matematica/16 - Lezione 14_11_23 (2).pdf` (pp. 3-4); `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (p. 4).

## Prerequisiti
- [[Equazione alle derivate parziali]]: è una PDE del primo ordine, in genere non lineare
- [[Teorema della divergenza]]: passaggio dalla forma integrale a quella puntuale

## Porta a
- [[Problema di Riemann]]: problema di Cauchy con dato a gradino
- [[Equazione del calore]]: è una legge di conservazione con F = −D∇u
- [[Equazione del calore su un dominio limitato]]: flusso nullo al bordo dà Neumann omogeneo

## Collegati
- [[Metodo delle caratteristiche]]: f'(u) è la velocità delle caratteristiche
- [[Soluzione debole di una legge di conservazione]]: forma integrale con funzioni test
- [[Equazione di continuità]]: stesso bilancio per la massa di un fluido
- [[Equazione di continuità della carica]]: stesso bilancio per la carica elettrica
