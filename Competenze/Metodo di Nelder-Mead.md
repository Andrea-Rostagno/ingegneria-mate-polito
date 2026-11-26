---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["Nelder-Mead method", "Nelder-Mead", "simplex search", "metodo del simplesso di Nelder-Mead", "riflessione espansione contrazione"]
tags: [competenza, area/ottimizzazione]
---

# Metodo di Nelder-Mead

> Metodo di ricerca diretta senza derivate che fa evolvere un simplesso di $n+1$ punti sostituendo il peggiore con punti ottenuti per riflessione, espansione o contrazione rispetto al centroide degli altri.

## Definizione / enunciato
Simplesso $\mathbf y_0,\dots,\mathbf y_n\in\mathbb R^n$ ordinato con $f(\mathbf y_0)\le\dots\le f(\mathbf y_n)$ ($\mathbf y_0$ migliore, $\mathbf y_n$ peggiore). Centroide degli altri $n$ punti e punti candidati:
$$\mathbf x_c=\frac1n\sum_{k=0}^{n-1}\mathbf y_k,\qquad\mathbf x_c+\alpha(\mathbf x_c-\mathbf y_n),\qquad\alpha=1:\ \text{riflessione }\mathbf x_r .$$

## Formule chiave
Casi secondo $f(\mathbf x_r)$:
- $f(\mathbf x_r)<f(\mathbf y_0)$: si prova l'**espansione** $\mathbf x_e$ ($\alpha=\delta_e\in(1,\infty)$) e si tiene il migliore fra $\mathbf x_r$ e $\mathbf x_e$;
- $f(\mathbf y_0)\le f(\mathbf x_r)<f(\mathbf y_{n-1})$: si accetta $\mathbf x_r$;
- $f(\mathbf y_{n-1})\le f(\mathbf x_r)<f(\mathbf y_n)$: **contrazione esterna** $\mathbf x_{oc}$ ($\alpha=\delta_{oc}\in(0,1)$), si tiene il migliore fra $\mathbf x_r$ e $\mathbf x_{oc}$;
- $f(\mathbf y_n)\le f(\mathbf x_r)$: **contrazione interna** $\mathbf x_{ic}$ ($\alpha=\delta_{ic}\in(-1,0)$); se $f(\mathbf x_{ic})<f(\mathbf y_n)$ lo si accetta, altrimenti si contrae tutto verso il migliore, $\mathbf x_k=\mathbf y_0+\gamma(\mathbf y_k-\mathbf y_0)$, $\gamma\in(0,1)$.

## Intuizione
La direzione dal peggiore al centroide è una direzione di ricerca promettente: se rende molto, la si esplora più aggressivamente; se rende poco, si accorcia il passo. Le contrazioni fanno collassare il simplesso in un punto, dando convergenza.

## Come si usa
Si applica a funzioni di cui si sa solo calcolare il valore. Non va confuso con il metodo del simplesso della programmazione lineare. È un metodo locale. Nota: nelle slide (controllato sulla pagina renderizzata) la riflessione è scritta $\mathbf x_r=\mathbf y_n+(\mathbf x_c-\mathbf y_n)$, che coinciderebbe con $\mathbf x_c$: è un refuso; ponendo $\alpha=1$ nella formula generale (8) si ottiene $\mathbf x_r=\mathbf x_c+(\mathbf x_c-\mathbf y_n)$ (calcolo mio).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 24-27).
- **Numerical opt** (magistrale): unico metodo di ordine zero del corso (direct search). Il simplesso $S=\{y=\sum_{i=1}^{n+1}\lambda_ix_i,\ \lambda_i\ge0,\ \sum\lambda_i=1\}$ è non singolare se $x_2-x_1,\dots,x_{n+1}-x_1$ sono indipendenti. Parametri:
  - riflessione $\rho>0$ (tipicamente 1);
  - espansione $>1$ (tipicamente 2);
  - contrazione in $(0,1)$ (tipicamente $\frac12$);
  - shrinking in $(0,1)$ (tipicamente $\frac12$).

  Fasi: ordinamento per valori di $f$, riflessione del peggiore rispetto al baricentro degli $n$ migliori, espansione, contrazione, shrink verso il punto migliore. Usa solo valori di $f$, a differenza dei metodi del primo ordine come il [[Metodo del gradiente]]. Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 3-8).

## Prerequisiti
- [[Combinazioni coniche, affini e convesse]]: il simplesso geometrico
- [[Modello di ottimizzazione]]: ottimizzazione non vincolata senza derivate

## Collegati
- [[Pattern search]]: altro metodo di ricerca diretta
- [[Metodo del simplesso]]: omonimo ma diverso, per la programmazione lineare
- [[Algoritmi genetici]]: anch'essi lavorano su una popolazione di punti
