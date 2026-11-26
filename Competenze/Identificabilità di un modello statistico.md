---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["identifiability", "modello identificabile", "parametrizzazione iniettiva", "non identificabilità"]
tags: [competenza, area/statistica]
---

# Identificabilità di un modello statistico

> Un modello è identificabile se parametri diversi danno distribuzioni diverse: solo allora i dati possono distinguere i valori dei parametri e i coefficienti si possono interpretare.

## Definizione / enunciato
Un **modello statistico** è una coppia $(S,\mathcal P)$ con $S$ spazio campionario e $\mathcal P$ insieme delle distribuzioni di probabilità su $S$ considerate possibili, di solito parametrizzato come $\mathcal P=\{F_\theta:\theta\in\Theta\}$ ($F_\theta$ congiunta discreta, continua o mista).

**Identificabilità**: la parametrizzazione è tale che valori distinti dei parametri danno distribuzioni distinte,
$$F_{\theta_1}=F_{\theta_2}\Rightarrow\theta_1=\theta_2,$$
cioè la mappa $\theta\mapsto F_\theta$ è iniettiva.

## Formule chiave
- Esempio di non identificabilità (TSM p. 33): $x_i\sim N(\lambda_1-\lambda_2,1)$, $i=1,\dots,n$; se la verosimiglianza è massima in $(\hat\lambda_1,\hat\lambda_2)$ lo è anche in ogni $(\lambda_1^*,\lambda_2^*)=(c+\hat\lambda_1,c+\hat\lambda_2)$.
- **MA(1)**: $x_t=w_t+\beta w_{t-1}$ con $w_t\sim N(0,\sigma^2)$ e $x_t=w_t+\frac1\beta w_{t-1}$ con $w_t\sim N(0,\beta^2\sigma^2)$ hanno stessa media e stessa covarianza, quindi lo stesso processo gaussiano; si identifica imponendo $|\beta|\le1$.
- **Misture**: scambiare tutte le etichette latenti e i parametri lascia invariata la verosimiglianza (label switching).

## Intuizione
Se più valori dei parametri massimizzano la verosimiglianza non si possono distinguere. "Se sono interessato solo alla previsione potrebbe non essere un problema, ma se i coefficienti vanno interpretati allora diventa un problema da risolvere".

## Come si usa
I modelli devono essere identificabili (anche se in alcuni casi se ne può fare a meno). È il motivo per cui in una regressione l'errore $\varepsilon_i$ ha media nulla, per cui negli MA si richiede l'invertibilità e per cui nei modelli mistura bisogna riordinare i campioni MCMC.

## Nei corsi
- **Statistica computazionale** (magistrale): definizioni di modello statistico e identificabilità, ripresa per gli MA e le misture. Fonti: `magistrale/Statistica computazionale/modelli grafici.pdf` (p. 3-6); `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 33-36); `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 26).

## Prerequisiti
- [[Campione casuale]]: il modello statistico come famiglia di leggi
- [[Funzione di verosimiglianza]]: lo stesso valore per parametri diversi

## Porta a
- [[Label switching]]: non identificabilità delle misture
- [[Modello MA(q)]]: invertibilità come condizione di identificabilità

## Collegati
- [[Regressione lineare]]: l'errore a media nulla rende identificabile l'intercetta
- [[Modello gerarchico bayesiano]]: modelli a più livelli da formalizzare con cura
