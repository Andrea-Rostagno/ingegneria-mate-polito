---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["configuration model", "modello di configurazione dei grafi", "grafo aleatorio con distribuzione dei gradi assegnata", "half-links", "semi-archi", "link-perspective degree distribution", "distribuzione dei gradi dal punto di vista del link", "excess degree distribution", "processo di ramificazione a due stadi"]
tags: [competenza, area/network]
---

# Modello di configurazione

> Grafo aleatorio con distribuzione dei gradi assegnata: si danno a ogni nodo i suoi "semi-archi" e li si accoppia a caso. Localmente è un albero di ramificazione a due stadi, governato dalla distribuzione dei gradi vista da un link.

## Definizione / enunciato
Fissati $n$ e $\{p_k\}$ con $np_k$ interi e $\sum_knp_k$ pari: per ogni $k$ si creano $np_k$ nodi con $k$ semi-archi, poi si accoppiano i semi-archi in modo uniforme. Possono comparire cappi e archi paralleli, ma sono una frazione piccola. Costruzione equivalente: nodi "speciali" di grado 2 che rappresentano i link, accoppiamento con i semi-archi dei nodi normali, poi si cortocircuitano i nodi speciali.

## Formule chiave
Esplorando il vicinato di un nodo uniforme: il nodo di partenza ha grado $k$ con probabilità $p_k$, i figli hanno grado $k$ con probabilità $\propto kp_k$. Si ottiene un **processo di ramificazione a due stadi**: prima generazione con prole $p_k$, generazioni successive con prole
$$q_k=\frac{(k+1)p_{k+1}}{\mu},\qquad \mu=\sum_{k\ge1}kp_k,\qquad \nu=\sum_kkq_k=\frac{\sum_kp_kk^2}{\mu}-1 .$$
- $j$-regolare: $q_{j-1}=1$, $\mu=j=\nu+1$.
- Poisson($\lambda$): $q_k=p_k$, $\mu=\nu=\lambda$; Poisson è l'unica distribuzione con $p_k=q_k$ per ogni $k$.
Componente gigante se e solo se $\nu>1\iff\sum_kp_kk(k-2)>0$ (con $\mu<\infty$, $p_2<1$).
**Teorema (connessione).** Se $\mu<+\infty$ e $p_0=p_1=p_2=0$, il grafo è connesso con alta probabilità.

## Intuizione
Arrivando a un nodo lungo un link si finisce più facilmente su nodi con molti link (paradosso dell'amicizia): per questo i figli hanno la distribuzione "spostata" $q_k$, e conta $\nu$, non $\mu$.

## Come si usa
Rispetto a Erdős-Rényi permette distribuzioni dei gradi arbitrarie (anche legge di potenza) e grafi sparsi con componente gigante o anche connessi; resta però con pochi triangoli e cicli corti. Per l'esistenza della gigante si calcola $\sum_kp_kk(k-2)$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "The Configuration Model", "Local approximation", "Two-Stage Branching Process", "Link-perspective degree distribution", "Summary of the configuration model". Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 23-34).

## Prerequisiti
- [[Processo di Galton-Watson]]: approssimazione locale a due stadi
- [[Grafo di Erdős-Rényi]]: modello di confronto

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Componente gigante]]: criterio $\nu>1$
- [[Attaccamento preferenziale]]: altro modo di ottenere gradi a legge di potenza
- [[Distribuzione di Poisson]]: unico caso con $p_k=q_k$
