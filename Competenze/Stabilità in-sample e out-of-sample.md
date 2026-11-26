---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["in-sample stability", "out-of-sample stability", "stabilità in-sample", "stabilità out-of-sample", "stabilità dell'albero degli scenari", "scenario tree stability", "numero di scenari"]
tags: [competenza, area/ottimizzazione]
---

# Stabilità in-sample e out-of-sample

> Criteri per scegliere quanti scenari usare: il valore ottimo non deve dipendere dal particolare campione (in-sample) e la soluzione trovata deve valere lo stesso su un campione molto più grande (out-of-sample).

## Definizione / enunciato
- **In-sample**: per due insiemi di scenari $\mathcal S$ e $\mathcal S'$ indipendenti della stessa cardinalità, $\min_{\mathbf x\in X}f(\mathbf x\mid\mathcal S)\approx\min_{\mathbf x\in X}f(\mathbf x\mid\mathcal S')$.
- **Out-of-sample**: con $\mathbf x^*=\arg\min_{\mathbf x}f(\mathbf x\mid\mathcal S)$ e un albero di valutazione $\mathcal E$ molto più grande, $f(\mathbf x^*\mid\mathcal S)\approx f(\mathbf x^*\mid\mathcal E)$.

Gli algoritmi aumentano il numero di scenari finché la condizione di arresto è soddisfatta (rigenerando $\mathcal S,\mathcal S'$ oppure $\mathcal S$ con $\mathcal E$ fisso).

## Formule chiave
Condizione di arresto in-sample: per $N$ coppie indipendenti si calcolano
$$\phi_i=\min_{\mathbf x\in X}f(\mathbf x\mid\mathcal S_i)-\min_{\mathbf x\in X}f(\mathbf x\mid\mathcal S'_i),\qquad i=1,\dots,N,$$
i.i.d.; con media $\bar\phi_N$ e deviazione standard campionaria $\sigma_\phi$, per il TLC ci si ferma quando
$$0\in\Big[\bar\phi_N-z_{1-\alpha/2}\frac{\sigma_\phi}{\sqrt N},\ \bar\phi_N+z_{1-\alpha/2}\frac{\sigma_\phi}{\sqrt N}\Big].$$

## Intuizione
Il modello a scenari è a sua volta una variabile aleatoria: con pochi scenari il valore ottimo cambia da un campione all'altro (instabilità in-sample) e la soluzione può essere ottima solo per gli scenari usati (instabilità out-of-sample, cioè overfitting del campione).

## Come si usa
Le lezioni lo applicano al newsvendor. Nella stessa logica, dopo SDDP la politica si valuta con una simulazione forward con molti cammini ($|K|\in\{1000,10000\}$), in-sample o out-of-sample; nell'ottimizzazione della politica (s,S) si tiene uno scenario out-of-sample per controllare la robustezza.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): sezione "Stabilità" della Parte II. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 38-40); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 27).

## Prerequisiti
- [[Sample average approximation]]: il modello a scenari di cui si misura la stabilità
- [[Intervallo di confidenza]]: criterio di arresto sulle differenze $\phi_i$
- [[Teorema del limite centrale]]: normalità approssimata della media $\bar\phi_N$

## Collegati
- [[Stochastic dual dynamic programming]]: valutazione finale per simulazione forward
- [[Overfitting e pruning]]: stessa idea di valutare fuori dal campione d'addestramento
