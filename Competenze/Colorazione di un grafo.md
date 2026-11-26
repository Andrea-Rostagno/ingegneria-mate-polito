---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["graph coloring", "colorazione dei grafi", "numero cromatico", "chromatic number", "k-colorabile", "k-colorable", "problema della colorazione"]
tags: [competenza, area/network]
---

# Colorazione di un grafo

> Assegnare a ogni nodo un colore tra $k$ in modo che nodi adiacenti abbiano colori diversi; il minimo $k$ possibile è il numero cromatico.

## Definizione / enunciato
Dato $\mathcal G=(\mathcal V,\mathcal E)$ semplice, una **colorazione con $k$ colori** è una funzione $\psi:\mathcal V\to\Omega=\{1,\dots,k\}$ tale che
$$(i,j)\in\mathcal E\ \Rightarrow\ \psi(i)\neq\psi(j).$$
$\mathcal G$ è **$k$-colorabile** se esiste una colorazione con $k$ colori; il minimo $k$ è il **numero cromatico** di $\mathcal G$.

## Formule chiave
- Grafi bipartiti (alberi, cicli pari, griglie): numero cromatico 2.
- Ciclo di lunghezza dispari: numero cromatico 3.
- Grafi planari: numero cromatico al più 4 (problema dei 4 colori).
Problemi proposti nelle slide: numero cromatico di $K_n$, del grafo barbell, della griglia $L_h\times L_k$, dell'ipercubo (enunciati senza soluzione).

## Intuizione
Un arco è un vincolo "non insieme". Colorare vuol dire dividere i nodi in $k$ insiemi indipendenti; il numero cromatico misura quanto il grafo è "denso di conflitti".

## Come si usa
Esempio delle slide (pattugliamento con droni): $\mathcal V$ sono luoghi da sorvegliare, un arco $(i,j)$ dice che $i$ e $j$ non possono essere sorvegliati dallo stesso drone. Il numero minimo di droni è il numero cromatico e $\psi(i)$ indica il drone assegnato a $i$. Un altro esempio è la mappa dei paesi europei da colorare. Nella parte sui giochi, la colorazione diventa un gioco potenziale e la dinamica di noisy best response è un algoritmo approssimato per trovarla.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 1, "Some applications in AI"; ripresa in Slides 10 come gioco. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 89-96); `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 40-43).

## Prerequisiti
- [[Grafo]]: grafo semplice non orientato

## Porta a
- [[Gioco di colorazione]]: la colorazione come massimo di un potenziale

## Collegati
- [[Spettro dei grafi bipartiti]]: bipartito equivale a 2-colorabile, cioè senza cicli dispari
- [[Insieme indipendente]]: ogni classe di colore è un insieme indipendente
- [[Grafo planare]]: i grafi planari sono 4-colorabili
