---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [hybrid encryption, KEM/DEM, paradigma KEM/DEM, key-encapsulation mechanism, KEM, data-encapsulation mechanism, DEM, Pretty Good Privacy, PGP, PKC ⇒ PKDS]
tags: [competenza, area/informatica]
---

# Cifratura ibrida

> Schema che usa la crittografia a chiave pubblica solo per trasportare una chiave di sessione $k$, e cifra il messaggio con un cifrario simmetrico veloce. Il KEM/DEM ne è la formalizzazione moderna, il PGP l'esempio storico.

## Definizione / enunciato
**Protocollo PKC ⇒ PKDS** (`Critto_week1.pdf` §1.3.2, p. 16):
1. ognuno genera la propria coppia $(sk,pk)$ e pubblica $pk$;
2. uno dei due genera $k=\mathrm{Gen}_{Sim}$ e invia $C=\mathrm{Enc}_{p_B}(k)$;
3. l'altro recupera $k=\mathrm{Dec}_{k_B}(C)$.

**PGP** (`Critto8.pdf` p. 36): il mittente cifra la chiave di sessione con la chiave pubblica del ricevente e il messaggio con il sistema simmetrico, poi invia entrambi. Il ricevente decifra la chiave con la propria chiave privata e con essa il messaggio. Nel PGP di Zimmermann (1991) il PKC è RSA e il cifrario simmetrico è IDEA (`Critto_week1.pdf` p. 16).

**KEM** (`Crypto9.pdf` §9.3.1, p. 14) è una terna $(\mathrm{Gen},\mathrm{Encaps},\mathrm{Decaps})$:
- $\mathrm{Gen}(1^n)$ produce $(pk,sk)$, ciascuna di almeno $n$ bit;
- $\mathrm{Encaps}_{pk}(1^n)$ produce un cifrato $c$ e una chiave $k\in\{0,1\}^{l(n)}$;
- $\mathrm{Decaps}_{sk}(c)$ restituisce $k$, oppure $\perp$ in caso di fallimento.

Il DEM cifra poi il messaggio con $k$ in modo simmetrico.

## Formule chiave
$$(c,k)\leftarrow\mathrm{Encaps}_{pk}(1^n),\qquad k=\mathrm{Decaps}_{sk}(c),\qquad \text{invio: } \big(c,\ \mathrm{Enc}^{Sim}_k(m)\big)$$

## Intuizione
I cifrari a chiave pubblica sono lenti e cifrano solo blocchi piccoli. I cifrari simmetrici sono veloci ma richiedono una chiave condivisa. Il metodo ibrido prende il meglio dei due.

Il KEM fa "in un colpo solo" generazione e trasporto della chiave. Questo è vantaggioso sia concettualmente sia in efficienza (`Crypto9.pdf` p. 13).

## Come si usa
Il ricevente usa la propria chiave privata di lungo periodo (asimmetrica) per ricavare $k$, poi decifra il messaggio con $k$ (`Crypto9.pdf` p. 13). Una chiave ottenuta con uno scambio Diffie-Hellman può svolgere lo stesso ruolo, ad esempio $k=\mathrm{Hash}(k_{AB})$ come nelle varianti DLIES (`Critto_week7.pdf` p. 2).

## Nei corsi
- **Crittografia** (magistrale): compare come PGP nella lezione introduttiva e nelle slide di Bazzanella, e come paradigma KEM/DEM in Crypto 9. Fonti:
  - `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (§1.3, pp. 15-16);
  - `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.3, pp. 13-14);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (p. 36).

## Prerequisiti
- [[Crittografia a chiave pubblica]]: trasporta la chiave di sessione
- [[Schema di cifratura simmetrica]]: cifra i dati (DEM)

## Porta a
- [[Key Distribution Center]]: altra soluzione al problema della distribuzione delle chiavi

## Collegati
- [[RSA]]: il PKC usato in PGP
- [[RSA con padding]]: RSA in pratica cifra solo chiavi di sessione
- [[Scambio di chiavi Diffie-Hellman]]: alternativa per ottenere $k$
