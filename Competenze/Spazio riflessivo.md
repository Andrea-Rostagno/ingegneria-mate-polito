---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["reflexive space", "riflessività", "biduale", "bidual", "X''", "immersione canonica", "canonical embedding", "J: X → X''"]
tags: [competenza, area/analisi]
---

# Spazio riflessivo

> Uno spazio normato è riflessivo se l'immersione canonica nel biduale è suriettiva: ogni funzionale sul duale è una valutazione in un punto.

## Definizione / enunciato
Il **biduale** di $X$ è $X''=(X')'$. L'**immersione canonica** $J:X\to X''$,
$$J(x)(\varphi)=\varphi(x)\qquad x\in X,\ \varphi\in X',$$
è un'isometria lineare (Prop. 9.3, conseguenza di Hahn-Banach). $X$ è **riflessivo** se $J$ è suriettiva (Def. 9.4).

## Formule chiave
- $X$ riflessivo $\Rightarrow X\cong_{isom.}X''$, quindi $X$ è di Banach; ma $X\cong_{isom.}X''$ non basta per la riflessività.
- $\dim X<\infty\Rightarrow X$ riflessivo ($\dim X''=\dim X'=\dim X$ e $J$ è iniettiva).
- Riflessivi: ogni spazio di Hilbert; $L^p(M)$ con $\mu$ $\sigma$-finita e $p\in(1,\infty)$; $\ell^p$ con $p\in(1,\infty)$.
- Non riflessivi: $c_0$, $\ell^1$, $\ell^\infty$; $L^1(I)$, $L^\infty(I)$ per $I$ intervallo di misura positiva.
- Se $X$ è di Banach: $X$ riflessivo $\iff X'$ riflessivo.

## Intuizione
Per $1<p<\infty$: $(\ell^p)'\cong\ell^q$ e $(\ell^q)'\cong\ell^p$, quindi $(\ell^p)''\cong\ell^p$, e la composizione è proprio $J$. Per $p=1$ la catena si rompe: $(\ell^1)'\cong\ell^\infty$ ma $(\ell^\infty)'$ è più grande di $\ell^1$.

## Come si usa
La riflessività è ciò che rende la palla unitaria **debolmente** sequenzialmente compatta (se $X$ è anche separabile): ogni successione limitata ha una sottosuccessione debolmente convergente (Cor. 9.32). Su uno spazio riflessivo convergenza debole e debole* nel duale coincidono. È l'ipotesi per il metodo diretto di esistenza dei minimi (Prop. 9.33).

## Nei corsi
- **Analisi funzionale** (triennale): §9.1 "Biduale e spazi riflessivi" (Def. 9.1, Prop. 9.3, Def. 9.4, Prop. 9.7, 9.8, 9.10). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 133-135); `triennale/ANNO 3/analisi funzionale/08_biduale_handout.pdf` (pp. 2-3).

## Prerequisiti
- [[Spazio duale]]: il biduale è il duale del duale
- [[Teorema di Hahn-Banach]]: J è isometrica
- [[Isometria lineare]]: J è un'isometria lineare
- [[Teorema di rappresentazione di Riesz-Fréchet]]: gli Hilbert sono riflessivi
- [[Duale degli spazi Lp]]: Lp riflessivo per 1 < p < ∞

## Porta a
- [[Teorema di Banach-Alaoglu]]: compattezza debole della palla in un riflessivo separabile
- [[Convergenza debole-star]]: coincide con la debole se X è riflessivo
