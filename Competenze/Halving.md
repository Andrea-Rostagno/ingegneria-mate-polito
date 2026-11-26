---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [halving di Bitcoin, dimezzamento della ricompensa, 21 milioni di bitcoin, offerta massima di Bitcoin, emissione di Bitcoin, politica monetaria di Bitcoin]
tags: [competenza, area/informatica]
---

# Halving

> Ogni 210.000 blocchi (circa 4 anni) la ricompensa del miner si dimezza: l'emissione segue una serie geometrica e il totale tende a 21 milioni di BTC.

## Definizione / enunciato
La ricompensa della coinbase, inizialmente 50 BTC, è dimezzata ogni **210.000 blocchi**: 50 BTC (2009-2012), 25 (2013-2016), 12,5 (2017-2020), 6,25 (2021-2024), 3,125 (2025-2028). L'ultimo halving citato è del 20 aprile 2024.

## Formule chiave
$$\frac12+\frac14+\frac18+\dots=\sum_{k=1}^{\infty}\Big(\frac12\Big)^k=1,$$
$$50\ \text{BTC}\times210.000=10{,}5\ \text{milioni}=\tfrac12\text{ del totale}\ \Rightarrow\ \text{totale}\to21\ \text{milioni}.$$
Frazioni emesse: metà nel 2009-2012, tre quarti a fine 2016, sette ottavi nel 2020, quindici sedicesimi (oltre il 93%) ad aprile 2024.

## Intuizione
Il primo quadriennio emette metà di tutto e ogni periodo successivo la metà del precedente: l'offerta cresce come una serie geometrica convergente. La serie è solo un'approssimazione: quando il compenso scende sotto 1 satoshi non può più essere pagato, e le slide indicano che ciò avverrà a gennaio 2140, dopo di che non nasceranno più bitcoin.

## Come si usa
Molto prima del 2140 l'incentivo a minare dipenderà dalle **fee**, che dovranno crescere. Il rapporto fra emissione annua e stock esistente cala in modo prestabilito: per le slide è ciò che rende Bitcoin candidato a buon denaro. Finora l'aumento del prezzo ha più che compensato il calo della ricompensa. Le slide di confutazione notano che 21 milioni bastano perché si usano le frazioni.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 86-90, serie di p. 89 verificata sulla pagina renderizzata; p. 148); `04-Denaro.pdf` (p. 34); dispensa §3.9.

## Prerequisiti
- [[Coinbase transaction]]: ricompensa che viene dimezzata
- [[Serie geometrica]]: somma dell'emissione totale

## Porta a
- [[Rapporto tra flusso e riserva]]: flusso calante e programmato

## Collegati
- [[Fee di transazione]]: incentivo futuro dei miner
- [[Difficoltà di mining]]: i 10 minuti fissano i 4 anni fra halving
