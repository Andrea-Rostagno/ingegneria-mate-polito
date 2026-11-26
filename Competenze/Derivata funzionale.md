---
tipo: competenza
area: analisi
corsi: [Quantum physics]
livello: [triennale]
aliases: ["functional derivative", "derivata variazionale", "variational derivative", "calcolo delle variazioni", "variational calculus", "funzionale", "equazione di Eulero-Lagrange", "Euler-Lagrange equation"]
tags: [competenza, area/analisi]
---

# Derivata funzionale

> Generalizza la derivata a un funzionale $F[\Gamma]$ che dipende da una curva: la condizione di stazionarietà $\delta F=0$ fornisce le equazioni (di Eulero-Lagrange) che la curva deve soddisfare.

## Definizione / enunciato
Sia $F[\Gamma]=\int_{t_1}^{t_2}f(x(t),y(t),\dot x(t),\dot y(t))\,dt$ un funzionale della curva $\Gamma:\ \vec r(t)=x(t)\vec u_x+y(t)\vec u_y$ con estremi fissati $A,B$. Una curva vicina $\gamma$ è $\vec r_\Gamma(t)+\delta\vec r(t)$, con deviazioni **nulle agli estremi**: $\delta x(t_1)=\delta x(t_2)=0$, idem per $\delta y$. Sviluppando al primo ordine e integrando per parti i termini in $\delta\dot x,\delta\dot y$ (i termini di bordo si annullano):
$$F[\gamma]-F[\Gamma]=\int_{t_1}^{t_2}\left[\left(\frac{\partial f}{\partial x}-\frac{d}{dt}\frac{\partial f}{\partial\dot x}\right)\delta x+\left(\frac{\partial f}{\partial y}-\frac{d}{dt}\frac{\partial f}{\partial\dot y}\right)\delta y\right]dt$$
I coefficienti delle deviazioni sono le **derivate funzionali**, analoghe a $df/dx$ nello sviluppo $f(x+\Delta x)=f(x)+\frac{df}{dx}\Delta x+\dots$

## Formule chiave
$$\frac{\delta F}{\delta x}=\frac{\partial f}{\partial x}-\frac{d}{dt}\frac{\partial f}{\partial\dot x},\qquad \frac{\delta F}{\delta y}=\frac{\partial f}{\partial y}-\frac{d}{dt}\frac{\partial f}{\partial\dot y}$$

## Intuizione
Come $df/dx=0$ individua i punti stazionari di una funzione, $\delta F/\delta x=0$ individua le curve "stazionarie" del funzionale. La richiesta di deviazioni nulle agli estremi è ciò che elimina i termini di bordo.

## Come si usa
Esempi della dispensa (`2022_QP.pdf` pp. 10-11):
- **Cammino più breve** tra due punti: $f=R(\dot x,\dot y)=\sqrt{\dot x^2+\dot y^2}$; le equazioni danno $\dot x/R=c_1$, $\dot y/R=c_2$ con $c_1^2+c_2^2=1$, cioè $c_1=\cos\alpha$, $c_2=\sin\alpha$: la curva è una retta.
- **Lavoro di una forza**: imporre $\delta W/\delta x=\delta W/\delta y=\delta W/\delta z=0$ (lavoro indipendente dal cammino, analogo funzionale di una funzione costante) dà le condizioni $\partial F_x/\partial y=\partial F_y/\partial x$ ecc., cioè $\mathrm{rot}\,\vec F=0$: il campo è conservativo.

## Nei corsi
- **Quantum physics** (triennale): §2.1 della dispensa di V. Penna, come strumento per ottenere le equazioni di Lagrange dal principio di Hamilton. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 8-11).

## Prerequisiti
- [[Derivate parziali]]: sviluppo al primo ordine dell'integranda
- [[Integrale di linea]]: il lavoro è il funzionale dell'esempio guida

## Porta a
- [[Equazioni di Lagrange]]: si applica all'azione con $f=L(q_i,\dot q_i)$

## Collegati
- [[Campo conservativo]]: $\delta W=0$ per ogni cammino equivale a rot F = 0
