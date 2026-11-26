---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["Gaussian vector", "normale multivariata", "multivariate normal distribution", "N_n(mu, Sigma)", "vettore gaussiano standard", "gaussiana multivariata", "vettore gaussiano degenere"]
tags: [competenza, area/probabilita]
---

# Vettore gaussiano

> $\mathbf Y=\boldsymbol\mu+A\mathbf X$ con $\mathbf X$ normale standard multivariata: legge $N_n(\boldsymbol\mu,\Sigma)$, $\Sigma=AA^T$, chiusa per trasformazioni lineari, con marginali normali e indipendenza equivalente a covarianza nulla.

## Definizione / enunciato
$\mathbf X\in\mathbb R^k$ è **gaussiano standard**, $\mathbf X\sim N_k(\mathbf 0,I_k)$, se ha densità $f(\mathbf x)=(2\pi)^{-k/2}\exp(-\frac12\mathbf x^T\mathbf x)$ (componenti i.i.d. $\mathcal N(0,1)$). Dati $\boldsymbol\mu\in\mathbb R^n$ e $A\in m_{n\times k}(\mathbb R)$, $\mathbf Y=\boldsymbol\mu+A\mathbf X$ è **gaussiano** di parametri $(\boldsymbol\mu,\Sigma)$, $\Sigma=AA^T$: $\mathbf Y\sim N_n(\boldsymbol\mu,\Sigma)$, con $\mathbb E\mathbf Y=\boldsymbol\mu$ e $\operatorname{Var}\mathbf Y=\Sigma$.

## Formule chiave
- Funzione caratteristica: $\Phi_{\mathbf Y}(\mathbf t)=\exp\big(i\mathbf t^T\boldsymbol\mu-\frac12\mathbf t^T\Sigma\mathbf t\big)$.
- **Chiusura lineare**: $\mathbf Z=\mathbf b+B\mathbf Y\sim N_q(\mathbf b+B\boldsymbol\mu,B\Sigma B^T)$.
- **Densità**: se $\Sigma$ è invertibile, $f_{\mathbf Y}(\mathbf y)=(2\pi)^{-n/2}\det(\Sigma)^{-1/2}\exp\big(-\frac12(\mathbf y-\boldsymbol\mu)^T\Sigma^{-1}(\mathbf y-\boldsymbol\mu)\big)$ (metodo dello jacobiano con $A$ radice principale di $\Sigma$); se $\Sigma$ non è invertibile $\mathbf Y$ è **degenere** e non a.c.
- **Marginali**: $Y_i\sim\mathcal N(\mu_i,\sigma_i^2)$ (con $\Phi_{Y_i}(t)=\Phi_{\mathbf Y}(t\mathbf e_i)$); il viceversa è falso: marginali normali non bastano.
- **Indipendenza**: diviso $\mathbf Y=(\mathbf Y_A,\mathbf Y_B)$, $\mathbf Y_A\perp\mathbf Y_B\iff\Sigma_{AB}=0$.

## Intuizione
Tutta la legge è determinata da media e covarianza; per questo per i gaussiani "scorrelati" equivale a "indipendenti", cosa falsa in generale.

## Come si usa
Esercizi delle slide: $X\sim N_3(\mathbf 0,\Sigma)$, $Z=(X_1-X_2,X_1+X_3)=A\mathbf X$ è $N_2(\mathbf 0,A\Sigma A^T)$; riconoscere i parametri da una densità ($\det\Sigma=3$, $\Sigma=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$); $\mathbf Y=A\mathbf X$ con $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$ ha $\Sigma=\begin{pmatrix}2&4\\4&8\end{pmatrix}$ singolare, $Y_2=2Y_1$. In statistica: $\bar X$ e gli scarti $X_i-\bar X$ formano un vettore gaussiano, quindi covarianza nulla dà indipendenza.

