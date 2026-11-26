---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["Fisher information", "informazione attesa", "matrice di informazione di Fisher", "Fisher information matrix", "I_n(theta)", "score", "funzione punteggio"]
tags: [competenza, area/statistica]
---

# Informazione di Fisher

> $I_n(\theta)=\mathbb E\big[(\frac{d}{d\theta}\log f(\mathbf X|\theta))^2\big]$: quanta informazione su $\theta$ porta il campione; è il denominatore del limite di Cramér-Rao.

## Definizione / enunciato
Per un campione di congiunta $f(\mathbf X|\theta)$, $\theta$ scalare,
$$I_n(\theta)=\mathbb E_\theta\Big[\Big(\frac{d}{d\theta}\log f(\mathbf X|\theta)\Big)^2\Big].$$
Caso multidimensionale: $[I_n]_{ij}=\mathbb E\big[\frac{\partial}{\partial\theta_i}\log f(\mathbf X|\theta)\frac{\partial}{\partial\theta_j}\log f(\mathbf X|\theta)\big]$.

## Formule chiave
- Il punteggio ha media nulla: $\mathbb E\big[\frac{d}{d\theta}\log f(\mathbf X|\theta)\big]=0$ (si deriva $\mathbb E[1]$ sotto il segno di integrale); quindi $I_n=\operatorname{Var}\big(\frac{d}{d\theta}\log f\big)$.
- **i.i.d.**: $I_n(\theta)=n\,\mathbb E\big[(\frac{d}{d\theta}\log f(X|\theta))^2\big]=nI(\theta)$ (i termini misti si annullano per indipendenza).
- **Lemma** (se si può derivare due volte sotto il segno di integrale, vero per le leggi standard):
$$\mathbb E\Big[\Big(\frac{d}{d\theta}\log f(X|\theta)\Big)^2\Big]=-\mathbb E\Big[\frac{d^2}{d\theta^2}\log f(X|\theta)\Big];\qquad\text{in multivariata }I_n=-\mathbb E\Big[\frac{\partial^2}{\partial\boldsymbol\theta\partial\boldsymbol\theta^T}\log f\Big].$$

## Intuizione
Una log-verosimiglianza molto "appuntita" attorno al vero valore (curvatura grande) identifica bene $\theta$: tanta informazione, varianza degli stimatori potenzialmente piccola. Con $n$ dati indipendenti l'informazione si somma.

## Come si usa
Poisson: $\frac{d^2}{d\lambda^2}(-\lambda+X\log\lambda-\log X!)=-\frac X{\lambda^2}$, quindi $I_n=-n\mathbb E[-X/\lambda^2]=\frac n\lambda$. Regressione: $-\frac{\partial^2}{\partial\boldsymbol\beta^2}\log f(\mathbf y|\boldsymbol\beta)=\frac{X'X}{\sigma^2}$, quindi $I_n^{-1}=\sigma^2(X'X)^{-1}$.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali" e regressione multivariata. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Teorema di Cramer Rao VI-XIV); `statistica/regressione lez7.pdf` (Regressione Multivariata XIV-XV).

## Prerequisiti
- [[Funzione di verosimiglianza]]: derivata della log-verosimiglianza

## Porta a
- [[Disuguaglianza di Cramér-Rao]]: denominatore del limite
