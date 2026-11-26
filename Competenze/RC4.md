---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Rivest Cipher 4", "ARC4", "ARCFOUR", "Key Scheduling Algorithm", "KSA", "RC4 KSA"]
tags: [competenza, area/informatica]
---

# RC4

> RC4 è un cifrario a flusso orientato al byte, progettato da Ron Rivest (RSA Security) nel 1987. Uno stato di 256 byte, rimescolato da due puntatori, produce un keystream di byte da combinare in xor con il testo in chiaro.

## Definizione / enunciato
Lo stato è un registro di 256 byte, cioè una S-box $8\times8$ con le $2^8$ permutazioni dei valori $0..255$, più due puntatori $i,j$ (`Crypto3.pdf` p. 3; `Critto_week4.pdf` p. 19). La chiave $k=k_1\cdots k_l$ ha $l\le256$ byte, tipicamente da 5 a 32 (`Critto_week4.pdf` p. 20).

**Init(k), detto KSA** (`Crypto3.pdf` p. 4):
```python
def Init(key):
    register = [i for i in range(0,256)]
    j=0; l = len(key)
    for i in range(0,256):
        j = (j + register[i] + key[i%l])%256
        swap(register,i,j)
    return register
```

**Cifratura**, dove GetBits è in realtà un "get byte" (`Crypto3.pdf` p. 5):
```python
i=0; j=0
for r in range(0,len(Plaintext)):
    i = (i+1)%256
    j = (j + register[i])%256
    register = swap(register,i,j)
    cr = Plaintext[r]^(register[(register[i]+register[j])%256])
```

## Formule chiave
$$j\leftarrow j+S[i]+k[i\bmod l]\ (\mathrm{mod}\ 256)\ \text{(KSA)};\qquad z=S[(S[i]+S[j])\bmod256],\quad c_r=x_r\oplus z$$

## Intuizione
Lo stato è sempre una permutazione di $\{0,\dots,255\}$. Ogni passo scambia due celle scelte dai puntatori, così la permutazione cambia di continuo. Le uniche operazioni sono addizioni modulo 256, scambi e xor, ed è per questo che il cifrario è così veloce in software.

## Come si usa
- **Esercizio della dispensa:** scrivere la funzione `swap` e trovare lo stato del registro dopo l'inizializzazione con $k=[0]$ (es. 3.1.3).
- **Decifratura:** si rigenera lo stesso keystream e lo si mette in xor con il crittogramma.
- **Uso pratico:** RC4 compare tra gli algoritmi simmetrici a flusso di OpenSSL ed è disponibile come `ARC4`, "legacy", in PyCryptodome (slide Basile).
- **Riuso:** come ogni cifrario a flusso, cifrare due messaggi con lo stesso keystream è un errore fatale.

## Nei corsi
- **Crittografia** (magistrale): §3.1.1 delle dispense inglesi ("Stream Ciphers: ARX") e §4.6 delle italiane, con il codice Python di KSA e cifratura. Le slide di Basile lo citano tra gli stream cipher di OpenSSL e Python. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week3/Crypto3.pdf` (pp. 3-5); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week4.pdf` (Critto 4, pp. 19-21); `magistrale/Crittografia/Slide/presentations/presentations/200326_03LPYOV_crypto_in_python.pdf`.

## Prerequisiti
- [[Cifrario a flusso]]: RC4 ne è un esempio
- [[Classi di resto modulo n]]: aritmetica modulo 256

## Porta a
- [[Riuso del keystream]]: attacco tipico ai cifrari a flusso

## Collegati
- [[Salsa20 e ChaCha20]]: cifrari a flusso più moderni
- [[Gruppo simmetrico]]: lo stato è una permutazione di 256 elementi
