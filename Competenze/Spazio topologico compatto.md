---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["compact topological space", "compattezza per ricoprimenti", "ricoprimento estratto", "sottoricoprimento finito", "finite subcover", "compatto in uno spazio topologico", "relativamente compatto (topologia)", "teorema su compattezza e funzioni continue"]
tags: [competenza, area/algebra-geometria]
---

# Spazio topologico compatto

> Un insieme è compatto se da ogni ricoprimento aperto se ne può estrarre uno finito: è un invariante topologico conservato dalle funzioni continue, e fa funzionare il teorema di Weierstrass in qualunque spazio.

## Definizione / enunciato
Un **ricoprimento aperto** di $E\subseteq X$ è una famiglia $\mathcal A\subseteq\tau$ con $E\subseteq\bigcup_{A\in\mathcal A}A$. $K$ è **compatto** se da ogni ricoprimento aperto di $K$ si estrae un ricoprimento finito; $K$ è **relativamente compatto** se $\overline K$ è compatto (Def. 5.2). Motivazione: in $(\mathbb R,\mathcal E_1)$ ogni $[a,b]$ ha questa proprietà (Teor. 5.1, con un argomento di estremo superiore).

Proprietà (Ferrarotti §5.1-5.2):
- un chiuso in un compatto è compatto (Prop. 5.5);
- in uno spazio di Hausdorff un compatto $K$ e un punto $p_0\notin K$ hanno intorni disgiunti, quindi **ogni compatto è chiuso** (Lemma 5.7, Cor. 5.8);
- unioni finite di compatti sono compatte; in uno spazio di Hausdorff anche le intersezioni qualsiasi (Prop. 5.9);
- in uno spazio metrico un compatto è limitato (Prop. 5.11); in $\mathbb R$: compatto $\iff$ chiuso e limitato (Teor. 5.12).

**Teorema 5.14.** Se $f:X\to Y$ è continua e $K\subseteq X$ è compatto, $f(K)$ è compatto.

**Teorema 5.15 (Weierstrass).** Se $f:X\to(\mathbb R,\mathcal E_1)$ è continua e $K$ è compatto, esistono $p_1,p_2\in K$ con $f(p_1)\le f(p)\le f(p_2)$ per ogni $p\in K$.

**Prop. 5.16.** Se $X$ è compatto, $Y$ è di Hausdorff e $f:X\to Y$ è continua, allora $f$ è chiusa; se è anche biunivoca, è un omeomorfismo.

## Formule chiave
Dimostrazione di 5.14: da $\mathcal A$ ricoprimento di $f(K)$, $\{f^{-1}(A)\}$ ricopre $K$; estratti $f^{-1}(A_1),\dots,f^{-1}(A_h)$,
$$f(K)\subseteq f\Big(f^{-1}\Big(\bigcup_{i=1}^hA_i\Big)\Big)\subseteq\bigcup_{i=1}^hA_i.$$
Basta controllare ricoprimenti fatti di elementi di una base (Prop. 5.3(3)).

## Intuizione
Compatto è "finito dal punto di vista topologico": proprietà locali (essere separabile da un punto, essere limitato vicino a ogni punto) diventano globali passando a un numero finito di aperti.

## Come si usa
- Non compatti: $\mathbb R^n$ (ricoprimento $\{B(O,r)\}$), un insieme infinito con la discreta; compatti: insiemi finiti, ogni sottoinsieme con la cofinita (Es. 5.4).
- Senza Hausdorff un compatto può non essere chiuso e l'intersezione di due compatti può non essere compatta (topologia $\{(-\infty,a)\}$, Es. 5.6 e 5.10).
- Prop. 5.16 è il criterio standard per costruire omeomorfismi: per esempio $[0,1]/\{0,1\}\simeq S^1$ (Es. 7.11).
- Con Heine-Borel: $S^n$ e $O(n)$ sono compatti perché chiusi e limitati ($O(n)$ è controimmagine di $\{I_n\}$ tramite $M\mapsto M^tM$, Es. 5.20).
- $[1,2)$ è chiuso e limitato in $X=[0,2)$ ma non compatto (Es. 5.13).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): il Teorema 5.14 è il punto 6 della lista delle dimostrazioni per l'orale. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§5.1-5.2, Teor. 5.1, Def. 5.2, Prop. 5.3-5.16, pp. 35-39); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (cap. 8, Teor. 8.4-8.15).

## Prerequisiti
- [[Spazio topologico]]: ricoprimenti aperti
- [[Spazio di Hausdorff]]: i compatti sono chiusi
- [[Funzione continua tra spazi topologici]]: controimmagini dei ricoprimenti

## Porta a
- [[Prodotto di spazi compatti]]: compattezza del prodotto
- [[Teorema di Weierstrass]]: massimo e minimo su un compatto
- [[Spazio proiettivo reale]]: compatto come quoziente della sfera

## Collegati
- [[Compattezza in spazi metrici]]: negli spazi metrici equivale alla compattezza per successioni
- [[Omeomorfismo]]: la compattezza è un invariante topologico
- [[Matrice ortogonale]]: O(n) è compatto
