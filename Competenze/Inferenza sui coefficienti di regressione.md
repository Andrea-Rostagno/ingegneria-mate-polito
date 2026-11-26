---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["inference on regression coefficients", "test t sui coefficienti", "distribuzione degli stimatori dei minimi quadrati", "errore standard dei coefficienti", "standard error", "residual standard error", "S^2 con n-2 gradi di libertà", "output di lm"]
tags: [competenza, area/statistica]
---

# Inferenza sui coefficienti di regressione

> Nel modello lineare con errori normali gli stimatori dei coefficienti sono normali e non distorti; sostituendo $\sigma^2$ con $S^2$ si ottengono test t e intervalli di confidenza, quelli dell'output di `lm`.

## Definizione / enunciato
**Regressione semplice** $Y_i=\alpha+\beta x_i+\epsilon_i$, $\epsilon_i$ i.i.d. $\mathcal N(0,\sigma^2)$, $x_i$ costanti. Con $SS_x=\sum(x_i-\bar x)^2$:
$$\begin{pmatrix}\hat\alpha\\\hat\beta\end{pmatrix}\sim N\left(\begin{pmatrix}\alpha\\\beta\end{pmatrix},\begin{pmatrix}\sigma^2\frac{\sum x_i^2}{nSS_x}&-\bar x\frac{\sigma^2}{SS_x}\\-\bar x\frac{\sigma^2}{SS_x}&\frac{\sigma^2}{SS_x}\end{pmatrix}\right),$$
perché $\hat\beta=\frac{\sum(x_i-\bar x)y_i}{SS_x}$ e $\hat\alpha=\bar y-\hat\beta\bar x$ sono combinazioni lineari delle $y_i$.

