---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["padding oracle attack", "CBC padding oracle", "CBC Oracle attack", "attacco di Vaudenay", "padding PKCS#7", "oracolo di padding"]
tags: [competenza, area/informatica]
---

# Attacco padding oracle

> Attacco contro la modalità CBC: se un server rivela anche solo se il padding di un cifrato è corretto, l'attaccante decifra tutto il messaggio byte per byte, senza la chiave.

## Definizione / enunciato
**L'oracolo:** riceve $(IV,\text{ciphertext})$, decifra, controlla il padding del testo in chiaro e risponde OK/NO. Così trapela un bit d'informazione sul testo in chiaro (canale nascosto).

**Padding:** per blocchi da 16 byte, l'oracolo risponde OK quando il blocco finisce con
`\x01`, oppure `\x02\x02`, oppure `\x03\x03\x03`, ..., fino a `\x10` ripetuto 16 volte.

**Idea:** trasformare la domanda "il padding è corretto?" nella domanda "il byte $X$ del blocco $Y$ del testo in chiaro vale $Z$?".

## Formule chiave
Siano $P'_N=\mathrm{decrypt}(k,C_N)$ il valore intermedio e $P_N=C_{N-1}\oplus P'_N$ il blocco in chiaro. Si sostituisce l'ultimo byte di $C_{N-1}$ con $c'_{15}$, provando tutti i 256 valori. Quando l'oracolo dice OK, l'ultimo byte del chiaro vale `\x01`:
$$1=C'_{N-1,15}\oplus P'_{N,15}\ \Rightarrow\ P'_{N,15}=C'_{N-1,15}\oplus1.$$
Con il byte originale si ottiene il byte del chiaro:
$$P_{N,15}=C_{N-1,15}\oplus P'_{N,15}.$$

**Byte successivi:**
- per il penultimo byte si forza l'ultimo a `\x02`, ponendo $c''_{15}=P'_{N,15}\oplus2$, e si itera su $c'_{14}$ finché il padding è `\x02\x02`;
- e così via per tutti i byte;
- poi si scarta l'ultimo blocco e si ripete;
- per il primo blocco si lavora sull'IV, che fa da $C_0$.

## Intuizione
Indovinare un blocco intero costa $2^{128}$ tentativi, che è infattibile. Indovinarlo byte per byte costa $2^8$ tentativi per 16 byte, cioè $2^{12}$: facile. L'attacco è un [[Attacco bit flipping]] guidato dalle risposte dell'oracolo.

## Come si usa
**Problemi pratici** (slide):
- il bit flipping produce cambiamenti in gran parte casuali, quindi sono possibili falsi positivi;
- i falsi positivi sono molto probabili sull'ultimo byte del blocco e molto improbabili sul primo.

Riferimenti citati: il paper originale (EUROCRYPT 2002) e lo strumento padbuster.

**Contromisure:** autenticare il cifrato (encrypt-then-MAC, GCM) e non rivelare errori di padding distinguibili.

## Nei corsi
- **Crittografia** (magistrale): esercitazioni di Basile "Attacks against symmetric crypto (III)". Le formule sono lette dalle slide renderizzate; il codice è in `CBCPaddingOracle` del repository AY2021. Fonti: `magistrale/Crittografia/Slide/presentations/presentations/200423_03LPYOV_symmetric_attacks3.pdf` (pp. 3-21).

## Prerequisiti
- [[Modalità CBC]]: l'attacco sfrutta $P_N=C_{N-1}\oplus\mathrm{Dec}_k(C_N)$
- [[Attacco bit flipping]]: si modificano i byte di $C_{N-1}$

## Porta a
- [[Message authentication code]]: contromisura

## Collegati
- [[Attacco ECB byte-at-a-time]]: stessa strategia byte per byte, contro ECB
- [[Modelli di attacco crittografico]]: è un attacco a cifrato scelto (CCA) con un oracolo ridotto
- [[Modalità GCM]]: la cifratura autenticata lo previene
