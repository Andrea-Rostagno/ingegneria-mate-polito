---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Hölder spaces", "spazi di Holder", "C^{k,γ}", "seminorma di Hölder", "funzione hölderiana di esponente γ", "Hölder continuity"]
tags: [competenza, area/analisi]
---

# Spazi di Hölder

> $C^{k,\gamma}(\overline U)$: funzioni $k$ volte derivabili con continuità le cui derivate di ordine $k$ sono hölderiane di esponente $\gamma\in(0,1]$; con la norma naturale sono spazi di Banach.

## Definizione / enunciato
Sia $U\subset\mathbb R^n$ aperto, $0<\gamma\le1$. $u$ è **hölderiana di esponente $\gamma$** se $|u(x)-u(y)|\le C|x-y|^\gamma$ per $x,y\in U$ (per $\gamma=1$: lipschitziana).
- $\|u\|_{C(\overline U)}:=\sup_{x\in U}|u(x)|$;
- seminorma: $[u]_{C^{0,\gamma}(\overline U)}:=\sup_{x\ne y}\Big\{\dfrac{|u(x)-u(y)|}{|x-y|^\gamma}\Big\}$;
- norma: $\|u\|_{C^{0,\gamma}(\overline U)}:=\|u\|_{C(\overline U)}+[u]_{C^{0,\gamma}(\overline U)}$.
$C^{k,\gamma}(\overline U)$ è l'insieme delle $u\in C^k(\overline U)$ per cui è finita
$$\|u\|_{C^{k,\gamma}(\overline U)}:=\sum_{|\alpha|\le k}\|D^\alpha u\|_{C(\overline U)}+\sum_{|\alpha|=k}[D^\alpha u]_{C^{0,\gamma}(\overline U)}.$$
**Teorema 1 (§5.1).** $C^{k,\gamma}(\overline U)$ è uno spazio di Banach.

## Formule chiave
La seminorma è il miglior $C$ nella condizione di Hölder; la norma somma tutte le derivate fino all'ordine $k$ e la seminorma di quelle di ordine massimo. Dimostrazione lasciata da Evans come esercizio.

## Intuizione
La hölderianità è un modulo di continuità uniforme intermedio fra continuità e lipschitzianità: misura "quanto" è regolare una funzione con un esponente frazionario. Gli spazi di Hölder sono però poco adatti alle stime per le EDP, da cui il passaggio agli spazi di Sobolev.

## Come si usa
Sono gli spazi di arrivo delle immersioni di Sobolev per $p>n$: la disuguaglianza di Morrey dà $W^{1,p}\subset C^{0,1-n/p}$, e le immersioni generali $W^{k,p}\subset C^{k-[n/p]-1,\gamma}$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.1 "Hölder spaces" (Teor. 1). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 240-241).

## Prerequisiti
- [[Spazio di Banach]]: completezza dello spazio
- [[Funzione lipschitziana tra spazi metrici]]: caso $\gamma=1$

## Porta a
- [[Disuguaglianza di Morrey]]: le funzioni di $W^{1,p}$, $p>n$, sono hölderiane
- [[Immersioni di Sobolev]]: $C^{k-[n/p]-1,\gamma}(\overline U)$ è lo spazio di arrivo per $k>n/p$

## Collegati
- [[Hölderianità delle traiettorie browniane]]: esempio probabilistico di funzioni hölderiane (Processi stocastici)
