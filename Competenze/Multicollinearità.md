---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici, Business intelligence per big data]
livello: [triennale, magistrale]
aliases: ["multicollinearity", "collinearità", "collinearity", "covariate correlate", "X'X quasi singolare"]
tags: [competenza, area/statistica]
---

# Multicollinearità

> Problema della regressione multipla in cui le covariate, pur linearmente indipendenti, sono molto correlate: $X'X$ è quasi singolare e le stime diventano instabili e non interpretabili.

## Definizione / enunciato
Per invertire $X'X$ in $\hat{\boldsymbol\beta}=(X'X)^{-1}X'\mathbf y$ serve rango pieno $p$ (colonne di $X$ linearmente indipendenti). Matematicamente basta; ma se la correlazione campionaria fra due colonne $\mathrm{Cor}([X]_{\cdot j},[X]_{\cdot j'})$ è alta (le $x$ non sono v.a., quindi si parla di correlazione campionaria) le stime sono instabili: è la **multicollinearità**.

## Formule chiave
$\operatorname{Var}(\hat{\boldsymbol\beta})=\sigma^2(X'X)^{-1}$: con $X'X$ quasi singolare l'inversa ha elementi enormi, quindi varianze grandi e stime che cambiano molto da campione a campione. Per risultati robusti si dovrebbero usare covariate (quasi) indipendenti fra loro.

## Intuizione
Se due covariate misurano quasi la stessa cosa, il modello non sa a quale attribuire l'effetto: può dare a una un effetto positivo e all'altra uno negativo che si compensano.

## Come si usa
Esempio dello script R (jogging): consumo di ossigeno contro pulsazioni medie in corsa e pulsazioni massime. Insieme: `Run_Pulse` $-0.6822$, `Maximum_Pulse` $+0.5719$, segni opposti per due variabili che rappresentano la stessa cosa. In regressioni semplici separate i coefficienti sono entrambi negativi ($-0.20687$ e $-0.1377$), in accordo fra loro.

## Nei corsi
- **Prob e statistica** (triennale): slide sulla regressione multivariata. Fonti: `triennale/ANNO 3/prob e statistica/statistica/regressione lez7.pdf` (Regressione Multivariata V-XI).
- **Modelli statistici** (magistrale): dal teorema di Frisch-Waugh-Lovell, $\operatorname{Var}(\hat\beta_j)=\sigma^2/(S_{jj}(1-R_j^2))$ con $S_{jj}=\sum_i(x_{ij}-\bar x_j)^2$ e $R_j^2$ della regressione di $x_j$ sugli altri predittori; il **fattore di inflazione della varianza** è $\mathrm{VIF}_j=1/(1-R_j^2)$ (libro, cap. 9, §9.5). Fonti: `Libri/Modelli statistici/capitoli/cap09.tex` (p. 155).
- **Business intelligence per big data** (magistrale): solo qualitativo, nell'interpretazione dei coefficienti della regressione multipla: con predittori non correlati ogni coefficiente si stima e si testa separatamente; la correlazione fra predittori fa crescere, a volte molto, la varianza di tutti i coefficienti e complica l'interpretazione; rimedio indicato: eliminare le feature molto correlate. Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 16-17).

## Prerequisiti
- [[Regressione lineare]]: stimatore $(X'X)^{-1}X'\mathbf y$
- [[Coefficiente di correlazione]]: correlazione fra covariate

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Teorema di Frisch-Waugh-Lovell]]: origine della formula del VIF (Modelli statistici)
- [[Inferenza sui coefficienti di regressione]]: errori standard gonfiati dal VIF (Modelli statistici)

## Collegati
- [[Rango di una matrice]]: rango pieno di $X$ necessario per invertire $X'X$
- [[Regressione regolarizzata]]: rimedio con penalizzazione quando $X'X$ non è ben invertibile
