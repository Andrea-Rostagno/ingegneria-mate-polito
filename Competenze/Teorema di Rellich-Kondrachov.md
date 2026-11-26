---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Rellich-Kondrachov compactness theorem", "teorema di Rellich", "immersione compatta", "compact embedding", "W^{1,p} ⊂⊂ L^q"]
tags: [competenza, area/analisi]
---

# Teorema di Rellich-Kondrachov

> Su un dominio limitato regolare l'immersione $W^{1,p}\subset L^q$ è **compatta** per ogni $q<p^*$: le successioni limitate in $W^{1,p}$ hanno sottosuccessioni convergenti in $L^q$.

## Definizione / enunciato
$X\subset Y$ di Banach: $X$ è **immerso compattamente** in $Y$, $X\subset\subset Y$, se (i) $\|x\|_Y\le C\|x\|_X$ e (ii) ogni successione limitata in $X$ è precompatta in $Y$.

**Teorema 1 (Rellich-Kondrachov).** Sia $U\subset\mathbb R^n$ aperto limitato con $\partial U$ di classe $C^1$ e $1\le p<n$. Allora
$$W^{1,p}(U)\subset\subset L^q(U)\qquad\text{per ogni }1\le q<p^*.$$
**Osservazione.** Poiché $p^*>p$ e $p^*\to\infty$ per $p\to n$: $W^{1,p}(U)\subset\subset L^p(U)$ per ogni $1\le p\le\infty$ (per $p>n$ da Morrey e Ascoli-Arzelà); inoltre $W^{1,p}_0(U)\subset\subset L^p(U)$ anche senza ipotesi su $\partial U$.

## Formule chiave
Con l'estensione si suppone $U=\mathbb R^n$ e supporti in un limitato $V$. Le regolarizzate $u^\varepsilon_m=\eta_\varepsilon*u_m$ verificano:
- $u^\varepsilon_m\to u_m$ in $L^q(V)$ per $\varepsilon\to0$, **uniformemente in $m$**: $\|u^\varepsilon_m-u_m\|_{L^1(V)}\le\varepsilon\|Du_m\|_{L^1(V)}\le\varepsilon C\|Du_m\|_{L^p(V)}$, poi interpolazione $\|\cdot\|_{L^q}\le\|\cdot\|^\theta_{L^1}\|\cdot\|^{1-\theta}_{L^{p^*}}$ con $\frac1q=\theta+\frac{1-\theta}{p^*}$ e GNS;
- per $\varepsilon$ fisso, $\{u^\varepsilon_m\}_m$ è equilimitata ed equicontinua: $|u^\varepsilon_m|\le\frac C{\varepsilon^n}$, $|Du^\varepsilon_m|\le\frac C{\varepsilon^{n+1}}$.
Ascoli-Arzelà e un argomento diagonale danno una sottosuccessione di Cauchy in $L^q(V)$.

## Intuizione
La limitatezza del gradiente impedisce oscillazioni sempre più rapide; dopo la regolarizzazione si è nel quadro di Ascoli-Arzelà, e l'errore di regolarizzazione è controllato uniformemente proprio dal gradiente.
## Come si usa
- Disuguaglianza di Poincaré, per assurdo con una successione normalizzata.
- Alternativa di Fredholm per operatori ellittici: $K=\gamma L_\gamma^{-1}$ è compatto su $L^2$ perché $H^1_0\subset\subset L^2$.
- Estrarre da successioni limitate in $H^1_0$ sottosuccessioni convergenti debolmente in $H^1_0$ e fortemente in $L^2$ (Teor. 6 di §6.2).

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.7 "Compactness" (definizione, Teor. 1 con dimostrazione, Osservazione). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 271-274).

## Prerequisiti
- [[Disuguaglianza di Gagliardo-Nirenberg-Sobolev]]: limitatezza in $L^{p^*}$ e interpolazione
- [[Mollificatori]]: regolarizzazione $\eta_\varepsilon*u_m$
- [[Teorema di Ascoli-Arzelà]]: convergenza uniforme delle regolarizzate
- [[Teorema di estensione per spazi di Sobolev]]: riduzione a $\mathbb R^n$

## Porta a
- [[Disuguaglianza di Poincaré]]: dimostrazione per assurdo
- [[Alternativa di Fredholm]]: compattezza dell'operatore risolvente

## Collegati
- [[Operatore compatto]]: l'immersione è un operatore compatto
