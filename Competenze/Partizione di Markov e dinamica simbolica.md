---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Markov partition", "partizione di Markov", "symbolic dynamics", "dinamica simbolica", "subshift di tipo finito", "subshift of finite type", "shift di Bernoulli", "Bernoulli shift", "rettangolo di una partizione", "teorema di Bowen", "grammatica di transizione"]
tags: [competenza, area/analisi]
---

# Partizione di Markov e dinamica simbolica

> In un sistema iperbolico lo spazio si divide in celle costruite con pezzi di varietà stabili e instabili, così che ogni traiettoria corrisponde a una sequenza di simboli e la dinamica deterministica diventa una catena di Markov sulle celle.

## Definizione / enunciato
Sia $I$ compatto e invariante per un diffeomorfismo iperbolico $\varphi$. Un **rettangolo** per $I$ è un chiuso $R\subseteq I$ tale che per $x,y\in R$ l'intersezione $W_s(x)\cap W_u(y)$ è esattamente un punto, in $R$ (i rettangoli possono essere insiemi sconnessi, tipo Cantor). Una **partizione di Markov** è una famiglia finita di rettangoli $\{R_1,\dots,R_m\}$ con
1. $I=\bigcup_{i=1}^mR_i$;
2. $\mathrm{int}R_i\cap\mathrm{int}R_j=\emptyset$ per $i\neq j$;
3. $\varphi(W_u(x,R_i))\supseteq W_u(\varphi x,R_j)$ e $\varphi(W_s(x,R_i))\subseteq W_s(\varphi x,R_j)$ quando $x\in\mathrm{int}R_i$, $\varphi x\in\mathrm{int}R_j$ (versi delle inclusioni da verificare sul PDF, p. 7: il testo estratto perde i simboli).

**Teorema di Bowen** (1975): i sistemi continuamente iperbolici ammettono partizioni di Markov di diametro arbitrariamente piccolo.

## Formule chiave
Si assegna il simbolo $i$ quando la traiettoria tocca la cella $i$; alfabeto $\{1,\dots,m\}$, traiettoria $\mathbf w=(\dots,w_{-1},w_0,w_1,\dots)$ e $x=\bigcap_{n=-\infty}^{\infty}\varphi^{-n}(c_{w_n})$. La dinamica diventa lo **shift** $(\sigma\mathbf w)_n=w_{n+1}$. Matrice di transizione 0-1 ("grammatica"): $A_{w_nw_{n+1}}=1$ se la transizione è ammessa, 0 altrimenti; il **subshift di tipo finito** è $(\Sigma,A,\sigma)$ con $\Sigma=\{\mathbf w:A_{w_nw_{n+1}}=1\ \forall n\}$. Lo **shift di Bernoulli** ha $A_{ww'}=1$ per ogni coppia (il gas di Lorentz ne è equivalente).

## Intuizione
Sequenze periodiche di simboli identificano orbite periodiche; se tutte le sequenze sono ammesse, le orbite periodiche sono dense e il loro numero cresce esponenzialmente con il periodo (esempio con alfabeto $\{0,1\}$: 2 orbite di lunghezza 1, 3 di lunghezza 2, 4 di lunghezza 3...). Per l'ergodicità, le frazioni di spazio delle fasi diventano frequenze, cioè probabilità: si ha un **processo di Markov sulle celle**.

## Come si usa
Riduce lo studio di un sistema caotico a quello di sequenze simboliche; la mappa logistica con $\mu=4$ è coniugata allo shift binario, che spiega la sua imprevedibilità.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 6-9).

## Prerequisiti
- [[Insieme iperbolico]]: i sistemi iperbolici ammettono partizioni di Markov
- [[Varietà stabile e instabile]]: i lati delle celle

## Porta a
- [[Caos deterministico]]: imprevedibilità come shift di simboli

## Collegati
- [[Catena di Markov a tempo discreto]]: la dinamica sulle celle è una catena di Markov
- [[Matrice di adiacenza]]: la matrice 0-1 delle transizioni ammesse
