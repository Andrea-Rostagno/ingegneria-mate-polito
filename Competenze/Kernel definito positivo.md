---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["positive definite symmetric kernel", "kernel PDS", "PDS kernel", "kernel trick", "trucco del kernel", "kernel SVM", "SVM non lineari", "matrice di Gram", "kernel matrix", "kernel polinomiale", "kernel gaussiano", "RBF kernel", "kernel sigmoidale", "RKHS"]
tags: [competenza, area/data-ml]
---

# Kernel definito positivo

> Funzione $K(x,x')$ che si comporta come un prodotto scalare in uno spazio di feature (di Hilbert) implicito: permette di rendere non lineari SVM e altri algoritmi che usano solo prodotti scalari.

## Definizione / enunciato
Un kernel $K:\mathcal X\times\mathcal X\to\mathbb R$ è **definito positivo simmetrico (PDS)** se per ogni $\{x_1,\dots,x_m\}\subseteq\mathcal X$ la matrice $\mathbf K=[K(x_i,x_j)]_{ij}$ (**matrice di Gram**) è simmetrica semidefinita positiva: autovalori non negativi, ovvero
$$\mathbf c^T\mathbf K\mathbf c=\sum_{i,j=1}^mc_ic_jK(x_i,x_j)\ge0\quad\forall\mathbf c\in\mathbb R^m .$$
Un kernel PDS induce un prodotto scalare in uno spazio di Hilbert (RKHS): esiste $\Phi$ con $K(x,x')=\langle\Phi(x),\Phi(x')\rangle$.

## Formule chiave
- **Polinomiale** di grado $d$, $c>0$: $K(\mathbf x,\mathbf x')=(\mathbf x\cdot\mathbf x'+c)^d$; per $N=2$, $d=2$ corrisponde al prodotto scalare in dimensione 6 con feature $(x_1^2,x_2^2,\sqrt2x_1x_2,\sqrt{2c}x_1,\sqrt{2c}x_2,c)$; rende separabile il problema XOR.
- **Gaussiano (RBF)**, $\sigma>0$: $K(\mathbf x,\mathbf x')=\exp\big(-\|\mathbf x'-\mathbf x\|^2/(2\sigma^2)\big)$.
- **Sigmoidale**: $K(\mathbf x,\mathbf x')=\tanh(a(\mathbf x\cdot\mathbf x')+b)$, PDS per $a,b\ge0$.
- **SVM con kernel**: $\max_\alpha\sum_i\alpha_i-\frac12\sum_{i,j}\alpha_i\alpha_jy_iy_jK(x_i,x_j)$ s.t. $0\le\alpha_i\le C$, $\sum_i\alpha_iy_i=0$; $h(x)=\mathrm{sgn}\big(\sum_i\alpha_iy_iK(x_i,x)+b\big)$.

## Intuizione
Mappare i dati in uno spazio di dimensione $m>n$ rende separabili confini molto non lineari, ma costa (problema 1) e non si sa quale mappa scegliere (problema 2). Il **kernel trick** risolve entrambi: i calcoli restano in $\mathbb R^n$ e $\phi$ non serve esplicitamente. Per questo si risolve il duale, dove compaiono solo prodotti scalari.

## Come si usa
In scikit-learn (`SVC`) i kernel sono parametrizzati come $(\gamma\langle x_i,x_j\rangle+c_0)^d$, RBF e $\tanh(\gamma\langle x_i,x_j\rangle+c_0)$: più grande è $\gamma$, maggiore l'influenza dei singoli punti di training (default $1/n$ o $1/(n\,\mathrm{Var})$); $c_0$ di solito 0. Nel notebook l'RBF è scritto $e^{-\gamma\langle x_i,x_j\rangle^2}$, che differisce dalla forma con $\|x_i-x_j\|^2$ del libro (probabile refuso). Iperparametri scelti per grid search.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/FML.pdf` §6.2.1, §6.3.1 (pp. 125-127, 133 del PDF); esempi `nonlinSVM.ipynb`, `SVMandGridSearch.ipynb`.
- **Statistica computazionale** (magistrale): la **funzione di covarianza** di un processo gaussiano "deve essere una funzione definita positiva", perché ogni matrice $[\Sigma]_{jk}=C(\mathbf s_j,\mathbf s_k)$ sia una covarianza valida; la somma di funzioni definite positive è ancora definita positiva, il che giustifica le covarianze spazio-temporali $aC_s+bC_t$. Le famiglie classiche (esponenziale, Matérn, Cauchy...) sono valide su spazi euclidei ma non sulla sfera. Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 17-21).

## Prerequisiti
- [[SVM a margine morbido]]: il duale in cui si sostituisce il prodotto scalare
- [[Matrice simmetrica definita positiva]]: la matrice di Gram deve essere SPSD
- [[Spazio di Hilbert]]: lo spazio delle feature indotto

## Porta a
- [[Teorema del rappresentante]]: forma delle soluzioni nel RKHS

## Collegati
- [[Prodotto scalare]]: il kernel ne generalizza il ruolo
- [[Maledizione della dimensionalità]]: in alta dimensione separare è più facile
- [[Funzioni di attivazione]]: il kernel sigmoidale richiama le reti neurali
- [[Funzioni di covarianza stazionarie]]: covarianze dei processi gaussiani, definite positive (Statistica computazionale)