## Formule chiave
- Residui $\hat\epsilon_j=y_j-\hat\alpha-\hat\beta x_j$, con $\operatorname{Cov}(\hat\epsilon_j,\hat\alpha)=\operatorname{Cov}(\hat\epsilon_j,\hat\beta)=0$: $\sum\hat\epsilon_i^2$ è indipendente da $(\hat\alpha,\hat\beta)$ e (teorema di Cochran) $\frac{(n-2)S^2}{\sigma^2}\sim\chi^2_{n-2}$, $S^2=\frac{\sum\hat\epsilon_i^2}{n-2}$.
- $T_\beta=\dfrac{\hat\beta-\beta}{\sqrt{S^2/SS_x}}\sim T_{n-2}$, $T_\alpha=\dfrac{\hat\alpha-\alpha}{\sqrt{S^2\sum x_i^2/(nSS_x)}}\sim T_{n-2}$.
- Intervallo per $\beta$: $\big[\hat\beta\pm t_{n-2,\alpha/2}\sqrt{S^2/SS_x}\big]$; per $\alpha$: $\big[\hat\alpha\pm t_{n-2,\alpha/2}\sqrt{S^2\sum x_i^2/(nSS_x)}\big]$.
- **Multipla**: $\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(X'X)^{-1})$, $\frac{(n-p)S^2}{\sigma^2}\sim\chi_{n-p}$, $t=\frac{\hat\beta_j-c}{\sqrt{[S^2(X'X)^{-1}]_{jj}}}\sim t_{n-p}$; $\hat{\boldsymbol\beta}$ raggiunge il limite di Cramér-Rao.
- **Contrasti**: $C\hat{\boldsymbol\beta}\sim N(C\boldsymbol\beta,\sigma^2C(X'X)^{-1}C')$ per testare combinazioni lineari.

## Intuizione
$\hat\beta$ non sarà mai esattamente 0 neanche senza relazione: serve un test per dire se l'effetto è dovuto al caso. La covarianza fra $\hat\alpha$ e $\hat\beta$ è negativa e si annulla se $\bar x=0$ (per questo si standardizzano le $x$).

## Come si usa
Output di `summary(lm(y ~ x))`: "Estimate" = stime, "Std. Error" = denominatori $\sqrt{S^2/SS_x}$ e $\sqrt{S^2\sum x_i^2/(nSS_x)}$, "t value" = statistica per $H_0:$ coefficiente $=0$, "Pr(>|t|)" = p-value. Temperature di New Haven contro l'anno: $\hat\alpha=-20.52$, $\hat\beta=0.036$ gradi all'anno, $t=4.509$, p-value $0.0000322$, residual standard error 1.098 su 58 gradi di libertà.

## Nei corsi
- **Prob e statistica** (triennale): slide sulla regressione. Fonti: `triennale/ANNO 3/prob e statistica/statistica/regressione lez7.pdf` (Stima dei parametri V-XXII; Regressione Multivariata XII-XV); `statistica/Anova Ancova lez8.pdf` (Regressione con Interazione e Fattori XVI, contrasti).
- **Modelli statistici** (magistrale): **distribuzioni campionarie** nei quattro punti del docente (libro, cap. 9, Teorema 9.11): (1) $\hat{\boldsymbol\beta}\sim N_p(\boldsymbol\beta,\sigma^2(\mathbf X'\mathbf X)^{-1})$; (2) $(\hat{\boldsymbol\beta}-\boldsymbol\beta)'\mathbf X'\mathbf X(\hat{\boldsymbol\beta}-\boldsymbol\beta)/\sigma^2\sim\chi^2(p)$; (3) $\hat{\boldsymbol\beta}$ indipendente dai residui, quindi da $S^2$; (4) $\mathrm{RSS}/\sigma^2=(n-p)S^2/\sigma^2\sim\chi^2(n-p)$, dimostrati con Cochran applicato a $\mathbf I-\mathbf P$. Statistica $T_j=(\hat\beta_j-\beta_j)/(S\sqrt{v_{jj}})\sim t(n-p)$, $v_{jj}=[(\mathbf X'\mathbf X)^{-1}]_{jj}$ (Cor. 9.12), intervallo $\hat\beta_j\pm t_{\alpha/2}(n-p)\,\mathrm{se}(\hat\beta_j)$ (cap. 11, Cor. 11.8). Isolamento termico, `cons ~ when + temp`: $\hat\beta_0=4.98612$, SE 0.10268, $n-p=53$, $t_{0.025}(53)=2.0057$, intervallo $[4.780;\ 5.192]$ come `confint`; il `t value` 48.56 è il rapporto. Verifica per simulazione nel libro. Fonti: `Libri/Modelli statistici/capitoli/cap09.tex` (§9.6, pp. 156-157), `cap11.tex` (p. 186); `magistrale/Modelli statistici/PDF corretti/251112.pdf`; codice `magistrale/Modelli statistici/codici/251119 Regressione Lineare Insulate.R`.

## Prerequisiti
- [[Regressione lineare]]: modello e stimatori
- [[Vettore gaussiano]]: normalità di combinazioni lineari delle $y_i$
- [[Test t di Student]]: statistica t con $S^2$
- [[p-value]]: colonna `Pr(>|t|)`
- [[Disuguaglianza di Cramér-Rao]]: $\hat{\boldsymbol\beta}$ efficiente

## Porta a
- [[Previsione nella regressione lineare]]: varianza di $\hat\alpha+\hat\beta x_0$
- [[Analisi della varianza]]: test sui coefficienti dei fattori
- [[Regione di confidenza ellissoidale]]: inferenza simultanea su $\mathbf C\boldsymbol\beta$ (Modelli statistici)
- [[Test F nel modello lineare]]: $F=t^2$ per un coefficiente (Modelli statistici)
- [[Teorema di Cochran]]: legge chi-quadro di $\mathrm{RSS}$ (Modelli statistici)

## Collegati
- [[Intervallo di confidenza]]: intervalli per i coefficienti
- [[Analisi dei residui]]: i test valgono solo se le ipotesi sugli errori reggono
