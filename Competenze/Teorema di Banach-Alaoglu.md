---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Banach-Alaoglu theorem", "compattezza debole* della palla del duale", "weak-* compactness", "compattezza debole sequenziale", "metodo diretto", "direct method of the calculus of variations", "esistenza del minimo per convergenza debole"]
tags: [competenza, area/analisi]
---

# Teorema di Banach-Alaoglu

> Nel duale di uno spazio di Banach separabile ogni successione limitata ha una sottosuccessione debolmente\* convergente: la compattezza persa in norma si recupera in senso debole.

## Definizione / enunciato
**Teor. 9.31.** Sia $X$ di Banach separabile e $(\varphi_n)$ limitata in $X'$. Allora $(\varphi_n)$ ha una sottosuccessione convergente debolmente\* a qualche $\varphi\in X'$. ("La palla unitaria chiusa di $X'$ è debolmente\* sequenzialmente compatta", mentre in norma non è compatta se $\dim X'=\infty$.)
**Cor. 9.32.** Se $X$ è di Banach **separabile e riflessivo**, ogni successione limitata in $X$ ha una sottosuccessione debolmente convergente.
**Prop. 9.33 (esistenza del minimo).** Sia $X$ di Banach riflessivo e separabile e $F:X\to\mathbb R$ tale che (a) $\{x:F(x)\le c\}$ è non vuoto e limitato per qualche $c$; (b) $x_n\rightharpoonup x\Rightarrow F(x)\le\liminf_nF(x_n)$. Allora $F$ ha un punto di minimo.

## Formule chiave
Dimostrazione: con $M=\sup_n\|\varphi_n\|$ si ha $|\varphi_n(x)|\le M\|x\|$; dato un denso numerabile $\{x_N\}$, si estraggono sottosuccessioni successive con $\varphi^{(N)}_n(x_N)$ convergente (Bolzano-Weierstrass) e si prende la diagonale, che converge su un denso e quindi, essendo limitata, ovunque (Prop. 9.29).

## Intuizione
La separabilità riduce il problema a una quantità numerabile di successioni numeriche limitate, da cui si estrae con l'argomento diagonale. È l'analogo infinito-dimensionale di Bolzano-Weierstrass, a prezzo di indebolire la convergenza.

## Come si usa
Metodo diretto (Prop. 9.33): si prende una successione minimizzante nel sottolivello limitato, si estrae una sottosuccessione debolmente convergente (Cor. 9.32) e la semicontinuità inferiore debole dà $F(x)\le\inf F$. Applicazioni in $L^p$, $\ell^p$ con $1<p<\infty$ e negli spazi di Hilbert separabili.

## Nei corsi
- **Analisi funzionale** (triennale): §9.3 (Teor. 9.31 con dimostrazione diagonale, Cor. 9.32, Prop. 9.33). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 144-146); `triennale/ANNO 3/analisi funzionale/08_biduale_handout.pdf` (p. 12).

## Prerequisiti
- [[Convergenza debole-star]]: tipo di convergenza ottenuta
- [[Spazio separabile]]: denso numerabile per l'argomento diagonale
- [[Spazio riflessivo]]: per la versione debole in X
- [[Convergenza debole in spazi normati]]: tesi del Cor. 9.32

## Collegati
- [[Teorema di Weierstrass]]: esistenza del minimo, qui in dimensione infinita
- [[Lemma di Riesz]]: in norma la palla non è compatta
- [[Compattezza in spazi metrici]]: compattezza per successioni in senso debole
