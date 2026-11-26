---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: ["integers modulo n", "Z_n", "Z/nZ", "congruenza modulo n", "congruence modulo n", "aritmetica modulare", "modular arithmetic", "Z_n^*", "elementi invertibili di Z_n"]
tags: [competenza, area/algebra-geometria]
---

# Classi di resto modulo n

> $\mathbb Z_n$ è l'insieme dei resti della divisione per $n$, con somma e prodotto "modulo $n$". È un anello commutativo con unità, ed è un campo se e solo se $n$ è primo.

## Definizione / enunciato
**Congruenza:** $a\equiv b\pmod n\iff n\mid a-b$. È una relazione d'equivalenza, e $a\equiv b$ se e solo se $a$ e $b$ hanno lo stesso resto nella divisione per $n$.

**Classi di resto:** $\mathbb Z_n=\mathbb Z/_{\equiv_n}=\{\bar0,\bar1,\dots,\overline{n-1}\}$, con $|\mathbb Z_n|=n$.

Le operazioni $\bar x+\bar y=\overline{x+y}$ e $\bar x\,\bar y=\overline{xy}$ sono ben definite (Prop. 5 della seconda parte di `Alg-30-11-22`):
$$a\equiv b,\ c\equiv d\pmod n\ \Rightarrow\ a+c\equiv b+d,\quad ac\equiv bd\pmod n.$$

Proprietà riassunte a p. 2 di `Alg-30-11-22`:
- $(\mathbb Z_n,+)$ è un gruppo ciclico;
- $(\mathbb Z_n,+,\cdot)$ è un anello commutativo con unità, di caratteristica $n$;
- **Prop. 3:** $\bar a$ è invertibile $\iff\mathrm{MCD}(a,n)=1$;
- **Cor. 4:** $\mathbb Z_p$ è un campo $\iff p$ è primo.

Gli elementi non nulli $\mathbb Z_p^*=\mathbb Z_p\setminus\{\bar0\}$ formano un gruppo con il prodotto se e solo se $p$ è primo (`Alg-05-10-22` p. 11). Il riepilogo a p. 2 di `Alg-30-11-22` scrive "$(\mathbb Z_n,\cdot)$ è un gruppo" e va letto così.

## Formule chiave
$$\bar a\in\mathbb Z_n\ \text{invertibile}\iff\mathrm{MCD}(a,n)=1;\qquad a\equiv r\ \Rightarrow\ a^k\equiv r^k\pmod n$$

## Intuizione
È l'aritmetica dell'orologio. $\mathbb Z_n$ non è un campo se $n=ab$ con $1<a,b<n$, perché $\bar a\bar b=\bar0$ e quindi ci sono divisori dello zero.

## Come si usa
Esempi delle dispense:
- **potenze:** da $2^5\equiv1\pmod{31}$ segue $2^{62}=(2^5)^{12}2^2\equiv4\pmod{31}$;
- **divisori dello zero:** in $\mathbb Z_{12}$, $\bar6\cdot\bar2=\bar6\cdot\bar4=\bar0$ ma $\bar2\neq\bar4$. In $\mathbb Z_6$ i divisori dello zero sono $\bar2,\bar3,\bar4$.
- **inverso:** si calcola con Bézout. Da $1=ba+cn$ segue $\bar a^{-1}=\bar b$.

## Nei corsi
- **Istituzioni algebra** (triennale): introdotta come quoziente nella lezione 1-2, poi come gruppo (lezioni 4-5) e come anello e campo (lezioni 17-18 e 25-26). Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 12-14); `triennale/ANNO 2/istituzioni/Alg-05-10-22.pdf` (lezioni 4-5, pp. 5, 11); `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 2, 15, 18-21).
- **Crittografia** (magistrale): le 26 lettere si codificano in $\mathbb Z_{26}$ ($a=0,b=1,\dots$). La tabula recta di Trithemius è la tavola della somma in $\mathbb Z_{26}$, e Cesare e Vigenère cifrano con una somma di vettori in $\mathbb Z_{26}^m$. Il gruppo delle unità si indica $U(\mathbb Z_n)$ o $\mathbb Z_n^\times$ e ha $\varphi(n)$ elementi. Attenzione alla notazione: la somma di due byte in $\mathbb Z_2^8$ si scrive $a\oplus b$ (xor) per non confonderla con la somma in $\mathbb Z_{2^8}$, che è usata da Salsa20. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.2 e §3.6-3.7, pp. 3, 17, 26 del PDF); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.2, pp. 6-8).
- **Blockchain e criptoeconomia** (magistrale): in RSA si sceglie $e\in\mathbb Z^*_{\varphi(N)}$ e si calcola $d$ con $e\cdot d\equiv1\pmod{\varphi(N)}$; si cifra con $M^e\bmod N$. Sulle curve ellittiche le coordinate stanno in $\mathbb Z_p$ (secp256k1: $p=2^{256}-2^{32}-2^9-2^8-2^7-2^6-2^4-1$). Fonti: `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 19, 25); `03-Bitcoin.pdf` (p. 19).

## Prerequisiti
- [[Relazione di equivalenza]]: $\mathbb Z_n$ è un insieme quoziente
- [[Divisione euclidea]]: le classi sono i resti
- [[Gruppo]]: $(\mathbb Z_n,+)$ e $\mathbb Z_p^*$ sono gruppi

## Porta a
- [[Teorema cinese dei resti]]: sistemi di congruenze
- [[Piccolo teorema di Fermat]]: potenze in $\mathbb Z_p$
- [[Lemma di Gauss sui polinomi]]: riduzione dei coefficienti modulo $p$
- [[Criterio di Eisenstein]]: si lavora in $\mathbb Z_p[x]$
- [[Funzione phi di Eulero]]: conta gli invertibili $|\mathbb Z_n^\times|=\varphi(n)$ (Crittografia)
- [[Cifrario di Cesare]]: cifra sommando una chiave in $\mathbb Z_{26}$ (Crittografia)
- [[Esponenziazione modulare veloce]]: calcolo di $a^n \bmod q$ (Crittografia)
- [[RSA]]: esponenti $e,d$ inversi in $\mathbb Z^*_{\varphi(N)}$ (Blockchain e criptoeconomia)

## Collegati
- [[Gruppo ciclico]]: ogni ciclico finito è isomorfo a $\mathbb Z_n$
- [[Sottogruppo normale e gruppo quoziente]]: $\mathbb Z_n=\mathbb Z/n\mathbb Z$
- [[Campo (struttura algebrica)]]: $\mathbb Z_p$ è il campo finito più semplice
- [[Dominio di integrità]]: $\mathbb Z_n$ è un dominio se e solo se $n$ è primo
- [[Anello quoziente]]: $\mathbb Z_n=\mathbb Z/n\mathbb Z$ come anello
