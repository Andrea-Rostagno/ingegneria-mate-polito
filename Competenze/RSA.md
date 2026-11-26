---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [Sistema RSA, RSA cryptosystem, Rivest-Shamir-Adleman, cifratura RSA]
tags: [competenza, area/informatica]
---

# RSA

> Primo sistema a chiave pubblica (Rivest, Shamir, Adleman, 1977): si cifra elevando alla $e$ modulo $N=pq$ e si decifra elevando alla $d$, inverso di $e$ modulo $\varphi(N)$.

## Definizione / enunciato
Ogni utente A, una volta:
- sceglie due primi grandi distinti $p,q$;
- calcola $N=pq$ e $\varphi(N)=(p-1)(q-1)=N-p-q+1$;
- sceglie $e\in\mathbb Z^*_{\varphi(N)}$ e calcola $d$ con $e\cdot d\equiv1\pmod{\varphi(N)}$;
- rende nota la **chiave pubblica** $(N,e)$ e tiene segreta la **chiave privata** $(\varphi(N),d)$.

## Formule chiave
$$C=f_A(M)=M^e\bmod N,\qquad M=f_A^{-1}(C)=C^d\bmod N.$$
La decifratura funziona grazie al teorema di Eulero e alla scelta $d\cdot e\equiv1\pmod{\varphi(N)}$.

## Intuizione
Chi conosce $\varphi(N)$, cioè la fattorizzazione di $N$, calcola facilmente $d$; chi conosce solo $(N,e)$ no. La dispensa dell'utente aggiunge che la sicurezza deriva dalla difficoltà di fattorizzare $N$ (la slide RSA non lo scrive).

## Come si usa
Chiunque voglia mandare $M$ ad A calcola $M^e \bmod N$; solo A può decifrare. RSA è stato per anni il sistema a chiave pubblica più usato, finché sono arrivate le curve ellittiche: le slide affermano che ECC con chiavi a 256 bit è più forte di RSA con chiavi a 4096 bit. Ogni sistema a chiave pubblica ha la sua firma digitale, quindi esiste anche la firma RSA; Hal Finney la usava per i token RPoW.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 18-21, p. 19 verificata sulla pagina renderizzata); dispensa §1.6.
- **Crittografia** (magistrale): "textbook RSA" in notazione $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$. Gen sceglie $p,q$ di $\lambda$ bit, $N=pq$, $e\in\mathbb Z^*_{\varphi(N)}$, $d=e^{-1}\bmod\varphi(N)$, con $pk=(N,e)$ e $sk=(\varphi(N),d)$. Si ha $C=m^e\bmod N$ e $m=C^d\bmod N$. Valori tipici di $e$: $3$, $17$ e $65537=2^{16}+1$; primi di 2048 bit. Da $x^2+(\varphi(N)-N-1)x+N=(x-p)(x-q)$ segue che conoscere $N$ e $\varphi(N)$ equivale a conoscere $p,q$. Che rompere RSA richieda di fattorizzare $N$ è una congettura. Attacchi citati: fattorizzazione (Pollard rho $O(n^{1/4})$, metodo delle curve ellittiche), Wiener per $d$ piccolo, side-channel, attacchi di protocollo legati alla malleabilità, da cui la necessità del padding. Il laboratorio di Basile li implementa in Python: Fermat, primo comune, modulo comune, $e$ basso e Håstad, LSB oracle. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.2.3, pp. 10-11); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (RSA, sicurezza e attacchi); `magistrale/Crittografia/Slide/presentations/presentations/200521_03LPYOV_RSA_attacks_Python.pdf`.

## Prerequisiti
- [[Crittografia a chiave pubblica]]: schema chiave pubblica e privata
- [[Classi di resto modulo n]]: aritmetica in $\mathbb Z_N$ e invertibili $\mathbb Z^*_{\varphi(N)}$

## Porta a
- [[Firma digitale]]: firma basata su RSA

## Collegati
- [[Curva ellittica]]: costruzione analoga sui punti di una curva, con chiavi più corte
- [[Problema del logaritmo discreto]]: problema difficile alternativo alla fattorizzazione
- [[Funzione phi di Eulero]]: teorema di Eulero $a^{\varphi(N)}\equiv1 \pmod N$, garantisce la decifratura
- [[RSA con padding]]: il textbook RSA è deterministico e malleabile (Crittografia)
- [[Fattorizzazione di Fermat]]: fattorizza $N$ se $p$ e $q$ sono vicini (Crittografia)
- [[Attacco di Håstad]]: stesso messaggio cifrato con $e=3$ e moduli diversi (Crittografia)
- [[Attacco del modulo comune]]: stesso $N$ con esponenti diversi (Crittografia)
- [[Attacco LSB oracle a RSA]]: un oracolo di parità decifra in $\log_2 N$ richieste (Crittografia)
- [[Firma RSA]]: firma ottenuta scambiando i ruoli di $e$ e $d$ (Crittografia)
