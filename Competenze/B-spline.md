---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["B-splines", "basis spline", "B-spline cubica", "cubic B-spline", "funzioni di base con supporto locale", "local support basis", "funzioni a cappuccio", "hat functions"]
tags: [competenza, area/numerica]
---

# B-spline

> Basi dello spazio delle spline formate da funzioni con supporto locale: le funzioni "a cappuccio" per le spline lineari e le B-spline cubiche a campana.

## Definizione / enunciato
Il **supporto** di $f$ è la chiusura di $\{x: f(x)\ne0\}$. Su $a\equiv x_0<x_1<\dots<x_M\equiv b$ ogni spline lineare (poligonale) interpolante si scrive
$$S_1(x)=\sum_{j=0}^{M}y_jN_j(x),\qquad N_j(x_i)=\begin{cases}1&j=i\\0&j\ne i\end{cases},$$
$$N_j(x)=\begin{cases}\frac{x-x_{j-1}}{x_j-x_{j-1}}&x_{j-1}\le x\le x_j\\[2pt] \frac{x_{j+1}-x}{x_{j+1}-x_j}&x_j\le x\le x_{j+1}\\[2pt] 0&\text{altrimenti}\end{cases}$$
(con un solo tratto per $N_0$ e $N_M$).

**B-spline cubiche.** Si aggiungono 6 nodi ausiliari $x_{-3}<x_{-2}<x_{-1}<x_0<\dots<x_M<x_{M+1}<x_{M+2}<x_{M+3}$ e si definiscono le spline cubiche $B_{3,j}$, $j=-1,0,\dots,M+1$, con
$$B_{3,j}(x)=0\ \text{per}\ x\le x_{j-2},\ x\ge x_{j+2};\quad B_{3,j}(x_j)=1;\quad B'_{3,j}=B''_{3,j}=0\ \text{in}\ x_{j\pm2}.$$
Esistono, sono uniche e formano una base dello spazio delle spline cubiche sui nodi $x_0,\dots,x_M$ ("basis-spline" o "bell-spline").

## Formule chiave
Ogni $B_{3,j}$ è formata da 4 tratti di polinomi di grado 3. Per le spline cubiche vincolate e naturali le slide danno anche una base "alla Lagrange" $S_{3,j}$ con $S_{3,j}(x_i)=\delta_{ij}$, che dipende solo dai nodi e non dai valori $y_i$.

## Intuizione
Una base a supporto locale fa sì che cambiare un dato modifichi la spline solo vicino a quel nodo, e che le matrici dei sistemi siano a banda: ogni funzione di base "vede" solo pochi intervalli.

## Come si usa
Esempi delle slide: la poligonale per 6 dati $(x_i,y_i)$, $i=0,\dots,5$, come somma di $y_jN_j$; la B-spline $B_{3,2}$ sulla partizione di $[0,1]$ in $M=4$ sottointervalli uguali.

## Nei corsi
- **Metodi numerici** (triennale): parte finale del capitolo sull'approssimazione. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 69-77).

## Prerequisiti
- [[Spline lineare]]: le $N_j$ sono la base delle poligonali
- [[Spline cubica]]: le $B_{3,j}$ sono base delle spline cubiche
- [[Base e dimensione]]: si costruisce una base di uno spazio lineare di funzioni

## Porta a
- Nessuno.

## Collegati
- [[Rappresentazione di Lagrange]]: stessa proprietà $\delta_{ij}$ nei nodi
- [[Matrice sparsa]]: il supporto locale produce sistemi a banda
