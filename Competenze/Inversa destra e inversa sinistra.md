---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["right inverse", "left inverse", "inversa destra", "inversa sinistra"]
tags: [competenza, area/algebra-geometria]
---

# Inversa destra e inversa sinistra

> Una funzione ha un'inversa sinistra se e solo se è iniettiva, e un'inversa destra se e solo se è suriettiva. La seconda equivalenza richiede l'assioma della scelta.

## Definizione / enunciato
Nel corso una **funzione** $F:X\to Y$ è una corrispondenza $F\subseteq X\times Y$ tale che $\forall x\in X\ \exists!\,y\in Y:\ x\,F\,y$ (Def. 2). L'insieme delle funzioni da $X$ a $Y$ è $Y^X$.

Data $f:X\to Y$, una $g:Y\to X$ si dice (Def. 4):
- **inversa destra** di $f$ se $f\circ g=id_Y$;
- **inversa sinistra** di $f$ se $g\circ f=id_X$.

**Prop. 3.** Se $g\circ f=id_X$ allora $f$ è iniettiva e $g$ è suriettiva.
**Prop. 5.** $f$ ha inversa sinistra $\iff$ $f$ è iniettiva.
**Prop. 7.** $f$ ha inversa destra $\iff$ $f$ è suriettiva.

## Formule chiave
$$g\circ f=id_X\ \Rightarrow\ f\ \text{iniettiva},\ g\ \text{suriettiva}$$

## Intuizione
Prop. 3 si vede subito: $f(x_1)=f(x_2)\Rightarrow x_1=g(f(x_1))=g(f(x_2))=x_2$.
- Per costruire un'inversa sinistra di un'iniettiva si manda ogni $y\in\mathrm{Im}f$ nell'unico $x_y$ con $f(x_y)=y$, e tutti gli altri $y$ in un punto fissato $x_0$.
- Per un'inversa destra di una suriettiva bisogna invece **scegliere** un elemento in ogni fibra $f^{-1}(y)$. Se $Y$ è infinito serve una regola di scelta, cioè l'assioma della scelta.

## Come si usa
- Per dimostrare che una funzione è biiettiva basta esibire una $g$ che sia inversa sia destra sia sinistra.
- Le dispense osservano che l'assioma della scelta è equivalente a dire che ogni applicazione suriettiva ha inversa destra (p. 10).

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 1-2. Il corso parte da corrispondenze e funzioni come sottoinsiemi di $X\times Y$; gli esempi a mano mostrano corrispondenze che non sono funzioni (la circonferenza $x^2+y^2=1$) e una che lo è, $4x+3y=1$. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 3-10).

## Prerequisiti
- [[Funzioni iniettive e suriettive]]: le proprietà da caratterizzare
- [[Funzione composta e funzione inversa]]: le inverse si definiscono tramite composizione
- [[Assioma della scelta]]: serve per costruire l'inversa destra

## Porta a
- [[Gruppo]]: le biiezioni hanno inversa sia destra sia sinistra, e insieme formano il gruppo $\mathcal B(X)$

## Collegati
