---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [transazione coinbase, coinbase, coinbase maturity, ricompensa del blocco, block reward, creazione dei bitcoin]
tags: [competenza, area/informatica]
---

# Coinbase transaction

> Prima transazione di ogni blocco: non spende output precedenti, crea nuovi bitcoin a favore del miner ed è l'unico modo in cui nascono bitcoin.

## Definizione / enunciato
La **coinbase transaction** ha un unico input speciale, la *coinbase*, che non corrisponde all'output non speso di una transazione precedente e su cui non è stato fatto alcun versamento; come output ha uno o più indirizzi del miner che ha inserito il blocco, per l'importo stabilito dal protocollo (più le fee, secondo la dispensa). "È così e solo così che si generano nuovi bitcoin": remunerano i miner per il lavoro a favore della comunità.

**Coinbase maturity**: il compenso diventa spendibile solo dopo che sono stati inseriti altri 100 blocchi, cioè dopo almeno 100 conferme (poco più di 16 ore).

## Formule chiave
$$100\ \text{blocchi}\times10\ \text{min}\approx16{,}7\ \text{ore}.$$
Ricompensa iniziale 50 BTC, dimezzata ogni 210.000 blocchi.

## Intuizione
La maturity evita di pagare un miner per un blocco che una fork successiva potrebbe annullare: se il blocco diventa stale, la coinbase non è mai esistita.

## Come si usa
Esempio delle slide: nel blocco 911.752 la prima transazione è la coinbase. Nel primo anno sono stati minati oltre 52.000 blocchi a 50 BTC, più di 2,5 milioni di BTC; si stima che più di un milione sia di Satoshi Nakamoto e non sia mai stato mosso. Negli Ordinals i satoshi sono numerati a partire dalla coinbase che li ha creati.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 35-37, 85-86, 94, 113); dispensa §3.9.

## Prerequisiti
- [[Mining]]: compenso per il blocco inserito
- [[Transazione Bitcoin]]: struttura con input e output

## Porta a
- [[Halving]]: la ricompensa si dimezza

## Collegati
- [[Fork della blockchain]]: la maturity protegge dalle riorganizzazioni
