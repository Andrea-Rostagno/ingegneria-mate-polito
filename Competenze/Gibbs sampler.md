---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Gibbs sampler", "campionatore di Gibbs", "algoritmo di Gibbs", "Gibbs a blocchi", "blocked Gibbs"]
tags: [competenza, area/statistica]
---

# Gibbs sampler

> Algoritmo MCMC che aggiorna a turno ogni blocco di parametri campionandolo dalla sua full conditional, dati i valori più recenti degli altri; la posteriori è la distribuzione stazionaria della catena.

## Definizione / enunciato
Si vuole campionare da $f(\boldsymbol\theta\mid\mathbf y)$ con $\boldsymbol\theta$ partizionato in $\boldsymbol\theta_1,\dots,\boldsymbol\theta_p$ (anche multivariati; di solito disgiunti, ma basta che la loro unione sia $\boldsymbol\theta$). Il tempo della catena è l'iterazione $b$.

**Algoritmo** (MCMC p. 8). Inizializza $b=0$ e $\boldsymbol\theta_1^0,\dots,\boldsymbol\theta_p^0$ con valori "possibili"; ripeti:
1. $b\leftarrow b+1$;
2. campiona $\boldsymbol\theta_1^b$ da $\boldsymbol\theta_1\mid\boldsymbol\theta_2^{b-1},\dots,\boldsymbol\theta_p^{b-1},\mathbf y$;
3. campiona $\boldsymbol\theta_2^b$ da $\boldsymbol\theta_2\mid\boldsymbol\theta_1^b,\boldsymbol\theta_3^{b-1},\dots,\boldsymbol\theta_p^{b-1},\mathbf y$;
4. ... fino a $\boldsymbol\theta_p^b$ da $\boldsymbol\theta_p\mid\boldsymbol\theta_1^b,\dots,\boldsymbol\theta_{p-1}^b,\mathbf y$;

finché $b<B$. I $\boldsymbol\theta^b$ sono campioni **dipendenti** da $f(\boldsymbol\theta\mid\mathbf y)$. A ogni passo si usano sempre i valori generati per ultimi.

## Formule chiave
Stazionarietà della posteriori, con due blocchi (MCMC p. 6-7):
$$\int\!\!\int f(\theta_1^b,\theta_2^b\mid\mathbf y)f(\theta_1^{b+1}\mid\theta_2^b,\mathbf y)f(\theta_2^{b+1}\mid\theta_1^{b+1},\mathbf y)\,d\theta_2^bd\theta_1^b=f(\theta_1^{b+1},\theta_2^{b+1}\mid\mathbf y):$$
integrando prima $\theta_1^b$ resta $f(\theta_2^b\mid\mathbf y)$, poi $\int f(\theta_1^{b+1}\mid\theta_2^b,\mathbf y)f(\theta_2^b\mid\mathbf y)d\theta_2^b=f(\theta_1^{b+1}\mid\mathbf y)$, e infine il prodotto con $f(\theta_2^{b+1}\mid\theta_1^{b+1},\mathbf y)$ dà la congiunta.

## Intuizione
Unisce due idee: Monte Carlo (studiare una distribuzione con i suoi campioni) e catene di Markov (costruire una catena con stazionaria assegnata). Qualunque sia il punto di partenza la catena arriva prima o poi alla posteriori, senza mai calcolarne la costante.

## Come si usa
Esempio regressivo (MCMC p. 27-29): con $\boldsymbol\beta\sim N_p(\mathbf M,\mathbf V)$ e $\sigma^2\sim IG(a,b)$ si alternano $\boldsymbol\beta\mid\sigma^2,\mathbf y\sim N_p(\mathbf M_p,\mathbf V_p)$ e $\sigma^2\mid\boldsymbol\beta,\mathbf y\sim IG\bigl(\frac n2+a,\frac12(\mathbf y-\mathbf X\boldsymbol\beta)^T(\mathbf y-\mathbf X\boldsymbol\beta)+b\bigr)$. Dopo il campionamento si controllano traceplot, burn-in, thin e ACF.

## Nei corsi
- **Statistica computazionale** (magistrale): primo algoritmo MCMC del corso, usato per regressione, misture, HMM. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 2-8, 15-19, 27-29); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (Gibbs per la mistura gaussiana in R).

## Prerequisiti
- [[Full conditional]]: le distribuzioni da cui si campiona
- [[Catena di Markov a tempo discreto]]: la sequenza delle iterazioni
- [[Distribuzione stazionaria di una DTMC]]: la posteriori è la stazionaria

## Porta a
- [[Algoritmo di Metropolis-Hastings]]: passo Metropolis quando una full conditional non è campionabile
- [[Dimensione campionaria effettiva]]: valutazione della dipendenza tra i campioni
- [[Modello mistura finita]]: stima bayesiana con full conditional coniugate

## Collegati
- [[Regressione lineare bayesiana]]: esempio classico a due blocchi
- [[Hamiltonian Monte Carlo]]: alternativa quando i blocchi sono grandi
- [[Metodo Monte Carlo]]: medie lungo la catena al posto di campioni indipendenti
- [[Bilancio dettagliato]]: i passi Metropolis inseriti nel Gibbs lasciano invariata la full conditional perché lo rispettano
