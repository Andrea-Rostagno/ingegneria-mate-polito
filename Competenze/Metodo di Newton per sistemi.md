---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["Newton's method for systems", "Newton-Raphson multivariato", "sistemi di equazioni non lineari", "nonlinear systems", "fsolve", "Newton-tangent method", "metodo di Newton-tangente"]
tags: [competenza, area/numerica]
---

# Metodo di Newton per sistemi

> Generalizzazione di Newton a $\mathbf f(\mathbf x)=\mathbf o$, $\mathbf f:\mathbb R^m\to\mathbb R^m$: a ogni passo si linearizza con la jacobiana e si risolve un sistema lineare.

## Definizione / enunciato
Si sviluppa ogni $f_j$ con Taylor in $\mathbf x^{(n)}$ (derivate seconde parziali continue vicino ad $\alpha$), si trascurano i termini di ordine 2 e si impone l'uguaglianza a zero. Detta
$$J^{(n)}=\left(\frac{\partial f_i}{\partial x_j}\Big|_{\mathbf x=\mathbf x^{(n)}}\right)_{i,j=1}^m$$
la **matrice jacobiana**, il metodo è
$$J^{(n)}\mathbf h^{(n)}=-\mathbf f(\mathbf x^{(n)}),\qquad \mathbf x^{(n+1)}=\mathbf x^{(n)}+\mathbf h^{(n)},\quad n=0,1,2,\dots$$
Con $\mathbf x^{(0)}$ sufficientemente vicino ad $\alpha$ converge, sotto opportune condizioni, con ordine 2: $\lim\|\alpha-\mathbf x^{(n+1)}\|/\|\alpha-\mathbf x^{(n)}\|^2=C\ne0,+\infty$.

## Formule chiave
Caso $m=1$: $0\approx f(x_n)+f'(x_n)(\alpha-x_n)$ dà $x_{n+1}=x_n-f(x_n)/f'(x_n)$. Function del corso: `[L,U,P]=lu(J(x)); y=L\(-P*F(x)); e_n=U\y;` (oppure `-J(x)\F(x)`), arresto quando `norm(e_n) <= tol`.

## Intuizione
Una equazione non lineare in $m$ incognite si sostituisce con il suo piano tangente: il "dividere per $f'$" diventa "risolvere con $J$".

## Come si usa
Punti delicati elencati nelle slide: scelta del punto iniziale; calcolo e valutazione della jacobiana a ogni passo (costoso); $J$ singolare o quasi singolare (sistema mal condizionato); un sistema lineare per passo (costoso). Rimedi: derivate approssimate con rapporti incrementali; stessa jacobiana per più iterazioni, così si riusa la fattorizzazione $PJ^{(n)}=LU$. In Matlab `r = fsolve(f,x0)`.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 49-56, 59); codice `triennale/ANNO 2/metodi numerici/newton_system.m`.
- **Numerical opt** (magistrale): "Newton-tangent method" $J_F(x^{(k)})s=-F(x^{(k)})$ per $F:\mathbb R^n\to\mathbb R^n$. Applicato a $F=\nabla f$ ritrova il Newton per ottimizzazione, ma cerca punti stazionari, anche massimi. Ne condivide pregi (convergenza quadratica se $J_F$ è non singolare) e difetti (costo, sensibilità a $x^{(0)}$); non serve però una jacobiana definita positiva. Si globalizza con la [[Funzione di merito]] e ha una versione inesatta con termini forzanti ([[Metodo di Newton inesatto]]). Fonti: `magistrale/Numerical opt/Pieraccini/Part_4_Nonlinear_equations_and_Nonlinear_Least_Squares.pdf` (p. 1-6); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§8, eq. 43-44).

## Prerequisiti
- [[Metodo di Newton]]: stessa costruzione per una equazione
- [[Matrice jacobiana]]: matrice del sistema lineare a ogni passo
- [[Formula di Taylor in più variabili]]: linearizzazione di ogni $f_j$

## Porta a
- [[Metodo di Eulero implicito]]: con $f$ non lineare ogni passo è un'equazione non lineare in $y_{n+1}$

## Collegati
- [[Fattorizzazione LU]]: risolve $J^{(n)}\mathbf h=-\mathbf f$ e si riusa se $J$ resta fissa
- [[Condizionamento di un sistema lineare]]: jacobiana quasi singolare
- [[Metodo del punto fisso]]: l'altro metodo per sistemi visto nel corso
