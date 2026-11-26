---
tipo: competenza
area: algebra-geometria
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [barycentric coordinates, baricentro di un triangolo, triangolo come varietà 2-dimensionale, varietà (k-1)-dimensionale, combinazione affine di punti]
tags: [competenza, area/algebra-geometria]
---

# Coordinate baricentriche

> Rappresentazione di un punto di un triangolo come combinazione affine dei vertici, $\lambda_1P_2+\lambda_2P_1+\lambda_3P_0$ con pesi non negativi a somma 1; i pesi sono rapporti di aree.

## Definizione / enunciato
Nello spazio euclideo $\mathbb E^d$ (tuple $x=(x_1,\dots,x_d)^T$ con la norma $\|x\|_2=(\sum x_i^2)^{1/2}$), dati $k\le d$ punti $\{P_i\}_{i\in[0,k-1]}$, una **varietà $(k-1)$-dimensionale** è
$$\mathcal V=\left\{x\in\mathbb E^d:\ x=\alpha_0P_{k-1}+\alpha_1P_{k-2}+\dots+\alpha_{k-2}P_1+\left(1-\sum_{i=0}^{k-2}\alpha_i\right)P_0\right\}.$$
Con $k=2$ è la retta, con $k=3$ il **piano** $\pi=\{x=\alpha_0P_2+\alpha_1P_1+(1-\alpha_0-\alpha_1)P_0,\ (\alpha_0,\alpha_1)\in\mathbb R^2\}$. Il **triangolo** è la varietà 2-dimensionale con condizioni su $\alpha$:
$$T=\alpha_0P_2+\alpha_1P_1+(1-\alpha_0-\alpha_1)P_0,\qquad 0\le\alpha_0+\alpha_1\le1 .$$

## Formule chiave
$\lambda_1=\alpha_0$, $\lambda_2=\alpha_1$, $\lambda_3=1-\alpha_0-\alpha_1$ sono le **coordinate baricentriche**, valide per tutti i triangoli, e si esprimono come rapporti di aree; negli appunti $B$ è chiamato "barycenter of the triangle" ed è disegnato come un punto interno che divide il triangolo in tre sottotriangoli:
$$\lambda_1=\frac{\text{Area}_{BP_1P_2}}{\text{Area}_{P_0P_1P_2}},\qquad \lambda_2=\frac{\text{Area}_{BP_2P_0}}{\text{Area}_{P_0P_1P_2}}\quad\text{(da verificare sul PDF quale area corrisponde a quale coordinata)}.$$
Baricentro del triangolo: $B=\frac13(P_0+P_1+P_2)$, cioè $\lambda_1=\lambda_2=\lambda_3=\frac13$.

## Intuizione
Un punto del triangolo è una "media pesata" dei vertici: più è vicino a un vertice, più grande è il peso di quel vertice e più grande è l'area del sottotriangolo opposto. Pesi tutti in $[0,1]$ significano punto interno o sul bordo.

## Come si usa
Le coordinate $(\alpha_1,\alpha_0)$ sono anche le coordinate del triangolo di riferimento con vertici $(0,0),(1,0),(0,1)$: la mappa che le porta nel triangolo $T_{P_0P_1P_2}$ è una trasformazione affine. Negli appunti il disegno mostra il triangolo di riferimento con $P_0$ nell'origine, $P_1=(1,0)$, $P_2=(0,1)$.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): appunti manoscritti di geometria computazionale (scansione OneNote letta visivamente), esempio 1. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 1-2).

## Prerequisiti
- [[Equazione del piano]]: il triangolo è una porzione del piano parametrico
- [[Combinazioni coniche, affini e convesse]]: i punti del triangolo sono combinazioni convesse dei vertici

## Porta a
- [[Trasformazione affine]]: mappa il triangolo di riferimento su un triangolo qualsiasi

## Collegati
- [[Area di un poligono]]: le coordinate sono rapporti di aree
