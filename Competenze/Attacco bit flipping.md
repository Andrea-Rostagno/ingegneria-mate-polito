---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["bit-flipping attack", "bit flipping", "bit-flipping", "malleabilità del cifrato", "ciphertext malleability"]
tags: [competenza, area/informatica]
---

# Attacco bit flipping

> Attacco che modifica alcuni bit del testo cifrato per forzare valori scelti nel testo in chiaro decifrato, senza conoscere la chiave.

## Definizione / enunciato
L'attaccante non conosce la chiave, ma conosce o indovina una parte del testo in chiaro. Somma al cifrato una **maschera** di bit (bit flipping mask), in modo che il testo decifrato diventi quello desiderato. Quanto è facile dipende dalla modalità di cifratura (slide di Basile):
- **cifrari a flusso: facilissimo.** Cambiare un bit del cifrato cambia esattamente lo stesso bit del testo in chiaro;
- **ECB: impossibile.** Il blocco modificato si decifra in un valore pseudocasuale;
- **CBC: parzialmente possibile.** Si modifica il blocco $n-1$: il blocco $n$ cambia nei bit voluti, mentre il blocco $n-1$ decifrato diventa pseudocasuale.

## Formule chiave
Cifrario a flusso con $C=P\oplus KS$:
$$C'=C\oplus\Delta\ \Rightarrow\ P'=C'\oplus KS=P\oplus\Delta.$$
In CBC, poiché $P_n=\mathrm{Dec}_k(C_n)\oplus C_{n-1}$,
$$C'_{n-1}=C_{n-1}\oplus\Delta\ \Rightarrow\ P'_n=P_n\oplus\Delta.$$
Per passare dal testo noto $P_n$ al testo voluto $P^*_n$ si sceglie $\Delta=P_n\oplus P^*_n$.

## Intuizione
Lo XOR finale delle modalità a flusso, e quello con il blocco precedente in CBC, è lineare. Ciò che l'attaccante fa sul cifrato si riflette tale e quale sul chiaro. La sola cifratura dà confidenzialità ma non integrità: il cifrato è **malleabile**.

## Come si usa
Esempio dell'esercitazione (`bf_client.py`):
- il server cifra in AES-CBC un cookie che contiene `admin=0`;
- il client calcola `delta = pad(b'admin=0') XOR pad(b'admin=1')` e somma questo delta in XOR ai primi 16 byte del cifrato, cioè al blocco che precede quello da modificare;
- il server decifra e trova `admin=1`.

**Difesa:** un MAC o una cifratura autenticata (GCM, CCM), che rendono rilevabile ogni modifica.

## Nei corsi
- **Crittografia** (magistrale): esercitazioni di Basile "Attacks against symmetric crypto" (I e III), con il codice delle esercitazioni AY2021. Fonti: `magistrale/Crittografia/Slide/presentations/presentations/200409_03LPYOV_symmetric_attacks.pdf` (pp. 6-9); `magistrale/Crittografia/Slide/presentations/presentations/200423_03LPYOV_symmetric_attacks3.pdf` (pp. 7-8); esempio di codice `magistrale/Crittografia/Repository GitHub/cryptography-03lpyov-exercises/AY2021/attacks/bit_flipping/bf_client.py`.

## Prerequisiti
- [[Modalità CBC]]: la variante a blocchi dell'attacco
- [[Cifrario a flusso]]: la variante più semplice

## Porta a
- [[Attacco padding oracle]]: usa il bit flipping per interrogare un oracolo

## Collegati
- [[Sicurezza IND-CPA]]: la non malleabilità è una nozione di sicurezza distinta
- [[Message authentication code]]: la contromisura
- [[Modalità GCM]]: cifratura autenticata
- [[Modalità ECB]]: in ECB l'attacco non funziona
