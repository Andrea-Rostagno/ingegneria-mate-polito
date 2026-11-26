---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia]
livello: [triennale, magistrale]
aliases: ["Bézout's identity", "formula di Bezout", "identità di Bezout", "massimo comun divisore", "MCD", "greatest common divisor", "gcd", "numeri coprimi", "coprime integers", "primi tra loro", "divisibilità"]
tags: [competenza, area/algebra-geometria]
---

# Identità di Bézout

> Il massimo comun divisore di due interi si scrive come loro combinazione intera, $d=\alpha a+\beta b$. Ne seguono il criterio di coprimalità, il lemma di Euclide e la risolubilità delle congruenze.

## Definizione / enunciato
**Def. 1 (divisibilità).** $a\mid b$ se esiste $c$ con $b=ac$. Un intero $\neq0,\pm1$ senza divisori propri (cioè diversi da $\pm1$ e $\pm b$) è **primo**.

**Def. 2 (MCD).** $d$ è un **massimo comun divisore** di $a$ e $b$ se:
1. $d\mid a$ e $d\mid b$;
2. per ogni $x$, se $x\mid a$ e $x\mid b$ allora $x\mid d$.

Se $\mathrm{MCD}=\pm1$, $a$ e $b$ sono **coprimi**. In $\mathbb Z$ il MCD è definito a meno del segno.

**Teorema 3 (formula di Bézout).** Siano $a,b\in\mathbb Z$ non entrambi nulli.
1. Il minimo intero $d>0$ della forma $d=\alpha a+\beta b$ con $\alpha,\beta\in\mathbb Z$ è un MCD di $a$ e $b$.
2. Esistono esattamente due MCD, $d$ e $-d$.

**Criterio.** $a$ e $b$ sono coprimi $\iff$ esistono $\alpha,\beta$ con $\alpha a+\beta b=1$.

**Cor. (in termini di ideali):** in $\mathbb Z$, $(a)+(b)=(a,b)=(\mathrm{MCD}(a,b))$ e $(a)\cap(b)=(\mathrm{mcm}(a,b))$.

## Formule chiave
$$\mathrm{MCD}(a,b)=\min\{s>0\mid s=\alpha a+\beta b,\ \alpha,\beta\in\mathbb Z\},\qquad a\mathbb Z+b\mathbb Z=\mathrm{MCD}(a,b)\,\mathbb Z$$

## Intuizione
L'insieme delle combinazioni $\alpha a+\beta b$ è un ideale di $\mathbb Z$, quindi è fatto dai multipli del suo minimo positivo $d$. Contiene $a$ e $b$, quindi $d$ li divide. Ogni divisore comune divide $\alpha a+\beta b=d$.

## Come si usa
Dimostrazione (pp. 4-5):
1. $S=\{s\in\mathbb N\mid s=\alpha a+\beta b\}$ è non vuoto, perché contiene $a^2+b^2$.
2. Sia $d=\min S$, che esiste per il buon ordinamento.
3. Si divide: $a=qd+r$, quindi $r=(1-q\alpha)a-q\beta b\in S\cup\{0\}$ con $r<d$, cioè $r=0$.

Applicazioni:
- inverso in $\mathbb Z_n$: $\bar a$ è invertibile $\iff\mathrm{MCD}(a,n)=1$;
- lemma di Euclide;
- teorema cinese dei resti, in forma costruttiva;
- vale identica in $K[x]$: $d=\alpha f+\beta g$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 25-26, "Gli anelli $\mathbb Z$ e $\mathbb Z_n$". Fonti: `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 3-6, 12); `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, p. 12, Bézout per polinomi).
- **Crittografia** (magistrale): il punto di partenza è l'equazione diofantea $ax+Ny+b=0$, equivalente a $ax+b\equiv0\pmod N$ (eq. (1) di Critto 3). Se $\mathrm{MCD}(a,N)=1$ la soluzione $x\in\mathbb Z_N$ esiste ed è unica. Se $\mathrm{MCD}(a,N)=d>1$ esiste solo se $d\mid b$, e allora le soluzioni sono $x=x_p+x_o$, con $x_o$ soluzione dell'omogenea $ax\equiv0$. Esempio di lezione: $\mathrm{MCD}(29,45)=1=14\cdot29+(-9)\cdot45$, quindi $29^{-1}\equiv14\pmod{45}$. Serve per gli inversi di RSA, del cifrario affine e in $GF(2^8)$. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.3, pp. 4-5 del PDF); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.2, p. 6).

## Prerequisiti
- [[Divisione euclidea]]: il resto mostra che $d\mid a$
- [[Ideale]]: le combinazioni $\alpha a+\beta b$ formano l'ideale $(a)+(b)$

## Porta a
- [[Algoritmo di Euclide]]: calcolo effettivo di MCD e coefficienti
- [[Teorema fondamentale dell'aritmetica]]: il lemma di Euclide si dimostra con Bézout
- [[Equazione diofantea lineare]]: $ax+by=n$ è risolubile se e solo se $\mathrm{MCD}\mid n$
- [[Teorema cinese dei resti]]: soluzione esplicita $c=a\beta m_2+b\alpha m_1$
- [[Piccolo teorema di Fermat]]: invertibilità in $\mathbb Z_n$
- [[Polinomio irriducibile]]: Bézout in $K[x]$
- [[Cifrario affine]]: serve l'inverso della chiave moltiplicativa (Crittografia)

## Collegati
