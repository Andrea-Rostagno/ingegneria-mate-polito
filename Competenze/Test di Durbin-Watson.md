---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Durbin-Watson test", "statistica di Durbin-Watson", "correlazione seriale dei residui", "serial correlation", "autocorrelazione dei residui", "dwtest"]
tags: [competenza, area/statistica]
---

# Test di Durbin-Watson

> Statistica sui residui di una regressione ordinati nel tempo che segnala l'autocorrelazione di ordine 1 degli errori, violazione dell'ipotesi di indipendenza.

## Definizione / enunciato
Dati i residui $\hat\varepsilon_1,\dots,\hat\varepsilon_n$ ordinati nel tempo (libro, cap. 10, Def. 10.12):
$$\mathrm{DW}=\frac{\sum_{t=2}^n(\hat\varepsilon_t-\hat\varepsilon_{t-1})^2}{\sum_{t=1}^n\hat\varepsilon_t^2}.$$

## Formule chiave
- $\mathrm{DW}\approx2(1-\hat\rho)$ con $\hat\rho=\sum_{t\ge2}\hat\varepsilon_t\hat\varepsilon_{t-1}/\sum_t\hat\varepsilon_t^2$, autocorrelazione dei residui al ritardo 1.
- $\mathrm{DW}\in[0,4]$ esattamente, perché $(a-b)^2\le2a^2+2b^2$.
- Lettura: $\approx2$ nessuna autocorrelazione; vicino a 0 autocorrelazione positiva (onde lente); vicino a 4 autocorrelazione negativa (segni alternati).
- La legge sotto $H_0$ dipende dalla matrice di disegno: tavole con soglie $d_L<d_U$ (rifiuto se $\mathrm{DW}<d_L$, zona di indecisione tra le due), oppure p-value calcolato dal software.

## Intuizione
Se gli errori consecutivi si somigliano, le differenze $\hat\varepsilon_t-\hat\varepsilon_{t-1}$ sono piccole rispetto ai residui stessi e DW crolla verso 0.

## Come si usa
Vendite di un'azienda in 35 periodi (libro, Es. `c10-dw`): retta $\widehat{\text{sales}}=0.40+4.296\,t$ con $R^2=0.98$, ma i residui formano lunghe sequenze dello stesso segno; $\mathrm{DW}=0.821$, $\hat\rho=0.590$, $2(1-\hat\rho)=0.821$, e `lmtest::dwtest` (alternativa $\rho>0$) dà p-value $2\cdot10^{-5}$. Conseguenze: errori standard troppo piccoli e p-value troppo ottimistici; rimedi sono modelli per serie storiche o GLS con `correlation = corAR1()` in `nlme`. Il libro non sviluppa le serie storiche oltre questo test.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 10, §10.7 (Def. 10.12, p. 176). Fonti: `Libri/Modelli statistici/capitoli/cap10.tex`; codice `magistrale/Modelli statistici/codici/251119 DurbinWatsonTest.R` (dati `codici/251119 SalesData.csv`).

## Prerequisiti
- [[Analisi dei residui]]: grafico dei residui contro il tempo
- [[Coefficiente di correlazione]]: autocorrelazione al ritardo 1

## Porta a
- [[Minimi quadrati generalizzati]]: correzione con struttura di correlazione AR(1)

## Collegati
- [[Regressione lineare]]: ipotesi di errori incorrelati (M4)
- [[Modello AR(1)]]: modello per errori autocorrelati al ritardo 1 (Statistica computazionale)
