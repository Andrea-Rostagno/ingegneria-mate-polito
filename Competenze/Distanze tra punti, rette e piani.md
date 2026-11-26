---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["distance point-plane", "distance point-line", "distanza punto-punto", "distanza punto-piano", "distanza punto-retta", "distanza tra rette sghembe", "distanza tra insiemi"]
tags: [competenza, area/algebra-geometria]
---

# Distanze tra punti, rette e piani

> Formule per la distanza euclidea tra punti, rette e piani di $E_3$, definita come estremo inferiore delle distanze tra i loro punti.

## Definizione / enunciato
Per due insiemi $X,Y\subseteq E_3$: $\mathrm{dist}(X,Y)=\inf\{\mathrm{dist}(x,y):x\in X,\ y\in Y\}$. Se $X\cap Y\neq\emptyset$ la distanza è 0, quindi tra rette ha senso solo per rette parallele o sghembe.

## Formule chiave
$$\mathrm{dist}(P_1,P_2)=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}$$
$$\mathrm{dist}(P_0,\pi)=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}=\frac{|\langle n_\pi,x_0\rangle+d|}{\|n_\pi\|}\qquad(\pi:ax+by+cz+d=0)$$
$$\mathrm{dist}(P_0,r)=\frac{\|\vec v\times\overrightarrow{PP_0}\|}{\|\vec v\|}\qquad(P\in r,\ \vec v\ \text{direzione di}\ r)$$
- **Rette parallele:** distanza di un punto qualsiasi dell'una dall'altra retta.
- **Rette sghembe:** si costruisce il piano che contiene una retta ed è parallelo all'altra (dal fascio di piani), poi si calcola la distanza di un punto dell'altra retta da quel piano.

## Intuizione
La distanza punto-piano è il valore assoluto della componente di $\overrightarrow{PP_0}$ lungo la normale unitaria. La distanza punto-retta è l'altezza del parallelogramma di lati $\vec v$ e $\overrightarrow{PP_0}$: area divisa per base.

## Come si usa
- Punto-punto (p. 13 di `5_Geometria_analitica.pdf`): tra $(1,0,0)$ e $(-1,2,1)$ la distanza è $\sqrt{4+4+1}=3$.
- Punto-retta (p. 49): $P_0=(2,0,1)$, $r:x=1+t,\ y=2t,\ z=3+2t$ (pagina controllata sull'immagine). Scelto $P=(1,0,3)\in r$, con $u_v=(1/3,2/3,2/3)$ si ottiene $\|u_v\times\overrightarrow{PP_0}\|=\|(-4/3,-4/3,-2/3)\|=2$.
- Rette sghembe (p. 60-61, tema 10 luglio 2012): $r:x=3t+1,\dots$ e $s:\{x-z=2,\ y=1\}$. Nel fascio $\lambda(x-z-2)+\mu(y-1)=0$ si sceglie il piano parallelo a $r$ ($\lambda=1,\mu=-2$), poi si calcola la distanza di $(1,0,0)\in r$ da esso.

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte I. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/5_Geometria_analitica.pdf` (p. 13, 48-50, 58-61); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §2.5).

## Prerequisiti
- [[Posizioni relative di rette e piani]]: la distanza ha senso solo senza intersezione
- [[Equazioni della retta]]: distanza punto-retta
- [[Equazione del piano]]: distanza punto-piano
- [[Prodotto vettoriale]]: distanza punto-retta e tra rette sghembe

## Porta a
- [[Sfera]]: sfera = punti a distanza R dal centro; piano tangente a distanza R

## Collegati
- [[Proiezione ortogonale di un vettore]]: la distanza punto-piano è la proiezione sulla normale unitaria
- [[Circonferenza nello spazio]]: si confronta dist(C, Π) con il raggio
