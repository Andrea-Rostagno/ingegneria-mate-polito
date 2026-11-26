---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Salsa20", "ChaCha20", "ChaCha", "XChaCha20", "quarter-round", "funzione quarter-round", "architettura ARX", "ARX", "add-rotate-xor"]
tags: [competenza, area/informatica]
---

# Salsa20 e ChaCha20

> Salsa20 e la sua variante ChaCha20, entrambe di D. J. Bernstein, sono cifrari a flusso ARX. Espandono una chiave di 256 bit e un nonce in un keystream con 20 round di addizioni, rotazioni e xor su una matrice $4\times4$ di parole di 32 bit.

## Definizione / enunciato
**Architettura ARX** (`Crypto3.pdf` p. 2). È una lunga catena di tre operazioni semplici:
- addizione $\boxplus$ in $\mathbb Z_{2^{32}}$;
- xor $\oplus$;
- rotazione $\lll$ di un numero costante di bit.

**Salsa20** (`Crypto3.pdf` pp. 6-7):
- espande una chiave di 256 bit e un nonce di 64 bit in un flusso di $2^{70}$ byte. Il testo estratto perde l'esponente, ma il valore è coerente con i $2^{73}$ bit di p. 9;
- per cifrare $b$ byte si fa lo xor con i primi $b$ byte del flusso.

Lo stato iniziale è una matrice $4\times4$ di parole di 32 bit ($2^5\times2^4=2^9$ bit) e contiene:
- sulla diagonale le costanti "expand 32-byte k" in ASCII;
- la chiave;
- il nonce;
- due parole di posizione, usate come contatore da 0 a $\lceil b/64\rceil-1$.

## Formule chiave
**Quarter-round di Salsa20** $QR(a,b,c,d)$:
$$b\mathrel{\oplus}=(a\boxplus d)\lll7,\quad c\mathrel{\oplus}=(b\boxplus a)\lll9,\quad d\mathrel{\oplus}=(c\boxplus b)\lll13,\quad a\mathrel{\oplus}=(d\boxplus c)\lll18$$
Ci sono 10 doppi round.
- Round sulle colonne: $QR(0,4,8,12)$, $QR(5,9,13,1)$, $QR(10,14,2,6)$, $QR(15,3,7,11)$.
- Round sulle righe: $QR(0,1,2,3)$, $QR(5,6,7,4)$, $QR(10,11,8,9)$, $QR(15,12,13,14)$.

**Quarter-round di ChaCha20** (`Crypto3.pdf` p. 9):
$$a\mathrel{+}=b;\ d\mathrel{\oplus}=a;\ d\lll16;\quad c\mathrel{+}=d;\ b\mathrel{\oplus}=c;\ b\lll12;\quad a\mathrel{+}=b;\ d\mathrel{\oplus}=a;\ d\lll8;\quad c\mathrel{+}=d;\ b\mathrel{\oplus}=c;\ b\lll7$$
- Round sulle colonne: $QR(0,4,8,12)$, $QR(1,5,9,13)$, $QR(2,6,10,14)$, $QR(3,7,11,15)$.
- Round sulle diagonali: $QR(0,5,10,15)$, $QR(1,6,11,12)$, $QR(2,7,8,13)$, $QR(3,4,9,14)$.

**Uscita**, per entrambi: lo stato dopo 20 round **sommato** ($\boxplus$ in $\mathbb Z_{2^{32}}$) allo stato iniziale.

## Intuizione
Ogni round è invertibile. Senza la somma finale con lo stato iniziale si potrebbe risalire all'indietro fino alla matrice iniziale, e quindi alla chiave: la dispensa sottolinea che quest'ultima addizione è fondamentale (p. 7).

ChaCha cambia il quarter-round per migliorare la **diffusione** dei bit mantenendo la stessa velocità (p. 9). Con il contatore il keystream si può calcolare a blocchi indipendenti, come in modalità CTR.

## Come si usa
- **Esercizi della dispensa:** usare l'implementazione Python `salsa20` di PyPI e leggere l'introduzione del paper di Bernstein (es. 3.1.6-3.1.7).
- **Uso pratico:** nelle esercitazioni ChaCha20, XChaCha20 e Salsa20 si usano da PyCryptodome; ChaCha20 è anche tra gli stream cipher di OpenSSL. Un cifrario a flusso da solo non garantisce integrità: va unito a un MAC (nota 3.1.5, che rimanda al bit flipping).

## Nei corsi
- **Crittografia** (magistrale): §3.1.2-3.1.3 delle dispense inglesi e §4.7 delle italiane. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week3/Crypto3.pdf` (pp. 2, 6-10); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week4.pdf` (Critto 4, pp. 22-28); `magistrale/Crittografia/Slide/presentations/presentations/200326_03LPYOV_crypto_in_python.pdf`.

## Prerequisiti
- [[Cifrario a flusso]]: Salsa20 e ChaCha20 ne sono esempi
- [[Classi di resto modulo n]]: addizione in $\mathbb Z_{2^{32}}$

## Porta a
- [[Attacco bit flipping]]: senza MAC il crittogramma è malleabile

## Collegati
- [[RC4]]: altro cifrario a flusso ARX
- [[Confusione e diffusione]]: ChaCha migliora la diffusione
- [[Modalità CTR]]: stessa idea di contatore
- [[Message authentication code]]: necessario per l'integrità
