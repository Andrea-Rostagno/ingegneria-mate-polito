---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Massey-Omura cryptosystem, criptosistema di Massey-Omura, Massey-Omura, protocollo del doppio lucchetto, three-pass protocol, EC-Massey-Omura]
tags: [competenza, area/informatica]
---

# Protocollo di Massey-Omura

> Protocollo a tre passaggi, detto "del doppio lucchetto". Ciascuno mette e poi toglie il proprio lucchetto, che è un'esponenziazione modulo $p$ o una moltiplicazione scalare su una curva, senza bisogno di chiavi pubbliche.

## Definizione / enunciato
**Setup** (`Critto8.pdf` pp. 33-34):
- si fissa una volta per tutte un primo grande $p$;
- ogni utente sceglie $e\in\mathbb Z_{p-1}^*$ e calcola $d\equiv e^{-1}\pmod{p-1}$.

**Passaggi**, con A che invia $M\in\mathbb Z_p$ a B:
1. A invia $C=M^{e_A}\bmod p$;
2. B rimanda $D=C^{e_B}\equiv M^{e_Ae_B}\pmod p$;
3. A toglie il suo lucchetto e invia $E=D^{d_A}\equiv M^{e_B}\pmod p$;
4. B calcola $E^{d_B}\equiv M\pmod p$.

## Formule chiave
$$\big((M^{e_A})^{e_B}\big)^{d_A d_B}\equiv M\pmod p,\qquad e\,d\equiv1\pmod{p-1}$$

**Versione su curva ellittica** (`Crypto12.pdf` §12.2, p. 5): $M$ è codificato come punto di una curva $E$ con $n$ punti.
- Alice ha $0<A<n$ con $\gcd(A,n)=1$, Bob analogamente $B$.
- I messaggi sono $C_0=A\cdot M$, $C_1=B\cdot C_0$, $C_2=A^{-1}\cdot C_1$.
- Bob ricava $M=B^{-1}\cdot C_2$.

## Intuizione
Le due operazioni "lucchetto" commutano ($M^{e_Ae_B}=M^{e_Be_A}$), quindi A può togliere il suo lucchetto anche dopo che B ha messo il proprio. Che $d$ inverta $e$ segue dal piccolo teorema di Fermat, perché gli esponenti contano modulo $p-1$.

## Come si usa
**Difetto** (`Critto8.pdf` p. 35): un terzo C che intercetta $M^{e_A}$ può rimandare $(M^{e_A})^{e_C}$ fingendosi B. Se A non autentica l'interlocutore, toglie il lucchetto e C legge il messaggio. Per questo il protocollo va sempre accoppiato a una firma digitale.

## Nei corsi
- **Crittografia** (magistrale): Bazzanella lo presenta su $\mathbb Z_p$ nei crittosistemi a chiave pubblica, Di Scala sui punti di una curva ellittica. Fonti:
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 33-35);
  - `magistrale/Crittografia/Slide/slides week 1-14/week12/Crypto12.pdf` (§12.2, p. 5).

## Prerequisiti
- [[Piccolo teorema di Fermat]]: garantisce $M^{ed}\equiv M$ quando $ed\equiv1\pmod{p-1}$
- [[Identità di Bézout]]: calcolo dell'inverso $d=e^{-1}\bmod(p-1)$
- [[Esponenziazione modulare veloce]]: ogni passaggio è una potenza modulo $p$

## Porta a
- [[Firma digitale]]: serve per autenticare le parti

## Collegati
- [[Scambio di chiavi Diffie-Hellman]]: anche qui si usa la commutatività degli esponenti
- [[Curva ellittica]]: variante EC-Massey-Omura con moltiplicazione scalare
- [[Attacco man-in-the-middle]]: il difetto del protocollo senza autenticazione
