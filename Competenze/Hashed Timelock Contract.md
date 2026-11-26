---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [HTLC, Hash Time Locked Contract, timelock, hashlock, contratto con hashlock e timelock, CheckLockTime]
tags: [competenza, area/informatica]
---

# Hashed Timelock Contract

> Smart contract di Bitcoin che combina un hashlock (i fondi si sbloccano rivelando il segreto di cui è noto l'hash) e un timelock (i fondi sono bloccati fino a una data): è la base di atomic swap e Lightning Network.

## Definizione / enunciato
- **Timelock** (2015): indica alla rete che un ammontare non può essere speso fino a una certa data (altezza o timestamp del blocco). I bitcoin si spostano subito al ricevente, che però non può muoverli fino alla scadenza.
- **Hashlock** (2009): blocca i bitcoin finché non viene rivelato pubblicamente un valore segreto di cui è nota solo l'hash (SHA-256). Più somme bloccate con la stessa hashlock diventano tutte spendibili quando il segreto è rivelato.
- **HTLC**: hashlock e timelock insieme, per smart contract abbastanza elaborati.

## Formule chiave
Il destinatario sceglie un segreto $S$ e pubblica $H=\text{Hash}(S)$; un output bloccato da $H$ si spende presentando $S$ con $\text{Hash}(S)=H$, oppure torna al mittente dopo la scadenza del timelock.

## Intuizione
Differenza con il campo **Lock time**: il Lock time ritarda soltanto una transazione e lascia i fondi al pagante, che può spenderli altrove (e la transazione viene rifiutata); il Timelock sposta davvero i fondi. L'hashlock lega più pagamenti a un solo evento, la rivelazione di $S$: o si sbloccano tutti o nessuno.

## Come si usa
Usi del timelock: risparmi non spendibili, impegni di pagamento futuri, fondi bloccati in un canale Lightning. Gli HTLC rendono "atomici" l'atomic swap fra due blockchain e il pagamento su un cammino di canali Lightning. Bitcoin ha un linguaggio di script volutamente limitato (niente loop), quindi è una moneta programmabile solo in parte.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 105-111); `03B-Lightning Network.pdf` (p. 20); dispensa §3.17, §4.5.

## Prerequisiti
- [[Funzione hash crittografica]]: l'hashlock usa la resistenza alla preimmagine
- [[Transazione Bitcoin]]: condizioni sugli output

## Porta a
- [[Atomic swap]]: scambio fra blockchain senza fiducia
- [[Lightning Network]]: pagamenti atomici lungo un cammino di canali

## Collegati
- [[Smart contract]]: HTLC è uno smart contract nel linguaggio limitato di Bitcoin
- [[Bit commitment]]: impegnarsi pubblicando l'hash di un segreto rivelato dopo
