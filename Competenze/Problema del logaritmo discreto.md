---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [discrete logarithm problem, DLP, ECDLP, Elliptic Curve Discrete Logarithm Problem, logaritmo discreto su curve ellittiche, logaritmo discreto]
tags: [competenza, area/informatica]
---

# Problema del logaritmo discreto

> Dato un punto $P$ di una curva ellittica e un suo multiplo $kP$, determinare $k$: è il problema difficile su cui poggiano ECC, ECDSA e quindi la proprietà dei bitcoin.

## Definizione / enunciato
**ECDLP** (Elliptic Curve Discrete Logarithm Problem): dato un punto $P$ della curva e un suo multiplo $kP$, determinare $k$. Le slide affermano che l'ECDLP è più difficile del DLP classico; per questo si possono usare numeri relativamente piccoli mantenendo il livello di sicurezza che con il DLP classico richiede numeri molto più grandi.

## Formule chiave
$$\text{facile: } k\mapsto kP=\underbrace{P+\dots+P}_{k},\qquad \text{difficile: } (P,kP)\mapsto k.$$
In Bitcoin: chiave privata $d$ di 256 bit, chiave pubblica $dG$ sulla curva secp256k1.

## Intuizione
La moltiplicazione per uno scalare si calcola rapidamente per raddoppi successivi ($2P$, $4P$, ...), mentre non si conosce un modo efficiente di invertirla. È l'analogo, sui punti della curva, del logaritmo nei gruppi moltiplicativi.

## Come si usa
In Bitcoin la chiave pubblica si calcola in fretta dalla privata, ma il contrario è "molto al di fuori delle capacità anche dei più potenti calcolatori esistenti". Stima delle slide: circa $1{,}4$ miliardi di indirizzi creati fino al 2025; anche moltiplicando il ritmo per $10^6$ si userebbero circa $12\cdot10^{16}$ coppie in 1000 anni su circa $2^{256}\approx1{,}16\cdot10^{77}$ possibili, cioè una probabilità di collisione dell'ordine di $10^{-60}$. Il computer quantistico romperà ECC e ECDSA: le slide notano che il rischio per Bitcoin riguarda soprattutto i BTC bloccati su chiavi pubbliche già esposte.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (p. 28); `03-Bitcoin.pdf` (pp. 20, 28-31, 133).
- **Crittografia** (magistrale): definito prima sul gruppo moltiplicativo e poi sulle curve. Se $G$ è ciclico con generatore $g$, l'equazione $g^k=m$ mette in biiezione gli elementi $m$ e gli esponenti $k$, e $k$ è il **logaritmo discreto** di $m$. La funzione $k\mapsto g^k$ si calcola in fretta con square-and-multiply, ma invertirla è computazionalmente difficile: è l'esempio principale di funzione one-way (Crypto 7 §7.1.1). Su questo problema poggiano Diffie-Hellman (con il problema DH collegato), ElGamal, DSA, Schnorr e l'hash di Chaum-van Heijst-Pfitzmann. Sulle curve diventa ECDLP. Gli attacchi matematici alle curve (riduzione MOV con i pairing, curve anomale) sono in Crypto 12 §12.4. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.7, NOTA 3.7.2, p. 27 del PDF); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.1); `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (§7.1.1); `magistrale/Crittografia/Slide/slides week 1-14/week12/Crypto12.pdf` (§12.4).

## Prerequisiti
- [[Curva ellittica]]: gruppo dei punti e multipli $kP$

## Porta a
- [[Cifratura ElGamal]]: la sicurezza poggia sull'ECDLP
- [[ECDSA]]: la chiave privata $d$ resta segreta perché l'ECDLP è difficile

## Collegati
- [[RSA]]: sicurezza basata su un altro problema difficile
- [[Gruppo ciclico]]: il logaritmo discreto è l'inverso di $k\mapsto g^k$ (Crittografia)
- [[Scambio di chiavi Diffie-Hellman]]: la sua sicurezza si riduce al DLP (Crittografia)
- [[Funzione one-way]]: l'esponenziale modulare è l'esempio tipico di one-way (Crittografia)
- Computer quantistico (non trattato nei corsi): minaccia per ECC citata a `03-Bitcoin.pdf` p. 133
