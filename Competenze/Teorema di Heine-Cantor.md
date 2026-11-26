---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Heine-Cantor theorem", "continuità uniforme", "uniform continuity", "funzione uniformemente continua", "uniformly continuous function"]
tags: [competenza, area/analisi]
---

# Teorema di Heine-Cantor

> Una funzione continua su uno spazio metrico compatto è uniformemente continua: lo stesso $\delta$ va bene in tutti i punti.

## Definizione / enunciato
$f:M\to N$ tra spazi metrici è **uniformemente continua** se
$$\forall\epsilon>0\ \exists\delta>0\ \forall x,x'\in M:\ d_M(x,x')<\delta\Rightarrow d_N(f(x),f(x'))<\epsilon,$$
mentre la continuità permette a $\delta$ di dipendere anche dal punto $x$.
**Teorema (Heine-Cantor).** Se $M$ è compatto e $f:M\to N$ è continua, allora $f$ è uniformemente continua.

## Formule chiave
Uniformemente continua $\Rightarrow$ continua, non viceversa: $t\mapsto t^2$ su $\mathbb R$ (Es. 2.35).
Prop. 2.30: se $f$ è uniformemente continua e $(x_n)$ è di Cauchy in $M$, allora $(f(x_n))$ è di Cauchy in $N$.

## Intuizione
L'unica differenza fra le due definizioni è l'ordine dei quantificatori ($\exists\delta$ prima o dopo $\forall x$). Su un compatto, se il $\delta$ "peggiorasse" lungo una successione di punti, si estrarrebbe una sottosuccessione convergente e la continuità nel limite darebbe una contraddizione.

## Come si usa
Si usa quando serve una stima uniforme: nel teorema di Ascoli-Arzelà l'equicontinuità è una versione uniforme in $n$ di questa proprietà; nella dimostrazione di Stone-Weierstrass si sfrutta che $f\in C[0,1]$ è uniformemente continua. La Prop. 2.30 serve a trasportare successioni di Cauchy.

## Nei corsi
- **Analisi funzionale** (triennale): Def. 2.27(c), Prop. 2.30, Teor. 2.32 (§2.5). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 19-20); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 16-17, 19).

## Prerequisiti
- [[Compattezza in spazi metrici]]: ipotesi sul dominio
- [[Funzione continua]]: si rafforza la continuità

## Porta a
- [[Teorema di Ascoli-Arzelà]]: l'equicontinuità è una continuità uniforme in n

## Collegati
- [[Funzione lipschitziana tra spazi metrici]]: lipschitziana implica uniformemente continua
- [[Teorema di Weierstrass]]: altro teorema su continue definite su compatti
