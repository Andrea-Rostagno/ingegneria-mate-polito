---
tipo: meta
tags: [meta, mappa]
corso: Numerical opt
livello: magistrale
cartella: magistrale/Numerical opt
---

# Mappa delle competenze: Numerical opt

Mappa concettuale del corso `magistrale/Numerical opt` (Numerical Optimization for Large Scale Problems, S. Pieraccini e F. Della Santa, Politecnico di Torino, a.a. 2025/26; corso in inglese, note scritte in italiano con i termini inglesi come alias). **47 competenze: 18 nuove e 29 esistenti estese** con un punto "Numerical opt" nella sezione "Nei corsi".
- **Grafo del corso:** 112 collegamenti interni tra le 47 note, 1 componente connessa, grado minimo 2, più 232 collegamenti verso note di altri corsi (conteggi calcolati da script sulle note).
- **Colonne delle tabelle:** riportano i collegamenti principali che il corso aggiunge o usa. Per le note esistenti non elencano quelli scritti dagli altri corsi.
- **Colonna alias delle note esistenti:** riporta i termini inglesi del corso. Come alias veri sono stati aggiunti solo a Backtracking line search, Condizioni di Karush-Kuhn-Tucker, Metodo di Newton per sistemi e Funzioni di penalità e barriera.
- **Nomi:** sono in testo semplice (non wikilink), così la mappa non entra nel grafo.

**Fonti.**
- **Primarie (teoria):** le dispense manoscritte di S. Pieraccini in `Pieraccini/` (7 PDF, 197 pagine). Le parti 2 e 3 sono scansioni senza testo; le parti 1 e 4-7 hanno un OCR inservibile per le formule. Tutte sono state lette su fogli renderizzati di 4 pagine a bassa risoluzione. Sono state rilette a risoluzione maggiore le pagine con le formule chiave: DFP/BFGS/SMW (P3 p. 36-42), regola di $\tau$ (P3 p. 15-16), FR/PR (P2 p. 28-29), Newton troncato (P3 p. 27). Non sono state aperte P1 p. 1-4 (logistica e dataset) e p. 9-16 (convessità, norme in parte fuori programma) e P4 p. 13-16; per queste vale solo la trascrizione `Teoria/`. Le pagine citate sono quelle dei fogli visti. Nella colonna "fonte principale" `Pk p. X` indica la pagina del PDF `Part_k_...pdf`:
  - P1 introduzione, norme, ordini di convergenza, metodi iterativi per sistemi lineari;
  - P2 ottimizzazione non vincolata: condizioni di ottimalità, Nelder-Mead, metodi del primo ordine, line search;
  - P3 metodi del secondo ordine: Newton, Newton modificato, inesatto, troncato, quasi-Newton;
  - P4 equazioni non lineari e minimi quadrati non lineari;
  - P5 ottimizzazione vincolata: teoria, proiezione, gradiente proiettato, Lagrange, KKT;
  - P6 programmazione quadratica con vincoli di uguaglianza;
  - P7 metodi di penalità, lagrangiana aumentata, ADMM, LASSO.
