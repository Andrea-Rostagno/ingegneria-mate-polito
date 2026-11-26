---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["independent set", "insieme indipendente di nodi", "insieme indipendente massimale", "maximal independent set", "insieme indipendente massimo", "maximum independent set", "stable set"]
tags: [competenza, area/network]
---

# Insieme indipendente

> Un insieme di nodi a due a due non adiacenti; cercarne uno di cardinalità massima è difficile, trovarne uno massimale (non allargabile) è facile.

## Definizione / enunciato
In un grafo semplice $\mathcal G=(\mathcal V,\mathcal E)$, $\mathcal W\subseteq\mathcal V$ è **indipendente** se per ogni $i,j\in\mathcal W$ vale $(i,j)\notin\mathcal E$.
- **Massimo**: di cardinalità massima tra tutti gli insiemi indipendenti.
- **Massimale**: non si può allargare aggiungendo un nodo senza perdere l'indipendenza.
Ogni insieme massimo è massimale, non viceversa.

## Formule chiave
L'analogo sugli archi è il **matching** (insieme di archi indipendenti): $F\subseteq\mathcal E$ senza nodi in comune. In un bipartito $\mathcal V_1\cup\mathcal V_2$ vale $|F|\le\min\{|\mathcal V_1|,|\mathcal V_2|\}$.
Nel gioco dei beni pubblici best-shot: $x\in\{0,1\}^n$ è equilibrio di Nash se e solo se $\{i:x_i=1\}$ è un insieme indipendente massimale.

## Intuizione
L'insieme indipendente è il complemento "positivo" della colorazione: un colore è un insieme indipendente. Massimale vuol dire che ogni nodo escluso ha almeno un vicino dentro l'insieme.

## Come si usa
Esempio delle slide (un solo drone): gli archi dicono quali luoghi non possono essere pattugliati dallo stesso drone; il numero massimo di luoghi sorvegliabili da un drone è la cardinalità di un insieme indipendente massimo, e si chiede di trovare tutti gli insiemi di quella cardinalità. Un insieme massimale si ottiene in modo greedy aggiungendo nodi finché è possibile.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 1 ("A different patrolling problem", "Independent sets"); ripreso in Slides 10 per il gioco best-shot. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 97-102); `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (p. 48).

## Prerequisiti
- [[Grafo]]: grafo semplice e adiacenza

## Porta a
- [[Gioco dei beni pubblici best-shot]]: gli equilibri sono gli insiemi indipendenti massimali

## Collegati
- [[Colorazione di un grafo]]: le classi di colore sono insiemi indipendenti
- [[Teorema di Hall]]: il matching è l'insieme indipendente di archi
