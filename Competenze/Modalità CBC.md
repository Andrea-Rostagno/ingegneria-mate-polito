---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["CBC", "Cipher Block Chaining", "CBC mode", "vettore di inizializzazione", "initialization vector", "IV"]
tags: [competenza, area/informatica]
---

# Modalità CBC

> Cipher Block Chaining: prima di cifrare, ogni blocco in chiaro si somma in XOR con il blocco cifrato precedente; il primo con un vettore di inizializzazione IV. I blocchi formano una catena.

## Definizione / enunciato
Il messaggio si divide in blocchi $P=B_n\|\cdots\|B_1$, con padding sull'ultimo, e per tutti i blocchi si usa la stessa chiave $k$. L'IV è spesso un nonce. Se è scelto a caso, CBC è non deterministica, cioè una cifratura probabilistica.

## Formule chiave
Cifratura:
$$y_1=\mathrm{Enc}_k(B_1\oplus IV),\qquad y_j=\mathrm{Enc}_k(B_j\oplus y_{j-1})\ \ (j>1).$$
Decifratura:
$$B_1=\mathrm{Dec}_k(y_1)\oplus IV,\qquad B_j=\mathrm{Dec}_k(y_j)\oplus y_{j-1}\ \ (j>1).$$

## Intuizione
- Grazie all'IV casuale, lo stesso messaggio cifrato due volte dà crittogrammi diversi.
- Cambiare un bit dell'IV o di un blocco $B_j$ altera tutti i blocchi cifrati successivi.
- In decifratura, invece, $B_j$ dipende solo da due blocchi cifrati adiacenti $y_{j-1},y_j$.

## Come si usa
**Vantaggi** (dispense):
- cifratura probabilistica;
- catena di dipendenze tra i blocchi;
- la **decifratura** è parallelizzabile.

La cifratura invece è sequenziale.

**Punti deboli** sfruttati nelle esercitazioni:
- la relazione $B_j=\mathrm{Dec}_k(y_j)\oplus y_{j-1}$ fa sì che un bit cambiato in $y_{j-1}$ cambi lo stesso bit di $B_j$ (e rovini $B_{j-1}$): è l'[[Attacco bit flipping]];
- se il server rivela se il padding è corretto, si decifra tutto byte per byte: è l'[[Attacco padding oracle]];
- anche CBC soffre di block replay; servono MAC e tag per proteggere l'integrità (esempio dei bonifici bancari nelle dispense).

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.4.2 (Di Scala, 2020); Crypto 5 §5.1.2 e §5.2.2; esercitazioni Basile sugli attacchi simmetrici. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (p. 18); `magistrale/Crittografia/Slide/slides week 1-14/week5/Crypto5.pdf` (pp. 5-6, 11); `magistrale/Crittografia/Slide/presentations/presentations/200423_03LPYOV_symmetric_attacks3.pdf` (p. 10).

## Prerequisiti
- [[Cifrario a blocchi]]: CBC lo usa in catena
- [[Modalità ECB]]: CBC ne corregge il determinismo

## Porta a
- [[Attacco bit flipping]]: manipolazione dei blocchi cifrati
- [[Attacco padding oracle]]: decifratura senza chiave
- [[Message authentication code]]: CBC-MAC e CCM

## Collegati
- [[Sicurezza IND-CPA]]: con IV casuale la cifratura è probabilistica
- [[Modalità CTR]]: alternativa parallelizzabile anche in cifratura
