---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [transaction fee, fee, commissione di transazione, commissioni Bitcoin, priorità in mempool, protezione anti DoS]
tags: [competenza, area/informatica]
---

# Fee di transazione

> Importo che chi scrive la transazione è disposto a pagare ai miner, implicito come differenza fra input e output: remunera il mining e rende costoso intasare la rete.

## Definizione / enunciato
La **fee** è decisa liberamente da chi paga: più è alta, più è probabile che la transazione entri presto nella blockchain. Non è un campo esplicito: è la differenza fra la somma degli input e la somma degli output. Molti wallet propongono una fee in base a quelle pagate di recente e alla lunghezza della transazione.

## Formule chiave
$$\text{fee}=\sum\text{input}-\sum\text{output}.$$
Il miner che inserisce il blocco incassa la ricompensa più la somma delle fee delle transazioni incluse.

## Intuizione
Con lo spazio del blocco limitato (1 MB, fino a 4 MB con SegWit), i miner scelgono le transazioni in base alla fee: "un po' come l'imbarco prioritario in aereo". La fee ha due funzioni: remunerare ulteriormente i miner e proteggere da un **attacco Denial of Service**. Senza fee chiunque potrebbe intasare la rete con transazioni valide fra propri indirizzi; un miner che lo facesse (fee come giroconto) perderebbe le fee delle transazioni vere in mempool.

## Come si usa
Le fee salgono con l'halving e con l'adozione di massa; dopo l'ultimo halving c'è stato un forte aumento, poi rientrato. Quando la ricompensa per blocco diventerà piccola, l'incentivo per i miner dovrà venire da fee crescenti. Nei P2SH le fee le paga chi riceve. In Lightning Network le fee dei canali sono molto basse e le paga il mittente.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 42-44, 51-52, 90, 119, 148); dispensa §3.10.

## Prerequisiti
- [[Transazione Bitcoin]]: input e output

## Porta a
- [[Mining]]: i miner scelgono le transazioni per fee

## Collegati
- [[Halving]]: ricompensa calante, fee come incentivo futuro
- [[Lightning Network]]: fee minime per micropagamenti
