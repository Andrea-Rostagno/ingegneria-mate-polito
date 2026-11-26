---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici, Business intelligence per big data, Data science lab]
livello: [triennale, magistrale]
aliases: ["coefficient of determination", "R2", "R^2", "R-quadro", "R-squared", "scomposizione della devianza", "SSy = SSr + SSreg", "somma dei quadrati dei residui", "residual sum of squares"]
tags: [competenza, area/statistica]
---

# Coefficiente di determinazione

> $R^2=1-\frac{SS_r}{SS_y}=\frac{SS_{reg}}{SS_y}$: frazione della variabilità totale delle $y$ spiegata dalla regressione, fra 0 (modello inutile) e 1 (modello perfetto).

## Definizione / enunciato
Con $\hat y_i$ valori stimati:
$$SS_y=\sum_{i=1}^n(y_i-\bar y)^2,\qquad SS_r=\sum_{i=1}^n(y_i-\hat y_i)^2,\qquad SS_{reg}=\sum_{i=1}^n(\hat y_i-\bar y)^2,$$
$$R^2=1-\frac{SS_r}{SS_y}=\frac{SS_{reg}}{SS_y}.$$

## Formule chiave
**Scomposizione** $SS_y=SS_r+SS_{reg}$: sviluppando $(y_i-\hat y_i+\hat y_i-\bar y)^2$ il doppio prodotto vale $\hat\beta(SS_{xy}-\hat\beta SS_x)=0$, perché $\hat y_i-\bar y=\hat\beta(x_i-\bar x)$ e $\hat\beta=SS_{xy}/SS_x$. Nella regressione multipla la stessa scomposizione vale (dimostrazione complessa, non svolta) e $R^2=\frac{\sum(\hat y_i-\bar y)^2}{\sum(y_i-\bar y)^2}$ con $\hat y_i=\mathbf x_i\hat{\boldsymbol\beta}$.

## Intuizione
$SS_r$ da sola dipende dalla scala delle $y$; rapportarla alla variabilità iniziale $SS_y$ (quella prima di fare la regressione) dà un indice adimensionale.

## Come si usa
Nell'output di `lm` è "Multiple R-squared" (accanto all'"Adjusted R-squared"): 0.2596 per le temperature sull'anno, 0.6119 per le vendite sulla spesa YouTube. Un $R^2$ alto non garantisce un buon modello: nell'esempio marketing i residui mostrano pattern ed eteroschedasticità. Nel dataset dei pinguini, aggiungere l'effetto della specie porta $R^2$ da 0.05 a circa 0.76.

## Nei corsi
- **Prob e statistica** (triennale): slide sulla regressione. Fonti: `triennale/ANNO 3/prob e statistica/statistica/regressione lez7.pdf` (R2 e previsione I-IV; Regressione Multivariata XVII-XVIII; Verifica delle Ipotesi IV); `statistica/Anova Ancova lez8.pdf` (Paradosso di Simpson III-VIII).
- **Modelli statistici** (magistrale): $R^2=1-\mathrm{RSS}/\mathrm{TSS}$ con TSS la $\mathrm{RSS}$ del modello nullo (libro, cap. 10, Def. 10.6), coseno al quadrato dell'angolo tra vettori centrati (Prop. 9.9); **$R^2$ corretto** $R^2_{\mathrm{adj}}=1-\frac{\mathrm{RSS}/(n-p)}{\mathrm{TSS}/(n-1)}=1-(1-R^2)\frac{n-1}{n-p}$ (Def. 10.7), che non cresce automaticamente aggiungendo predittori; legame con il test globale $F=\frac{R^2/(p-1)}{(1-R^2)/(n-p)}$, $R^2=\frac{(p-1)F}{(n-p)+(p-1)F}$ (cap. 12, Prop. 12.4), utile per controllare la coerenza di un output `summary(lm)`. Nel VIF compare l'$R_j^2$ del predittore $j$ sugli altri. Fonti: `Libri/Modelli statistici/capitoli/cap10.tex` (§10.4, pp. 168-169), `cap12.tex` (p. 200).
- **Business intelligence per big data** (magistrale): $R^2=1-RSS/TSS=1-FVU=1-MSE/\sigma^2$ (FVU = frazione di varianza non spiegata), letture da $R^2=1$ a $R^2=0$, e **$R^2$ corretto** $\bar R^2=1-(1-R^2)\frac{n-1}{n-p-1}$, che cresce solo se il nuovo predittore migliora il modello (formule lette sulle pagine renderizzate 50 e 52). Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 49-52). Inserito fra le [[Metriche di valutazione della regressione]].
- **Data science lab** (magistrale): $R^2=1-MSE/\sigma^2$, proporzione della varianza della variabile dipendente spiegata dalle indipendenti; casi limite: predizione perfetta ($MSE=0$, $R^2=1$, limite superiore), modello pari a predire la media ($MSE=\sigma^2$, $R^2=0$), modello peggiore della media ($R^2<0$; la slide scrive "$MSE<\sigma^2$", refuso: dalla formula serve $MSE>\sigma^2$). In scikit-learn `r2_score` e `scoring='r2'` in cross-validation (vedi [[Metriche di valutazione della regressione]]). Fonti: `magistrale/Data science lab/slide testo/10-DMRegression.pdf` (p. 14); `slide py/8-ScikitLearn-Regression.pdf` (p. 3-4).

## Prerequisiti
- [[Regressione lineare]]: valori stimati $\hat y_i$
- [[Problema dei minimi quadrati]]: $SS_r$ è la quantità minimizzata

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Test F nel modello lineare]]: $F$ globale come funzione di $R^2$ (Modelli statistici)
- [[Criteri di informazione AIC e BIC]]: scelta del modello oltre l'$R^2$ (Modelli statistici)

## Collegati
- [[Analisi dei residui]]: $R^2$ alto con residui problematici
- [[Paradosso di Simpson]]: $R^2$ cresce includendo il confondente
