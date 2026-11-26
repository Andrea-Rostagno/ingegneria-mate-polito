---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["spherical coordinates", "coordinate sferiche in R^3", "r^2 sin phi", "elemento di volume in coordinate sferiche", "parametrizzazione della sfera"]
tags: [competenza, area/analisi]
---

# Coordinate sferiche

> Un punto di $\mathbb R^3$ descritto da distanza dall'origine $r$, longitudine $\theta$ e colatitudine $\varphi$: lo jacobiano è $r^2\sin\varphi$ e la sfera di raggio $R$ ha elemento d'area $R^2\sin\varphi$.

## Definizione / enunciato
$(r,\theta,\varphi)$ con $r\ge0$, $\theta\in[0,2\pi]$, $\varphi\in[0,\pi]$, $r=\sqrt{x^2+y^2+z^2}$ e
$$x=r\sin\varphi\cos\theta,\qquad y=r\sin\varphi\sin\theta,\qquad z=r\cos\varphi.$$

## Formule chiave
$$|\det J_g|=r^2\sin\varphi,\qquad \iiint_\Omega f\,dx\,dy\,dz=\iiint_{\tilde\Omega}f(r\sin\varphi\cos\theta,r\sin\varphi\sin\theta,r\cos\varphi)\,r^2\sin\varphi\,dr\,d\theta\,d\varphi.$$
Sulla sfera di raggio $R$ (con $r=R$ fisso): $\|P_\theta\wedge P_\varphi\|=R^2\sin\varphi$, "da ricordare".

## Intuizione
$\varphi$ si misura dal semiasse $z$ positivo: un cono $z=\sqrt{x^2+y^2}$ è $\varphi=\frac\pi4$ e il piano $z=0$ è $\varphi=\frac\pi2$. Domini delimitati da sfere e coni diventano parallelepipedi.

## Come si usa
- Semisfera di raggio 2 con foro conico: $\tilde\Omega=\{\theta\in[0,2\pi],\ r\in[0,2],\ \varphi\in[\frac\pi4,\frac\pi2]\}$ e $\iiint z=\int_0^{2\pi}\!\int_0^2\!\int_{\pi/4}^{\pi/2}r\cos\varphi\,r^2\sin\varphi\,d\varphi\,dr\,d\theta=2\pi$.
- Area della sfera: $\int_0^{2\pi}\!\int_0^\pi R^2\sin\varphi\,d\varphi\,d\theta=4\pi R^2$.
- Baricentro della semisfera (superficie): $\bar z=\frac{\pi R^3}{2\pi R^2}=\frac R2$.

## Nei corsi
- **Analisi 2** (triennale): calcolo dello jacobiano "una volta per tutte" nella lezione su coordinate sferiche e integrali di linea; poi usate per sfere e semisfere nelle superfici. Fonti: `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 3-5); `triennale/ANNO 2/analisi 2/AII 14 2022 superfici e integrali.pdf` (pp. 6-8); `triennale/ANNO 2/analisi 2/AII 15 int superficiali e Stokes.pdf` (pp. 2-5).

## Prerequisiti
- [[Cambiamento di variabili negli integrali multipli]]: |det J| = r² sin φ

## Porta a
- [[Rotore rigido quantistico]]: L² come operatore differenziale in θ e φ (Quantum physics)
- [[Potenziale centrale quantistico]]: separazione ψ = R(r) Y_ℓm (Quantum physics)

## Collegati
- [[Superficie parametrica]]: sfera parametrizzata in coordinate sferiche
- [[Sfera]]: parametrizzazione della superficie sferica
