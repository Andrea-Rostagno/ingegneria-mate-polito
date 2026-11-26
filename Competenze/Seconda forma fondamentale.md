---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["second fundamental form", "II forma fondamentale", "L M N", "b_S", "coefficienti della seconda forma fondamentale"]
tags: [competenza, area/algebra-geometria]
---

# Seconda forma fondamentale

> È la forma bilineare associata all'operatore forma, $b_S(v,w)=-N_*(v)\cdot w$. Nelle coordinate $(u,v)$ si calcola come prodotto scalare della normale con le derivate seconde di $P$.

## Definizione / enunciato
$$(b_S)_p:T_pS\times T_pS\to\mathbb R,\qquad b_S(v,w)=g_S(-N_*(v),w)=-N_*(v)\cdot w .$$
È simmetrica e, come la metrica, è un tensore di tipo $(0,2)$:
$$b_S=L\,du^2+2M\,du\,dv+N\,dv^2,\qquad L=b_S(P_u,P_u),\ M=b_S(P_u,P_v),\ N=b_S(P_v,P_v).$$
**Coefficienti (dimostrato).** Derivando $N^P\cdot P_u=0$ si ottiene $-N^P_u\cdot P_u=N^P\cdot P_{uu}$, e lo stesso per gli altri.

**Interpretazione geometrica.** Sia $\alpha$ una curva su $S$, parametrizzata con l'ascissa curvilinea, con $\alpha(0)=p$, curvatura $k$ e normale $n$. Allora
$$b_S(\alpha'(0),\alpha'(0))=N_{\alpha(0)}\cdot\alpha''(0)=N_{\alpha(0)}\cdot k\,n .$$
Se il piano osculatore di $\alpha$ contiene $N_p$ (sezione normale), si ha $b_S(\alpha',\alpha')=\mp k$.

## Formule chiave
$$L=N^P\cdot P_{uu},\qquad M=N^P\cdot P_{uv},\qquad N=N^P\cdot P_{vv}$$
Per il grafico $(u,v,f)$:
$$b_S=\frac{f_{uu}\,du^2+2f_{uv}\,du\,dv+f_{vv}\,dv^2}{\sqrt{1+f_u^2+f_v^2}}$$

## Intuizione
La prima forma misura le lunghezze, la seconda misura quanto la superficie si stacca dal piano tangente: è la parte quadratica dello scostamento lungo la normale. Per una sezione normale coincide, a meno del segno, con la curvatura della curva sezione.

## Come si usa
Esempi della lezione:
- Cilindro: $b_S=-r\,du^2$.
- Sfera: $b_S=-r\,du^2-r\sin^2u\,dv^2$.
- Paraboloide: $b_S=\frac{2(du^2+dv^2)}{\sqrt{1+4u^2+4v^2}}$.
- Piano $z=x+y$: $b_S=0$.
- $P=(u+v,u-v,u^2-v^2)$: $b_S=\frac{2(-du^2+dv^2)}{\sqrt{1+2u^2+2v^2}}$.

Esempio svolto a lezione, impostato come esercizio d'esame (L23 pp. 18-23): per $P(s,v)=\alpha(s)+\frac1KN(s)+vB(s)$ si ottiene $N^P=T$ e $(b_S)=\begin{pmatrix}-Kv\tau&0\\0&0\end{pmatrix}$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 3-7, 13);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (pp. 1-7, 10-13);
  - `triennale/ANNO 2/geometria differenziale/Lezione23_GD.pdf` (pp. 3, 8, 22).

## Prerequisiti
- [[Operatore forma]]: b_S è la forma bilineare di -N_*
- [[Prima forma fondamentale]]: b_S(v,w) = g_S(-N_* v, w)

## Porta a
- [[Curvatura gaussiana]]: K = (LN−M²)/(EG−F²)
- [[Curvatura media]]: H dipende da L, M, N

## Collegati
- [[Curvatura di una curva]]: b_S(α',α') = N·k n, la curvatura delle sezioni normali
