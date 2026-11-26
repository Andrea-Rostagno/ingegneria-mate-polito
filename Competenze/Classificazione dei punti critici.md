---
tipo: competenza
area: analisi
corsi: [Analisi 2, Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["second derivative test", "test dell'hessiana", "criterio dell'hessiana", "criterio di Sylvester", "Sylvester's criterion", "test del determinante hessiano"]
tags: [competenza, area/analisi]
---

# Classificazione dei punti critici

> In un punto critico di una $f\in C^2$ il segno degli autovalori dell'hessiana decide tra minimo, massimo e sella, tranne nei casi semidefiniti.

## Definizione / enunciato
**Teorema.** Se $f$ è $C^2$ in un intorno di $P_0$ e $\nabla f(P_0)=0$:
1. $H_f(P_0)$ definita positiva $\Rightarrow$ minimo locale;
2. $H_f(P_0)$ definita negativa $\Rightarrow$ massimo locale;
3. due autovalori di segno opposto $\Rightarrow$ sella;
4. negli altri casi (semidefinita) l'hessiana da sola non decide.

**Caso $n=2$**: $\lambda_1\lambda_2=\det H_f=f_{xx}f_{yy}-f_{xy}^2$, $\lambda_1+\lambda_2=f_{xx}+f_{yy}$, quindi: $\det H_f>0$ e $f_{xx}>0$ minimo; $\det H_f>0$ e $f_{xx}<0$ massimo; $\det H_f<0$ sella; $\det H_f=0$ nessuna conclusione.

**Criterio di Sylvester.** $A\in\mathbb R^{n\times n}$ simmetrica è definita positiva se e solo se sono positivi tutti gli $n$ determinanti dei minori principali di nord-ovest ($1\times1$, $2\times2$, ..., $n\times n$). Per $n>2$ guardare solo $\det$ e traccia è poco significativo.

## Formule chiave
$$H_f=\begin{pmatrix}f_{xx}&f_{xy}\\f_{yx}&f_{yy}\end{pmatrix},\qquad \det H_f=f_{xx}f_{yy}-f_{xy}^2.$$

## Intuizione
Vicino a un punto critico $f(P)-f(P_0)\approx\frac12(P-P_0)^tH_f(P_0)(P-P_0)$: se la forma quadratica ha segno costante comanda lei, se è degenere comandano i termini di ordine superiore.

## Come si usa
- $x^2+y^4$ e $x^2-y^4$ hanno la stessa $H_f(0,0)=\mathrm{diag}(2,0)$ ma la prima ha un minimo e la seconda una sella (il segno di $x^2-y^4$ cambia attorno alle curve $|y|=\sqrt{|x|}$).
- $f=x^3-y^3+3xy$: punti critici $(0,0)$ e $(1,-1)$; $H_f(0,0)=\begin{pmatrix}0&3\\3&0\end{pmatrix}$ ha $\det<0$ (sella), $H_f(1,-1)=\begin{pmatrix}6&3\\3&6\end{pmatrix}$ ha $\det=27>0$ e traccia $12>0$ (minimo).
- $f=2(x^2+y^2+1)-x^4-y^4$: 9 punti critici; per simmetria $(\pm1,\pm1)$ sono massimi, $(\pm1,0)$ e $(0,\pm1)$ selle, $(0,0)$ minimo. Sulla pagina $H_f(0,0)$ è scritta $\mathrm{diag}(12,12)$, mentre dalle derivate $f_{xx}=4-12x^2$ si ottiene $\mathrm{diag}(4,4)$ (calcolo mio; la conclusione non cambia).

## Nei corsi
- **Analisi 2** (triennale): enunciato il 12/10, criterio $2\times2$, esercizi e Sylvester il 17/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 05 2022 taylor II max min.pdf` (pp. 8-9); `triennale/ANNO 2/analisi 2/AII 06 2022 max min chain rule.pdf` (pp. 1-8).
- **Ricerca operativa** (triennale): condizioni di ottimalità del secondo ordine per $\min_{\mathbf x\in\mathbb R^n}f(\mathbf x)$: **necessaria** ($f\in C^2$, $\mathbf x^*$ minimo locale ⇒ $\nabla^2f(\mathbf x^*)\in S^n_+$) e **sufficiente** ($\nabla f(\mathbf x^*)=\mathbf 0$ e $\nabla^2f(\mathbf x^*)\in S^n_{++}$ ⇒ minimo locale). Controesempio della sella di Peano $f=(2x_1^2-x_2)(x_2-x_1^2)$: lungo ogni retta per l'origine $g''(0)=-2m^2<0$ (o $-2$ sulla retta verticale), ma lungo la curva $x_2=\sqrt2x_1^2$ si ha $g(t)=(3\sqrt2-4)t^4>0$, quindi l'origine non è un massimo locale. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 4, 10-11).
- **Numerical opt** (magistrale): "Teorema 2" (necessaria del secondo ordine: $\nabla f(x^*)=0$ e $\nabla^2f(x^*)$ semidefinita positiva) e "Teorema 3" (sufficiente: $\nabla^2f$ continua vicino a $x^*$, $\nabla f(x^*)=0$, $\nabla^2f(x^*)$ definita positiva, quindi minimo locale stretto). Il segno dell'hessiana decide se il modello quadratico del [[Metodo di Newton in ottimizzazione]] ha un minimo. Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 2).

## Prerequisiti
- [[Formula di Taylor in più variabili]]: segno della parte quadratica vicino a P0
- [[Punti critici in più variabili]]: si classificano i punti critici
- [[Matrice simmetrica definita positiva]]: definita positiva e criterio di Sylvester
- [[Autovalori e autovettori]]: segno degli autovalori dell'hessiana

## Porta a
- Nessuno.

## Collegati
- Nessuno.
