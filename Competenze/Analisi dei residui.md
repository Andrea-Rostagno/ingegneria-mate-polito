---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici, Data science lab]
livello: [triennale, magistrale]
aliases: ["residual analysis", "verifica delle ipotesi del modello lineare", "diagnostica della regressione", "regression diagnostics", "omoschedasticità", "homoscedasticity", "eteroschedasticità", "heteroscedasticity", "ipotesi di Gauss", "grafico dei residui"]
tags: [competenza, area/statistica]
---

# Analisi dei residui

> Verifica, soprattutto grafica, delle ipotesi del modello lineare (errori a media nulla, omoschedastici, incorrelati, normali, indipendenti dalle covariate) attraverso i residui $\hat\epsilon_i=y_i-\hat y_i$.

## Definizione / enunciato
**Ipotesi di Gauss** sugli errori: $E(\epsilon_i)=0$; $\operatorname{Var}(\epsilon_i)=\sigma^2$ uguali (**omoschedastici**); $\operatorname{Cov}(\epsilon_i,\epsilon_j)=0$ per $i\ne j$; più la normalità e $E(\epsilon_i|x_i)=0$, $\operatorname{Var}(\epsilon_i|x_i)=\sigma^2$ (in $\epsilon$ deve stare solo ciò che $x$ non spiega). Tutta l'inferenza (test, intervalli) ha senso solo se queste ipotesi valgono.

## Formule chiave
In un modello **con intercetta** la media campionaria dei residui è sempre zero: posto $z_i=y_i-\hat\beta_2x_{i,2}-\dots-\hat\beta_px_{i,p}$, il minimo in $\beta_1$ di $\sum(z_i-\beta_1)^2$ è $\hat\beta_1=\bar z$, quindi $\hat\epsilon_i=z_i-\bar z$ e $\frac1n\sum\hat\epsilon_i=0$. La prima ipotesi è quindi sempre "verificata"; le altre richiedono test o grafici.

## Intuizione
Se i residui mostrano struttura (andamenti rispetto a una covariata, varianza che cambia) significa che nell'errore c'è ancora informazione: il modello è incompleto o mal specificato.

## Come si usa
Dataset marketing, `sales ~ youtube` ($R^2=0.6119$): istogramma dei residui plausibilmente normale, residui contro l'indice a varianza costante, ma residui contro `youtube` con pattern e varianza diversa nei vari punti (eteroschedasticità); residui contro `facebook` e `newspaper` dipendenti, quindi queste variabili andrebbero inserite. Conclusione: la significatività dei test su $\boldsymbol\beta$ non è affidabile, la regressione va rivista (altre $x$ o trasformazioni).

## Nei corsi
- **Prob e statistica** (triennale): sezione "Varie" delle slide sulla regressione. Fonti: `triennale/ANNO 3/prob e statistica/statistica/regressione lez7.pdf` (La regressione IV-V; Verifica delle Ipotesi I-X).
- **Modelli statistici** (magistrale): residui standardizzati $r_i=\hat\varepsilon_i/(S\sqrt{1-h_{ii}})$, approssimativamente $N(0,1)$ se il modello è corretto (libro, cap. 10, Def. 10.9); grafici residui contro valori interpolati e contro $x$, QQ-plot, Shapiro-Wilk; quattro scenari tipici (corretto, curvatura, imbuto, autocorrelazione). Rimedi: trasformazioni ($\sqrt{\mathrm{TV}}$; per $y=e^{2-0.9x+\varepsilon}$ `lm(log(y) ~ x)` porta $R^2$ da 0.42 a 0.86), GLS per l'eteroschedasticità, Durbin-Watson per la correlazione seriale, leva e distanza di Cook per i punti influenti. Fonti: `Libri/Modelli statistici/capitoli/cap10.tex` (§10.5, pp. 170-174); codice `magistrale/Modelli statistici/codici/251113 lm-dignostica.R`.
- **Data science lab** (magistrale): i residui (differenza fra predizioni e osservazioni) dovrebbero essere normali e omoschedastici; i **residual plot** valutano a occhio la bontà dell'adattamento: ci si aspetta residui sparsi a caso attorno allo zero, con varianza costante e senza pattern. Fonti: `magistrale/Data science lab/slide testo/10-DMRegression.pdf` (p. 4-5, 15).

## Prerequisiti
- [[Regressione lineare]]: residui del modello stimato

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Leva e distanza di Cook]]: punti influenti (Modelli statistici)
- [[Test di Durbin-Watson]]: correlazione seriale dei residui (Modelli statistici)
- [[Minimi quadrati generalizzati]]: rimedio all'eteroschedasticità (Modelli statistici)

## Collegati
- [[Inferenza sui coefficienti di regressione]]: valida solo sotto le ipotesi di Gauss
- [[Coefficiente di determinazione]]: un $R^2$ alto non basta
