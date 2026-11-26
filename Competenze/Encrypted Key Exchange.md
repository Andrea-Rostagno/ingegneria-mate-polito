---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [EKE, DH-EKE, scambio di chiavi cifrato, Bellovin-Merritt, password-authenticated key exchange, key exchange key, KEK, validazione challenge-response delle chiavi, partition attack]
tags: [competenza, area/informatica]
---

# Encrypted Key Exchange

> Protocollo di Bellovin e Merritt (1992) per stabilire una chiave di sessione autenticata da una password condivisa $P$, resistente agli attacchi del dizionario offline. Combina crittografia simmetrica e asimmetrica.

## Definizione / enunciato
**Il problema.** Lo schema ingenuo è "Alice invia $Enc_P(R)$". Un intercettatore prova le password candidate $P'$, decifra e cerca ridondanza nei messaggi successivi, per esempio $Enc_R(\text{Terminal type:})$. È un attacco del dizionario **offline**. A questo si aggiungono gli attacchi di replay.

**EKE:**
1. Alice genera una coppia casuale $(pk,sk)$ e invia $(\text{Alice},\,Enc_P(pk))$;
2. Bob ricava $pk=Dec_P(Enc_P(pk))$, genera una chiave di sessione $R$ e invia $Enc_P(Enc_{pk}(R))$;
3. Alice decifra e ottiene $R$.

**Validazione challenge-response:**
1. Alice invia $Enc_R(\text{Ch}_A)$;
2. Bob risponde con $Enc_R(\text{Ch}_A\|\text{Ch}_B)$;
3. Alice controlla $\text{Ch}_A$ e invia $Enc_R(\text{Ch}_B)$;
4. Bob controlla $\text{Ch}_B$.

## Formule chiave
**KEK.** Se la chiave $R$ è compromessa, $P$ resta attaccabile: per ogni $P'$ si calcola $pk'=Dec_{P'}(Enc_P(pk))$ e si controlla
$$Enc_P(Enc_{pk}(R))\overset{?}{=}Enc_{P'}(Enc_{pk'}(R)).$$
Per evitarlo $R$ diventa una **key exchange key**:
- nel challenge-response si scambiano le sottochiavi $S_A$ e $S_B$;
- la vera chiave di sessione è $S=f(S_A,S_B)$.

## Intuizione
Una chiave pubblica casuale cifrata con $P$ è indistinguibile da rumore, quindi provare una $P'$ non dà nessun riscontro verificabile. Con un cifrario simmetrico al posto di $(pk,sk)$ il protocollo non funziona: è l'esercizio 13.2.2 delle dispense. Un $S$ compromesso non permette di attaccare $P$, e il protocollo ha **perfect forward secrecy**: la chiave a lungo termine è $P$.

## Come si usa
- Le slide di Bazzanella citano **DH-EKE**: Diffie-Hellman più mutua autenticazione con password, contro il man-in-the-middle.
- La variante con RSA è esposta ai **partition attack** (§13.2.3, solo riferimento bibliografico).

## Nei corsi
- **Crittografia** (magistrale): dispense di Di Scala, settimana 13, e citazione nelle slide di Bazzanella. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week13/Crypto13.pdf` (§13.1.1 p. 3, §13.2 pp. 7-10); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (p. 27).

## Prerequisiti
- [[Crittografia a chiave pubblica]]: coppia effimera $(pk,sk)$
- [[Schema di cifratura simmetrica]]: $Enc_P$ con la password
- [[Key Distribution Center]]: chiavi di sessione, replay e PFS

## Porta a
- [[Secure Remote Password]]: il server conserva un verificatore invece di $P$
- [[Simultaneous Authentication of Equals]]: scambio paritario basato su password

## Collegati
- [[Scambio di chiavi Diffie-Hellman]]: variante DH-EKE
- [[One-time password]]: challenge-response per l'autenticazione
- [[Attacco man-in-the-middle]]: ciò che l'autenticazione con password previene
