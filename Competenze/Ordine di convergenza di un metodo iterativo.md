---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["order of convergence", "ordine di convergenza", "convergenza lineare", "convergenza quadratica", "convergenza superlineare", "convergenza locale e globale"]
tags: [competenza, area/numerica]
---

# Ordine di convergenza di un metodo iterativo

> Numero $p$ che misura quanto rapidamente la successione $\{x_n\}$ prodotta da un metodo iterativo si avvicina alla radice $\alpha$.

## Definizione / enunciato
Un metodo per $f(x)=0$ genera, a partire da $x_0$, una successione $\{x_n\}$ che sotto opportune condizioni converge a una radice $\alpha$. Si dice **ordine di convergenza** della successione (e del metodo) il numero reale $p\ge1$ tale che
$$\lim_{n\to\infty}\frac{|\alpha-x_{n+1}|}{|\alpha-x_n|^p}=C\neq0,+\infty .$$
- $p=1$, $C<1$: convergenza **lineare**;
- $1<p<2$: **superlineare**;
- $p=2$: **quadratica**; $p=3$: **cubica**.

I teoremi di convergenza **locale** la garantiscono solo per $x_0$ "sufficientemente vicino" ad $\alpha$; quelli **globali** per ogni $x_0$ in un intervallo (non necessariamente piccolo) che contiene $\alpha$.

## Formule chiave
Per $n$ grande $|\alpha-x_{n+1}|\approx C|\alpha-x_n|^p$, quindi
$$|\alpha-x_n|\approx10^{-k}\ \Rightarrow\ |\alpha-x_{n+1}|\approx C\,10^{-kp}.$$
Per i sistemi si sostituisce il modulo con una norma: $\lim\|\alpha-x^{(n+1)}\|/\|\alpha-x^{(n)}\|^p=C$.

## Intuizione
Se $x_n$ ha $k$ decimali corretti, $x_{n+1}$ ne ha circa $kp$: con $p=2$ le cifre esatte raddoppiano a ogni passo, con $p=1$ si guadagna solo un numero fisso di cifre (che dipende da $C$).

## Come si usa
Ordini visti nel corso: bisezione $p=1$ (errore che si dimezza), secanti $p=(1+\sqrt5)/2\approx1.618$, Muller $p\approx1.84$, Newton $p=2$ su radici semplici e $p=1$ su radici multiple, punto fisso $p=k$ se $g'(\alpha)=\dots=g^{(k-1)}(\alpha)=0\ne g^{(k)}(\alpha)$. Nelle tabelle delle slide per $x^4-4=0$ con Newton l'errore passa da $6.94\cdot10^{-3}$ a $5.07\cdot10^{-5}$ a $2.72\cdot10^{-9}$.

## Nei corsi
- **Metodi numerici** (triennale): definizione all'inizio del capitolo sulle equazioni non lineari (L. Scuderi, a.a. 2022/23). Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 5-9; per i sistemi p. 54).
- **Numerical opt** (magistrale): definizioni "Q":
  - lineare: $\|x^{(k+1)}-x^*\|\le\delta\|x^{(k)}-x^*\|$ con $\delta\in(0,1)$;
  - superlineare: $\|x^{(k+1)}-x^*\|/\|x^{(k)}-x^*\|\to0$;
  - quadratica, e in generale di ordine $q$: $\|x^{(k+1)}-x^*\|\le C\|x^{(k)}-x^*\|^q$.

  In laboratorio l'ordine si stima sperimentalmente:
  $$q\approx\frac{\log(\|e^{(k+1)}\|/\|e^{(k)}\|)}{\log(\|e^{(k)}\|/\|e^{(k-1)}\|)},$$
  con $e^{(k)}\approx x^{(k)}-x^{(k-1)}$ se $x^*$ non è noto. La stima serve a verificare i tre regimi del [[Metodo di Newton inesatto]]. Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 20-21); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§7.2, Def. 7.1, eq. 41-42).

## Prerequisiti
- [[Limite di successione]]: l'ordine è definito da un limite
- [[Errore assoluto e relativo]]: si misura l'errore $|\alpha-x_n|$

## Porta a
- [[Metodo delle secanti]]: ordine $1.618$
- [[Metodo di Newton]]: ordine 2 su radici semplici
- [[Metodo del punto fisso]]: ordine dalle derivate di $g$ in $\alpha$

## Collegati
- [[Criteri di arresto dei metodi iterativi]]: con convergenza lineare l'incremento sottostima l'errore
- [[Teorema degli zeri]]: la bisezione converge solo linearmente
