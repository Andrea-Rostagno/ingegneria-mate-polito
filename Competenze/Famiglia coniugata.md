---
tipo: competenza
area: statistica
corsi: [Modelli statistici, Statistica computazionale]
livello: [magistrale]
aliases: ["conjugate prior", "prior coniugata", "famiglia coniugata", "aggiornamento bayesiano", "Bayesian updating", "statistica bayesiana con carta e penna", "Gamma-precisione", "nucleo di una densità"]
tags: [competenza, area/statistica]
---

# Famiglia coniugata

> Una famiglia di prior è coniugata a un modello dei dati se la posteriori resta nella stessa famiglia: l'aggiornamento bayesiano si riduce a un aggiornamento dei parametri, fattibile a mano.

## Definizione / enunciato
Una famiglia $\mathcal F$ di distribuzioni per $\theta$ è **coniugata** al modello $f(x\mid\theta)$ se, per ogni prior in $\mathcal F$ e ogni campione, la posteriori appartiene a $\mathcal F$; il passaggio dai parametri della prior a quelli della posteriori è l'**aggiornamento bayesiano** (libro, cap. 3, Def. 3.7). Lo strumento è Bayes "ridotto all'osso" (Teorema 3.1):
$$\pi(\theta\mid x_1,\dots,x_n)\propto\pi(\theta)\,L(\theta;x_1,\dots,x_n),$$
dove si eliminano i fattori che non contengono $\theta$ e si riconosce il **nucleo** di una densità nota.

## Formule chiave
Quadro d'insieme (libro, tab. `c03-coniugate`, Gamma forma-tasso, $s=\sum x_i$):

| dati | parametro | prior | posteriori |
|---|---|---|---|
| $\mathrm{Bern}(p)$ | $p$ | $\mathrm{Beta}(a,b)$ | $\mathrm{Beta}(a+s,\,b+n-s)$ |
| $\mathrm{Bin}(m,p)$, $n$ oss. | $p$ | $\mathrm{Beta}(a,b)$ | $\mathrm{Beta}(a+s,\,b+nm-s)$ |
| $N(\mu,1/\tau)$, $\tau$ nota | $\mu$ | $N(\mu_0,1/\tau_0)$ | $N\bigl(\frac{\tau_0\mu_0+\tau s}{\tau_0+n\tau},\frac1{\tau_0+n\tau}\bigr)$ |
| $N(\mu,1/\tau)$, $\mu$ nota | $\tau$ | $\mathrm{Gamma}(a,b)$ | $\mathrm{Gamma}\bigl(a+\frac n2,\,b+\frac12\sum(x_i-\mu)^2\bigr)$ |
| $\mathrm{Pois}(\lambda)$ | $\lambda$ | $\mathrm{Gamma}(\alpha,\beta)$ | $\mathrm{Gamma}(\alpha+s,\,\beta+n)$ |
| $\mathrm{Esp}(\lambda)$ | $\lambda$ | $\mathrm{Gamma}(\alpha,\beta)$ | $\mathrm{Gamma}(\alpha+n,\,\beta+s)$ |

## Intuizione
I parametri della prior si comportano come "osservazioni fittizie" che si sommano a quelle vere; con più dati il loro peso relativo svanisce.

## Come si usa
Ricetta del libro: (1) scrivere prior e verosimiglianza, (2) tenere solo i fattori in $\theta$ (non si può eliminare $e^{-n\lambda}$ quando il parametro è $\lambda$), (3) riconoscere il nucleo, (4) leggere i parametri e calcolare media, moda, intervallo di credibilità. Senza coniugatezza si simula con MCMC; il campionamento di Gibbs usa proprio le condizionate complete coniugate (normale per $\mu$, Gamma per $\tau$).

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 3 (Teorema 3.1, Def. 3.7, Prop. 3.18, §3.9, pp. 39-52); la coppia Dirichlet-multinomiale è nel cap. 6. Fonti: `Libri/Modelli statistici/capitoli/cap03.tex`; `magistrale/Modelli statistici/251008 Statistica Bayesiana con carta e penna.pdf` (manoscritto).
- **Statistica computazionale** (magistrale): quando $f(\theta\mid\mathbf y)$ è una distribuzione nota si dice che prior e verosimiglianza sono coniugate (tabelle prese da Wikipedia, BAY p. 20-23). Esempi svolti col kernel: Beta-binomiale, $\theta\mid y\sim\mathrm{Beta}(y+a,n+b-y)$; regressione $\mathbf y\sim N_n(\mathbf X\boldsymbol\beta,\sigma^2\mathbf I)$ con $\boldsymbol\beta\sim N_p(\mathbf M,\mathbf V)$ e $\sigma^2$ nota, $\boldsymbol\beta\mid\mathbf y\sim N_p(\mathbf M_p,\mathbf V_p)$, possibile in forma chiusa "solo perché abbiamo assunto $\sigma^2$ nota". Nei modelli più ricchi la coniugatezza resta a livello di **full conditional** (IG per $\sigma^2$, Dirichlet per i pesi di una mistura), e se $\sigma^2\sim G(a,b)$ invece di $IG$ la full conditional non ha forma nota. Fonti: `magistrale/Statistica computazionale/Modelli Bayesiani (1).pdf` (p. 4-6, 19-31); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 20, 29).

## Prerequisiti
- [[Stima bayesiana]]: prior, verosimiglianza, posteriori
- [[Funzione di verosimiglianza]]: il fattore che aggiorna la prior

## Porta a
- [[Coniugatezza Beta-Bernoulli]]: caso binario
- [[Coniugatezza normale-normale]]: media di una normale
- [[Coniugatezza Gamma-Poisson]]: conteggi
- [[Coniugatezza Dirichlet-multinomiale]]: dati categorici
- [[Algoritmo di Metropolis-Hastings]]: Gibbs sfrutta le condizionate coniugate

## Collegati
- [[Distribuzione Gamma]]: prior per tassi e precisioni
- [[Distribuzione Beta]]: prior per probabilità
- [[Kernel di una densità]]: la posteriori si riconosce dal kernel, senza calcolare $f(y)$ (Statistica computazionale)
- [[Regressione lineare bayesiana]]: caso normale con $\sigma^2$ nota e full conditional coniugate (Statistica computazionale)
