---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["stationary covariance functions", "funzione di covarianza isotropa", "covarianza esponenziale", "covarianza di Matérn", "Matérn covariance", "covarianza di Cauchy", "covarianza sferica", "covarianza di Gneiting", "range e decay", "separabilità spazio-tempo"]
tags: [competenza, area/statistica]
---

# Funzioni di covarianza stazionarie

> Le famiglie classiche di funzioni di covarianza che dipendono solo dalla distanza $h=\|\mathbf s_j-\mathbf s_k\|$, valide (definite positive) su spazi euclidei: sferica, esponenziale, Matérn, Cauchy e altre.

## Definizione / enunciato
In uno spazio con una distanza scalare (tempo, spazio euclideo, una covariata) e sotto stazionarietà, con $h_{jk}=\|\mathbf s_j-\mathbf s_k\|\in\mathbb R^+$ si scrive $C(\mathbf s_i,\mathbf s_k)\equiv C(h_{jk})$. Scelte classiche:
- **Spherical**: $\sigma^2\bigl(1-\frac{3h}{2\phi}+\frac{h^3}{2\phi^3}\bigr)$ se $0<h\le\phi$, $0$ se $h>\phi$;
- **Powered exponential**: $\sigma^2\exp(-|h/\phi|^\kappa)$, $0<\kappa\le2$;
- **Exponential**: $\sigma^2\exp(-h/\phi)\equiv\sigma^2\exp(-h\phi)$ (con $\phi$ inteso come decay nella seconda scrittura);
- **Rational quadratic**: $\sigma^2\bigl(1-\frac{h^2}{\phi^2+h^2}\bigr)$;
- **Matérn**: $\frac{\sigma^2}{2^{\kappa-1}\Gamma(\kappa)}(h/\phi)^\kappa K_\kappa(h/\phi)$, $\kappa>0$;
- **Cauchy**: $\sigma^2(1+(h/\phi)^2)^{-k}$, $k\in[0.5,2]$.

## Formule chiave
- $\sigma^2$ è la varianza; con $\sigma^2=1$ sono funzioni di correlazione. Si preferisce lavorare con $\lambda=1/\phi$ (**decay**), mentre $\phi$ è il **range**.
- Spazio-tempo $\mathbf s=(\mathbf a,t)$: $C(\mathbf s_j,\mathbf s_k)=aC_s(\|\mathbf a_j-\mathbf a_k\|)+bC_t(|t_j-t_k|)$ (GP p. 20), valida perché somma di definite positive; con $W(t)\sim GP(0,C_t)$, $Z(\mathbf a)\sim GP(0,C_s)$ il processo $X(\mathbf s)=\sqrt aW(t)+\sqrt bZ(\mathbf a)$ ha covarianza $aC_t(|t_j-t_k|)+bC_s(\|\mathbf a_j-\mathbf a_k\|)$ (GP p. 21: i coefficienti risultano scambiati rispetto a p. 20, così nelle slide); con coordinate ripetute si usa $a(C_s+bC_t)+dC_sC_t$, definita positiva se $\mathbf s_j\ne\mathbf s_k$ per $j\ne k$.
- **Gneiting** (non separabile): $C(\mathbf s_j,\mathbf s_k)=\frac{\sigma^2}{(\phi_t|t_j-t_k|^{2\alpha}+1)^\tau}\exp\Bigl(-\frac{\phi_s\|\mathbf a_j-\mathbf a_k\|^{2\gamma}}{(\phi_t|t_j-t_k|^{2\alpha}+1)^{\eta\gamma}}\Bigr)$, $\phi_t,\phi_s>0$, $\alpha,\gamma\in(0,1]$, $\eta\in[0,1]$, $\tau>1$.

## Intuizione
Più due punti sono vicini, più la correlazione è alta; il range regola la distanza oltre la quale i valori sono quasi indipendenti (processi più lisci per range grandi). Usare una sola distanza per spazio e tempo assume che 1 unità di spazio valga 1 di tempo, "un'assunzione forte"; le forme somma o prodotto assumono separabilità, non sempre ragionevole.

## Come si usa
Si sceglie la famiglia e si stimano (o si fissano, per il costo computazionale) $\sigma^2$ e $\phi$, confrontando i modelli col WAIC. Queste funzioni sono valide su spazi euclidei, non sulla sfera.

## Nei corsi
- **Statistica computazionale** (magistrale): tabella delle covarianze e simulazioni. Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 17-25).

## Prerequisiti
- [[Processo gaussiano]]: $C$ ne determina la legge
- [[Kernel definito positivo]]: requisito di validità

## Porta a
- [[Regressione con processo gaussiano]]: covarianza del livello latente

## Collegati
- [[Matrice di covarianza]]: $[\Sigma]_{jk}=C(h_{jk})$
- [[Distribuzione Gamma]]: la funzione $\Gamma(\kappa)$ nella Matérn
