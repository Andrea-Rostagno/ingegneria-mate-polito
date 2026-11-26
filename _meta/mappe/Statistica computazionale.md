---
tipo: meta
tags: [meta, mappa]
corso: Statistica computazionale
livello: magistrale
cartella: magistrale/Statistica computazionale
---

# Mappa delle competenze: Statistica computazionale

Mappa concettuale del corso `magistrale/Statistica computazionale` (Statistica computazionale, prof. G. Mastrantonio, Politecnico di Torino). **64 competenze: 42 nuove e 22 esistenti estese** con una sezione "Nei corsi" (Prob e statistica, Processi stocastici, Prova finale, Informatica, Matematica per l'AI, Data science, Modelli statistici). Le 64 note formano una sola componente connessa con grado minimo 2 all'interno del corso. Aree delle nuove: `statistica` 39, `probabilita` 3. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo.

**Fonti.**
- **Primarie:** i 9 PDF di slide del docente (452 pagine, tutte con testo; le formule perse da `pdftotext` sono state lette sulle pagine renderizzate). Nella colonna "fonte principale" `p. X` è la pagina del PDF. Abbreviazioni: **MC** = `monte carlo.pdf`; **BAY** = `Modelli Bayesiani (1).pdf`; **MCMC** = `Algoritmi MCMC.pdf`; **GR** = `modelli grafici.pdf`; **TSI** = `Time Series - Introduzione.pdf`; **TSM** = `Time Series Modelli.pdf`; **GP** = `Processi Gaussiani.pdf`; **AUTO** = `Auto-Modelli.pdf`; **MIX** = `modelli mistura.pdf`.
- **Solo esempi di codice:** i notebook `auto_modelli_MRF_CAR_R.ipynb`, `modelli_mistura_HMM_change_R.ipynb`, `processi_gaussiani_GP_R.ipynb`, `time_series_modelli_R.ipynb` (parafrasi delle slide generate con un assistente: contengono marcatori `contentReference`; da qui solo codice, mai formule) e lo script `esercitazioni/Monte Carlo.R` (generatore congruenziale, Box-Muller, inversa generalizzata, accept-reject in R).
- **Scartati (regola "niente esami"):** `HW1/` e `HW2/` (testi degli homework, soluzioni `.R`, relazioni `.tex`/`.pdf`, dati e figure), `esercitazioni/Lab 1 con soluzioni.pdf`, `esercitazioni/Lab 2 .pdf`, `esercitazioni/Lab 4 con soluzione.ipynb`; inoltre `.Rhistory`, `.RData`, `.vscode`, `esercitazione3.R` (vuoto), `Introduction_to_R_Complete.R`, `Standard_Base_Plots_in_R (1).R`, `comandi esempio.R`, `eserc_7_ottobre.R` (introduzione a R senza contenuti del corso).

## Metodi Monte Carlo

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Numeri pseudo-casuali (esistente) | informatica | generatore congruenziale lineare; seed | MC p. 3-5 | — | Metodo Monte Carlo; Trasformazione integrale di probabilità; Trasformazione di Box-Muller | — |
| Metodo Monte Carlo (esistente) | numerica | integrazione Monte Carlo; stimatore Monte Carlo | MC p. 7-12, 17-19 | Legge dei grandi numeri; Numeri pseudo-casuali | Campionamento per importanza; Teorema di Rao-Blackwell; Campione casuale; Gibbs sampler | Campionamento per importanza |
| Campione casuale (esistente) | statistica | f.d.r. empirica come stima Monte Carlo | MC p. 13-16 | — | Stima bayesiana | Metodo Monte Carlo |
| Teorema di Rao-Blackwell (esistente) | statistica | stimatore Rao-Blackwell Monte Carlo | MC p. 20-22 | Varianza condizionata | — | Metodo Monte Carlo; Campionamento per importanza |
| Campionamento per importanza | statistica | importance sampling | MC p. 23-26 | Metodo Monte Carlo; Varianza | Metodo accept-reject | Teorema di Rao-Blackwell; Valore atteso |
| Trasformazione integrale di probabilità (esistente) | probabilita | inversa generalizzata; metodo dell'inversione | MC p. 28, 31-33 | Funzione di ripartizione | — | Numeri pseudo-casuali; Metodo accept-reject; Trasformazione di Box-Muller |
| Trasformazione di Box-Muller | statistica | Box-Muller transform | MC p. 28-30 | Numeri pseudo-casuali; Metodo dello jacobiano; Vettore gaussiano | — | Trasformazione integrale di probabilità; Fattorizzazione di Cholesky; Distribuzione esponenziale |
| Distribuzione condizionata (esistente) | probabilita | simulazione marginale-condizionata | MC p. 34-35; MCMC p. 43-46 | — | Full conditional; Gibbs sampler | — |
| Kernel di una densità | statistica | costante di normalizzazione | MC p. 48-51; BAY p. 24-28 | Densità congiunta | Metodo accept-reject; Famiglia coniugata; Full conditional; Lemma di Brook | Distribuzione normale; Distribuzione Gamma; Algoritmo di Metropolis-Hastings |
| Metodo accept-reject | statistica | accept-reject sampling; teorema fondamentale della simulazione | MC p. 36-55 | Distribuzione uniforme continua; Kernel di una densità; Trasformazione integrale di probabilità | Algoritmo di Metropolis-Hastings | Campionamento per importanza; Distribuzione Beta |

## Statistica bayesiana

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Formula di Bayes (esistente) | probabilita | teorema di Bayes per densità | BAY p. 3 | — | Stima bayesiana | Lemma di Brook |
| Stima bayesiana (esistente) | statistica | prior non informative, improprie, informative; statistiche a posteriori | BAY p. 7-9, 15-19, 32-35; MCMC p. 43-47 | Formula di Bayes | Regressione lineare bayesiana; Gibbs sampler | Stimatore di massima verosimiglianza |
| Distribuzione Beta (esistente) | probabilita | prior beta del dado | BAY p. 4-14 | — | — | Metodo accept-reject |
| Famiglia coniugata (esistente) | statistica | prior coniugata | BAY p. 4-6, 19-31 | Stima bayesiana | — | Kernel di una densità; Regressione lineare bayesiana |
| Regressione lineare bayesiana | statistica | Bayesian linear regression | BAY p. 15-18, 29-33; MCMC p. 27-33 | Regressione lineare; Famiglia coniugata; Vettore gaussiano | Gibbs sampler | Stimatore di massima verosimiglianza; Algoritmo di Metropolis-Hastings; Minimi quadrati generalizzati |
| Distribuzione di Dirichlet (esistente) | statistica | prior sui pesi | MIX p. 8-9, 16, 21-25, 43-44 | — | Modello mistura finita; Hidden Markov model | — |

## Algoritmi MCMC e valutazione dei modelli

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Full conditional | statistica | Markov blanket | MCMC p. 3, 9-14 | Distribuzione condizionata; Kernel di una densità; Rete bayesiana | Gibbs sampler; Markov random field | Lemma di Brook; Algoritmo di Metropolis-Hastings |
| Gibbs sampler | statistica | campionatore di Gibbs | MCMC p. 2-8, 27-29 | Full conditional; Catena di Markov a tempo discreto; Distribuzione stazionaria di una DTMC | Algoritmo di Metropolis-Hastings; Dimensione campionaria effettiva; Modello mistura finita | Regressione lineare bayesiana; Hamiltonian Monte Carlo; Metodo Monte Carlo; Bilancio dettagliato |
| Algoritmo di Metropolis-Hastings (esistente) | statistica | Metropolis dentro il Gibbs | MCMC p. 15-33 | — | Metropolis adattivo; Hamiltonian Monte Carlo | Gibbs sampler; Full conditional; Metodo accept-reject; Bilancio dettagliato |
| Bilancio dettagliato (esistente) | probabilita | dimostrazione per il passo Metropolis | MCMC p. 24-26 | — | — | Algoritmo di Metropolis-Hastings; Gibbs sampler |
| Metropolis adattivo | statistica | adaptive proposal; diminishing adaptation | MCMC p. 34-36 | Algoritmo di Metropolis-Hastings | — | Hamiltonian Monte Carlo; Dimensione campionaria effettiva; Matrice di covarianza |
| Hamiltonian Monte Carlo | statistica | HMC; leap-frog | MCMC p. 37-41 | Algoritmo di Metropolis-Hastings; Equazioni di Hamilton | — | Gibbs sampler; Metodo dello jacobiano; Metropolis adattivo |
| Dimensione campionaria effettiva (esistente) | statistica | traceplot; burnin; thin; ACF della catena | MCMC p. 15-19 | — | — | Gibbs sampler; Funzione di autocorrelazione; Label switching |
| Distribuzione predittiva a posteriori (esistente) | statistica | previsione di nuove osservazioni; dati mancanti | MCMC p. 47, 51-53; GP p. 38-42 | — | Continuous ranked probability score; Regressione con processo gaussiano; Metodi di stima dell'accuratezza | Full conditional |
| Criteri di informazione AIC e BIC (esistente) | statistica | WAIC | MCMC p. 48-50 | — | — | Continuous ranked probability score; Modello mistura finita |
| Metodi di stima dell'accuratezza (esistente) | data-ml | cross validation bayesiana | MCMC p. 48, 51-54 | — | Continuous ranked probability score | — |
| Continuous ranked probability score | statistica | CRPS | MCMC p. 53-54 | Distribuzione predittiva a posteriori; Funzione di ripartizione; Metodo Monte Carlo | — | Metodi di stima dell'accuratezza; Errore quadratico medio; Criteri di informazione AIC e BIC |

## Modelli grafici

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Identificabilità di un modello statistico | statistica | identifiability; modello statistico $(S,\mathcal P)$ | GR p. 3-6; TSM p. 33-36; MIX p. 26 | Campione casuale; Funzione di verosimiglianza | Label switching; Modello MA(q) | Regressione lineare; Modello gerarchico bayesiano |
| Modello gerarchico bayesiano | statistica | modello gerarchico; variabili latenti | GR p. 7, 17-36; MCMC p. 9-11 | Distribuzione condizionata; Stima bayesiana | Rete bayesiana; Regressione con processo gaussiano; Modello mistura finita | Full conditional; Identificabilità di un modello statistico |
| Rete bayesiana (esistente) | statistica | DAG; fattorizzazione della congiunta | GR p. 11-14, 24-36 | — | — | Full conditional; Modello gerarchico bayesiano; Markov random field; Ordinamento topologico |
| Indipendenza condizionata nelle reti bayesiane (esistente) | statistica | indipendenza condizionata; d-separazione | GR p. 8-10, 15-16 | — | — | Hidden Markov model; Autocorrelazione parziale |

## Serie storiche

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Stazionarietà di un processo stocastico | probabilita | stazionarietà forte e debole | TSI p. 2-9; GP p. 13-16 | Vettore gaussiano; Covarianza | Funzione di autocorrelazione; Modello AR(1); Processo gaussiano | Distribuzione stazionaria di una DTMC; Rumore bianco |
| Funzione di autocorrelazione | statistica | ACF; autocovarianza; correlogramma | TSI p. 9-15 | Stazionarietà di un processo stocastico; Covarianza; Coefficiente di correlazione | Autocorrelazione parziale; Modello MA(q) | Dimensione campionaria effettiva; Modello ARIMA stagionale |
| Autocorrelazione parziale | statistica | PACF; proprietà di Markov di ordine h | TSI p. 16-22, 28-29 | Funzione di autocorrelazione; Catena di Markov a tempo discreto; Condizionamento di un vettore gaussiano | Modello AR(p) | Indipendenza condizionata nelle reti bayesiane; Passeggiata aleatoria gaussiana |
| Catena di Markov a tempo discreto (esistente) | probabilita | proprietà di Markov per serie; catena degli stati latenti | TSI p. 18-22; MIX p. 34-36, 54 | — | — | Autocorrelazione parziale; Gibbs sampler; Hidden Markov model |
| Rumore bianco | statistica | white noise | TSI p. 23-25 | Distribuzione normale; Indipendenza di variabili aleatorie | Passeggiata aleatoria gaussiana; Modello AR(1); Modello MA(q) | Funzione di autocorrelazione; Stazionarietà di un processo stocastico |
| Passeggiata aleatoria gaussiana | probabilita | random walk gaussiano | TSI p. 26-30 | Rumore bianco; Somma di variabili aleatorie indipendenti | Modello ARIMA | Moto browniano; Ricorrenza della passeggiata aleatoria; Modello AR(1); Autocorrelazione parziale |
| Modello AR(1) | statistica | autoregressivo del primo ordine; previsione | TSM p. 2-15, 24-26 | Rumore bianco; Serie geometrica; Stazionarietà di un processo stocastico | Modello AR(p) | Passeggiata aleatoria gaussiana; Modello MA(q); Regressione con processo gaussiano; Modello CAR |
| Modello AR(p) | statistica | operatore di ritardo; Yule-Walker | TSM p. 16-29 | Modello AR(1); Autocorrelazione parziale | Modello ARMA; Minimi quadrati generalizzati | Modello MA(q); Teorema fondamentale dell'algebra |
| Modello MA(q) | statistica | moving average; invertibilità | TSM p. 30-55 | Rumore bianco; Funzione di autocorrelazione | Modello ARMA | Identificabilità di un modello statistico; Modello AR(1); Modello AR(p) |
| Modello ARMA | statistica | teorema di Wold | TSM p. 56-60 | Modello AR(p); Modello MA(q) | Modello ARIMA | Stazionarietà di un processo stocastico; Processo gaussiano |
| Modello ARIMA | statistica | serie integrata; differenziazione | TSM p. 61-84 | Modello ARMA; Passeggiata aleatoria gaussiana | Modello ARIMA stagionale | Modello MA(q) |
| Modello ARIMA stagionale | statistica | SARIMA; decomposizione | TSM p. 85-91; TSI p. 3-5 | Modello ARIMA | — | Funzione di autocorrelazione; Serie di Fourier |
| Minimi quadrati generalizzati | statistica | GLS | TSM p. 27-29 | Regressione lineare; Fattorizzazione di Cholesky; Vettore gaussiano | — | Modello AR(p); Regressione lineare bayesiana; Stimatore di massima verosimiglianza |

## Processi gaussiani

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Processo gaussiano | probabilita | GP | GP p. 13-17, 23-25 | Vettore gaussiano; Stazionarietà di un processo stocastico | Funzioni di covarianza stazionarie; Regressione con processo gaussiano; Nearest neighbour Gaussian process | Caratterizzazione gaussiana del moto browniano; Modello ARMA; Matrice di covarianza; Kernel definito positivo |
| Funzioni di covarianza stazionarie | statistica | esponenziale; Matérn; Cauchy; Gneiting | GP p. 17-25 | Processo gaussiano; Kernel definito positivo | Regressione con processo gaussiano | Matrice di covarianza; Distribuzione Gamma |
| Kernel definito positivo (esistente) | data-ml | funzione di covarianza definita positiva | GP p. 17-21 | — | — | Funzioni di covarianza stazionarie |
| Regressione con processo gaussiano | statistica | previsione in un punto nuovo | GP p. 3-11, 26-42 | Processo gaussiano; Modello gerarchico bayesiano; Condizionamento di un vettore gaussiano | Modello di Poisson spaziale | Distribuzione predittiva a posteriori; Ottimizzazione surrogata; Modello AR(1); Funzioni di covarianza stazionarie |
| Condizionamento di un vettore gaussiano (esistente) | probabilita | previsione del processo | GP p. 40-41 | — | — | Regressione con processo gaussiano |
| Modello di Poisson spaziale | statistica | offset | GP p. 43-53; AUTO p. 29-31 | Distribuzione di Poisson; Processo gaussiano | — | Modello CAR; Criteri di informazione AIC e BIC; Regressione con processo gaussiano |
| Nearest neighbour Gaussian process | statistica | NNGP | GP p. 54-55 | Processo gaussiano; Rete bayesiana | — | Markov random field; Condizionamento di un vettore gaussiano |

## Auto-modelli (Markov random field)

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Markov random field | statistica | MRF; clique | AUTO p. 2-10 | Full conditional; Grafo | Teorema di Hammersley-Clifford; Lemma di Brook; Modello CAR | Rete bayesiana; Nearest neighbour Gaussian process; Modello di Potts |
| Teorema di Hammersley-Clifford | statistica | distribuzione di Gibbs; clique potentials | AUTO p. 10-11, 16 | Markov random field | Modello di Potts | Lemma di Brook |
| Lemma di Brook | statistica | Brook's lemma | AUTO p. 12-16 | Full conditional; Formula di Bayes; Kernel di una densità | Modello auto-Poisson; Modello CAR | Gibbs sampler; Teorema di Hammersley-Clifford |
| Modello auto-Poisson | statistica | auto-Poisson | AUTO p. 17-19 | Lemma di Brook; Distribuzione di Poisson | — | Modello CAR; Markov random field |
| Modello CAR | statistica | auto-normale; ICAR; CAR proprio | AUTO p. 20-27, 29-31 | Lemma di Brook; Markov random field; Vettore gaussiano | — | Modello di Poisson spaziale; Autovalori e autovettori; Modello auto-Poisson; Modello AR(1) |
| Modello di Potts | statistica | Ising; autologistico | AUTO p. 28 | Teorema di Hammersley-Clifford | — | Markov random field; Gibbs sampler; Kernel di una densità |

## Modelli mistura e HMM

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Modello mistura finita | statistica | mistura gaussiana; GMM | MIX p. 2-32 | Modello gerarchico bayesiano; Distribuzione di Dirichlet; Gibbs sampler | Trucco log-sum-exp; Label switching; Hidden Markov model | Cluster analysis; Distribuzione condizionata; Criteri di informazione AIC e BIC |
| Trucco log-sum-exp | statistica | Gumbel trick | MIX p. 17-19 | Modello mistura finita | — | Softmax e cross-entropy; Numeri di macchina; Hidden Markov model |
| Label switching | statistica | scambio delle etichette | MIX p. 26-27 | Modello mistura finita; Identificabilità di un modello statistico | — | Dimensione campionaria effettiva; Hidden Markov model |
| Hidden Markov model | statistica | HMM | MIX p. 33-54 | Modello mistura finita; Catena di Markov a tempo discreto | Algoritmo forward; Forward filtering backward sampling; Modello change-point | Distribuzione di Dirichlet; Indipendenza condizionata nelle reti bayesiane; Label switching |
| Algoritmo forward | statistica | ricorsione forward | MIX p. 37-39, 44 | Hidden Markov model; Formula delle probabilità totali | Forward filtering backward sampling | Trucco log-sum-exp; Equazioni di Chapman-Kolmogorov |
| Forward filtering backward sampling | statistica | versione campionaria del Viterbi delle slide | MIX p. 48-50 | Algoritmo forward; Distribuzione condizionata | — | Gibbs sampler; Hidden Markov model |
| Modello change-point | statistica | structural-change model | MIX p. 55-56 | Hidden Markov model | — | Distribuzione Beta; Catena di Markov a tempo discreto |

## Concetti esterni (da collegare)

Nessun concetto lasciato "(da collegare)": tutte le note citate esistono. Convertito il "(da collegare)" di Metodo Monte Carlo per la parte di questo corso (ora link a Campionamento per importanza); resta in testo semplice solo la menzione del corso di financial engineering.

Collegamenti verso note di altri corsi creati dalle note nuove: Legge dei grandi numeri, Varianza, Valore atteso, Metodo dello jacobiano, Vettore gaussiano, Fattorizzazione di Cholesky, Distribuzione esponenziale, Densità congiunta, Distribuzione normale, Distribuzione Gamma, Distribuzione uniforme continua, Distribuzione di Poisson, Regressione lineare, Stimatore di massima verosimiglianza, Distribuzione stazionaria di una DTMC, Equazioni di Hamilton (Quantum physics), Matrice di covarianza, Errore quadratico medio, Funzione di ripartizione, Funzione di verosimiglianza, Grafo, Covarianza, Coefficiente di correlazione, Indipendenza di variabili aleatorie, Serie geometrica, Somma di variabili aleatorie indipendenti, Moto browniano, Ricorrenza della passeggiata aleatoria, Caratterizzazione gaussiana del moto browniano, Teorema fondamentale dell'algebra, Serie di Fourier, Ottimizzazione surrogata (Ricerca operativa), Autovalori e autovettori, Cluster analysis (Data science), Softmax e cross-entropy (Matematica per l'AI), Numeri di macchina, Formula delle probabilità totali, Equazioni di Chapman-Kolmogorov; e verso le note di Modelli statistici: Famiglia coniugata, Rete bayesiana, Indipendenza condizionata nelle reti bayesiane, Distribuzione predittiva a posteriori, Dimensione campionaria effettiva, Distribuzione di Dirichlet.

