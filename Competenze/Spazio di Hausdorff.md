---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["Hausdorff space", "spazio T2", "topologia di Hausdorff", "separated space", "assiomi di separazione", "separation axioms", "spazio normale", "spazio regolare", "spazio T4", "diagonale chiusa"]
tags: [competenza, area/algebra-geometria]
---

# Spazio di Hausdorff

> Uno spazio topologico in cui due punti distinti hanno intorni disgiunti: è l'ipotesi che rende unici i limiti, chiusi i punti e chiusi i compatti.

## Definizione / enunciato
$\tau$ è **di Hausdorff** se per ogni $p\neq q$ in $X$ esistono $U\in\mathcal U_p$, $V\in\mathcal U_q$ con $U\cap V=\emptyset$ (Def. 2.7).
Proprietà dalle note Ferrarotti:
- una topologia più fine di una di Hausdorff è di Hausdorff; la topologia indotta su $E\subseteq X$ è di Hausdorff (Prop. 2.10(5));
- se $X$ è di Hausdorff, ogni $\{p\}$ è chiuso (Prop. 2.8) e il derivato di ogni insieme è chiuso (Prop. 2.44);
- ogni spazio metrico $(X,\tau_d)$ è di Hausdorff: se $\delta=d(p,q)$, $B(p,\delta/2)\cap B(q,\delta/2)=\emptyset$ (Prop. 2.12);
- se $f:X\to Y$ è continua e iniettiva e $Y$ è di Hausdorff, anche $X$ lo è (Prop. 3.11);
- $X_1\times X_2$ è di Hausdorff se e solo se lo sono $X_1$ e $X_2$ (Prop. 4.1).

## Formule chiave
**Prop. 4.5 (diagonale).** Con $\Delta_X=\{(p,p)\mid p\in X\}$:
$$\tau\ \text{di Hausdorff}\iff\Delta_X\ \text{è chiuso in }(X\times X,\tau\times\tau).$$
Se $U_1\cap U_2=\emptyset$ con $p_i\in U_i$, allora $U_1\times U_2\subseteq(X\times X)\setminus\Delta_X$, e viceversa.

**Assiomi di separazione** (Pejsachowicz §5.7): $T_1$ ($\{x\}$ chiuso), $T_2$ (Hausdorff), $T_3$ (regolare: punto e chiuso separati da aperti), $T_4$ (normale: due chiusi disgiunti separati da aperti), con $T_4\Rightarrow T_3\Rightarrow T_2\Rightarrow T_1\Rightarrow T_0$. Ogni spazio metrico è $T_4$ (Teor. 5.36) e ogni compatto di Hausdorff è $T_4$ (Teor. 8.7).

## Intuizione
Hausdorff vuol dire che la topologia ha abbastanza aperti da "vedere" la differenza fra due punti. Senza questa ipotesi succedono cose strane: nella cofinita su un insieme infinito due aperti non vuoti si intersecano sempre, e un compatto può non essere chiuso.

## Come si usa
- Esempi non di Hausdorff (Es. 2.9): la banale con almeno due punti, la cofinita su un insieme infinito, $\{(a,+\infty)\}\cup\{\emptyset,\mathbb R\}$ su $\mathbb R$.
- Insiemi definiti da uguaglianze sono chiusi: se $f$ è continua a valori in uno spazio di Hausdorff, $f^{-1}(\{q\})$ è chiuso (Es. 3.6); più in generale $\{f_1=f_2\}$ è chiuso.
- Nei quozienti la proprietà si perde facilmente (retta con l'origine doppia, Es. 7.6) e va verificata, per esempio con una funzione totalmente compatibile verso uno spazio di Hausdorff (Cor. 7.10).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): la Prop. 4.5 (diagonale chiusa) e la Prop. 4.1 (prodotti) sono nella lista delle dimostrazioni per l'orale. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (Def. 2.7, Prop. 2.8, Es. 2.9, Prop. 2.12, 2.44, 3.11, 4.1, 4.5, Lemma 5.7, Cor. 5.8, Prop. 7.7, pp. 13-23, 28, 32-33, 37, 53); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§5.7, Teor. 5.36-5.38 Urysohn e Tietze enunciati senza dimostrazione; Teor. 8.5-8.7).

## Prerequisiti
- [[Spazio topologico]]: separazione tramite intorni aperti

## Porta a
- [[Spazio topologico compatto]]: in uno spazio di Hausdorff i compatti sono chiusi
- [[Funzione continua tra spazi topologici]]: insiemi di coincidenza chiusi (teorema del grafico chiuso)
- [[Topologia quoziente]]: criterio per un quoziente di Hausdorff

## Collegati
- [[Topologia prodotto]]: caratterizzazione con la diagonale chiusa
- [[Spazio metrico]]: ogni spazio metrico è di Hausdorff
- [[Teorema di unicità del limite]]: negli spazi metrici l'unicità del limite si prova separando due candidati limite con la disuguaglianza triangolare (Ferrarotti §1.5)
