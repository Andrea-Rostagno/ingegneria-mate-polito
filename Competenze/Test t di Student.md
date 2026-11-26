---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["t-test", "T-test", "Student's t-test", "test t", "test t per due campioni", "two-sample t-test", "varianza pooled", "pooled variance", "S^2_pool", "correzione di Welch", "Welch's t-test"]
tags: [competenza, area/statistica]
---

# Test t di Student

> Test sulla media di una normale con varianza **ignota**: si sostituisce $\sigma^2$ con $S^2$ e la statistica diventa una t di Student con $n-1$ gradi di libertà; versione a due campioni con varianza "pooled".

## Definizione / enunciato
**Un campione**: $X_i\sim\mathcal N(\mu,\sigma^2)$, $\sigma^2$ ignota, $H_0:\mu=\mu_0$ (o unilaterali):
$$T=\frac{\bar X-\mu_0}{\sqrt{S^2/n}}\sim t(n-1),\qquad S^2=\frac{\sum(X_i-\bar X)^2}{n-1}.$$
**Due campioni** indipendenti con varianze ignote ma supposte uguali, $H_0:\mu_x-\mu_y=\mu_0$:
$$T=\frac{\bar X-\bar Y-\mu_0}{\sqrt{S^2_{pool}\big(\frac1n+\frac1m\big)}}\sim t(n+m-2),\qquad S^2_{pool}=\frac{(n-1)S_x^2+(m-1)S_y^2}{n+m-2}.$$

## Formule chiave
- Regione bilaterale: $R=\{|\bar x-\mu_0|\ge t_{n-1,\alpha/2}\sqrt{s^2/n}\}$, con $t_{n-1,\alpha/2}$ quantile di cumulata $1-\alpha/2$; per $n$ grande $t_{n-1,\alpha/2}\approx z_{\alpha/2}$.
- È il test del rapporto di verosimiglianza per $H_0:\mu=\mu_0$, $\sigma^2\in\mathbb R^+$.
- Con varianze diverse serve la correzione di Welch (problemi nei gradi di libertà).
- Lo stimatore $\frac{\sum(y_{i,m}-\bar y)^2+\sum(y_{i,f}-\bar y)^2}{n-1}$ (media comune) è non distorto solo sotto $H_0$: si preferisce la pooled, che dà meno errore di seconda specie.

## Intuizione
Stimare la varianza aggiunge incertezza: i quantili t sono più larghi di quelli normali, tanto più quanto più piccolo è $n$.

## Come si usa
Sonniferi ($n=10$, $\bar x=-1.58$, $\sigma^2$ ignota): si rifiuta $H_0:\mu=0$, i due trattamenti differiscono. Pinguini, profondità del becco maschi contro femmine: $t=-7.3065$, 331 gradi di libertà, $p=2.066\cdot10^{-12}$. Lo stesso test si ottiene con una regressione su una variabile fattore (0 = femmina, 1 = maschio): la t del coefficiente coincide.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test e su ANOVA; nelle slide la formula di $S^2_{pool}$ con le somme ha i quadrati mancanti (refuso). Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Rapporto di verosimiglianza X-XII; Statistiche da conoscere I, III); `statistica/Anova Ancova lez8.pdf` (Regressione con Interazione e Fattori VII-XII).

## Prerequisiti
- [[Media e varianza campionaria nel caso normale]]: $\sqrt n(\bar X-\mu)/S\sim t(n-1)$
- [[Distribuzione t di Student]]: quantili $t_{n-1,\alpha/2}$
- [[Test del rapporto di verosimiglianza]]: derivazione del test

## Porta a
- [[Inferenza sui coefficienti di regressione]]: test t sui coefficienti
- [[Analisi della varianza]]: confronto di medie fra gruppi con la regressione

## Collegati
- [[Test z sulla media]]: caso con varianza nota
- [[p-value]]: output dei test in R
