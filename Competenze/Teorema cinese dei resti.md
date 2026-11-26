---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia]
livello: [triennale, magistrale]
aliases: ["Chinese remainder theorem", "CRT", "sistema di congruenze", "system of congruences", "teorema cinese dei resti per polinomi", "congruenza modulo un polinomio"]
tags: [competenza, area/algebra-geometria]
---

# Teorema cinese dei resti

> Un sistema di congruenze con moduli a due a due coprimi ha sempre soluzione, unica modulo il prodotto dei moduli. Vale per gli interi e per i polinomi, dove contiene l'interpolazione.

## Definizione / enunciato
**Teorema 12 (forma astratta).** Siano $m_1,\dots,m_s\in\mathbb N$ a due a due coprimi e $n=m_1\cdots m_s$. Allora
$$\Gamma:\mathbb Z_n\to\mathbb Z_{m_1}\times\cdots\times\mathbb Z_{m_s},\qquad [a]_n\mapsto([a]_{m_1},\dots,[a]_{m_s})$$
è biiettiva.

**Teorema 13.** Se $m_1,m_2\ge1$ sono coprimi, per ogni $a,b\in\mathbb Z$ il sistema $x\equiv a\pmod{m_1}$, $x\equiv b\pmod{m_2}$ ha soluzione.

**Formula esplicita.** Se $1=\alpha m_1+\beta m_2$ (Bézout), allora
$$c=a\beta m_2+b\alpha m_1$$
è una soluzione, e tutte le soluzioni sono $c+\lambda m_1m_2$ con $\lambda\in\mathbb Z$.

**Versione per polinomi (lezione 30).** Siano $a_1,\dots,a_n\in K[x]$ arbitrari e $m_1,\dots,m_n$ a due a due coprimi. Esiste un unico $f\in K[x]$ con $f\equiv a_i\pmod{m_i}$ per ogni $i$ e $\deg f<\deg(m_1\cdots m_n)$.

**Cor. 16.** Dati $n_0,\dots,n_d\in K$ distinti e $s_0,\dots,s_d\in K$, esiste un unico $q\in K[x]$ di grado $\le d$ con $q(n_i)=s_i$.

## Formule chiave
$$c=a\beta m_2+b\alpha m_1\quad(1=\alpha m_1+\beta m_2),\qquad f=\sum_i a_i\beta_i\ell_i,\ \ \ell_i=\prod_{j\neq i}m_j$$

## Intuizione
$\Gamma$ è iniettiva: se $m_i\mid a-b$ per ogni $i$ e i moduli sono coprimi, allora $n\mid a-b$. È suriettiva perché i due insiemi finiti hanno entrambi $n$ elementi. Sui polinomi, $f\equiv s\pmod{x-a}$ significa $f(a)=s$ (Ruffini), quindi il teorema cinese con i moduli $x-n_i$ è l'interpolazione.

## Come si usa
**Esempio delle dispense (pp. 16-17):** $x\equiv4\pmod5$, $x\equiv3\pmod9$.
1. Da $2\cdot5+(-1)\cdot9=1$ si ha $\alpha=2$, $\beta=-1$.
2. $c=4\cdot(-1)\cdot9+3\cdot2\cdot5=-6$.
3. Tutte le soluzioni sono $-6+45\lambda$.

**Moduli non coprimi:** $\Gamma:\mathbb Z_{24}\to\mathbb Z_4\times\mathbb Z_6$ non è iniettiva, perché $[12]_{24}\mapsto([0]_4,[0]_6)$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 25-26 per gli interi, 30 per i polinomi. Fonti: `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 13-17); `triennale/ANNO 2/istituzioni/Alg-12-12-22.pdf` (lezione 30, pp. 2-6; p. 3 molto degradata).
- **Crittografia** (magistrale): visto come isomorfismo di anelli $\mathbb Z_a\times\mathbb Z_b\simeq\mathbb Z_{ab}$ per $a,b$ coprimi, cioè $(p,q)\mapsto x$ (doppia congruenza di Sunzi). Risolverlo equivale all'equazione $au-bv=q-p$. Lo scopo è **divide et impera**: $x^k\equiv C\pmod{ab}$ si spezza in $y^k\equiv p\pmod a$ e $z^k\equiv q\pmod b$. Esempio inglese: $\mathbb Z_{24}\simeq\mathbb Z_3\times\mathbb Z_8$, e $13\times18\equiv(1,5)\times(0,2)=(0,2)$, quindi $13\times18\equiv18\pmod{24}$. Dal teorema segue che $\varphi$ è moltiplicativa. In crittografia lo usano la decifratura veloce di RSA, il crittosistema di Rabin e l'attacco di Håstad. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 NOTA 3.3.6, p. 6 del PDF; §3.7, p. 26); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.4, pp. 11-13).

## Prerequisiti
- [[Classi di resto modulo n]]: congruenze e $\mathbb Z_n$
- [[Identità di Bézout]]: coefficienti per la soluzione esplicita
- [[Algoritmo di Euclide]]: calcolo dei coefficienti
- [[Divisione tra polinomi]]: riduzione del grado nella versione polinomiale

## Porta a
- [[Funzione phi di Eulero]]: $\varphi(mn)=\varphi(m)\varphi(n)$ per $m,n$ coprimi (Crittografia)
- [[Residui quadratici]]: radici modulo $pq$ dalle radici modulo $p$ e $q$ (Crittografia)
- [[Attacco di Håstad]]: ricostruisce $m^e$ da $e$ cifrati con moduli diversi (Crittografia)

## Collegati
- [[Interpolazione polinomiale]]: esistenza e unicità del polinomio interpolante come Cor. 16
- [[Teorema di Ruffini]]: $f\equiv s\pmod{x-a}\iff f(a)=s$
