---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["graph isomorphism", "grafi isomorfi", "isomorphic graphs", "rietichettatura dei nodi", "relabelling", "grafi isospettrali", "cospectral graphs", "invarianti di un grafo"]
tags: [competenza, area/network]
---

# Isomorfismo di grafi

> Due grafi sono isomorfi se differiscono solo per i nomi dei nodi: c'è una biiezione fra i nodi che manda archi in archi. Gli isomorfismi conservano tutte le proprietà strutturali, compreso lo spettro.

## Definizione / enunciato
$G=(V,E)$ e $G'=(V',E')$ sono **isomorfi** se esiste una biiezione $\varphi:V\to V'$ "connessa per archi", cioè che manda nodi adiacenti in nodi adiacenti (lezione 7). Nella forma usuale si chiede anche che nodi non adiacenti vadano in nodi non adiacenti; per grafi con lo stesso numero di archi le due richieste coincidono (osservazione fatta qui):
$$(v,w)\in E\iff(\varphi(v),\varphi(w))\in E'.$$
Con $V=V'=\{1,\dots,n\}$, un isomorfismo è una **rietichettatura** dei nodi tramite una permutazione $\sigma$.

**Invarianti.** Proprietà che si conservano per isomorfismo: numero di nodi e di archi, sequenza dei gradi, connessione, cicli, bipartizione, planarità, spettro.

**Teorema 6.2.4** (Tilli). Se $G'$ si ottiene da $G$ rietichettando i nodi con $\sigma$, la matrice di adiacenza $A'$ si ottiene da $A$ riordinando righe e colonne secondo $\sigma$: $a'_{\sigma i,\sigma j}=a_{ij}$.

## Formule chiave
$$A'=P_\sigma^{\,t}AP_\sigma=P_\sigma^{-1}AP_\sigma\quad(\text{Cor. 6.2.5}),\qquad \Sigma(G')=\Sigma(G).$$
Il viceversa è falso: esistono grafi **isospettrali** che non sono isomorfi.

## Intuizione
Un grafo "è" la struttura degli archi, non il disegno né i nomi. Per dimostrare che due grafi **non** sono isomorfi basta trovare un invariante diverso. Per dimostrare che lo sono bisogna esibire la biiezione.

## Come si usa
- **Problema della lezione 7:** con 5 nodi, il ciclo (un pentagono) e la stella a cinque punte sono entrambi 2-regolari e sono isomorfi: si trova una $f:V\to V'$ che manda nodi adiacenti in nodi adiacenti.
- **Isospettrali non isomorfi** (lezione 7): $K_{1,4}$ e $C_4\cup K_1$ hanno lo stesso spettro $(-2,0,0,0,2)$, ma non sono isomorfi perché non hanno gli stessi gradi. $K_{1,4}$ ha un nodo di grado 4, $C_4\cup K_1$ ha un nodo isolato.
- **Lo spettro non dipende dalle etichette,** perché $A$ e $A'$ sono simili: è per questo che si parla di spettro "del grafo".

## Nei corsi
- **Matematica discreta** (triennale): introdotto in un problema della lezione 7 e ripreso con la matrice di adiacenza e con gli esempi di spettri. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 5, 36-37, 51); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.2, Teor. 6.2.4, Cor. 6.2.5, pp. 124-127).

## Prerequisiti
- [[Grafo]]: nodi e archi

## Porta a
- [[Matrice di adiacenza]]: rietichettare i nodi coniuga $A$ con una matrice di permutazione
- [[Spettro di un grafo]]: lo spettro è un invariante per isomorfismo

## Collegati
- [[Albero generatore]]: lo stesso grafo può avere alberi generatori non isomorfi
- [[Gruppo simmetrico]]: le rietichettature sono le permutazioni di $\{1,\dots,n\}$
