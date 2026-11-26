---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["Farkas lemma", "Farkas' lemma", "teorema delle alternative", "theorem of the alternative", "alternativa di Farkas"]
tags: [competenza, area/ottimizzazione]
---

# Lemma di Farkas

> Un vettore $\mathbf b$ o sta nel cono generato dalle colonne di $A$, oppure esiste un iperpiano per l'origine che lo separa da quel cono: uno e uno solo dei due sistemi ha soluzione.

## Definizione / enunciato
**Teorema (Farkas).** Siano $\Omega=\{\mathbf a_1,\dots,\mathbf a_n\}\subset\mathbb R^m$, $\mathbf b\in\mathbb R^m$ e $K_\Omega$ il cono generato. Sono equivalenti:
1. $\mathbf b\in K_\Omega$;
2. per ogni $\mathbf y\in\mathbb R^m$: $\big(\mathbf a_j^T\mathbf y\le0,\ j=1,\dots,n\big)\Rightarrow\mathbf b^T\mathbf y\le0$.

**Teorema delle alternative.** Con $A\in\mathbb R^{m\times n}$, uno e uno solo dei sistemi ha soluzione:
$$A\mathbf x=\mathbf b,\ \mathbf x\ge\mathbf 0\qquad\text{oppure}\qquad A^T\mathbf y\le\mathbf 0,\ \mathbf y^T\mathbf b>0 .$$

## Formule chiave
(1)⇒(2): $\mathbf b=\sum_j\mathbf a_jx_j$ con $x_j\ge0$ dà $\mathbf b^T\mathbf y=\sum_jx_j\mathbf a_j^T\mathbf y\le0$.
(2)⇒(1), per contrapposizione: se $\mathbf b\notin K_\Omega$ (cono chiuso, convesso, poliedrale) la separazione stretta dà $\mathbf y$ con $\sup_{\mathbf u\in K_\Omega}\mathbf u^T\mathbf y<\mathbf b^T\mathbf y$; poiché $t\mathbf u\in K_\Omega$ per ogni $t>0$, dividendo per $t$ e mandando $t\to\infty$ si ha $\sup\mathbf u^T\mathbf y\le0$, quindi $\mathbf a_j^T\mathbf y\le0$ ma $\mathbf b^T\mathbf y>0$. □

## Intuizione
Se $\mathbf b$ non è nel cono delle colonne, c'è un $\mathbf y$ che forma un angolo acuto con $\mathbf b$ e ottuso con tutte le colonne $\mathbf a_j$: l'iperpiano normale a $\mathbf y$ passa per l'origine e separa.

## Come si usa
Applicazioni del corso: (i) dimostrazione delle condizioni KKT (un minimo locale non ammette direzioni ammissibili di discesa, e Farkas trasforma questo in esistenza dei moltiplicatori); (ii) arbitraggio in un mercato a stati discreti (o esiste un funzionale di prezzo non negativo, o esiste un portafoglio di arbitraggio). Lo stesso legame si ritrova con la dualità LP.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 46-48); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 38-39).

## Prerequisiti
- [[Teoremi di separazione]]: separazione stretta di $\mathbf b$ dal cono
- [[Cono convesso]]: cono finitamente generato chiuso
- [[Dimostrazione per contrapposizione e per assurdo]]: struttura della prova

## Porta a
- [[Condizioni di Karush-Kuhn-Tucker]]: esistenza dei moltiplicatori
- [[Opportunità di arbitraggio]]: alternativa fra pricing e arbitraggio

## Collegati
- [[Cono duale e cono polare]]: il secondo sistema chiede $\mathbf y$ nel polare del cono
- [[Dualità nella programmazione lineare]]: stessa alternativa vista come dualità LP
