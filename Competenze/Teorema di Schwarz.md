---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["Schwarz's theorem", "Clairaut's theorem", "simmetria delle derivate seconde", "derivate miste", "teorema di Schwarz sulle derivate miste"]
tags: [competenza, area/analisi]
---

# Teorema di Schwarz

> Se le derivate seconde miste sono continue, l'ordine di derivazione non conta: $f_{xy}=f_{yx}$.

## Definizione / enunciato
**Teorema (Schwarz).** Se $f(x_1,\dots,x_n)$ ammette le derivate seconde $\frac{\partial^2f}{\partial x_i\partial x_j}$ e $\frac{\partial^2f}{\partial x_j\partial x_i}$ ($i\ne j$) in un intorno di $P_0$, e queste sono continue in $P_0$, allora
$$\frac{\partial^2f}{\partial x_i\partial x_j}(P_0)=\frac{\partial^2f}{\partial x_j\partial x_i}(P_0).$$
**Corollario.** Se $f$ è di classe $C^k$ in un intorno di $P_0$, le derivate fino all'ordine $k$ non dipendono dall'ordine di derivazione ma solo da quante volte si deriva rispetto a ciascuna variabile.

## Formule chiave
Per $f\in C^3$: $f_{xy}=f_{yx}$, $f_{xxy}=f_{xyx}=f_{yxx}$, $f_{xyy}=f_{yxy}=f_{yyx}$.

## Intuizione
Il corollario si ottiene applicando Schwarz alle derivate successive: $f_{xxy}=f_{xyx}$ è Schwarz applicato a $f_x$ (che è $C^2$), mentre $f_{xyx}=f_{yxx}$ si ottiene derivando in $x$ l'uguaglianza $f_{xy}=f_{yx}$. Il docente avverte che nel corso si considerano solo funzioni abbastanza regolari da poter applicare Schwarz.

## Come si usa
- Riduce il numero di derivate da calcolare (per $f=x^2e^{2y+3x}$ si trova $f_{xy}=f_{yx}=(4x+6x^2)e^{2y+3x}$, "e non è un caso").
- Rende simmetrica la matrice hessiana.
- Dà la condizione necessaria per i campi conservativi: $F=(1,2x)$ non è un gradiente, perché avrebbe $f_{xy}=2\ne0=f_{yx}$.

## Nei corsi
- **Analisi 2** (triennale): lezione del 10/10/2022, ripreso per l'hessiana e per i campi irrotazionali. Fonti: `triennale/ANNO 2/analisi 2/AII 04 2022 differenziabilita e derivate successive.pdf` (pp. 12-16); `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 12-14).

## Prerequisiti
- [[Derivate parziali]]: derivate parziali seconde miste

## Porta a
- [[Formula di Taylor in più variabili]]: simmetria della matrice hessiana
- [[Campo irrotazionale]]: dimostrazione della condizione necessaria

## Collegati
- Nessuno.
