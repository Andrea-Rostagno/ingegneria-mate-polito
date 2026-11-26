---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["ECB decryption oracle", "byte-at-a-time ECB decryption", "ECB decrypt adaptive chosen plaintext attack", "attacco adattivo a testo scelto su ECB", "oracolo di cifratura ECB"]
tags: [competenza, area/informatica]
---

# Attacco ECB byte-at-a-time

> Attacco adattivo a testo in chiaro scelto contro un oracolo che cifra in AES-ECB "input dell'attaccante + segreto". Il segreto si recupera un byte alla volta confrontando blocchi cifrati.

## Definizione / enunciato
**Scenario:** un oracolo di cifratura riceve una stringa `message`, costruisce `prefix + message + secret` e la cifra con AES-128 in ECB con una chiave ignota. L'obiettivo è decifrare `secret` senza conoscere la chiave.

**Principio:** in ECB, con la stessa chiave, due blocchi in chiaro uguali danno due blocchi cifrati uguali, e viceversa.

## Formule chiave
Siano $b=16$ la lunghezza del blocco e $s_0s_1\cdots$ il segreto. Per trovare il byte $s_i$ si inviano due blocchi controllati:
- un blocco "esca" `A`$^{\,b-1-i}\,\|\,s_0\cdots s_{i-1}\,\|\,c$, con $c$ carattere candidato;
- dei byte di riempimento `A`$^{\,b-1-i}$ che spingono il byte $s_i$ ignoto in ultima posizione di un altro blocco.

Se i due blocchi cifrati coincidono, allora $c=s_i$. Il costo è al più $256$ tentativi per byte, invece di $2^{128}$ per blocco.

## Intuizione
Riempiendo con il numero giusto di byte noti, il blocco che contiene il segreto ha 15 byte conosciuti e uno solo ignoto. L'oracolo diventa una tabella di consultazione per quel singolo byte: lo si confronta con i 256 blocchi costruiti a mano. Il determinismo di ECB, che "conserva le uguaglianze", fa trapelare il segreto.

## Come si usa
Esempio dell'esercitazione (`ECB_ACPAttack_client.py`):
- l'oracolo cifra `"Here is the msg:{input} - and the sec:{secret}"`, con un segreto di 16 caratteri stampabili;
- per ogni posizione $i$ il client invia `fix + secret + letter + "A"*(16-i)`, dove `fix` è la coda nota `" - and the sec:"` accorciata di un carattere a ogni passo;
- se i byte cifrati `[16:32]` e `[48:64]` coincidono, la lettera è giusta.

Prima dell'attacco si verifica che la modalità sia ECB, con il test di uguaglianza tra blocchi consecutivi.

## Nei corsi
- **Crittografia** (magistrale): esercitazioni di Basile "Attacks against symmetric crypto (II)". Fonti: `magistrale/Crittografia/Slide/presentations/presentations/200416_03LPYOV_symmetric_attacks2.pdf` (pp. 3-5, 8-11); `magistrale/Crittografia/Slide/presentations/presentations/200423_03LPYOV_symmetric_attacks3.pdf` (p. 5: confronto $2^{128}$ contro $2^{12}$ per blocco); esempio di codice `magistrale/Crittografia/Repository GitHub/cryptography-03lpyov-exercises/AY2021/attacks/ECBDecryptionOracle/ECB_ACPAttack_client.py`.

## Prerequisiti
- [[Modalità ECB]]: l'attacco sfrutta il suo determinismo
- [[Modelli di attacco crittografico]]: è un attacco CPA adattivo

## Porta a
- [[Attacco ECB copy-paste]]: altro attacco alla stessa modalità

## Collegati
- [[Attacco padding oracle]]: stessa idea di indovinare un byte alla volta, contro CBC
- [[AES]]: il cifrario usato nell'esercitazione
- [[Sicurezza IND-CPA]]: ECB non la soddisfa
