---
tipo: competenza
area: algebra-geometria
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [point-line orientation test, test di orientazione, punto a sinistra o a destra di una retta, proiezione di un punto su una retta, proiezione ortogonale di un punto su una retta]
tags: [competenza, area/algebra-geometria]
---

# Posizione di un punto rispetto a una retta

> Problema di geometria computazionale: dato un punto $P$ e la retta per $P_0,P_1$ nel piano, stabilire con prodotto vettoriale e scalare se $P$ sta a sinistra, a destra o sulla retta, e proiettarlo sulla retta.

## Definizione / enunciato
Problema 1 degli appunti ($d=2$): dato un punto $P$ e una retta $r$ definita dai punti $P_0,P_1$, trovare la posizione di $P$ rispetto a $r$. Si definiscono
$$u=P_1-P_0,\qquad v=P-P_0 .$$

## Formule chiave
Segno del prodotto vettoriale (componente lungo l'asse ortogonale al piano):
- $u\times v>0$: $P$ a **sinistra** di $r$;
- $u\times v<0$: $P$ a **destra**;
- $u\times v=0$: $P$ **sulla retta**, e allora il prodotto scalare dice dove: $u\cdot v<0$ prima di $P_0$, $u\cdot v>0$ dopo $P_0$, $u\cdot v=0$ coincide con $P_0$.

**Proiezione** di $P$ su $r:\ x=P_0+\alpha(P_1-P_0)$: il punto proiettato è $P_r=P_0+\alpha_{P_r}(P_1-P_0)$ con
$$\alpha_{P_r}=\frac{\|v_r\|_2}{\|u\|_2}=\frac{u\cdot v}{\|u\|_2^2},\qquad P_r=P_0+\frac{u\cdot v}{\|u\|_2^2}\,(P_1-P_0).$$

## Intuizione
Il prodotto vettoriale vale $\|u\|\|v\|\sin\theta$ lungo la normale: il suo segno dice da che parte si gira per andare da $u$ a $v$. Il prodotto scalare $\|u\|\|v\|\cos\theta$ dice se $v$ punta nello stesso verso di $u$, e diviso per $\|u\|^2$ dà la coordinata curvilinea della proiezione.

## Come si usa
Nei codici i test "$=0$" non vanno fatti con l'uguaglianza esatta ma con una **tolleranza**, perché si lavora con numeri di macchina; inoltre $u\times v$ in $\mathbb R^2$ vale $x_1y_2-x_2y_1$ e, se i due termini sono quasi uguali, può subire cancellazione numerica.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): appunti manoscritti di geometria computazionale (scansione OneNote letta visivamente), problema 1. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 3-4); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1, tolleranze).

## Prerequisiti
- [[Prodotto vettoriale]]: il segno dà sinistra o destra
- [[Prodotto scalare]]: posizione lungo la retta e proiezione
- [[Equazioni della retta]]: forma parametrica x = P0 + alpha(P1 - P0)

## Porta a
- Nessuno nel corso.

## Collegati
- [[Proiezione ortogonale di un vettore]]: P_r - P_0 è la proiezione di v su u
- [[Confronto tra numeri floating point]]: i test di uguaglianza a zero usano una tolleranza
- [[Cancellazione numerica]]: il prodotto vettoriale sottrae termini quasi uguali
- [[Distanze tra punti, rette e piani]]: la distanza punto-retta è la lunghezza di P - P_r
