---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["functions of several variables", "funzioni di n variabili", "dominio naturale", "dominio massimale", "grafico di una funzione di due variabili", "norma euclidea in R^n"]
tags: [competenza, area/analisi]
---

# Funzioni di più variabili

> Funzioni $f:\Omega\to\mathbb R$ con $\Omega\subseteq\mathbb R^n$: si studiano a partire dal dominio naturale e dal grafico, che per $n=2$ è una superficie in $\mathbb R^3$.

## Definizione / enunciato
Una funzione di $n$ variabili è $f:\Omega\to\mathbb R$ (o $\mathbb R^m$), $\Omega\subseteq\mathbb R^n$, $f=f(x_1,\dots,x_n)$. Il **dominio naturale** (massimale) è l'insieme dei punti in cui l'espressione ha senso. Il **grafico** è
$$G(f)=\{(x_1,\dots,x_n,x_{n+1})\in\mathbb R^{n+1}\mid (x_1,\dots,x_n)\in\Omega\ \wedge\ x_{n+1}=f(x_1,\dots,x_n)\};$$
si può disegnare solo se $n\le2$. Per $n=2$, $G(f)$ è una superficie che, proiettata sul piano $xy$, coincide con $\mathrm{dom}(f)$.

## Formule chiave
Norma e distanza: $\|X\|=\sqrt{x_1^2+\dots+x_n^2}$, $\|P-Q\|$ = distanza di $P$ da $Q$; prodotto scalare $P\cdot Q=\sum_{i=1}^n x_iy_i$ e $\cos\alpha=\dfrac{P\cdot Q}{\|P\|\,\|Q\|}$.

## Intuizione
Una $f(x,y,z,t)$ può essere la temperatura nel punto $(x,y,z)$ di un solido al tempo $t$; una $f:\mathbb R^3\to\mathbb R$ un potenziale. Se $f(x,y)$ dipende solo da $x^2+y^2$, il grafico è una superficie di rotazione attorno all'asse $z$.

## Come si usa
Esempi della lezione:
- $f(x,y)=\sqrt{y-x^2}$ ha dominio $\{y\ge x^2\}$, chiuso (la parabola è inclusa); $\frac1{\sqrt{y-x^2}}$ o $\log(y-x^2)$ hanno dominio $\{y>x^2\}$, aperto.
- $f(x,y,z)=\sqrt{z-\sqrt{x^2+y^2}}+\log(1-x^2-y^2-z^2)$ ha per dominio un "cono gelato": la superficie conica fa parte del dominio, la calotta sferica no, quindi il dominio non è né aperto né chiuso.
- $f(x,y)=x^2+y^2$ ha come grafico un paraboloide di rotazione; $\sqrt{x^2+y^2}$ un cono (in $x=0$ si ottiene $z=|y|$); $z=\pm\sqrt{x^2+y^2}$ sono le due falde del doppio cono $z^2=x^2+y^2$, e $z=\pm\sqrt{R^2-x^2-y^2}$ le due semisfere.

## Nei corsi
- **Analisi 2** (triennale): prima lezione, "funzioni di n variabili", domini, grafici, norma e prodotto scalare. Fonti: `triennale/ANNO 2/analisi 2/AII 01 2022 funzioni di n variabili.pdf` (lez. 28/09/2022, pp. 1-9); `triennale/ANNO 2/analisi 2/AII 02 2022 continuita e derivate parziali.pdf` (p. 1, grafico in $n$ variabili).

## Prerequisiti
- [[Prodotto scalare]]: norma, distanza e angolo in R^n

## Porta a
- [[Limiti e continuità in più variabili]]: limite con la norma di R^n
- [[Superficie parametrica]]: il grafico come superficie

## Collegati
- [[Coni, cilindri e superfici di rotazione]]: grafici come coni, sfere e paraboloidi
