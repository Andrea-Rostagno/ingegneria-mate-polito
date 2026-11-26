---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["flux of a vector field", "flusso attraverso una superficie", "flusso uscente", "F · N dσ", "portata di un fluido attraverso una superficie"]
tags: [competenza, area/analisi]
---

# Flusso di un campo vettoriale

> L'integrale sulla superficie orientata della componente normale del campo: per un fluido stazionario è la quantità che attraversa la superficie nell'unità di tempo.

## Definizione / enunciato
Sia $\Sigma$ una superficie orientata con normale $\hat N$ e $F$ un campo continuo sui suoi punti. Il **flusso** di $F$ attraverso $\Sigma$ è
$$\int_\Sigma F\cdot\hat N\,d\sigma.$$

## Formule chiave
Se $\hat N=\pm\frac{P_u\wedge P_v}{\|P_u\wedge P_v\|}$:
$$\int_\Sigma F\cdot\hat N\,d\sigma=\pm\iint_\Omega F(X(u,v),Y(u,v),Z(u,v))\cdot(P_u\wedge P_v)\,du\,dv.$$
Su un grafico $z=g(x,y)$ orientato verso l'alto:
$$\int_\Sigma F\cdot\hat N\,d\sigma=\iint_\Omega\{-F_1\,g_x-F_2\,g_y+F_3\}(x,y,g(x,y))\,dx\,dy.$$

## Intuizione
$F\cdot\hat N$ è la componente del campo perpendicolare alla superficie; cambiando orientazione il flusso cambia segno. Gli esercizi della pioggia sul parabrezza e sulla cupola (lasciati senza soluzione) usano questo significato.

## Come si usa
Esempio della lezione: flusso di $F=(x,y,0)$ attraverso la semisfera superiore di raggio 2, normale uscente.
- In coordinate sferiche ($\hat N=(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi)$) si arriva a $2\pi\cdot2R^2\int_0^{\pi/2}\sin^3\varphi\,d\varphi$.
- Come grafico di $g=\sqrt{4-x^2-y^2}$ si arriva a $16\pi\int_0^{\pi/2}\sin^3\varphi\,d\varphi$, e il docente invita a confrontare i due.

Il valore finale non è scritto a lezione: con $R=2$ e $\int_0^{\pi/2}\sin^3\varphi=\frac23$ viene $\frac{32}3\pi$ (calcolo mio).

## Nei corsi
- **Analisi 2** (triennale): lezione del 21/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 15 int superficiali e Stokes.pdf` (pp. 5-13).

## Prerequisiti
- [[Orientazione di una superficie]]: il flusso dipende dall'orientazione
- [[Integrale di superficie]]: integrale di F·N sulla superficie

## Porta a
- [[Teorema di Stokes]]: flusso di Rot F
- [[Teorema della divergenza]]: flusso uscente
- [[Teorema di Gauss del flusso]]: il flusso è l'integrale di E·n su S

## Collegati
- [[Equazione di continuità]]: quantità di fluido che attraversa una superficie