## Dubbi

- **Bootstrap ed EM non ci sono.** Nelle slide l'EM compare una sola volta come inciso ("a meno di fare Expectation Maximization", MCMC p. 10) e il bootstrap mai: nessuna nota creata.
- **Note già create da Modelli statistici, estese invece di duplicarle:** Famiglia coniugata (al posto di una "Prior coniugata"), Rete bayesiana (al posto di un "Modello grafico orientato"), Indipendenza condizionata nelle reti bayesiane (che ha già l'alias d-separazione: lì la regola generale dei cammini bloccati), Distribuzione predittiva a posteriori, Distribuzione di Dirichlet, Dimensione campionaria effettiva (alias traceplot: lì burnin, thin e ACF della catena). "Modello gerarchico bayesiano" usa il nome già previsto dai link di Modelli statistici. **Incidente su Minimi quadrati generalizzati:** la mia scrittura del file ha sovrascritto una nota esistente, quasi certamente appena creata da Modelli statistici (lo strumento ha risposto "updated", non "created"). Subito dopo l'agente di Modelli statistici ha riaggiunto la sua sezione, alias e corso sul mio testo, ma va verificato che la sua versione originale (definizione, formule, collegamenti) non abbia perso contenuto.
- **Alias sovrapposti a note di altri corsi:** "Gibbs sampling", "burn-in", "thinning", "MCMC adattivo" sono alias di Algoritmo di Metropolis-Hastings; "processo gaussiano" di Caratterizzazione gaussiana del moto browniano; "kriging" di Ottimizzazione surrogata; "nucleo di una densità" di Famiglia coniugata. Le note nuove Gibbs sampler, Metropolis adattivo, Processo gaussiano, Regressione con processo gaussiano, Kernel di una densità non ripetono quelle stringhe e sono collegate in entrambi i versi.
- **"Viterbi".** Le slide (MIX p. 48-50) chiamano "una versione dell'algoritmo di Viterbi" il campionamento all'indietro di $z_n,\dots,z_1$ dalle quantità forward: la nota usa il nome "Forward filtering backward sampling" e non introduce né il passo backward del forward-backward né il Viterbi a massimo prodotto, che le slide non trattano.
- **Formule riportate come nelle slide ma sospette** (segnalate nelle note): doppia somma su tutti gli $i,j$ delle covarianze in $\mathrm{var}(\bar h_n)$ (MC p. 9); $\mathrm{Var}(x_{t+k}\mid x_t)=(1+\alpha^2+\dots+\alpha^{2k})\sigma^2$ (TSM p. 26); coefficienti scambiati della covarianza spazio-tempo (GP p. 20-21); $\sigma^2$ senza indice nella full conditional di $\mu_k$ (MIX p. 15); $f(\mathbf y\mid z_1=k)$ nel primo passo forward (MIX p. 38). Non riportati e da verificare sul PDF: i casi $k_{i-1}=k_{i+1}$ delle full conditional dell'HMM marginalizzato (MIX p. 46-47).
- **Incoerenza nelle slide.** BAY p. 6 dà la posteriori $\mathrm{Beta}(y+a,\,n+b-y)$, ma il codice R di BAY p. 13 usa `dbeta(xseq, y+a-1, n-y+b)`: le note riportano la formula, segnalando il codice.
- **DIC** è solo nominato (MCMC p. 49, "DIC ..."): nessuna formula.
- **Notebook**: le formule dei notebook non sono state usate (es. il notebook scrive $D^{-1/2}WD^{-1/2}$; la nota Modello CAR segue la slide, $\mathbf D^{-1/2}\mathbf B\mathbf D^{-1/2}$).
