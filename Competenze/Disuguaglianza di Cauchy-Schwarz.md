---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Analisi funzionale, Prob e statistica]
livello: [triennale]
aliases: ["Cauchy-Schwarz inequality", "disuguaglianza di Schwarz", "disuguaglianza di Cauchy-Schwartz", "disuguaglianza triangolare per vettori", "triangle inequality for vectors"]
tags: [competenza, area/algebra-geometria]
---

# Disuguaglianza di Cauchy-Schwarz

> In ogni spazio vettoriale euclideo $|\langle v_1,v_2\rangle|\le\|v_1\|\,\|v_2\|$: rende sensata la definizione di angolo e implica la disuguaglianza triangolare.

## Definizione / enunciato
**Teorema (Cauchy-Schwarz).** Per ogni moltiplicazione scalare euclidea su $V$ e per ogni $v_1,v_2\in V$:
$$|\langle v_1,v_2\rangle|\le\|v_1\|\cdot\|v_2\|,$$
con uguaglianza se e solo se $v_1=\lambda v_2$ (vettori paralleli).

**Corollario (disuguaglianza triangolare).** $\|v_1+v_2\|\le\|v_1\|+\|v_2\|$, con uguaglianza se e solo se i vettori sono paralleli (e concordi).

## Formule chiave
$$-1\le\frac{\langle v_1,v_2\rangle}{\|v_1\|\,\|v_2\|}\le1\quad\Rightarrow\quad\cos(\widehat{v_1v_2}):=\frac{\langle v_1,v_2\rangle}{\|v_1\|\,\|v_2\|}$$
$$\|u+v\|^2=\|u\|^2+2\langle u,v\rangle+\|v\|^2\le\|u\|^2+2|\langle u,v\rangle|+\|v\|^2\le(\|u\|+\|v\|)^2$$

## Intuizione
Per i vettori geometrici è ovvia: $\langle\vec u,\vec v\rangle=\|\vec u\|\|\vec v\|\cos\theta$ e $|\cos\theta|\le1$. Negli spazi astratti si rovescia il punto di vista: la disuguaglianza si dimostra dagli assiomi e serve a *definire* l'angolo. La triangolare dice che un lato di un triangolo non supera la somma degli altri due.

## Come si usa
- Dimostrare la disuguaglianza triangolare (p. 38 di `1_Vettori.pdf`): si sviluppa $\|u+v\|^2$ con l'identità notevole e si maggiora $\langle u,v\rangle$ con Cauchy-Schwarz.
- Definire l'angolo tra vettori di $\mathbb R^n$ o di spazi di matrici e polinomi dotati di un prodotto scalare.
- Verificare che $\|v\|=\sqrt{\langle v,v\rangle}$ sia davvero una norma: la triangolare è la proprietà non banale.

## Nei corsi
- **Algebra lineare** (triennale): prima come conseguenza geometrica di $|\cos\theta|\le1$, poi come teorema negli spazi vettoriali euclidei. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 29, 38); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 25); `Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 7-8); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, Teorema 1).
- **Analisi funzionale** (triennale): in ogni spazio pre-hilbertiano reale o complesso, $|\langle x,y\rangle|\le\|x\|\|y\|$ (Prop. 6.10). Dimostrazione: si sviluppa $0\le\langle x-\alpha y,x-\alpha y\rangle=\|x\|^2+|\alpha|^2\|y\|^2-2\operatorname{Re}(\bar\alpha\langle x,y\rangle)$ e si sceglie $\alpha=\langle x,y\rangle/\|y\|^2$, ottenendo $0\le\|x\|^2-|\langle x,y\rangle|^2/\|y\|^2$. Serve a provare che $\sqrt{\langle x,x\rangle}$ è una norma (Prop. 6.11), che $\langle\cdot,y\rangle$ è un funzionale limitato di norma $\|y\|$ e, in $\ell^2$, è il caso $p=q=2$ di Hölder. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 64-65); `triennale/ANNO 3/analisi funzionale/05_spazihilbert_handout.pdf` (p. 6).
- **Prob e statistica** (triennale): versione per v.a. (caso particolare di Hölder): $X,Y\in L^2(\Omega,\mathcal F,\mathbb P)\Rightarrow XY\in L^1$ e $|\mathbb E[XY]|\le\mathbb E[|XY|]\le(\mathbb E[X^2]\mathbb E[Y^2])^{1/2}=\|X\|_{L^2}\|Y\|_{L^2}$. Rende ben definita la covarianza e dà $|\rho(X,Y)|\le1$ per il coefficiente di correlazione; nelle slide di statistica compare come $\operatorname{Cov}^2(Z,Y)\le\operatorname{Var}(Z)\operatorname{Var}(Y)$ nella dimostrazione di Cramér-Rao. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (pp. 3, 10); `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Teorema di Cramer Rao III).

## Prerequisiti
- [[Prodotto scalare]]: conseguenza di |cos θ| ≤ 1

## Porta a
- [[Spazio vettoriale euclideo]]: giustifica la definizione di angolo e di norma associata
- [[Covarianza]]: $XY\in L^1$ per $X,Y\in L^2$ (Prob e statistica)
- [[Coefficiente di correlazione]]: $|\rho|\le1$ (Prob e statistica)

## Collegati
- [[Valore assoluto]]: stessa disuguaglianza triangolare, nel caso scalare |x+y| ≤ |x|+|y|
- [[Norme vettoriali]]: la triangolare è un assioma di norma
- [[Disuguaglianza di Hölder]]: generalizzazione a esponenti coniugati p, q (Analisi funzionale)
- [[Spazio di Hilbert]]: rende la norma indotta una norma in uno spazio pre-hilbertiano (Analisi funzionale)
