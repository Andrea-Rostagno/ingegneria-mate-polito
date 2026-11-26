---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [LSB oracle attack, RSA LSB oracle, parity oracle attack, oracolo del bit meno significativo, least significant bit oracle]
tags: [competenza, area/informatica]
---

# Attacco LSB oracle a RSA

> Attacco a RSA con testo cifrato scelto. Un oracolo che rivela solo il bit meno significativo del messaggio decifrato basta a ricavare l'intero $m$ con $\log_2 n$ richieste, dimezzando ogni volta l'intervallo che contiene $m$.

## Definizione / enunciato
**Oracolo** (`200528_03LPYOV_RSA_attacks_Python2.pdf` p. 4): riceve un cifrato $C$, lo decifra con la chiave privata $d$ e restituisce soltanto $m \bmod 2$.

**Attacco**, con $c=m^e\bmod n$ e $m<n$:
1. si invia $c'=2^ec=(2m)^e$;
2. se il bit restituito è 0, allora $2m<n$ e quindi $m\in[0,n/2]$, perché non c'è stata riduzione;
3. se è 1, $2m>n$: la riduzione dà $2m-n$, che è dispari perché $n$ è dispari, quindi $m\in[n/2,n]$;
4. si ripete con $4^ec,\,8^ec,\dots$ fino a $2^{e\cdot nbit}c$, dimezzando ogni volta l'intervallo.

## Formule chiave
$$c'=(2^e)^k\,c=(2^k m)^e \pmod n,\qquad \text{bit}=\big(2^k m \bmod n\big)\bmod 2$$
Il numero di richieste è $\log_2 n$ (`nbit`, la lunghezza in bit del modulo).

## Intuizione
La malleabilità moltiplicativa di RSA permette di "spostare a sinistra" $m$ senza conoscerlo. La parità del risultato dice se c'è stato un "overflow" oltre $n$, cioè in quale metà dell'intervallo cade $m$. È una ricerca binaria guidata da un bit.

## Come si usa
**Client d'esempio** (`AY2021/attacks/RSA/LSB_Oracle_Attack/LSB_Oracle_client.py`):
- parte dai limiti `lower_bound = 0` e `upper_bound = n`;
- a ogni iterazione calcola `m = (pow(2, e, n) * m) % n` e invia `m` al server;
- se il bit ricevuto è 1 alza il limite inferiore al punto medio, altrimenti abbassa quello superiore;
- dopo `n.bit_length()` passi stampa `lower_bound` come testo.

Le divisioni intere troncano. Per questo esiste una variante con la classe `Decimal` (`LSB_Oracle_client_Decimal.py`), richiamata anche nelle slide (p. 7).

**Contromisura:** non esporre informazioni parziali sulla decifratura e usare il padding. È lo stesso principio del CCA moltiplicativo $r^eC$.

## Nei corsi
- **Crittografia** (magistrale), laboratorio Python (Basile). Fonti:
  - `magistrale/Crittografia/Slide/presentations/presentations/200528_03LPYOV_RSA_attacks_Python2.pdf` (p. 4);
  - codice: `magistrale/Crittografia/Repository GitHub/cryptography-03lpyov-exercises/AY2021/attacks/RSA/LSB_Oracle_Attack/LSB_Oracle_client.py`.

## Prerequisiti
- [[RSA]]: lo schema attaccato e la sua malleabilità
- [[Modelli di attacco crittografico]]: è un attacco adattivo a testo cifrato scelto (CCA)

## Porta a
- Nessuno.

## Collegati
- [[RSA con padding]]: stesso principio del CCA moltiplicativo $r^eC$
- [[Attacco padding oracle]]: analogo simmetrico, con un oracolo che rivela un solo bit di informazione
- [[Attacco di Håstad]]: altro attacco a RSA della stessa serie
