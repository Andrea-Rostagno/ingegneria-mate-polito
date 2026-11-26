---
tipo: meta
tags: [meta, mappa]
corso: Dinamiche su network
livello: magistrale
cartella: magistrale/Dinamiche su network
---

# Mappa delle competenze: Dinamiche su network

Mappa concettuale del corso `magistrale/Dinamiche su network` (Network Dynamics, Politecnico di Torino, proff. G. Como e F. Fagnani, a.a. 2025-26). Il corso parte dai **grafi** e dalla loro **algebra** (matrici dei pesi, stocastica, laplaciano, Perron-Frobenius, centralità), passa ai **flussi di rete** e alla loro ottimizzazione (max-flow min-cut, Wardrop, prezzo dell'anarchia), alle **dinamiche lineari** (French-DeGroot, agenti testardi, flussi, reti elettriche), alle **catene di Markov** come random walk, ai **sistemi a interazione a coppie** (epidemie, votante), alla **teoria dei giochi** e ai **giochi su rete** con dinamiche di apprendimento, ai **modelli di campo medio** e infine ai **grafi aleatori**. **66 competenze nuove e 25 note esistenti estese** con una sezione per questo corso (più Metodo delle potenze, che riceve solo il link convertito). Le competenze del corso formano un'unica componente connessa e ognuna ha almeno 2 collegamenti. I nomi sono in testo semplice, non wikilink, così la mappa non entra nel grafo.

Fonti, in ordine di priorità (tutte in `slide/`, con layer di testo; i numeri di pagina sono quelli del PDF):
- `Slides-0-Dinamiche.pdf` (introduzione, 16 pp.), `Slides-1-Graphs.pdf` (114 pp.), `Slides-2-Algebraic-Graphs.pdf` (90 pp.), `Slides-3-Connectivity+NetworkFlows.pdf` (53 pp.), `Slides-4-NetworkFlowOptimization.pdf` (32 pp.), `Slides-5-Averaging-dynamics(con commenti).pdf` (153 pp.), `Slides-6-Flows-Reversibility.pdf` (59 pp.), `Slides-7-MarkovChains+RandomWalks.pdf` (56 pp.), `Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (84 pp.), `Slides-9-Games-(con-commenti).pdf` (95 pp.), `Slides-10-NetworkGames.pdf` (81 pp.), `Slides-11-Meanfield.pdf` (68 pp.), `Slides-12-RandomGraphs.pdf` (41 pp.).
- Per i deck 5 e 9 si citano le versioni "(con commenti)", che sono quelle numerate nelle note; le versioni senza commenti hanno gli stessi contenuti con meno pagine. Le pagine manoscritte del deck 5 (pp. 38-43, 111, 135, 145, 150-151) non sono state usate.
- Il layer di testo dei deck 5, 6 e 9 perde o rimappa simboli (≤, √, vettore degli uni, segno meno, ∈, Φ). Le formule chiave sono state rilette sulle pagine renderizzate (pymupdf); le altre formule di questi deck sono state ricostruite dal testo decodificando i simboli rimappati, controllando la coerenza con le pagine viste. Pagine controllate come immagine: deck 2 pp. 74-75; deck 5 pp. 26, 37, 71, 110, 115, 119, 121, 124, 134, 136, 144, 149; deck 6 pp. 32, 33, 35, 36, 41, 46-49, 56, 57, 59; deck 7 pp. 43, 47, 55; deck 8 pp. 37, 65; deck 9 pp. 21, 33, 49, 52, 56, 58, 61, 66, 68, 73, 90, 95; deck 12 p. 41.
- `Recap.tex` (riassunto dell'utente): usato solo come indizio dell'ordine degli argomenti, nessun contenuto preso da lì.
- Scartati per la regola dell'utente (niente esami, compiti, esercizi): `Esame_dinamiche/` (domande d'esame e soluzioni), `hw/` (homework 1-3, compreso `homework3.tex` e `homework1.ipynb`), `esercitazioni/` (es1-es8), `slide/Slides-1-Problems-Graphs.pdf`, `slide/Slides-10-Problems-Games.pdf`, `slide/Slides-10-Problems-Games(con alcune soluzioni).pdf`.

"Porta a" è in gran parte l'inverso di "Prerequisiti", e "Collegati" è in gran parte simmetrico. "(esistente)" indica una nota già presente nel wiki, a cui si aggiunge una sezione per questo corso.

## Grafi e connettività (Slides 1)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Grafo** | network | (esistente) | Slides-1 pp. 3-13, 43-57 | — | Matrice stocastica<br>Laplaciano di un grafo<br>Grafo di condensazione | — |
| **Componenti connesse di un grafo** | network | (esistente) | Slides-1 pp. 15-38 | — | Grafo di condensazione | — |
| **Lemma delle strette di mano** | network | (esistente) | Slides-1 pp. 13, 45 | — | — | — |
| **Albero (teoria dei grafi)** | network | (esistente) | Slides-1 pp. 46-48 | — | — | — |
| **Spettro dei grafi bipartiti** | network | (esistente) | Slides-1 pp. 55-57 | — | Colorazione di un grafo | — |
| **Percorso euleriano** | network | (esistente) | Slides-1 pp. 110-114 | — | — | — |
| **Periodo di uno stato** | probabilita | (esistente) | Slides-1 pp. 59-70 | — | Modello di French-DeGroot | — |
| **Grafo di condensazione** | network | condensation graph; componenti fortemente connesse; sink component; insieme trapping; insieme globalmente raggiungibile | Slides-1 pp. 71-87 | Grafo<br>Componenti connesse di un grafo | Matrice stocastica<br>Agenti testardi<br>Probabilità di impatto e tempo medio di impatto | Classi di comunicazione<br>Ordinamento topologico |
| **Colorazione di un grafo** | network | graph coloring; numero cromatico; k-colorabile | Slides-1 pp. 89-96 | Grafo | Gioco di colorazione | Spettro dei grafi bipartiti<br>Insieme indipendente |
| **Insieme indipendente** | network | independent set; insieme indipendente massimale; maximal independent set | Slides-1 pp. 97-100 | Grafo | Gioco dei beni pubblici best-shot | Colorazione di un grafo<br>Teorema di Hall |
| **Teorema di Hall** | network | Hall's marriage theorem; matching; abbinamento completo; perfect matching | Slides-1 pp. 101-109; Slides-3 pp. 49-53 | Grafo | — | Teorema max-flow min-cut<br>Problema di assegnamento<br>Insieme indipendente |

## Algebra dei grafi e centralità (Slides 2)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Potenze della matrice di adiacenza** | network | (esistente) | Slides-2 pp. 2-23 | — | Matrice stocastica | — |
| **Teorema di Perron-Frobenius** | algebra-geometria | (esistente) | Slides-2 pp. 32-46 | — | Matrice stocastica<br>Centralità ad autovettore<br>Modello input-output di Leontief | — |
| **Matrice stocastica** | network | normalized weight matrix; P = D^{-1}W; matrice dei pesi normalizzata; distribuzione invariante | Slides-2 pp. 25, 33-50 | Grafo<br>Teorema di Perron-Frobenius<br>Grafo di condensazione | Centralità di distribuzione invariante<br>Modello di French-DeGroot<br>Random walk su un grafo | Laplaciano di un grafo<br>Distribuzione stazionaria di una DTMC |
| **Laplaciano di un grafo** | network | graph Laplacian; L = D - W; distribuzione Laplace-invariante | Slides-2 pp. 26-28, 52; Slides-6 pp. 20-24 | Grafo<br>Matrice stocastica | Rete elettrica su un grafo<br>Modello del votante | Matrice di incidenza<br>Catena di Markov a tempo continuo |
| **Centralità ad autovettore** | network | eigenvector centrality; centralità di grado; degree centrality | Slides-2 pp. 53-60 | Teorema di Perron-Frobenius | Centralità di Katz | Centralità di distribuzione invariante |
| **Centralità di distribuzione invariante** | network | invariant distribution centrality; potere sociale | Slides-2 pp. 61-67 | Matrice stocastica | Centralità di Bonacich<br>Modello di French-DeGroot | Centralità ad autovettore<br>Random walk su un grafo |
| **Centralità di Katz** | network | Katz centrality | Slides-2 p. 68, 75 | Centralità ad autovettore | — | Centralità di Bonacich |
| **Centralità di Bonacich** | network | Bonacich centrality; PageRank; Random walk su grafi e PageRank; Google | Slides-2 pp. 69-75; Slides-6 pp. 17-19 | Centralità di distribuzione invariante | Dinamica lineare di flusso su rete | Centralità di Katz<br>Metodo delle potenze<br>Modello input-output di Leontief |
| **Modello input-output di Leontief** | network | open Leontief model; modello di Leontief aperto; matrice input/output | Slides-2 pp. 78-89 | Teorema di Perron-Frobenius | — | Centralità di Bonacich |

## Connettività e flussi di rete (Slides 3)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Matrice di incidenza** | network | node-link incidence matrix; matrice di incidenza nodo-arco; link-path incidence matrix; multigrafo | Slides-3 pp. 2-5, 14-15 | Grafo | Decomposizione dei flussi<br>Ottimizzazione convessa di flussi su rete | Laplaciano di un grafo |
| **Teorema di Menger** | network | Menger's theorem; link-connectivity; connettività per archi; cammini arc-disgiunti | Slides-3 pp. 7-12, 29 | Componenti connesse di un grafo | — | Teorema max-flow min-cut |
| **Decomposizione dei flussi** | ottimizzazione | flow decomposition theorem; o-d flow; throughput; flussi unitari | Slides-3 pp. 16-22 | Matrice di incidenza | Teorema max-flow min-cut | Flusso massimo |
| **Flusso massimo** | ottimizzazione | (esistente) | Slides-3 pp. 23-25 | — | Teorema max-flow min-cut | — |
| **Teorema max-flow min-cut** | ottimizzazione | max-flow min-cut theorem; taglio o-d; capacità di taglio; min-cut | Slides-3 pp. 26-31, 47-48 | Flusso massimo<br>Decomposizione dei flussi | Algoritmo di Ford-Fulkerson<br>Teorema di Hall | Teorema di Menger<br>Teorema di dualità forte |
| **Algoritmo di Ford-Fulkerson** | ottimizzazione | Ford-Fulkerson algorithm; grafo residuo; cammino aumentante; Edmonds-Karp | Slides-3 pp. 31-45 | Teorema max-flow min-cut | — | Visita in ampiezza<br>Teorema di Hall |

## Ottimizzazione dei flussi e traffico (Slides 4)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Ottimizzazione convessa di flussi su rete** | ottimizzazione | network flow optimization; condizioni di complementary slackness su rete; costo duale di Fenchel | Slides-4 pp. 3-21 | Matrice di incidenza<br>Dualità lagrangiana | Equilibrio di Wardrop<br>Prezzo dell'anarchia<br>Rete elettrica su un grafo | Problema dei cammini minimi<br>Flusso a costo minimo |
| **Problema dei cammini minimi** | network | (esistente) | Slides-4 pp. 5, 20 | — | — | — |
| **Dualità lagrangiana** | ottimizzazione | (esistente) | Slides-4 pp. 12-19 | — | — | — |
| **Equilibrio di Wardrop** | ottimizzazione | Wardrop equilibrium; user equilibrium; UO-TAP; equilibrio utente | Slides-4 pp. 23-27 | Ottimizzazione convessa di flussi su rete | Prezzo dell'anarchia<br>Pedaggi a costo marginale | Equilibrio di Nash<br>Giochi di congestione<br>Dinamica logit di campo medio |
| **Prezzo dell'anarchia** | ottimizzazione | price of anarchy; PoA; ottimo di sistema; system optimum; SO-TAP; paradosso di Braess | Slides-4 pp. 6-7, 22, 28-29 | Equilibrio di Wardrop<br>Ottimizzazione convessa di flussi su rete | Pedaggi a costo marginale | — |
| **Pedaggi a costo marginale** | ottimizzazione | marginal cost tolls; toll design; tolls; esternalità | Slides-4 pp. 30-32 | Equilibrio di Wardrop<br>Prezzo dell'anarchia | — | — |

## Dinamiche di media e consenso (Slides 5)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Modello di French-DeGroot** | network | French-DeGroot model; DeGroot; averaging dynamics; consenso; consensus | Slides-5 pp. 2-29, 46-62, 85-91 | Matrice stocastica<br>Periodo di uno stato | Saggezza della folla<br>Calcolo distribuito della media<br>Velocità di convergenza al consenso<br>Agenti testardi | Centralità di distribuzione invariante<br>Proprietà contrattive delle matrici stocastiche<br>Dinamica lineare di flusso su rete |
| **Proprietà contrattive delle matrici stocastiche** | network | contraction lemma; lemma di contrazione; max-min | Slides-5 pp. 68-84 | Matrice stocastica | — | Modello di French-DeGroot<br>Teorema del punto fisso di Banach |
| **Saggezza della folla** | network | wisdom of crowds; asymptotic wisdom; Golub-Jackson | Slides-5 p. 37 | Modello di French-DeGroot | — | Varianza |
| **Calcolo distribuito della media** | network | average consensus; distributed averaging; calcolo decentralizzato | Slides-5 pp. 93-113 | Modello di French-DeGroot | Velocità di convergenza al consenso | Grafo regolare |
| **Velocità di convergenza al consenso** | network | speed of convergence; spectral gap; tempo di convergenza; gap spettrale | Slides-5 pp. 115-121 | Modello di French-DeGroot<br>Calcolo distribuito della media | Disuguaglianza di Cheeger | Bilancio dettagliato |
| **Agenti testardi** | network | stubborn agents; nodi testardi; matrice substocastica; problema di Dirichlet su grafo | Slides-5 pp. 122-153 | Modello di French-DeGroot<br>Grafo di condensazione | Rete elettrica su un grafo<br>Centralità di influenza armonica | Probabilità di impatto e tempo medio di impatto<br>Funzione armonica |

## Flussi, reversibilità e reti elettriche (Slides 6)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Dinamica lineare di flusso su rete** | network | network flow dynamics; compartmental systems; sistemi compartimentali | Slides-6 pp. 2-21 | Matrice stocastica | — | Modello di French-DeGroot<br>Centralità di Bonacich<br>Laplaciano di un grafo |
| **Bilancio dettagliato** | probabilita | (esistente) | Slides-6 pp. 25-33; Slides-7 p. 39 | — | Disuguaglianza di Cheeger | — |
| **Disuguaglianza di Cheeger** | network | Cheeger inequality; bottleneck ratio; rapporto di strozzatura; conduttanza | Slides-6 pp. 35-36 | Bilancio dettagliato<br>Velocità di convergenza al consenso | — | Spettro del grafo completo |
| **Rete elettrica su un grafo** | network | electrical network; leggi di Kirchhoff e Ohm; equazione di Laplace su grafo; matrice di Green; leggi serie e parallelo | Slides-6 pp. 37-54; Slides-4 p. 21 | Laplaciano di un grafo<br>Ottimizzazione convessa di flussi su rete | Resistenza efficace | Legge di Ohm<br>Agenti testardi |
| **Resistenza efficace** | network | effective resistance; principio di Thomson; principio di Rayleigh | Slides-6 pp. 56-58 | Rete elettrica su un grafo | Centralità di influenza armonica | Principio variazionale di Dirichlet |
| **Centralità di influenza armonica** | network | harmonic influence centrality; optimal targeting | Slides-6 p. 59 | Resistenza efficace<br>Agenti testardi | — | — |

## Catene di Markov e random walk (Slides 7)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Catena di Markov a tempo discreto** | probabilita | (esistente) | Slides-7 pp. 3-6 | — | Random walk su un grafo | — |
| **Random walk su un grafo** | network | random walk on a graph; passeggiata aleatoria su grafo | Slides-7 pp. 3-11, 26 | Matrice stocastica<br>Catena di Markov a tempo discreto | Probabilità di impatto e tempo medio di impatto | Centralità di distribuzione invariante<br>Teorema ergodico per DTMC<br>Distribuzione stazionaria di una DTMC |
| **Distribuzione stazionaria di una DTMC** | probabilita | (esistente) | Slides-7 pp. 7, 11 | — | — | Random walk su un grafo |
| **Teorema ergodico per DTMC** | probabilita | (esistente) | Slides-7 pp. 9, 26 | — | — | — |
| **Probabilità di impatto e tempo medio di impatto** | probabilita | (esistente) | Slides-7 pp. 15-38 | — | — | Agenti testardi |
| **Rovina del giocatore** | probabilita | (esistente) | Slides-7 pp. 13, 20, 34 | — | — | — |
| **Catena di nascita e morte discreta** | probabilita | (esistente) | Slides-7 pp. 41-43 | — | Dinamica evolutiva su rete | — |
| **Catena di Markov a tempo continuo** | probabilita | (esistente) | Slides-7 pp. 44-49 | — | Sistemi di interazione a coppie | — |
| **Catena di nascita e morte continua** | probabilita | (esistente) | Slides-7 pp. 50-53 | — | Epidemia SIS su rete | — |
| **Coda M-M-1** | probabilita | (esistente) | Slides-7 pp. 53-54 | — | — | — |
| **Coda M-M-s** | probabilita | (esistente) | Slides-7 p. 55 | — | — | — |

## Epidemie e sistemi a interazione a coppie (Slides 8)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Sistemi di interazione a coppie** | network | pairwise interacting network systems; nucleo di mutazione; nucleo di interazione; configurazioni assorbenti | Slides-8 pp. 26-37 | Catena di Markov a tempo continuo<br>Grafo | Epidemia SI su rete<br>Epidemia SIS su rete<br>Modello del votante<br>Dinamica evolutiva su rete<br>Sistemi multi-agente anonimi | Modello SIR |
| **Epidemia SI su rete** | network | SI epidemics; tempo di infezione totale | Slides-8 pp. 7, 50-63 | Sistemi di interazione a coppie | — | Epidemia SIS su rete |
| **Epidemia SIS su rete** | network | SIS epidemics; tempo di estinzione; soglia epidemica | Slides-8 pp. 11, 64-67 | Sistemi di interazione a coppie<br>Catena di nascita e morte continua | Modello SIS di campo medio | Teorema di Perron-Frobenius |
| **Modello SIR** | analisi | (esistente) | Slides-8 pp. 15, 77-84; Slides-11 p. 55 | — | — | Sistemi di interazione a coppie |
| **Modello del votante** | network | voter model | Slides-8 pp. 21, 73-74 | Sistemi di interazione a coppie<br>Laplaciano di un grafo | — | Modello di French-DeGroot |
| **Dinamica evolutiva su rete** | network | evolutionary dynamics; probabilità di fissazione; fixation probability | Slides-8 pp. 23, 70-71 | Sistemi di interazione a coppie<br>Catena di nascita e morte discreta | — | Rovina del giocatore<br>Modello di Wright-Fisher |

## Teoria dei giochi (Slides 9)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Equilibrio di Nash** | network | Nash equilibrium; best response; miglior risposta; gioco in forma strategica; strategia dominante; dilemma del prigioniero | Slides-9 pp. 6-21 | — | Giochi 2x2 simmetrici<br>Teorema di esistenza di Nash<br>Gioco potenziale<br>Gioco grafico | Equilibrio di Wardrop |
| **Giochi 2x2 simmetrici** | network | gioco di coordinazione; anti-coordinazione; gioco del pollo; matching pennies; morra cinese | Slides-9 pp. 22-28, 59 | Equilibrio di Nash | — | Gioco potenziale<br>Proprietà di miglioramento finito |
| **Teorema di esistenza di Nash** | network | Nash's theorem; strategie miste; mixed strategy Nash equilibrium; teorema di Kakutani | Slides-9 pp. 29-40 | Equilibrio di Nash | Teorema di Debreu-Glicksberg-Fan | Teorema del punto fisso di Banach |
| **Teorema di Debreu-Glicksberg-Fan** | network | equilibri puri nei giochi continui; Debreu-Glicksberg-Fan | Slides-9 p. 56 | Teorema di esistenza di Nash | — | Competizione di Cournot |
| **Competizione di Cournot** | network | Cournot competition; duopolio di Cournot; oligopolio | Slides-9 pp. 47-49, 66 | Equilibrio di Nash | — | Competizione di Bertrand<br>Gioco potenziale |
| **Competizione di Bertrand** | network | Bertrand competition; paradosso di Bertrand | Slides-9 pp. 51-53 | Equilibrio di Nash | — | Competizione di Cournot |
| **Gioco potenziale** | network | potential game; potenziale esatto; potenziale ordinale; exact potential; ordinal potential | Slides-9 pp. 57-66 | Equilibrio di Nash | Caratterizzazione dei giochi potenziali esatti<br>Proprietà di miglioramento finito<br>Giochi di congestione<br>Giochi separabili a coppie<br>Dinamica di best response | — |
| **Caratterizzazione dei giochi potenziali esatti** | network | campo conservativo; ipercubo; 4-cicli | Slides-9 pp. 67-80 | Gioco potenziale | — | Giochi 2x2 simmetrici |
| **Proprietà di miglioramento finito** | network | finite improvement property; FIP; improvement graph; I-graph; potenziale ordinale generalizzato | Slides-9 pp. 83-92 | Gioco potenziale | Dinamica di best response | Ordinamento topologico |
| **Giochi di congestione** | network | congestion games; potenziale di Rosenthal | Slides-9 pp. 93-95 | Gioco potenziale | — | Equilibrio di Wardrop |

## Giochi su rete e apprendimento (Slides 10)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Gioco grafico** | network | graphical game; G-game | Slides-10 pp. 2-4 | Equilibrio di Nash<br>Grafo | Giochi separabili a coppie | — |
| **Giochi separabili a coppie** | network | pairwise separable games; giochi potenziali separabili a coppie | Slides-10 pp. 6-7, 32-38 | Gioco grafico<br>Gioco potenziale | Gioco di maggioranza<br>Gioco di coordinazione su rete<br>Gioco di colorazione | — |
| **Gioco di maggioranza** | network | majority game; insieme coeso; cohesive set | Slides-10 pp. 10-16, 60-70 | Giochi separabili a coppie | — | Gioco di coordinazione su rete<br>Dinamica logit di campo medio |
| **Gioco di coordinazione su rete** | network | network coordination game; soglia; threshold; complementi strategici | Slides-10 pp. 17-27, 34-35 | Giochi separabili a coppie | — | Agenti testardi |
| **Gioco di colorazione** | network | coloring game; gioco di minoranza; minority game; anti-coordinazione su rete | Slides-10 pp. 30, 36-45, 81 | Giochi separabili a coppie<br>Colorazione di un grafo | — | Noisy best response |
| **Gioco dei beni pubblici best-shot** | network | best-shot public goods game; sostituti strategici | Slides-10 pp. 46-48 | Insieme indipendente<br>Gioco grafico | — | — |
| **Dinamica di best response** | network | best response dynamics; BR dynamics; grafo di best response | Slides-10 pp. 49-73 | Gioco potenziale<br>Proprietà di miglioramento finito | Noisy best response | Grafo di condensazione |
| **Noisy best response** | network | log-linear learning; noisy best response dynamics; misura di Gibbs; dinamica logit | Slides-10 pp. 74-81 | Dinamica di best response<br>Bilancio dettagliato | Dinamica logit di campo medio | Algoritmo di Metropolis-Hastings |

## Modelli di campo medio (Slides 11)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Sistemi multi-agente anonimi** | probabilita | anonymous multi-agent systems; frequenze empiriche; type; processo delle frequenze empiriche | Slides-11 pp. 19-36 | Sistemi di interazione a coppie | Teorema di Kurtz | Catena di nascita e morte continua |
| **Teorema di Kurtz** | probabilita | Kurtz's theorem; limite idrodinamico; hydrodynamic limit; equazione di campo medio | Slides-11 pp. 38, 49-51, 63-68 | Sistemi multi-agente anonimi | Modello SIS di campo medio<br>Dinamica logit di campo medio | Problema di Cauchy |
| **Modello SIS di campo medio** | network | mean field SIS; SIS ODE | Slides-11 pp. 3-13 | Teorema di Kurtz<br>Epidemia SIS su rete | — | Biforcazione<br>Modello SIR |
| **Dinamica logit di campo medio** | network | logit dynamics; mean field logit; giochi anonimi | Slides-11 pp. 14-18, 56-62 | Teorema di Kurtz<br>Noisy best response | — | Gioco di maggioranza<br>Equilibrio di Wardrop<br>Biforcazione |

## Grafi aleatori (Slides 12)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Processo di Galton-Watson** | probabilita | Galton-Watson branching process; processo di ramificazione; probabilità di estinzione; percolazione | Slides-12 pp. 4-13 | — | Componente gigante<br>Modello di configurazione | Distribuzione di Poisson<br>Distribuzione binomiale |
| **Grafo di Erdős-Rényi** | network | Erdos-Renyi random graph; G(n,p); grafo aleatorio | Slides-12 pp. 14-15, 18, 20-22 | Grafo | Connettività del grafo di Erdős-Rényi<br>Componente gigante | Distribuzione di Poisson |
| **Connettività del grafo di Erdős-Rényi** | network | soglia di connessione; nodi isolati; connectivity threshold | Slides-12 pp. 16-17, 21 | Grafo di Erdős-Rényi | — | Componenti connesse di un grafo |
| **Componente gigante** | network | giant component; componente connessa gigante | Slides-12 pp. 19, 21, 32 | Grafo di Erdős-Rényi<br>Processo di Galton-Watson | — | Modello di configurazione |
| **Modello di configurazione** | network | configuration model; distribuzione di grado dal punto di vista del link; link-perspective degree distribution | Slides-12 pp. 23-34 | Processo di Galton-Watson | — | Componente gigante<br>Attaccamento preferenziale |
| **Attaccamento preferenziale** | network | preferential attachment; Barabási-Albert; regola di Price; legge di potenza | Slides-12 pp. 35-38 | Grafo di Erdős-Rényi | — | Modello di configurazione<br>Modello small-world |
| **Modello small-world** | network | small world; Watts-Strogatz; coefficiente di clustering | Slides-12 pp. 40-41 | Grafo di Erdős-Rényi | — | Attaccamento preferenziale |

Altre note esistenti estese con una sezione "Nei corsi", senza righe proprie sopra: Legge di Ohm (rete elettrica, Slides-4 p. 21, Slides-6 pp. 38-40). Nel Teorema di Hall la max-flow min-cut compare come prerequisito (la prova del corso passa da lì) e Ford-Fulkerson come "Porta a".

Note esistenti che ricevono solo un link convertito da "(da collegare)": Metodo delle potenze (verso Centralità di Bonacich, che porta l'alias PageRank) e Canale di pagamento ("Teoria dei giochi" verso Equilibrio di Nash). In Distribuzione stazionaria di una DTMC il "(da collegare)" Random walk su grafi e PageRank è diventato un link a Random walk su un grafo.

## Concetti esterni (da collegare)

- Nessun "(da collegare)" lasciato dalle note di questo corso: tutti i concetti esterni citati esistono già nel wiki.
- Prodotto di grafi (griglie, ipercubi, toro; diam(G1×G2)=diam(G1)+diam(G2), Slides-1 pp. 52-54) e DAG (Slides-1 pp. 39-41) sono citati nella sezione del corso in Grafo, senza nodo proprio.
- Teoremi di Brouwer e Kakutani (Slides-9 pp. 37-40) sono citati in Teorema di esistenza di Nash, senza nodo proprio.

## Dubbi

- Slides-6 p. 32: la catena di autovalori è stampata come $1=\lambda_1<\lambda_2\le\dots\le\lambda_n=-1$, che non è coerente con $\lambda=\max\{\lambda_2,|\lambda_n|\}$ di p. 33. Nella nota Bilancio dettagliato è riportata così com'è con "(da verificare sul PDF)".
- Slides-7 p. 43: le condizioni al bordo sono scritte $H_{0,n}=0$, $H_{1,n}=1$; dal contesto dovrebbe essere $H_{n,n}=1$. Segnalato nella nota Catena di nascita e morte discreta.
- Slides-10 p. 79: il rapporto $P_{xy}/P_{yx}$ è scritto $e^{\beta[\Phi(x)-\Phi(y)]}$, ma la riga successiva (bilancio $e^{\beta\Phi(x)}P_{xy}=e^{\beta\Phi(y)}P_{yx}$) e la misura di Gibbs richiedono $e^{\beta[\Phi(y)-\Phi(x)]}$. In Noisy best response si riportano il bilancio e la misura di Gibbs, segnalando il refuso.
- Slides-2 p. 74 (Bonacich): le slide dicono "$\beta=0\Rightarrow$ centralità intrinseca, $\beta\to1\Rightarrow$ distribuzione invariante", ma con $z=(1-\beta)P'z+\beta\mu$ i due casi risultano scambiati. Segnalato nella nota Centralità di Bonacich.
- Alias in comune con altre note, da riconciliare dal coordinatore: "eigenvector centrality" (anche in Metodo delle potenze, che ha pure "centralità di autovettore"); "matrice di incidenza" è alias di Set covering, partitioning e packing (matrice di incidenza 0-1 della ricerca operativa), mentre qui è il nome della nota sulla matrice nodo-arco. Alias qualificati per evitare collisioni: "probabilità di fissazione su rete" (Wright-Fisher ha "probabilità di fissazione"), "PoA (price of anarchy)" (PoA è anche Proof of Authority), "teorema del punto fisso di Kakutani" (il "teorema di Kakutani" di Ricorrenza e transienza del moto browniano è un altro risultato).
- Random walk su un grafo: l'esempio a 8 nodi di Slides-7 (pp. 35-38) è su un grafo orientato (W non simmetrica), per questo $\pi$ non è proporzionale ai gradi.
- Slides-5 p. 121 (tabella delle prestazioni): per le griglie $d$-dimensionali $1-\lambda_2$ è stampato $Cn^{2/d}$, mentre la coerenza con $\tau_{\mathrm{conv}}=n^{2/d}$ richiederebbe $C/n^{2/d}$. Riportato com'è con "(da verificare sul PDF)".
- Slides-6 p. 49: l'ultima riga scrive "$x_2=16/11$, $x_2=17/11$"; il secondo valore è $x_1$.
- Slides-6 p. 57 (principio di Thomson): il dominio del minimo è stampato $f\in\mathbb R^{\mathcal V}_+$, mentre i flussi vivono su $\mathbb R^{\mathcal E}_+$.
- Slides-7 p. 55 (coda M/M/n): la riga dei tassi è stampata "$\Lambda_{k,k-1}=\mu=k\lambda$"; il disegno mostra tassi di servizio $k\mu$. La formula di Erlang è riportata come sulla slide.
- Nomi: PageRank è un alias di Centralità di Bonacich perché nelle slide è solo il caso $\mu=n^{-1}\mathbb 1$, $\beta\approx0.15$ (Slides-2 p. 70). La centralità di grado è dentro Centralità ad autovettore (è il suo punto di partenza, Slides-2 pp. 55-60). Il gioco di minoranza è dentro Gioco di colorazione (le slide dicono che con $k=2$ è essenzialmente lo stesso gioco). La formula di Kac ($\pi_i=1/\mathbb E_i[T_i^+]$) è in Random walk su un grafo e non ha nodo proprio. La periodicità di un grafo (Slides-1) estende Periodo di uno stato invece di creare un doppione.