- **Primarie (laboratorio):** `DellaSanta/NO4LSP_DellaSanta_2526.pdf` (dispensa LaTeX delle esercitazioni, 58 pagine), citata come `DS §n`. Usate solo le sezioni teoriche, non gli "Exercises". Il testo estratto perde lettere greche, segni e norme: le formule dubbie sono state controllate sulle pagine.
- **Secondarie:** gli appunti a mano annotati in `DellaSanta/*_annotato.pdf`. Ne è stata vista solo p. 1 di due file: il riepilogo sulle differenze finite (2025-10-08) e le differenze finite per Rosenbrock (2026-01-08). I file 2025-10-10 e 2025-11-20 non sono stati aperti. e `Laboratorio/02 - Differrenze finite.pdf` (consigli di implementazione).
- **Solo indizio:** `Teoria/01-04` sono una trascrizione (OCR) delle lezioni Pieraccini, con lo stesso ordine e note a margine in italiano. Sono serviti per orientarsi. Le formule riportate nelle note sono state confermate sulle pagine Pieraccini o sulla dispensa DS; quelle non confermate sono marcate "(da verificare sul PDF)".
- **Codice:** i `.m`/`.py` in `DellaSanta/labs/` (`steepest_desc_bcktrck.m`, `newton_bcktrck.m`, `innewton_bcktrck.m`, `gaussnewton.m`, `projgrad_bcktrck.m`, `QPeq_Schur.m`, `findiff_grad.m`, `ad_grad_func.m`, ...) solo come esempi di implementazione.
- **Non usati:**
  - `NO4LSP_Assignments_2526.pdf` (in radice e in `Laboratorio/`): consegne del progetto, escluse per la regola "niente esami";
  - `NO4LSP-SO-project/` e `scenario_tree/`: report, codice e immagini del progetto di gruppo;
  - `Laboratorio/V897-03.pdf`: rapporto tecnico Lukšan-Vlček con funzioni test, non teoria del corso;
  - `Laboratorio/Lab7.pdf`, `Lab8.pdf`, `Lab9.pdf`: versioni parziali della dispensa Della Santa (gli indici coincidono con i capitoli 1-7, 1-8, 1-9);
  - in P1, le informazioni sull'esame e il richiamo sulle norme indotte marcato "not part of the program".

## Fondamenti

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Modello di ottimizzazione (esistente) | ottimizzazione | general optimization problem; loss function | P1 p. 3-7 | | Punti critici in più variabili | Problema di ottimizzazione convessa |
| Problema di ottimizzazione convessa (esistente) | ottimizzazione | local minimum of a convex function is global | P1 p. 8-12; P2 p. 2 | Modello di ottimizzazione | Condizione di ottimalità su insieme convesso | |
| Ordine di convergenza di un metodo iterativo (esistente) | numerica | Q-linear; Q-superlinear; Q-order q; stima sperimentale dell'ordine | P1 p. 20-21; DS §7.2 | | Metodo di Newton inesatto | Metodo di Newton in ottimizzazione |
| Criteri di arresto dei metodi iterativi (esistente) | numerica | stopping criteria; relative residual | P1 p. 19, 33-37 | | Metodo di Newton inesatto | Condizionamento di un sistema lineare |
| Punti critici in più variabili (esistente) | analisi | first-order necessary condition | P2 p. 1 | Modello di ottimizzazione | Condizione di ottimalità su insieme convesso | Classificazione dei punti critici |
| Classificazione dei punti critici (esistente) | analisi | second-order necessary/sufficient conditions | P2 p. 2 | Punti critici in più variabili | Metodo di Newton in ottimizzazione | |

## Sistemi lineari di grandi dimensioni

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Fattorizzazione LU (esistente) | numerica | lu; decomposition in Matlab/Python | DS §1.2-1.6 | | Metodo del complemento di Schur | Matrice sparsa |
| Fattorizzazione di Cholesky (esistente) | numerica | chol | DS §1.5; P3 p. 16 | | Metodo di Newton modificato | Precondizionamento |
| Matrice sparsa (esistente) | numerica | fill-in phenomenon | DS §1.7 | Fattorizzazione LU | Precondizionamento | Metodo del complemento di Schur |
| Condizionamento di un sistema lineare (esistente) | numerica | condition number | P1 p. 37; DS §1.4 | | Metodo del gradiente | Metodo di Newton modificato |
| Metodi di discesa (esistente) | numerica | quadratic function J(x); descent direction | P1 p. 22-24; P2 p. 11-16 | | Metodo del gradiente; Condizioni di Wolfe | Teorema di Zoutendijk |
| Metodo del gradiente (esistente) | numerica | steepest descent; exact line search | P1 p. 24-30, 37; P2 p. 9-11; DS §3.1, §4 | Metodi di discesa | Gradiente coniugato non lineare; Metodo del gradiente proiettato | Teorema di Zoutendijk |
| Metodo del gradiente coniugato (esistente) | numerica | conjugate gradient; pcg | P1 p. 30-34, 37-38; DS §3.2 | Metodi di discesa | Gradiente coniugato non lineare; Metodo di Newton troncato | Metodo di Newton inesatto |
| Precondizionamento (esistente) | numerica | incomplete Cholesky; ichol; ilu | P1 p. 38-44; DS §3.2.1 | Fattorizzazione di Cholesky | | Metodo del gradiente coniugato |

