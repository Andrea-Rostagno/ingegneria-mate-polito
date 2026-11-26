---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Ottimizzazione in condizione di incertezza, Financial engineering]
livello: [magistrale]
aliases: [Brownian motion, processo di Wiener, Wiener process, moto browniano standard, moto browniano d-dimensionale]
tags: [competenza, area/probabilita]
---

# Moto browniano

> Processo a tempo continuo con traiettorie continue e incrementi indipendenti, stazionari e gaussiani: limite delle passeggiate aleatorie e rumore di base del calcolo stocastico.

## Definizione / enunciato
$(W_t)_{t\ge0}$ è un moto browniano unidimensionale se:
1. $W_0=0$ q.c.;
2. $t\mapsto W_t$ è continua q.c.;
3. ha incrementi indipendenti;
4. ha incrementi stazionari gaussiani: $W_{t+h}-W_t\sim N(0,h)$ per ogni $t,h\ge0$.

Costruito formalmente da Wiener nel 1923. Un moto browniano **$d$-dimensionale** è $W_t=(W^1_t,\dots,W^d_t)$ con componenti browniani unidimensionali indipendenti.

## Formule chiave
$$\mathbb E[W_t]=0,\qquad\mathrm{Var}(W_t)=t,\qquad\mathrm{Cov}(W_s,W_t)=\min(s,t),\qquad W_t-W_s\sim N(0,t-s).$$
$\mathbb E[|W_t|]=\sqrt{2t/\pi}$ (legge half-normal; la radice è persa nell'OCR, da verificare sul PDF).

## Intuizione
Modello di Einstein (1905): una particella riceve un urto ogni $1/k$ unità di tempo, con spostamenti indipendenti di media $0$ e varianza $1/k$; $W_{t+h}-W_t=\sum_{n=tk}^{tk+hk}X_n$. Per $k\to\infty$ la traiettoria diventa continua, gli incrementi su intervalli disgiunti indipendenti e, per il teorema del limite centrale, $W_{t+h}-W_t\approx N(0,h)$.

## Come si usa
Esercizi tipici (`suggested_exercises_brownian_motion.pdf`): calcolare $\mathbb E[W_tW_{t+h}W_{t+h+s}]$, la legge di $aW_t+bW_{t+h}+cW_{t+h+s}$, $P(W_2-2W_3\le4)$, $P(W_{5.6}\le10\mid W_{3.6}=2,W_2=4)$, $P(W_2\le5,W_4\ge6)$. Ricetta del `.tex`: scomporre in incrementi indipendenti e usare la normalità; per massimi e hitting il principio di riflessione; per riscalamenti tempo $ct$ e spazio $\sqrt c$; ricordare che continuità non vuol dire variazione finita. Applicazioni (lezione 22): rumore bianco nelle equazioni differenziali stocastiche, ad esempio Ornstein-Uhlenbeck $dz=\theta(\mu-z)dt+\sigma dW_t$.

## Nei corsi
- **Processi stocastici** (magistrale): argomenti d'orale 16-19. Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23), `riassunto_del_corso.tex` §Moto browniano, `suggested_exercises_brownian_motion.pdf` (es. A, B).
- **Ottimizzazione in condizione di incertezza** (magistrale): simulazione delle traiettorie del processo di Wiener su $[0,T]$ con passo $\delta t=T/n$: incrementi $\Delta W(t_k)=\sqrt{\delta t}\,\epsilon_{k+1}$ con $\epsilon_k$ normali standard indipendenti e somme cumulate $W(t_k)=\sqrt{\delta t}\sum_{j\le k}\epsilon_j$ (in MATLAB `cumsum` sulle righe, 100 traiettorie di 500 passi). Le traiettorie sono continue ma non differenziabili; qui si ha errore di campionamento ma non di discretizzazione. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 3-5).
- **Financial engineering** (magistrale): definizione (def. c11-moto-browniano) con $W_t-W_s$ indipendente da $\mathcal F_s$; covarianza $\min(s,t)$ e correlazione $\sqrt{\min(s,t)/\max(s,t)}$ (prop. c11-covarianza); è di Markov e martingala (prop. c11-markov-martingala), limite della passeggiata riscalata. Nel libro $W_t$ (D'Onofrio scrive $B_t$, Hull $z$) perché $B$ è il conto in banca. Esempio: $Z=2W_1-W_4=W_1-(W_4-W_1)\sim\mathcal N(0,4)$, $\mathbb P(Z>1)=0.3085$ (metodo degli incrementi indipendenti). Scala $\Delta x=\sqrt{\Delta t}$ come nel CRR. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/34 - 15 aprile - Lesson 1 -WP-SC_Italiano.pdf`, `magistrale/Financial engineering/onofrio/Lezione 01 - analisi stocastica - 24 apr 26.pdf`.

## Porta a
- [[Caratterizzazione gaussiana del moto browniano]]: definizione equivalente via processo gaussiano
- [[Proprietà di Markov forte del moto browniano]]: incrementi indipendenti dal passato
- [[Martingale del moto browniano]]: incrementi gaussiani centrati
- [[Hölderianità delle traiettorie browniane]]: momenti degli incrementi gaussiani
- [[Variazione quadratica del moto browniano]]: incrementi gaussiani indipendenti

## Collegati
- [[Generatore infinitesimale]]: generatore del browniano è mezzo laplaciano
- [[Processo di Poisson]]: incrementi indipendenti e stazionari
- [[Simulazione a eventi discreti]]: Wiener a traiettorie continue contro DEDS costanti a tratti (Ottimizzazione in condizione di incertezza)
- [[Equazione differenziale stocastica]]: rumore delle SDE (corso Financial engineering)
- [[Integrale di Itô]]: integrale rispetto al browniano
- [[Moto browniano con drift]]: $x_0+\mu t+\sigma W_t$
