---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [albero di Merkle, Merkle root, radice di Merkle, hash tree, albero di hash, prova di inclusione, Merkle proof]
tags: [competenza, area/informatica]
---

# Merkle tree

> Albero binario di hash: le foglie sono gli hash delle transazioni, ogni nodo interno è l'hash della concatenazione dei figli, la radice riassume tutto il blocco e permette prove di inclusione di lunghezza logaritmica.

## Definizione / enunciato
Si calcola l'hash di ogni transazione $L_i$ (foglie). Si combinano a coppie: $\text{Hash }0\text{-}0=h(L_1)$, $\text{Hash }0=h(\text{Hash }0\text{-}0\,\|\,\text{Hash }0\text{-}1)$, e così via fino al **Top Hash**, la **Merkle root**, che va nel campo hashMerkleRoot dell'header.

## Formule chiave
Per dimostrare che una transazione è nel blocco bastano la transazione "vicina" e gli hash sul cammino fino alla radice: un numero di hash proporzionale a
$$\log_2(n),\qquad n=\text{numero di transazioni nel blocco}.$$

## Intuizione
La verifica sequenziale di tutte le transazioni costa $O(n)$ dati; il cammino nell'albero ne costa $O(\log n)$. È impossibile fabbricare hash intermedi falsi che portino alla radice corretta, grazie alla resistenza alle collisioni.

## Come si usa
Esempio delle slide: per provare la presenza di $H_K$ si usano $H_L$ e gli hash in blu lungo il cammino, risalendo fino alla Merkle root. È la base della **Simple Payment Verification**: un light node, che ha tutti gli header, si fa mandare da un full node gli hash intermedi e ricalcola la radice. Ralph Merkle è anche fra gli ideatori della crittografia a chiave pubblica e dell'idea di un costo computazionale come prova.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 8-10, figura vista sulla pagina renderizzata; pp. 64-65 per SPV); dispensa §3.4.

## Prerequisiti
- [[Funzione hash crittografica]]: ogni nodo è un hash
- [[Albero binario]]: struttura ad albero a due figli

## Porta a
- [[Struttura del blocco Bitcoin]]: la radice sta nell'header
- [[Nodi di Bitcoin]]: verifica SPV dei light node

## Collegati
- [[Blockchain]]: integrità delle transazioni di ogni blocco
- [[Costruzione di Merkle-Damgård]]: altra costruzione di Merkle, interna alle funzioni hash
