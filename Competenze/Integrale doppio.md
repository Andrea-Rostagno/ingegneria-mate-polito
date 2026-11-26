---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["double integral", "integrali doppi", "integrale in due variabili", "media integrale in due variabili", "volume del sottografico"]
tags: [competenza, area/analisi]
---

# Integrale doppio

> L'integrale di $f(x,y)$ su un dominio piano $\Omega$, limite delle somme di $f$ campionata su quadratini sempre più piccoli: dà aree, medie, masse, baricentri, momenti d'inerzia e volumi.

## Definizione / enunciato
Sia $\Omega\subset\mathbb R^2$ (ad esempio aperto e limitato) e $f$ continua e limitata su $\Omega$. Fissato $\varepsilon>0$ si considera una griglia di quadratini di lato $\varepsilon$, la famiglia $Q_\varepsilon$ di quelli contenuti in $\Omega$ e un punto $(x_q,y_q)$ in ciascuno:
$$S(\varepsilon)=\sum_{q\in Q_\varepsilon}f(x_q,y_q)\,\Delta x\,\Delta y,\qquad \iint_\Omega f(x,y)\,dx\,dy\overset{def}{=}\lim_{\varepsilon\to0}S(\varepsilon).$$
Il limite esiste finito (sotto queste ipotesi) e non dipende dalla scelta dei punti. **Additività**: se $\Omega=\bigcup\Omega_i$ con $\Omega_i$ che si toccano al più sulla frontiera, l'integrale su $\Omega$ è la somma degli integrali sugli $\Omega_i$.

## Formule chiave
- $\iint_\Omega1\,dx\,dy=\mathrm{Area}(\Omega)$; $\frac1{\mathrm{Area}(\Omega)}\iint_\Omega f$ è la media integrale.
- Baricentro: $\bar x=\frac{\iint_\Omega x}{\mathrm{Area}(\Omega)}$, $\bar y=\frac{\iint_\Omega y}{\mathrm{Area}(\Omega)}$; con densità $f$: massa $\iint_\Omega f$, centro di massa $\bar x=\frac{\iint_\Omega xf}{\iint_\Omega f}$; momento d'inerzia rispetto all'origine $\iint_\Omega(x^2+y^2)f$.
- Se $f\ge0$, $\iint_\Omega f=\mathrm{Vol}\{(x,y,z):(x,y)\in\Omega,\ 0\le z\le f(x,y)\}$.

## Intuizione
È l'integrale di Riemann con i quadratini al posto degli intervalli; si calcola riducendolo a integrali di Analisi I (Fubini) o cambiando coordinate.

## Come si usa
Esempi della lezione: $\iint_\Omega2y$ sul semicerchio superiore di raggio 1 vale $\frac43$; sul parallelogramma di vertici $(0,0),(4,0),(10,6),(6,6)$, $\iint_\Omega x=120$ (per fili orizzontali); il volume della semisfera è $\iint_{x^2+y^2\le R^2}\sqrt{R^2-x^2-y^2}=\frac23\pi R^3$ (in coordinate polari).

## Nei corsi
- **Analisi 2** (triennale): lezioni del 19/10 e 24/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 07 2022 integrali doppi.pdf` (pp. 8-14); `triennale/ANNO 2/analisi 2/AII 08 2022 integrali doppi.pdf` (pp. 1-11).

## Prerequisiti
- [[Integrale di Riemann]]: somme su quadratini invece che su intervalli

## Porta a
- [[Teorema di Fubini]]: calcolo degli integrali doppi
- [[Integrale triplo]]: integrale in tre variabili
- [[Cambiamento di variabili negli integrali multipli]]: cambio di variabili
- [[Integrale di superficie]]: integrale su una superficie
- [[Teorema di Green]]: integrale doppio del rotore

## Collegati
- [[Centro di massa]]: baricentro e centro di massa di una lamina
- [[Momento d'inerzia]]: momento d'inerzia di una lamina o di un solido
