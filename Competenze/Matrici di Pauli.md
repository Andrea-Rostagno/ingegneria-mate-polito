---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Pauli matrices", "operatore di spin", "spin operator", "spin 1/2", "spin one-half", "spinore", "spinor", "equazione di Pauli", "Pauli equation", "rappresentazione matriciale dello spin"]
tags: [competenza, area/fisica]
---

# Matrici di Pauli

> Lo spin dell'elettrone è un momento angolare intrinseco con $s=1/2$, rappresentato da matrici $2\times2$: $\vec S=\frac\hbar2\vec\sigma$, dove $\sigma_1,\sigma_2,\sigma_3$ sono le matrici di Pauli; gli stati diventano spinori a due componenti.

## Definizione / enunciato
L'esperimento di Stern-Gerlach con atomi di argento ($\ell=0$, quindi $\mu_3\propto m=0$) mostra comunque una separazione in due fasci: l'elettrone possiede un momento angolare intrinseco $\vec S$ con due stati. Le componenti di $\vec S$ hanno la stessa algebra di $\vec L$ ma sono matrici:
$$S_k=\frac\hbar2\sigma_k,\quad \sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\ \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\ \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

## Formule chiave
$$[S_1,S_2]=i\hbar S_3\ (\text{e cicliche}),\qquad S_\pm=S_1\pm iS_2,\quad [S_3,S_\pm]=\pm\hbar S_\pm$$
$$S_k^2=\frac{\hbar^2}{4}I\ \Rightarrow\ S^2=\frac34\hbar^2I=\hbar^2s(s+1)I,\ s=\tfrac12$$
$$S_3|\pm\tfrac12\rangle=\pm\tfrac\hbar2|\pm\tfrac12\rangle,\ |+\tfrac12\rangle=\binom10,\ |-\tfrac12\rangle=\binom01;\quad S_+|-\tfrac12\rangle=\hbar|+\tfrac12\rangle,\ S_-|+\tfrac12\rangle=\hbar|-\tfrac12\rangle$$
Spinore: $|\Psi\rangle=\psi_+(\vec x)|+\tfrac12\rangle+\psi_-(\vec x)|-\tfrac12\rangle=\binom{\psi_+}{\psi_-}$.

## Intuizione
Lo spin è il caso $j=1/2$ dell'algebra del momento angolare, non realizzabile con funzioni di $\theta,\varphi$ ma solo con matrici. Un termine di spin nell'hamiltoniana accoppia le due componenti dello spinore.

## Come si usa
Con $H=H_0+\vec\alpha\cdot(\vec L+g\vec S)$ l'equazione di Schrödinger diventa un sistema di due equazioni accoppiate per $\psi_\pm$; con $\vec\alpha=e\vec B/2m_ec$ e $g=2$ si ottiene l'**equazione di Pauli**, limite non relativistico dell'equazione di Dirac (`2022_QP.pdf` pp. 142-143). Le matrici di spin modellano anche sistemi a due livelli (modello di Jaynes-Cummings). In QM_notes: autospinori di $S_x$ e probabilità di misura su uno spinore dato (`QM_notes3.pdf` pp. 46-50).

## Nei corsi
- **Quantum physics** (triennale): §12.1 della dispensa di V. Penna; §4.2 delle note di M. Re Fiorentin. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 140-143); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 46-50).

## Prerequisiti
- [[Spettro del momento angolare]]: caso j = 1/2 dell'algebra
- [[Notazione di Dirac]]: gli stati di spin sono vettori colonna

## Porta a
- [[Composizione dei momenti angolari]]: J = L + S
- [[Effetto Zeeman anomalo]]: il momento magnetico di spin separa i livelli
- [[Modello di Jaynes-Cummings]]: S₃ e S± descrivono un atomo a due livelli

## Collegati
- [[Numeri quantici]]: numero quantico di spin e Stern-Gerlach
- [[Proprietà magnetiche della materia]]: i momenti magnetici di spin danno il magnetismo
