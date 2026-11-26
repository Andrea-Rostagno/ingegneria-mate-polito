---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["vector norms", "norma 1", "norma 2", "norma euclidea", "norma infinito", "norma di vettore"]
tags: [competenza, area/algebra-geometria]
---

# Norme vettoriali

> Le tre norme di $\mathbb R^n$ usate nel corso per misurare vettori, residui ed errori: $\|\cdot\|_1$, $\|\cdot\|_2$, $\|\cdot\|_\infty$.

## Definizione / enunciato
Per $x=(x_1,\dots,x_n)^T\in\mathbb R^n$:
$$\|x\|_1=\sum_{i=1}^n|x_i|,\qquad \|x\|_2=\sqrt{\sum_{i=1}^nx_i^2}=\sqrt{x^Tx}\ \ (\text{norma euclidea}),\qquad \|x\|_\infty=\max_{1\le i\le n}|x_i|.$$

## Formule chiave
$$\|x\|_2^2=x^Tx$$
Matlab: `norm(x,1)`, `norm(x,2)` o `norm(x)`, `norm(x,inf)`.

## Intuizione
Una norma riduce un vettore a un numero che ne misura la "grandezza"; scelte diverse pesano diversamente le componenti (somma, energia, componente peggiore). Servono per estendere errori assoluti e relativi ai vettori.

## Come si usa
Nel corso: errore relativo della soluzione di un sistema in norma infinito, `norm(u-x,inf)/norm(u,inf)`; residuo $\|Ay-b\|_2$ nei minimi quadrati, dove si sfrutta $\|z\|_2^2=z^Tz$ e l'invarianza per matrici ortogonali.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 3, 22-23, 91-95).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante): modulo $\|x\|=\sqrt{\langle x,x\rangle}$ in $\mathbb R^3$ e definizione astratta di spazio normato (positività, $\|av\|=|a|\|v\|$, disuguaglianza triangolare), con la norma associata a un prodotto scalare. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 17-21); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 7).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): norme $1$, $2=\sqrt{\mathbf x^T\mathbf x}$ e $\infty$ con i comandi `norm(x,1)`, `norm(x)`, `norm(x,inf)`; il corso introduce anche la norma dell'energia $\|\mathbf x\|_A=\sqrt{\mathbf x^TA\mathbf x}$ per $A$ sdp, usata nelle stime d'errore del metodo del gradiente. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 3, 79).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Metodo del gradiente]]: l'errore si stima nella norma dell'energia $\|\cdot\|_A$ (Metodi numerici)
- [[Norme matriciali]]: compatibilità ||Ax|| <= ||A|| ||x||
- [[Problema dei minimi quadrati]]: minimizza la norma 2 del residuo

## Collegati
- [[Errore assoluto e relativo]]: per i vettori il modulo diventa una norma
- [[Vettori applicati e vettori liberi]]: il modulo è la norma euclidea delle componenti
- [[Prodotto scalare]]: il modulo è la norma 2 (euclidea)
- [[Disuguaglianza di Cauchy-Schwarz]]: la triangolare è un assioma di norma
- [[Spazio vettoriale euclideo]]: la norma associata al prodotto standard è la norma 2