## Derivate per l'ottimizzazione

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Formule di derivazione numerica (esistente) | numerica | forward/backward/centered FD | DS §2; `2025-10-08-Nota-14-25_annotato.pdf` | | Gradiente e hessiana alle differenze finite | |
| Gradiente e hessiana alle differenze finite | numerica | finite difference gradient; finite difference Hessian; finite difference Jacobian; scelta del passo h | DS §2.1-2.3 | Formule di derivazione numerica; Cancellazione numerica | Metodi quasi-Newton | Differenziazione automatica; Matrice sparsa; Precisione di macchina |
| Differenziazione automatica | numerica | automatic differentiation; AD; forward mode; reverse mode; computational graph | DS §12 | Matrice jacobiana | Metodo del gradiente | Backpropagation; Gradiente e hessiana alle differenze finite |
| Backpropagation (esistente) | data-ml | reverse mode AD | DS §12 | | | Differenziazione automatica |

## Metodi del primo ordine e line search

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Metodo di Nelder-Mead (esistente) | ottimizzazione | zero-order method; simplex | P2 p. 3-8 | | | Pattern search; Metodo del gradiente |
| Backtracking line search (esistente) | ottimizzazione | Armijo condition; inexact line search | P2 p. 17-25; DS §5.1 | Metodi di discesa | Condizioni di Wolfe | Metodo del gradiente proiettato |
| Condizioni di Wolfe | ottimizzazione | Wolfe conditions; curvature condition; condizione di curvatura | P2 p. 20-22, 26 | Backtracking line search; Metodi di discesa | Teorema di Zoutendijk | Metodi quasi-Newton |
| Teorema di Zoutendijk | ottimizzazione | Zoutendijk's theorem; convergenza globale | P2 p. 25-27 | Condizioni di Wolfe; Metodi di discesa | Metodo del gradiente; Metodo di Newton in ottimizzazione; Metodo di Newton inesatto | Metodo di Newton modificato |
| Gradiente coniugato non lineare | ottimizzazione | nonlinear conjugate gradient; Fletcher-Reeves; Polak-Ribière; FR-CG; PR-CG | P2 p. 27-29 | Metodo del gradiente coniugato; Backtracking line search | | Metodo del gradiente |

## Metodi del secondo ordine

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Metodo di Newton in ottimizzazione (esistente) | ottimizzazione | Newton step; Newton with line search | P3 p. 1-6; DS §6 | Classificazione dei punti critici | Metodo di Newton modificato; Metodo di Newton inesatto; Metodi quasi-Newton | Teorema di Zoutendijk |
| Metodo di Newton modificato | ottimizzazione | modified Newton method; Hessian modification; bounded condition number | P3 p. 6-17 | Metodo di Newton in ottimizzazione; Fattorizzazione di Cholesky; Condizionamento di un sistema lineare | | Metodo di Newton troncato; Teorema di Zoutendijk |
| Metodo di Newton inesatto | ottimizzazione | inexact Newton method; forcing terms; termini forzanti | P3 p. 17-24; DS §7.1, §8.2 | Metodo di Newton in ottimizzazione; Metodo del gradiente coniugato; Criteri di arresto dei metodi iterativi | Metodo di Newton troncato | Ordine di convergenza di un metodo iterativo; Metodo di Newton per sistemi |
| Metodo di Newton troncato | ottimizzazione | truncated Newton method; line search Newton-CG; Newton-CG | P3 p. 25-29 | Metodo di Newton inesatto; Metodo del gradiente coniugato | | Metodo di Newton modificato; Metodo del gradiente |
| Metodi quasi-Newton | ottimizzazione | quasi-Newton; secant equation; equazione delle secanti; DFP update; BFGS update; Sherman-Morrison-Woodbury | P3 p. 29-43 | Metodo di Newton in ottimizzazione; Metodo delle secanti; Formule di derivazione numerica; Gradiente e hessiana alle differenze finite | | Metodo L-BFGS; Condizioni di Wolfe |

