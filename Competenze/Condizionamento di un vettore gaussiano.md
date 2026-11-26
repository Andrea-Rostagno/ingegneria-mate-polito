---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Modelli statistici, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["conditional distribution of a Gaussian vector", "normale multivariata condizionata", "conditional multivariate normal", "complemento di Schur della covarianza", "mu_{A|B}", "Sigma_{A|B}"]
tags: [competenza, area/probabilita]
---

# Condizionamento di un vettore gaussiano

> In un vettore gaussiano un blocco condizionato all'altro è ancora gaussiano, con media lineare nel valore osservato e covarianza che non dipende da esso.

## Definizione / enunciato
**Proposizione.** $\mathbf X\sim N_n(\boldsymbol\mu,\Sigma)$ diviso in blocchi $\mathbf X=(\mathbf X_A,\mathbf X_B)$, $\boldsymbol\mu=(\boldsymbol\mu_A,\boldsymbol\mu_B)$, $\Sigma=\begin{pmatrix}\Sigma_A&\Sigma_{AB}\\\Sigma_{BA}&\Sigma_B\end{pmatrix}$. Allora $\mathbf X_A|\mathbf X_B=\mathbf x_B$ è normale multivariata con
$$\boldsymbol\mu_{A|B}=\boldsymbol\mu_A+\Sigma_{AB}\Sigma_B^{-1}(\mathbf x_B-\boldsymbol\mu_B),\qquad\Sigma_{A|B}=\Sigma_A-\Sigma_{AB}\Sigma_B^{-1}\Sigma_{BA}.$$

## Formule chiave
Dimostrazione: si pone $\mathbf Z=\mathbf X_A+\mathcal A\mathbf X_B$ con $\mathcal A=-\Sigma_{AB}\Sigma_B^{-1}$, così $\operatorname{Cov}(\mathbf Z,\mathbf X_B)=\Sigma_{AB}-\Sigma_{AB}\Sigma_B^{-1}\Sigma_B=0$; essendo $(\mathbf Z,\mathbf X_B)$ gaussiano, $\mathbf Z\perp\mathbf X_B$. Allora $\mathbf X_A=\mathbf Z-\mathcal A\mathbf X_B$ e
$$\mathbb E[\mathbf X_A|\mathbf x_B]=\mathbb E[\mathbf Z]-\mathcal A\mathbf x_B,\qquad\operatorname{Var}(\mathbf X_A|\mathbf x_B)=\operatorname{Var}(\mathbf Z)=\Sigma_A-\Sigma_{AB}\Sigma_B^{-1}\Sigma_{BA}.$$
Riordinando le componenti vale per qualunque partizione.

## Intuizione
Osservare $\mathbf X_B$ sposta la media di $\mathbf X_A$ in proporzione alla covarianza e riduce la varianza (si toglie la parte "spiegata" da $\mathbf X_B$); se $\Sigma_{AB}=0$ non cambia nulla, coerentemente con l'indipendenza.

## Come si usa
Esempio delle slide: $(X,Y)\sim N_2(\boldsymbol\mu,\Sigma)$ con $\Sigma=\begin{pmatrix}1&0.8\\0.8&1.2\end{pmatrix}$; le densità di $X|Y=y$ per diversi $y$ hanno tutte la stessa varianza e media che trasla linearmente con $y$ (grafico del chunk "normale multivariata"). È la stessa struttura della speranza condizionata come proiezione in $L^2$: nel caso gaussiano la migliore stima è affine.

## Nei corsi
- **Prob e statistica** (triennale): slide di statistica sulla normale multivariata. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Distribuzioni lez1.pdf` (Normale Multivariata XXI-XXV); codice in `statistica/R/Distribuzioni Vers. 1.1.1.R` (chunk normale multivariata).
- **Modelli statistici** (magistrale): $\mathbf X_2\mid\mathbf X_1=\mathbf x_1\sim N\bigl(\boldsymbol\mu_2+\Sigma_{21}\Sigma_{11}^{-1}(\mathbf x_1-\boldsymbol\mu_1),\ \Sigma_{22}-\Sigma_{21}\Sigma_{11}^{-1}\Sigma_{12}\bigr)$ (libro, cap. 7, Teorema 7.13, dimostrato con $\mathbf Y=\mathbf X_2-\Sigma_{21}\Sigma_{11}^{-1}\mathbf X_1$ indipendente da $\mathbf X_1$); bivariato $Y\mid X=x\sim N(\mu_Y+\rho\frac{\sigma_Y}{\sigma_X}(x-\mu_X),(1-\rho^2)\sigma_Y^2)$ (Cor. 7.14). Esempio: $\mu_X=1$, $\mu_Y=2$, $\sigma_X=1$, $\sigma_Y=2$, $\rho=0.6$ danno $Y\mid X=2\sim N(3.2;\,1.6^2)$. Galton e la **regressione verso la media**: a $z$ deviazioni standard da $\mu_X$ corrisponde una previsione a $\rho z$ deviazioni standard da $\mu_Y$. La media condizionata è la miglior previsione in media quadratica e, per vettori normali, è lineare: retta di regressione stimata da `lm`. Serve a invertire i DAG gaussiani. Il libro corregge una soluzione del docente: la media condizionata di $S$ dato $(X=x,Y=y)$ in un esercizio del 30/10 è $x+(y-1)/2$, non $x+y/2$. Fonti: `Libri/Modelli statistici/capitoli/cap07.tex` (§7.6-7.8, pp. 117-121); `magistrale/Modelli statistici/251030 Svolgimento di esercizi sulla normale multivariata.pdf`.
- **Statistica computazionale** (magistrale): previsione di un processo gaussiano in un punto non osservato $x^*$. Dato $(\mathbf w,w(x^*))\mid\boldsymbol\theta\sim N\bigl(\mathbf 0,\bigl(\begin{smallmatrix}\Sigma_w&\Sigma_{w,w^*}'\\\Sigma_{w,w^*}&\tau^2\end{smallmatrix}\bigr)\bigr)$, "usando le regole per la distribuzione condizionata di una normale" $w(x^*)\mid\boldsymbol\theta,\mathbf w\sim N(\Sigma_{w,w^*}\Sigma_w^{-1}\mathbf w,\ \tau^2-\Sigma_{w,w^*}\Sigma_w^{-1}\Sigma_{w,w^*}')$, simulata per ogni campione MCMC $(\boldsymbol\theta^b,\mathbf w^b)$. Anche le full conditional dei modelli gaussiani latenti (AR, CAR) sono normali condizionate. Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 40-41).

## Prerequisiti
- [[Vettore gaussiano]]: indipendenza dei blocchi con covarianza nulla
- [[Distribuzione condizionata]]: legge di un blocco dato l'altro

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Rete bayesiana gaussiana]]: inversione delle catene gaussiane (Modelli statistici)
- [[Regressione lineare]]: la media condizionata della normale bivariata coincide con la retta di regressione (Modelli statistici)

## Collegati
- [[Speranza condizionata]]: $\mathbb E[\mathbf X_A|\mathbf X_B]$ è affine in $\mathbf X_B$
- [[Regressione con processo gaussiano]]: previsione del processo in un punto nuovo (Statistica computazionale)
