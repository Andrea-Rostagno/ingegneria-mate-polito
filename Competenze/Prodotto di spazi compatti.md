---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["product of compact spaces", "prodotto di compatti", "teorema sul prodotto di compatti", "lemma del tubo", "tube lemma", "compattezza del prodotto topologico"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto di spazi compatti

> Il prodotto topologico $X\times Y$ è compatto se e solo se lo sono $X$ e $Y$; da qui segue il teorema di Heine-Borel in $\mathbb R^n$.

## Definizione / enunciato
**Lemma 5.17 (del tubo, nome non usato nelle note).** Sia $Y$ compatto, $p_0\in X$ e $A$ aperto di $X\times Y$ con $\{p_0\}\times Y\subseteq A$. Allora esiste $U\in\mathcal U_{p_0}$ con $U\times Y\subseteq A$.

**Teorema 5.18.** $(X\times Y,\tau\times\tau')$ è compatto se e solo se $(X,\tau)$ e $(Y,\tau')$ sono compatti.

## Formule chiave
Lemma: per ogni $q\in Y$ esistono $U_q\in\mathcal U_{p_0}$, $V_q\in\mathcal U_q$ con $W_q=U_q\times V_q\subseteq A$; estratti $W_{q_1},\dots,W_{q_k}$ che ricoprono $\{p_0\}\times Y$ (omeomorfo a $Y$, quindi compatto),
$$U=\bigcap_{i=1}^kU_{q_i}\in\mathcal U_{p_0},\qquad Y=\bigcup_{i=1}^kV_{q_i},\qquad U\times Y\subseteq\bigcup_{i=1}^kW_{q_i}\subseteq A.$$
(Le note stampano $\bigcap$ nell'ultima inclusione: è un refuso, serve l'unione dei $W_{q_i}$.)
Teorema, verso difficile: per ogni $p\in X$ si ricopre $\{p\}\times Y$ con un numero finito $A^p_{i_1},\dots,A^p_{i_{k(p)}}$ di aperti del ricoprimento, di unione $A^p$; il lemma dà $U_p$ con $U_p\times Y\subseteq A^p$; si estraggono $U_{p_1},\dots,U_{p_m}$ che ricoprono $X$ e
$$\{A^{p_j}_{i_h}\mid j=1,\dots,m,\ h=1,\dots,k(p_j)\}$$
è un ricoprimento finito di $X\times Y$. Il verso facile usa che le proiezioni sono continue e suriettive (Teor. 5.14).

## Intuizione
Il compatto $Y$ "nella direzione verticale" permette di allargare un intorno di un punto a un'intera striscia $U\times Y$; la compattezza di $X$ "nella direzione orizzontale" permette poi di usare un numero finito di strisce.

## Come si usa
- **Heine-Borel** (Teor. 5.19): se $K\subseteq\mathbb R^n$ è chiuso e limitato, è contenuto in un prodotto di intervalli chiusi $\prod_{i=1}^n[\bar x_i-\delta,\bar x_i+\delta]$, compatto per 5.1 e 5.18, e un chiuso in un compatto è compatto.
- La sfera $S^n$ è compatta perché chiusa e limitata in $\mathbb R^{n+1}$ (Es. 5.20).
- La versione "per successioni" negli spazi metrici si dimostra estraendo prima una sottosuccessione nella prima coordinata e poi nella seconda (Prop. 5.26(2)).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): punto 7 della lista delle dimostrazioni per l'orale ("teorema sul prodotto di compatti", [P] 8.16). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§5.3, Lemma 5.17, Teor. 5.18-5.19, Es. 5.20, pp. 39-41); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§8.5-8.6, Teor. 8.16-8.17).

## Prerequisiti
- [[Spazio topologico compatto]]: definizione per ricoprimenti
- [[Topologia prodotto]]: base dei rettangoli aperti e proiezioni

## Porta a
- [[Compattezza in spazi metrici]]: teorema di Heine-Borel in R^n

## Collegati
- [[Prodotto di spazi connessi]]: risultato analogo per la connessione
- [[Teorema di Weierstrass]]: si applica sui prodotti di intervalli chiusi
