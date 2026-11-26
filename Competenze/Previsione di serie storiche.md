---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [time series forecasting, forecasting, previsione, Prophet, rollout prediction, previsione multi-step, multi-step forecast, regressione sul tempo]
tags: [competenza, area/data-ml]
---

# Previsione di serie storiche

> Compito di predire i valori futuri di una serie storica (domanda di energia, meteo, traffico) con modelli statistici, di regressione o reti neurali.

## Definizione / enunciato
Classificazione e previsione di serie si affrontano con algoritmi di machine learning (random forest classifier/regressor, SVM, reti neurali) o con approcci statistici (es. modelli ARIMA). La scelta dipende dai requisiti (accuratezza, modello leggibile, scalabilità, gestione di rumore e outlier) e dalla complessità del compito. Tre approcci nelle slide:
- **regressione lineare sul tempo**: si guarda ogni punto separatamente;
- **Prophet** (Meta): scompone la serie in trend + stagionalità + festività/eventi + errore; trend lineare a tratti o logistico con rilevamento automatico dei punti di cambio; stagionalità (giornaliera, settimanale, annuale) con funzioni lisce (serie di Fourier); effetti esterni opzionali; stima dei parametri dai dati storici e predizioni con intervalli di incertezza;
- **reti neurali**: CNN per la classificazione, RNN per la previsione (esempio: 72 valori meteorologici predetti).

## Formule chiave
$$ Y(t) = \beta_0 + \beta_1 t + \varepsilon $$
$\beta_0$ è la parte di $y$ non spiegata da $t$; $\beta_1$ è la variazione media di $y$ per un'unità di $t$.

## Intuizione
La **rollout prediction** predice più passi futuri in sequenza: ogni predizione rientra come input per il passo successivo. È semplice, vale sia per serie sia per dati spazio-temporali e cattura le dipendenze temporali senza architetture complesse; ma gli errori si accumulano nel tempo (drift) e il risultato dipende molto dalla qualità delle prime predizioni.

## Come si usa
Si estraggono le feature (o si usano finestre), si sceglie il modello, si valuta la previsione con metriche di regressione. Reti neurali: accurate e versatili, ma richiedono molti dati e calcolo, e l'apprendimento delle feature è nascosto, quindi l'utente non vede quali feature guidano la predizione; alcuni compiti richiedono comunque un feature engineering ad hoc.

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (p. 18 algoritmi; p. 19 regressione sul tempo, letta sulla pagina renderizzata; p. 20 Prophet; pp. 38-44 reti neurali; p. 53 rollout).

## Prerequisiti
- [[Serie storica]]: oggetto della previsione
- [[Regressione lineare]]: modello più semplice, regressione sul tempo
- [[Feature engineering per serie storiche]]: input dei modelli di machine learning

## Porta a
- [[Metriche di valutazione della regressione]]: misura dell'errore di previsione

## Collegati
- [[Rete neurale ricorrente]]: architettura usata per il forecasting
- [[Modello ARIMA]]: approccio statistico citato come alternativa
- [[Random forest]]: usabile anche come regressore
- [[Serie di Fourier]]: Prophet modella la stagionalità con serie di Fourier
