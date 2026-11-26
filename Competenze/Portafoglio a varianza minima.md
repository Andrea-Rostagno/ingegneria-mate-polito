---
tipo: competenza
area: finanza
corsi: [Prova finale]
livello: [triennale]
aliases: ["minimum variance portfolio", "global minimum variance portfolio", "portafoglio di minima varianza", "GMV", "minimizzazione del rischio di portafoglio"]
tags: [competenza, area/finanza]
---

# Portafoglio a varianza minima

> Il portafoglio che minimizza la volatilità $\sigma_p=\sqrt{w^T\Sigma w}$ sotto il vincolo di bilancio, indipendentemente dal rendimento atteso.

## Definizione / enunciato
Tesi §6.1.2:
$$\min_w\ \sigma_p(w)=\sqrt{w^T\Sigma w}\qquad\text{con}\quad \sum_iw_i=1,\ \ 0\le w_i\le1 .$$
È il portafoglio da usare "se l'obiettivo principale è minimizzare il rischio, indipendentemente dal rendimento atteso"; una varianza elevata indica maggiore dispersione dei rendimenti attorno alla media, quindi più incertezza e più rischio per l'investitore.

## Formule chiave
In Python (`min_variance`): si minimizza `portfolio_volatility(weights, cov_matrix)` con `SLSQP`, gli stessi vincoli e limiti del portafoglio a massimo Sharpe e punto iniziale $(0.5,0.5)$. Per il portafoglio trovato si riportano rendimento, rischio e Sharpe associato.

## Intuizione
Rinuncia a rendimento in cambio del rischio più basso possibile; nel grafico della frontiera efficiente (fig. 6.1) è l'asterisco giallo. Minimizzare $\sigma_p$ o $\sigma_p^2$ è equivalente, perché la radice è crescente.

## Come si usa
Con i parametri della tesi (tab. 6.2): 50% Open e 50% Close, rendimento atteso 7.25%, rischio 0.79%, Sharpe 6.6461. Confronto con il massimo Sharpe (7.50%, 0.81%, 6.7901): il portafoglio a massimo Sharpe ha rendimento atteso superiore, quello a varianza minima "in compenso presenta un rischio minore". La scelta dipende dalla propensione al rischio dell'investitore.
Risultato dubbio (da verificare sul PDF): i pesi 50/50 coincidono con il punto iniziale $(0.5,0.5)$ dell'ottimizzatore. Rieseguendo la stessa chiamata `SLSQP` con i parametri della tab. 6.1, l'algoritmo si ferma dopo una sola iterazione (la funzione obiettivo vale circa 0.008 e la tolleranza predefinita è soddisfatta subito), mentre una ricerca su griglia dei pesi trova una volatilità più bassa con pesi diversi da 50/50 (controllo mio). Il massimo Sharpe (100% Close) è invece confermato dallo stesso controllo.

## Nei corsi
- **Prova finale** (triennale): §6.1.2 "Ottimizzazione del portafoglio a varianza minima". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 96-99); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/long-portfolio-simulations.py` (`min_variance`).

## Prerequisiti
- [[Rischio e rendimento di un portafoglio]]: funzione obiettivo $\sigma_p$
- [[Matrice di covarianza]]: $\Sigma$ definita positiva

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Indice di Sharpe]]: portafoglio alternativo
- [[Programmazione quadratica]]: minimizzare $w^T\Sigma w$ con vincoli lineari è un problema quadratico
- [[Varianza]]: misura di rischio minimizzata
