---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Prova finale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["maximum likelihood estimator", "MLE", "massima verosimiglianza", "maximum likelihood", "stima di massima verosimiglianza", "invarianza dell'MLE", "invariance of the MLE", "efficienza asintotica"]
tags: [competenza, area/statistica]
---

# Stimatore di massima verosimiglianza

> $\hat\theta(\mathbf X)$ è il valore del parametro che massimizza la verosimiglianza dei dati osservati; appartiene sempre a $\Theta$, è funzione della statistica sufficiente, invariante per trasformazioni e asintoticamente efficiente.

## Definizione / enunciato
Per ogni campione $\mathbf x$ sia $\hat\theta(\mathbf x)$ un valore in cui $L(\theta|\mathbf x)$ raggiunge il massimo in $\theta$. Lo **stimatore di massima verosimiglianza** (MLE) è $\hat\theta(\mathbf X)$.
Se $L$ è differenziabile i candidati risolvono $\frac{\partial}{\partial\theta_i}\log L(\theta|\mathbf x)=0$; vanno poi verificati il massimo (derivate seconde o ragionamenti sulle prime) e i bordi del dominio.

## Formule chiave
- $\mathcal N(\mu,1)$: $\frac{d}{d\mu}\log L=\sum(x_i-\mu)=0\Rightarrow\hat\mu=\bar x$, derivata seconda $-n<0$.
- $\mathcal N(\mu,\sigma^2)$: $\hat\mu=\bar X$, $\hat\sigma^2=\frac1n\sum(X_i-\bar X)^2$.
- $\mathcal P(\lambda)$: $\log L=-n\lambda+\log\lambda\sum x_i-\sum\log x_i!$, $\hat\lambda=\bar x$.
- **Invarianza**: l'MLE di $\tau(\theta)$ è $\tau(\hat\theta)$ (es. MLE di $\log\lambda$ è $\log\bar X$).
- **Asintotica** (senza dimostrazione): $\hat\theta_n\approx N(\theta,I_n^{-1})$, asintoticamente non distorto e a varianza minima (efficiente).

## Intuizione
Si sceglie il parametro sotto cui i dati osservati sarebbero stati più probabili. A differenza del metodo dei momenti lo stimatore sta sempre in $\Theta$; se $\Theta=\{0,1\}$ basta confrontare $L(0|\mathbf x)$ e $L(1|\mathbf x)$.

## Come si usa
Per la fattorizzazione $L(\theta|\mathbf x)\propto L_T(\theta|T(\mathbf x))$: massimizzare la verosimiglianza della statistica sufficiente ($\bar x\sim\mathcal N(\mu,1/n)$) dà lo stesso MLE. Spesso non esiste forma chiusa (Gamma: $\Gamma(a)$ dentro $\log L$): si massimizza numericamente, in R con `optim` sulla log-verosimiglianza cambiata di segno, riparametrizzando $(\log a,\log b)$. In regressione con errori normali l'MLE dei coefficienti coincide con i minimi quadrati.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Massima verosimiglianza VI-XXI, Cramer Rao VII); codice in `statistica/R/Stime Puntuali Vers 1.0.0.R` (chunk ottimizzazione della massima verosimiglianza).
- **Prova finale** (triennale): stima delle marginali delle serie Open e Close del DAX ($\hat\mu,\hat\sigma$ della normale e $\hat\nu,\hat\mu,\hat\sigma$ della t, con `stats.norm.fit` e `stats.t.fit`) e dei parametri delle copule. La tesi ne elenca vantaggi (stime consistenti e asintoticamente efficienti, supporto software) e limiti (ottimizzazione iterativa, ipotesi di modello corretto, sensibilità agli outlier, validità solo asintotica). Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4.1, p. 31; §5.2.1, pp. 42-44).
- **Modelli statistici** (magistrale): $\hat\theta=\arg\max L=\arg\max\ell$, equazione di verosimiglianza $\ell'(\theta)=0$ (libro, cap. 2, Def. 2.3). Esempi: sondaggio con 412 voti su 1000, $\hat p=s/n=0.412$; graffi su 10 carrozzerie, $\hat\lambda=\bar x=1.6$ e, per invarianza, $P(X=0)$ stimata con $e^{-1.6}$. Poi: nel modello lineare normale l'MLE di $\boldsymbol\beta$ coincide con i minimi quadrati, mentre $\hat\sigma^2_{\mathrm{ML}}=\mathrm{RSS}/n$ è distorto (cap. 9); nei GLM si calcola con il Fisher scoring ed è asintoticamente $N_p(\boldsymbol\beta,\mathbf J^{-1})$ (cap. 17). Fonti: `Libri/Modelli statistici/capitoli/cap02.tex` (pp. 25-26), `cap09.tex`, `cap17.tex`.

## Prerequisiti
- [[Funzione di verosimiglianza]]: funzione da massimizzare
- [[Stimatore puntuale]]: è uno stimatore
- [[Teorema di fattorizzazione]]: l'MLE dipende solo da $T(\mathbf x)$

## Porta a
- [[Regressione lineare]]: stima dei coefficienti con errori gaussiani
- [[Test del rapporto di verosimiglianza]]: MLE vincolato e non vincolato
- [[Massima verosimiglianza per copule]]: applicazione ai parametri di dipendenza
- [[Metodo IFM]]: MLE delle marginali nel primo stadio
- [[Fisher scoring]]: calcolo iterativo dell'MLE nei GLM (Modelli statistici)

## Collegati
- [[Metodo dei momenti]]: confronto sulle stime della Gamma
- [[Metodo delta]]: normalità asintotica di funzioni dello stimatore
- [[Disuguaglianza di Cramér-Rao]]: l'MLE raggiunge asintoticamente il limite
- [[Punti critici in più variabili]]: condizioni del primo e secondo ordine
