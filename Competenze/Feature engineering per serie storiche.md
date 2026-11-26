---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [time series feature engineering, time series summarization, sintesi di una serie storica, skewness, asimmetria, kurtosis, curtosi, percentili di una serie, CDF + percentile, derivata + CDF + percentile, time series aggregation, spettrogramma, spectrogram]
tags: [competenza, area/data-ml]
---

# Feature engineering per serie storiche

> Calcolo di un vettore di feature (statistiche, indici di forma, percentili) che riassume una serie storica o una sua finestra, così da usarla come input di algoritmi di classificazione o previsione.

## Definizione / enunciato
Famiglie di feature calcolate su una serie (o su ciascuna finestra):
- **statistiche di base**: minimo, massimo, media, deviazione standard, numero di campioni;
- **indici**: *skewness* (asimmetria della distribuzione attorno alla media, legata al terzo momento centrale $\mu_3$) e *kurtosis* ("pesantezza delle code", legata al quarto momento centrale $\mu_4$);
- **sintesi con percentili**: il percentile è il valore sotto cui cade una data percentuale di osservazioni; con 4 o 10 percentili (10, 20, ..., 90, 99) si rappresenta l'intera distribuzione, togliendo gli outlier con l'ultimo percentile. La sequenza temporale si perde;
- **CDF + percentili**: si calcola la funzione di ripartizione empirica dei campioni (servono almeno 100 campioni per una CDF affidabile) e la si riassume con pochi percentili;
- **derivata + CDF + percentili**: lo stesso applicato alla derivata del segnale (esempio della corrente di un braccio robotico);
- **regressione lineare** sul tempo (pendenza e intercetta come feature).

## Formule chiave
$$ F_X(x) = P(X\le x),\qquad P(a<X\le b) = F_X(b)-F_X(a) $$
Le formule di skewness e kurtosis sono immagini nella slide e non leggibili nell'estrazione (da verificare sul PDF, pp. 23-24); la slide precisa che la curtosi si indica spesso con $\kappa$ o $\gamma_2$, simbolo a volte riservato all'eccesso di curtosi.

## Intuizione
Gli algoritmi di machine learning lavorano su vettori di lunghezza fissa: il feature engineering trasforma una sequenza di lunghezza arbitraria in un vettore che ne conserva forma e variabilità, in modo trasparente (a differenza delle reti neurali, dove l'apprendimento delle feature è nascosto).

## Come si usa
Si valutano diverse combinazioni di feature; quelle fortemente correlate fra loro si eliminano (approccio basato sulla correlazione) per semplificare il modello, migliorarne le prestazioni e l'interpretabilità; le feature selezionate alimentano i compiti successivi. Per segnali come l'audio si lavora anche nel dominio della frequenza con lo **spettrogramma** (trasformata di Fourier su sottointervalli uguali; il colore indica l'ampiezza, che va trasformata in scala logaritmica).

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (pp. 21-28 feature e sintesi; p. 37 feature per sotto-ciclo; p. 47 selezione per correlazione; pp. 48-51 dominio della frequenza; CDF letta sulla pagina renderizzata 26).

## Prerequisiti
- [[Serie storica]]: oggetto da riassumere
- [[Finestra temporale]]: le feature si calcolano anche per finestra
- [[Funzione di ripartizione]]: base della sintesi CDF + percentili
- [[Varianza]]: momenti centrali e deviazione standard

## Porta a
- [[Previsione di serie storiche]]: le feature alimentano i modelli
- [[Classificazione supervisionata]]: classificazione delle serie (es. guasti)

## Collegati
- [[Feature selection]]: rimozione delle feature correlate
- [[Coefficiente di correlazione]]: criterio di rimozione delle feature ridondanti
- [[Trasformata di Fourier]]: spettrogramma e dominio della frequenza
