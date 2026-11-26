---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [multidimensional Itô formula, formula di Itô in più dimensioni, regola del prodotto stocastica, Itô product rule, integrazione per parti stocastica, stochastic integration by parts, d(XY)]
tags: [competenza, area/probabilita]
---

# Formula di Itô multidimensionale

> Formula di Itô per funzioni di più processi: compaiono il laplaciano (browniano $d$-dimensionale) e il termine incrociato $dX\,dY$, da cui la regola del prodotto stocastica.

## Definizione / enunciato
**Teorema** (teo. c13-ito-2d):
1. con $\mathbf W$ browniano $d$-dimensionale e $f(t,\mathbf x)\in C^{1,2}$,
$$df(t,\mathbf W_t)=\Big[\partial_tf+\frac12\Delta f\Big]dt+\nabla f\cdot d\mathbf W_t ;$$
2. con $X$, $Y$ processi di Itô guidati dallo stesso browniano ($dX=b^Xdt+\sigma^XdW$, $dY=b^Ydt+\sigma^YdW$),
$$df(t,X,Y)=\partial_tf\,dt+\partial_xf\,dX+\partial_yf\,dY+\tfrac12\partial_{xx}f(dX)^2+\tfrac12\partial_{yy}f(dY)^2+\partial_{xy}f\,dX\,dY,$$
con $dX\,dY=\sigma^X\sigma^Ydt$; con browniani correlati $\rho\,\sigma^X\sigma^Ydt$ (0 se indipendenti).

**Regola del prodotto** (cor. c13-prodotto):
$$d(X_tY_t)=X_t\,dY_t+Y_t\,dX_t+dX_t\,dY_t,\qquad\int_0^tX\,dY=X_tY_t-X_0Y_0-\int_0^tY\,dX-\int_0^t\sigma^X\sigma^Y\,ds .$$
Se uno dei due è deterministico e derivabile vale la regola ordinaria.

## Formule chiave
$d(tW_t)=W_t\,dt+t\,dW_t$, quindi $\int_0^ts\,dW_s=tW_t-\int_0^tW_s\,ds$; prezzo scontato $d(e^{-rt}S_t)=(\mu-r)S^D_tdt+\sigma S^D_tdW_t$.

## Intuizione
Il termine incrociato $dX\,dY$ è la covariazione quadratica: nel calcolo ordinario sparirebbe. Se $\partial_tf+\frac12\Delta f=0$, $f(t,\mathbf W_t)$ è una martingala (locale): è il ponte verso l'equazione del calore e il problema di Dirichlet.

## Come si usa
Esempio del libro (lezione): $dX=-\sin\phi_t\,dW$, $dY=\cos\phi_t\,dW$ con $\phi_t$ angolo polare: $d(R_t^2)=d(X^2)+d(Y^2)=dt$, quindi $R_t^2=R_0^2+t$: un moto sempre tangente fa crescere il raggio in modo deterministico. Probabilità di uscita: un browniano da $x\in(a,b)$ tocca $b$ prima di $a$ con probabilità $(x-a)/(b-a)$ (da 10 con soglie 8 e 15: $2/7$).

## Nei corsi
- **Financial engineering** (magistrale): cap. 13 §§La formula di Itô in più dimensioni, Formula di Itô e PDE: un primo sguardo. Fonti: `Libri/Financial engineering/capitoli/cap13.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 05 - analisi stocastica - 12 mag 26.pdf`.

## Prerequisiti
- [[Formula di Itô]]: caso unidimensionale
- [[Processo di Itô]]: $dX\,dY=\sigma^X\sigma^Ydt$

## Porta a
- [[Teorema di Girsanov]]: prezzo scontato con la regola del prodotto
- [[Formula di Feynman-Kac]]: PDE e valori attesi

## Collegati
- [[Integrazione per parti]]: analogo deterministico
- [[Problema di Dirichlet e moto browniano]]: funzioni armoniche e martingale
- [[Equazione del calore]]: $\partial_tf+\frac12\Delta f=0$
- [[Probabilità di uscita del moto browniano]]: $(x-a)/(b-a)$
