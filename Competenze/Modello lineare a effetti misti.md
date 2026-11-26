---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["linear mixed model", "LMM", "mixed effects model", "modello a effetti misti", "effetti casuali", "random effects", "effetti fissi", "fixed effects", "intercetta casuale", "random intercept", "pendenza casuale", "random slope", "dati longitudinali", "longitudinal data", "lmer", "lme4", "BLUP"]
tags: [competenza, area/statistica]
---

# Modello lineare a effetti misti

> Modello lineare per dati raggruppati (studenti in scuole, misure ripetute sullo stesso paziente) in cui, accanto agli effetti fissi, ogni gruppo ha effetti casuali normali: le osservazioni dello stesso gruppo risultano correlate.

## Definizione / enunciato
Per i gruppi $i=1,\dots,N$ con $n_i$ osservazioni (libro, cap. 14, Def. 14.1):
$$\mathbf y_i=\mathbf X_i\boldsymbol\beta+\mathbf Z_i\mathbf b_i+\boldsymbol\varepsilon_i,\qquad\mathbf b_i\sim N_q(\mathbf 0,\mathbf D),\quad\boldsymbol\varepsilon_i\sim N_{n_i}(\mathbf 0,\tau^2\mathbf I_{n_i}),$$
tutti indipendenti; $\mathbf X_i$ ($n_i\times p$) disegno degli effetti fissi $\boldsymbol\beta$, $\mathbf Z_i$ ($n_i\times q$) disegno degli effetti casuali (colonna di uni per l'intercetta casuale, una covariata per la pendenza casuale). Parametri: $\boldsymbol\beta$, $\mathbf D$, $\tau^2$.

## Formule chiave
- **Distribuzione marginale** (Prop. 14.2): $\mathbf y_i\sim N_{n_i}(\mathbf X_i\boldsymbol\beta,\mathbf V_i)$, $\mathbf V_i=\mathbf Z_i\mathbf D\mathbf Z_i'+\tau^2\mathbf I$; nel complesso $\mathbf y\sim N_n(\mathbf X\boldsymbol\beta,\mathbf V)$ con $\mathbf V$ diagonale a blocchi, e $\boldsymbol\beta$ si stima con un GLS.
- **Shrinkage** per l'intercetta casuale: $\mathbb E(b_i\mid\mathbf y_i)=w_i\bar r_i$, $w_i=\sigma_b^2/(\sigma_b^2+\tau^2/n_i)$, con $\bar r_i$ residuo medio del gruppo rispetto alla parte fissa (dalla normale condizionata).

## Intuizione
Effetti fissi: un coefficiente per gruppo, interpretabile, adatto a pochi gruppi. Effetti casuali: un solo parametro di varianza, generalizzabile a gruppi non osservati, utile con molti gruppi e pochi dati per gruppo; le stime dei gruppi piccoli vengono "ristrette" verso la media generale.

## Come si usa
Scuole (libro, Es. `c14-scuole`): `lmer(punteggio ~ ore_studio + genere + (1 | scuola))` su 77 studenti in 9 scuole: varianza delle scuole 94.33, residua 21.27; un'ora di studio vale 3.50 punti, i maschi hanno 7.23 punti in meno a parità di ore e scuola. Per la scuola 1 ($n_1=5$) residuo medio 5.68, peso $w_1=0.957$, $\hat b_1=5.44$, come da `ranef`. Pendenza casuale: `(ore_studio | scuola)`. **Dati longitudinali**: PSA misurato da 5 a 12 volte su 100 pazienti dopo prostatectomia, con intercetta e pendenza casuali per paziente e previsioni individuali.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 14 (Def. 14.1, Prop. 14.2, pp. 232-241). Fonti: `Libri/Modelli statistici/capitoli/cap14.tex`; `magistrale/Modelli statistici/codici/251120 Note Mixed Models.pdf` (scansione); codici `codici/251120 mixedeffect lm.R`, `codici/251127 mixedeffect lm.R`, `codici/251120 dati longitudinali.R`. Negli appunti la varianza d'errore si chiama $\tau^2$ e le covariate sono $K$, con $p=K+1$.

## Prerequisiti
- [[Regressione lineare]]: parte fissa del modello
- [[Vettore gaussiano]]: distribuzione marginale dei dati del gruppo
- [[Minimi quadrati generalizzati]]: stima di $\boldsymbol\beta$ con covarianza $\mathbf V$

## Porta a
- [[Correlazione intraclasse]]: correlazione indotta dall'intercetta casuale
- [[Modello gerarchico bayesiano]]: la stessa struttura in forma bayesiana

## Collegati
- [[Condizionamento di un vettore gaussiano]]: previsione degli effetti casuali (shrinkage)
- [[Piano a blocchi randomizzati]]: blocchi come effetto fisso o casuale
- [[Analisi della varianza]]: il gruppo come fattore a effetti fissi
