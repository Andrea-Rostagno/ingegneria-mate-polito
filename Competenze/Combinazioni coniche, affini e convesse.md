---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["conic combination", "affine combination", "convex combination", "combinazione conica", "combinazione affine", "combinazione convessa", "ricopertura conica", "conic hull", "ricopertura affine", "affine hull", "spanning set positivo", "base positiva", "indipendenza affine", "simplesso geometrico"]
tags: [competenza, area/ottimizzazione]
---

# Combinazioni coniche, affini e convesse

> Varianti della combinazione lineare $\sum_j\alpha_j\mathbf u_j$ ottenute vincolando i coefficienti (non negativi, a somma 1, o entrambi); generano coni, sottospazi affini e insiemi convessi.

## Definizione / enunciato
Dati $\mathbf u_j\in\mathbb R^m$ e coefficienti $\alpha_j$:
- $\alpha_j\ge0$: **combinazione conica**, genera la ricopertura conica $\mathrm{cone}(\cdot)$;
- $\sum_j\alpha_j=1$: **combinazione affine**, genera la ricopertura affine;
- entrambe: **combinazione convessa**, genera la ricopertura convessa.

**Spanning set positivo:** $D\subset\mathbb R^n$ con $\mathrm{cone}(D)=\mathbb R^n$. **Indipendenza lineare positiva:** $\mathbf d\notin\mathrm{cone}(D\setminus\{\mathbf d\})$ per ogni $\mathbf d\in D$. **Base positiva:** spanning set positivo con indipendenza lineare positiva.

**Indipendenza affine:** $\mathbf x_1,\dots,\mathbf x_k$ sono affinemente indipendenti se $\mathbf x_2-\mathbf x_1,\dots,\mathbf x_k-\mathbf x_1$ sono linearmente indipendenti, cioè se i vettori $(\mathbf x_j,1)\in\mathbb R^{m+1}$ lo sono. **Simplesso** in $\mathbb R^n$: ricopertura convessa di $n+1$ vettori affinemente indipendenti (triangolo in $\mathbb R^2$, tetraedro in $\mathbb R^3$).

## Formule chiave
**Teorema.** Uno spanning set positivo per $\mathbb R^n$ ha almeno $n+1$ elementi; una base positiva ne ha almeno $n+1$ e al più $2n$.

## Intuizione
Combinazione affine = pesi di un portafoglio (sommano a 1, ammesse vendite allo scoperto); combinazione convessa = valore atteso di una variabile discreta, $\mathbb E[X]=\sum_j\pi_jx_j$. Uno spanning set positivo "punta in tutte le direzioni" usando solo multipli non negativi.

## Come si usa
In un LP in forma standard si cerca la combinazione conica di costo minimo delle colonne di $A$ che dà $\mathbf b$. Le basi positive sono usate dai metodi di pattern search per il polling; il simplesso geometrico è la popolazione di Nelder-Mead.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 3-9).

## Prerequisiti
- [[Sottospazio generato]]: combinazioni lineari e linear hull
- [[Dipendenza e indipendenza lineare]]: base dell'indipendenza positiva e affine

## Porta a
- [[Insieme convesso]]: chiuso rispetto alle combinazioni convesse
- [[Cono convesso]]: generato da combinazioni coniche
- [[Pattern search]]: polling su una base positiva
- [[Metodo di Nelder-Mead]]: popolazione che forma un simplesso

## Collegati
- [[Valore atteso]]: combinazione convessa dei valori
- [[Base e dimensione]]: analogo lineare della base positiva
