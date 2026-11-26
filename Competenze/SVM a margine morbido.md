---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["soft margin SVM", "SVM non separabile", "non-separable case", "variabili di slack della SVM", "hinge loss", "perdita hinge", "quadratic hinge loss", "parametro C", "outlier nella SVM"]
tags: [competenza, area/data-ml]
---

# SVM a margine morbido

> SVM per dati non linearmente separabili: si ammettono violazioni del margine pagate con variabili di slack, bilanciando margine ampio e penalità totale tramite il parametro $C$.

## Definizione / enunciato
Con dati non separabili si introducono slack $\xi_i\ge0$ e si richiede $y_i(\mathbf w\cdot\mathbf x_i+b)\ge1-\xi_i$. Il problema primale (Mohri, (5.24)) è
$$\min_{\mathbf w,b,\boldsymbol\xi}\ \frac12\|\mathbf w\|^2+C\sum_{i=1}^m\xi_i^p\qquad\text{s.t.}\quad y_i(\mathbf w\cdot\mathbf x_i+b)\ge1-\xi_i,\ \ \xi_i\ge0 .$$
Con $p=1$ la perdita associata è la **hinge loss**, con $p=2$ la **quadratic hinge loss**: entrambe maggioranti convessi della perdita 0-1. Minimizzare direttamente il numero di errori sarebbe NP-difficile nella dimensione $N$. Il margine ottenuto $\rho=1/\|\mathbf w\|$ è detto **margine morbido**.

## Formule chiave
Lagrangiana con $\alpha_i,\beta_i\ge0$; KKT:
$$\mathbf w=\sum_i\alpha_iy_i\mathbf x_i,\quad\sum_i\alpha_iy_i=0,\quad\alpha_i+\beta_i=C,\quad\alpha_i=0\ \vee\ y_i(\mathbf w\cdot\mathbf x_i+b)=1-\xi_i,\quad\beta_i=0\ \vee\ \xi_i=0 .$$
**Duale** (uguale al caso separabile salvo il vincolo di box):
$$\max_{\boldsymbol\alpha}\ \sum_i\alpha_i-\frac12\sum_{i,j}\alpha_i\alpha_jy_iy_j(\mathbf x_i\cdot\mathbf x_j)\qquad\text{s.t.}\quad0\le\alpha_i\le C,\ \ \sum_i\alpha_iy_i=0,$$
con $h(\mathbf x)=\mathrm{sgn}\big(\sum_i\alpha_iy_i(\mathbf x_i\cdot\mathbf x)+b\big)$ e $b=y_i-\sum_j\alpha_jy_j(\mathbf x_j\cdot\mathbf x_i)$ per un qualunque $\mathbf x_i$ con $0<\alpha_i<C$.

## Intuizione
Due obiettivi in conflitto: limitare la slack totale (gli outlier) e avere un margine grande, che però fa crescere gli outlier. I vettori di supporto sono di due tipi: sugli iperpiani marginali ($\xi_i=0$) oppure **outlier** ($\xi_i>0$, e allora $\alpha_i=C$).

## Come si usa
$C$ si sceglie con la n-fold cross-validation (in laboratorio con `GridSearchCV`). Nel notebook `linSVM.ipynb` lo stesso problema è scritto con $\mathcal T=\{(\mathbf x_i,y_i)\}\subset\mathbb R^n\times\{\pm1\}$ e risolto con `LinearSVC`; figure `svm_soft.png`, `svm_soft_distances.png`.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/FML.pdf` §5.3 (pp. 104-108 del PDF); esempi `linSVM.ipynb`.

## Prerequisiti
- [[Support vector machine]]: il caso separabile da cui si parte
- [[Condizioni di Karush-Kuhn-Tucker]]: caratterizzano i due tipi di vettori di supporto
- [[Programmazione quadratica]]: primale e duale sono QP convessi

## Porta a
- [[Kernel definito positivo]]: SVM non lineare sostituendo i prodotti scalari

## Collegati
- [[Regolarizzazione]]: $\frac12\|\mathbf w\|^2$ regolarizzatore, slack come errore empirico
- [[Empirical risk minimization]]: la hinge loss rende trattabile la minimizzazione
- [[Metodi di stima dell'accuratezza]]: scelta di $C$ per cross-validation
