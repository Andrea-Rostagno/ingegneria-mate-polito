---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Banach-Steinhaus theorem", "principio di uniforme limitatezza", "uniform boundedness principle", "limite puntuale di operatori limitati"]
tags: [competenza, area/analisi]
---

# Teorema di Banach-Steinhaus

> Su uno spazio di Banach, una famiglia di operatori limitati che è limitata punto per punto è limitata uniformemente in norma operatoriale.

## Definizione / enunciato
**Teor. 7.27.** Siano $X$ di Banach, $Y$ normato e $\mathcal F\subseteq\mathcal B(X,Y)$ con
$$\sup_{T\in\mathcal F}\|Tx\|_Y<\infty\quad\forall x\in X.$$
Allora $\displaystyle\sup_{T\in\mathcal F}\|T\|_{op}<\infty$.
**Cor. 7.30.** Se $(T_n)\subseteq\mathcal B(X,Y)$ e $\lim_nT_nx$ esiste per ogni $x$, allora $\sup_n\|T_n\|_{op}<\infty$, e $Tx:=\lim_nT_nx$ definisce $T\in\mathcal B(X,Y)$ con
$$\|T\|_{op}\le\liminf_{n\to\infty}\|T_n\|_{op}\le\sup_n\|T_n\|_{op}.$$

## Formule chiave
Dimostrazione: $C_n=\bigcap_{T\in\mathcal F}\{x:\|Tx\|_Y\le n\}$ sono chiusi e $\bigcup_nC_n=X$; per Baire esiste $B(\bar x,r)\subseteq C_n$, e per $\|x\|\le1$
$$\|Tx\|_Y=\tfrac2r\|T(\bar x+\tfrac r2x)-T\bar x\|_Y\le\tfrac{4n}{r}\quad\forall T\in\mathcal F.$$

## Intuizione
Il viceversa (uniforme $\Rightarrow$ puntuale) è ovvio; il teorema dice che, grazie alla completezza, il controllo punto per punto si "propaga" a un controllo uniforme. Senza completezza di $X$ il risultato può fallire.

## Come si usa
- Il limite puntuale di operatori limitati su un Banach è ancora limitato (Cor. 7.30).
- Una successione debolmente convergente è limitata in norma, e una successione debolmente* convergente nel duale di un Banach è limitata: si applica il teorema ai funzionali $J(x_n)$ o $\varphi_n$.

## Nei corsi
- **Analisi funzionale** (triennale): §7.4 (Teor. 7.27, Oss. 7.28, dimostrazione dopo il lemma di Baire, Cor. 7.30). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 104-106); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 11).

## Prerequisiti
- [[Lemma di Baire]]: strumento della dimostrazione
- [[Operatore lineare limitato]]: famiglie in B(X,Y)
- [[Spazio di Banach]]: completezza del dominio

## Porta a
- [[Convergenza debole in spazi normati]]: le successioni deboli sono limitate
- [[Convergenza debole-star]]: le successioni deboli* sono limitate

## Collegati
- [[Teorema dell'isomorfismo di Banach]]: altro pilastro della teoria degli operatori su Banach
