---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["CAR", "conditional autoregressive model", "modello autoregressivo condizionato", "auto-normal model", "modello auto-normale", "ICAR", "intrinsic CAR", "CAR proprio", "proper CAR", "matrice di precisione sparsa"]
tags: [competenza, area/statistica]
---

# Modello CAR

> MRF gaussiano definito dalle full conditional $w_i\mid\partial w_i\sim N(\sum_{j\sim i}\beta_{i,j}w_j,\tau_i^2)$: la congiunta è normale con matrice di precisione sparsa che riproduce il grafo dei vicini.

## Definizione / enunciato
Dipendenza nel secondo livello: $y_i\mid w_i\sim\mathrm{Pois}(\exp(\mu+w_i))$, $\mathbf w\sim\mathrm{MRF}$, con
$$w_i\mid\partial w_i\sim N\Bigl(\sum_{j\sim i}\beta_{i,j}w_j,\ \tau_i^2\Bigr).$$
Con il lemma di Brook $f(\mathbf w)\propto\exp\bigl(-\sum_i\frac{w_i^2-2w_i\sum_{j\sim i,j>i}\beta_{i,j}w_j}{2\tau_i^2}\bigr)$; assumendo $\mathbf w\sim N(\mathbf 0,\boldsymbol\Lambda^{-1})$ e confrontando i kernel:
$$\frac1{\tau_i^2}=\lambda_{i,i},\qquad\frac{\beta_{i,j}}{\tau_i^2}=-\lambda_{i,j},\qquad\frac{\beta_{i,j}}{\tau_i^2}=\frac{\beta_{j,i}}{\tau_j^2}\ \text{(simmetria)},$$
con $\beta_{i,j}=0$ se $i,j$ non sono vicini. Quindi $f(\mathbf w)\propto\exp\bigl(-\frac{\mathbf w'(\mathbf D-\mathbf B)\mathbf w}2\bigr)$, $[\mathbf B]_{i,j}=\beta_{i,j}/\tau_i^2$, $\mathbf D$ diagonale con $1/\tau_i^2$.

## Formule chiave
- **ICAR** (specificazione classica): $h_{i,j}=1$ sse $i\sim j$, $h_{i,+}=\sum_jh_{i,j}$, $\tau_i^2=\tau^2/h_{i,+}$, $\beta_{i,j}=h_{i,j}/h_{i,+}$; allora $[\mathbf B]_{i,j}=h_{i,j}/\tau^2$, $[\mathbf D]_{i,i}=h_{i,+}/\tau^2$ e
$$f(\mathbf w)\propto\exp\Bigl(-\frac1{2\tau^2}\sum_{i<j}h_{ij}(w_i-w_j)^2\Bigr).$$
$(\mathbf D-\mathbf B)\mathbf 1=\mathbf 0$: precisione singolare, la varianza non esiste, distribuzione **impropria** (accettabile come prior se la posteriori è ben definita). Vincolo pratico in STAN: $\sum_iw_i\sim N(0,0.0000001)$.
- **CAR proprio**: precisione $(\mathbf D-\rho\mathbf B)$, non singolare se $0<\rho<1/\xi_{\max}$, con $\xi_{\max}$ il più grande autovalore di $\mathbf D^{-1/2}\mathbf B\mathbf D^{-1/2}$.

## Intuizione
$w_j$ non compare nella full conditional di $w_i$ se $\lambda_{i,j}=0$: la precisione è sparsa e contiene la struttura del grafo. Nell'ICAR aggiungere una costante $c$ a tutte le $w_i$ non cambia la densità, da cui la singolarità. Vantaggi dell'ICAR: la precisione è già disponibile e non ha parametri.

## Come si usa
Crime data: modelli Poisson con ICAR senza offset, con offset di popolazione e con offset più latitudine, WAIC 785.0702, 787.9209, 790.0982. Nel notebook: simulazione ICAR regolarizzando con $\epsilon\mathbf I$ e centrando a somma zero.

## Nei corsi
- **Statistica computazionale** (magistrale): "Auto-Normal model (conditional autoregressive (CAR) model)" e "Crime Data". Fonti: `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 20-27, 29-31); notebook `magistrale/Statistica computazionale/auto_modelli_MRF_CAR_R.ipynb` (codice ICAR/CAR e modello STAN).

## Prerequisiti
- [[Lemma di Brook]]: congiunta dalle full conditional
- [[Markov random field]]: struttura dei vicini
- [[Vettore gaussiano]]: congiunta normale con precisione $\boldsymbol\Lambda$

## Collegati
- [[Modello di Poisson spaziale]]: stesso problema con effetto spaziale continuo
- [[Autovalori e autovettori]]: condizione $\rho<1/\xi_{\max}$
- [[Modello auto-Poisson]]: alternativa scartata
- [[Modello AR(1)]]: analogo temporale dell'autoregressione condizionata