## Equazioni non lineari e minimi quadrati

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Metodo di Newton per sistemi (esistente) | numerica | Newton-tangent method | P4 p. 1-5; DS §8 | | Funzione di merito | Metodo di Newton inesatto |
| Funzione di merito | ottimizzazione | merit function; Newton with line search for nonlinear equations | P4 p. 6-8; DS §8.1 | Metodo di Newton per sistemi | Metodo di Gauss-Newton | Backtracking line search; Metodo di Newton inesatto |
| Problema dei minimi quadrati (esistente) | numerica | linear least squares; nonlinear least squares | P4 p. 9-10, 21-24; DS §9.1 | | Metodo di Gauss-Newton | ADMM |
| Metodo di Gauss-Newton | ottimizzazione | Gauss-Newton method; nonlinear least squares; minimi quadrati non lineari | P4 p. 9-24; DS §9 | Funzione di merito; Problema dei minimi quadrati; Metodo di Newton in ottimizzazione; Matrice jacobiana | Regressione lineare | |
| Regressione lineare (esistente) | statistica | linear/nonlinear regression as least squares | DS §9.2 | Problema dei minimi quadrati | | Metodo di Gauss-Newton |

## Ottimizzazione vincolata: teoria e gradiente proiettato

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Condizione di ottimalità su insieme convesso | ottimizzazione | first-order optimality on a convex set; punto stazionario vincolato | P5 p. 1-4; DS §10.1 | Insieme convesso; Punti critici in più variabili | Metodo del gradiente proiettato | Problema di ottimizzazione convessa |
| Teorema della proiezione (esistente) | analisi | projection onto a convex set | P5 p. 4-9; DS §10.3 | | Metodo del gradiente proiettato | |
| Metodo del gradiente proiettato | ottimizzazione | projected gradient method; PGM; projection onto box; projection onto sphere | P5 p. 4-10; DS §10 | Teorema della proiezione; Condizione di ottimalità su insieme convesso; Metodo del gradiente | | Backtracking line search |
| Moltiplicatori di Lagrange (esistente) | ottimizzazione | Lagrange multiplier theorem; Lagrangian function | P5 p. 10-16 | | Condizioni di Karush-Kuhn-Tucker; Matrice KKT | Constraint qualification |
| Constraint qualification (esistente) | ottimizzazione | LICQ; regular point | P5 p. 12-17 | | Matrice KKT | Moltiplicatori di Lagrange |
| Condizioni di Karush-Kuhn-Tucker (esistente) | ottimizzazione | active set; strict complementarity | P5 p. 16-18; DS §11 | Moltiplicatori di Lagrange | Programmazione quadratica | |

## Programmazione quadratica e metodi di penalità

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Programmazione quadratica (esistente) | ottimizzazione | equality-constrained QP | P6 p. 1-2; DS §11.2-11.3 | Condizioni di Karush-Kuhn-Tucker | Matrice KKT | |
| Matrice KKT | ottimizzazione | KKT matrix; KKT system; sistema KKT; inerzia della matrice KKT; inertia | P6 p. 2-6; DS §11.3 | Programmazione quadratica; Moltiplicatori di Lagrange; Constraint qualification; Matrice simmetrica definita positiva | Metodo del complemento di Schur; Metodo dello spazio nullo | |
| Metodo del complemento di Schur | ottimizzazione | Schur complement method; range-space method | P6 p. 6-9; DS §11.4 | Matrice KKT | | Metodo dello spazio nullo; Fattorizzazione LU; Matrice sparsa |
| Metodo dello spazio nullo | ottimizzazione | null space method; base del nucleo; particular solution | P6 p. 9-12; DS §11.5 | Matrice KKT | | Metodo del complemento di Schur |
| Funzioni di penalità e barriera (esistente) | ottimizzazione | quadratic penalty function | P7 p. 1-3 | | Metodo della lagrangiana aumentata | |
| Metodo della lagrangiana aumentata | ottimizzazione | augmented Lagrangian method; method of multipliers; metodo dei moltiplicatori | P7 p. 3-8 | Funzioni di penalità e barriera; Moltiplicatori di Lagrange | ADMM | |
| ADMM | ottimizzazione | alternating direction method of multipliers; scaled ADMM; soft thresholding | P7 p. 9-14 | Metodo della lagrangiana aumentata | Regressione regolarizzata | Problema dei minimi quadrati |
| Regressione regolarizzata (esistente) | statistica | LASSO via ADMM | P7 p. 12-14 | | | ADMM |

