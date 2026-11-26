---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["subgradient method", "ottimizzazione non smooth", "nonsmooth optimization", "steepest ascent proiettato", "passo armonico"]
tags: [competenza, area/ottimizzazione]
---

# Metodo del subgradiente

> Analogo del metodo del gradiente per funzioni convesse non differenziabili: ci si muove lungo un subgradiente con passi prefissati, perché il subgradiente non garantisce la discesa e non si può fare line search.

## Definizione / enunciato
Per $\min f$ convessa: $\mathbf x^{(k+1)}=\mathbf x^{(k)}-\alpha^{(k)}\boldsymbol\gamma^{(k)}$ con $\boldsymbol\gamma^{(k)}\in\partial f(\mathbf x^{(k)})$. Nel caso tipico della dualità si massimizza una funzione concava $w(\boldsymbol\mu)$ con $\boldsymbol\mu\ge\mathbf 0$, e si proietta su $\mathbb R^m_+$:
$$\boldsymbol\mu^{(k+1)}=\max\big\{\mathbf 0_m,\ \boldsymbol\mu^{(k)}+\alpha^{(k)}\boldsymbol\gamma^{(k)}\big\}.$$

## Formule chiave
Condizione sui passi che garantisce la convergenza (soddisfatta per esempio da $\alpha^{(k)}=1/k$):
$$\sum_{k=1}^\infty\alpha^{(k)}=\infty,\qquad\sum_{k=1}^\infty\big(\alpha^{(k)}\big)^2<\infty .$$
**Teorema (riduzione della distanza dall'ottimo).** Sia $f$ convessa, $L_f(\theta)$ un sublevel set non vuoto, $\hat{\mathbf x}\notin L_f(\theta)$ e $\boldsymbol\gamma\in\partial f(\hat{\mathbf x})$. Esiste $\delta>0$ tale che $\|\mathbf x-(\hat{\mathbf x}-\alpha\boldsymbol\gamma)\|<\|\mathbf x-\hat{\mathbf x}\|$ per ogni $\mathbf x\in L_f(\theta)$ e $\alpha\in(0,\delta)$, con $\delta=-2\boldsymbol\gamma^T(\mathbf x-\hat{\mathbf x})/\|\boldsymbol\gamma\|^2$.

## Intuizione
$\|\mathbf x-(\hat{\mathbf x}-\alpha\boldsymbol\gamma)\|^2-\|\mathbf x-\hat{\mathbf x}\|^2=2\alpha\boldsymbol\gamma^T(\mathbf x-\hat{\mathbf x})+\alpha^2\|\boldsymbol\gamma\|^2$ è una parabola in $\alpha$ negativa vicino a 0, perché $\boldsymbol\gamma^T(\mathbf x-\hat{\mathbf x})<0$: il passo non fa necessariamente scendere $f$, ma avvicina ai punti migliori. La successione dei valori dell'obiettivo non è monotona.

## Come si usa
Esempio delle slide: $\min\{3-2x_1+x_2,\ 2+x_1-2x_2\}$, concava, non differenziabile sulla retta $x_2=x_1-1/3$; i supergradienti estremi $[-2,1]^T$ e $[1,-2]^T$ non sono direzioni di ascesa, anche se nel subdifferenziale ce ne sono. Applicazione principale: aggiornamento dei moltiplicatori nel rilassamento lagrangiano.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 24); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 41-43).

## Prerequisiti
- [[Subgradiente]]: direzione di ricerca
- [[Metodo del gradiente]]: analogo nel caso differenziabile
- [[Serie armonica generalizzata]]: $\sum1/k=\infty$, $\sum1/k^2<\infty$

## Porta a
- [[Rilassamento lagrangiano]]: aggiornamento dei moltiplicatori

## Collegati
- [[Dualità lagrangiana]]: la funzione duale è concava e non differenziabile
- [[Funzioni di penalità e barriera]]: le penalità esatte richiedono metodi non smooth
