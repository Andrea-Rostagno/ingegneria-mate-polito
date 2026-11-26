---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Lyapunov theorems", "funzione di Lyapunov per ODE", "Lyapunov function", "primo teorema di Lyapunov", "secondo teorema di Lyapunov", "metodo diretto di Lyapunov", "funzione di Lyapunov in senso stretto"]
tags: [competenza, area/analisi]
---

# Teoremi di Lyapunov

> Per studiare la stabilità di un equilibrio di $\dot x=f(x)$ senza risolvere il sistema, si cerca una funzione positiva che non cresce lungo le traiettorie (funzione di Lyapunov).

## Definizione / enunciato
Sistema autonomo $\dot x=f(x)$, $f(\bar x)=0$, soluzioni globali; $Q\subseteq\mathbb R^n$ intorno di $\bar x$.
**Def.** $V:Q\to\mathbb R$ è **funzione di Lyapunov** relativa a $\bar x$ se: (i) $V\in C^1(Q)$; (ii) $V(\bar x)=0$; (iii) $V(x)>0$ per $x\in Q\setminus\{\bar x\}$; (iv) $\frac{d}{dt}V(x(t))\le0$ lungo le traiettorie uscenti da $Q$. È **in senso stretto** se in (iv) vale $<0$ per $x_0\in Q\setminus\{\bar x\}$.
**Primo teorema.** Se esiste una $V$ di Lyapunov relativa a $\bar x$, allora $\bar x$ è stabile.
**Secondo teorema.** Se esiste una $V$ di Lyapunov in senso stretto, $\bar x$ è asintoticamente stabile (il docente scrive "sse", ma dimostra solo questa implicazione).
**Teorema (L10 p. 2).** Se la $V$ in senso stretto è definita su tutto $\mathbb R^n$ e $\lim_{\|x\|\to\infty}V(x)=+\infty$, allora $\bar x$ è **globalmente** asintoticamente stabile.

## Formule chiave
La (iv) si verifica senza conoscere le soluzioni:
$$\frac{d}{dt}V(x(t))=\nabla V(x(t))\cdot f(x(t))\le0\iff\nabla V(x)\cdot f(x)\le0\ \ \forall x\in Q .$$

## Intuizione
$V$ è una "energia" con minimo stretto in $\bar x$: se non cresce, la traiettoria resta intrappolata in un sottolivello piccolo (stabilità); se decresce strettamente, deve scendere fino al minimo (attrattività).

## Come si usa
Dimostrazione del primo teorema (L09 pp. 1-2): $m=\min_{\partial B_\varepsilon(\bar x)}V>0$ esiste per Weierstrass, perché $\partial B_\varepsilon$ è compatto; per continuità esiste $\delta$ con $V<m$ su $B_\delta$. Una traiettoria che uscisse da $B_\varepsilon$ avrebbe $V(x(t^*))\ge m>V(x_0)$, contro la monotonia. Nel secondo si mostra che $g(t)=V(x(t))\to0$: se il limite $\ell$ fosse positivo, $x(t)$ resterebbe nella corona compatta $\overline{B_\varepsilon}\setminus B_\mu$, dove $\nabla V\cdot f\le M<0$, e $g(t)\le V(x_0)+Mt\to-\infty$. Poi $x(t)\to\bar x$ per sottosuccessioni.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/08 - Lezione 20_10_23.pdf` (pp. 4-6); `triennale/ANNO 3/eq fisica matematica/09 - Lezione 24_10_23.pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/10 - Lezione 25_10_23.pdf` (pp. 1-2).

## Prerequisiti
- [[Stabilità secondo Lyapunov]]: definizioni di stabilità e stabilità asintotica
- [[Teorema di Weierstrass]]: minimo di V sul bordo compatto della palla
- [[Spazio topologico compatto]]: ∂B_ε e la corona sono compatti

## Porta a
- [[Equazione matriciale di Lyapunov]]: funzione di Lyapunov quadratica per i sistemi lineari
- [[Stabilità in prima approssimazione]]: la stessa V funziona per il sistema non lineare

## Collegati
- [[Criterio di Foster-Lyapunov per la ricorrenza]]: stessa idea di funzione di Lyapunov per le catene di Markov
