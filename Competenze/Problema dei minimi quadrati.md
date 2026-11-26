---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["least squares problem", "minimi quadrati", "sistema sovradeterminato", "overdetermined system", "equazioni normali", "normal equations"]
tags: [competenza, area/numerica]
---

# Problema dei minimi quadrati

> Per un sistema sovradeterminato si cerca il vettore che minimizza la norma euclidea del residuo $\|Ay-b\|_2$.

## Definizione / enunciato
Un sistema $Ax=b$ con $A\in\mathbb R^{m,n}$, $m>n$, è **sovradeterminato** e può non avere soluzione classica. Fissata una norma, $x$ è soluzione rispetto a quella norma se $\|Ax-b\|=\min_{y\in\mathbb R^n}\|Ay-b\|$. Con la norma euclidea si ha il **problema dei minimi quadrati** $\min_y\|Ay-b\|_2$.

**Teorema.** Il problema ammette sempre soluzione (l'insieme $X$ delle soluzioni è non vuoto) e
$$x\in X\iff A^TAx=A^Tb\quad(\text{equazioni normali}).$$
$X$ ha un solo elemento se e solo se $A$ ha rango massimo. Esiste uno e un solo $x^*\in X$ di norma euclidea minima.

## Formule chiave
$$\min_{y\in\mathbb R^n}\|Ay-b\|_2,\qquad A^TAx=A^Tb$$

## Intuizione
Se il residuo minimo è zero si ritrova la soluzione classica. Con rango non massimo, se $x$ è soluzione lo è anche $x+z$ con $Az=0$: per scegliere si prende quella di norma minima.

## Come si usa
Rango massimo: $A^TA$ è simmetrica definita positiva e si potrebbe usare Cholesky sulle equazioni normali, ma non è stabile (il sistema normale può essere mal condizionato anche se il problema non lo è); il metodo stabile usa $A=QR$. Rango non massimo, e sistemi sottodeterminati: soluzione di minima norma tramite la SVD. In Matlab `x = A\b` con $A$ rettangolare di rango massimo dà la soluzione ai minimi quadrati; `polyfit(x,y,m)` calcola il polinomio ai minimi quadrati.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 90-100); `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 16).
- **Ricerca operativa** (triennale): esempio tipico di ottimizzazione convessa non vincolata ($A\in\mathbb R^{n\times p}$, $p<n$): $(A\mathbf x-\mathbf b)^T(A\mathbf x-\mathbf b)=\mathbf x^TA^TA\mathbf x-2\mathbf b^TA\mathbf x+\mathbf b^T\mathbf b$ è convessa perché $A^TA\in S^p_+$ ($\mathbf x^TA^TA\mathbf x=\|A\mathbf x\|_2^2$); la condizione del primo ordine $2A^TA\mathbf x-2A^T\mathbf b=\mathbf 0$ dà $\mathbf x^*=(A^TA)^{-1}A^T\mathbf b$ se le colonne sono indipendenti, altrimenti si regolarizza (ridge). Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 5-6); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 38).
- **Numerical opt** (magistrale): $\min\|Ax-b\|^2$ con $A\in\mathbb R^{m\times n}$ e $m>n$. La funzione è convessa e il punto stazionario risolve le equazioni normali $A^TAx=A^Tb$, un sistema quadrato, piccolo, definito positivo se $A$ ha rango pieno. È il sottoproblema del [[Metodo di Gauss-Newton]] ($A=J_F$, $b=-F$). Nel LASSO risolto con [[ADMM]] il passo in $x$ è un problema ai minimi quadrati a blocchi impilati. Fonti: `magistrale/Numerical opt/Pieraccini/Part_4_Nonlinear_equations_and_Nonlinear_Least_Squares.pdf` (p. 21-24); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§9.1); `magistrale/Numerical opt/Pieraccini/Part_7_Constrained_Optimization_Penalty_methods.pdf` (p. 14); codice d'esempio `DellaSanta/labs/lin_leastsq.m`.

## Prerequisiti
- [[Norme vettoriali]]: minimizza la norma 2 del residuo
- [[Matrice simmetrica definita positiva]]: A^T A è sdp se A ha rango massimo

## Porta a
- [[Minimi quadrati con QR]]: metodo stabile nel caso di rango massimo
- [[Pseudo-inversa di Moore-Penrose]]: soluzione di minima norma per rango qualsiasi

## Collegati
- [[Fattorizzazione di Cholesky]]: risolve le equazioni normali ma è instabile
- [[Rappresentazione monomiale del polinomio interpolante]]: polyfit nasce per i minimi quadrati
- [[Regressione lineare]]: la retta di regressione è un problema di minimi quadrati
- [[Regressione regolarizzata]]: ridge quando $A^TA$ non è invertibile (Ricerca operativa)
- [[Proiezione ortogonale di un vettore]]: la soluzione proietta b sullo spazio delle colonne di A (collegamento concettuale, non nelle slide)
- [[Complemento ortogonale]]: il residuo ottimo è ortogonale a Col(A) (collegamento concettuale, non nelle slide)
