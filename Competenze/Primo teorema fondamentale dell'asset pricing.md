---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [first fundamental theorem of asset pricing, FTAP, primo teorema fondamentale, teorema fondamentale dell'asset pricing, fundamental theorem of asset pricing, non arbitraggio e misura martingala]
tags: [competenza, area/finanza]
---

# Primo teorema fondamentale dell'asset pricing

> Un mercato con un numero finito di stati è privo di arbitraggio se e solo se esiste una misura equivalente sotto cui i prezzi scontati sono martingale.

## Definizione / enunciato
**Caso a un periodo** (teo. c09-ftap1): un mercato a un periodo con un numero finito di stati è privo di arbitraggio $\iff$ esiste almeno una misura martingala equivalente $\mathbb Q$ (tutte le $q_j>0$).

**Caso multiperiodale** (teo. c10-ftap, parte 1): in un mercato a tempi $t=0,\dots,T$ con un numero finito di stati e $B(t)=(1+r)^t$, privo di arbitraggio $\iff$ esiste $\mathbb Q\sim\mathbb P$ con
$$\frac{S_i(t)}{(1+r)^t}=\mathbb E^{\mathbb Q}_t\Big[\frac{S_i(s)}{(1+r)^s}\Big],\qquad0\le t\le s\le T .$$
In un mercato privo di arbitraggio il prezzo di un derivato replicabile è $\Pi(t,X)=(1+r)^{-(T-t)}\mathbb E^{\mathbb Q}_t[X]$, lo stesso per ogni $\mathbb Q$.

## Formule chiave
Sistema per $\mathbb Q$ con la matrice dei payoff $D$ ($m$ stati × $n+1$ titoli): $\frac1{1+r}D^\top Q=\pi_0$, $q_j>0$, $\sum_jq_j=1$.

## Intuizione
Direzione facile ($\Leftarrow$): se esiste $\mathbb Q$, un portafoglio con $V(0)=0$ e $V(1)\ge0$ ha $\mathbb E^{\mathbb Q}[V(1)]=0$, quindi $V(1)=0$ in ogni stato con $q_j>0$: niente arbitraggio. Direzione difficile ($\Rightarrow$): teorema di separazione di convessi o lemma di Farkas (dimostrazione facoltativa nel libro).

## Come si usa
Esempio del libro (lezione, es. 4.2): titolo non rischioso al 5%, $S^1_0=10$, $S^1_1=(12,8,6)$, $S^2_0=5$, $S^2_1=(10,4,5)$: il sistema ha soluzione unica $q=(5/16,21/16,-5/8)$, non è una misura, quindi c'è arbitraggio: $h=(0,-1,2)$ costa 0 e vale $(8,0,4)$. Attenzione: una soluzione unica con una componente nulla non è equivalente e segnala ugualmente un arbitraggio; se le soluzioni sono infinite basta che una sia strettamente positiva.

## Nei corsi
- **Financial engineering** (magistrale): cap. 9 §Più stati e più titoli (teo. c09-ftap1, dimostrazione della direzione facile); cap. 10 §I teoremi fondamentali (teo. c10-ftap, enunciato). Fonti: `Libri/Financial engineering/capitoli/cap09.tex`, `cap10.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/28 - lez 25 marzo a - modello binomiale multiperiodale.pdf`, `30 - lez 31 marzo a - replica opzioni in albero binomiale.pdf`.

## Prerequisiti
- [[Misura neutrale al rischio]]: oggetto del teorema
- [[Opportunità di arbitraggio]]: versione con i prezzi degli stati e la dualità LP
- [[Martingala]]: prezzi scontati martingala

## Porta a
- [[Mercato completo]]: secondo teorema fondamentale
- [[Valutazione neutrale al rischio]]: prezzo come attesa sotto $\mathbb Q$

## Collegati
- [[Lemma di Farkas]]: strumento per la direzione difficile
- [[Modello binomiale a un periodo]]: caso $m=2$ con $d<1+r<u$
