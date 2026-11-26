---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["inertia tensor", "matrice d'inerzia", "matrix of inertia", "prodotti d'inerzia", "products of inertia", "ellissoide d'inerzia", "ellipsoid of inertia", "assi principali d'inerzia", "principal axes of inertia", "momenti principali d'inerzia", "terna centrale d'inerzia"]
tags: [competenza, area/fisica]
---

# Tensore d'inerzia

> Matrice simmetrica $I_O$ che dà il momento d'inerzia rispetto a ogni asse per $O$; i suoi autovettori sono gli assi principali d'inerzia.

## Definizione / enunciato
Per l'asse per $O$ di direzione $\hat u=\alpha\hat e_1+\beta\hat e_2+\gamma\hat e_3$ si ha
$$I_u=\alpha^2I_x+\beta^2I_y+\gamma^2I_z+2\alpha\gamma I_{xz}+2\alpha\beta I_{xy}+2\beta\gamma I_{yz}\qquad(4.36)$$
con i **prodotti d'inerzia** $I_{xz}=-\int_{\mathcal B}\rho xz\,d\tau$, $I_{xy}=-\int\rho xy\,d\tau$, $I_{yz}=-\int\rho yz\,d\tau$ (4.37). In forma matriciale
$$I_O=\begin{pmatrix}I_x&I_{xy}&I_{xz}\\I_{yx}&I_y&I_{yz}\\I_{zx}&I_{zy}&I_z\end{pmatrix},\qquad I_u=\hat u^TI_O\hat u\quad(4.39\text{-}4.40).$$

## Formule chiave
- $I_O$ è simmetrica e (salvo corpi su un punto o una retta per $O$) definita positiva, quindi si diagonalizza con una rotazione. La terna in cui è diagonale è la **terna principale**; gli autovalori sono i **momenti principali**; se $O=G$ si parla di assi e momenti **centrali**.
- **Ellissoide d'inerzia:** $x^2I_x+y^2I_y+z^2I_z+2xzI_{xz}+2xyI_{xy}+2yzI_{yz}=1$ (4.45); nella terna principale $I_\xi\xi^2+I_\eta\eta^2+I_\varsigma\varsigma^2=1$ (4.47).
- Ricerca degli assi principali come estremi vincolati di $I_u$ con $|\hat u|=1$ (moltiplicatori di Lagrange): $\det(I_O-\lambda I)=0$ (4.55).
- Sistema piano ($z=0$): $I_z=I_x+I_y$ (4.56).

## Intuizione
L'ellissoide è un'immagine geometrica di $I_O$: l'asse $a$ per $G$ lo interseca in punti a distanza $1/\sqrt{I_{a_G}}$ da $G$ (4.46). Le simmetrie materiali individuano gli assi principali senza calcoli: la normale a un piano di simmetria è principale, così come l'intersezione di due piani di simmetria; un asse è principale se e solo se i suoi prodotti d'inerzia con gli altri assi sono nulli.

## Come si usa
Si sceglie una terna adattata alle simmetrie, si calcolano $I_x,I_y,I_z$ e i prodotti, si usa (4.40) per un asse obliquo; oppure si diagonalizza $I_O$. Se due momenti principali sono uguali, il corpo è un **giroscopio**.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect3-GeometryOfMasses.pdf` (pp. 41-43, eqq. 4.32-4.56; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Geometria delle masse", pp. 63-76 circa: forma quadratica $u^TI_Ou=I_u>0$, sistemi piani).

## Prerequisiti
- [[Momento d'inerzia]]: I_u rispetto a un asse
- [[Forma quadratica]]: I_u = ûᵀI_Oû
- [[Matrice simmetrica definita positiva]]: proprietà di I_O
- [[Autovalori e autovettori]]: momenti e assi principali

## Porta a
- [[Momento angolare del corpo rigido]]: K_Q = I_Q ω
- [[Energia cinetica del corpo rigido]]: ½ I_G ω·ω
- [[Equazioni di Eulero]]: scritte negli assi principali

## Collegati
- [[Teorema di Huygens-Steiner]]: trasporto su assi paralleli
- [[Moti alla Poinsot]]: le rotazioni permanenti avvengono attorno agli assi principali
