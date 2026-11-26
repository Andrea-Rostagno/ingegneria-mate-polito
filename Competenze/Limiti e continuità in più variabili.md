---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["limits of functions of several variables", "limite in più variabili", "continuità in più variabili", "intorno sferico", "limite in coordinate polari", "restrizione a rette e parabole"]
tags: [competenza, area/analisi]
---

# Limiti e continuità in più variabili

> Il limite in $\mathbb R^n$ si definisce con la norma; a differenza di una variabile, si può arrivare a $P_0$ lungo infinite curve e il limite esiste solo se il valore non dipende dal percorso.

## Definizione / enunciato
Sia $f$ definita in un intorno di $X_0\in\mathbb R^n$, tranne al più $X_0$. Si dice che $\lim_{X\to X_0}f(X)=L$ se
$$\forall\varepsilon>0\ \exists\delta>0:\quad 0<\|X-X_0\|<\delta\ \Rightarrow\ |f(X)-L|<\varepsilon.$$
Un intorno di $X_0$ è la palla $\{X\in\mathbb R^n\mid\|X-X_0\|<R\}$. $f$ è **continua** in $X_0$ se $\lim_{X\to X_0}f(X)=f(X_0)$. Somme, prodotti, composizioni e quozienti (con denominatore $\ne0$) di funzioni continue sono continui; una funzione di una sola variabile $g(x_j)$ continua resta continua come funzione di $n$ variabili.

## Formule chiave
In coordinate polari $x=r\cos\theta$, $y=r\sin\theta$ si stima $|f(x,y)-L|$ con una quantità che dipende solo da $r$: nell'esempio della lezione $\big|\frac{x^2y}{x^2+y^2}\big|=|r\cos^2\theta\sin\theta|\le r=\sqrt{x^2+y^2}$, e basta $\delta=\varepsilon$.

## Intuizione
Se restringendo $f$ a due curve per $P_0$ si ottengono valori limite diversi, il limite non esiste. Ma anche se il limite vale lo stesso lungo **tutte le rette**, può non esistere: è il vero "salto" tra una e più variabili.

## Come si usa
- $f=\frac{2xy}{x^2+y^2}$: vale $0$ sugli assi e $1$ sulla bisettrice, quindi il limite in $(0,0)$ non esiste; in polari $f=\sin(2\theta)$, costante su ogni semiretta.
- $f=\frac{x^2y}{x^2+y^2}=r\cos^2\theta\sin\theta$, quindi $|f|\le r$: il limite è $0$ (basta $\delta=\varepsilon$) e ponendo $f(0,0)=0$ la funzione è continua.
- $f=\frac{x^2y}{x^4+y^2}$: lungo $y=mx$ il limite è $0$ per ogni $m$, ma lungo $y=ax^2$ vale costantemente $\frac a{1+a^2}$, quindi il limite non esiste.

## Nei corsi
- **Analisi 2** (triennale): "limiti e continuità in più variabili". Fonte: `triennale/ANNO 2/analisi 2/AII 02 2022 continuita e derivate parziali.pdf` (lez. 03/10/2022, pp. 1-10).

## Prerequisiti
- [[Funzioni di più variabili]]: limiti per funzioni di n variabili
- [[Limite di funzione]]: stessa definizione con la norma al posto del modulo
- [[Funzione continua]]: continuità in un punto, ora in R^n

## Porta a
- [[Derivate parziali]]: limite del rapporto incrementale lungo un asse
- [[Derivata direzionale]]: limite lungo una direzione
- [[Differenziabilità in più variabili]]: limite che definisce il resto
- [[Teorema di Weierstrass]]: versione in R^n

## Collegati
- [[Coordinate polari e cilindriche]]: coordinate polari per i limiti in (0,0)
