---
tipo: competenza
area: algebra-geometria
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Euler's totient function", "funzione totient", "totient", "phi di Eulero", "φ(n)", "teorema di Eulero", "Euler's theorem", "teorema generalizzato di Eulero"]
tags: [competenza, area/algebra-geometria]
---

# Funzione phi di Eulero

> $\varphi(N)$ conta gli interi in $\{1,\dots,N\}$ coprimi con $N$, cioè gli elementi invertibili di $\mathbb Z_N$. È l'ordine del gruppo che governa gli esponenti in RSA.

## Definizione / enunciato
$\varphi(N)=|\mathbb Z_N^*|=|\{m:1\le m\le N-1,\ \mathrm{MCD}(m,N)=1\}|$, cioè la cardinalità degli invertibili rispetto al prodotto (`Crypto6.pdf` p. 13; `Critto_week3.pdf` p. 26).

**Moltiplicatività.** Dal teorema cinese dei resti: se $m,n$ sono coprimi, $\varphi(mn)=\varphi(m)\varphi(n)$.

**Teorema di Eulero.** Se $m\in\mathbb Z_n^*$, allora $m^{\varphi(n)}\equiv1\pmod n$. Il piccolo teorema di Fermat è il caso $n=p$ primo.

**Teorema generalizzato di Eulero.** Se $n$ è *square free*, $m^{\varphi(n)+1}\equiv m\pmod n$ per ogni $m\in\mathbb Z_n$. Senza l'ipotesi è falso (`Critto_week3.pdf` p. 26, es. 3.7.1).

## Formule chiave
$$N=p^r q^s\cdots\ \Rightarrow\ \varphi(N)=\varphi(p^r)\,\varphi(q^s)\cdots,\qquad \varphi(p^r)=(p-1)\,p^{r-1}$$
$$m\in\mathbb Z_n^*\ \Rightarrow\ m^{\varphi(n)}\equiv1\pmod n$$

## Intuizione
Con il teorema cinese $\mathbb Z_N$ si "spezza" nel prodotto degli $\mathbb Z_{p^r}$, e un elemento è invertibile se e solo se lo è ogni componente. Per Lagrange l'ordine di ogni elemento divide $\varphi(n)$, e da qui viene il teorema di Eulero.

## Come si usa
- **Esempio della dispensa:** $\varphi(7^2)=7^2-7=7\cdot6=42$. Dai 49 numeri si tolgono i 7 multipli di 7 (`Crypto6.pdf` p. 13).
- **Ordine di un elemento:** in $\mathbb Z_{44}$, $\langle3\rangle=\{3,9,27,37,23,25,31,5,15,1\}$, quindi 3 ha ordine 10, che divide $\varphi(44)$ (`Crypto6.pdf` p. 5).
  - La dispensa scrive $\varphi(44)=\varphi(4)\varphi(11)=3\times10$. Con la formula sopra (calcolo mio) $\varphi(4)=2$ e $\varphi(44)=20$.
- **Radici $k$-esime:** con $N=pq$ e $k$ coprimo con $(p-1)(q-1)$, la soluzione di $x^k\equiv C\pmod{pq}$ è $x=C^d$, con $kd\equiv1\pmod{(p-1)(q-1)}$. È il meccanismo di RSA (`Critto_week3.pdf` p. 14).
- **Sicurezza:** per calcolare $\varphi(n)$ con la formula bisogna fattorizzare $n$ (`Crypto6.pdf`, nota 6.4.6). Viceversa, se $n=pq$, da $n$ e $\varphi(n)$ si ricavano $p$ e $q$ in modo efficiente (es. 3.7.1).

## Nei corsi
- **Crittografia** (magistrale): §6.4.1 delle dispense inglesi ("CRT and Euler's φ function") e §3.7 di quelle italiane, insieme ai teoremi di Eulero, Fermat e Wilson. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (pp. 5, 13); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, pp. 14, 26).

## Prerequisiti
- [[Classi di resto modulo n]]: $\varphi(n)$ è l'ordine di $\mathbb Z_n^*$
- [[Teorema cinese dei resti]]: dà la moltiplicatività
- [[Teorema di Lagrange sui gruppi]]: l'ordine di un elemento divide $\varphi(n)$

## Porta a
- [[RSA]]: $ed\equiv1\pmod{\varphi(n)}$
- [[Test di primalità]]: criteri basati su potenze modulari

## Collegati
- [[Piccolo teorema di Fermat]]: caso particolare $n=p$
- [[Ordine di un elemento]]: divide $\varphi(n)$
- [[Esponenziazione modulare veloce]]: calcolo di $m^{\varphi(n)}$ e delle potenze RSA
