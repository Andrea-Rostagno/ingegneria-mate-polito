---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Hammersley-Clifford theorem", "distribuzione di Gibbs", "Gibbs distribution", "clique potentials", "potenziali di clique", "potential functions", "condizione di positività"]
tags: [competenza, area/statistica]
---

# Teorema di Hammersley-Clifford

> Sotto la condizione di positività, un vettore è un Markov random field se e solo se la sua densità si fattorizza come prodotto di funzioni definite sulle clique del grafo.

## Definizione / enunciato
Sia $\mathcal C$ l'insieme di tutte le clique del grafo e $\mathbf y_C$ gli elementi della clique $C\in\mathcal C$. Se $f(\mathbf y)>0$ per tutte le configurazioni $\mathbf y\in\mathcal Y$ (**positivity condition**), allora:
1. se $\mathbf Y$ è un MRF, $f(\mathbf y)\propto\prod_{C\in\mathcal C}\Psi_C(\mathbf y_C)$, con $0<\Psi_C<\infty$ dette **clique potentials**;
2. se la densità di $\mathbf Y$ si può scrivere come $f(\mathbf y)\propto\prod_{C\in\mathcal C}\Psi_C(\mathbf y_C)$, allora $\mathbf Y$ è un MRF.

## Formule chiave
Forma equivalente come **distribuzione di Gibbs** (usata molto in fisica):
$$f(\mathbf y)=\frac1Z\exp\Bigl(-\sum_CV_C(\mathbf y_C)\Bigr),\qquad V_C(\mathbf y_C)=-\log\Psi_C(\mathbf y_C)\ \ \text{(potential functions)}.$$
Con $f(\mathbf 0)>0$ e il lemma di Brook (scegliendo $\mathbf x=\mathbf 0$):
$$G(\mathbf y)=\log\frac{f(\mathbf y)}{f(\mathbf 0)}=\sum_C\bigl(V_C(\mathbf 0)-V_C(\mathbf y_C)\bigr)=\sum_iQ_i(y_i)+\sum_{i<j}Q_{i,j}(y_i,y_j)+\dots+Q_{1,\dots,n}(y_1,\dots,y_n),$$
dove $Q_{\cdot}\equiv0$ se le variabili non formano una clique; in forma compatta $G(\mathbf y)=\sum_{C\in\mathcal C}Q_C(\mathbf y_C)$.

## Intuizione
La dipendenza "locale" del MRF si traduce in interazioni solo tra variabili mutuamente vicine: la congiunta non contiene termini che legano nodi non connessi. La costante $Z$ resta in generale intrattabile.

## Come si usa
Si parte direttamente da una congiunta in forma di Gibbs (modello di Potts) sapendo che è un MRF, oppure si controlla che le full conditional scelte corrispondano a una congiunta con termini solo sulle clique.

## Nei corsi
- **Statistica computazionale** (magistrale): "Markov Random Field". Fonti: `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 10-11, 16).

## Prerequisiti
- [[Markov random field]]: le clique e la proprietà di Markov sul grafo

## Porta a
- [[Modello di Potts]]: definito direttamente come distribuzione di Gibbs

## Collegati
- [[Lemma di Brook]]: fornisce la rappresentazione $G(\mathbf y)$ sulle clique
- [[Markov random field]]: il teorema caratterizza i MRF
