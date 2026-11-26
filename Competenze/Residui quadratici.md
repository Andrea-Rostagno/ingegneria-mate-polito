---
tipo: competenza
area: algebra-geometria
corsi: [Crittografia]
livello: [magistrale]
aliases: ["quadratic residues", "residuo quadratico", "quadratic residue", "radice quadrata modulare", "modular square root", "criterio di Eulero", "Euler's criterion", "algoritmo di Cipolla", "Cipolla's algorithm", "Tonelli-Shanks", "equazione di secondo grado modulo N"]
tags: [competenza, area/algebra-geometria]
---

# Residui quadratici

> Un residuo $r\not\equiv0\pmod N$ è quadratico se ha una radice quadrata modulo $N$. Con un modulo primo è facile decidere se lo è e calcolarne la radice. Con $N=pq$ farlo senza la fattorizzazione è difficile: la difficoltà è equivalente a fattorizzare $N$.

## Definizione / enunciato
$r$ è un **residuo quadratico** modulo $N$ se esiste $x$ con $x^2\equiv r\pmod N$ (`Critto_week3.pdf` p. 11).

**Criterio di Eulero** (Teorema 3.4.3). Sia $p$ primo e $p\nmid r$. Allora $r$ è residuo quadratico modulo $p$ se e solo se $r^{\frac{p-1}{2}}\equiv1\pmod p$ (`Critto_week3.pdf` p. 12; `Crypto6.pdf` p. 9).

**Proprietà** (`Crypto6.pdf` p. 9):
1. i residui quadratici formano un sottogruppo $G$ di $\mathbb Z_n^*$;
2. se $n=2p+1$ con $n$ e $p$ primi, $G$ ha ordine $p$;
3. se $p\equiv3\pmod4$, una radice quadrata di $r$ è $r^{\frac{p+1}{4}}$;
4. se $p\equiv1\pmod4$, esistono algoritmi efficienti per la radice, per esempio Tonelli-Shanks.

Altri fatti:
- se $p\equiv3\pmod4$ e $r$ non è residuo, allora $-r$ lo è;
- il prodotto di due non residui modulo $p$ è un residuo (es. 3.4.5).

## Formule chiave
$$r^{\frac{p-1}{2}}\equiv1\pmod p\iff r\ \text{residuo};\qquad p\equiv3\ (4):\ \ x=r^{\frac{p+1}{4}}$$
**Algoritmo di Cipolla** (`Crypto6.pdf` p. 10):
- si sceglie $s$ tale che $s^2-r$ non sia residuo;
- con $A=\begin{pmatrix}s & s^2-r\\ 1 & s\end{pmatrix}$ si ha $A^{\frac{p+1}{2}}=\begin{pmatrix}u&0\\0&u\end{pmatrix}$, e $u$ è la radice cercata.

## Intuizione
$\mathbb Z_p^*$ è ciclico di ordine $p-1$, e i quadrati sono esattamente le potenze pari del generatore: sono metà degli elementi. Con un modulo composto tutto si spezza sui fattori. In $\mathbb Z_{15}$, per esempio, $x^2=1$ ha 4 soluzioni: $1,4,11,14$.

Trovare soluzioni non banali di $x^2=1$ in $\mathbb Z_n$ equivale a trovare fattori di $n$ (`Critto_week3.pdf` p. 13).

## Come si usa
- **Modulo composto:** si fattorizza $N=\prod p_j^{r_j}$ e si risolve modulo ogni $p_j^{r_j}$. Per il teorema cinese esiste una soluzione modulo $N$ se e solo se esiste modulo ogni fattore. Senza fattorizzazione si decide con il simbolo di Jacobi (`Critto_week3.pdf` p. 13).
- **Crittosistemi:** su questa difficoltà si basano il generatore di Blum-Blum-Shub e il crittosistema di Rabin.

## Nei corsi
- **Crittografia** (magistrale): §3.4 "Equazione di secondo grado" delle dispense italiane e §6.3 delle inglesi. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, pp. 11-13); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (pp. 9-10).

## Prerequisiti
- [[Classi di resto modulo n]]: equazioni in $\mathbb Z_N$
- [[Gruppo ciclico]]: $\mathbb Z_p^*$ è ciclico
- [[Esponenziazione modulare veloce]]: criterio di Eulero e radice $r^{(p+1)/4}$

## Porta a
- [[Generatore Blum-Blum-Shub]]: seme residuo quadratico, $x_{i+1}=x_i^2$
- [[Crittosistema di Rabin]]: decifrare significa estrarre radici quadrate

## Collegati
- [[Teorema cinese dei resti]]: riduce il problema ai fattori primi
- [[Piccolo teorema di Fermat]]: alla base del criterio di Eulero
- [[Teorema di Lagrange sui gruppi]]: i residui sono un sottogruppo
