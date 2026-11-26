---
tipo: competenza
area: statistica
corsi: [Statistica computazionale, Modelli statistici]
livello: [magistrale]
aliases: ["hierarchical model", "modello gerarchico", "modello multilivello", "multilevel model", "variabili latenti", "latent variables", "iperparametri"]
tags: [competenza, area/statistica]
---

# Modello gerarchico bayesiano

> Modello a più livelli in cui i parametri di un livello dipendono da quelli del livello superiore: dati, processo latente, iperparametri. Struttura comune a quasi tutti i modelli di Statistica computazionale.

## Definizione / enunciato
"Un modello gerarchico in statistica è un modello che incorpora più livelli di parametri, riflettendo una struttura annidata o multilivello nei dati": i parametri a un livello inferiore dipendono da quelli a un livello superiore, creando una gerarchia di variabili casuali; utile per dati con dipendenze tra gruppi o cluster. Struttura classica a 3 livelli:
- **Livello 1, dati osservati**: $\mathbf y\mid\mathbf w,\boldsymbol\theta_y\sim F_y(\mathbf w,\boldsymbol\theta_y)$;
- **Livello 2, variabili latenti / processi / livello di gruppo**: $\mathbf w\mid\boldsymbol\theta_w\sim F_w(\boldsymbol\theta_w)$;
- **Livello 3, iperparametri / parametri globali**: $(\boldsymbol\theta_y,\boldsymbol\theta_w)\sim F_\theta(\boldsymbol\theta)$.

## Formule chiave
Esempi del corso:
- serie con latente AR: $y_t=\beta_0+\beta_1t+w_t+\varepsilon_t$, $w_t\mid w_{t-1}\sim N(\alpha w_{t-1},\tau^2)$;
- processo gaussiano: $y_i\mid w_i\sim N(\mu+w_i,\tau^2)$, $\mathbf w\sim N(\mathbf 0,\Sigma)$;
- movimento animale: $\mathbf s_{i,t+1}\mid\mathbf s_{i,t},z_{i,t}\sim N(\boldsymbol\mu_i+\alpha_{i,z_{i,t}}\mathbf s_{i,t},\sigma_{i,z_{i,t}}\mathbf I)$, $z_{i,t}\sim\mathrm{Disc}(\boldsymbol\pi)$, che è anche un modello mistura.

## Intuizione
Le **variabili latenti** sono aleatorie non osservate, usate per facilitare l'implementazione o per definire densità più flessibili; possono rappresentare concetti "reali" (il comportamento di un animale: dormire, cacciare, camminare) o no. I principi guida sono parsimonia e interpretabilità dei parametri: "all models are wrong, but some are useful" (Box).

## Come si usa
Si scrive il modello livello per livello come prodotto di condizionate, lo si rappresenta con un DAG, si ricavano le full conditional e si stima con MCMC. Le scelte vanno discusse: indipendenza tra variabili, ordine delle dipendenze, varianze comuni, tipo di distribuzione (la pioggia ha massa in zero).

## Nei corsi
- **Statistica computazionale** (magistrale): "Il modello statistico e sua rappresentazione grafica", con gli esempi climatico (temperature e precipitazioni su 2468 punti per 365 giorni) e biologico (due cani pastore). Fonti: `magistrale/Statistica computazionale/modelli grafici.pdf` (p. 7, 17-36); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 9-11).
- **Modelli statistici** (magistrale): modello bayesiano con prior a più livelli: dati $y_{ij}\mid\boldsymbol\theta_i$, parametri di gruppo $\boldsymbol\theta_i\mid\boldsymbol\phi$ i.i.d., iperparametri $\boldsymbol\phi\sim\pi(\boldsymbol\phi)$, congiunta $\pi(\boldsymbol\phi)\prod_i[\pi(\boldsymbol\theta_i\mid\boldsymbol\phi)\prod_jf(y_{ij}\mid\boldsymbol\theta_i)]$ secondo il DAG (libro, cap. 14, Def. 14.6). È la versione bayesiana del modello a effetti misti: $b_0^i\sim N(b_0,\tau^2_{b_0})$, $b_1^i\sim N(b_1,\tau^2_b)$ con iperprior $N(0,100^2)$ e inverse-Gamma $IG(1,1)$ sulle varianze, confronto "parametri individuali" contro "effetti random", modello JAGS con cicli annidati su pazienti e misure. Lo shrinkage delle stime di gruppo è lo stesso meccanismo della media a posteriori come media pesata. Fonti: `Libri/Modelli statistici/capitoli/cap14.tex` (§14.6, p. 241); `magistrale/Modelli statistici/codici/251120 Note Mixed Models.pdf` (p. 7).

## Prerequisiti
- [[Distribuzione condizionata]]: ogni livello è una condizionata
- [[Stima bayesiana]]: anche i parametri globali hanno una prior

## Porta a
- [[Rete bayesiana]]: rappresentazione con un DAG
- [[Regressione con processo gaussiano]]: livello latente gaussiano
- [[Modello mistura finita]]: livello latente discreto
- [[Linguaggio JAGS]]: implementazione con cicli annidati (Modelli statistici)

## Collegati
- [[Full conditional]]: si ricavano dalla gerarchia
- [[Identificabilità di un modello statistico]]: i modelli a più livelli devono restare identificabili
- [[Modello lineare a effetti misti]]: controparte frequentista con effetti casuali normali (Modelli statistici)
- [[Correlazione intraclasse]]: correlazione indotta dal livello di gruppo (Modelli statistici)
