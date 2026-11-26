---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Gauss map", "N^P", "versore normale a una superficie", "unit normal of a surface", "differenziale della mappa di Gauss", "N_*", "dN"]
tags: [competenza, area/algebra-geometria]
---

# Mappa di Gauss

> Associa a ogni punto della superficie il suo versore normale, quindi è una mappa verso la sfera unitaria $S^2$. Il suo differenziale $N_*$ è un endomorfismo simmetrico del piano tangente.

## Definizione / enunciato
$N:p\in S\mapsto N_p$ è un versore ortogonale a $S$. Ce ne sono due possibili e se ne sceglie uno. La **mappa di Gauss** della superficie parametrizzata $P$ è
$$N^P=N\circ P:(u,v)\mapsto\frac{P_u\times P_v}{\|P_u\times P_v\|}\in S^2 .$$
Il docente distingue $N$ (sui punti di $S$) da $N^P$ (sui parametri). Molti testi li identificano e scrivono $dN$ per $N_*$.

**Proposizione 1.** $N_{*p}$ è un endomorfismo $T_pS\to T_pS$.
- Intuitivamente: $T_{N(p)}S^2$ è parallelo a $T_pS$.
- Algebricamente: $N^P\cdot N^P=1$, quindi derivando $N^P_u\cdot N^P=0$. Dunque $N_*(P_u)=N^P_u$ e $N_*(P_v)=N^P_v$ sono ortogonali alla normale.

**Proposizione 2.** $N_{*p}$ è simmetrico rispetto alla prima forma fondamentale:
$$N_*(v)\cdot w=v\cdot N_*(w).$$
Basta verificarlo sulla base; il perché è lasciato da giustificare. Da $N^P\cdot P_v=0$, derivando in $u$:
$$N^P_u\cdot P_v=-N^P\cdot P_{uv}=-N^P\cdot P_{vu}=N^P_v\cdot P_u,$$
dove l'uguaglianza centrale vale per il teorema di Schwarz.

## Formule chiave
$$N^P_*(\partial_u)=N^P_u=N_*(P_u),\qquad N^P_*(\partial_v)=N^P_v=N_*(P_v),\qquad (g\circ f)_*=g_*\circ f_*$$

## Intuizione
$N_*$ misura quanto ruota la normale muovendosi sulla superficie: più la superficie è curva, più $N$ cambia. Su un piano $N$ è costante e $N_*=0$.

## Come si usa
Esempi della lezione:
- Cilindro: $N^P=(\cos u,\sin u,0)$.
- Sfera: $N^P=(\sin u\cos v,\sin u\sin v,\cos u)$.
- Grafico: $N^P=\frac{(-f_u,-f_v,1)}{\sqrt{1+f_u^2+f_v^2}}$.
- Paraboloide: $N^P=\frac{(-2u,-2v,1)}{\sqrt{1+4u^2+4v^2}}$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione20_GD.pdf` (pp. 1-11);
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 1, 12);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (p. 5).

## Prerequisiti
- [[Superficie parametrica]]: P_u, P_v e la normale P_u × P_v
- [[Applicazione tangente]]: N_* è l'applicazione tangente di N
- [[Prodotto vettoriale]]: costruzione del versore normale
- [[Teorema di Schwarz]]: P_uv = P_vu dà la simmetria di N_*

## Porta a
- [[Operatore forma]]: -N_* è l'operatore forma

## Collegati
- [[Orientazione di una superficie]]: la scelta tra i due versori normali è un'orientazione
