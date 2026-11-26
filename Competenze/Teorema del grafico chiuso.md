---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["closed graph theorem", "grafico di un operatore", "graph of an operator", "Γ(T)"]
tags: [competenza, area/analisi]
---

# Teorema del grafico chiuso

> Fra spazi di Banach un operatore lineare è limitato se e solo se il suo grafico è chiuso.

## Definizione / enunciato
Il **grafico** di $T\in\mathcal L(X,Y)$ è $\Gamma(T)=\{(x,Tx):x\in X\}\subseteq X\times Y$, sottospazio vettoriale (nucleo di $S(x,y)=y-Tx$).
**Teor. 7.37.** Siano $X$, $Y$ di Banach e $T\in\mathcal L(X,Y)$. Allora
$$T\in\mathcal B(X,Y)\iff\Gamma(T)\ \text{è chiuso in }X\times Y.$$

## Formule chiave
$(\Rightarrow)$ vale per spazi normati qualsiasi (Prop. 7.13(ii)).
$(\Leftarrow)$: $\Gamma(T)$ chiuso nel Banach $X\times Y$ è di Banach; $R=\pi_X|_{\Gamma(T)}$ è limitato ($\|R\|_{op}\le1$) e biiettivo, quindi per il teorema dell'isomorfismo $R^{-1}x=(x,Tx)$ è limitato e
$$\|Tx\|_Y\le\|(x,Tx)\|_{X\times Y}\le\|R^{-1}\|_{op}\|x\|_X.$$

## Intuizione
Grafico chiuso significa: se $x_n\to x$ **e** $Tx_n\to y$, allora $y=Tx$. La continuità chiederebbe di più (che $Tx_n$ converga). Fra spazi completi le due condizioni coincidono, e in pratica il grafico chiuso è più facile da verificare.

## Come si usa
Per provare che un operatore lineare definito su tutto un Banach è limitato basta mostrare: $x_n\to x$, $Tx_n\to y\Rightarrow y=Tx$. Viceversa (Oss. 7.38) dal grafico chiuso si ritrova il teorema dell'isomorfismo, perché $\Gamma(T^{-1})$ si ottiene da $\Gamma(T)$ scambiando le coordinate.

## Nei corsi
- **Analisi funzionale** (triennale): §7.5 (Prop. 7.13(ii), Teor. 7.37 con dimostrazione, Oss. 7.38). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 98, 109-110); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (pp. 7, 12).

## Prerequisiti
- [[Teorema dell'isomorfismo di Banach]]: applicato alla proiezione sul grafico
- [[Operatore lineare limitato]]: tesi del teorema
- [[Spazio di Banach]]: il prodotto e il grafico chiuso sono di Banach

## Collegati
- [[Funzione continua tra spazi topologici]]: omonimo topologico (Istituzioni topologia, Ferrarotti Teor. 3.10), con enunciato diverso: se $f_1,f_2:X\to Y$ sono continue e $Y$ è di Hausdorff, $\{f_1=f_2\}$ è chiuso. Non è lo stesso teorema e non riguarda operatori lineari.
