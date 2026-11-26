---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["no free lunch theorem", "no-free-lunch", "NFL", "learner universale", "universal learner", "conoscenza a priori", "prior knowledge"]
tags: [competenza, area/data-ml]
---

# Teorema no free lunch

> Non esiste un algoritmo di apprendimento universale: per ogni learner c'è una distribuzione su cui fallisce, anche se un altro learner la impara; per questo serve conoscenza a priori, cioè restringere $H$.

## Definizione / enunciato
**Teorema (no free lunch).** Sia $A$ un qualunque algoritmo di classificazione binaria con perdita 0-1 su un dominio $\mathcal X$ e sia $m<|\mathcal X|/2$ la taglia del training set. Allora esiste una distribuzione $D$ su $\mathcal X\times\{0,1\}$ tale che:
(a) esiste $h:\mathcal X\to\{0,1\}$ con $R(h)=0$;
(b) con probabilità almeno $1/7$ sulla scelta di $S\sim D^m$ si ha $R(A(S))\ge1/7$.

## Formule chiave
**Corollario (conoscenza a priori).** Se $\mathcal X$ è infinito e $H$ è l'insieme di **tutte** le funzioni $\mathcal X\to\{0,1\}$, allora $H$ non è PAC-apprendibile.

## Intuizione
Un learner senza ipotesi sul problema non sa come etichettare i punti che non ha visto; se i punti non visti sono più della metà del dominio, un "avversario" può scegliere le etichette in modo da farlo sbagliare. Ogni learner ha compiti su cui fallisce mentre altri riescono.

## Come si usa
Motiva la restrizione dello spazio di ricerca a una classe $H$ che riflette la conoscenza a priori: si vorrebbe che $H$ contenga un'ipotesi con errore nullo (caso PAC) o almeno piccolo (caso agnostico). Ma non si può scegliere la classe più ricca possibile: da qui il compromesso fra errore di stima ed errore di approssimazione.

## Nei corsi
- **Matematica per l'AI** (triennale): introduzione alla lezione "Model selection" (con letture dal cap. 5 di Shalev-Shwartz e Ben-David). Fonti: `triennale/ANNO 3/matematica AI/ERM_SRM_CV.pdf` (p. 3-6) = `MIA_01W.pdf` (p. 131-134).

## Prerequisiti
- [[Modello PAC]]: la conclusione riguarda la PAC-apprendibilità
- [[Errore di generalizzazione]]: l'enunciato è su $R(A(S))$

## Porta a
- [[Errore di stima ed errore di approssimazione]]: come scegliere $H$

## Collegati
- [[Dimensione VC]]: la classe di tutte le funzioni frantuma ogni insieme finito
- [[Overfitting e pruning]]: i dati di training possono ingannare il learner
