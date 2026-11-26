---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [NFT, non-fungible token, token non fungibili, ERC-721, ERC-1155, standard multi-token, CryptoKitties, CryptoPunks]
tags: [competenza, area/informatica]
---

# Token non fungibile

> Token unico e non intercambiabile con gli altri, il cui valore è deciso dal mercato del singolo token: certifica proprietà e autenticità di beni digitali o reali (standard ERC-721 ed ERC-1155).

## Definizione / enunciato
**ERC-721** (fine 2017, Dieter Shirley) permette di creare token **non fungibili**: non tutti uguali e scambiabili l'uno con l'altro, come invece i normali token e le monete fiat. Ogni token ha un valore deciso dal suo mercato.

**ERC-1155** generalizza e semplifica ERC-721: invece di uno smart contract per ogni token, un solo contratto contiene la configurazione di tutti i token. Si possono inviare molti elementi a uno o più destinatari in un'unica transazione, risparmiando fee, e creare sia token fungibili (come ERC-20) sia non fungibili.

## Formule chiave
Nessuna formula: ERC-721 = un contratto per token; ERC-1155 = un contratto per molti token, fungibili e non.

## Intuizione
Un NFT è un "documento di proprietà" digitale: il possesso coincide sostanzialmente con il diritto di rivendere l'opera. La blockchain non certifica che l'oggetto sia autentico, ma rende verificabile la storia dei passaggi di proprietà.

## Come si usa
Esempi delle slide: collezionismo (CryptoKitties, CryptoPunks); terreni di Decentraland; armi e poteri nei giochi; NFT legati a oggetti reali (vino, auto, scarpe) contro la contraffazione; arte digitale, come l'opera *O Snail* di HEX0x6C su SuperRare, dove l'esposizione genera una transazione firmata su Ethereum. Fiscalmente in Italia gli NFT sono beni digitali soggetti a IVA, a differenza dei payment token. Bitcoin ha un analogo negli Ordinals.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/05-Blockchain2.pdf` (pp. 21-23); `09-Applicazioni.pdf` (pp. 76-80, 88-92); `08-Aspetti normativi.pdf` (p. 40); dispensa §6.7.

## Prerequisiti
- [[Token crittografico]]: un NFT è un token
- [[ERC-20]]: standard fungibile da cui si distingue

## Porta a
- [[Metaverso]]: proprietà di oggetti e terreni virtuali

## Collegati
- [[Fiscalità delle cripto-attività]]: NFT soggetti a IVA
- [[Tracciabilità di filiera su blockchain]]: NFT legati a oggetti reali contro la contraffazione
