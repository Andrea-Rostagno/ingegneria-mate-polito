---
tipo: competenza
area: network
corsi: [Ricerca operativa, Matematica discreta, Programmazione e calcolo scientifico, Dinamiche su network, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: ["graph", "grafo orientato", "grafo non orientato", "rete di flusso", "grafo bipartito", "bipartite graph", "grafo completo", "cammino orientato", "ciclo hamiltoniano", "Hamiltonian cycle", "grafo pesato", "weighted graph", "grafo bilanciato", "balanced graph", "out-degree", "in-degree", "prodotto di grafi", "product of graphs"]
tags: [competenza, area/network]
---

# Grafo

> Collezione di nodi e archi (o vertici e lati); con dati numerici associati diventa una rete, la struttura di base dei modelli di ottimizzazione su reti.

## Definizione / enunciato
Un **grafo** è una coppia (insieme dei nodi $\mathcal N$, insieme degli archi $\mathcal A$), dove gli archi sono coppie $(i,j)$ di nodi. Coppie ordinate: **grafo orientato** $(\mathcal N,\mathcal A)$; non ordinate: **grafo non orientato** $(\mathcal V,\mathcal E)$ con vertici e lati. Una **rete** è un grafo con informazioni numeriche su archi e/o nodi.

- **Bipartito:** $\mathcal N=\mathcal N_1\cup\mathcal N_2$ disgiunti e ogni arco collega un nodo di $\mathcal N_1$ a uno di $\mathcal N_2$.
- **Cammino orientato:** sequenza $(i_1,\dots,i_m)$ con $(i_k,i_{k+1})\in\mathcal A$; **semplice** se senza nodi ripetuti; **ciclo** se $i_1=i_m$ senza altre ripetizioni; **ciclo hamiltoniano** se visita tutti i nodi una e una sola volta.
- **Completo:** ogni coppia di vertici distinti è collegata (nel caso orientato, entrambi gli archi $(i,j)$ e $(j,i)$); **bipartito completo:** un arco per ogni coppia formata da nodi dei due insiemi.

## Formule chiave
Successori e predecessori: $\mathcal N_j^+=\{i:(j,i)\in\mathcal A\}$, $\mathcal N_j^-=\{i:(i,j)\in\mathcal A\}$; nel grafo non orientato $\delta(v)$ è l'insieme dei lati incidenti a $v$, $E(S)$ quello dei lati con entrambi i vertici in $S$.

## Intuizione
L'esistenza di cammini fra ogni coppia di nodi o di un ciclo hamiltoniano dipende da quanto è ricco l'insieme degli archi. Una rete bipartita rappresenta flussi diretti punto-punto; i cammini servono quando il trasporto visita nodi intermedi.

## Come si usa
Esempio delle slide: rete di trasporto bipartita con sorgenti di capacità $R_i$, destinazioni con domanda $d_j$ e costi $c_{ij}$ sugli archi. Nell'esempio di flusso massimo $\mathcal N_2^+=\{3,4,5,6\}$, $\mathcal N_6^-=\{2,4\}$, $\mathcal N_s^-=\emptyset$, $\mathcal N_d^+=\emptyset$.

## Nei corsi
- **Ricerca operativa** (triennale): concetti di base della parte "modelli di ottimizzazione su reti". Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 18-19, 25, 34).
- **Matematica discreta** (triennale): $G=(V,E)$ con ogni arco associato a due nodi $v,w$. Se $v=w$ l'arco è un **cappio**. Il grafo è **indiretto** se tutte le coppie sono non ordinate e **diretto** se sono ordinate. Archi multipli sulla stessa coppia danno un **multigrafo**. Un grafo è **pesato** se a nodi o archi sono associati dei pesi, come le distanze in una rete stradale. Le dispense di Tilli considerano grafi finiti senza cappi né archi multipli. **Completo** $K_n$: tutti gli archi possibili, $\deg=n-1$, $|E|=\binom n2$; è un albero solo per $n\le2$. **Completo bipartito** $K_{m,n}$: $V_1=\{1,\dots,m\}$, $V_2=\{m+1,\dots,m+n\}$, con tutti gli archi fra i due insiemi. $K_{1,1}=K_2$ è sia completo sia bipartito. Il grafo appare già nella lezione 1, nel disegno del commesso viaggiatore e in quello dei link fra pagine web. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 1-3, 13-16); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§5.1, §5.3, Def. 5.1.1, 5.3.1, 5.3.6, Teor. 5.3.2).
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi (`Capitolo07.pdf`): $G=(V,E)$ con $V=[0,n-1]$ ($n$ vertici) ed $E\subseteq V\times V$ ($m$ archi), opzionalmente pesato $G=(V,E,W)$ con $W:E\to\mathbb R$ (esempio: rotte aeree tra aeroporti con i prezzi). Definizioni di cammino, ciclo, cammino semplice, **sottografo** ($V'\subseteq V$, $E'\subseteq E\cap V'\times V'$), **sottografo indotto** (contiene tutti gli archi di $E$ tra nodi di $V'$), componente connessa (sottografo connesso e massimale), grafo diretto (esempio di una mappa stradale con incroci A-G e vie come Lungarno Mediceo e Lungarno Galilei). Problemi di esempio: accoppiamento perfetto, cammino e ciclo hamiltoniano, ciclo euleriano. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 2-14).
- **Dinamiche su network** (magistrale): il grafo è lo "scheletro" della rete, $\mathcal G=(\mathcal V,\mathcal E,W)$ orientato e pesato, con $(i,j)\in\mathcal E$ letto come "$i$ è influenzato da $j$", "$i$ vede $j$" oppure "il flusso va da $i$ a $j$"; $W_{ij}$ è forza, conduttanza o capacità del link ($W_{ij}=1$: grafo non pesato). Vicinati uscente $N_i$ ed entrante $N_i^-$, pozzi ($N_i=\emptyset$ o $\{i\}$) e sorgenti; out-degree $w_i=\sum_jW_{ij}$ e in-degree $w_i^-=\sum_jW_{ji}$, con $\sum_iw_i=\sum_iw_i^-$. $\mathcal G$ è **bilanciato** se $w_i=w_i^-$ per ogni $i$, **regolare** se bilanciato con tutti i gradi uguali; **non orientato** se $W$ è simmetrica, **semplice** se non orientato, non pesato e senza cappi. Esempi: linea $L_n$, stella $S_n$, completo $K_n$ ($m=n(n-1)/2$), anello $R_n$ ($m=n$), barbell, completo bipartito $K_{p,q}$ ($m=pq$). **Prodotto** $\mathcal G_1\times\mathcal G_2$ su $\mathcal V_1\times\mathcal V_2$: è connesso se lo sono i fattori e $\operatorname{diam}(\mathcal G_1\times\mathcal G_2)=\operatorname{diam}(\mathcal G_1)+\operatorname{diam}(\mathcal G_2)$ (griglie $L_h\times L_k$, ipercubo $L_2^k$, toro $R_h\times R_k$). Un DAG ha sempre sorgenti e pozzi. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 3-13, 39-57).
- **Blockchain e criptoeconomia** (magistrale): Lightning Network è una rete di canali di pagamento (nodi = utenti e hub, archi = canali con capacità e fee). Un pagamento segue il cammino dal pagante al ricevente con le fee minori, e il routing richiede che un cammino esista. Fonte: `magistrale/Blockchain e criptoeconomia/03B-Lightning Network.pdf` (pp. 17-20, 25).

