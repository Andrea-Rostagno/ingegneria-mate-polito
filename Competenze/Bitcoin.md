---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [BTC, satoshi, criptomoneta Bitcoin, punti di forza di Bitcoin, debolezze di Bitcoin, Bitcoin come denaro, Ordinals, Colored coins]
tags: [competenza, area/informatica]
---

# Bitcoin

> Criptomoneta digitale, pseudonima e distribuita, gestita da una rete peer-to-peer senza autorità centrale, con valore fissato solo da domanda e offerta e offerta massima programmata di 21 milioni.

## Definizione / enunciato
Bitcoin (simbolo B) nasce dal white paper di Satoshi Nakamoto (fine 2008); genesis block il 3 gennaio 2009. Registra tutte le transazioni in una blockchain pubblica e permissionless, mantenuta dai nodi; i blocchi hanno header e body. Non esiste il concetto di conto: la blockchain è un elenco di passaggi di bitcoin fra indirizzi. Unità minima: **1 satoshi** $=10^{-8}$ BTC.

## Formule chiave
$$1\ \text{BTC}=10^8\ \text{sat},\qquad 1\ \text{mBTC}=10^5\ \text{sat},\qquad 1\ \text{cBTC}=10^6\ \text{sat}.$$
Circa 7 transazioni al secondo, contro oltre 10.000 di Visa e quasi 200 di PayPal.

## Intuizione
**Punti di forza**: rete sicura per lo scambio di valore (Internet of Value), non censurabile, scarsità digitale, sicurezza *by design* grazie a decentralizzazione e ridondanza, tra i 10 asset più capitalizzati. **Debolezze**: costo economico e ambientale della PoW (per le slide è "il prezzo della sicurezza"), lentezza e scarsa scalabilità, mining pool concentrati, visibilità delle transazioni, fee alte nei periodi di prezzo alto, lentezza nell'evolvere il protocollo.

## Come si usa
**Bitcoin come denaro** (`04-Denaro.pdf`): funziona come unità di conto, mezzo di pagamento e riserva di valore; ha ottima commerciabilità in scala, spazio e tempo; ha un rapporto flusso/riserva "algoritmicamente sotto controllo". Lettura alternativa: un *servizio* di custodia della ricchezza digitale senza banche, governi o intermediari. Le slide confutano luoghi comuni (schema Ponzi, uso criminale, illegalità) e ammettono che non permette politiche monetarie. Evoluzioni: script, timelock, hashlock, Colored coins (2013), Ordinals (2023, numerazione di ogni satoshi), multisig, P2SH, SegWit, Taproot, future, ETF. Lo scaling si cerca fuori catena con Lightning Network.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 4-5, 36, 84, 105, 112-115, 134-149); `04-Denaro.pdf` (pp. 32-50); dispensa §3, §5.5.
- **Crittografia** (magistrale): caso di studio crittografico, dal white paper di Satoshi Nakamoto (2009).
  - **Blocco:** header e body; nell'header ci sono Merkle root, target (Bits) e Nonce.
  - **Mining:** l'hash SHA-256 dell'header deve essere minore del target.
  - **Chiavi e transazioni:** si generano con ECDSA. Ogni transazione è firmata con la chiave privata e "bloccata" sulla chiave pubblica del destinatario, con resto verso una chiave propria. I nodi verificano che non ci sia double spending.
  - **Emissione:** i bitcoin nascono solo nella prima transazione di ogni blocco, che non ha input.
  - **Sicurezza:** un attaccante dovrebbe avere oltre il 50% della potenza di calcolo, non la maggioranza degli utenti.

  Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto13.pdf` (pp. 13-25).

## Prerequisiti
- [[Blockchain]]: registro delle transazioni
- [[Precursori di Bitcoin]]: idee confluite nel white paper

## Porta a
- [[Altcoin]]: tutte le altre criptovalute
- [[Strumenti finanziari su Bitcoin]]: future, ETF, treasury company
- [[Lightning Network]]: scalabilità di livello 2
- [[Privacy coin]]: risposta ai limiti di privacy

## Collegati
- [[Funzioni del denaro]]: Bitcoin valutato come forma di denaro
- [[Rapporto tra flusso e riserva]]: flusso calante e prestabilito
- [[Ethereum]]: confronto fra le due blockchain
- [[Decentralized Autonomous Organization]]: Bitcoin come prima DAO
- [[Denaro elettronico]]: il digital cash di Chaum risolve lo stesso problema con un'autorità centrale (Crittografia)