## Concetti esterni (da collegare)

- GMRES (metodo di Krylov per sistemi non simmetrici o indefiniti; citato in P1 p. 38 e P6 p. 6): nessuna nota nel registro.
- Fattorizzazione LDLᵀ per matrici simmetriche indefinite (P1 p. 38, P6 p. 6): nessuna nota nel registro.
- Insieme di livello compatto (ipotesi del teorema sul Newton modificato, P3 p. 11): tenuto dentro la nota.
- Ottimizzazione non smooth con gradienti generalizzati (P2 p. 1; penalità con $g^+$, P7 p. 2): citata solo come esclusa dal corso.

## Dubbi

- **Argomenti richiesti ma assenti dal materiale.** Trust region, metodi barriera, SQP, Levenberg-Marquardt, L-BFGS e SR1 non compaiono né nelle lezioni Pieraccini né nella dispensa Della Santa ("trust" ricorre solo come verbo). Non ho creato né esteso note per loro. La nota `Metodo trust region` esistente non riceve la sezione Numerical opt; `Funzioni di penalità e barriera` la riceve solo per la penalità quadratica.
- **Alias quasi-Newton sovrapposti.** `Metodo di Newton in ottimizzazione` (Ricerca operativa) ha già gli alias "metodi quasi-Newton; BFGS; DFP" e `Metodo L-BFGS` ha "aggiornamento BFGS; condizione delle secanti". La nota nuova `Metodi quasi-Newton` contiene il materiale esteso del corso (equazione delle secanti, DFP, BFGS, Sherman-Morrison-Woodbury) e non ridichiara quegli alias. Gli alias altrui non sono stati toccati: il coordinatore può decidere se spostarli.
- **Sherman-Morrison-Woodbury** è tenuta dentro `Metodi quasi-Newton`, perché nel corso serve solo a ottenere l'aggiornamento dell'inversa in DFP e BFGS.
- **Convenzioni di segno della lagrangiana.** P5-P6 usano $\mathcal L=f+\lambda^Th+\mu^Tg$ con $g\le0$. P7 passa a $f-\lambda^Th$ ("to be consistent with the book"). DS §11 usa $f-\lambda^Tg-\mu^Th$ con $g\ge0$: $\lambda$ va alle disuguaglianze e $\mu$ alle uguaglianze, cioè le lettere sono scambiate. Nel QP (§11.3-11.4) DS scrive $\pm A^T$ e poi sceglie il "+", come P6. Ogni nota dichiara la convenzione della fonte citata.
- **Teoria/** è una trascrizione OCR delle lezioni (forse dell'utente). Non è citata come fonte di formule.
- **Nome file coincidente con un alias altrui.** "Metodi quasi-Newton" coincide (a parte la maiuscola) con l'alias "metodi quasi-Newton" di `Metodo di Newton in ottimizzazione`: in Obsidian l'alias può risolvere ambiguamente. Va deciso dal coordinatore.
- **Collegamenti concettuali non presenti nelle note.** `Metodo della lagrangiana aumentata` → Dualità lagrangiana e `ADMM` → Subgradiente sono segnalati nel motivo del link.
- **Formule segnalate:**
  - segno dell'aggiornamento del residuo nel Newton troncato: P3 p. 27 scrive "+", la coerenza con $r=c-Bz$ richiede "−";
  - ultimo passo del complemento di Schur: P6 p. 10 scrive "$Qx=-(A^T\lambda+b)$", la derivazione di p. 9 e DS danno $-c-A^T\lambda$;
  - soglia $\tau/\mu_k$ dell'ADMM-LASSO: calcolata da me riscalando i passaggi di P7 p. 16-17.
