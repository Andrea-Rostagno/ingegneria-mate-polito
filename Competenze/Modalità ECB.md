---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["ECB", "Electronic Codebook", "Electronic Code Book", "ECB mode", "block replay"]
tags: [competenza, area/informatica]
---

# Modalità ECB

> Electronic Codebook: la modalità più semplice per cifrare un messaggio lungo con un cifrario a blocchi. Ogni blocco si cifra separatamente con la stessa chiave.

## Definizione / enunciato
Il messaggio si divide in blocchi $P=B_n\|\cdots\|B_2\|B_1$, riempiendo l'ultimo con il padding. Ogni blocco si cifra con la stessa chiave $k$ e i blocchi si spediscono in ordine.

## Formule chiave
Dal documento NIST SP 800-38a, letto in un esercizio della dispensa:
$$C_j=\mathrm{CIPH}_K(P_j),\qquad P_j=\mathrm{CIPH}^{-1}_K(C_j),\qquad j=1,\dots,n.$$

## Intuizione
Il nome viene dal fatto che, fissata la chiave, ogni blocco in chiaro ha un solo blocco cifrato. Si può immaginare un gigantesco "codice", un libro in cui ogni riga contiene la coppia blocco in chiaro/blocco cifrato; cambiando la chiave cambia il libro. ECB è quindi **deterministica**: blocchi uguali in chiaro danno blocchi uguali cifrati (con la stessa chiave), e viceversa.

## Come si usa
**Vantaggi:**
- non serve sincronizzarsi: i blocchi ricevuti si decifrano indipendentemente;
- la cifratura è parallelizzabile;
- gli errori restano localizzati.

**Svantaggi:**
- nessuna integrità: l'attaccante può invertire o sostituire blocchi (block replay, esempi da Schneier);
- se la chiave non cambia, si riconosce un messaggio spedito più volte (traffic analysis).

Le dispense inglesi concludono che ECB lascia nel cifrato troppa informazione sul testo in chiaro e non va usata nei protocolli.

Negli attacchi pratici, il test di uguaglianza tra blocchi distingue ECB da CBC: si invia una lunga sequenza di "a" e si confrontano i blocchi $x$ e $x+1$ del cifrato. Lo stesso test è alla base di [[Attacco ECB byte-at-a-time]] e [[Attacco ECB copy-paste]].

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.4.1 (Di Scala, 2020); Crypto 5 §5.1.1 e §5.2.1 (block replay); esercitazioni Basile "symmetric attacks (II)" (ECB vs CBC). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 15-17, 22); `magistrale/Crittografia/Slide/slides week 1-14/week5/Crypto5.pdf` (pp. 3-4, 11); `magistrale/Crittografia/Slide/presentations/presentations/200416_03LPYOV_symmetric_attacks2.pdf` (pp. 4-5).

## Prerequisiti
- [[Cifrario a blocchi]]: ECB lo applica blocco per blocco

## Porta a
- [[Attacco ECB byte-at-a-time]]: sfrutta il determinismo
- [[Attacco ECB copy-paste]]: sfrutta l'indipendenza dei blocchi

## Collegati
- [[Modalità CBC]]: concatena i blocchi e rende la cifratura probabilistica
- [[Sicurezza IND-CPA]]: una modalità deterministica non può essere IND-CPA
- [[Message authentication code]]: serve contro sostituzioni e replay di blocchi
