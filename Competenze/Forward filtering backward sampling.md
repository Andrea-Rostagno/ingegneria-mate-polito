---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["FFBS", "forward-filtering backward-sampling", "campionamento all'indietro degli stati", "versione campionaria dell'algoritmo di Viterbi", "campionamento a blocchi degli stati di un HMM"]
tags: [competenza, area/statistica]
---

# Forward filtering backward sampling

> Campionamento dell'intera sequenza di stati di un HMM in un colpo solo: dopo la ricorsione forward si simula $z_n$ e poi, all'indietro, ogni $z_i$ dato $z_{i+1}$ con probabilità proporzionali a $a_i(k)\pi_{k,z_{i+1}}$.

## Definizione / enunciato
Invece di simulare uno stato alla volta nell'MCMC si campiona da $f(\mathbf z\mid\mathbf y,\boldsymbol\theta,\mathbf P)$ simulando, da $n$ a 1,
$$z_n\sim f(z_n\mid\mathbf y,\boldsymbol\theta,\mathbf P),\quad z_{n-1}\sim f(z_{n-1}\mid z_n,\mathbf y,\boldsymbol\theta,\mathbf P),\ \dots,\ z_1\sim f(z_1\mid z_n,\dots,z_2,\mathbf y,\boldsymbol\theta,\mathbf P).$$
Le slide lo presentano come "una versione dell'algoritmo di Viterbi".

## Formule chiave
- Ultimo stato: $f(z_n=k\mid\mathbf y,\boldsymbol\theta,\mathbf P)\propto f(z_n=k,\mathbf y\mid\boldsymbol\theta,\mathbf P)=a_n(k)$.
- Con $\mathbf z^{i+1}=(z_{i+1},\dots,z_n)$ e $\mathbf y^{i+1}=(y_{i+1},\dots,y_n)$, dal DAG $f(\mathbf y\mid\mathbf z^{i+1},z_i)\propto_{z_i}f(y_1,\dots,y_i\mid z_i)$ e $f(\mathbf z^{i+1}\mid z_i)\propto_{z_i}f(z_{i+1}\mid z_i)$, quindi
$$f(z_i\mid\mathbf z^{i+1},\mathbf y,\boldsymbol\theta,\mathbf P)\propto f(y_1,\dots,y_i,z_i\mid\boldsymbol\theta,\mathbf P)f(z_{i+1}\mid z_i)=a_i(z_i)\pi_{z_i,z_{i+1}},$$
$$P(z_i=k\mid\mathbf z^{i+1},\mathbf y,\boldsymbol\theta,\mathbf P)\propto a_i(k)\pi_{k,z_{i+1}}.$$

## Intuizione
È la fattorizzazione $f(\mathbf z\mid\mathbf y)=f(z_n\mid\mathbf y)\prod_if(z_i\mid\mathbf z^{i+1},\mathbf y)$: le quantità forward riassumono tutto il passato, la transizione verso lo stato già campionato porta l'informazione del futuro. Si hanno le probabilità non normalizzate per ogni $k$ e si campiona direttamente.

## Come si usa
Dentro il Gibbs dell'HMM, al posto degli aggiornamenti stato per stato: si calcolano $a_1,\dots,a_n$ con il forward e si campiona all'indietro tutto il vettore $\mathbf z$. L'algoritmo forward assume $z_0$ noto, ma lo si può marginalizzare.

## Nei corsi
- **Statistica computazionale** (magistrale): "HMM - Algoritmo di Viterbi". Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 48-50); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (sezione "Campionare l'intera sequenza").

## Prerequisiti
- [[Algoritmo forward]]: fornisce le $a_i(k)$
- [[Distribuzione condizionata]]: simulazione sequenziale da condizionate

## Collegati
- [[Gibbs sampler]]: è un passo a blocchi del Gibbs
- [[Hidden Markov model]]: il modello in cui si applica
