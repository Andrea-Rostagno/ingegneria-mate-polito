---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["identical particles", "particelle indistinguibili", "indistinguishable particles", "operatore di permutazione", "permutation operator", "operatore di scambio", "exchange operator", "stati simmetrizzati", "symmetrized states", "funzione d'onda simmetrica e antisimmetrica"]
tags: [competenza, area/fisica]
---

# Particelle identiche

> Particelle con le stesse proprietà intrinseche non si possono distinguere in meccanica quantistica: l'hamiltoniana è simmetrica per scambio e gli stati fisici sono completamente simmetrici o completamente antisimmetrici.

## Definizione / enunciato
Per $N$ particelle identiche $H=\sum_j\left[\frac{p_j^2}{2m}+V(\vec x_j)\right]+\frac12\sum_{j\ne\ell}U(|\vec x_j-\vec x_\ell|)$ (eventualmente con termini di spin, spin-orbita, spin-spin con $\eta_{ij}=\eta_{ji}$) è invariante per lo scambio $\vec x_i\leftrightarrow\vec x_n$, $\vec p_i\leftrightarrow\vec p_n$, $\vec S_i\leftrightarrow\vec S_n$. L'operatore $P_{ji}$ scambia le posizioni di due particelle; combinandoli si ottengono le $N!$ permutazioni (gruppo simmetrico).

## Formule chiave
$$\Phi_s=\frac{1}{\sqrt{N!}}\sum_PP\,\psi(\vec x_1,\dots,\vec x_N),\qquad \Phi_a=\frac{1}{\sqrt{N!}}\sum_P(-1)^{\eta_P}P\,\psi(\vec x_1,\dots,\vec x_N)$$
$\eta_P=0,1$ se la permutazione è pari o dispari. Sotto lo scambio di due particelle $\Phi_s\to+\Phi_s$, $\Phi_a\to-\Phi_a$.
Se $H\psi_E=E\psi_E$ allora $H\Phi_E^s=E\Phi_E^s$ e $H\Phi_E^a=E\Phi_E^a$ (perché $PH=HP$); l'evoluzione temporale conserva la simmetria.

## Intuizione
Classicamente le particelle si distinguono seguendo le loro traiettorie; quantisticamente no. $\Phi_a$ si annulla quando due coordinate coincidono (le particelle "si evitano"), mentre $|\Phi_s|^2$ è massima quando le particelle sono nello stesso punto (per $N=3$, $|\Phi_s|^2\simeq6|\psi(\vec x_1,\vec x_1,\vec x_1)|^2$).

## Come si usa
Esempio di 4 bosoni in 3 stati con occupazioni 2, 1, 1: lo stato simmetrico sovrappone 12 configurazioni fisicamente equivalenti, che classicamente sarebbero distinte; con fermioni senza spin lo stato antisimmetrico non esiste, con lo spin (6 stati $\psi_{k,\sigma}$) si costruisce un determinante $4\times4$ ("collasso dell'informazione", `2022_QP.pdf` pp. 188-190). Esempi $N=3$ esplicitati a p. 168.

## Nei corsi
- **Quantum physics** (triennale): cap. 15 e §15.1 della dispensa di V. Penna, più l'appendice A. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 167-170, 188-190).

## Prerequisiti
- [[Equazione di Schrödinger]]: caso a N particelle
- [[Stati stazionari]]: gli autostati di H si simmetrizzano mantenendo l'energia

## Porta a
- [[Teorema spin-statistica]]: quale simmetria spetta a quale particella
- [[Atomo di elio]]: due elettroni identici

## Collegati
- [[Commutatore di operatori]]: le permutazioni commutano con un'hamiltoniana simmetrica
