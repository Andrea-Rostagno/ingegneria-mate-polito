---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: [regression evaluation metrics, evaluating regression, MAE, mean absolute error, errore medio assoluto, RSE, residual standard error, errore standard dei residui, R2 adjusted, R quadro corretto, FVU, fraction of variance unexplained]
tags: [competenza, area/data-ml]
---

# Metriche di valutazione della regressione

> Misure che confrontano i valori reali $y_i$ con le predizioni $\hat y_i$ di un modello di regressione: MAE, MSE, RSE, $R^2$ e $R^2$ corretto.

## Definizione / enunciato
La valutazione confronta il valore reale (ground truth) $y_i$ con il valore predetto $\hat y_i$ su $n$ campioni. MAE, MSE e RSE sono errori (più bassi è meglio); $R^2$ e $R^2$ corretto misurano la bontà di adattamento.

## Formule chiave
$$ MAE = \frac1n\sum_i |y_i-\hat y_i| \qquad MSE = \frac1n\sum_i (y_i-\hat y_i)^2 $$
$$ RSE = \sqrt{\frac{1}{n-2}RSS} = \sqrt{\frac{1}{n-2}\sum_{i=1}^n (y_i-\hat y_i)^2} $$
$$ R^2 = \frac{TSS-RSS}{TSS} = 1-\frac{RSS}{TSS} = 1-FVU = 1-\frac{MSE}{\sigma^2},\qquad TSS=\sum_i (y_i-\bar y)^2 $$
$$ \bar R^2 = 1-(1-R^2)\frac{n-1}{n-p-1} $$
con $p$ numero di variabili esplicative e $n$ numero di campioni.

## Intuizione
MAE è la distanza verticale media tra reale e predetto; MSE ne fa la media dei quadrati e quindi penalizza meno gli errori vicini a 0 e di più quelli grandi. Entrambi dipendono dal dominio dei dati, quindi non sono confrontabili fra problemi diversi. $R^2$ è normalizzato: la frazione di varianza di $y$ spiegata dal modello; FVU è il rapporto tra la varianza degli errori e la varianza totale.

## Come si usa
- $R^2=1$: relazione lineare perfetta; vicino a 1: buone predizioni; $0<R^2\ll1$: relazione debole; $R^2=0$: $y$ non dipende da $x$.
- Nella regressione multipla $R^2$ non diminuisce mai aggiungendo predittori, anche inutili: per confrontare modelli con numero diverso di variabili si usa $\bar R^2$, che cresce solo se il nuovo termine migliora davvero il modello.

## Nei corsi
- **Business intelligence per big data** (magistrale): sezione "Evaluating regression". Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 45-52; formule lette sulle pagine renderizzate 47, 48, 50, 52).
- **Data science lab** (magistrale): errore quadratico per punto $(y_i-\hat y_i)^2=\varepsilon_i^2$ (sempre positivo, "stira" l'errore: grandi errori diventano più grandi, piccoli più piccoli); $MSE=\frac1n\sum_i(y_i-\hat y_i)^2$, talvolta non normalizzato (SSE); $RMSE=\sqrt{MSE}$, nella stessa unità di misura della variabile dipendente; $MAE=\frac1n\sum_i|y_i-\hat y_i|$, che penalizza di più gli errori "piccoli" rispetto all'MSE; $R^2=1-MSE/\sigma^2$. In scikit-learn `mean_absolute_error`, `mean_squared_error`, `r2_score` e `cross_val_score(reg, X, y, cv=5, scoring='r2')` (o `'neg_mean_squared_error'`). Fonti: `magistrale/Data science lab/slide testo/10-DMRegression.pdf` (p. 6, 13-14); `slide py/8-ScikitLearn-Regression.pdf` (p. 3-4).

## Prerequisiti
- [[Regressione lineare]]: RSS e residui sono definiti dal modello stimato

## Porta a
- [[Regressione polinomiale]]: scelta del grado confrontando gli errori
- [[Previsione di serie storiche]]: valutazione delle previsioni numeriche

## Collegati
- [[Coefficiente di determinazione]]: $R^2$ come scomposizione della varianza
- [[Metriche di valutazione della classificazione]]: analogo per target categorici
- [[Errore quadratico medio]]: stessa forma, ma riferita a uno stimatore e non alle predizioni
- [[Support vector regression]]: modello da valutare con queste metriche
