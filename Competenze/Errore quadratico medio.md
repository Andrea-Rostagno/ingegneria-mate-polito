---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["mean squared error", "MSE", "decomposizione varianza-distorsione", "bias-variance decomposition", "miglior stimatore non distorto", "best unbiased estimator", "UMVUE"]
tags: [competenza, area/statistica]
---

# Errore quadratico medio

> $\mathrm{MSE}(W)=\mathbb E(W(\mathbf X)-\theta)^2=\operatorname{Var}(W)+\mathrm{Bias}^2$: misura la distanza media dello stimatore dal parametro e permette di confrontare stimatori, anche distorti.

## Definizione / enunciato
Per uno stimatore $W(\mathbf X)$ di $\theta$
$$\mathrm{MSE}(W)=\mathbb E\big(W(\mathbf X)-\theta\big)^2 .$$
**Miglior stimatore non distorto** (best unbiased estimator): $W^*$ con $\mathbb E(W^*)=\theta$ per ogni $\theta$ e $\operatorname{Var}(W^*)\le\operatorname{Var}(W)$ per ogni altro stimatore non distorto $W$.

## Formule chiave
$$\mathbb E(W-\theta)^2=\mathbb E(W-\mathbb EW)^2+(\mathbb EW-\theta)^2=\operatorname{Var}(W)+\mathrm{Bias}^2$$
(il doppio prodotto ha media nulla). Se $W$ è non distorto, $\mathrm{MSE}(W)=\operatorname{Var}(W)$. Nella classe $\mathcal C_\tau=\{W:\mathbb E(W)=\tau(\theta)\}$ di stimatori con la stessa distorsione il confronto si fa solo sulle varianze: $\mathrm{MSE}(W_1)-\mathrm{MSE}(W_2)=\operatorname{Var}(W_1)-\operatorname{Var}(W_2)$.

## Intuizione
Si potrebbe usare $\mathbb E|W-\theta|$, ma l'MSE è matematicamente comodo e si scompone in un termine di distorsione e uno di variabilità. Un piccolo bias può valere la pena se riduce molto la varianza: $\hat\sigma^2$ (distorto) ha MSE minore di $S^2$ (non distorto).

## Come si usa
Per sapere se uno stimatore non distorto si può ancora migliorare serve un limite inferiore alla varianza: la disuguaglianza di Cramér-Rao. Se uno stimatore la raggiunge è il migliore nella sua classe. Una combinazione $aW_1+(1-a)W_2$ di due stimatori non distorti è ancora non distorta.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Errore quadratico medio (MSE) I-III).

## Prerequisiti
- [[Stimatore puntuale]]: distorsione
- [[Varianza]]: termine di variabilità

## Porta a
- [[Disuguaglianza di Cramér-Rao]]: limite inferiore della varianza nella classe $\mathcal C_\tau$
