---
tipo: competenza
area: finanza
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [moneta stabile, stable coin, USDT, Tether, USDC, USD Coin, DAI, MakerDAO, MKR, collaterale, collateral, Proof of Reserves]
tags: [competenza, area/finanza]
---

# Stablecoin

> Criptomonete con protocolli che forzano o incentivano il valore a restare costante, di solito ancorato al dollaro: con un deposito di garanzia in valuta fiat (USDT, USDC) o con collaterale in criptovalute (DAI).

## Definizione / enunciato
Le criptomonete normali hanno valore determinato solo da domanda e offerta, quindi instabile. Le **stablecoin** prevedono protocolli che tengono il valore costante:
- **cambio fisso** con deposito in valuta: si pagano dollari per avere la stablecoin e viceversa allo stesso cambio; non è una vera criptomoneta, ma un modo digitale di usare la valuta legale;
- **collaterale in criptovalute** con protocolli algoritmici di stabilizzazione: più interessante, ma difficile e rischioso.

## Formule chiave
Rapporti delle slide: USDT ancorato 1:1 al dollaro, con collaterali (titoli USA a breve) dichiarati oltre il 100% dei token emessi; DAI generato bloccando in uno smart contract una somma più alta in ETH (sovracollateralizzazione).

## Intuizione
Cambia l'oggetto della fiducia: in USDT e USDC ci si fida dell'emittente e delle sue riserve; in DAI del protocollo, del collaterale e della governance (dispensa). La "Proof of Reserves" di Tether non è un sistema crittografico ma una dichiarazione contabile.

## Come si usa
- **Tether (USDT)**, 2014: nato su Bitcoin con Omni Layer, oggi multipiattaforma (soprattutto Tron ed Ethereum); capitalizzazione oltre 167 miliardi di dollari, utile 2024 oltre 13 miliardi; utile per *banking the unbanked* e contro l'inflazione.
- **USD Coin (USDC)**, settembre 2018, consorzio Center (Coinbase, Bitmain): ogni USDC è coperto da un dollaro.
- **DAI** (MakerDAO, operativa dal 2017): per riavere gli ETH si restituisce una somma più alta (commissione di stabilità); il token MKR è invece volatile.
In MiCA le stablecoin sono ART (uno o più asset) o EMT (una sola valuta fiat); negli USA il GENIUS Act regola le payment stablecoin in dollari. La dispensa aggiunge la classe delle stablecoin "algoritmiche", non distinta nelle slide.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/07-Altcoin.pdf` (pp. 14-24); `08-Aspetti normativi.pdf` (pp. 7-8, 22-30); dispensa §7.3-7.4.

## Prerequisiti
- [[Altcoin]]: categoria di criptomonete
- [[Moneta fiat]]: ancoraggio a una valuta legale

## Porta a
- [[CBDC]]: moneta digitale di banca centrale
- [[Regolamento MiCA]]: disciplina di ART ed EMT

## Collegati
- [[Finanza decentralizzata]]: liquidità stabile per la DeFi
- [[Token crittografico]]: le stablecoin sono token
- [[Strumenti finanziari su Bitcoin]]: STRC cerca la stabilità con una cedola variabile
