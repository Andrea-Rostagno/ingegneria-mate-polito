---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["covariance matrix", "matrice di varianza e covarianza", "variance-covariance matrix", "vettore delle medie", "mean vector", "Var(AX)"]
tags: [competenza, area/probabilita]
---

# Matrice di covarianza

> Per un vettore aleatorio $\mathbf X$ raccoglie in una matrice tutte le covarianze $\operatorname{Cov}(X_i,X_j)$; è simmetrica e semidefinita positiva e si trasforma come $A\Sigma A^T$.

## Definizione / enunciato
Sia $\mathbf X=(X_1,\dots,X_N)^T$ con componenti in $L^2$. Il **vettore delle medie** è $\boldsymbol\mu=(\mu_1,\dots,\mu_N)^T$, $\mu_i=\mathbb E[X_i]$. La **matrice di varianza e covarianza** è $C=(c_{ij})$, $c_{ij}=\operatorname{Cov}(X_i,X_j)$, con $c_{ii}=\operatorname{Var}(X_i)$; in forma compatta $C=\mathbb E[(\mathbf X-\mathbb E\mathbf X)(\mathbf X-\mathbb E\mathbf X)^T]$.

## Formule chiave
**Proposizione.** $C$ è simmetrica e semidefinita positiva:
$$\mathbf a^TC\mathbf a=\sum_{i,j}a_ia_jc_{ij}=\operatorname{Var}\Big(\sum_ia_iX_i\Big)\ge0\qquad\forall\mathbf a\in\mathbb R^N.$$
Trasformazioni lineari: $\mathbb E[\mathbf b+A\mathbf X]=\mathbf b+A\,\mathbb E[\mathbf X]$, $\operatorname{Var}(\mathbf b+A\mathbf X)=A\operatorname{Var}(\mathbf X)A^T$.
Ogni $\Sigma$ simmetrica semidefinita positiva ha una **radice principale** $A$ simmetrica semidefinita positiva con $\Sigma=AA^T=A^2$, invertibile se $\Sigma$ lo è.

## Intuizione
La forma quadratica $\mathbf a^TC\mathbf a$ è la varianza della combinazione lineare $\mathbf a^T\mathbf X$, quindi non può essere negativa. Se $C$ è singolare esiste una combinazione lineare costante: il vettore vive in un sottospazio (degenere).

## Come si usa
Base del vettore gaussiano $N_n(\boldsymbol\mu,\Sigma)$ e della regressione: $\operatorname{Var}(\hat{\boldsymbol\beta})=(X'X)^{-1}X'\operatorname{Var}(\mathbf y)X(X'X)^{-1}=\sigma^2(X'X)^{-1}$. Nella versione vettoriale del TLC la matrice limite è $C$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 6 (definizione e proprietà) e slide sulla normale multivariata (dimostrazione con $u^T\Sigma u=\operatorname{Var}(u^TY)$, radice principale). Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (pp. 8-9); `statistica/Distribuzioni lez1.pdf` (Normale Multivariata V, VII, VIII).
- **Prova finale** (triennale): matrice $2\times2$ dei due asset Open e Close costruita da volatilità e correlazione, $\Sigma=\begin{pmatrix}\sigma_{open}^2&\rho\sigma_{open}\sigma_{close}\\\rho\sigma_{open}\sigma_{close}&\sigma_{close}^2\end{pmatrix}$, per il rischio di portafoglio $\sigma_p=\sqrt{w^T\Sigma w}$; nella simulazione si usa la versione normalizzata $\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}$ per la copula gaussiana. La tesi ricorda che per copule gaussiana e t la matrice di correlazione deve essere definita positiva. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.1, p. 44; §6.1.2-6.1.3, pp. 96, 101).
- **Modelli statistici** (magistrale): notazione del docente $\operatorname{VarCov}(\mathbf X)$ e covarianza incrociata $\operatorname{Cov}(\mathbf X,\mathbf Y)=\mathbb E[(\mathbf X-\boldsymbol\mu_X)(\mathbf Y-\boldsymbol\mu_Y)']$ (libro, cap. 5, Def. 5.1-5.2); regola $\operatorname{Cov}(\mathbf A\mathbf X+\mathbf a,\mathbf B\mathbf Y+\mathbf b)=\mathbf A\operatorname{Cov}(\mathbf X,\mathbf Y)\mathbf B'$ e $\operatorname{VarCov}(\mathbf A\mathbf X)=\mathbf A\operatorname{VarCov}(\mathbf X)\mathbf A'$ (Prop. 5.3), la più citata nei capitoli sul modello lineare; $\mathbf a'\Sigma\mathbf a=0$ per qualche $\mathbf a\ne\mathbf 0$ se e solo se $\mathbf a'\mathbf X$ è costante, cioè $\mathbf X$ vive in un iperpiano (Prop. 5.5). Esempio: $\operatorname{Var}(X_1)=4$, $\operatorname{Var}(X_2)=1$, $\operatorname{Cov}=1$ e $\mathbf A=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ danno la matrice di $(X_1+X_2,X_1-X_2)$. Struttura $\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi'$ per multinomiale, Multinoulli e Dirichlet; l'inversa è la matrice di precisione. Fonti: `Libri/Modelli statistici/capitoli/cap05.tex` (§5.1, pp. 77-79); `magistrale/Modelli statistici/PDF corretti/251015A.pdf`.

## Prerequisiti
- [[Covarianza]]: elementi della matrice
- [[Vettore aleatorio]]: vettore delle medie

## Porta a
- [[Vettore gaussiano]]: legge determinata da $\boldsymbol\mu$ e $\Sigma$
- [[Teorema del limite centrale]]: versione vettoriale con limite $\mathcal N_k(\mathbf 0,C)$
- [[Rischio e rendimento di un portafoglio]]: $\sigma_p^2=w^T\Sigma w$
- [[Indipendenza di forme lineari e quadratiche]]: $\operatorname{Cov}(\mathbf A\mathbf X,\mathbf B\mathbf X)=\mathbf A\Sigma\mathbf B'$ (Modelli statistici)
- [[Rete bayesiana gaussiana]]: zeri dell'inversa e indipendenza condizionata (Modelli statistici)

## Collegati
- [[Matrice simmetrica definita positiva]]: $C$ è simmetrica semidefinita positiva
