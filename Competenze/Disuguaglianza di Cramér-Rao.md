---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["Cramér-Rao inequality", "Cramer-Rao lower bound", "limite di Cramér-Rao", "teorema di Cramer Rao", "CRLB", "stimatore efficiente", "efficient estimator"]
tags: [competenza, area/statistica]
---

# Disuguaglianza di Cramér-Rao

> Limite inferiore alla varianza di uno stimatore con distorsione assegnata: $\operatorname{Var}(W)\ge\big(\frac{d}{d\theta}\mathbb E W\big)^2/I_n(\theta)$. Uno stimatore non distorto che lo raggiunge è il migliore.

## Definizione / enunciato
**Teorema.** $X_1,\dots,X_n$ con pmf/pdf $f(\mathbf x|\theta)$, $\theta$ univariato; $W(\mathbf X)$ stimatore con $\operatorname{Var}(W)<\infty$ e tale che si possano scambiare derivata e integrale (o somma):
$\frac{d}{d\theta}\mathbb E(W)=\int\frac{\partial}{\partial\theta}[W(\mathbf x)f(\mathbf x|\theta)]d\mathbf x$. Allora
$$\operatorname{Var}(W(\mathbf X))\ge\frac{\big(\frac{d}{d\theta}\mathbb E(W(\mathbf X))\big)^2}{\mathbb E\Big(\big(\frac{d}{d\theta}\log f(\mathbf X|\theta)\big)^2\Big)} .$$

## Formule chiave
- Dimostrazione: $\operatorname{Var}(Z)\ge\frac{\operatorname{Cov}^2(Z,Y)}{\operatorname{Var}(Y)}$ con $Z=W$, $Y=\frac{d}{d\theta}\log f$; $\mathbb E Y=0$ e $\operatorname{Cov}(W,Y)=\frac{d}{d\theta}\mathbb E W$.
- **i.i.d.**: $\operatorname{Var}(W)\ge\frac{(\frac{d}{d\theta}\mathbb E W)^2}{n\mathbb E((\frac{d}{d\theta}\log f(X|\theta))^2)}$; non distorto multivariato: $\operatorname{Var}(W)\ge I_n^{-1}$.
- **Raggiungimento**: $W$ non distorto raggiunge il limite se e solo se $a(\theta)(W(\mathbf x)-\theta)=\frac{\partial}{\partial\theta}\log L(\theta|\mathbf x)$ per qualche $a(\theta)$; il miglior stimatore non distorto, se esiste, è unico.
- L'ipotesi di scambio vale se il supporto $\{x:f(x)>0\}$ non dipende da $\theta$ (falso per l'uniforme).

## Intuizione
Il numeratore dipende solo dalla distorsione, il denominatore solo dal modello: nessuno stimatore può essere più preciso di quanto l'informazione nei dati consenta.

## Come si usa
Poisson, stimatore con $\mathbb E(W)=\lambda/n$: numeratore $\frac1{n^2}$, denominatore $\frac n\lambda$, limite $\frac\lambda{n^3}$. Con $W=\bar X$ ($\mathbb E\bar X=\lambda$): limite $\frac\lambda n=\operatorname{Var}(\bar X)$, quindi $\bar X$ è il miglior stimatore non distorto di $\lambda$. Regressione: $\hat{\boldsymbol\beta}$ ha varianza $\sigma^2(X'X)^{-1}=I_n^{-1}$, raggiunge il limite.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali" e inizio delle slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Teorema di Cramer Rao I-XVI); `statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Introduzione I); `statistica/regressione lez7.pdf` (Regressione Multivariata XIV-XV).

## Prerequisiti
- [[Errore quadratico medio]]: confronto fra stimatori con la stessa distorsione
- [[Informazione di Fisher]]: denominatore
- [[Coefficiente di correlazione]]: $\operatorname{Cov}^2\le\operatorname{Var}\cdot\operatorname{Var}$

## Porta a
- [[Inferenza sui coefficienti di regressione]]: $\hat{\boldsymbol\beta}$ efficiente

## Collegati
- [[Teorema di Rao-Blackwell]]: altro modo di migliorare stimatori non distorti
- [[Stimatore di massima verosimiglianza]]: asintoticamente efficiente
