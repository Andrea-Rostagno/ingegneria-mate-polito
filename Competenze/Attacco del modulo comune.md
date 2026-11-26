---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [common modulus attack, attacco common modulus, RSA con modulo condiviso, stesso N per più utenti]
tags: [competenza, area/informatica]
---

# Attacco del modulo comune

> Se lo stesso messaggio è cifrato con RSA usando lo stesso modulo $n$ e due esponenti pubblici coprimi, un attaccante passivo lo recupera con la sola identità di Bézout, senza fattorizzare.

## Definizione / enunciato
**Ipotesi** (`200521_03LPYOV_RSA_attacks_Python.pdf` p. 9):
- due chiavi pubbliche $k_1=(e_1,n)$ e $k_2=(e_2,n)$ con lo stesso modulo;
- $\gcd(e_1,e_2)=1$;
- lo stesso $m$ cifrato con entrambe: $c_1=m^{e_1}\bmod n$ e $c_2=m^{e_2}\bmod n$.

Nella slide la seconda cifratura è stampata come $c_2=m^{e_1}$: è un refuso per $m^{e_2}$.

**Attacco:** con l'algoritmo di Euclide esteso si trovano $u,v$ tali che $e_1u+e_2v=\gcd(e_1,e_2)=1$.

## Formule chiave
$$c_1^{\,u}\,c_2^{\,v}=m^{e_1u+e_2v}=m\pmod n$$

Uno dei due coefficienti è negativo. La potenza corrispondente si calcola con l'inverso di $c_i$ modulo $n$ (nel codice, `pow` con esponente negativo).

## Intuizione
Lo stesso $n$ per più utenti condivide di fatto la fattorizzazione. Anche senza conoscerla, gli esponenti pubblici si combinano linearmente all'esponente: con $\gcd=1$ si ricostruisce $m^1$.

## Come si usa
**Esercizio delle dispense** (`Crypto9.pdf` Exercise 9.2.12, p. 10): un'azienda assegna a tutti i dipendenti lo stesso $N$ con esponenti diversi $(N,e_i)$. Ci sono due falle:
1. un dipendente, con la propria coppia $(e_i,d_i)$, può decifrare le email dei colleghi;
2. un intercettatore che vede lo stesso $m$ cifrato con $(N,e_i)$ e $(N,e_j)$ lo recupera con questo attacco.

**Codice d'esempio** (`AY2021/attacks/RSA/common_modulus.py`):
- $n$ prodotto di due primi da 1024 bit, $e_1=65537$ ed $e_2=17$;
- `egcd(e1,e2)` restituisce $u,v$;
- si decifra con `pow(c1,u,n)*pow(c2,v,n) % n`.

## Nei corsi
- **Crittografia** (magistrale): esercizio teorico di Di Scala e attacco in Python di Basile. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (Exercise 9.2.12, p. 10);
  - `magistrale/Crittografia/Slide/presentations/presentations/200521_03LPYOV_RSA_attacks_Python.pdf` (pp. 3-4, 9);
  - codice: `magistrale/Crittografia/Repository GitHub/cryptography-03lpyov-exercises/AY2021/attacks/RSA/common_modulus.py`.

## Prerequisiti
- [[RSA]]: lo schema attaccato
- [[Identità di Bézout]]: fornisce $e_1u+e_2v=1$
- [[Algoritmo di Euclide]]: la versione estesa calcola $u$ e $v$

## Porta a
- Nessuno.

## Collegati
- [[Attacco di Håstad]]: stesso $e$ e moduli diversi, invece di stesso $n$ ed esponenti diversi
- [[Fattorizzazione di Fermat]]: altro attacco alla generazione delle chiavi
- [[Classi di resto modulo n]]: inversi e potenze negative in $\mathbb Z_n^*$
