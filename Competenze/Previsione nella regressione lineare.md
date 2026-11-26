---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["prediction in linear regression", "intervallo di previsione", "prediction interval", "previsione del valore medio", "previsione di una nuova osservazione", "intervallo di confidenza per la media condizionata"]
tags: [competenza, area/statistica]
---

# Previsione nella regressione lineare

> Per una nuova covariata $x_o$ si prevede la media $\mu_o=\alpha+\beta x_o$ o il valore $y_o$; la seconda previsione ha in più la varianza dell'errore $\sigma^2$, e entrambe peggiorano allontanandosi da $\bar x$.

## Definizione / enunciato
Dato $y_o=\alpha+\beta x_o+\epsilon_o$ non osservato, con $\hat y_o=\hat\alpha+\hat\beta x_o$:
- **valore medio**: $\hat y_o$ stima $\mu_o=\alpha+\beta x_o$, non distorto, con
$$\operatorname{Var}(\hat y_o)=\sigma^2\Big(\frac1n+\frac{(x_o-\bar x)^2}{SS_x}\Big);$$
- **valore**: $y_o$ è normale con media $\alpha+\beta x_o$ e, poiché $\hat\alpha+\hat\beta x_o\perp\epsilon_o$,
$$V(y_o)=\sigma^2\Big(\frac1n+\frac{(x_o-\bar x)^2}{SS_x}+1\Big).$$

## Formule chiave
Intervalli (usuali, con $S^2$):
$$\Big[\hat y_o\pm t_{n-2,\alpha/2}\sqrt{S^2\Big(\frac1n+\frac{(x_o-\bar x)^2}{SS_x}\Big)}\Big]\ \text{per }\mu_o,\qquad\Big[\hat y_o\pm t_{n-2,\alpha/2}\sqrt{S^2\Big(1+\frac1n+\frac{(x_o-\bar x)^2}{SS_x}\Big)}\Big]\ \text{per }Y_o .$$
Multipla: $\hat\mu_o=\mathbf x_o\hat{\boldsymbol\beta}$, $\operatorname{Var}(\hat\mu_o)=\sigma^2\mathbf x_o(X'X)^{-1}\mathbf x_o'$; per il valore $\operatorname{Var}(\mathbf x_o\hat{\boldsymbol\beta}+\epsilon_o)=\sigma^2\mathbf x_o(X'X)^{-1}\mathbf x_o'+\sigma^2$.

## Intuizione
La retta stimata è più incerta lontano dal baricentro dei dati (termine $(x_o-\bar x)^2$); per un singolo valore futuro si aggiunge la variabilità propria dell'osservazione, che non si riduce con $n$.

## Come si usa
Esempio delle temperature: cosa aspettarsi l'anno dopo l'ultima osservazione. Le slide derivano le varianze con $\sigma^2$ noto e osservano che, con $\sigma^2$ ignoto, il calcolo esatto è più complesso; gli intervalli vengono comunque scritti con $S^2$ e quantili $t_{n-2}$.

## Nei corsi
- **Prob e statistica** (triennale): slide sulla regressione. Fonti: `triennale/ANNO 3/prob e statistica/statistica/regressione lez7.pdf` (R2 e previsione V-IX; Regressione Multivariata XVI-XVII).
- **Modelli statistici** (magistrale): in forma matriciale, IC per la media $\mathbf x_f'\hat{\boldsymbol\beta}\pm t_{\alpha/2}(n-p)S\sqrt{\mathbf x_f'(\mathbf X'\mathbf X)^{-1}\mathbf x_f}$ (libro, cap. 11, Prop. 11.11) e **intervallo di predizione** $\mathbf x_f'\hat{\boldsymbol\beta}\pm t_{\alpha/2}(n-p)S\sqrt{1+\mathbf x_f'(\mathbf X'\mathbf X)^{-1}\mathbf x_f}$, da $Y_f-\mathbf x_f'\hat{\boldsymbol\beta}\sim N(0,\sigma^2(1+\mathbf x_f'(\mathbf X'\mathbf X)^{-1}\mathbf x_f))$ (Prop. 11.12); in regressione semplice $\sqrt{1/n+(x_0-\bar x)^2/S_{xx}}$. La banda di predizione non si restringe a zero per $n\to\infty$; la banda per tutta la retta è quella di Working-Hotelling. Ore di studio e punteggio ($n=77$, $\hat y=49.972+3.029x$, $S=9.975$): per $x_0=5$ stima 65.12 e IC al 95% per la media $[62.83;\ 67.40]$. In R `predict(..., interval = "confidence"/"prediction")`. Fonti: `Libri/Modelli statistici/capitoli/cap11.tex` (§11.6-11.8, pp. 188-191); codice `magistrale/Modelli statistici/codici/251127 mixedeffect lm.R`.

## Prerequisiti
- [[Inferenza sui coefficienti di regressione]]: varianze e covarianza di $\hat\alpha,\hat\beta$
- [[Intervallo di confidenza]]: costruzione degli intervalli

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Regione di confidenza ellissoidale]]: banda simultanea di Scheffé per tutta la retta (Modelli statistici)

## Collegati
- [[Regressione lineare]]: modello da cui si prevede
