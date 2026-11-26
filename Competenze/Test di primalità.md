---
tipo: competenza
area: algebra-geometria
corsi: [Crittografia]
livello: [magistrale]
aliases: ["primality test", "test di Rabin-Miller", "test di Miller-Rabin", "Miller-Rabin test", "Rabin-Miller test", "test di Fermat", "Fermat primality test", "numeri pseudoprimi", "pseudoprime", "criterio di Lucas", "generazione di numeri primi grandi", "teorema dei numeri primi", "prime number theorem"]
tags: [competenza, area/algebra-geometria]
---

# Test di primalità

> Un test di primalità decide se un intero grande $n$ è primo senza fattorizzarlo. I test probabilistici, come Rabin-Miller, sono veloci e sbagliano con probabilità trascurabile. Servono a generare i primi di RSA, DH ed ElGamal.

## Definizione / enunciato
**Idea di Fermat.** Se $p$ è primo, $r^p\equiv r\pmod p$ per ogni intero $r$ (`Crypto6.pdf` p. 14). Se per qualche $a$ si ha $a^{n-1}\not\equiv1\pmod n$, allora $n$ è certamente composto. Il viceversa non vale: un composto che supera il test si comporta come un primo, e la dispensa lo tratta sotto il titolo "Prime and pseudoprime numbers".

**Rabin-Miller: punto di partenza.** Sia $n$ dispari e $n-1=2^s d$ con $d$ dispari. Se $n$ è primo e $a\not\equiv0\pmod n$, allora vale una delle due:
$$a^d\equiv1\pmod n\qquad\text{oppure}\qquad a^{2^r d}\equiv-1\pmod n\ \text{per qualche }0\le r\le s-1.$$
Ogni $a$ che viola entrambe è un testimone che $n$ è composto.

**Test probabilistico** (nota 6.5.3). Con $k$ basi casuali:
- il tempo è $O(k\log^3 n)$;
- la probabilità di dichiarare primo un numero composto è al più $4^{-k}$ [Rabin77, Teorema 2].

**Criterio di Lucas** (`Critto_week3.pdf` p. 28). $N$ è primo se e solo se esiste $g$ con $g^{N-1}\equiv1\pmod N$ e $g^d\not\equiv1$ per ogni altro divisore $d$ di $N-1$. Cioè $\mathbb Z_N^*$ è ciclico di ordine $N-1$.

## Formule chiave
$$n-1=2^s d;\qquad P(\text{errore})\le4^{-k};\qquad \#\{p<N\}\approx\frac{N}{\log N}$$

## Intuizione
Se $p$ è primo, in $\mathbb Z_p$ le uniche radici quadrate di 1 sono $\pm1$. Partendo da $a^{n-1}\equiv1$ ed estraendo radici quadrate successive, cioè scendendo lungo $a^{2^r d}$, si deve trovare $1$ fino in fondo oppure un $-1$. Un modulo composto ha altre radici di 1, e il test le scopre.

## Come si usa
**Generare un primo di $n$ bit** (`Crypto6.pdf` p. 16):
1. si estrae $X$ a caso in $[2^{n-1},2^n-1]$ e lo si testa, ripetendo finché il test non risponde "primo";
2. per il teorema dei numeri primi l'intervallo contiene circa $2^{n-1}/n$ primi, quindi un numero a caso è primo con probabilità circa $1/n$;
3. dopo $t=\alpha n$ tentativi la probabilità di fallire è $(1-\frac1n)^{\alpha n}\approx e^{-\alpha}$;
4. con $n=1000$ e $t=3000$ si ha $e^{-3}\approx0.05$.

## Nei corsi
- **Crittografia** (magistrale): §6.5 "Prime and pseudoprime numbers" delle dispense inglesi (test, criteri, certificati, generazione di primi grandi) e nota 3.7.4 delle italiane (Lucas, Wilson debole). Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (pp. 14-16); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, p. 28).

## Prerequisiti
- [[Piccolo teorema di Fermat]]: base del test di Fermat
- [[Esponenziazione modulare veloce]]: calcolo di $a^d \bmod n$
- [[Classi di resto modulo n]]: si lavora in $\mathbb Z_n$

## Porta a
- [[RSA]]: generazione dei primi $p,q$

## Collegati
- [[Gruppo ciclico]]: Lucas, cioè $\mathbb Z_N^*$ ciclico di ordine $N-1$
- [[Teorema fondamentale dell'aritmetica]]: numeri primi
- [[Funzione phi di Eulero]]: $\varphi(N)=N-1$ se e solo se $N$ è primo
- [[Fattorizzazione di Fermat]]: problema diverso, cioè trovare i fattori, non solo decidere