## Porta a
- [[Problema del trasporto]]: rete bipartita sorgenti-destinazioni
- [[Problema di assegnamento]]: grafo bipartito con insiemi di uguale cardinalità
- [[Flusso massimo]]: rete orientata con capacità
- [[Flusso a costo minimo]]: conservazione del flusso nei nodi
- [[Problema del commesso viaggiatore]]: ciclo hamiltoniano di costo minimo
- [[Lemma delle strette di mano]]: somma dei gradi uguale a $2|E|$ (Matematica discreta)
- [[Componenti connesse di un grafo]]: percorsi, cicli e connessione (Matematica discreta)
- [[Isomorfismo di grafi]]: quando due grafi sono lo stesso grafo (Matematica discreta)
- [[Matrice di adiacenza]]: il grafo tradotto in una matrice simmetrica 0-1 (Matematica discreta)
- [[Lista di adiacenza]]: rappresentazione in spazio Theta(n+m) (Programmazione e calcolo scientifico)
- [[Problema dei cammini minimi]]: cammini di peso minimo in un grafo pesato (Programmazione e calcolo scientifico)
- [[Ordinamento topologico]]: numerazione dei nodi di un grafo orientato aciclico (Programmazione e calcolo scientifico)
- [[Minimo albero ricoprente]]: albero di peso minimo che collega tutti i nodi (Programmazione e calcolo scientifico)
- [[Matrice stocastica]]: normalizzazione $P=D^{-1}W$ della matrice dei pesi (Dinamiche su network)
- [[Laplaciano di un grafo]]: $L=D-W$, base delle dinamiche in tempo continuo (Dinamiche su network)
- [[Grafo di condensazione]]: componenti fortemente connesse e pozzi (Dinamiche su network)
- [[Lightning Network]]: rete di canali di pagamento in cui si instradano i pagamenti (Blockchain e criptoeconomia)

## Collegati
- [[Matrice di permutazione]]: un assegnamento è una permutazione (collegamento concettuale, non nelle slide)
- [[Numeri di Ramsey]]: l'amicizia simmetrica è un grafo indiretto (Matematica discreta)
- [[Principio dei cassetti]]: in ogni grafo con almeno 2 nodi due nodi hanno lo stesso grado (Matematica discreta)
- [[Percorso euleriano]]: visita tutti gli archi, mentre il ciclo hamiltoniano visita tutti i nodi (Matematica discreta)
