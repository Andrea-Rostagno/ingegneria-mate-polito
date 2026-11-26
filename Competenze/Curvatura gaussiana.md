---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Gaussian curvature", "curvatura totale", "total curvature", "K = det(-N_*)", "punto ellittico", "punto iperbolico", "punto parabolico", "elliptic point", "hyperbolic point", "parabolic point"]
tags: [competenza, area/algebra-geometria]
---

# Curvatura gaussiana

> $K=\det(-N_*)=k_1k_2$. È positiva sulla sfera, nulla su piano e cilindro, negativa sulle superfici "a sella". Si calcola come $\frac{LN-M^2}{EG-F^2}$.

## Definizione / enunciato
La **curvatura gaussiana** (o totale) è $K=\det(-N_*)$, ed è una funzione su $S$. Poiché $(-N_*)=g_S^{-1}b_S$:
$$K=\frac{\det b_S}{\det g_S}=\frac{LN-M^2}{EG-F^2}.$$

**Classificazione dei punti:**
- ellittico: $K>0$;
- parabolico: $K=0$;
- iperbolico: $K<0$.

## Formule chiave
Per il grafico $(u,v,f(u,v))$:
$$K=\frac{f_{uu}f_{vv}-f_{uv}^2}{(1+f_u^2+f_v^2)^2}$$

## Intuizione
$K$ è il fattore con cui la mappa di Gauss deforma le aree. Per il [[Teorema Egregio]] dipende solo dalla prima forma fondamentale. Per questo il cilindro ($K=0$) si srotola su un piano e la calotta sferica ($K>0$) no: è l'esempio con cui si apre il corso (L01 p. 4).

## Come si usa
Esempi della lezione:
- Cilindro: $K=0$.
- Sfera di raggio $r$: $K=\frac1{r^2}$.
- Piano: $K=0$.
- Paraboloide: $K=\frac{4}{(1+4u^2+4v^2)^2}>0$, punti ellittici.
- $P=(u+v,u-v,u^2-v^2)$: $K=-\frac{1}{(1+2u^2+2v^2)^2}<0$, punti iperbolici.
- Toro: $K=\frac{\cos u}{r(R+r\cos u)}$. Il docente ne riporta solo il risultato ("dopo un po' di conti"). Osservazione mia, non scritta a lezione: dal segno di $\cos u$ segue che $K>0$ sulla parte esterna del toro e $K<0$ su quella interna.
- La superficie $\alpha+\frac1KN+vB$ (L23, esempio da compito) ha $K=0$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 8-10, 15);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (pp. 9, 11, 13);
  - `triennale/ANNO 2/geometria differenziale/Lezione23_GD.pdf` (pp. 4, 9-10, 23);
  - `triennale/ANNO 2/geometria differenziale/Lezione27_GD.pdf` (pp. 10, 12);
  - `triennale/ANNO 2/geometria differenziale/Lezione01_GD.pdf` (pp. 4-6).

## Prerequisiti
- [[Operatore forma]]: K è il suo determinante
- [[Invarianti di un endomorfismo]]: det(-N_*) = det b/det g
- [[Prima forma fondamentale]]: denominatore EG − F²
- [[Seconda forma fondamentale]]: numeratore LN − M²

## Porta a
- [[Teorema Egregio]]: K è un invariante isometrico
- [[Teorema di Gauss-Bonnet]]: l'integrale di K è 2πχ(S)

## Collegati
- [[Curvatura media]]: l'altro invariante di -N_*
- [[Curvature principali]]: K = k₁k₂
- [[Caratteristica di Eulero]]: legata all'integrale di K da Gauss-Bonnet
