---
tipo: competenza
area: statistica
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [time series, serie temporale, componenti di una serie storica, time series components, trend, componente stagionale, seasonal component, componente ciclica, cyclical component, componente irregolare, random component, serie univariata, serie multivariata, time plot, serie storica discreta, serie storica continua]
tags: [competenza, area/statistica]
---

# Serie storica

> Insieme sequenziale di osservazioni misurate in istanti di tempo successivi; si descrive con quattro componenti (trend, stagionale, ciclica, irregolare) ed è l'input di compiti di classificazione e di previsione.

## Definizione / enunciato
- Una serie storica è un insieme sequenziale di punti misurati, tipicamente, in tempi successivi. È **univariata** se contiene i valori di una sola variabile, **multivariata** se ne contiene più d'una.
- **Continua**: osservazioni misurate a ogni istante (temperatura, portata di un fiume, corrente di un braccio robotico campionata ogni 2 ms, segnale audio). **Discreta**: osservazioni a intervalli regolari (annuali, trimestrali, mensili, ..., orari; popolazione di una città, tassi di cambio, tasso d'inflazione USA).
- Il **time plot** è il grafico bidimensionale con il tempo in ascissa e la variabile d'interesse in ordinata.
- Rispetto ai dati tabellari (feature per riga) una serie ha feature per ogni istante: l'ordine conta.

## Formule chiave
Le slide non danno un modello additivo esplicito: la serie è descritta qualitativamente come composizione delle quattro componenti.

| componente | descrizione dalle slide |
|---|---|
| Trend | movimento complessivo, persistente, di lungo periodo; crescente o decrescente, lineare o non lineare |
| Stagionale | fluttuazioni periodiche regolari, pattern a onda di breve periodo (es. trimestri) |
| Ciclica | oscillazioni ripetute di lungo periodo, regolari ma di durata variabile, misurate da picco a picco |
| Irregolare / casuale | fluttuazioni erratiche o residue dovute a influenze imprevedibili, non ripetitive: il "rumore" |

## Intuizione
Separare le componenti significa distinguere ciò che è prevedibile (trend, stagionalità, cicli) da ciò che non lo è (rumore). In alcuni casi (audio, video) conviene guardare la serie anche nel dominio della frequenza, con la trasformata di Fourier e lo spettrogramma.

## Come si usa
Due tipi di analisi: **caratterizzare** il fenomeno (componenti) oppure un compito di **classificazione** (riconoscimento vocale, guasti delle macchine) o di **previsione** (domanda di energia, meteo, traffico). Nel processo KDD per le serie: selezione, preprocessing (allineamento con padding; nelle serie multivariate rimozione delle serie correlate, con approccio basato sulla correlazione, sulla conoscenza di dominio o misto), trasformazione (feature engineering, embedding), estrazione di conoscenza, interpretazione. Quando i dati sono indicizzati anche nello spazio si passa a **griglie spazio-temporali** (celle lat-long per ora), con autocorrelazione spaziale e modelli specializzati.

## Nei corsi
- **Business intelligence per big data** (magistrale): mazzo "Time series analysis: fundamentals" (Cerquitelli, Baralis). Fonti: `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (pp. 2-17 definizione, componenti, KDD; pp. 48-52 dominio della frequenza e griglie spazio-temporali).

## Prerequisiti
- [[Processo KDD]]: l'analisi delle serie segue le stesse fasi
- [[Tipi di attributo]]: i dati ordinati sono un tipo di dataset

## Porta a
- [[Finestra temporale]]: analisi locale di parti della serie
- [[Feature engineering per serie storiche]]: trasformazione in feature per gli algoritmi
- [[Previsione di serie storiche]]: compito di forecasting

## Collegati
- [[Stazionarietà di un processo stocastico]]: punto di vista probabilistico sulla stessa sequenza
- [[Modello ARIMA stagionale]]: modello statistico che tratta trend e stagionalità
- [[Trasformata di Fourier]]: passaggio al dominio della frequenza
