---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["feature subset selection", "selezione degli attributi", "filter", "wrapper", "embedded", "feature creation", "creazione di attributi"]
tags: [competenza, area/data-ml]
---

# Feature selection

> Scelta di un sottoinsieme degli attributi originali, eliminando quelli ridondanti o irrilevanti, e creazione di nuovi attributi più informativi.

## Definizione / enunciato
La **feature subset selection** è un altro modo di ridurre la dimensionalità. Elimina:
- attributi **ridondanti**: duplicano in tutto o in parte l'informazione di altri (prezzo di un prodotto e IVA pagata);
- attributi **irrilevanti**: non contengono informazione utile al compito (la matricola per predire la media dei voti).

Tecniche:
- **brute force**: provare tutti i sottoinsiemi come input dell'algoritmo;
- **embedded**: la selezione avviene dentro l'algoritmo di data mining;
- **filter**: gli attributi si scelgono prima di eseguire l'algoritmo;
- **wrapper**: l'algoritmo è usato come scatola nera per trovare il sottoinsieme migliore.

La **feature creation** crea attributi nuovi che catturano l'informazione importante in modo più efficiente: estrazione (specifica del dominio), mappatura in un nuovo spazio (trasformata di Fourier o wavelet), costruzione (combinazione di attributi).

## Formule chiave
Nessuna formula. Con $n$ attributi l'approccio brute force esplora tutti i sottoinsiemi non vuoti, $2^n-1$ (calcolo nostro, non nelle slide).

## Intuizione
Meno attributi significano modelli più semplici e veloci e meno rischio di farsi ingannare da attributi inutili. Anche l'analisi di correlazione serve qui: le slide suggeriscono di rimuovere le feature correlate per semplificare l'analisi e migliorare gli algoritmi.

## Come si usa
Esempio delle slide per la feature creation: due sinusoidi con rumore diventano due picchi netti nello spazio delle frequenze dopo la trasformata di Fourier. Per i wrapper il "black box" è tipicamente un classificatore.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezioni "Feature Subset Selection" e "Feature Creation" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 40-43, 76).
- **Business intelligence per big data** (magistrale): stesse sezioni "Feature Subset Selection", "Feature Creation" e "Mapping Data to a New Space" del mazzo di preprocessing; ripresa come selezione basata sulla correlazione (si scartano le feature molto correlate con altre, guidati anche dalla conoscenza di dominio) nella [[Regressione lineare]] multipla e nelle [[Feature engineering per serie storiche|feature delle serie storiche]]. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 39-42); `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (p. 17); `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (p. 47).
- **Data science lab** (magistrale): feature ridondanti e irrilevanti, tecniche (forza bruta, embedded, filter, wrapper), creazione di feature e mappatura in un nuovo spazio (esempio delle due sinusoidi con rumore). Nel corso l'analisi della correlazione fra feature è indicata come modo per eliminare feature correlate (`2-DMPreProc.pdf` p. 96). Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 40-43).

## Prerequisiti
- Nessuno.

## Porta a
- Nessuno.

## Collegati
- [[Riduzione della dimensionalità]]: due modi di ridurre gli attributi
- [[Classificazione supervisionata]]: attributi rilevanti per il classificatore
