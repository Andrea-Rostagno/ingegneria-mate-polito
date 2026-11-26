---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Prob e statistica, Financial engineering]
livello: [magistrale, triennale]
aliases: ["conditional expectation", "tower property", "attesa condizionata", "E[X|Y]", "valore atteso condizionato", "proprietà di proiettività", "proiezione ortogonale in L2"]
tags: [competenza, area/probabilita]
---

# Speranza condizionata

> Media di una variabile aleatoria data una $\sigma$-algebra di informazione; è l'oggetto con cui si definiscono le martingale.

## Definizione / enunciato
Se $X$ è integrabile e $\mathcal G\subseteq\mathcal F$, la **speranza condizionata** $\mathbb E[X\mid\mathcal G]$ è la variabile $\mathcal G$-misurabile tale che
$$\int_G \mathbb E[X\mid\mathcal G]\,d\mathbb P=\int_G X\,d\mathbb P\qquad\forall G\in\mathcal G.$$

## Formule chiave
- Linearità: $\mathbb E[aX+bY\mid\mathcal G]=a\,\mathbb E[X\mid\mathcal G]+b\,\mathbb E[Y\mid\mathcal G]$.
- Tower property: se $\mathcal H\subseteq\mathcal G$, allora $\mathbb E[\mathbb E[X\mid\mathcal G]\mid\mathcal H]=\mathbb E[X\mid\mathcal H]$.
- Indipendenza: se $X$ è indipendente da $\mathcal G$, allora $\mathbb E[X\mid\mathcal G]=\mathbb E[X]$.
- Variabile nota: se $X$ è $\mathcal G$-misurabile, allora $\mathbb E[X\mid\mathcal G]=X$.

## Intuizione
È la miglior previsione di $X$ con l'informazione $\mathcal G$: una variabile aleatoria, non un numero, che si comporta come $X$ su ogni evento osservabile in $\mathcal G$.

## Come si usa
Lo schema degli esercizi sulle martingale (dal `.tex`) è: fissare la filtrazione, verificare adattamento e integrabilità, calcolare $\mathbb E[X_{n+1}\mid\mathcal F_n]$.
- Si usano "variabile nota" per i termini in $\mathcal F_n$ e "indipendenza" per l'incremento nuovo.
- Esempio della lezione 19: per la passeggiata asimmetrica con $Y_n=(q/p)^{X_n}$,
$$\mathbb E[Y_{n+1}\mid\mathcal F_n]=(q/p)^{X_n}\Big(p\tfrac qp+q\tfrac pq\Big)=(q/p)^{X_n}.$$

