---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["parallelogram law", "legge del parallelogramma", "identità di polarizzazione", "polarization identity", "norma indotta da un prodotto scalare"]
tags: [competenza, area/analisi]
---

# Identità del parallelogramma

> In uno spazio con prodotto scalare la somma dei quadrati delle diagonali di un parallelogramma è la somma dei quadrati dei lati; questa identità caratterizza le norme che vengono da un prodotto scalare.

## Definizione / enunciato
**Prop. 6.14.** Sia $(H,\langle\cdot,\cdot\rangle)$ pre-hilbertiano su $\mathbb F$, con norma indotta $\|x\|=\sqrt{\langle x,x\rangle}$.
(i) **Identità di polarizzazione:**
$$4\langle x,y\rangle=\begin{cases}\|x+y\|^2-\|x-y\|^2 & \mathbb F=\mathbb R,\\ \|x+y\|^2-\|x-y\|^2+i\|x+iy\|^2-i\|x-iy\|^2 & \mathbb F=\mathbb C.\end{cases}$$
(ii) **Identità del parallelogramma:**
$$\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2.$$
**Cor. 6.16:** il prodotto scalare $\langle\cdot,\cdot\rangle:H\times H\to\mathbb F$ è continuo.

## Formule chiave
La validità del parallelogramma è necessaria e sufficiente perché una norma sia indotta da un prodotto scalare (Oss. 6.15/6.17): la polarizzazione ricostruisce allora il prodotto scalare dalla norma.

## Intuizione
La polarizzazione dice che il prodotto scalare è determinato dalla norma; il parallelogramma è il "test" che una norma deve superare per provenire da un prodotto scalare, cioè per avere una geometria euclidea (angoli, ortogonalità).

## Come si usa
- **Non esempi (Es. 6.18):** in $\ell^p$ con $p\ne2$, $x=(1,0,0,\dots)$ e $y=(0,1,0,\dots)$ hanno $\|x\|_p=\|y\|_p=1$ e $\|x\pm y\|_p=2^{1/p}$, quindi l'identità fallisce; in $C[a,b]$ con $\|\cdot\|_\infty$, due funzioni con supporti disgiunti e norma 1 danno $\|f\pm g\|_\infty=1$ e $2\ne4$.
- È lo strumento chiave nella dimostrazione del teorema della proiezione: applicata a $x-y_n$ e $x-y_m$ mostra che una successione minimizzante è di Cauchy.

## Nei corsi
- **Analisi funzionale** (triennale): §6.1 (Prop. 6.14, Oss. 6.15, Cor. 6.16, Oss. 6.17, Es. 6.18). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 66-68); `triennale/ANNO 3/analisi funzionale/05_spazihilbert_handout.pdf` (p. 8).

## Prerequisiti
- [[Spazio di Hilbert]]: norma indotta dal prodotto scalare

## Porta a
- [[Teorema della proiezione]]: la successione minimizzante è di Cauchy

## Collegati
- [[Prodotto scalare]]: la polarizzazione ricostruisce il prodotto scalare dalla norma
- [[Spazi di successioni lp]]: per p ≠ 2 la norma non viene da un prodotto scalare
- [[Spazio normato]]: test per distinguere norme hilbertiane
