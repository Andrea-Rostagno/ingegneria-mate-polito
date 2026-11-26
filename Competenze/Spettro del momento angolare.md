---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["angular momentum spectrum", "algebra del momento angolare", "angular momentum algebra", "operatori a scala del momento angolare", "angular momentum ladder operators", "L+ e L-", "metodo dell'algebra generatrice dello spettro", "spectrum-generating algebra", "momento angolare quantistico"]
tags: [competenza, area/fisica]
---

# Spettro del momento angolare

> Dalle sole relazioni di commutazione $[L_j,L_m]=i\hbar\varepsilon_{jmn}L_n$ si ricava che $L^2$ ha autovalori $\hbar^2\ell(\ell+1)$ e $L_3$ autovalori $\hbar m$ con $-\ell\le m\le\ell$, $\ell$ intero o semintero.

## Definizione / enunciato
Le componenti di $\vec L$ non commutano tra loro, ma $[L_j,L^2]=0$: si diagonalizzano insieme $L^2$ e $L_3$, $L^2\phi_m=\hbar^2\ell(\ell+1)\phi_m$, $L_3\phi_m=\hbar m\phi_m$. Si introducono
$$L_\pm=L_1\pm iL_2,\qquad (L_\pm)^+=L_\mp,\qquad [L_3,L_\pm]=\pm\hbar L_\pm,\qquad [L_+,L_-]=2\hbar L_3.$$
Allora $L_3L_\pm\phi_m=\hbar(m\pm1)L_\pm\phi_m$: $L_\pm$ alzano e abbassano $m$ di 1 (stesso schema di $a,a^+$ nell'oscillatore).

## Formule chiave
$$L_-L_+=L^2-L_3^2-\hbar L_3,\qquad L_+L_-=L^2-L_3^2+\hbar L_3$$
$$L_\pm Y_{\ell,m}=\hbar\sqrt{\ell(\ell+1)-m(m\pm1)}\;Y_{\ell,m\pm1}$$
La positività delle norme $\hbar^2[\ell(\ell+1)-m(m\pm1)]\ge0$ impone $-\ell\le m\le\ell$, e $L_+\phi_\ell=0$, $L_-\phi_{-\ell}=0$. Applicando $s$ volte $L_-$ a $\phi_\ell$ si arriva a $\phi_{-\ell}$ solo se $s=2\ell$ è intero: $\ell=0,1,2,\dots$ oppure $\ell=\frac12,\frac32,\dots$

## Intuizione
L'algebra genera lo spettro: non serve risolvere equazioni differenziali. Il valore semintero non è escluso dall'algebra; lo escludono, per il momento angolare orbitale, le autofunzioni in coordinate sferiche ($e^{im\varphi}$ deve essere a un sol valore). I valori seminteri descrivono lo spin.

## Come si usa
Per $j=1$ le stesse formule danno le matrici $3\times3$: $J_3=\hbar\,\mathrm{diag}(1,0,-1)$, $J_-=\sqrt2\hbar\begin{pmatrix}0&0&0\\1&0&0\\0&1&0\end{pmatrix}$, $J_+=J_-^T$, che verificano $[J_+,J_-]=2\hbar J_3$ (`2022_QP.pdf` pp. 150-151). In generale la rappresentazione di indice $j$ ha dimensione $2j+1$. In QM_notes lo stesso risultato si ottiene con la notazione di Dirac, scrivendo $L^2=L_\mp L_\pm+L_z^2\pm\hbar L_z$ (`QM_notes3.pdf` pp. 39-42).

## Nei corsi
- **Quantum physics** (triennale): §9.1 della dispensa di V. Penna e §12.3 (realizzazione matriciale); cap. 4 delle note di M. Re Fiorentin. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 99-102, 150-151); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 39-42).

## Prerequisiti
- [[Commutatore di operatori]]: si diagonalizzano insieme L² e L₃
- [[Quantizzazione canonica]]: $L_j$ costruiti da $x$ e $p$ con i commutatori canonici
- [[Momento angolare]]: grandezza classica $\vec L=\vec r\wedge\vec p$

## Porta a
- [[Rotore rigido quantistico]]: autofunzioni $Y_{\ell m}$ in coordinate sferiche
- [[Matrici di Pauli]]: caso $j=1/2$
- [[Composizione dei momenti angolari]]: J = L + S con la stessa algebra

## Collegati
- [[Oscillatore armonico quantistico]]: stesso metodo degli operatori a scala
- [[Numeri quantici]]: ℓ e m sono i numeri quantici secondario e magnetico
