---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["generalized helix", "cylindrical helix", "elica generalizzata", "teorema di Lancret", "Lancret's theorem", "asse dell'elica", "pendenza dell'elica"]
tags: [competenza, area/algebra-geometria]
---

# Elica cilindrica

> Una curva la cui tangente forma un angolo costante con una direzione fissa $\vec g$. Si riconosce perché il rapporto $K/\tau$ è costante.

## Definizione / enunciato
Un'**elica cilindrica** (o generalizzata) è una curva la cui retta tangente forma in ogni punto un angolo costante $\alpha$ con una direzione prefissata $\vec g$ (versore). La direzione $\vec g$ si chiama asse o generatrice, l'angolo $\alpha$ pendenza.

Con l'ascissa curvilinea la condizione è $T(s)\cdot\vec g=\cos\alpha$, costante, e non dipende dalla parametrizzazione. La curva giace su un cilindro, cioè sull'insieme delle rette parallele a $\vec g$ che passano per una curva piana $Q$.

**Proposizioni (dimostrate).** Il docente non usa il nome "Lancret".
1. Se $P$ è un'elica cilindrica e non è una retta, allora $N\cdot\vec g=0$ e $B\cdot\vec g$ è costante.
2. Se $K\neq0$ e $\tau\neq0$: $P$ è un'elica cilindrica se e solo se $K/\tau$ è costante.
   - (⇒) Poiché $\vec g\perp N$, si scrive $\vec g=\cos\alpha\,T+\sin\alpha\,B$. Derivando si ottiene $\cos\alpha\,K+\sin\alpha\,\tau=0$.
   - (⇐) $\cos\alpha\,T+\sin\alpha\,B$ ha derivata nulla, quindi è un vettore costante $V$, e $T\cdot V=\cos\alpha$.

## Formule chiave
$$\frac{K}{\tau}=-\tan\alpha,\qquad \alpha=\arctan\Big(-\frac K\tau\Big),\qquad \vec g=\cos(\alpha)\,T+\sin(\alpha)\,B$$
Le relazioni valgono in qualsiasi parametrizzazione.

Equazione con $\vec g\parallel z$ e curva base $Q$ nel piano $xy$ (ascissa $\bar s$):
$$P(s)=Q(s\sin\alpha)+\cos(\alpha)\,s\,\vec g .$$

## Intuizione
La curva "sale" a pendenza costante su un cilindro qualsiasi. Il caso del cilindro circolare è l'[[Elica circolare]], l'unico in cui $K$ e $\tau$ sono costanti separatamente.

## Come si usa
Esempio svolto a lezione: $P(t)=(e^t,e^{-t},\sqrt2t)$.
- $K=\tau=\frac{\sqrt2}{(e^t+e^{-t})^2}$, quindi $K/\tau=1$: è un'elica cilindrica, non circolare.
- La pendenza è $\alpha=\frac34\pi$.
- L'asse è $\vec g=-\frac{\sqrt2}{2}T+\frac{\sqrt2}{2}B=(-\tfrac{\sqrt2}2,\tfrac{\sqrt2}2,0)$.
- La proiezione sul piano $x-y=0$, ortogonale a $\vec g$, è $P-(P\cdot\vec g)\vec g=(\cosh t,\cosh t,\sqrt2t)$.

Secondo esempio: $(\cosh t,\frac{\sqrt2}2t+\sinh t,\frac{\sqrt2}2t-\sinh t)$.
- $K/\tau=-\frac{\sqrt2}{2}$.
- $\vec g=(0,\frac{\sqrt2}2,-\frac{\sqrt2}2)$.

Controesempio: per $(t,t^2,t^3)$ il rapporto $K/\tau$ non è costante, quindi non è un'elica.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione07_GD.pdf` (pp. 5-15);
  - `triennale/ANNO 2/geometria differenziale/Lezione08_GD.pdf` (pp. 1-6, 12-25).

## Prerequisiti
- [[Formule di Frenet]]: si deriva g = cos α T + sin α B
- [[Torsione di una curva]]: serve τ ≠ 0

## Porta a
- Nessuno.

## Collegati
- [[Elica circolare]]: caso particolare a curvatura e torsione costanti