## Nei corsi
- **Processi stocastici** (magistrale): Ripresa come prerequisito della teoria delle martingale nella lezione 16 ("Conditional expectation", "Properties of conditional expectation"). Le definizioni e le proprietà qui riportate vengono da `magistrale/Processi stocastici/riassunto_del_corso.tex`, sezione "Prerequisiti e notazione". Fonti principali: `magistrale/Processi stocastici/Lezione_16_11_11.pdf` (lezione 16); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Prerequisiti e notazione.
- **Prob e statistica** (triennale): costruita in tre passi (lezioni 12-14, appunti manoscritti). (1) Caso discreto: $\mathbb E[X|Y=y]=\sum_xx\,p_{X|Y=y}(x)=h(y)$ e $\mathbb E[X|Y]=h(Y)$, $\sigma(Y)$-misurabile (una v.a. è $\sigma(Y)$-misurabile se e solo se è $h(Y)$ con $h$ boreliana), con $\int_A X\,d\mathbb P=\int_A\mathbb E[X|Y]d\mathbb P$ per $A\in\sigma(Y)$. (2) Definizione di Kolmogorov rispetto a $\mathcal G$, esistenza e unicità q.o. con Radon-Nikodym ($Q(A)=\int_AX\,d\mathbb P\ll\mathbb P|_{\mathcal G}$, prima per $X\ge0$, poi $X=X^+-X^-$). (3) Caso continuo $\mathbb E[X|Y=y]=\int x\,f_{X|Y=y}(x)dx$. Proprietà dimostrate: linearità, monotonia, teoremi limite (convergenza monotona, Fatou, dominata condizionati), tower property e $\mathbb E[\mathbb E[X|\mathcal G]]=\mathbb E[X]$, Jensen, contrazione in $L^p$ ($p\ge1$ e $p=\infty$), $\mathbb E[XY|\mathcal G]=Y\mathbb E[X|\mathcal G]$ per $Y$ $\mathcal G$-misurabile; casi particolari $\mathcal G=\{\emptyset,\Omega\}$, $\mathcal G=\mathcal F$, $X$ indipendente da $\mathcal G$ ($X\perp Y\Rightarrow\mathbb E[X|Y]=\mathbb E[X]$, ma non viceversa: $X\sim U\{-2,-1,1,2\}$, $Y=X^2$). Caratterizzazione: $\hat X=\mathbb E[X|\mathcal G]$ è l'unica v.a. $\mathcal G$-misurabile con $\mathbb E[XY]=\mathbb E[\hat XY]$ per ogni $Y$ $\mathcal G$-misurabile; per $X\in L^2$ è la **proiezione ortogonale** su $L^2(\Omega,\mathcal G,\mathbb P)$, quindi la miglior stima di $X$ ($\operatorname{Var}(X-\hat X)\le\operatorname{Var}(X-Z)$), es. segnale $X$ ricevuto con rumore $Y=X+W$. Esempi: $X\sim\mathcal P(\lambda)\perp Y\sim\mathcal P(\mu)$, $\mathbb E[X|X+Y]=(X+Y)\frac\lambda{\lambda+\mu}$; $X,Y$ i.i.d. $\mathrm{Exp}(\lambda)$, $\mathbb E[X|X+Y]=\frac{X+Y}2$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione12(02-11-2023) (1).pdf` (pp. 1-11); `2023Lezione13(03-11-2023).pdf` (pp. 1-15); `2023Lezione14(08-11-2023).pdf` (pp. 1-3).
- **Financial engineering** (magistrale): richiamo nell'appendice A (prop. cA-attesa-condizionata): linearità, media, torre, "ciò che è noto si estrae", indipendenza e **congelamento** ($\mathbb E[g(Z,X)\mid\mathcal G]=\varphi(Z)$, $\varphi(z)=\mathbb E[g(z,X)]$ se $Z$ è $\mathcal G$-misurabile e $X$ indipendente). Errore tipico: $\mathbb E[W_t^2\mid\mathcal F_s]=W_s^2$; il conto corretto scrive $W_t=W_s+(W_t-W_s)$ e dà $W_s^2+(t-s)$. Il prezzo di un derivato è un'attesa condizionata scontata sotto $\mathbb Q$, $\Pi(t,X)=e^{-r(T-t)}\mathbb E^{\mathbb Q}[\varphi(S_T)\mid\mathcal F_t]$. Fonti: `Libri/Financial engineering/capitoli/appA.tex`, `cap11.tex`, `cap16.tex`.

## Prerequisiti
- [[Filtrazione]]: condiziona rispetto a una sigma-algebra
- [[Distribuzione condizionata]]: media rispetto a $p_{X|Y=y}$ o $f_{X|Y=y}$ (Prob e statistica)
- [[Teorema di Radon-Nikodym]]: esistenza e unicità q.o. (Prob e statistica)

## Porta a
- [[Varianza condizionata]]: scomposizione $\operatorname{Var}(X)=\mathbb E[\operatorname{Var}(X|\mathcal G)]+\operatorname{Var}(\mathbb E[X|\mathcal G])$ (Prob e statistica)
- [[Teorema di Rao-Blackwell]]: $\mathbb E(W|T)$ migliora uno stimatore (Prob e statistica)
- [[Martingala]]: definita tramite attesa condizionata
- [[Disuguaglianza di Jensen condizionata]]: versione condizionata di Jensen
- [[Martingala chiusa]]: tower property garantisce la martingalità

## Collegati
- [[Integrale di Lebesgue]]: definizione rigorosa (teoria della misura)
- [[Condizionamento di un vettore gaussiano]]: nel caso gaussiano $\mathbb E[\mathbf X_A|\mathbf X_B]$ è affine (Prob e statistica)
- [[Valutazione neutrale al rischio]]: prezzo come attesa condizionata sotto $\mathbb Q$ (Financial engineering)
- [[Isometria di Itô]]: media e isometria condizionate a $\mathcal F_a$ (Financial engineering)
