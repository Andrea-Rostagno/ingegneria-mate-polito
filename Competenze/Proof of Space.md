---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [PoSpace, Proof of Capacity, Proof of Storage, Burst, Filecoin, proof-of-replication, proof-of-spacetime, plotting, memory-hard function, Decentralized Storage Network]
tags: [competenza, area/informatica]
---

# Proof of Space

> Consenso in cui la probabilità di inserire il blocco cresce con lo spazio su disco allocato: la fase costosa (riempire il disco) si fa una volta, poi il mining è rapido e poco energivoro.

## Definizione / enunciato
La **Proof of Space** (o Proof of Capacity, Proof of Storage) si basa sulla memoria su disco allocata dai miner. Per attaccarla bisogna allocare più di metà della memoria dell'intera rete. Serve un modo veloce per verificare l'allocazione: un **verifier** pone domande brevi al **prover**, le cui risposte non si calcolano in fretta se non avendo archiviato molti dati; strumenti proposti: memory-hard functions, giochi sui grafi.

**Burst** (2014), prima criptomoneta PoSpace:
1. *plotting*: il miner usa la CPU per giorni o settimane per riempire il disco;
2. *reward assignment*: indica il proprio indirizzo o quello del pool;
3. *mining*: ricava in pochi secondi un valore dal disco; vince il risultato migliore, più probabile con più dati registrati.

## Formule chiave
Nessuna formula: costo energetico concentrato nella fase 1, eseguita una sola volta; fasi 2 e 3 istantanee o rapide.

## Intuizione
La sfida è non usare disco e CPU troppo a lungo per la prova, altrimenti si ricade nel consumo della PoW. Resta lo spreco di dischi riempiti di dati inutili: da qui l'idea di usare lo spazio per un servizio utile.

## Come si usa
**Filecoin**: incontra domanda e offerta di spazio inutilizzato. Decentralized Storage Network (dati cifrati, spezzettati e ridondanti presso più storage provider); markets (lo spazio si paga in criptomoneta, anche in base all'intensità d'uso); Proof-of-Storage con **proof-of-replication** (dimostrare di aver duplicato i dati) e **proof-of-spacetime** (dimostrare di averli conservati per un certo tempo). La ridondanza protegge da guasti e provider offline.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (pp. 39-48); dispensa §6.12.

## Prerequisiti
- [[Protocollo di consenso]]: la PoSpace è un protocollo di consenso
- [[Proof of Work]]: termine di confronto sui consumi

## Porta a
- Nessuno.

## Collegati
- Nessuno.
