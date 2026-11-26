---
tipo: competenza
area: algebra-geometria
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [area of a polygon, formula dell'area di Gauss, formula di Gauss, shoelace formula, formula del laccio, area con il prodotto vettoriale]
tags: [competenza, area/algebra-geometria]
---

# Area di un poligono

> L'area di un poligono piano di vertici $P_0,\dots,P_{n-1}$ si calcola sommando le aree (con segno) dei triangoli $O P_i P_{i+1}$ tramite il prodotto vettoriale.

## Definizione / enunciato
Problema 2 degli appunti ($d=2$): dato un poligono $P$ con $n$ vertici $\{P_i\}_{i\in[0,n-1]}$, calcolarne l'area. Ipotesi iniziali: l'origine $O$ è interna al poligono e i vertici sono in senso **antiorario**. Con i vettori $\overrightarrow{OP_i}$ e $\overrightarrow{OP_{i+1}}$ il poligono si divide in $n$ triangoli $T_{OP_iP_{i+1}}$, e per la proprietà del prodotto vettoriale
$$\text{Area}_{OP_iP_{i+1}}=\frac12\left\|\overrightarrow{OP_i}\times\overrightarrow{OP_{i+1}}\right\|_2 .$$

## Formule chiave
$$\text{Area}_P=\sum_{i=0}^{n-1}\frac12\left\|\overrightarrow{OP_i}\times\overrightarrow{OP_{i+1}}\right\|_2=\frac12\sum_{i=0}^{n-1}\left(x_iy_{i+1}-x_{i+1}y_i\right)$$
(indici modulo $n$). La formula si generalizza al caso in cui l'origine non è interna e i vertici non sono in senso antiorario:
$$\text{Area}_P=\frac12\left|\sum_{i=0}^{n-1}\left(x_iy_{i+1}-x_{i+1}y_i\right)\right| .$$

## Intuizione
$x_iy_{i+1}-x_{i+1}y_i$ è la terza componente del prodotto vettoriale, cioè un'area con segno: positiva se si gira in senso antiorario. Se l'origine è esterna, i triangoli "di troppo" hanno segno opposto e si cancellano; il valore assoluto sistema l'orientazione.

## Come si usa
Nel codice l'area è un'operazione "2D": negli appunti, se $\tau$ è la tolleranza per le lunghezze, per le aree si usa $\approx\tau^2$, perché si ammettono solo poligoni con lati di lunghezza maggiore di $\tau$ (il più piccolo ammissibile è il rettangolo di lati $\tau$). Ogni termine $x_iy_{i+1}-x_{i+1}y_i$ può soffrire di cancellazione numerica se i due prodotti sono quasi uguali.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): appunti manoscritti di geometria computazionale (scansione OneNote letta visivamente), problema 2. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 4-5); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1, tolleranza e cancellazione).

## Prerequisiti
- [[Prodotto vettoriale]]: la sua norma è il doppio dell'area del triangolo

## Porta a
- Nessuno nel corso.

## Collegati
- [[Coordinate baricentriche]]: definite come rapporti di aree di triangoli
- [[Cancellazione numerica]]: ogni addendo è una differenza di prodotti
- [[Confronto tra numeri floating point]]: tolleranza tau^2 per le aree
