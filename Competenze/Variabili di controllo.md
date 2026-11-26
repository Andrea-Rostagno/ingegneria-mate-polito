---
tipo: competenza
area: numerica
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["control variates", "control variate", "variabile di controllo", "stimatore controllato", "controlled estimator", "metodo delle variabili di controllo"]
tags: [competenza, area/numerica]
---

# Variabili di controllo

> Si corregge lo stimatore Monte Carlo di $\theta=\mathbb E[X]$ con l'errore osservato su una variabile $Y$ correlata di media nota $\nu$: più forte la correlazione, più si riduce la varianza.

## Definizione / enunciato
Stimatore controllato:
$$X_C=X+c\,(Y-\nu),$$
con $c$ da scegliere. Se nella simulazione $\hat{\mathbb E}[Y]>\nu$, la stima di $\mathbb E[X]$ va corretta in su o in giù secondo il segno della correlazione fra $X$ e $Y$.

## Formule chiave
$$\mathbb E[X_C]=\theta,\qquad \mathrm{Var}(X_C)=\mathrm{Var}(X)+c^2\mathrm{Var}(Y)+2c\,\mathrm{Cov}(X,Y),$$
minimizzata da
$$c^*=-\frac{\mathrm{Cov}(X,Y)}{\mathrm{Var}(Y)},\qquad \frac{\mathrm{Var}(X_C^*)}{\mathrm{Var}(X)}=1-\rho_{XY}^2 .$$

## Intuizione
La variabile di controllo porta nella simulazione una conoscenza analitica: la parte di rumore di $X$ spiegata linearmente da $Y$ viene sottratta. In pratica $c^*$ si stima con **repliche pilota**, che vanno poi scartate: riusarle per stimare $\theta$ introdurrebbe distorsione, perché $c^*$ diventerebbe una variabile aleatoria dipendente da $X$.

## Come si usa
Opzione asiatica a media aritmetica, payoff $\max\{\frac1N\sum_{i=1}^NS(t_i)-K,0\}$, senza formula chiusa. Candidati come controllo:
- somma dei prezzi $Y=\sum_{i=0}^NS(t_i)$, con $\mathbb E[Y]=S(0)\frac{1-e^{r(N+1)\delta t}}{1-e^{r\delta t}}$ sotto la misura neutrale al rischio;
- la call vanilla (dipende solo dal prezzo finale, meno utile);
- la **asiatica a media geometrica**, prezzata in forma chiusa perché il prodotto di lognormali è lognormale.

Risultati delle slide ($S_0=50$, $K=55$, $r=0.05$, $\sigma=0.4$, $T=1$, 12 date, 9000 repliche più 1000 pilota): Monte Carlo semplice 3.6276 con intervallo $(3.4814, 3.7738)$, controllo con la somma 3.4694 $(3.3907, 3.5480)$, controllo geometrico 3.4452 $(3.4356, 3.4549)$. Un controllo che incorpora conoscenza sofisticata vince nettamente.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Control variates" e prezzo dell'asiatica aritmetica. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 19-30).

## Prerequisiti
- [[Metodo Monte Carlo]]: lo stimatore di partenza
- [[Covarianza]]: il coefficiente ottimo dipende da $\mathrm{Cov}(X,Y)$

## Porta a
- [[Opzione asiatica]]: caso d'uso con controllo geometrico

## Collegati
- [[Campionamento antitetico]]: tecnica più semplice, senza conoscenza del modello
- [[Regressione lineare]]: $c^*$ è il coefficiente di regressione di $X$ su $Y$ cambiato di segno
- [[Pricing di opzioni con Monte Carlo]]: la vanilla come controllo di opzioni senza formula
