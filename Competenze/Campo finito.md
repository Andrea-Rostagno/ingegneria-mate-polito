---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: ["finite field", "campo di Galois", "Galois field", "GF(p^n)", "F_q", "automorfismo di Frobenius", "Frobenius automorphism", "gruppo moltiplicativo di un campo finito", "GF(2^8)", "estensioni di Z2", "aritmetica dei byte"]
tags: [competenza, area/algebra-geometria]
---

# Campo finito

> Un campo con un numero finito di elementi ha caratteristica prima $p$ e $p^n$ elementi. Le sue radici sono quelle di $x^{p^n}-x$, e $a\mapsto a^p$ ne è un automorfismo.

## Definizione / enunciato
Sia $K$ un campo finito. La sua caratteristica è un primo $p$, e $K$ contiene una copia di $\mathbb Z_p$.

- **Prop. 18:** se $[K:\mathbb Z_p]=n$, allora $|K|=p^n$.
- **Prop. 19:** se $[K:\mathbb Z_p]=n$, gli elementi di $K$ sono tutte e sole le soluzioni di $x^{p^n}-x=0$.
- **Prop. 20:** il gruppo moltiplicativo di un campo finito è ciclico. La stampa è molto degradata e la dimostrazione non è leggibile (da verificare sul PDF).
- **Prop. 21 (Frobenius):** $f:K\to K$, $a\mapsto a^p$, è un automorfismo.
- **Cor. 22:** in un campo finito di caratteristica $p$ ogni elemento ha una radice $p$-esima.
- **Prop. 23:** ogni campo finito di caratteristica $p$ è un'estensione semplice di $\mathbb Z_p$.

## Formule chiave
$$|K|=p^{[K:\mathbb Z_p]},\qquad a^{p^n}=a\ \ \forall a\in K,\qquad (a+b)^p=a^p+b^p$$

## Intuizione
- **Prop. 18:** $K\cong(\mathbb Z_p)^n$ come spazio vettoriale.
- **Prop. 19:** $K^*$ ha $p^n-1$ elementi, quindi $a^{p^n-1}=1$ per Lagrange e $a^{p^n}=a$ per ogni $a$. Il polinomio $x^{p^n}-x$ ha al più $p^n$ radici, quindi sono esattamente gli elementi di $K$.
- **Frobenius:** rispetta somma e prodotto perché in caratteristica $p$ vale $(a+b)^p=a^p+b^p$. È iniettivo perché $K$ è un campo, e suriettivo perché $K$ è finito.

## Come si usa
- **Prop. 23:** si prende un generatore $\alpha$ di $K^*$ (Prop. 20) e il suo polinomio minimo $p$. Allora $\mathbb Z_p[x]/(p)\to K$, $\bar f\mapsto f(\alpha)$, è un morfismo di campi, quindi iniettivo, e i due campi hanno lo stesso numero di elementi. La p. 26 è letta solo in parte.
- **Su $\mathbb Z_p$:** Frobenius è l'identità, ed è il piccolo teorema di Fermat.
- **Costruire un campo finito:** si quozienta $\mathbb Z_p[x]$ per un irriducibile di grado $n$. Per esempio, $x^2+x+1$ è irriducibile su $\mathbb Z_2$ (lezioni 28-29), e $\mathbb Z_2[x]/(x^2+x+1)$ ha $2^2=4$ elementi; il conteggio è mio, ottenuto da Prop. 15 e Prop. 18.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 33/34, "Campi finiti". Fonti: `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 21-26; pp. 23 e 26 molto degradate).
- **Crittografia** (magistrale): §3.6 "Campi finiti. Estensioni di $\mathbb Z_2$". Ci sono tre ingredienti. **Teorema 3.6.6 (Galois):** a meno di isomorfismo esiste un unico campo con $p^k$ elementi, $GF(p^k)$. **Esempio:** $\mathbb Z_2[X]/(X^2+X+1)=\{0,1,a,b\}$ è il campo con 4 elementi. **Byte come elementi di $GF(2^8)$:** si moltiplicano come polinomi di grado $\le7$ modulo $P(X)=X^8+X^4+X^3+X+1$, irriducibile su $\mathbb Z_2$. L'inverso si calcola con Euclide esteso, con Kuttaka o invertendo la matrice della moltiplicazione (NOTA 3.6.2). La S-Box di AES è $S(a)=A\cdot a^{-1}+v$, inversione in $GF(2^8)$ seguita da una trasformazione affine. L'inversione la rende non lineare e porta la "confusione" di Shannon. Nell'algoritmo di Cipolla si usa Frobenius in $\mathbb Z_p(\alpha)$. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.6, pp. 17-21 del PDF).
- **Blockchain e criptoeconomia** (magistrale): le curve ellittiche crittografiche hanno coordinate in $\mathbb Z_p$ e l'equazione vale modulo $p$. Esempio delle slide: $y^2=x^3+5x+4$ su $\mathbb Z_{13}$ ha 17 punti. In Bitcoin si usa secp256k1, $y^2=x^3+7$ su $\mathbb Z_p$ con $p$ di 256 bit. Fonti: `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 25-27); `03-Bitcoin.pdf` (p. 19).

## Prerequisiti
- [[Caratteristica di un anello]]: caratteristica prima e sottocampo $\mathbb Z_p$
- [[Estensione di campi]]: $K$ è uno spazio vettoriale su $\mathbb Z_p$
- [[Estensione semplice]]: $K\simeq\mathbb Z_p[x]/(p)$
- [[Piccolo teorema di Fermat]]: $(a+b)^p=a^p+b^p$ e $a^p=a$ in $\mathbb Z_p$
- [[Gruppo ciclico]]: $K^*$ è ciclico
- [[Teorema di Lagrange sui gruppi]]: $a^{|K^*|}=1$

## Porta a
- [[AES]]: la S-Box è l'inversione in $GF(2^8)$ composta con una mappa affine (Crittografia)
- [[Residui quadratici]]: l'algoritmo di Cipolla calcola nell'estensione $\mathbb Z_p(\alpha)$ (Crittografia)
- [[Curva ellittica]]: curve definite su $\mathbb Z_p$ per ECC e Bitcoin (Blockchain e criptoeconomia)

## Collegati
- [[Campo (struttura algebrica)]]: i campi finiti sono i campi con un numero finito di elementi
