---
tipo: competenza
area: statistica
corsi: [Modelli statistici, Statistica computazionale]
livello: [magistrale]
aliases: ["posterior predictive distribution", "distribuzione predittiva", "predittiva a posteriori", "controllo predittivo a posteriori", "posterior predictive check", "p-value predittivo", "beta-binomiale", "beta-binomial", "Dirichlet-multinomiale", "previsione plug-in"]
tags: [competenza, area/statistica]
---

# Distribuzione predittiva a posteriori

> La distribuzione di un'osservazione futura data l'esperienza passata, ottenuta mediando il modello dei dati rispetto alla posteriori: tiene conto dell'incertezza sul parametro.

## Definizione / enunciato
$$f(x_{\text{new}}\mid x_1,\dots,x_n)=\int f(x_{\text{new}}\mid\theta)\,\pi(\theta\mid x_1,\dots,x_n)\,d\theta .$$
La formula usa l'indipendenza condizionata di $X_{\text{new}}$ dai dati passati dato $\theta$, una forchetta nel DAG (libro, cap. 3, §3.6). La previsione **plug-in** $f(x_{\text{new}}\mid\hat\theta)$ ignora l'incertezza su $\theta$ ed è meno dispersa.

## Formule chiave
- Beta-Bernoulli: con posteriori $\mathrm{Beta}(a',b')$, il numero $K$ di successi su $m$ nuove prove è **beta-binomiale**, $P(K=k\mid\text{dati})=\binom mk\frac{B(a'+k,\,b'+m-k)}{B(a',b')}$; per $m=1$ è la media a posteriori (regola di Laplace).
- Gamma-Poisson: binomiale negativa con media $\alpha'/\beta'$ e varianza $\frac{\alpha'}{\beta'}(1+\frac1{\beta'})$.
- Dirichlet-multinomiale (cap. 6): legge marginale dei conteggi quando $\boldsymbol\pi\sim\mathrm{Dir}(\boldsymbol\alpha)$.

## Intuizione
La predittiva ha la stessa media della previsione plug-in ma code più pesanti: non sapere esattamente il parametro aggiunge variabilità. Serve anche a controllare il modello: dati simulati dal modello stimato devono somigliare ai dati veri.

## Come si usa
- Graffi sulle carrozzerie (libro, Es. `c03-predittiva-poisson`): posteriori $\mathrm{Gamma}(18,11)$, $P(X_{\text{new}}=0\mid\text{dati})=(11/12)^{18}\approx0.209$ contro $e^{-1.6}\approx0.202$; media predittiva $\approx1.636$, varianza $\approx1.785$.
- **Controllo predittivo a posteriori** (cap. 4, §4.7): si prendono $R$ valori $\theta^{(r)}$ dalla catena MCMC, si simula per ciascuno un dataset replicato $\mathbf y^{\text{rep},(r)}$, si confronta una statistica $T$ (massimo, asimmetria, proporzione di zeri) con il **p-value predittivo** $P(T(\mathbf y^{\text{rep}})\ge T(\mathbf y)\mid\text{dati})$; valori vicini a 0 o 1 segnalano un aspetto che il modello non riproduce.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 3 §3.6 e §3.8, cap. 4 §4.7, cap. 6 §6.6. Fonti: `Libri/Modelli statistici/capitoli/cap03.tex`, `cap04.tex`, `cap06.tex`.
- **Statistica computazionale** (magistrale): previsione di una nuova osservazione $f(y_0\mid\mathbf y)=\int f(y_0\mid\theta_1,\dots,\theta_p,\mathbf y)f(\theta_1,\dots,\theta_p\mid\mathbf y)$, simulata campione per campione dai draw MCMC. Due strade equivalenti: campionare dopo la stima da $f(\mathbf y_0\mid\mathbf y_{obs})=\int f(\mathbf y_0,\theta\mid\mathbf y_{obs})d\lambda(\theta)$, oppure trattare $\mathbf y_0$ come dati mancanti e stimare $f(\mathbf y_0,\theta\mid\mathbf y_{obs})$, i cui campioni di $\mathbf y_0$ provengono dalla marginale. Nei processi gaussiani: $f(w(x^*)\mid\mathbf y)=\int f(w(x^*)\mid\theta,\mathbf w)f(\theta,\mathbf w\mid\mathbf y)$ perché $w(x^*)$ è indipendente da $\mathbf y$ dato $\mathbf w$, poi $y(x^*)$ dal modello di osservazione; quantili della normale troncata mediati sui campioni per la banda al 95% dei dati. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 47, 51-53); `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 38-42).

## Prerequisiti
- [[Stima bayesiana]]: la posteriori su cui si media
- [[Indipendenza condizionata nelle reti bayesiane]]: dati futuri e passati indipendenti dato $\theta$

## Porta a
- [[Sovradispersione]]: la mistura Poisson-Gamma come modello di conteggi
- [[Continuous ranked probability score]]: confronto tra la predittiva e il valore osservato (Statistica computazionale)
- [[Regressione con processo gaussiano]]: previsione del processo in un punto non osservato (Statistica computazionale)
- [[Metodi di stima dell'accuratezza]]: cross validation prevedendo i dati tenuti da parte (Statistica computazionale)

## Collegati
- [[Coniugatezza Beta-Bernoulli]]: predittiva beta-binomiale
- [[Coniugatezza Gamma-Poisson]]: predittiva binomiale negativa
- [[Previsione nella regressione lineare]]: analogo frequentista, l'intervallo di predizione
- [[Full conditional]]: i dati mancanti si campionano come parametri, dalla loro full conditional (Statistica computazionale)
