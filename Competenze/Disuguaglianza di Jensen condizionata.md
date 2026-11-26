---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Ricerca operativa, Prob e statistica]
livello: [magistrale, triennale]
aliases: [conditional Jensen inequality, Jensen condizionata, Jensen's inequality, disuguaglianza di Jensen, utilità attesa, avversione al rischio]
tags: [competenza, area/probabilita]
---

# Disuguaglianza di Jensen condizionata

> Versione condizionata di Jensen: una funzione convessa della speranza condizionata è dominata dalla speranza condizionata della funzione; serve a costruire sub/super-martingale a partire da martingale.

## Definizione / enunciato
**Jensen condizionata.** Se $f$ è convessa e $X$ è reale con $\mathbb E[|X|],\mathbb E[|f(X)|]<\infty$, allora q.c.
$$f\big(\mathbb E[X\mid\mathcal G]\big)\le \mathbb E[f(X)\mid\mathcal G].$$

**Conseguenza per processi** (slide, lezioni 16-17). Sia $f$ con $\mathbb E[f(X_i)]<\infty$ per ogni $i$:
- $X$ submartingala, $f$ convessa e non decrescente $\Rightarrow f(X)$ submartingala;
- $X$ supermartingala, $f$ concava e non decrescente $\Rightarrow f(X)$ supermartingala;
- $X$ martingala, $f$ convessa $\Rightarrow f(X)$ submartingala;
- $X$ martingala, $f$ concava $\Rightarrow f(X)$ supermartingala.

## Formule chiave
$$\mathbb E[f(X_{i+j})\mid\mathcal F_i]\ \ge\ f\big(\mathbb E[X_{i+j}\mid\mathcal F_i]\big)\ \ge\ f(X_i)$$
(la seconda disuguaglianza usa la monotonia di $f$ e la proprietà di submartingala; per una martingala è un'uguaglianza e la monotonia non serve). Il caso concavo si ottiene applicando il risultato a $-f$.

## Intuizione
La convessità "premia" la dispersione: condizionare riduce l'incertezza, quindi $f$ della media condizionata non supera la media condizionata di $f$. Un gioco equo trasformato da una funzione convessa diventa favorevole.

## Come si usa
Per dimostrare rapidamente che un processo è sub/super-martingala. Esempi delle slide: per la passeggiata simmetrica, $X_n^2$ e $|X_n|$ sono submartingale, $-X_n^4+X_n+7$ e $-|X_n|$ supermartingale; per $X_n=\prod(1+B_i)$, $(X_n+1)^{-1}$ è submartingala, $\sqrt{X_n}$ e $\log(X_n+1)$ supermartingale. È il punto di partenza degli esempi della decomposizione di Doob ($|W_n|$, $W_n^2$) e, in tempo continuo, rende $W_t^2$ submartingala nella prova dell'inversione temporale.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 11. Il `.tex` enuncia solo il caso "martingala + $\varphi$ convessa"; le slide danno i quattro casi. Fonti: `magistrale/Processi stocastici/Lezione_16_11_11.pdf` (lezione 16), `magistrale/Processi stocastici/Lezione_17_17_11.pdf` (lezione 17), `riassunto_del_corso.tex` §Martingale.
- **Ricerca operativa** (triennale): versione non condizionata, come caratterizzazione delle funzioni convesse: $f\big(\sum_k\lambda_k\mathbf x_k\big)\le\sum_k\lambda_kf(\mathbf x_k)$ con $\lambda_k\ge0$, $\sum_k\lambda_k=1$, ed estesa a $f(\mathbb E[X])\le\mathbb E[f(X)]$. Esempi delle slide: lognormale $Y=e^X$, $X\sim N(\mu,\sigma^2)$: $\mathbb E[Y]=e^{\mu+\sigma^2/2}\ge e^{\mu}=e^{\mathbb E[X]}$; **utilità attesa**: per una lotteria che vale $x_1$ con probabilità $p$ e $x_2$ con $q=1-p$, un decisore con utilità concava $u$ ha $\mathbb E[u(X)]=pu(x_1)+qu(x_2)\le u(\mathbb E[X])$ (avversione al rischio). Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 10-11).
- **Prob e statistica** (triennale): proprietà 5 della speranza condizionata: $X\in L^1$, $\psi$ convessa con $\psi(X)\in L^1$ $\Rightarrow\psi(\mathbb E[X|\mathcal G])\le\mathbb E[\psi(X)|\mathcal G]$ q.o. Dimostrazione: $\psi$ convessa è il sup di rette $L_n(x)=a_nx+b_n\le\psi(x)$; per linearità $\mathbb E[L_n(X)|\mathcal G]=L_n(\mathbb E[X|\mathcal G])$ e per monotonia $\le\mathbb E[\psi(X)|\mathcal G]$, poi sup su $n$. Conseguenze: con $\psi=|x|^p$ la speranza condizionata è una contrazione di $L^p$; nella versione non condizionata dà $\|X\|_{L^q}\le\|X\|_{L^p}$ per $p\ge q$, cioè $L^p\subseteq L^q$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione13(03-11-2023).pdf` (pp. 12-14); `2023Lezione14(08-11-2023).pdf` (p. 1); `2023Lezione15(09-11-2023).pdf` (p. 12).

## Prerequisiti
- [[Speranza condizionata]]: versione condizionata di Jensen

## Porta a
- [[Convergenza in Lp]]: inclusione $L^p\subseteq L^q$ per $p\ge q$ (Prob e statistica)

## Collegati
- [[Martingala]]: funzione convessa di martingala è submartingala
- [[Funzione convessa]]: disuguaglianza delle funzioni convesse
- [[Combinazioni coniche, affini e convesse]]: il valore atteso discreto è una combinazione convessa (Ricerca operativa)