## Nei corsi
- **Prob e statistica** (triennale): slide "Normale multivariata (vettori gaussiani)" della parte di statistica; nelle lezioni di probabilità compare come esempio $(X+Y,X-Y)$ (lezione 8). Fonti: `triennale/ANNO 3/prob e statistica/statistica/Distribuzioni lez1.pdf` (Normale Multivariata I-XX); codice in `statistica/R/Distribuzioni Vers. 1.1.1.R` (chunk normale multivariata); `probabilita/2023Lezione08(19-10-2023).pdf` (pp. 11-12).
- **Prova finale** (triennale): la copula gaussiana è la copula della normale bivariata, $C(u,v)=\Phi_\rho(\Phi^{-1}(u),\Phi^{-1}(v))$; per simularla si generano normali bivariate con covarianza $\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}$ (`np.random.multivariate_normal`). Difetti della normale multivariata per i dati finanziari (Pellerey): code marginali troppo sottili, code congiunte con poco peso agli eventi estremi congiunti, simmetria ellittica. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.4.1, p. 23; §6.1.3, pp. 101-103); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 16).
- **Modelli statistici** (magistrale): definizione costruttiva $\mathbf X=\boldsymbol\mu+\mathbf A\mathbf Z$ con $\mathbf Z\sim N_m(\mathbf 0,\mathbf I)$ e $\Sigma=\mathbf A\mathbf A'$ (libro, cap. 7, Def. 7.2-7.3); funzione caratteristica $\exp\{i\mathbf t'\boldsymbol\mu-\frac12\mathbf t'\Sigma\mathbf t\}$ (Teorema 7.5); densità $(2\pi)^{-k/2}(\det\Sigma)^{-1/2}\exp\{-\frac12(\mathbf x-\boldsymbol\mu)'\Sigma^{-1}(\mathbf x-\boldsymbol\mu)\}$ se $\Sigma$ è definita positiva, altrimenti normale degenere su $\boldsymbol\mu+\mathrm{col}(\Sigma)$ (Teorema 7.6); trasformazioni affini $\mathbf a+\mathbf B\mathbf X\sim N_m(\mathbf a+\mathbf B\boldsymbol\mu,\mathbf B\Sigma\mathbf B')$, marginali a blocchi, indipendenza $\iff\Sigma_{12}=\mathbf 0$ (Teoremi 7.9-7.11). Caso bivariato con ellissi di equidensità; $Z$ e $Z^2$ sono incorrelate ma dipendenti, perché $(Z,Z^2)$ non è normale; con $\sigma_X=\sigma_Y$ somma e differenza sono indipendenti. Esempio: $X=Z_1$, $Y=Z_1+\frac13Z_2$ dà $\Sigma=\begin{pmatrix}1&1\\1&10/9\end{pmatrix}$, $\det\Sigma=1/9$. Stima di $\boldsymbol\mu$ e $\Sigma$ da un campione; calcoli con `mvtnorm::pmvnorm` e `scipy.stats.multivariate_normal`. Fonti: `Libri/Modelli statistici/capitoli/cap07.tex` (pp. 109-121); `magistrale/Modelli statistici/251029 Normale multivariata.pdf`; `magistrale/Modelli statistici/PDF corretti/251029.pdf`, `PDF corretti/251030.pdf`.

## Prerequisiti
- [[Distribuzione normale]]: componenti e trasformazioni lineari
- [[Matrice di covarianza]]: parametro $\Sigma$ simmetrico semidefinito positivo
- [[Funzione caratteristica]]: marginali e indipendenza
- [[Metodo dello jacobiano]]: densità di $\boldsymbol\mu+A\mathbf X$

## Porta a
- [[Condizionamento di un vettore gaussiano]]: legge di $\mathbf X_A|\mathbf X_B$
- [[Media e varianza campionaria nel caso normale]]: indipendenza di $\bar X$ e $S^2$
- [[Inferenza sui coefficienti di regressione]]: $\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(X'X)^{-1})$
- [[Copula gaussiana]]: copula della normale bivariata
- [[Indipendenza di forme lineari e quadratiche]]: criteri $\mathbf A\Sigma\mathbf B'=\mathbf 0$ e $\mathbf A\mathbf B=\mathbf 0$ (Modelli statistici)
- [[Rete bayesiana gaussiana]]: DAG con condizionate normali lineari (Modelli statistici)
- [[Regressione lineare]]: $\mathbf Y\sim N_n(\mathbf X\boldsymbol\beta,\sigma^2\mathbf I)$ (Modelli statistici)

## Collegati
- [[Caratterizzazione gaussiana del moto browniano]]: processo i cui vettori finito-dimensionali sono gaussiani
