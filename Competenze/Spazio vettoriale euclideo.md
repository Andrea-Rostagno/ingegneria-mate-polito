---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Euclidean vector space", "inner product space", "spazio euclideo", "s.v.e.", "moltiplicazione scalare euclidea", "norma associata", "base ortonormale", "orthonormal basis", "delta di Kronecker"]
tags: [competenza, area/algebra-geometria]
---

# Spazio vettoriale euclideo

> Uno spazio vettoriale reale dotato di una moltiplicazione scalare euclidea (simmetrica, lineare, definita positiva): vi si definiscono norma, angoli, ortogonalità e basi ortonormali.

## Definizione / enunciato
Sia $V$ un $\mathbb R$-s.v. Una **moltiplicazione scalare euclidea** è una mappa $\langle\cdot,\cdot\rangle:V\times V\to\mathbb R$ con:
- simmetria: $\langle v_1,v_2\rangle=\langle v_2,v_1\rangle$;
- linearità nel primo argomento: $\langle av_1+bv_2,v_3\rangle=a\langle v_1,v_3\rangle+b\langle v_2,v_3\rangle$;
- positività: $\langle v,v\rangle\ge0$, e $=0\iff v=0$.

Simmetria e linearità danno la bilinearità. $(V,\langle\cdot,\cdot\rangle)$ è uno **spazio vettoriale euclideo** (s.v.e.); ogni sottospazio eredita la struttura.

**Norma associata:** $\|v\|=\sqrt{\langle v,v\rangle}$, che soddisfa gli assiomi di norma (positività, $\|av\|=|a|\|v\|$, disuguaglianza triangolare).

**Base ortonormale** (o.n.): $\langle b_i,b_j\rangle=\delta_{ij}$, equivalentemente ${}^tBB=\mathbb 1_n$.

## Formule chiave
$$\langle x,y\rangle_{\text{std}}={}^tx\,y={}^tx\,\mathbb 1\,y=\delta_{ij}x^iy^j,\qquad \cos(\widehat{v_1v_2})=\frac{\langle v_1,v_2\rangle}{\|v_1\|\|v_2\|}$$
**Teorema.** Un insieme ortonormale è libero. Se $\dim V=n$, $n$ vettori ortonormali formano una base o.n., e per ogni $v$
$$v=\langle v,v_1\rangle v_1+\dots+\langle v,v_n\rangle v_n\quad(\text{coefficienti di Fourier}).$$

## Intuizione
Il prodotto scalare standard non è l'unico. Ogni forma bilineare simmetrica definita positiva ${}^tx\Phi y$ definisce una "geometria" su $\mathbb R^n$, e il segno della forma quadratica associata dice se lo fa davvero. In base ortonormale lo sviluppo di un vettore si fa per proiezioni ortogonali; in una base generica per proiezioni parallele.

## Come si usa
- Prodotto scalare non standard su $\mathbb R^2$ (p. 4 di `13. Eucliean Vector Spaces...pdf`, pagina controllata sull'immagine): $\langle x,y\rangle=\dfrac{x_1y_1}{2}+\dfrac{x_2y_2}{2}={}^tx\begin{bmatrix}1/2&0\\0&1/2\end{bmatrix}y$.
- Completare un versore $u_1\in\mathbb R^3$ a una base o.n.: $v_2=v-\langle u_1,v\rangle u_1$ con $v$ non parallelo a $u_1$, poi $u_2=v_2/\|v_2\|$, $u_3=u_1\times u_2$ (p. 13).
- Riconoscere se una forma bilineare simmetrica è un prodotto scalare: deve essere definita positiva (p. 32).

## Nei corsi
- **Algebra lineare** (triennale): spazi vettoriali euclidei (slide di S. Mercadante); Notari ne tratta proiezioni, complemento ortogonale e isometrie. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 3-9, 13-14, 30-32); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §1-2).

## Prerequisiti
- [[Prodotto scalare]]: le proprietà diventano la definizione astratta
- [[Spazio vettoriale]]: spazio vettoriale reale più un prodotto scalare
- [[Disuguaglianza di Cauchy-Schwarz]]: giustifica la definizione di angolo e di norma associata

## Porta a
- [[Procedimento di Gram-Schmidt]]: costruzione di basi ortonormali
- [[Complemento ortogonale]]: sottospazio dei vettori ortogonali a U
- [[Endomorfismo simmetrico]]: la simmetria si legge in base ortonormale

## Collegati
- [[Norme vettoriali]]: la norma associata al prodotto standard è la norma 2
- [[Matrice ortogonale]]: colonne che formano una base ortonormale
- [[Forma quadratica]]: un prodotto scalare è una forma bilineare simmetrica definita positiva
