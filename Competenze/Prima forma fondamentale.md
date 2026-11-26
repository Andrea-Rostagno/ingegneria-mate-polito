---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["first fundamental form", "I forma fondamentale", "E F G", "coefficienti della prima forma fondamentale", "g_S", "metrica indotta", "induced metric"]
tags: [competenza, area/algebra-geometria]
---

# Prima forma fondamentale

> È la metrica che una superficie eredita da $\mathbb R^3$: il prodotto scalare ristretto ai piani tangenti, $E\,du^2+2F\,du\,dv+G\,dv^2$. Contiene tutte le misure "interne" alla superficie.

## Definizione / enunciato
Sia $P$ una superficie parametrizzata iniettiva e $S=\mathrm{Im}P$. La **prima forma fondamentale** $g_S$ è la restrizione della metrica standard di $\mathbb R^3$ a ogni piano tangente $T_{P(u,v)}S=\mathrm{Span}\{P_u,P_v\}$:
$$(g_S)_{P(u,v)}(V,W)=V\cdot W .$$
I coefficienti sono $(g_S)_{11}=P_u\cdot P_u$, $(g_S)_{12}=P_u\cdot P_v$, $(g_S)_{22}=P_v\cdot P_v$.

## Formule chiave
$$g_S=E\,du^2+2F\,du\,dv+G\,dv^2=P^*(dx^2+dy^2+dz^2)$$
$$E=P_u\cdot P_u=x_u^2+y_u^2+z_u^2,\qquad F=P_u\cdot P_v,\qquad G=P_v\cdot P_v,\qquad (g_S)=\begin{pmatrix}E&F\\F&G\end{pmatrix}$$
Inoltre $\|P_u\times P_v\|=\sqrt{EG-F^2}$.

## Intuizione
Un abitante bidimensionale della superficie, che non vede la terza dimensione, misura con $g_S$ lunghezze, angoli e aree. Tutto ciò che dipende solo da $E,F,G$ è "intrinseco". Il [[Teorema Egregio]] dice che anche $K$ lo è.

## Come si usa
Esempi della lezione:
- Cilindro $(r\cos u,r\sin u,v)$: $E=r^2$, $F=0$, $G=1$.
- Grafico $(u,v,f(u,v))$: $(1+f_u^2)du^2+2f_uf_v\,du\,dv+(1+f_v^2)dv^2$.
- Sfera $(r\cos u\cos v,r\cos u\sin v,r\sin u)$: $r^2(du^2+\cos^2u\,dv^2)$.
- Piano $z=x+y$: $(g_S)=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.
- Toro: $r^2du^2+(R+r\cos u)^2dv^2$.

Serve per $-N_*=g_S^{-1}b_S$, per $K=\det b_S/\det g_S$ e per l'elemento d'area.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione19_GD.pdf` (pp. 14-26);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (pp. 6, 10);
  - `triennale/ANNO 2/geometria differenziale/Lezione27_GD.pdf` (p. 12).

## Prerequisiti
- [[Metrica riemanniana]]: g_S è una metrica su S
- [[Pull-back]]: g_S = P^*(dx²+dy²+dz²)
- [[Superficie parametrica]]: P_u e P_v
- [[Prodotto scalare]]: E, F, G sono prodotti scalari

## Porta a
- [[Seconda forma fondamentale]]: insieme danno l'operatore forma g⁻¹b
- [[Curvatura gaussiana]]: K = (LN−M²)/(EG−F²)
- [[Teorema Egregio]]: K dipende solo da g_S
- [[Integrale di superficie]]: elemento d'area √(EG−F²) du∧dv

## Collegati
- Nessuno.
