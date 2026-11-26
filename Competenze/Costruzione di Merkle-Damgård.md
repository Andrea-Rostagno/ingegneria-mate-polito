---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Merkle-Damgård construction, Merkle-Damgard, schema di Merkle-Damgård, funzione di compressione, compression function, Davies-Meyer, costruzione di Davies-Meyer, SHA-2, SHA-224, SHA-512, MD4]
tags: [competenza, area/informatica]
---

# Costruzione di Merkle-Damgård

> Costruisce una hash per messaggi di lunghezza arbitraria iterando una funzione di compressione su blocchi di lunghezza fissa, a partire da un vettore iniziale IV. È la struttura di MD4, SHA-1 e SHA-2.

## Definizione / enunciato
Servono una funzione di compressione $\mathrm{Com}$ e un valore iniziale $IV$. Dopo il padding il messaggio è diviso in blocchi $x=x_1x_2\cdots x_n$ e si itera (Critto 6, p. 19; Ex. 6.2.16):
$$H_0=IV,\qquad H_j=\mathrm{Com}(H_{j-1},x_j),\qquad \mathrm{Hash}(x)=H_n.$$

## Formule chiave
**Davies-Meyer** (compressione da un cifrario a blocchi). I blocchi $x_j$ fanno da chiave e $H_{j-1}$ da testo da cifrare, con uno XOR finale:
$$\mathrm{Com}(H_{j-1},x_j)=H_{j-1}\oplus\mathrm{Enc}_{x_j}(H_{j-1}).$$
Ha punti fissi: se $H_{j-1}=\mathrm{Dec}_{x_j}(0)$, allora $H_j=H_{j-1}$ (Ex. 6.2.17).

**SHA-256** (Crypto 8, p. 6): blocchi da 512 bit, 64 round, parole $A,\dots,H$ da 32 bit, e
$$H^{(i)}=H^{(i-1)}+\mathrm{Enc}_{M^{(i)}}(H^{(i-1)}).$$

**Padding di MD4:** un bit "1", poi zeri fino a lunghezza $\equiv 448 \pmod{512}$, poi 64 bit con la lunghezza del messaggio. Blocchi da 512 bit, digest da 128 bit (Crypto 8, p. 3).

## Intuizione
Basta progettare bene una compressione a ingresso fisso, e la catena la estende a input arbitrari. Il prezzo è che il digest **è** lo stato interno dopo l'ultimo blocco: chi conosce $\mathrm{Hash}(x)$ può continuare la catena.

## Come si usa
- **SHA-1** (Critto 6, pp. 25-26): input fino a $2^{64}$ bit, blocchi da 512 bit in 16 parole da 32 bit, stato di 5 parole $A,\dots,E$, digest da 160 bit. Esempio: $\text{SHA-1(ciao)}=\texttt{1e4e888ac66f8dd41e00c5a7ac36a32a9950d271}$.
- **Famiglia SHA-2**: SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256.
- Esempio giocattolo (Crypto 7, Ex. 7.2.5): $\mathrm{Com}$ da 5+5 a 5 bit come resto modulo $x^5+x^2+1$ in $\mathbb Z_2[x]$, con padding $x\|1\|0\|0^*\|1$ e $IV=01010$.
- **Debolezze** (Basile): multi-collisioni (trovata una collisione se ne generano facilmente altre), herding (collisioni a prefisso scelto) e length extension.

## Nei corsi
- **Crittografia** (magistrale): §6.2.2 e §6.3-6.4 delle dispense italiane, §7.2.1 e §8.1 di quelle inglesi, con lo schema a blocchi rivisto da Basile nella lezione sugli attacchi alle hash. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (Critto 6, pp. 19-20, 25-27); `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (pp. 9-10); `magistrale/Crittografia/Slide/slides week 1-14/week8/Crypto8.pdf` (pp. 3-6); `magistrale/Crittografia/Slide/presentations/presentations/200604_03LPYOV_hash_attacks.pdf` (pp. 3-8).

## Prerequisiti
- [[Funzione hash crittografica]]: la costruzione ne realizza una
- [[Cifrario a blocchi]]: fornisce la compressione di Davies-Meyer
- [[Divisione tra polinomi]]: compressione giocattolo come resto in $\mathbb Z_2[x]$

## Porta a
- [[Attacco length extension]]: sfrutta il digest come stato interno
- [[HMAC]]: MAC sicuro anche con hash Merkle-Damgård

## Collegati
- [[Costruzione a spugna]]: alternativa basata su una permutazione (SHA-3)
- [[Salsa20 e ChaCha20]]: stesso XOR finale (feed-forward) di Davies-Meyer
- [[Paradosso del compleanno]]: costo generico per trovare una collisione
