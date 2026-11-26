---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["giant component", "giant connected component", "componente connessa gigante", "transizione di fase della componente gigante", "phase transition for the giant component"]
tags: [competenza, area/network]
---

# Componente gigante

> In un grafo aleatorio sparso, sopra una soglia critica compare una componente connessa che contiene una frazione positiva dei nodi; sotto soglia tutte le componenti sono logaritmiche. La frazione si calcola con la sopravvivenza di un processo di Galton-Watson.

## Definizione / enunciato
**Teorema (Erdős-Rényi).** Sia $p=\lambda/n$, $\lambda>0$. Con alta probabilità per $n\to\infty$:
- $\lambda<1$: esiste $A>0$ indipendente da $n$ con $C_i\le A\log n$ per ogni componente connessa;
- $\lambda>1$: la componente più grande soddisfa $\frac1nC_{\max}\to x$, unica soluzione in $(0,1)$ di
$$1-x=e^{-\lambda x}.$$
**Teorema (modello di configurazione).** Con distribuzione limite dei gradi $\{p_k\}$, $\mu=\sum_kkp_k<+\infty$, $p_2<1$, con alta probabilità:
- $\sum_kp_kk(k-2)\le0\Rightarrow$ componente più grande sub-lineare in $n$;
- $\sum_kp_kk(k-2)>0\Rightarrow$ componente più grande lineare in $n$.

## Formule chiave
$x$ coincide con la probabilità di sopravvivenza del Galton-Watson Poisson($\lambda$), che risolve $e^{-\lambda x}=1-x$. Nel modello di configurazione $\sum_kp_kk(k-2)>0\iff\nu>1$, dove $\nu=\sum_kkq_k$ è la media della distribuzione dei gradi "dal punto di vista del link".

## Intuizione
Esplorando il grafo da un nodo, ogni vicino scoperto porta in media $\lambda$ (o $\nu$) nuovi nodi: se il numero cresce, l'esplorazione non si esaurisce e si entra in un blocco di dimensione proporzionale a $n$. È la stessa soglia "media dei figli $>1$" dei processi di ramificazione.

## Come si usa
Per stabilire se un grafo sparso con una data distribuzione dei gradi ha una componente gigante si calcola $\sum_kp_kk(k-2)$ (configurazione) o si confronta $np$ con 1 (Erdős-Rényi); la taglia si ottiene risolvendo l'equazione di punto fisso del processo di ramificazione associato. La soglia $\lambda=1$ è molto più bassa di quella per la connessione ($np\sim\log n$).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "Phase transition for giant connected component in ER", "Existence of a giant component in the configuration model". Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 19, 21, 32).

## Prerequisiti
- [[Grafo di Erdős-Rényi]]: il modello di base
- [[Processo di Galton-Watson]]: approssimazione dell'esplorazione locale

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Modello di configurazione]]: criterio con $\sum_kp_kk(k-2)$
- [[Connettività del grafo di Erdős-Rényi]]: soglia più alta per la connessione completa
- [[Componenti connesse di un grafo]]: la grandezza studiata
