---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["spectral theorem for compact operators", "teorema spettrale per operatori compatti normali", "teorema spettrale per operatori compatti autoaggiunti", "decomposizione spettrale", "spectral decomposition", "base ortonormale di autovettori"]
tags: [competenza, area/analisi]
---

# Teorema spettrale per operatori compatti

> Un operatore compatto normale su uno spazio di Hilbert si diagonalizza: $Tx=\sum_\lambda\lambda P_{E_T(\lambda)}x$, e (se $H$ è separabile) esiste una base ortonormale di autovettori.

## Definizione / enunciato
**Teor. 11.32.** Sia $T\in\mathcal K(H)$ normale (se $\mathbb F=\mathbb R$, autoaggiunto). Allora:
(i) $\sigma(T)$ è finito o numerabile, e nel secondo caso 0 è l'unico punto di accumulazione;
(ii) $n_\lambda:=\dim E_T(\lambda)<\infty$ per ogni $\lambda\in\sigma(T)\setminus\{0\}$;
(iii) se $B_\lambda=\{e^\lambda_1,\dots,e^\lambda_{n_\lambda}\}$ è una base ortonormale di $E_T(\lambda)$, allora $B=\bigcup_{\lambda\ne0}B_\lambda$ è una base ortonormale di $(\operatorname{Ker}T)^\perp=\overline{\operatorname{Im}T}$;
(iv) per ogni $x\in H$, con convergenza incondizionata,
$$Tx=\sum_{\lambda\in\sigma(T)\setminus\{0\}}\lambda\sum_{j=1}^{n_\lambda}\langle x,e^\lambda_j\rangle e^\lambda_j=\sum_{\lambda\in\sigma(T)\setminus\{0\}}\lambda\,P_{E_T(\lambda)}x.$$
**Cor. 11.34.** Se inoltre $H$ è separabile, $H$ ha una base ortonormale di autovettori di $T$.

## Formule chiave
Prop. 11.31: $\operatorname{Ker}T=\Big(\bigcup_{\lambda\in\sigma(T)\setminus\{0\}}E_T(\lambda)\Big)^\perp$.
Oss. 11.35: con la base di autovettori $\{v_n\}$ e $w_n$ autovalori, $\Xi:H\to\ell^2$, $\Xi(x)=(\langle x,v_n\rangle)_n$, trasforma $T$ nell'operatore di moltiplicazione: $\Xi T=D_w\Xi$, con $w\in c_0$.

## Intuizione
Generalizza la diagonalizzazione ortogonale delle matrici hermitiane/normali: autospazi ortogonali (normalità), di dimensione finita (compattezza), che insieme al nucleo ricoprono tutto lo spazio. Il passo chiave è l'esistenza di un autovalore di modulo $\|T\|_{op}$ (Prop. 11.30), da cui si procede restringendo $T$ all'ortogonale degli autospazi già trovati.

## Come si usa
Per calcolare funzioni di $T$ e risolvere $Tx-\mu x=y$ "per componenti" nella base di autovettori; per riconoscere che un compatto normale è unitariamente equivalente a un $D_w$ con $w\in c_0$. Le ipotesi sono necessarie: l'operatore integrale con nucleo $e^{x-y}$ è compatto ma non normale e i suoi autospazi non sono ortogonali.

## Nei corsi
- **Analisi funzionale** (triennale): §11.4 "Il teorema spettrale" (Prop. 11.30-11.31, Teor. 11.32, Cor. 11.34, Oss. 11.35). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 179-183); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (pp. 7-8).

## Prerequisiti
- [[Spettro di un operatore compatto]]: struttura dello spettro
- [[Operatore normale]]: autospazi ortogonali
- [[Base ortonormale di uno spazio di Hilbert]]: si costruisce una base di autovettori
- [[Proiezione ortogonale di un vettore]]: T come somma di λ P_E(λ)

## Collegati
- [[Endomorfismo simmetrico]]: teorema spettrale in dimensione finita
- [[Matrice diagonalizzabile]]: diagonalizzazione delle matrici
- [[Operatore di moltiplicazione]]: forma diagonale D_w di un compatto normale
- [[Operatore compatto]]: ipotesi di compattezza
