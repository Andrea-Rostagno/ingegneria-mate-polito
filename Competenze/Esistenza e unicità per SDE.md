---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [existence and uniqueness for SDEs, teorema di esistenza e unicità per equazioni stocastiche, condizione di Lipschitz globale, crescita lineare, linear growth condition, Yamada-Watanabe]
tags: [competenza, area/probabilita]
---

# Esistenza e unicità per SDE

> Se drift e diffusione sono globalmente lipschitziani e crescono al più linearmente, la SDE ha un'unica soluzione forte, di quadrato integrabile.

## Definizione / enunciato
**Teorema** (teo. c14-esistenza-unicita): equazione in $\mathbb R^m$, $dX_t=b(t,X_t)dt+\sigma(t,X_t)d\mathbf W_t$, $X_0=x$, con $\mathbf W$ browniano $d$-dimensionale, $b:[0,T]\times\mathbb R^m\to\mathbb R^m$, $\sigma:[0,T]\times\mathbb R^m\to\mathbb R^{m\times d}$ misurabili. Se esistono $L,M>0$ con
1. (Lipschitz globale) $\|b(t,x)-b(t,y)\|+\|\sigma(t,x)-\sigma(t,y)\|\le L\|x-y\|$,
2. (crescita lineare) $\|b(t,x)\|^2+\|\sigma(t,x)\|^2\le M(1+\|x\|^2)$,

($\|\sigma\|^2=\sum_{ij}\sigma_{ij}^2$), allora c'è unicità per traiettorie, esiste una soluzione forte, e ogni soluzione sta in $M^2([0,T])$ (anzi $\mathbb E[\sup_{t\le T}\|X_t\|^2]<\infty$).

## Formule chiave
Controesempi deterministici ($\sigma=0$): $dX=3X^{2/3}dt$, $X_0=0$ ha le soluzioni $0$ e $t^3$ (manca Lipschitz in 0); $dX=X^2dt$, $X_0=1$ dà $1/(1-t)$, che esplode in $t=1$ (manca la crescita lineare).

## Intuizione
È il teorema di Cauchy-Lipschitz con il rumore: Lipschitz dà l'unicità, la crescita lineare impedisce l'esplosione. Le ipotesi sono **sufficienti**, non necessarie, e Lipschitz deve essere globale.

## Come si usa
Verifica per i modelli del corso (es. c14-verifica-ipotesi): GBM ($b=\mu x$, $\sigma=\sigma x$) con $L=|\mu|+\sigma$, $M=\mu^2+\sigma^2$; OU con $L=\theta$, $M=\max(2\theta^2\mu^2+\sigma^2,2\theta^2)$; il CIR ($\sigma\sqrt x$) non è lipschitziano in 0 e il teorema non si applica: esistenza e unicità valgono per il risultato di Yamada-Watanabe (condizione hölderiana di esponente 1/2).

## Nei corsi
- **Financial engineering** (magistrale): cap. 14 §Soluzioni forti e deboli; esistenza e unicità (enunciato). Fonti: `Libri/Financial engineering/capitoli/cap14.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 07 - analisi stocastica - 22 mag 26.pdf`.

## Prerequisiti
- [[Equazione differenziale stocastica]]: oggetto del teorema
- [[Funzione lipschitziana tra spazi metrici]]: ipotesi di Lipschitz

## Porta a
- [[SDE lineari]]: caso con soluzione esplicita
- [[Modello CIR]]: caso fuori dalle ipotesi

## Collegati
- [[Teorema di esistenza e unicità locale]]: analogo per le ODE
- [[Moto browniano geometrico]]: soddisfa le ipotesi
