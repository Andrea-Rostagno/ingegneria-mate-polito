---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["sphere", "superficie sferica", "equazione della sfera", "centro e raggio di una sfera", "piano tangente alla sfera", "fascio di sfere"]
tags: [competenza, area/algebra-geometria]
---

# Sfera

> Il luogo dei punti di $E_3$ a distanza $r$ da un centro $C$: un ellissoide con i tre semiassi uguali. Centro e raggio si trovano completando i quadrati.

## Definizione / enunciato
Sfera di centro $C$ e raggio $r\ge0$: $\{P\in E_3\mid\mathrm{dist}(C,P)=r\}$.
- Posizione canonica (centro nell'origine): $x^2+y^2+z^2=r^2$.
- Posizione generica (p. 45): $x^2+y^2+z^2+2ax+2by+2cz=d$. Perché il raggio sia reale la slide chiede $a^2+b^2+c^2\ge d$; ma completando i quadrati con l'equazione scritta così si ottiene $r^2=a^2+b^2+c^2+d$, quindi la condizione corretta è $a^2+b^2+c^2+d\ge0$ (discrepanza della slide, segnalata nei Dubbi della mappa).

Un'equazione di secondo grado rappresenta una sfera solo se i coefficienti di $x^2,y^2,z^2$ coincidono e non ci sono termini misti.

## Formule chiave
$$(x-x_0)^2+(y-y_0)^2+(z-z_0)^2=r^2,\qquad C=(-a,-b,-c),\quad r^2=a^2+b^2+c^2+d$$
(Formule ricavate qui dal completamento dei quadrati $x^2+2ax=(x+a)^2-a^2$, con l'equazione nella forma della slide, termine noto $d$ a secondo membro.)

## Intuizione
È la versione "equazione" della definizione metrica: si sviluppa $\mathrm{dist}(C,P)^2=r^2$. Il completamento dei quadrati fa il percorso inverso. Se $r^2$ risulta negativo, l'equazione non ha punti reali.

## Come si usa
- Esempio (p. 46 di `14. Analytic Geometry II v3.2.0.pdf`): $x^2+y^2+z^2+2x+3y-4z+1=0$ diventa $(x+1)^2+(y+\frac32)^2+(z-2)^2=(\frac52)^2$, con $C=(-1,-\frac32,2)$ e $r=\frac52$.
- Esercizio con parametro (p. 48): $x^2+y^2+z^2+2x-y+3z+k=0$ diventa $(x+1)^2+(y-\frac12)^2+(z+\frac32)^2=\frac72-k$. È una sfera reale per $k<\frac72$, di raggio 1 per $k=\frac52$, e passa per $P(1,0,0)$ per $k=-3$. Sfere con $k$ diversi sono concentriche, quindi disgiunte.
- Posizione rispetto a un piano: si confronta $\mathrm{dist}(C,\pi)$ con $r$ (secante, tangente, esterno).
- Quiz: $x^2+y^2-z^2=1$ non è una sfera (coefficienti dei termini puri diversi).

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte II (slide di S. Mercadante); compare anche nella dispensa Sisto. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/14. Analytic Geometry II v3.2.0.pdf` (p. 43-49); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §8.2); esercizi `Esercizi ed esercitazioni/Es14 - sfere circonferenze_ris.pdf`.

## Prerequisiti
- [[Classificazione delle quadriche]]: ellissoide con i tre semiassi uguali
- [[Distanze tra punti, rette e piani]]: sfera = punti a distanza R dal centro; piano tangente a distanza R

## Porta a
- [[Circonferenza nello spazio]]: intersezione di una sfera con un piano

## Collegati
- [[Equazione del piano]]: anche il fascio di sfere si scrive come λE1 + µE2 = 0
