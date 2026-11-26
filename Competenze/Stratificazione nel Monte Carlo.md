---
tipo: competenza
area: numerica
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["stratified sampling Monte Carlo", "variance reduction by stratification", "riduzione della varianza per stratificazione", "stimatore stratificato", "stratified estimator", "allocazione proporzionale", "proportional allocation", "Monte Carlo condizionato", "conditional Monte Carlo", "variance reduction by conditioning"]
tags: [competenza, area/numerica]
---

# Stratificazione nel Monte Carlo

> Si divide lo spazio di campionamento in strati di probabilità nota e si campiona dentro ciascuno: con allocazione proporzionale la varianza scende a $\frac1N\mathbb E[\mathrm{Var}(X\mid Y)]$. È, con il Monte Carlo condizionato, la conseguenza della formula della varianza condizionata.

## Definizione / enunciato
Se $X$ dipende da $Y$ che assume valori $y_j$ con probabilità note $p_j$, $j=1,\dots,m$, allora $\mathbb E[X]=\sum_j\mathbb E[X\mid Y=y_j]\,p_j$ e lo **stimatore stratificato** è
$$\hat\theta_s=\sum_{j=1}^mp_j\Big(\frac1{N_j}\sum_{k=1}^{N_j}X_{jk}\Big),$$
con $N_j$ osservazioni indipendenti nello strato $j$, condizionate a $Y=y_j$.

## Formule chiave
Con $\sigma_j^2=\mathrm{Var}(X\mid Y=y_j)$:
$$\mathrm{Var}(\hat\theta_s)=\sum_{j=1}^m\frac{p_j^2\sigma_j^2}{N_j};\qquad N_j=p_jN\ \Rightarrow\ \mathrm{Var}(\hat\theta_s)=\frac1N\sum_jp_j\sigma_j^2=\frac1N\mathbb E[\mathrm{Var}(X\mid Y)]\le\frac1N\mathrm{Var}(X).$$
Intervallo approssimato: $\hat\theta_s\pm z_{1-\alpha/2}\sqrt{\sum_jp_j^2S_j^2/N_j}$. Dalla formula $\mathrm{Var}(X)=\mathbb E[\mathrm{Var}(X\mid Y)]+\mathrm{Var}(\mathbb E[X\mid Y])$ seguono
$$\mathrm{Var}(X)\ge\mathrm{Var}\big(\mathbb E[X\mid Y]\big)\ \ (\text{Monte Carlo condizionato}),\qquad \mathrm{Var}(X)\ge\mathbb E\big[\mathrm{Var}(X\mid Y)\big]\ \ (\text{stratificazione}).$$

## Intuizione
La stratificazione elimina la variabilità "tra strati" (quanti campioni cadono in ciascuno), lasciando solo quella dentro gli strati. Il Monte Carlo condizionato invece sostituisce $X$ con $\mathbb E[X\mid Y]$, se calcolabile, eliminando la variabilità dentro gli strati.

## Come si usa
Integrale stratificato: per $\theta=\int_0^1h(x)\,dx$ si divide $[0,1]$ in $m$ intervalli $[\frac{j-1}m,\frac jm)$, ciascuno con $p_j=1/m$; nello strato $j$ si usa $(U+j-1)/m$ con $U\sim U(0,1)$, cioè $\hat\theta_j=\frac1{N_j}\sum_kh\big(\frac{U_k+j-1}m\big)$ e $\hat\theta_s=\sum_j\hat\theta_jp_j$.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Variance reduction by conditioning" e "Stratified sampling". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 31-34).

## Prerequisiti
- [[Varianza condizionata]]: la decomposizione della varianza giustifica il metodo
- [[Speranza condizionata]]: $\mathbb E[X]=\mathbb E[\mathbb E[X\mid Y]]$
- [[Metodo Monte Carlo]]: lo stimatore semplice da migliorare

## Collegati
- [[Teorema di Rao-Blackwell]]: stesso principio del Monte Carlo condizionato
- [[Campionamento]]: campionamento stratificato in statistica descrittiva dei dati
- [[Variabili di controllo]]: altra tecnica di riduzione della varianza
