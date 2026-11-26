---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["ARIMA(p,d,q)", "autoregressive integrated moving average", "serie integrata", "integrated series", "I(d)", "differenziazione", "differencing", "IMA(1,1)", "IAR(1,1)"]
tags: [competenza, area/statistica]
---

# Modello ARIMA

> Una serie che, differenziata $d$ volte, segue un ARMA: le differenze rimuovono trend deterministici e stocastici e riportano a un processo stazionario.

## Definizione / enunciato
**Serie integrata di ordine $d$**, I($d$): la differenziazione di ordine $d$ produce un rumore bianco,
$$(1-B)^dx_t=(1-B)(1-B)\cdots(1-B)x_t=w_t.$$
Un modello che, integrato $d$ volte, produce un ARMA è un **ARIMA($p,d,q$)**:
$$\theta_p(B)(1-B)^dx_t=\phi_q(B)w_t.$$
Prima si differenzia, poi il modello è ARMA sulle differenze.

## Formule chiave
- Random walk $x_t=x_{t-1}+w_t$: le differenze prime $x_t^*=x_t-x_{t-1}=w_t$ sono rumore bianco, cioè I(1).
- Trend deterministico $x_t=a+bt+w_t$: $(1-B)x_t=b+(1-B)w_t$, MA(1) con $\beta=-1$ (non invertibile) e media $b$; differenziando ancora $(1-B)^2x_t=(1-B)^2w_t=w_t-2w_{t-1}+w_{t-2}$, un MA(2).
- Per eliminare un trend deterministico di ordine $d$ ($a+bt+\dots+ht^d$) servono $d$ differenziazioni, e così per un trend stocastico di ordine $d$; differenziando per un trend deterministico si introduce una componente di ordine $d$ nella parte MA.
- Esempi: $x_t=x_{t-1}+w_t+\beta w_{t-1}$ è ARIMA(0,1,1) o IMA(1,1); $x_t=\alpha x_{t-1}+x_{t-1}-\alpha x_{t-2}+w_t$, cioè $(1-B)x_t=\alpha(1-B)x_{t-1}+w_t$, è ARIMA(1,1,0) o IAR(1,1).

## Intuizione
$x_t=x_{t-1}+w_t$ non è un ARMA (è un AR(1) con $\alpha=1$) ma è utile: la posizione al tempo $t$ è una traslazione casuale della precedente. Guardando gli incrementi invece dei livelli il processo torna stazionario.

## Come si usa
Si differenzia finché ACF e PACF hanno l'aspetto di un ARMA stazionario, poi si sceglie $(p,q)$. Le slide mostrano con codice R il rumore bianco con trend ($a=1$, $b=5$, $n=500$) e le sue differenze prime e seconde, e le simulazioni di ARIMA(0,1,1) con $\beta=0.5$ e ARIMA(1,1,0) con $\alpha=0.5$.

## Nei corsi
- **Statistica computazionale** (magistrale): "I modelli integrati I-XXIV". Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 61-84).

## Prerequisiti
- [[Modello ARMA]]: modello per le differenze
- [[Passeggiata aleatoria gaussiana]]: esempio base di serie I(1)

## Porta a
- [[Modello ARIMA stagionale]]: differenze a passo $s$

## Collegati
- [[Modello MA(q)]]: differenziare un trend introduce MA non invertibili
