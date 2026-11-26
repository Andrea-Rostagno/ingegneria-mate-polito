---
tipo: competenza
area: network
corsi: [Matematica discreta, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["connected components", "componente connessa", "grafo connesso", "connected graph", "grafo sconnesso", "percorso", "walk", "cammino semplice", "ciclo in un grafo", "cycle in a graph", "sottografo", "fortemente connesso", "strongly connected", "distanza geodetica", "diametro di un grafo", "trail", "circuit"]
tags: [competenza, area/network]
---

# Componenti connesse di un grafo

> Un grafo è connesso se ogni coppia di nodi è unita da un percorso. Le componenti connesse sono i sottografi connessi massimali, i "pezzi" del grafo.

## Definizione / enunciato
Definizioni della lezione 7, per un grafo $G=(V,E)$:
- **percorso**: lista finita $v_1,\dots,v_k$ di nodi a due a due adiacenti. La sua lunghezza è $k-1$, il numero di archi percorsi. È **chiuso** se $v_1=v_k$;
- **cammino**: percorso senza archi ripetuti (i nodi possono ripetersi);
- **cammino semplice**: percorso senza nodi ripetuti, quindi anche senza archi ripetuti;
- **ciclo**: percorso chiuso senza nodi ripetuti, tranne il primo e l'ultimo;
- **sottografo**: $G'=(V',E')$ con $V'\subseteq V$, $E'\subseteq E$, che sia ancora un grafo (gli archi di $E'$ devono avere gli estremi in $V'$). Si ottiene togliendo archi o nodi.

**Connessione.** $G$ è **connesso** se per ogni coppia $v,w\in V$ esiste un percorso di estremi $v$ e $w$.

**Componente connessa.** È un sottografo $G'$ connesso e **massimale rispetto all'inclusione**: non è sottografo proprio di un sottografo connesso di $G$, cioè non si può allargare senza perdere la connessione. Anche un nodo isolato è una componente connessa.

## Formule chiave
Le componenti $G_1,\dots,G_k$ partizionano i nodi: $V=V_1\sqcup\dots\sqcup V_k$. Numerando i nodi componente per componente, la matrice di adiacenza è diagonale a blocchi:
$$A=\begin{pmatrix}A_1&&\\&\ddots&\\&&A_k\end{pmatrix}.$$

## Intuizione
La relazione "esiste un percorso da $v$ a $w$" raggruppa i nodi in classi, e le componenti sono queste classi con i loro archi. Un sottografo connesso che non è massimale è solo un pezzo di una componente.

## Come si usa
- **Contare le componenti** (lezione 7): il grafo di esempio con nodi $a,\dots,h$ ha 3 componenti connesse, perché anche il nodo singolo conta.
- **Struttura:** connesso e aciclico significa albero. Un grafo connesso ha $|E|\ge|V|-1$.
- **Spettro:** lo spettro di un grafo sconnesso è l'unione degli spettri delle componenti. Per un grafo $k$-regolare la molteplicità di $k$ è il numero delle componenti.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, definizioni di base. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 2-4); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§5.1, Def. 5.1.2, pp. 87-89).
- **Dinamiche su network** (magistrale): versione orientata e pesata. Walk $\gamma=(i_0,\dots,i_l)$ con $(i_{h-1},i_h)\in\mathcal E$ e lunghezza $l$; path (nodi distinti salvo eventualmente $i_0=i_l$), trail (archi distinti), circuit (trail chiuso), ciclo (path chiuso di lunghezza $\ge3$; i path chiusi di lunghezza qualsiasi, come $(a,c,a)$ o il cappio $(a,a)$, sono "directed cycles"). Distanza $d_{\mathcal G}(i,j)$ = lunghezza del path più corto ($+\infty$ se non esiste), path geodetico, diametro $\max_{i,j}d_{\mathcal G}(i,j)$. $\mathcal G$ è **fortemente connesso** se ogni nodo è raggiungibile da ogni altro; è una proprietà monotona (se vale per un sottografo ricoprente vale per il grafo). Teorema sui grafi semplici: connesso $\Rightarrow m\ge n-1$. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 15-38, 48).

## Prerequisiti
- [[Grafo]]: nodi, archi, adiacenza

## Porta a
- [[Albero (teoria dei grafi)]]: grafo connesso senza cicli
- [[Albero generatore]]: esiste solo se il grafo è connesso
- [[Percorso euleriano]]: i teoremi valgono per grafi connessi
- [[Grafo planare]]: la formula di Eulero vale per grafi connessi
- [[Grafo regolare]]: la molteplicità di $k$ conta le componenti
- [[Teorema di Perron-Frobenius]]: la matrice di adiacenza è irriducibile se e solo se il grafo è connesso
- [[Grafo di condensazione]]: nel caso orientato le componenti fortemente connesse formano un DAG (Dinamiche su network)
- [[Teorema di Menger]]: dalla connessione qualitativa alla connettività per archi (Dinamiche su network)

## Collegati
- [[Classi di comunicazione]]: per le catene di Markov l'irriducibilità ha lo stesso ruolo della connessione
