---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [problema nothing at stake, nothing-at-stake problem, nessuna posta in gioco, Slasher, slashing]
tags: [competenza, area/informatica]
---

# Nothing at stake

> Nella Proof of Stake lavorare su entrambi i rami di una fork non costa quasi nulla, quindi un validatore può sostenerli tutti e un attaccante può tentare la doppia spesa in una riorganizzazione.

## Definizione / enunciato
In caso di ramificazione della blockchain (o di qualsiasi disaccordo nel consenso) una persona potrebbe votare per entrambe le varianti, perché ha poste in gioco in ciascuna. Diversamente dalla PoW, lavorare su entrambi i rami costa poco, e questo dà la possibilità di ingannare, per esempio spendendo la stessa cifra due volte durante una riorganizzazione della blockchain.

## Formule chiave
Nessuna formula. Confronto dei costi: PoW, sostenere due rami divide la potenza di calcolo fra due ricerche; PoS, firmare due rami non consuma risorse aggiuntive.

## Intuizione
Nella PoW la scelta del ramo è costosa e quindi "onesta" per incentivo: si mina solo sul ramo più probabile. Nella PoS l'incentivo razionale è puntare su tutti i rami, e così le fork non si risolvono da sole.

## Come si usa
Soluzioni citate nelle slide:
- **checkpoint** (Peercoin);
- **limite alla riorganizzazione** dei blocchi (Nxt, 720 blocchi);
- **punire** chi lavora su due rami (Ethereum ha un sistema apposito, Slasher).
La dispensa aggiunge finality gadget e penalità per doppia firma, non presenti nelle slide.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (pp. 17-19); dispensa §6.5.

## Prerequisiti
- [[Proof of Stake]]: il problema nasce dalla PoS
- [[Fork della blockchain]]: rami concorrenti

## Porta a
- Nessuno.

## Collegati
- [[Proof of Work]]: lavorare su due rami costa energia
