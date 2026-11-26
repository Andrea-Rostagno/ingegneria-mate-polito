---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [wallet, portafoglio di criptovalute, hot wallet, cold wallet, desktop wallet, mobile wallet, web wallet, hardware wallet, paper wallet, custodial wallet, custodian wallet, non custodial wallet, lost bitcoin, bitcoin persi]
tags: [competenza, area/informatica]
---

# Wallet di criptovalute

> Software o dispositivo che genera e custodisce chiavi private, chiavi pubbliche e indirizzi: non contiene bitcoin, ma le chiavi per spenderli; chi perde la chiave privata perde i fondi.

## Definizione / enunciato
Per **piattaforma**: desktop, mobile, web (**hot wallet**); hardware, paper (**cold wallet**).
- Desktop: molte funzioni, sicurezza legata a quella del PC.
- Mobile: il più diffuso, leggero e semplice.
- Web: chiavi su un server di terzi, sconsigliato per grandi somme.
- Hardware: dispositivo USB dedicato, molto sicuro.
- Paper: chiavi e indirizzi stampati, "low-tech ma molto sicuro".

Per **custodia** (rilevante anche giuridicamente): **custodial**, le chiavi le custodisce il fornitore e il cliente non possiede davvero le cripto; **non custodial**, le custodisce l'utente.

## Formule chiave
Stima delle slide (Chainalysis 2020): circa il 20% dei BTC non viene mosso da più di 5 anni.

## Intuizione
**Lost bitcoin**: se si perde la chiave privata i bitcoin restano nel sistema ma non sono più spendibili, perché non c'è modo di ricavare la chiave privata dalla pubblica. Non c'è un'autorità che reimposti le credenziali. Contarli è difficile: un indirizzo fermo da anni può avere un proprietario vivo (Satoshi, oltre un milione di BTC), e una chiave persa di recente non si vede.

## Come si usa
Conio (2015) divide le chiavi private in *secret splitting* fra Conio e un consorzio di banche, per recuperarle in caso di perdita. Opendime è una chiavetta USB monouso che non mostra mai la chiave privata finché non viene bucata fisicamente. La sicurezza dipende anche dal fattore umano: password banali, chiavi condivise per errore. In MiCA i wallet custodial sono servizi CASP; il bollo del 2 per mille forse non si applica ai non custodial.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 91-104); `08-Aspetti normativi.pdf` (pp. 9, 47); dispensa §3.15-3.16.

## Prerequisiti
- [[Indirizzo Bitcoin]]: il wallet genera indirizzi
- [[Crittografia a chiave pubblica]]: custodia della chiave privata

## Porta a
- [[Self Sovereign Identity]]: wallet digitale per le credenziali

## Collegati
- [[Regolamento MiCA]]: i wallet custodial sono CASP
- [[Proof of Burn]]: le monete bruciate sono inutilizzabili come i lost bitcoin
