---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["reduction of a conic to canonical form", "rototraslazione", "posizione canonica di una conica", "forma canonica di una conica", "completamento dei quadrati", "rotazione degli assi"]
tags: [competenza, area/algebra-geometria]
---

# Riduzione a forma canonica di una conica

> Trovare una rototraslazione che porti una conica in posizione canonica: si ruotano gli assi secondo gli autovettori del blocco quadratico $A$, poi si trasla completando i quadrati.

## Definizione / enunciato
Una conica è in **posizione canonica** quando è riferita ai propri assi:
- l'origine coincide con il centro di simmetria (ellisse, iperbole) o con il vertice (parabola);
- gli assi cartesiani coincidono con gli assi della conica.

Procedura:
1. **Rotazione.** Si diagonalizza la forma quadratica $q$ della conica con una matrice ortogonale **speciale** $P$ (rotazione, $\det P=1$) le cui colonne sono autovettori normalizzati di $A$. Nelle nuove coordinate $(x,y)^T=P(X,Y)^T$ il termine misto sparisce e $q=\lambda_1X^2+\lambda_2Y^2$.
2. **Traslazione.** Si completano i quadrati nei termini lineari e si pone $x'=X-X_0$, $y'=Y-Y_0$.

La rototraslazione non è unica.

## Formule chiave
$${}^tPAP=\mathrm{diag}(\lambda_1,\lambda_2),\quad P=R_\theta=\begin{bmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix},\qquad \lambda(X-X_0)^2+\mu(Y-Y_0)^2=k$$

## Intuizione
Il termine $xy$ dice che la conica è "storta": gli assi giusti sono le autodirezioni della sua forma quadratica, che per il teorema spettrale sono ortogonali. I termini lineari dicono che è "spostata": completare i quadrati trova il centro.

## Come si usa
Esempio (p. 33-35 di `14. Analytic Geometry II v3.2.0.pdf`; Mercadante avverte che negli ultimi anni è fuori programma, ma motiva gran parte del corso):
- La conica è $5x^2-6xy+5y^2+16\sqrt2\,x+38=0$ (pagina controllata sull'immagine; $B=\begin{bmatrix}5&-3&8\sqrt2\\-3&5&0\\8\sqrt2&0&38\end{bmatrix}$).
- Riconoscimento: $|A|=16$, $|B|=-32$, $\mathrm{tr}A\cdot|B|<0$, quindi ellisse reale.
- Rotazione: $|A-\lambda\mathbb 1|=(2-\lambda)(8-\lambda)$, cioè $\lambda_1=2$, $\lambda_2=8$, con autospazi $\mathcal L\{(1,1)\}$ e $\mathcal L\{(1,-1)\}$. Normalizzando si ottiene $P$.
- Traslazione: $2(X+4)^2+8(Y-1)^2=2$, quindi $(x')^2+4(y')^2=1$ con $x'=X+4$, $y'=Y-1$.

Riconoscere coniche già solo traslate (p. 6-7): $4x^2+3y^2+8x-6y-5=0$ diventa $\frac{(x+1)^2}{3}+\frac{(y-1)^2}{4}=1$, un'ellisse traslata (denominatori ricavati dividendo $4(x+1)^2+3(y-1)^2=12$ per 12).

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte II (slide di S. Mercadante); la rototraslazione è segnalata come non più in programma, il completamento dei quadrati sì. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/14. Analytic Geometry II v3.2.0.pdf` (p. 5-12, 33-35); `Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 41-42, 45, rotazioni $R_\theta$).

## Prerequisiti
- [[Classificazione delle coniche]]: dopo il riconoscimento si cerca la rototraslazione
- [[Matrice ortogonale]]: la rotazione è una matrice ortogonale speciale

## Porta a
- Nessuno.

## Collegati
- [[Endomorfismo simmetrico]]: autodirezioni ortogonali del blocco quadratico
