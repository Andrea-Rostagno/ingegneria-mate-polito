---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Geometria differenziale]
livello: [triennale]
aliases: ["quadratic form", "forma quadratica reale", "matrice associata a una forma quadratica", "forma canonica di una forma quadratica", "forma bilineare simmetrica", "symmetric bilinear form", "q(x) = x^T Q x", "metrica su uno spazio vettoriale", "cono luce", "light cone", "metrica di Minkowski"]
tags: [competenza, area/algebra-geometria]
---

# Forma quadratica

> Un polinomio omogeneo di grado 2 in $n$ variabili, $q(x)={}^txQx$ con $Q$ simmetrica; diagonalizzando $Q$ con una matrice ortogonale si porta $q$ in forma canonica (solo quadrati).

## Definizione / enunciato
Una **forma quadratica reale** in $x_1,\dots,x_n$ è un polinomio $q\in\mathbb R[x_1,\dots,x_n]$ omogeneo di grado 2. Esempi: $x^2+2xy-y^2$, $xy+yz$; non lo sono $x^2+x$ e $xy+y^2+1$.

Ogni forma quadratica si associa a un'unica matrice **simmetrica** $Q$:
$$q(x)={}^tx\,Q\,x=\sum_{i,j=1}^n q_{ij}x_ix_j,$$
con $q_{ii}$ = coefficiente di $x_i^2$ e $q_{ij}=q_{ji}$ = metà del coefficiente di $x_ix_j$.

**Forma canonica:** $Q$ diagonale, quindi solo termini puri $q_{11}x_1^2+\dots+q_{nn}x_n^2$. Poiché ogni matrice reale simmetrica è diagonalizzabile con $P$ ortogonale, esiste sempre il cambio di variabili $x=PX$ con
$${}^tPQP=Q_D=\mathrm{diag}(\lambda_1,\dots,\lambda_n),\qquad q=\lambda_1X_1^2+\dots+\lambda_nX_n^2 .$$
Notari (Teor. 18): $P$ si può scegliere ortogonale con $\det P=1$.

**Forma bilineare** $\varphi(x,y)={}^tx\Phi y$; se è simmetrica ($\Phi$ simmetrica) le si associa $q(x)=\varphi(x,x)$. Serve la simmetria per definire la $q$ corrispondente.

## Formule chiave
$$q(x)={}^txQx,\quad Q={}^tQ;\qquad x=PX\ \Rightarrow\ q={}^tX({}^tPQP)X$$

## Intuizione
Una forma quadratica generalizza la norma al quadrato $\|x\|^2={}^tx\mathbb 1x$, che è già in forma canonica. I termini misti dicono che gli assi "naturali" della forma sono ruotati rispetto a quelli coordinati: una rotazione (matrice ortogonale) li riallinea, e i coefficienti diventano gli autovalori.

## Come si usa
- Matrice associata (p. 18 di `13. Eucliean Vector Spaces...pdf`): $x^2+4xy+3y^2\mapsto\begin{bmatrix}1&2\\2&3\end{bmatrix}$; $xy+y^2\mapsto\begin{bmatrix}0&1/2\\1/2&1\end{bmatrix}$ (entrate ricostruite con la regola della metà del coefficiente misto).
- Forma canonica senza calcolare $P$ (p. 21): basta il polinomio caratteristico. Esempio: $p_B(\lambda)=-\lambda^3+6\lambda^2-9\lambda+2=(\lambda-2)(\lambda-2+\sqrt3)(\lambda-2-\sqrt3)$, quindi $D_B=\mathrm{diag}(2,2-\sqrt3,2+\sqrt3)$.
- Cambiamento di variabili esplicito: colonne di $P$ = base ortonormale di autovettori.

## Nei corsi
- **Algebra lineare** (triennale): forme quadratiche reali (slide di S. Mercadante), poi usate per coniche e quadriche. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 15-21, 30-32); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §11); `Appunti, riassunti e formulari/Diagonalizzazione2_MatOrtog.pdf`; esercizi `Esercizi ed esercitazioni/Es12-matrici simmetriche reali e forme quadratiche_ris.pdf`.
- **Geometria differenziale** (triennale):
  - **Prodotto scalare (metrica su $V$).** È una $g:V\times V\to\mathbb R$ simmetrica, bilineare e definita positiva. Norma: $\|v\|_g=\sqrt{g(v,v)}$. Forma quadratica associata: $F(v)=g(v,v)$.
  - Esempio non definito positivo: $g((x,t),(\bar x,\bar t))=x\bar x-c^2t\bar t$. I vettori di norma nulla formano il "cono luce" $(x+ct)(x-ct)=0$, che diventa $x^2+y^2-c^2t^2=0$ in $\mathbb R^3$.
  - **Proposizioni (dimostrate).** La matrice $(g_{ij})$ di una metrica è invertibile e ha $\det(g_{ij})>0$. Se $g_{ij}v_j=\lambda v_i$, allora $g(v,v)=\lambda\sum v_i^2$, quindi non ci possono essere autovalori negativi.
  - Fonti: `triennale/ANNO 2/geometria differenziale/Lezione09_GD.pdf` (pp. 7-13); `triennale/ANNO 2/geometria differenziale/Lezione10_GD.pdf` (pp. 2-4).

## Prerequisiti
- [[Endomorfismo simmetrico]]: si riduce a forma canonica diagonalizzando la sua matrice simmetrica

## Porta a
- [[Segnatura di una forma quadratica]]: il segno si legge dagli autovalori
- [[Classificazione delle coniche]]: il blocco dei termini quadratici è una forma quadratica
- [[Classificazione delle quadriche]]: idem in tre variabili
- [[Tensore]]: le forme bilineari sono tensori (0,2), base e_i* ⊗ e_j* (Geometria differenziale)
- [[Metrica riemanniana]]: un prodotto scalare su ogni spazio tangente (Geometria differenziale)

## Collegati
- [[Spazio vettoriale euclideo]]: un prodotto scalare è una forma bilineare simmetrica definita positiva
- [[Matrice simmetrica definita positiva]]: matrice di una forma definita positiva
