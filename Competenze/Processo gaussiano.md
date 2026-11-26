---
tipo: competenza
area: probabilita
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["GP", "Gaussian process", "processo gaussiano spaziale", "campo aleatorio gaussiano", "Gaussian random field", "GP(m, C)", "funzione media e funzione di covarianza"]
tags: [competenza, area/probabilita]
---

# Processo gaussiano

> Processo stocastico, indicizzato da tempo, spazio o covariate, le cui distribuzioni finito-dimensionali sono tutte gaussiane: è determinato da una funzione media e da una funzione di covarianza definita positiva.

## Definizione / enunciato
Un processo $\{X(\mathbf s):\mathbf s\in S\}$, con $S\subseteq\mathbb R^d$ (non richiesto in generale), è **gaussiano** se tutte le sue distribuzioni finito-dimensionali (di ogni insieme di $n<\infty$ osservazioni) sono gaussiane. Lo si specifica con la funzione media $m(\cdot)$ e la funzione di covarianza $C(\cdot,\cdot)$:
$$X(\mathbf s)\sim GP(m(\cdot),C(\cdot,\cdot)).$$
Osservati $n$ punti $\mathbf s_1,\dots,\mathbf s_n$ con $x_j=x(\mathbf s_j)$:
$$\mathbf x=(x_1,\dots,x_n)'\sim N(\boldsymbol\mu,\Sigma),\qquad[\boldsymbol\mu]_j=m(\mathbf s_j),\quad[\Sigma]_{jk}=C(\mathbf s_j,\mathbf s_k).$$

## Formule chiave
- Se è stazionario debole di ordine 2 è stazionario forte, perché $E(X(\mathbf s_j))=E(X(\mathbf s_j+\mathbf h))$ e $\mathrm{Cov}(X(\mathbf s_j),X(\mathbf s_k))=\mathrm{Cov}(X(\mathbf s_j+\mathbf h),X(\mathbf s_k+\mathbf h))$.
- In generale si pone $m(\mathbf s)=0$ (la media entra in un altro livello del modello); $C$ deve essere una funzione **definita positiva**, e spesso si specifica la correlazione.
- Densità di $n$ osservazioni (media nulla): $f(\mathbf x)=(2\pi)^{-n/2}|\Sigma|^{-1/2}\exp(-\mathbf x'\Sigma^{-1}\mathbf x/2)$.

## Intuizione
È una distribuzione su funzioni: invece di assumere che $g(x)$ sia lineare si dice solo che punti vicini hanno valori molto correlati. Il prezzo è computazionale: invertire $\Sigma$ ($n\times n$) è "molto complesso", il problema principale dei processi spaziali.

## Come si usa
Come livello latente in un modello gerarchico, $y_i\mid w_i\sim N(\mu+w_i,\sigma^2)$, $\mathbf w\sim GP(0,C)$, oppure dentro un log-link per conteggi. Le simulazioni delle slide mostrano processi temporali e spaziali con covarianza esponenziale e Cauchy per decay $\lambda=3,15,30$ (correlazione che si smorza più in fretta al crescere di $\lambda$).

## Nei corsi
- **Statistica computazionale** (magistrale): "Gaussian Processes" e "Processi stocastici". Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 13-17, 23-25); `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 7, 9); notebook `magistrale/Statistica computazionale/processi_gaussiani_GP_R.ipynb` (simulazioni in R).

## Prerequisiti
- [[Vettore gaussiano]]: legge delle distribuzioni finito-dimensionali
- [[Stazionarietà di un processo stocastico]]: forte e debole coincidono nel caso gaussiano

## Porta a
- [[Funzioni di covarianza stazionarie]]: le scelte di $C$
- [[Regressione con processo gaussiano]]: GP come livello latente
- [[Nearest neighbour Gaussian process]]: approssimazione per molti punti

## Collegati
- [[Caratterizzazione gaussiana del moto browniano]]: esempio di GP con covarianza $\min(s,t)$
- [[Modello ARMA]]: a tempi discreti un GP stazionario è un MA($\infty$) (Wold)
- [[Matrice di covarianza]]: $\Sigma$ deve essere definita positiva
- [[Kernel definito positivo]]: $C(\cdot,\cdot)$ deve essere una funzione definita positiva
