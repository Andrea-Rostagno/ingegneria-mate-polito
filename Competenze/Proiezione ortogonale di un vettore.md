---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Analisi funzionale]
livello: [triennale]
aliases: ["vector projection", "orthogonal projection", "componente di un vettore lungo un altro", "coefficienti di Fourier", "proiezione ortogonale su un sottospazio", "proj_U"]
tags: [competenza, area/algebra-geometria]
---

# Proiezione ortogonale di un vettore

> La parte di un vettore che giace lungo una direzione (o in un sottospazio), ottenuta con il prodotto scalare: base di Gram-Schmidt e dei coefficienti di Fourier.

## Definizione / enunciato
La **proiezione (scalare)** di $\vec v$ sulla direzione di $\vec u\neq\vec 0$ è $\|\vec v\|\cos\theta=\dfrac{\langle\vec u,\vec v\rangle}{\|\vec u\|}$, detta anche componente di $\vec v$ lungo $\vec u$. Il **vettore proiezione** si ottiene moltiplicandola per il versore $\hat u$:
$$\vec v_{\vec u}=\frac{\langle\vec u,\vec v\rangle}{\langle\vec u,\vec u\rangle}\,\vec u .$$

**Su un sottospazio** (Notari, Teorema 3): se $E=(e_1,\dots,e_t)$ è una base ortonormale di $U\subseteq\mathbb R^n$,
$$\mathrm{proj}_U(v)=(v\cdot e_1)e_1+\dots+(v\cdot e_t)e_t,$$
indipendente dalla base ortonormale scelta; $\mathrm{proj}_U$ è un'applicazione lineare e $\mathrm{proj}_U(v)$ è l'unico vettore di $U$ con $v-\mathrm{proj}_U(v)\in U^\perp$.

## Formule chiave
$$\vec v_{\vec u}=\frac{\langle\vec u,\vec v\rangle}{\langle\vec u,\vec u\rangle}\vec u,\qquad v=\langle v,b_1\rangle b_1+\dots+\langle v,b_n\rangle b_n\ \ (B\ \text{ortonormale})$$
I coefficienti $\langle v,b_i\rangle$ sono i **coefficienti di Fourier** di $v$ rispetto alla base ortonormale.

## Intuizione
Rispetto a una base ortonormale le componenti si leggono "per proiezioni ortogonali", cioè con un prodotto scalare. Rispetto a una base qualsiasi invece si scompone per proiezioni parallele e bisogna risolvere un sistema.

## Come si usa
- Esempio (p. 22 di `3_Calcolo_vettori_in_R^3`): la proiezione di $x=[1,1,-2]$ lungo $y=[3,4,0]$ è $\langle x,y\rangle/\|y\|=(3+4)/\sqrt{9+16}=7/5$.
- Decomporre un vettore in una parte parallela e una ortogonale a una direzione data: $v_2=v-\langle u_1,v\rangle u_1$ è ortogonale al versore $u_1$, che è il passo base di Gram-Schmidt.
- Rispetto a $O\vec i\vec j\vec k$: $v_x=\langle\vec v,\vec i\rangle$, $v_y=\langle\vec v,\vec j\rangle$, $v_z=\langle\vec v,\vec k\rangle$.

## Nei corsi
- **Algebra lineare** (triennale): sui vettori geometrici, in $\mathbb R^3$ e negli spazi euclidei. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 33, 68-69); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 22); `Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 13-14); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §3).
- **Analisi funzionale** (triennale): in uno spazio di Hilbert $H$ e per $Y$ sottospazio **chiuso**, $P_Yx$ è l'unico punto di $Y$ a distanza minima da $x$ (Def. 6.31, dal teorema della proiezione); $P_Y$ è lineare, 1-lipschitziana, $x=P_Yx+P_{Y^\perp}x$ (Cor. 6.33) e, se $Y=\overline{\operatorname{span}}\{e_n\}$ con $\{e_n\}$ ortonormale, $P_Yx=\sum_n\langle x,e_n\rangle e_n$ (Prop. 6.39). Come operatore: $P\in\mathcal B(H)$ è una proiezione ortogonale su un sottospazio chiuso se e solo se $P^2=P=P^*$, e allora $Y=\operatorname{Im}P$, $Y^\perp=\operatorname{Ker}P$; l'insieme delle proiezioni ortogonali è chiuso in $\mathcal B(H)$. Compare nel teorema spettrale: $Tx=\sum_\lambda\lambda P_{E_T(\lambda)}x$. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 74-75, 80, §10.2); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (p. 9).

## Prerequisiti
- [[Prodotto scalare]]: componente di un vettore lungo un altro

## Porta a
- [[Procedimento di Gram-Schmidt]]: a ogni passo si sottraggono le proiezioni
- [[Complemento ortogonale]]: v − proj_U(v) sta in U⊥

## Collegati
- [[Problema dei minimi quadrati]]: la soluzione proietta b sullo spazio delle colonne di A (collegamento concettuale, non nelle slide)
- [[Distanze tra punti, rette e piani]]: la distanza punto-piano è la proiezione sulla normale unitaria
- [[Teorema della proiezione]]: esistenza e unicità di P_Y in uno spazio di Hilbert (Analisi funzionale)
- [[Operatore aggiunto]]: le proiezioni ortogonali sono gli operatori con P² = P = P* (Analisi funzionale)
