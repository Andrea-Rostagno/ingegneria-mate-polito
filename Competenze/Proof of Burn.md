---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [PoB, bruciatura di monete, coin burning, eater address, indirizzo mangia soldi, Slimcoin, Effective Burnt Coins, deposit-based consensus, consenso basato su deposito]
tags: [competenza, area/informatica]
---

# Proof of Burn

> Consenso in cui si ottiene il diritto di validare bruciando criptomoneta, cioè inviandola a un indirizzo senza chiave privata: più monete si bruciano, più è probabile essere scelti, senza i consumi della PoW.

## Definizione / enunciato
Nella PoW si spende denaro in computer ed energia; nella **PoB** si spende criptomoneta, che viene eliminata. Più monete un utente brucia a favore del sistema, maggiore è la sua *mining power* e la probabilità di essere scelto come validatore (con il relativo compenso). Bruciare è facile: si invia la moneta a un indirizzo pubblicamente verificabile per cui non esiste chiave privata (**eater address**); le monete restano nel sistema ma inutilizzabili, come i lost bitcoin.

**Deposit-based consensus**: simile, ma la moneta è messa in un deposito di sicurezza invece che bruciata; somiglia anche alla PoS, ma non basta possedere moneta: bisogna depositarla e perderne temporaneamente l'uso.

## Formule chiave
Nessuna formula. Slimcoin: la probabilità di inserire un blocco dipende dal punteggio *Effective Burnt Coins*, che cala a ogni blocco, va a zero in diversi anni e si ricarica bruciando nuove monete.

## Intuizione
Bruciare sembra buttare valore, ma il valore di una criptomoneta è quello globale del sistema: eliminarne una parte alza il valore delle monete rimaste, quindi la PoB è una ridistribuzione di valore dal validatore a tutti gli altri utenti. Diversamente dalla PoS, dove la moneta è solo congelata e si può riavere, qui è persa.

## Come si usa
**Pro**: sostenibile, riduce la moneta circolante e sostiene il valore, incoraggia l'impegno a lungo termine, forse meno centralizzata. **Contro**: alcune PoB bruciano bitcoin (consumi PoW e nuovi lost bitcoin), poco usata e studiata; si può investire troppa moneta senza rifarsi, come nella PoW. Le slide propongono anche una transizione morbida da una vecchia moneta a una nuova bruciando la vecchia come PoB della nuova (il testo dice "PoW", probabilmente un refuso).

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (pp. 30-36); `03-Bitcoin.pdf` (p. 92); dispensa §6.10-6.11.

## Prerequisiti
- [[Protocollo di consenso]]: la PoB è un protocollo di consenso

## Porta a
- Nessuno.

## Collegati
- [[Proof of Stake]]: moneta congelata invece che distrutta
- [[Wallet di criptovalute]]: monete bruciate come lost bitcoin
