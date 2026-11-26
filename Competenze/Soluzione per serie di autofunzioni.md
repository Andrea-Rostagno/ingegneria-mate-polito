---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["eigenfunction expansion", "separazione delle variabili", "separation of variables", "soluzione per serie", "sviluppo in serie di autofunzioni", "formula di rappresentazione per serie"]
tags: [competenza, area/analisi]
---

# Soluzione per serie di autofunzioni

> Su un dominio limitato si cerca $u(x,t)=\sum_k\hat u_k(t)\varphi_k(x)$ nella base delle autofunzioni del laplaciano: la PDE si spezza in un'ODE per ogni coefficiente.

## Definizione / enunciato
Con $(\lambda_k,\varphi_k)$ autocoppie di $-\Delta$ con le condizioni al bordo omogenee del problema, si pone
$$u(x,t)=\sum_{k}\hat u_k(t)\varphi_k(x)$$
($\varphi_k$ solo spaziali, $\hat u_k$ solo temporali). Sostituendo, $\Delta\varphi_k=-\lambda_k\varphi_k$ e l'indipendenza delle $\varphi_k$ danno un'ODE per ciascun $\hat u_k$. I dati iniziali si proiettano: $\hat u_k(0)=\hat u_{k,0}$, con $u_0=\sum\hat u_{k,0}\varphi_k$.

## Formule chiave
**Onde, Dirichlet omogeneo** (L24-L25): $\hat u_k''+\lambda_kc^2\hat u_k=0$, $\hat u_k(0)=\hat u_{k,0}$, $\hat u_k'(0)=\hat u_{k,1}$:
$$u(x,t)=\sum_k\Big[\tfrac12\Big(\hat u_{0,k}-i\tfrac{\hat u_{1,k}}{c\sqrt{\lambda_k}}\Big)e^{ic\sqrt{\lambda_k}t}+\tfrac12\Big(\hat u_{0,k}+i\tfrac{\hat u_{1,k}}{c\sqrt{\lambda_k}}\Big)e^{-ic\sqrt{\lambda_k}t}\Big]\varphi_k(x).$$
**Calore, Neumann omogeneo** (L28): $\hat u_k'+D\lambda_k\hat u_k=0\Rightarrow\hat u_k(t)=\hat u_{k,0}e^{-D\lambda_kt}$, $u=\sum_k\hat u_{k,0}e^{-D\lambda_kt}\varphi_k$.
Coefficienti (L25 p. 4): $\hat u_{0,i}=\frac{(u_0,\varphi_i)}{\|\varphi_i\|^2_{L^2(\Omega)}}$.

## Intuizione
Ogni modo $\varphi_k$ evolve da solo: per le onde oscilla con pulsazione $c\sqrt{\lambda_k}$, per il calore decade come $e^{-D\lambda_kt}$, tanto più in fretta quanto più è oscillante.

## Come si usa
- Corda con estremi fissi, ferma all'inizio ($u_1\equiv0$): $\hat u_k(t)=\hat u_{0,k}\cos(k\pi ct)$; con $u_0=\sin(\pi x)$ si ha $u=\cos(\pi ct)\sin(\pi x)$ (L25 p. 3).
- Calore su $(0,1)$ con Neumann e $u_0=\cos(\pi x)+1$: $\hat u_{0,0}=\hat u_{1,0}=1$, $u=1+e^{-D\pi^2t}\cos(\pi x)$, e $\|u(\cdot,t)-1\|_\infty\le e^{-D\pi^2t}\to0$ (L29 pp. 4-5).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/24 - Lezione 05_12_23.pdf` (pp. 1-4); `triennale/ANNO 3/eq fisica matematica/25 - Lezione 06_12_23.pdf` (pp. 1-4); `triennale/ANNO 3/eq fisica matematica/28 - Lezione 15_12_23.pdf` (pp. 3-6); `triennale/ANNO 3/eq fisica matematica/29 - Lezione 19_12_23.pdf` (pp. 2-5).

## Prerequisiti
- [[Autovalori e autofunzioni del laplaciano]]: base dello sviluppo
- [[Equazione delle onde]]: primo problema risolto per serie
- [[Equazione del calore]]: secondo problema risolto per serie
- [[Spazio di Hilbert]]: coefficienti come proiezioni ortogonali in L²

## Porta a
- [[Corda vibrante]]: soluzione della corda con estremi bloccati
- [[Equazione del calore su un dominio limitato]]: comportamento asintotico dalla serie

## Collegati
- [[Serie di Fourier]]: in 1D lo sviluppo è una serie trigonometrica
