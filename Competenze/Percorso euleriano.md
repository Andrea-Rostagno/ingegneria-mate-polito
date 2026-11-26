---
tipo: competenza
area: network
corsi: [Matematica discreta, Programmazione e calcolo scientifico, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["Eulerian path", "Eulerian circuit", "cammino euleriano", "ciclo euleriano", "percorso chiuso euleriano", "percorso hamiltoniano", "Hamiltonian path", "problema delle porte", "grafo euleriano", "Eulerian graph"]
tags: [competenza, area/network]
---

# Percorso euleriano

> Un percorso che attraversa ogni arco del grafo esattamente una volta. L'esistenza dipende solo dalla parità dei gradi: un percorso chiuso esiste se tutti i gradi sono pari, uno aperto se esattamente due nodi hanno grado dispari.

## Definizione / enunciato
- **Percorso euleriano** in $G$: percorso che attraversa tutti gli **archi** di $G$ esattamente una volta.
- **Percorso chiuso euleriano**: percorso euleriano chiuso, in cui il primo e l'ultimo nodo coincidono.

**Teorema 1.** In un grafo connesso $G$ con almeno due nodi esiste un percorso chiuso euleriano se e solo se tutti i nodi hanno grado pari.

**Teorema 2.** Un grafo connesso $G$ ha un percorso euleriano non chiuso se e solo se ha esattamente due nodi di grado dispari, ed eventualmente altri di grado pari. I nodi di grado dispari sono gli estremi del percorso.

**Percorsi e cicli hamiltoniani.** Un percorso o un ciclo è **hamiltoniano** se visita tutti i **nodi** di $G$ esattamente una volta; nel ciclo si ripetono solo il primo e l'ultimo nodo. Non c'è un criterio sui gradi analogo a quello euleriano.

## Formule chiave
$$\exists\ \text{percorso chiuso euleriano}\iff\deg(v)\ \text{pari}\ \forall v;\qquad \exists\ \text{percorso euleriano aperto}\iff\#\{v:\deg(v)\ \text{dispari}\}=2.$$

## Intuizione
Ogni volta che un percorso passa per un nodo intermedio usa due archi, uno per entrare e uno per uscire. Per questo i gradi devono essere pari, tranne eventualmente al punto di partenza e a quello di arrivo. Il numero di nodi di grado dispari è comunque pari, per il lemma delle strette di mano.

## Come si usa
**Problema delle porte** (lezione 7). Ci sono tre stanze $A,B,C$ e l'esterno $F$. Si può attraversare ogni porta esattamente una volta?
- Si costruisce il grafo con stanze ed esterno come nodi e le porte come archi.
- $A$ e $C$ hanno grado 3, dispari. Quindi non esiste un percorso chiuso, ma esiste un percorso aperto da $A$ a $C$: la lezione trova $A\,B\,C\,A\,F\,C$.

Altri esempi della lezione:
- il grafo ciclo $C_n$ ha un ciclo euleriano e uno hamiltoniano;
- il grafo cammino $P_n$ ha un percorso euleriano e uno hamiltoniano;
- se c'è un ciclo hamiltoniano c'è anche un percorso hamiltoniano;
- se c'è una foglia non c'è un ciclo hamiltoniano.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, dopo la planarità. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 29-33, manoscritto). Non è nelle dispense di Tilli.
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, tra gli esempi di problemi su grafi. Ciclo euleriano: permutazione $\langle e_0,\dots,e_{m-1}\rangle$ degli archi con $e_i,e_{i+1}$ incidenti a uno stesso nodo e nodo iniziale uguale al finale. Condizione necessaria e sufficiente: $G$ connesso e tutti i nodi di grado pari; i ponti di Königsberg (L. Euler) non hanno soluzione perché ci sono 4 nodi di grado dispari. Accanto, il cammino e il ciclo hamiltoniano (tutti i nodi una sola volta), con quattro cammini hamiltoniani diversi sullo stesso grafo di esempio. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 12-14).
- **Dinamiche su network** (magistrale): enunciato sui **multigrafi** $\mathcal G=(\mathcal V,\mathcal E,h)$ con mappe coda $\theta(e)$ e testa $\kappa(e)$, archi paralleli e opposti; un walk è una sequenza di archi con $\kappa(e_k)=\theta(e_{k+1})$. Un multigrafo non orientato (archi a coppie opposte $\{e,\bar e\}$ con $h_e=h_{\bar e}$) è **euleriano** se esiste un walk chiuso che usa ogni arco una sola volta (identificando le coppie opposte). Teorema: un multigrafo non orientato non pesato è euleriano se e solo se è connesso e ogni nodo ha grado pari. Esempio introduttivo: i ponti di Königsberg (nodi A, B, C, D). Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 9-10, 110-114).

## Prerequisiti
- [[Lemma delle strette di mano]]: il criterio riguarda la parità dei gradi
- [[Componenti connesse di un grafo]]: i teoremi valgono per grafi connessi

## Porta a
- Nessuno nel corso.

## Collegati
- [[Grafo]]: il ciclo hamiltoniano (che visita i nodi, non gli archi) è definito lì
- [[Matrice di incidenza]]: stesso formalismo dei multigrafi con coda e testa degli archi (Dinamiche su network)
- [[Problema del commesso viaggiatore]]: cerca un ciclo hamiltoniano di lunghezza minima
- [[Visita in profondità]]: la prima condizione (G connesso) si verifica con una visita (collegamento concettuale, non nelle slide; Programmazione e calcolo scientifico)
