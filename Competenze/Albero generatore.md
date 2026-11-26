---
tipo: competenza
area: network
corsi: [Matematica discreta, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["spanning tree", "albero ricoprente", "albero di copertura", "albero generatore di un grafo"]
tags: [competenza, area/network]
---

# Albero generatore

> Un albero generatore di un grafo $G$ è un albero che contiene tutti i nodi di $G$ e usa solo archi di $G$. Esiste se e solo se $G$ è connesso.

## Definizione / enunciato
Dato un grafo arbitrario $G=(V,E)$, si dice **albero generatore** di $G$ ogni albero $T=(V_T,E_T)$ tale che
$$V_T=V,\qquad E_T\subseteq E.$$
Quindi $T$ si ottiene da $G$ togliendo **solo archi**: i nodi si conservano tutti.

**Osservazione** (lezione 7). Se $G$ è sconnesso non contiene alcun albero generatore, perché un albero è connesso e ha gli stessi nodi di $G$.

Viceversa, se $G$ è connesso, togliendo un arco da ciascun ciclo finché ce ne sono si ottiene un sottografo connesso, aciclico e con tutti i nodi, cioè un albero generatore. È la costruzione usata nella dimostrazione di $|E|\ge|V|-1$.

## Formule chiave
$$|E_T|=|V|-1\le|E|,\qquad G\ \text{ha un albero generatore}\iff G\ \text{è connesso}.$$
Per passare da $G$ a un suo albero generatore si tolgono esattamente $|E|-|V|+1$ archi (conto fatto qui da $|E_T|=|V|-1$).

## Intuizione
È lo "scheletro" minimo che tiene insieme il grafo: tutti i nodi restano raggiungibili con il minor numero possibile di archi. Gli archi tolti sono quelli che chiudono i cicli.

## Come si usa
- **Esempio della lezione 7:** lo stesso grafo ammette più alberi generatori, e quelli disegnati nell'esempio non sono fra loro isomorfi.
- **Verificare la connessione:** trovare un albero generatore dimostra che il grafo è connesso.
- **Contare gli archi da togliere:** per un grafo connesso servono $|E|-|V|+1$ rimozioni (conto fatto qui, non nella lezione).

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, dopo i teoremi sugli alberi. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, p. 12, manoscritto).
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, con il nome di **albero di ricoprimento**: dato $G=(V,E)$ non orientato e connesso, un albero $T=(V,E')$ con $E'\subseteq E$ che collega tutti i nodi. Compare due volte: l'albero BFS (gli archi che scoprono nodi nuovi durante la visita in ampiezza) è uno spanning tree di $G$; nei grafi pesati si cerca quello di peso minimo (minimo albero ricoprente, algoritmi di Kruskal e Jarník-Prim). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 27, 44).

## Prerequisiti
- [[Albero (teoria dei grafi)]]: definizione e $|E|=|V|-1$
- [[Componenti connesse di un grafo]]: esiste solo per grafi connessi

## Porta a
- Nessuno nel corso.

## Collegati
- [[Isomorfismo di grafi]]: alberi generatori diversi dello stesso grafo possono non essere isomorfi
