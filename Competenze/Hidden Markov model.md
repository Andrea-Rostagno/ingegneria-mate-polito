---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["HMM", "modello di Markov nascosto", "modello a stati nascosti", "hidden Markov model", "mistura con latenti markoviani"]
tags: [competenza, area/statistica]
---

# Hidden Markov model

> Modello mistura in cui la variabile latente discreta evolve nel tempo come una catena di Markov: i dati dipendono dallo stato corrente, gli stati dal precedente.

## Definizione / enunciato
Un modello con struttura latente discreta che segue una catena di Markov con matrice di transizione $\mathbf P$ (elementi $\pi_{k,j}$, righe $\boldsymbol\pi_k$) è un **HMM**:
$$y_i\mid z_i\sim F(\boldsymbol\theta_{z_i}),\qquad z_i\mid z_{i-1}\sim\mathrm{Disc}(\boldsymbol\pi_{z_{i-1}}),\ i=1,\dots,n,$$
con $z_0$ parametro. DAG: catena $z_1\to\dots\to z_n$ con frecce $z_i\to y_i$. Versione bayesiana: $y_i\mid z_i=k\sim N(\mu_k,\sigma_k^2)$, $z_0\sim\mathrm{Disc}(\boldsymbol\rho)$, $\boldsymbol\pi_k\sim\mathrm{Dir}(\boldsymbol\alpha)$, $\mu_k\sim N(m,v)$, $\sigma_k^2\sim IG(a,b)$.

## Formule chiave
Con $n_{j,k}$ numero di transizioni da $j$ a $k$, $\prod_j\prod_k\pi_{j,k}^{n_{j,k}}=\prod_i\pi_{z_{i-1},z_i}$. Full conditional ($\mu_k$, $\sigma_k^2$ come nella mistura):
$$P(z_0=k\mid\dots)=\frac{\rho_k\pi_{k,z_1}}{\sum_j\rho_j\pi_{j,z_1}},\qquad\boldsymbol\pi_j\mid\dots\sim\mathrm{Dir}(\alpha_1+n_{j,1},\dots,\alpha_L+n_{j,L}),$$
$$P(z_i=k\mid\dots)=\frac{g_k\pi_{z_{i-1},k}\pi_{k,z_{i+1}}}{\sum_jg_j\pi_{z_{i-1},j}\pi_{j,z_{i+1}}},\qquad g_k=(\sigma_k^2)^{-1/2}\exp\Bigl(-\frac{(y_i-\mu_k)^2}{2\sigma_k^2}\Bigr).$$
Marginalizzando le righe $\boldsymbol\pi_j$: $f(\mathbf z)=\prod_j\frac{\prod_k\Gamma(\alpha_k+n_{j,k})}{\Gamma(\sum_k(\alpha_k+n_{j,k}))}$; le full conditional di $z_i$ distinguono i casi $k_{i-1}=k_{i+1}$ o no (formule in MIX p. 46-47, da verificare sul PDF prima di usarle).

## Intuizione
Nei dati del vento la tabella delle transizioni tra stati stimati della mistura mostra forte persistenza (diagonale 0.73, 0.60, 0.36, 0.60 contro circa 0.12, 0.37, 0.11, 0.39 in assenza di relazione): gli stati non sono indipendenti nel tempo. La densità marginale dei dati, calcolata col forward, ha dipendenza tra le osservazioni.

## Come si usa
Dati del vento con HMM a 4 stati (prior $\boldsymbol\pi_j\sim\mathrm{Dir}(\mathbf 1)$, $z_0\sim\mathrm{Disc}(1/L)$): WAIC 8344.04 contro 9180.096 della mistura; matrice di transizione a posteriori con diagonale 0.762, 0.878, 0.790, 0.777. Gli stati si campionano uno alla volta (Gibbs) o tutti insieme all'indietro.

## Nei corsi
- **Statistica computazionale** (magistrale): "Hidden Markov Models". Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 33-54); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (Gibbs per HMM gaussiano in R).

## Prerequisiti
- [[Modello mistura finita]]: stessa struttura con latenti indipendenti
- [[Catena di Markov a tempo discreto]]: dinamica degli stati

## Porta a
- [[Algoritmo forward]]: densità marginale dei dati
- [[Forward filtering backward sampling]]: campionamento congiunto degli stati
- [[Modello change-point]]: matrice di transizione vincolata

## Collegati
- [[Distribuzione di Dirichlet]]: prior sulle righe di $\mathbf P$
- [[Indipendenza condizionata nelle reti bayesiane]]: lettura delle indipendenze dal DAG
- [[Label switching]]: stesso problema di etichette
