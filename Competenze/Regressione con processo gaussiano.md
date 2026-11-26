---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["GP regression", "regressione GP bayesiana", "modello gerarchico con processo gaussiano", "previsione di un processo gaussiano", "GP prediction", "funzione latente g(x)"]
tags: [competenza, area/statistica]
---

# Regressione con processo gaussiano

> Per stimare una funzione $g$ sconosciuta di una covariata, la si tratta come variabile aleatoria con un processo gaussiano come prior; la previsione in un punto nuovo si ottiene dalla normale condizionata.

## Definizione / enunciato
Modello generale $E(y_i)=\mu+\sum_jg_j(x_{i,j})+\varepsilon_i$ con $g_j$ funzioni di covariate, tempo o spazio. Con una sola covariata e $w_i=g(x_i)$:
$$y_i\mid w_i\sim N(\mu+w_i,\sigma^2),\qquad\mathbf w\sim N(\mathbf 0,\Sigma),$$
cioè $y(x)=\mu+w(x)+\varepsilon(x)$ con $w(x)\sim GP(0,C)$. $\Sigma$ libera avrebbe $n(n+1)/2$ parametri: si impone una covarianza che cresce avvicinando i punti. Costruzione condizionata (dati ordinati per $x$):
$$w_i\mid w_{i-1}\sim N\Bigl(\exp(-\phi|x_i-x_{i-1}|)w_{i-1},\ \frac{1-\exp(-2\phi|x_i-x_{i-1}|)}{2\phi}\tau^2\Bigr),\quad w_1\sim N(0,10000),$$
con prior $\sigma^2,\tau^2\sim IG(1,1)$, $\mu\sim N(0,10000^2)$, $\phi\sim U\bigl(\frac3{\max\text{dist}},\frac3{\min\text{dist}}\bigr)$.

## Formule chiave
**Previsione** in $x^*$ non osservato: $w(x^*)$ è indipendente da $\mathbf y$ dato $\mathbf w$, e
$$\begin{pmatrix}\mathbf w\\w(x^*)\end{pmatrix}\Big|\boldsymbol\theta\sim N\left(\begin{pmatrix}\mathbf 0\\0\end{pmatrix},\begin{pmatrix}\Sigma_w&\Sigma_{w,w^*}'\\\Sigma_{w,w^*}&\tau^2\end{pmatrix}\right),$$
$$w(x^*)\mid\boldsymbol\theta,\mathbf w\sim N\bigl(\Sigma_{w,w^*}\Sigma_w^{-1}\mathbf w,\ \tau^2-\Sigma_{w,w^*}\Sigma_w^{-1}\Sigma_{w,w^*}'\bigr),$$
con $[\Sigma_w]_{j,k}=\tau^2\exp(-\phi|x_j-x_k|)$ e $[\Sigma_{w,w^*}]_j=\tau^2\exp(-\phi|x_j-x^*|)$. Il campione $b$-esimo si ottiene simulando da $w(x^*)\mid\boldsymbol\theta^b,\mathbf w^b$, poi $y(x^*)$ dal modello di osservazione.

## Intuizione
Nel DAG ogni $y(x_i)$ dipende dal proprio $w(x_i)$, e i $w$ dipendono tra loro; marginalizzando rispetto al processo le $y$ diventano direttamente dipendenti tra loro. Lavorare con le condizionate rende il modello facile da implementare (anche con un MCMC scritto a mano). Nelle slide si distingue la banda della media $\mu+w(x)$ da quella dei dati (quantili della normale troncata mediati sui campioni).

## Come si usa
Dati ISIT di bioluminescenza vs profondità (stagione 2, profondità in $[0,1]$), stimati in STAN; dati simulati da $GP(\sin(2\pi t),0.1^2)$ con $n=40$ e covarianza esponenziale o Cauchy. Tre modelli confrontati col WAIC (558.948, 490.3879, 437.4644): varianza costante, varianza $\sigma^2\exp(-\eta x)$, e normale troncata in 0 con varianza non costante. Parametri della covarianza fissati per ridurre il costo dell'inversione.

## Nei corsi
- **Statistica computazionale** (magistrale): "Un modello generale" e "Applicazione". Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 3-11, 26-42); notebook `magistrale/Statistica computazionale/processi_gaussiani_GP_R.ipynb`.

## Prerequisiti
- [[Processo gaussiano]]: prior sulla funzione
- [[Modello gerarchico bayesiano]]: dati dato latente, latente dato iperparametri
- [[Condizionamento di un vettore gaussiano]]: formula della previsione

## Porta a
- [[Modello di Poisson spaziale]]: GP dentro un modello per conteggi

## Collegati
- [[Distribuzione predittiva a posteriori]]: previsione integrando sui campioni
- [[Ottimizzazione surrogata]]: kriging come modello surrogato (Ricerca operativa)
- [[Modello AR(1)]]: la costruzione condizionata è un AR(1) a passi irregolari
- [[Funzioni di covarianza stazionarie]]: esponenziale e Cauchy
