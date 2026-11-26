---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["signature of a quadratic form", "segno di una forma quadratica", "carattere di una forma quadratica", "forma definita positiva", "forma semidefinita", "forma indefinita", "regola di Cartesio", "Descartes' rule of signs"]
tags: [competenza, area/algebra-geometria]
---

# Segnatura di una forma quadratica

> Il segno di una forma quadratica (definita, semidefinita, indefinita) è quello dei suoi autovalori; la segnatura $\sigma(q)=(\sigma_+,\sigma_-)$ li conta, e la regola di Cartesio la dà senza calcolare le radici.

## Definizione / enunciato
$q$ è, per ogni $x\neq0$:
- **definita positiva** se $q(x)>0$;
- **semidefinita positiva** se $q(x)\ge0$;
- **definita negativa** se $q(x)<0$;
- **semidefinita negativa** se $q(x)\le0$;
- **indefinita** se assume sia valori positivi sia valori negativi.

In forma canonica $q=\sum q_{ii}x_i^2$ il segno si legge dai coefficienti. Poiché questi sono gli autovalori di $Q$, e la similitudine li conserva, **il segno di $q$ è il segno degli autovalori di $Q$**.

**Segnatura:** $\sigma(q)=(\sigma_+,\sigma_-)$, numero di autovalori positivi e negativi; è invariante per similitudine. Con $n$ l'ordine e $m,m_1,m_2<n$:
- $\sigma=(n,0)$: definita positiva; $\sigma=(0,n)$: definita negativa;
- $\sigma=(m,0)$: semidefinita positiva; $\sigma=(0,m)$: semidefinita negativa;
- $\sigma=(m_1,m_2)$ con entrambi positivi: indefinita.

## Formule chiave
**Regola di Cartesio:** se tutte le radici di un polinomio reale sono reali, il numero di radici positive è il numero di cambiamenti di segno (c.s.) nella successione dei coefficienti. Si applica al polinomio caratteristico di $Q$ simmetrica, che ha solo radici reali. Il termine noto $p_Q(0)=\det Q$ dice se c'è l'autovalore 0.

## Intuizione
Gli autovalori sono i coefficienti della forma lungo gli assi principali: se sono tutti positivi la forma "sale" in ogni direzione (paraboloide verso l'alto), se sono di segni misti c'è una "sella". Lo zero segnala una direzione piatta (semidefinita).

## Come si usa
Esempi da p. 25-27 di `13. Eucliean Vector Spaces...pdf`:
- $x^2-2xy+2y^2$: $p_Q=\lambda^2-3\lambda+1$, 2 c.s. e termine noto non nullo, quindi 2 radici positive: definita positiva.
- $x^2+4xy+4y^2$: $p_Q=\lambda^2-5\lambda$, una radice nulla e una positiva: semidefinita positiva.
- $x^2+4xy+3y^2$: $p_Q=\lambda^2-4\lambda-1$, una positiva e una negativa: indefinita.
- $(x+y)^2-(x+z)^2$: $p_Q=-\lambda^3+3\lambda$, radici nulla, positiva e negativa: indefinita.
- Quiz: "esiste $x$ con ${}^txAx<0$?" equivale a chiedere se $A$ ha un autovalore negativo.

## Nei corsi
- **Algebra lineare** (triennale): segno delle forme quadratiche (slide di S. Mercadante); nel modulo numerico il caso definito positivo è l'ipotesi della fattorizzazione di Cholesky. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 22-29); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §8.1.3); `Appunti, riassunti e formulari/Diagonalizzazione2_MatOrtog.pdf` (Esercizi 10-11).

## Prerequisiti
- [[Forma quadratica]]: il segno si legge dagli autovalori

## Porta a
- Nessuno.

## Collegati
- [[Matrice simmetrica definita positiva]]: definita positiva se e solo se σ = (n, 0)
- [[Quoziente di Rayleigh]]: è la forma quadratica divisa per ‖x‖², e su un autovettore vale l'autovalore
- [[Classificazione delle quadriche]]: i segni degli autovalori distinguono ellissoidi, iperboloidi e paraboloidi
- [[Classificazione delle coniche]]: q = −1, 0, 1 dà iperboli, ellissi o rette a seconda del segno di q
