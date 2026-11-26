---
tipo: competenza
area: analisi
corsi: [Analisi 2, Metodi numerici, Meccanica, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["local existence and uniqueness theorem", "teorema di Cauchy-Lipschitz", "Cauchy-Lipschitz theorem", "teorema di Picard", "condizione di Lipschitz", "metodo delle contrazioni per le EDO", "teorema di Cauchy per le ODE", "lipschitzianità uniforme in t"]
tags: [competenza, area/analisi]
---

# Teorema di esistenza e unicità locale

> Se $f(x,y)$ è continua e lipschitziana in $y$, il problema di Cauchy $y'=f(x,y)$, $y(x_0)=y_0$ ha una e una sola soluzione in un intervallo $[x_0-r,x_0+r]$.

## Definizione / enunciato
**Teorema.** Sia $f(x,y)$ continua su $\mathbb R^2$ e tale che
$$|f(x,y_1)-f(x,y_2)|\le K|y_1-y_2|\quad\forall x,y_1,y_2\qquad(\text{condizione di Lipschitz nella seconda variabile}).$$
Allora per ogni $x_0,y_0$ esiste $r>0$ tale che
$$(PC)\quad\begin{cases}y'(x)=f(x,y(x))&x\in I_r=[x_0-r,x_0+r]\\y(x_0)=y_0\end{cases}$$
ha una e una sola soluzione $y\in C^1(I_r)$.

## Formule chiave
Equazione integrale equivalente e operatore:
$$(EI)\quad y(x)=y_0+\int_{x_0}^xf(t,y(t))\,dt,\qquad (Ty)(x)=y_0+\int_{x_0}^xf(t,y(t))\,dt,$$
$$d(Ty_1,Ty_2)\le K\,r\,d(y_1,y_2).$$

## Intuizione
Dimostrazione in due passi:
1. $y\in C^1$ risolve (PC) se e solo se $y\in C^0(I_r)$ risolve (EI): si integra, e per il ritorno si usa il teorema fondamentale del calcolo.
2. (EI) dice che $y=T(y)$ è un punto fisso. Con la metrica uniforme $T$ è una contrazione di costante $L=Kr$ se $r<\frac1K$.

Contrazione ⇒ esiste un unico punto fisso ⇒ unica soluzione di (EI) ⇒ unica soluzione di (PC). Il teorema delle contrazioni è richiamato ma non enunciato nelle pagine.

## Come si usa
Garantisce che le soluzioni costruite per altre vie siano le uniche. Ad esempio, nella lezione sulle serie di potenze la somma $f$ di $\sum\frac{(-1)^nx^{2n+1}}{(2n+1)!}$ risolve $f''=-f$, $f(0)=0$, $f'(0)=1$, e per l'unicità della soluzione del problema di Cauchy lineare è $\sin x$.

## Nei corsi
- **Analisi 2** (triennale): ultima lezione, 21/12/2022, come applicazione della completezza di $C^0$. Fonte: `triennale/ANNO 2/analisi 2/AII 24 2022 esercizi e varie.pdf` (pp. 9-15).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): versione globale su una striscia: se $\mathbf f$ è continua in $S=\{(x,\mathbf y):\alpha\le x\le\beta,\ \mathbf y\in\mathbb R^m\}$ e lipschitziana in $\mathbf y$ uniformemente in $x$, $\|\mathbf f(x,\mathbf y_1)-\mathbf f(x,\mathbf y_2)\|\le L\|\mathbf y_1-\mathbf y_2\|$, per ogni $a\in[\alpha,\beta]$ e $\mathbf y_0$ esiste un'unica soluzione $C^1$ su tutto $[\alpha,\beta]$, e $\|\mathbf y(x;\mathbf y_0)-\mathbf y(x;\bar{\mathbf y}_0)\|\le e^{L|x-a|}\|\mathbf y_0-\bar{\mathbf y}_0\|$ (problema ben posto). Derivate $\partial f_i/\partial y_j$ continue e limitate implicano la lipschitzianità; continuità dà l'esistenza, lipschitzianità l'unicità. Esempi: $y'=\lambda y$ (unica soluzione ovunque); $y'=\frac32y^{1/3}$, $y(0)=0$ (infinite soluzioni, non lipschitziana); $y'=y^2$, $y(0)=1$ (soluzione $1/(1-x)$ solo per $x<1$). La lipschitzianità serve poi per la zero-stabilità dei metodi a un passo e per il condizionamento dei problemi di Cauchy. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 12-20, 82).
- **Meccanica** (triennale): Thm 5.2 (Cauchy): il sistema $\dot{\vec x}=\vec f(\vec x)$ ha soluzione unica con dato iniziale assegnato se $\vec f$ è lipschitziana (Def. 5.1). Applicato alle equazioni di Newton e, con Thm 8.3, alle equazioni di Lagrange in forma normale $A\ddot q=F+Q$, unicità se le $Q_k$ sono lipschitziane in $q$ e $\dot q$. Controesempio fisico: $m\ddot x=a\sqrt[3]x$, $x(0)=\dot x(0)=0$, che ha la quiete e anche $x(t)=(\frac a{6m})^{3/2}t^3$. Per questo un equilibrio può non essere una soluzione di quiete unica, e il principio dei lavori virtuali "non è esattamente un teorema". Fonti: `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (p. 53, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (pp. 56-57); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 81).
- **Equazioni di fisica matematica** (triennale): "Teorema di Cauchy" per sistemi $\frac{dx}{dt}=f(t,x)$, $f:\mathbb R\times\mathbb R^n\to\mathbb R^n$, su $I\times J=\{|t-t_0|\le a,\ \|x-x_0\|\le b\}$. Ipotesi: (i) $f$ continua in $I\times J$; (ii) lipschitziana in $x$ uniformemente in $t$: $\|f(t,x_2)-f(t,x_1)\|\le L\|x_2-x_1\|$. Tesi: esiste un'unica soluzione definita in un intorno di $t_0$. Dimostrazione con il teorema di Banach: $M=\sup_{I\times J}\|f\|$, $\delta<\min\{a,\frac1L,\frac bM\}$, $I_\delta=[t_0-\delta,t_0+\delta]$, $X=\{g\in C^0(I_\delta;\mathbb R^n):\|g-x_0\|_\infty\le b\}$ (chiuso in uno spazio completo, quindi completo); $F(g)=x_0+\int_{t_0}^tf(\tau,g(\tau))d\tau$ manda $X$ in sé ($\|F(g)-x_0\|_\infty\le M\delta<b$) ed è una contrazione ($\|F(g_2)-F(g_1)\|_\infty\le L\delta\|g_2-g_1\|_\infty$, $L\delta<1$). Seguono la prolungabilità (con $f$ sublineare) e la dipendenza continua dai dati (con Grönwall). Fonti: `triennale/ANNO 3/eq fisica matematica/02 - Lezione 04_10_23 (1).pdf` (pp. 1-7); `triennale/ANNO 3/eq fisica matematica/03 - Lezione 06_10_23.pdf` (pp. 1-3).

## Prerequisiti
- [[Convergenza uniforme di successioni di funzioni]]: metrica uniforme e completezza di C^0
- [[Problema di Cauchy]]: problema (PC)
- [[Teorema fondamentale del calcolo integrale]]: equivalenza tra (PC) ed equazione integrale
- [[Teorema del punto fisso di Banach]]: la soluzione è il punto fisso della mappa integrale F (Equazioni di fisica matematica)

## Porta a
- [[Prolungabilità delle soluzioni]]: con f sublineare la soluzione locale diventa globale (Equazioni di fisica matematica)
- [[Zero-stabilità]]: f lipschitziana rende zero-stabili i metodi a un passo consistenti (Metodi numerici)
- [[Condizionamento dei problemi di Cauchy]]: dipendenza continua dal dato iniziale con fattore $e^{L|x-a|}$ (Metodi numerici)

## Collegati
- [[Serie di Taylor]]: l'unicità identifica la somma della serie di sin x
- [[Lemma di Gronwall]]: con la lipschitzianità dà la stima di dipendenza continua (Equazioni di fisica matematica)
- [[Modello SIR]]: esempio di sistema ẋ = f(t,x) (Equazioni di fisica matematica)
