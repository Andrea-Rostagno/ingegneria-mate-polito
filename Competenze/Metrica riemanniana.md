---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Riemannian metric", "metrica su un aperto", "metrica", "coefficienti metrici", "metric coefficients", "g_ij", "metriche isometriche", "isometric metrics", "isometria"]
tags: [competenza, area/algebra-geometria]
---

# Metrica riemanniana

> Una metrica su un aperto assegna a ogni spazio tangente un prodotto scalare che varia col punto. In coordinate si scrive $g=g_{ij}\,dx_i\,dx_j$, per esempio $dr^2+r^2d\varphi^2$. Il docente la chiama semplicemente "metrica".

## Definizione / enunciato
Una **metrica** su un aperto $\Omega\subseteq\mathbb R^n$ è una corrispondenza
$$q\in\Omega\mapsto g_q\in\mathrm{Bil}(T_q\Omega),$$
dove $g_q$ è una metrica, cioè un prodotto scalare simmetrico definito positivo, su $T_q\Omega$. È un campo tensoriale di tipo $(0,2)$.

**Coefficienti metrici:** $g_{ij}=g(\partial_{x_i},\partial_{x_j})$, che sono funzioni su $\Omega$.

**Metrica su una superficie** $S=\mathrm{Im}P$, con $P$ iniettiva: $p\mapsto g_p\in\mathrm{Bil}(T_pS)$. Data $g$ su $\Omega$, la $P^{-1*}(g)$ è una metrica su $S$ con gli stessi coefficienti.

**Metriche isometriche (L21).** $\tilde g$ su $\tilde\Omega$ e $g$ su $\Omega$ sono isometriche se esiste $f:\tilde\Omega\to\Omega$ biunivoca con $\tilde g=f^*(g)$.

## Formule chiave
Per $n=2$:
$$g=g_{11}\,du\odot du+2g_{12}\,du\odot dv+g_{22}\,dv\odot dv=g_{11}du^2+2g_{12}du\,dv+g_{22}dv^2,$$
dove $du\,dv=\tfrac12(du\otimes dv+dv\otimes du)$. In dimensione $n$: $g=g_{ij}\,dx_i\otimes dx_j$.

## Intuizione
La metrica dice come misurare lunghezze e angoli dei vettori tangenti punto per punto. La metrica euclidea in coordinate curvilinee non ha coefficienti costanti, e una metrica può non venire da nessuna immersione evidente.

## Come si usa
Esempi della lezione:
- Metrica standard di $\mathbb R^3$: $dx^2+dy^2+dz^2$, che dà $g(X,Y)=X\cdot Y$.
- In polari, con il pull-back: $dr^2+r^2d\varphi^2$.
- $du^2+dv^2$ e $r^2d\tilde u^2+d\tilde v^2$ (piano e cilindro) sono isometriche tramite $(\tilde u,\tilde v)\mapsto(r\tilde u,\tilde v)$.

Il docente scrive "è una metrica" anche per $x\,dx^2+(y+x)dy^2$ e $r\,dr^2+2r\varphi\,dr\,d\varphi$ (L19 pp. 3-4). Queste però non sono definite positive ovunque, quindi vanno prese solo come esempi di campi $(0,2)$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione18_GD.pdf` (pp. 7-12);
  - `triennale/ANNO 2/geometria differenziale/Lezione19_GD.pdf` (pp. 1-12, 16-18);
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 21-23).

## Prerequisiti
- [[Tensore]]: campo di tensori (0,2) simmetrici
- [[Forma quadratica]]: g_q è un prodotto scalare su T_qΩ
- [[Pull-back]]: metriche indotte e isometrie

## Porta a
- [[Prima forma fondamentale]]: la metrica indotta su una superficie
- [[Teorema Egregio]]: K è invariante per isometrie

## Collegati
- [[Spazio vettoriale euclideo]]: caso costante, un solo prodotto scalare
