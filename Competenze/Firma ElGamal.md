---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["ElGamal signature", "firma digitale ElGamal", "ElGamal digital signature", "schema di firma di ElGamal"]
tags: [competenza, area/informatica]
---

# Firma ElGamal

> È lo schema di firma basato sul logaritmo discreto in $\mathbb Z_p^*$. La firma $(u,v)$ si ottiene risolvendo una congruenza lineare modulo $p-1$, e la verifica controlla che $(g^x)^u u^v\equiv g^M$. È il capostipite di DSA, Schnorr ed ECDSA.

## Definizione / enunciato
Parametri pubblici: un primo grande $p$ e un generatore $g$ di $\mathbb Z_p^*$. A ha chiave privata $x\in\mathbb Z_{p-1}$ e chiave pubblica $g^x$ (`Critto10.pdf` p. 14).

**Firma** del messaggio $M$ (p. 16):
1. sceglie a caso $h$ con $(h,p-1)=1$ e calcola $u=g^h \bmod p$;
2. con l'algoritmo di Euclide calcola $v$, soluzione di
$$M\equiv xu+hv \pmod{p-1};$$
3. la firma è $(u,v)$, inviata insieme al messaggio (eventualmente cifrato con ElGamal, $(g^k,Mb^k)$).

**Verifica:** il ricevente calcola $(g^x)^u u^v$ e controlla che sia uguale a $g^M \bmod p$.

## Formule chiave
$$(g^x)^u\,u^v=(g^x)^u(g^h)^v=g^{xu+hv}=g^M \pmod p$$

## Intuizione
Solo chi conosce $x$ può risolvere $M\equiv xu+hv$: occorre $v=h^{-1}(M-xu) \bmod (p-1)$, e l'inverso esiste perché $(h,p-1)=1$. Il verificatore usa solo quantità pubbliche, e l'uguaglianza degli esponenti modulo $p-1$ basta per il piccolo teorema di Fermat.

Il valore casuale $h$ è una chiave effimera e deve cambiare a ogni firma. Il riuso del nonce rivela la chiave privata anche nelle varianti Schnorr, DSA ed ECDSA (`Crypto12.pdf` §12.5.1; appunti 2021 su Schnorr §1.2.7).

## Come si usa
È poco usata in pratica: firme lunghe e calcolo pesante. Ne deriva DSA, che lavora in un sottogruppo di ordine primo $q$ con firme più corte (`Critto10.pdf` p. 17).

Un tipico esercizio d'esame chiede di calcolare $v$ con l'inverso modulo $p-1$ e di verificare la firma con l'esponenziazione modulare.

## Nei corsi
- **Crittografia** (magistrale): protocolli di base di Bazzanella, dopo il richiamo del cifrario ElGamal. Fonti:
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (pp. 14-17).

## Prerequisiti
- [[Cifratura ElGamal]]: stesse chiavi $x$ e $g^x$
- [[Problema del logaritmo discreto]]: la sicurezza poggia sulla difficoltà di ricavare $x$
- [[Algoritmo di Euclide]]: inverso di $h$ modulo $p-1$

## Porta a
- [[DSA]]: variante standardizzata con firme più corte
- [[Firma di Schnorr]]: variante con hash di $(r\|M)$

## Collegati
- [[Firma digitale]]: istanza dello schema generale
- [[Firma RSA]]: alternativa basata sulla fattorizzazione
- [[Piccolo teorema di Fermat]]: esponenti ridotti modulo $p-1$
