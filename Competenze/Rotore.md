---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["curl", "rot F", "∇×F", "rotore di un campo piano", "vorticità"]
tags: [competenza, area/analisi]
---

# Rotore

> Il campo $\nabla\times F$, che misura la tendenza di un campo di velocità a formare vortici; nel piano si riduce alla funzione $\partial_xF_2-\partial_yF_1$.

## Definizione / enunciato
Per $F=(F_1,F_2,F_3)$ di classe $C^1$ su $\Omega\subseteq\mathbb R^3$:
$$\mathrm{Rot}\,F=\nabla\wedge F=\det\begin{pmatrix}\hat i&\hat j&\hat k\\\partial_x&\partial_y&\partial_z\\F_1&F_2&F_3\end{pmatrix}=\Big(\frac{\partial F_3}{\partial y}-\frac{\partial F_2}{\partial z},\ \frac{\partial F_1}{\partial z}-\frac{\partial F_3}{\partial x},\ \frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\Big)$$
(determinante simbolico; promemoria degli indici: 123, 231, 312). Per un campo piano $F(x,y)=(F_1,F_2)$ il rotore è $R(x,y)=\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}$, terza componente del rotore del campo $(F_1,F_2,0)$.

## Formule chiave
$F$ è irrotazionale in $\Omega$ $\iff$ $R=0$ in $\Omega$ (caso piano). Inoltre $\mathrm{div}(\mathrm{Rot}\,H)=0$ (esercizio della lezione).

## Intuizione
Se $F$ è la velocità di un fluido, una foglia nell'acqua tende a ruotare in verso antiorario dove $R>0$ e orario dove $R<0$.

## Come si usa
Esempio: $F=(x+z,\ 2x+y,\ z+y)$ ha $\mathrm{Rot}\,F=(1,1,2)$, costante; il suo flusso attraverso il paraboloide $z=x^2+y^2\le9$ vale $18\pi$. Il rotore compare nei teoremi di Green e Stokes e nella condizione necessaria per i campi conservativi.

## Nei corsi
- **Analisi 2** (triennale): rotore piano con Green (09/11/2022), rotore in $\mathbb R^3$ con Stokes (21/11/2022). Fonti: `triennale/ANNO 2/analisi 2/AII 12 2022 campi cons e Green.pdf` (pp. 12-14); `triennale/ANNO 2/analisi 2/AII 15 int superficiali e Stokes.pdf` (p. 14); `triennale/ANNO 2/analisi 2/AII 16 2022 stokes e gauss.pdf` (pp. 3-5, 16).

## Prerequisiti
- [[Derivate parziali]]: combinazioni di derivate parziali del campo

## Porta a
- [[Teorema di Stokes]]: flusso del rotore

## Collegati
- [[Teorema di Green]]: R(x,y) è la terza componente del rotore
- [[Campo irrotazionale]]: F irrotazionale iff rotore nullo
- [[Teorema della divergenza]]: div(Rot H) = 0
- [[Potenziale elettrostatico]]: rot E = 0 è la forma differenziale della conservatività
