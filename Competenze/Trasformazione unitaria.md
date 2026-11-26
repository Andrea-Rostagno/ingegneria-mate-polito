---
tipo: competenza
area: fisica
corsi: [Quantum physics, Analisi funzionale]
livello: [triennale]
aliases: ["unitary transformation", "operatore unitario", "unitary operator", "matrice unitaria", "unitary matrix", "cambio di base quantistico", "operatore di traslazione", "translation operator", "operatore di rotazione", "rotation operator", "generatore di una trasformazione"]
tags: [competenza, area/fisica]
---

# Trasformazione unitaria

> Due basi ortonormali dello spazio degli stati sono legate da una matrice unitaria $S$ ($SS^+=S^+S=I$), che conserva la norma e quindi le probabilità; ogni operatore hermitiano $A$ genera un operatore unitario $e^{i\varphi A}$.

## Definizione / enunciato
**Lemma:** date due basi $\{\phi_n\}$ e $\{\phi'_n\}$, $\phi'_n=\sum_mS_{mn}\phi_m$ con $S_{mn}=(\phi_m,\phi'_n)$, e $S$ è unitaria (dimostrazione con la completezza $\sum_i\phi_i^*(y)\phi_i(x)=\delta(x-y)$).
**Corollari:** $\phi_i=\sum_nS^+_{ni}\phi'_n$; componenti $v'_n=\sum_mS^+_{nm}v_m$; norma conservata $\sum|v'_m|^2=\sum|v_j|^2$; operatori $A'_{nm}=\sum_{ij}S^+_{ni}S_{jm}A_{ij}$.
**Generatori:** per $A$ hermitiano e $\varphi$ reale, $T(\varphi)=e^{i\varphi A}=\sum_s\frac{(i\varphi)^sA^s}{s!}$ è unitario: $T^+(\varphi)=T(-\varphi)=T^{-1}(\varphi)$.

## Formule chiave
$$e^{i\lambda\hat p/\hbar}\psi(x)=\sum_s\frac{\lambda^s}{s!}\frac{\partial^s\psi}{\partial x^s}=\psi(x+\lambda)\quad\text{(traslazione)}$$
$$e^{i\theta L_3/\hbar}\psi(x_1,x_2,x_3)=\psi(x_1\cos\theta-x_2\sin\theta,\ x_1\sin\theta+x_2\cos\theta,\ x_3)\quad\text{(rotazione)}$$
$$U(t)=e^{-itH/\hbar}\quad\text{(evoluzione temporale)}$$

## Intuizione
L'unitarietà è l'analogo complesso dell'ortogonalità: un cambio di base "ruota" i vettori senza cambiarne la lunghezza, quindi l'interpretazione probabilistica non dipende dalla rappresentazione scelta. Impulso, momento angolare ed energia sono i generatori di traslazioni, rotazioni ed evoluzione temporale.

## Come si usa
Esempio fondamentale: il passaggio dalla base delle posizioni a quella degli impulsi è la trasformata di Fourier, con $\langle x|k\rangle=\phi_k(x)=\frac{e^{ikx}}{\sqrt{2\pi}}$, $\langle k|x\rangle=\frac{e^{-ikx}}{\sqrt{2\pi}}$, $|x\rangle=\int dk\,\langle k|x\rangle|k\rangle$, $|k\rangle=\int dx\,\langle x|k\rangle|x\rangle$ (`2022_QP.pdf` p. 131; nelle due formule esplicite la dispensa stampa gli esponenziali con i segni scambiati, $e^{+ikx}$ per $|x\rangle$ ed $e^{-ikx}$ per $|k\rangle$). Una matrice hermitiana si diagonalizza con $U^+CU=\Lambda$ (caso degenere degli operatori hermitiani, p. 72; operatori commutanti, p. 86). La rotazione generale è $R(\alpha,\beta,\theta)=\exp[i(\alpha L_1+\beta L_2+\theta L_3)/\hbar]$ (p. 139). In QM_notes la base non ortonormale si riconduce a una ortonormale con $P=QA$ (`QM_notes3.pdf` pp. 36-38).

## Nei corsi
- **Quantum physics** (triennale): §11.1 e §11.5 della dispensa di V. Penna. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 126-128, 131, 137-139).
- **Analisi funzionale** (triennale): $T\in\mathcal B(H_1,H_2)$ è **unitario** se $T^*T=\mathrm{id}_{H_1}$ e $TT^*=\mathrm{id}_{H_2}$ (Def. 10.9), cioè l'aggiunto è l'inverso; equivalentemente $T$ è un **isomorfismo isometrico** (Prop. 10.13). Ogni unitario su $H$ è normale, $\sigma(T)\subseteq\{|\lambda|=1\}$ (Prop. 10.24) e l'insieme degli unitari è chiuso in $\mathcal B(H)$. Esempio: $D_w$ su $\ell^2$ è unitario se e solo se $|w_k|=1$ per ogni $k$; lo shift $S^*$ è un'isometria ma non è unitario. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 152-155, 158); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 6-8, 11).

## Prerequisiti
- [[Notazione di Dirac]]: stati e operatori come vettori e matrici
- [[Cambiamento di base]]: lo stesso problema nel caso reale finito

## Porta a
- [[Operatore di evoluzione temporale]]: è la trasformazione unitaria generata da H
- [[Rappresentazione di Heisenberg]]: gli operatori si trasformano con $U_t$

## Collegati
- [[Matrice ortogonale]]: analogo reale della matrice unitaria
- [[Trasformata di Fourier]]: cambio di base tra posizioni e impulsi
- [[Matrice diagonalizzabile]]: diagonalizzazione unitaria di una matrice hermitiana
- [[Operatore aggiunto]]: unitario significa T*T = TT* = id (Analisi funzionale)
- [[Isometria lineare]]: unitario equivale a isomorfismo isometrico (Analisi funzionale)
