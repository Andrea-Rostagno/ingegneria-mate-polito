---
tipo: competenza
area: statistica
corsi: [Prova finale, Modelli statistici, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["Bayesian estimation", "inferenza bayesiana", "Bayesian inference", "statistica bayesiana (stima)", "distribuzione a posteriori", "posterior distribution", "distribuzione a priori", "prior distribution", "intervallo di credibilità", "credible interval", "media a posteriori", "WAIC", "LOO", "modello bayesiano", "plate notation", "intervallo HPD", "highest posterior density"]
tags: [competenza, area/statistica]
---

# Stima bayesiana

> Il parametro è trattato come aleatorio: si parte da una distribuzione a priori e la si aggiorna con la verosimiglianza dei dati, $f(\theta\mid y)\propto f(y\mid\theta)f(\theta)$; il risultato è un'intera distribuzione a posteriori.

## Definizione / enunciato
Teorema di Bayes per v.a. (anche vettoriali) $X,Y$ (tesi §5.2.7):
$$f(x\mid y)=\frac{f(y,x)}{f(y)}=\frac{f(y\mid x)f(x)}{f(y)},\qquad f(y)=\int f(y,x)\,dx .$$
Con $x=\theta$ parametri: $f(\theta\mid y)$ è la **a posteriori**, $f(y\mid\theta)$ la congiunta delle osservazioni vista come **verosimiglianza**, $f(\theta)$ la **a priori** (ciò che si sa prima del campione), $f(y)$ la costante di normalizzazione, che non dipende da $\theta$.

## Formule chiave
- Lettura "iterativa": a priori $f(x)$ $\to$ si osserva $y$ con legge $f(y\mid x)$ $\to$ conoscenza aggiornata $f(x\mid y)$.
- Sintesi della posteriori dai campioni MCMC: media, mediana, deviazione standard e **intervallo di credibilità al 95%** dato dai percentili 2.5 e 97.5 (§5.2.9).
- Confronto di modelli: WAIC (Widely Applicable Information Criterion) e LOO calcolati con `arviz`; si preferisce il WAIC più basso (§5.3.4).

## Intuizione
Al posto di una stima puntuale si ottiene una distribuzione che rappresenta l'incertezza sul parametro. Vantaggi elencati dalla tesi: integra conoscenze a priori (utile con pochi dati), aggiorna le credenze man mano che arrivano dati, gestisce modelli complessi, riduce l'overfitting con prior regolarizzanti, stima più affidabilmente i parametri di coda.

## Come si usa
Prior usate in PyMC3 per le copule (§5.3.4): gaussiana $\rho\sim\mathcal U(-0.99,0.99)$; t $\rho\sim\mathcal U(-0.99,0.99)$, $\nu\sim\mathrm{Gamma}(2,0.1)$; Clayton $\theta\sim\mathrm{Gamma}(1,1)$; Gumbel $\theta=1+\mathrm{Exp}(1)$; Frank $\theta\sim\mathcal N(0,5)$. Risultati per WAIC crescente (tab. 5.9): Gumbel 1840.24 ($\theta=1.138$), Frank 2066.28 ($\theta=-0.46$), Clayton 2270.51 ($\theta=2.154$), gaussiana 3359.99 ($\rho=0.863$); la t non ha prodotto stime. Nello script `Stima Bayesiana.py` la prior di $\rho$ è una Beta trasformata su $[-1,1]$ con parametri $1+5|r|$ e $1+5(1-|r|)$, dove $r$ è la correlazione di Pearson, e l'inferenza usa 1000 dati estratti a caso.

## Nei corsi
- **Prova finale** (triennale): §5.2.7 "Stima Bayesiana" e §5.3.4 "Stima dei parametri tramite MCMC". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 54-56, 77-85); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Stima Bayesiana.py`; `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/stimatore mcmc copule.py`.
- **Modelli statistici** (magistrale): il **modello bayesiano** è dato da $X_1,\dots,X_n\mid\theta\sim f(\mathbf x\mid\theta)$ e $\theta\sim\pi(\theta)$, con posteriori $\pi(\theta\mid\mathbf x)=\pi(\theta)f(\mathbf x\mid\theta)/\int\pi(\theta')f(\mathbf x\mid\theta')d\theta'$ (libro, cap. 2, Def. 2.11) e, "ridotto all'osso", $\pi(\theta\mid\mathbf x)\propto\pi(\theta)L(\theta)$ (cap. 3, Teorema 3.1). Plate notation per le repliche (Def. 2.13). Riassunti: media, mediana, moda (MAP) legate a funzioni di perdita; **intervallo di credibilità** $P(\ell\le\theta\le u\mid\mathbf x)=1-\alpha$, a code uguali o HPD (Def. 3.12), da non interpretare come l'intervallo di confidenza. Prior discreta sui graffi delle carrozzerie ($\lambda\in\{1,1.5,2,2.5\}$, $n=10$, $\sum x_i=16$): posteriori calcolata in tabella. Per grandi campioni le due scuole concordano. Fonti: `Libri/Modelli statistici/capitoli/cap02.tex`, `cap03.tex`; `magistrale/Modelli statistici/251001 Statistica bayesiana vs. frequentista.pdf`.
- **Statistica computazionale** (magistrale): confronto frequentista/bayesiano sul modello lineare (parametri fissi e ignoti contro $\theta$ aleatorio, che rappresenta la legge che genera il parametro o l'incertezza su di esso). Prior **non informative** o debolmente informative ($U(a,b)$, $N(0,100000)$), **improprie** (non integrano a 1 ma possono dare posteriori proprie) e **informative** ($\mathrm{Beta}(10,10)$, $N(5,0.1)$). Con prior circa costante $f(\theta)\approx c$ si ha $f(\theta\mid\mathbf y)\propto f(\mathbf y\mid\theta)=L(\theta\mid\mathbf y)$: la verosimiglianza è il kernel della posteriori e i massimi coincidono. **Aggiornamento sequenziale**: $f(\theta\mid\mathbf x_1,\mathbf x_2)=\frac{f(\mathbf x_2\mid\mathbf x_1,\theta)f(\theta\mid\mathbf x_1)}{f(\mathbf x_2\mid\mathbf x_1)}$, la posteriori dopo $\mathbf x_1$ fa da prior per $\mathbf x_2$. **Statistiche a posteriori dai campioni MCMC**: media $\frac1B\sum_b\theta_j^b$, varianza $\frac1B\sum_b(\theta_j^b)^2-\bigl(\frac1B\sum_b\theta_j^b\bigr)^2$, intervallo di credibilità $[q_l,q_U]$ con $1-\alpha=\int_{q_l}^{q_U}f(\theta_j\mid\mathbf y)d\theta_j$ dai quantili empirici; le marginali si leggono prendendo le singole componenti dei campioni congiunti. Fonti: `magistrale/Statistica computazionale/Modelli Bayesiani (1).pdf` (p. 7-9, 15-19, 32-35); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 43-47).

## Prerequisiti
- [[Formula di Bayes]]: aggiornamento da a priori ad a posteriori
- [[Funzione di verosimiglianza]]: $f(y\mid\theta)$
- [[Distribuzione condizionata]]: $f(\theta\mid y)$ è una densità condizionata

## Porta a
- [[Algoritmo di Metropolis-Hastings]]: campiona dalla posteriori senza la costante $f(y)$
- [[Famiglia coniugata]]: posteriori in forma chiusa (Modelli statistici)
- [[Distribuzione predittiva a posteriori]]: previsione di osservazioni future (Modelli statistici)
- [[Modello gerarchico bayesiano]]: prior a più livelli (Modelli statistici)
- [[Stima delle copule sul DAX]]: stime MCMC della tab. 5.12
- [[Regressione lineare bayesiana]]: confronto bayesiano-frequentista sul modello lineare (Statistica computazionale)
- [[Gibbs sampler]]: campioni dalla posteriori per media, varianza e intervalli di credibilità (Statistica computazionale)

## Collegati
- [[Stimatore di massima verosimiglianza]]: contrasto, stima puntuale senza prior
- [[Distribuzione Gamma]]: prior per $\nu$ e per il $\theta$ di Clayton
- [[Copula di Gumbel]]: migliore per WAIC
- [[Criteri di informazione AIC e BIC]]: analoghi frequentisti del WAIC
