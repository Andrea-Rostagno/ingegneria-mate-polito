---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["linear systems of ODEs with constant coefficients", "sistema lineare di ODE", "x' = Ax", "sistema autonomo lineare", "formula di rappresentazione x(t) = e^{tA}x_0"]
tags: [competenza, area/analisi]
---

# Sistemi lineari di ODE a coefficienti costanti

> Il sistema $\dot x=Ax$ ha come soluzioni esattamente le funzioni $x(t)=e^{tA}c$; quella con $x(0)=x_0$ è $e^{tA}x_0$, definita per ogni $t\in\mathbb R$.

## Definizione / enunciato
$\dot x=f(t,x)$ con $f(t,x)=Ax$, $A\in\mathbb R^{n\times n}$ a coefficienti costanti: il sistema è **autonomo** e per componenti $\dot x_i=\sum_ja_{ij}x_j$. Problema di Cauchy: $\dot x=Ax$, $x(0)=x_0$. Poiché $Ax$ soddisfa le ipotesi di Cauchy ed è sublineare, la soluzione esiste unica e globale (L04 p. 1).
**Teorema (L05 pp. 5-6).** Le soluzioni di $\dot x=Ax$ sono **tutte e sole** le funzioni $x(t)=e^{tA}c$, $c\in\mathbb R^n$ costante. L'unica soluzione del problema di Cauchy è $x(t)=e^{tA}x_0$.

## Formule chiave
- Sono soluzioni: $\frac{d}{dt}(e^{tA}c)=Ae^{tA}c$.
- Non ce ne sono altre: posto $y(t)=e^{-tA}x(t)$, $\dot y=-Ae^{-tA}x+e^{-tA}Ax=0$, quindi $y\equiv c$ e $x=e^{tA}c$.
- Caso $n=1$: $\dot x=ax\Rightarrow x(t)=x_0e^{at}$.

## Intuizione
È la versione vettoriale di $x_0e^{at}$: tutta la dinamica è contenuta in $e^{tA}$, e la sua struttura (autovalori, blocchi di Jordan) decide oscillazioni, crescita e decadimento.

## Come si usa
Si calcola $e^{tA}$ per similitudine.
- $A$ diagonalizzabile: $e^{tA}=Pe^{t\Lambda}P^{-1}$.
- Esempio (L06 pp. 1-3): $\dot x_1=-x_2$, $\dot x_2=x_1$, autovalori $\pm i$, $P=\begin{pmatrix}1&1\\-i&i\end{pmatrix}$, da cui $x(t)=(c_1\cos t-c_2\sin t,\ c_1\sin t+c_2\cos t)$: le orbite sono circonferenze.
- $A$ non diagonalizzabile: si passa alla forma di Jordan.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/04 - Lezione 10_10_23.pdf` (pp. 1-2); `triennale/ANNO 3/eq fisica matematica/05 - Lezione 11_10_23.pdf` (pp. 5-9); `triennale/ANNO 3/eq fisica matematica/06  - Lezione 13_10_23.pdf` (pp. 1-3).

## Prerequisiti
- [[Esponenziale di una matrice]]: e^{tA} e la sua derivata
- [[Prolungabilità delle soluzioni]]: Ax è sublineare, la soluzione è globale
- [[Matrice diagonalizzabile]]: calcolo di e^{tA} per similitudine
- [[Forma canonica di Jordan]]: calcolo di e^{tA} nel caso generale

## Porta a
- [[Stabilità dei sistemi lineari di ODE]]: comportamento asintotico di e^{tA}x₀
