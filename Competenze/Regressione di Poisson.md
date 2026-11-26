---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Poisson regression", "modello di Poisson log-lineare", "glm poisson", "family = poisson", "offset di esposizione", "esposizione", "exposure", "rapporto di medie", "rate ratio", "warpbreaks"]
tags: [competenza, area/statistica]
---

# Regressione di Poisson

> GLM per conteggi: il logaritmo della media è lineare nei predittori, e $e^{\beta_j}$ è il fattore per cui si moltiplica il conteggio medio quando il predittore $j$ aumenta di uno.

## Definizione / enunciato
$y_i\sim\mathrm{Pois}(\lambda_i)$ con link canonico logaritmico, $\log\lambda_i=\mathbf x_i'\boldsymbol\beta$, e $\mathbb E(y_i)=\operatorname{Var}(y_i)=\lambda_i$. **Rapporto di medie** (libro, cap. 17, Prop. 17.15): se due unità differiscono solo per $x_{ij}=x_{hj}+1$,
$$\frac{\mathbb E(y_i\mid\mathbf x_i)}{\mathbb E(y_h\mid\mathbf x_h)}=\frac{\lambda_i}{\lambda_h}=e^{\beta_j}.$$
**Offset** (Def. 17.16): con esposizione $n_i$ (tempo, popolazione), $\log\lambda_i=\log n_i+\mathbf x_i'\boldsymbol\beta$, dove $\log n_i$ è una covariata con coefficiente fissato a 1: `glm(y ~ x + offset(log(n)), family = poisson)`.

## Formule chiave
Contrasti: $\mathbf v'\hat{\boldsymbol\beta}\approx N(\mathbf v'\boldsymbol\beta,\mathbf v'\mathbf J^{-1}\mathbf v)$, poi esponenziale per il rapporto di medie tra due combinazioni di livelli.

## Intuizione
Gli effetti sono moltiplicativi sul conteggio medio; l'offset trasforma il modello per i conteggi in un modello per i tassi (eventi per unità di esposizione). La Poisson impone media uguale a varianza: va controllato con la devianza.

## Come si usa
Warpbreaks (libro, Es. `c17-warpbreaks`, dati di R base), rotture dei fili per lana (A, B) e tensione (L, M, H): $e^{\hat\beta}$ vale 40.12 per l'intercetta (lana A a tensione bassa), 0.725 per `tensionM`, 0.595 per `tensionH`, 0.814 per `woolB`: a parità di lana la tensione media riduce le rotture medie del 27.5% e quella alta del 40.5%; a parità di tensione la lana B ne ha il 18.6% in meno. La devianza residua 210.39 su 50 g.d.l. segnala sovradispersione.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.7 (Prop. 17.15, Def. 17.16, p. 297). Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251218 GLM-Logit-Poisson.pdf` (scansione); codice `magistrale/Modelli statistici/codici/251218 PoissonGlm.R`.

## Prerequisiti
- [[Modello lineare generalizzato]]: struttura del modello
- [[Distribuzione di Poisson]]: componente casuale
- [[Fisher scoring]]: stima e contrasti con $\mathbf J^{-1}$

## Porta a
- [[Sovradispersione]]: varianza maggiore della media
- [[Modello log-lineare]]: conteggi di una tabella di contingenza

## Collegati
- [[Devianza di un GLM]]: bontà di adattamento
- [[Processo di Poisson]]: conteggi in un intervallo di esposizione
