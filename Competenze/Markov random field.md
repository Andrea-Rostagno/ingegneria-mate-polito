---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["MRF", "campo aleatorio di Markov", "campo di Markov", "Markov random field", "clique", "cricca", "vicinato", "neighbourhood", "auto-modelli"]
tags: [competenza, area/statistica]
---

# Markov random field

> Insieme di variabili su un grafo non orientato in cui ogni variabile, date tutte le altre, dipende solo dai suoi vicini: la proprietà di Markov senza bisogno di un ordinamento, naturale per dati spaziali su aree.

## Definizione / enunciato
Notazione: $i\sim j$ significa che $y_i$ e $y_j$ sono vicini (connessi da un arco), $\partial y_i$ è l'insieme dei vicini di $y_i$, $\mathbf y_{-i}$ il vettore di tutte le osservazioni tranne la $i$-esima. Se per ogni $i$
$$f(y_i\mid\mathbf y_{-i})=f(y_i\mid\partial y_i),$$
il processo è un **Markov random field**. Per avere senso, la cardinalità di $\partial y_i$ deve essere molto più piccola di quella di $\mathbf y_{-i}$.

**Clique**: insieme di nodi tutti connessi tra loro; ogni nodo è una clique. Nel grafo con archi $A$-$B$, $A$-$C$, $B$-$C$, $C$-$D$ e $E$ isolato, le clique sono $\{A\},\{B\},\{C\},\{D\},\{E\},\{A,B\},\{A,C\},\{B,C\},\{C,D\},\{A,B,C\}$.

## Formule chiave
Con la condizione di positività la congiunta si fattorizza sulle clique (Hammersley-Clifford), $f(\mathbf y)\propto\prod_{C\in\mathcal C}\Psi_C(\mathbf y_C)$, e la si ricostruisce dalle full conditional con il lemma di Brook.

## Intuizione
Nei dati spaziali su aree (crimini per provincia) non c'è un "prima" e un "dopo" come nel tempo: costruire un DAG impone un ordine arbitrario e rende difficile controllare le marginali. È più naturale dire come ogni area dipende dalle vicine (strade, confini comuni, una rete criminale). Esempio di grafo: ogni provincia seleziona al più 4 vicini tra le più vicine, e due città sono vicine solo se distano meno di 1.

## Come si usa
Si sceglie il grafo dei vicini, si specificano le full conditional e si verifica che esista una congiunta (che il kernel sommi o integri a una costante finita). Esempi: auto-Poisson, auto-normale (CAR/ICAR), Potts e Ising.

## Nei corsi
- **Statistica computazionale** (magistrale): "Auto-Modelli: Markov Random Field". Fonti: `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 2-10); notebook `magistrale/Statistica computazionale/auto_modelli_MRF_CAR_R.ipynb` (costruzione del grafo k-nearest neighbours in R).

## Prerequisiti
- [[Full conditional]]: il modello è definito tramite esse
- [[Grafo]]: struttura di vicinato e clique

## Porta a
- [[Teorema di Hammersley-Clifford]]: fattorizzazione sulle clique
- [[Lemma di Brook]]: dalle full conditional alla congiunta
- [[Modello CAR]]: MRF gaussiano

## Collegati
- [[Rete bayesiana]]: contrasto, grafo orientato con fattorizzazione in condizionate
- [[Nearest neighbour Gaussian process]]: altra struttura sparsa basata sui vicini
- [[Modello di Potts]]: MRF per variabili categoriche
