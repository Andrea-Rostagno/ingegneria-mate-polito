---
tipo: competenza
area: numerica
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["antithetic sampling", "antithetic variates", "variabili antitetiche", "campionamento con variabili antitetiche", "coppie antitetiche", "antithetic pairs"]
tags: [competenza, area/numerica]
---

# Campionamento antitetico

> Tecnica di riduzione della varianza Monte Carlo: si generano coppie di repliche correlate negativamente (uniformi $U$ e $1-U$, o normali $Z$ e $-Z$) e si media la coppia.

## Definizione / enunciato
Si generano coppie $(X_1^{(i)},X_2^{(i)})$, $i=1,\dots,n$, indipendenti "in orizzontale" (tra coppie diverse) ma possibilmente dipendenti "in verticale" (dentro la coppia), e si usa la media di coppia $X^{(i)}=(X_1^{(i)}+X_2^{(i)})/2$, su cui si costruisce l'intervallo di confidenza.

## Formule chiave
$$\mathrm{Var}[\bar X(n)]=\frac{\mathrm{Var}(X_1^{(i)})+\mathrm{Var}(X_2^{(i)})+2\,\mathrm{Cov}(X_1^{(i)},X_2^{(i)})}{4n}=\frac{\mathrm{Var}(X)}{2n}\big(1+\rho(X_1,X_2)\big).$$
Per ridurre la varianza serve $\rho(X_1,X_2)<0$: si usa la successione $\{U_k\}$ per la prima replica e $\{1-U_k\}$ per la seconda (con le normali, $Z_i$ e $-Z_i$).

## Intuizione
La correlazione negativa degli input si trasmette all'output solo se la relazione input-output è **monotona**. Il metodo della trasformata inversa è monotono; certi metodi ad hoc (rifiuto polare per le normali) non lo sono. Il payoff di una call è monotono nel prezzo, a sua volta monotono nello shock normale.

## Come si usa
- $\int_0^1e^x\,dx=e-1\approx1.7183$: con 100 osservazioni indipendenti la stima è 1.7631 con ampiezza relativa dell'intervallo 0.1089; con 50 coppie antitetiche è 1.7021 con ampiezza 0.0200 (funzione quasi lineare, forte correlazione tra $U$ ed $e^U$).
- Call europea ($S_0=K=50$, $r=0.05$, $T=1$, $\sigma=0.4$): 200000 repliche semplici danno 9.0843 con ampiezza relativa 0.0152, 100000 coppie danno 9.0553 con 0.0125, miglioramento modesto.
- **Controesempio** con la funzione triangolare $f(x)=\min(2x,2-2x)$, non monotona: l'ampiezza passa da 0.0356 (Monte Carlo semplice) a 0.0533 (antitetico), cioè la varianza aumenta.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): prima tecnica di riduzione della varianza. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 5-12).

## Prerequisiti
- [[Metodo Monte Carlo]]: lo stimatore da migliorare
- [[Covarianza]]: la varianza della media di coppia dipende dalla covarianza
- [[Trasformazione integrale di probabilità]]: generazione monotona delle variabili

## Porta a
- [[Numeri casuali comuni]]: stessa idea con correlazione positiva fra due sistemi
- [[Pricing di opzioni con Monte Carlo]]: applicazione al prezzo di una call

## Collegati
- [[Variabili di controllo]]: riduzione della varianza che sfrutta più conoscenza del problema
- [[Analisi dell'output di simulazione]]: l'intervallo si costruisce sulle medie di coppia indipendenti
