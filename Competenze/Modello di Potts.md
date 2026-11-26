---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Potts model", "modello di Ising", "Ising model", "modello autologistico", "autologistic model", "MRF per variabili categoriche"]
tags: [competenza, area/statistica]
---

# Modello di Potts

> MRF per etichette categoriche in cui ogni variabile tende ad assumere lo stesso valore dei vicini; per $K=2$ è il modello di Ising della fisica.

## Definizione / enunciato
Con $y_i\in\{1,2,\dots,K\}$, la probabilità che $y_i=k$ cresce se i vicini sono uguali a $k$. Si parte direttamente dalla congiunta in forma di distribuzione di Gibbs:
$$f(\mathbf y)\propto\exp\Bigl(\rho\sum_{\substack{i<j\\i\sim j}}\mathbf 1(y_i=y_j)\Bigr).$$
Il caso $K=2$ è il **modello di Ising**.

## Formule chiave
Costante di normalizzazione:
$$\sum_{l_1=1}^K\sum_{l_2=1}^K\cdots\sum_{l_n=1}^K\exp\Bigl(\rho\sum_{\substack{i<j\\i\sim j}}\mathbf 1(l_i=l_j)\Bigr),$$
una somma su $K^n$ configurazioni, "particolarmente complicata".

## Intuizione
Ogni coppia di vicini con la stessa etichetta aggiunge $\rho$ all'esponente: con $\rho$ grande le configurazioni omogenee a chiazze sono favorite. La congiunta è già nella forma del teorema di Hammersley-Clifford, con potenziali solo sulle coppie di vicini, quindi è un MRF per costruzione.

## Come si usa
La full conditional di $y_i$ dipende solo dai vicini e si campiona facilmente (nel notebook del corso un Gibbs sampler `potts_gibbs` in R), mentre la verosimiglianza completa resta intrattabile per la costante.

## Nei corsi
- **Statistica computazionale** (magistrale): "Autologistico e Potts Model". Fonti: `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 28); notebook `magistrale/Statistica computazionale/auto_modelli_MRF_CAR_R.ipynb` (codice).

## Prerequisiti
- [[Teorema di Hammersley-Clifford]]: la forma di Gibbs garantisce la proprietà di Markov

## Collegati
- [[Markov random field]]: caso categorico
- [[Gibbs sampler]]: campionamento sito per sito dalle full conditional
- [[Kernel di una densità]]: si conosce solo il kernel, non la costante
