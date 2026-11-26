---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["delta method", "successione asintoticamente normale", "asymptotically normal sequence", "stabilizzazione della varianza", "variance stabilizing transformation", "metodo delta del secondo ordine"]
tags: [competenza, area/probabilita]
---

# Metodo delta

> Se $\sqrt n(X_n-\theta)$ è asintoticamente normale, lo è anche $\sqrt n(g(X_n)-g(\theta))$ con varianza moltiplicata per $g'(\theta)^2$: linearizzazione di $g$ attorno a $\theta$.

## Definizione / enunciato
$(X_n)$ è **asintoticamente normale** se $\sqrt n(X_n-\theta)\xrightarrow{\mathcal L}\mathcal N(0,\sigma^2)$ con $\sigma^2>0$, $\theta\in\mathbb R$ (per il TLC lo è $\bar X_n$).
**Teorema (versione reale).** Se $(X_n)$ è asintoticamente normale e $g:\mathbb R\to\mathbb R$ misurabile con $g'(\theta)\ne0$, allora
$$\sqrt n\big(g(X_n)-g(\theta)\big)\xrightarrow{\mathcal L}\mathcal N\big(0,\sigma^2g'(\theta)^2\big).$$

## Formule chiave
- **Vettoriale**: $\sqrt n(\mathbf X_n-\boldsymbol\theta)\xrightarrow{\mathcal L}\mathcal N_k(\mathbf 0,C)$, $g:\mathbb R^k\to\mathbb R$ di classe $C^1$ vicino a $\boldsymbol\theta$ con $\nabla g(\boldsymbol\theta)^TC\nabla g(\boldsymbol\theta)>0$: $\sqrt n(g(\mathbf X_n)-g(\boldsymbol\theta))\xrightarrow{\mathcal L}\mathcal N(0,\nabla g(\boldsymbol\theta)^TC\nabla g(\boldsymbol\theta))$.
- **Secondo ordine**: se $g'(\theta)=0$, $g''(\theta)\ne0$: $n(g(X_n)-g(\theta))\xrightarrow{\mathcal L}\frac12g''(\theta)\sigma^2\chi^2(1)$; se $g''(\theta)>0$ il limite è $\Gamma\big(\frac12,\frac1{g''(\theta)\sigma^2}\big)$ (perché $cX\sim\Gamma(\alpha,\frac\lambda c)$ se $X\sim\Gamma(\alpha,\lambda)$).

## Intuizione
Sviluppo di Taylor: $g(X_n)=g(\theta)+(X_n-\theta)g'(\theta)+(X_n-\theta)w(X_n-\theta)$ con $w\to0$; il resto sparisce in probabilità e Slutsky chiude.

## Come si usa
**Stabilizzazione della varianza** (lezione 19): $X_n$ i.i.d. $\mathcal P(\lambda)$, $\sqrt n(\bar X_n-\lambda)\xrightarrow{\mathcal L}\mathcal N(0,\lambda)$. Si cerca $g$ con $\sigma^2(\theta)g'(\theta)^2=k$ costante, cioè $g(\theta)\propto\int\frac{d\theta}{\sigma(\theta)}$: con $\sigma(\lambda)=\sqrt\lambda$ si trova $g(x)=\sqrt x$ e $\sqrt n(\sqrt{\bar X_n}-\sqrt\lambda)\xrightarrow{\mathcal L}\mathcal N(0,\frac14)$, varianza che non dipende più da $\lambda$.

## Nei corsi
- **Prob e statistica** (triennale): fine della lezione 18 e lezione 19. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione18(16-11-2023).pdf` (p. 13); `2023Lezione19(17-11-2023).pdf` (pp. 1-7).
- **Modelli statistici** (magistrale): se $\sqrt n(X_n-\theta)\to N(0,\sigma^2)$ e $g'(\theta)\ne0$, $\sqrt n(g(X_n)-g(\theta))\to N(0,g'(\theta)^2\sigma^2)$ (libro, cap. 16, Teorema 16.5). Applicato al logit di una proporzione binomiale e poi alla differenza di due logit dà la varianza asintotica del log odds ratio, stimata con $\frac1{N_{11}}+\frac1{N_{12}}+\frac1{N_{21}}+\frac1{N_{22}}$ (Prop. 16.6). Fonti: `Libri/Modelli statistici/capitoli/cap16.tex` (§16.2, pp. 268-269); `magistrale/Modelli statistici/251217 Due variabili categoriche.pdf`.

## Prerequisiti
- [[Teorema del limite centrale]]: normalità asintotica di $\bar X_n$
- [[Teorema di Slutsky]]: il resto di Taylor tende a 0 in probabilità

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Odds ratio]]: intervallo di confidenza per il log odds ratio (Modelli statistici)

## Collegati
- [[Stimatore di massima verosimiglianza]]: anche l'MLE è asintoticamente normale
- [[Distribuzione chi-quadro]]: limite del metodo delta del secondo ordine
