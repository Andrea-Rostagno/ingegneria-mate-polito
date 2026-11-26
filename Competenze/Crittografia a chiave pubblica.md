---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [public-key cryptography, crittografia asimmetrica, sistemi asimmetrici, sistemi a chiave pubblica, crittografia simmetrica, sistemi simmetrici, chiave pubblica, chiave privata, coppia di chiavi]
tags: [competenza, area/informatica]
---

# Crittografia a chiave pubblica

> Ogni utente ha una chiave pubblica, con cui gli altri cifrano o verificano, e una chiave privata, con cui lui decifra o firma: elimina il problema dello scambio delle chiavi dei sistemi simmetrici.

## Definizione / enunciato
**Sistemi simmetrici** (classici): un algoritmo e una chiave segreta, usata sia per cifrare sia per decifrare. Difetti: serve una chiave per ogni coppia di utenti e le chiavi vanno scambiate in modo sicuro.

**Sistemi a chiave pubblica** (asimmetrici): ogni utente genera da sé una **chiave pubblica**, che gli altri usano per cifrare i documenti a lui destinati, e una **chiave privata**, che usa lui per decifrare. Lo scambio delle chiavi sparisce.

## Formule chiave
Numero di chiavi per comunicazioni sicure a coppie fra $n$ utenti, in un sistema simmetrico:
$$\binom n2=\frac{n!}{2(n-2)!}=\frac{n(n-1)}2\sim\frac{n^2}2.$$
Con la chiave pubblica bastano $n$ coppie di chiavi.

## Intuizione
La crescita quadratica rende ingestibili i sistemi simmetrici con molti utenti lontani. La chiave pubblica sposta il problema: la sicurezza poggia su una funzione facile da calcolare e difficile da invertire senza un'informazione segreta.

## Come si usa
La crittografia simmetrica non è diventata obsoleta: quella asimmetrica ha chiavi più lunghe e cifra e decifra più lentamente. In blockchain la coppia di chiavi serve soprattutto a **firmare**: la chiave privata autorizza la spesa, la pubblica (o il suo hash, l'indirizzo) identifica il destinatario. Storia: definizione di Diffie e Hellman (1976), forse anticipata nel 1973 dai servizi segreti inglesi; primo sistema RSA (1977); curve ellittiche (1985).

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 15-18, formula verificata sulla pagina renderizzata a p. 16); dispensa §1.5.
- **Crittografia** (magistrale): nasce dal **problema della distribuzione delle chiavi**. Con un cifrario simmetrico, $n$ utenti hanno bisogno di $\binom n2=\frac{n(n-1)}2\approx\frac{n^2}2$ chiavi condivise, scambiate su un canale sicuro (Bazzanella). Con la chiave pubblica ogni utente ha una coppia $(pk,sk)$. Lo schema è $(\mathrm{Gen},\mathrm{Enc}_{pk},\mathrm{Dec}_{sk})$ e si costruisce su una funzione one-way con trapdoor: logaritmo discreto per Diffie-Hellman ed ElGamal, fattorizzazione per RSA e Rabin, ECDLP per ECC. Un PKC dà subito un protocollo di scambio di chiavi (Crypto 1 §1.8.1), e in pratica si usa nella cifratura ibrida KEM/DEM (PGP). I sistemi studiati sono RSA, Rabin, ElGamal, Massey-Omura ed ECC. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.7-1.8); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 3-4); `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.2-9.3).

## Prerequisiti
- Nessuno.

## Porta a
- [[RSA]]: primo sistema a chiave pubblica
- [[Curva ellittica]]: sistemi ECC, più efficienti
- [[Firma digitale]]: ogni sistema a chiave pubblica ha la sua firma
- [[Wallet di criptovalute]]: il wallet custodisce le chiavi private

## Collegati
- [[Scambio di chiavi Diffie-Hellman]]: l'articolo del 1976 che definisce i sistemi a chiave pubblica
- [[Funzione one-way]]: ogni sistema a chiave pubblica si basa su una one-way con trapdoor (Crittografia)
- [[Cifratura ibrida]]: la chiave pubblica cifra solo la chiave di sessione simmetrica (Crittografia)
- [[Crittosistema di Rabin]]: sistema basato sulla fattorizzazione e sulle radici quadrate (Crittografia)
