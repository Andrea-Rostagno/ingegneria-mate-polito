---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["descent methods", "metodo di discesa", "funzionale dell'energia", "energy functional", "passo di discesa", "direzione di discesa", "vettore residuo", "residual vector"]
tags: [competenza, area/numerica]
---

# Metodi di discesa

> Se $A$ è simmetrica e definita positiva, risolvere $A\mathbf x=\mathbf b$ equivale a minimizzare il funzionale quadratico $\varphi(\mathbf x)=\frac12\mathbf x^TA\mathbf x-\mathbf x^T\mathbf b$; i metodi di discesa lo fanno scendendo lungo direzioni $\mathbf d^{(k)}$ con passo ottimale.

## Definizione / enunciato
**Teorema.** Sia $A$ simmetrica e definita positiva. Allora $\mathbf x^*$ è soluzione di $A\mathbf x=\mathbf b$ se e solo se è il punto di minimo di $\varphi(\mathbf x)=\frac12\mathbf x^TA\mathbf x-\mathbf x^T\mathbf b$ (energia del sistema).
*Dimostrazione:* $\nabla\varphi(\mathbf x)=A\mathbf x-\mathbf b$, quindi i punti stazionari sono le soluzioni; l'hessiana è $H_\varphi=A$, definita positiva, quindi è un minimo.

**Residuo:** $\mathbf r(\mathbf x)=\mathbf b-A\mathbf x=-\nabla\varphi(\mathbf x)$.

Un metodo di discesa è $\mathbf x^{(k+1)}=\mathbf x^{(k)}+\alpha_k\mathbf d^{(k)}$. Il vettore $\mathbf d^{(k)}\ne\mathbf o$ è ammissibile se $(\mathbf d^{(k)})^T\nabla\varphi(\mathbf x^{(k)})<0$; il passo $\alpha_k$ è quello che minimizza $\varphi$ lungo $\mathbf d^{(k)}$.

## Formule chiave
$$\phi(\alpha)=\varphi(\mathbf x^{(k)})-\alpha(\mathbf d^{(k)})^T\mathbf r^{(k)}+\tfrac12\alpha^2(\mathbf d^{(k)})^TA\mathbf d^{(k)},\qquad \alpha_k=\frac{(\mathbf d^{(k)})^T\mathbf r^{(k)}}{(\mathbf d^{(k)})^TA\mathbf d^{(k)}}>0 .$$

## Intuizione
Per $n=2$ il grafico di $\varphi$ è un paraboloide con curve di livello ellittiche centrate in $\mathbf x^*$ (circolari se gli autovalori sono uguali). Si scende verso il fondo; i metodi differiscono solo per la scelta della direzione.

## Come si usa
Esempio delle slide: $A=\mathrm{diag}(\lambda_1,\lambda_2)$, $\mathbf b=(\lambda_1,\lambda_2)^T$, minimo in $(1,1)^T$; con $\lambda_1=\lambda_2=1$ il paraboloide è circolare, con $\lambda_1=1$, $\lambda_2=5$ ellittico. Se $A$ non è sdp si potrebbe risolvere $A^TA\mathbf x=A^T\mathbf b$, ma $K_2(A^TA)=K_2(A)^2$ e il prodotto costa il doppio: si preferiscono metodi come GMRes.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 60-70, 97).
- **Ricerca operativa** (triennale): direzioni di discesa per una $f$ non lineare generica. **Teorema (direzione di discesa):** se $f$ è differenziabile in $\mathbf x^\circ$ e $\nabla f(\mathbf x^\circ)^T\mathbf d<0$, esiste $\delta>0$ con $f(\mathbf x^\circ+\lambda\mathbf d)<f(\mathbf x^\circ)$ per ogni $\lambda\in(0,\delta)$ (prova con $f(\mathbf x^\circ+\lambda\mathbf d)=f(\mathbf x^\circ)+\lambda\nabla f(\mathbf x^\circ)^T\mathbf d+\lambda\|\mathbf d\|\,\alpha(\mathbf x^\circ;\lambda\mathbf d)$, $\alpha\to0$). **Teorema (massima discesa):** se $\nabla f(\mathbf x)\ne\mathbf 0$, $\min f'(\mathbf x;\mathbf d)$ s.t. $\|\mathbf d\|_2=1$ ha soluzione $\mathbf d^*=-\nabla f(\mathbf x)/\|\nabla f(\mathbf x)\|_2$, per Cauchy-Schwarz. La linearizzazione non sempre basta: nella sella di Peano tutte le rette per l'origine sono direzioni di discesa ma l'origine non è un massimo. Con vincoli si usano anche i gradienti dei vincoli per caratterizzare le direzioni ammissibili. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 7-11).
- **Numerical opt** (magistrale): $Ax=b$ con $A$ SPD equivale a $\min J(x)=\frac12x^TAx-b^Tx$, con $\nabla J=Ax-b$ e $\nabla^2J=A$, strettamente convessa. Per $f$ generica:
  - $p$ è direzione di discesa in $\hat x$ se $p^T\nabla f(\hat x)<0$, cioè se forma con $\nabla f$ un angolo tra $90°$ e $180°$;
  - tra i versori la decrescita massima si ha per $p=-\nabla f/\|\nabla f\|$;
  - con $\phi(\alpha)=f(x^{(k)}+\alpha p^{(k)})$ si ha $\phi'(0)=\nabla f(x^{(k)})^Tp^{(k)}$, la pendenza iniziale.

  Su questa base si scelgono il passo con le [[Condizioni di Wolfe]] e si ottiene la convergenza globale con il [[Teorema di Zoutendijk]]. Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 22-24); `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 11-16).

## Prerequisiti
- [[Matrice simmetrica definita positiva]]: ipotesi del teorema di equivalenza
- [[Gradiente]]: $\nabla\varphi=A\mathbf x-\mathbf b$
- [[Classificazione dei punti critici]]: hessiana definita positiva implica minimo

## Porta a
- [[Metodo del gradiente]]: $\mathbf d^{(k)}=\mathbf r^{(k)}$
- [[Metodo del gradiente coniugato]]: direzioni A-coniugate

## Collegati
- [[Forma quadratica]]: $\varphi$ è una forma quadratica più un termine lineare
- [[Condizionamento di un sistema lineare]]: curve di livello allungate se $K_2(A)$ è grande
- [[Disuguaglianza di Cauchy-Schwarz]]: la direzione di massima discesa è $-\nabla f/\|\nabla f\|_2$ (Ricerca operativa)
- [[Backtracking line search]]: scelta del passo lungo la direzione di discesa (Ricerca operativa)
