---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["fundamental theorem of arithmetic", "fattorizzazione unica in primi", "unique prime factorization", "lemma di Euclide", "Euclid's lemma", "infinità dei numeri primi", "infinitely many primes", "numero primo", "prime number"]
tags: [competenza, area/algebra-geometria]
---

# Teorema fondamentale dell'aritmetica

> Ogni intero diverso da $0$ e $\pm1$ è un prodotto di primi, in modo unico a meno dell'ordine e del segno. L'unicità poggia sul lemma di Euclide.

## Definizione / enunciato
**Lemma 5 (lemma di Euclide).** Se $n\mid ab$ e $\mathrm{MCD}(a,n)=1$, allora $n\mid b$.

**Cor. 6.** Se $p$ è primo e $p\mid ab$, allora $p\mid a$ oppure $p\mid b$.

**Esercizio (p. 10).** Vale anche il viceversa: se $p\neq0,\pm1$ e $p\mid ab\Rightarrow p\mid a$ o $p\mid b$ per ogni $a,b$, allora $p$ è primo.

**Teorema 7.** Sia $z\in\mathbb Z$, $z\neq0,\pm1$. Allora esistono primi $p_1,\dots,p_n$ con $z=p_1\cdots p_n$, e la fattorizzazione è unica a meno del segno dei primi e del loro ordine.

**Teorema 8.** I numeri primi positivi sono infiniti.

## Formule chiave
$$1=\alpha a+\beta n\ \Rightarrow\ b=\alpha ab+\beta bn\quad(\text{entrambi multipli di }n)$$

## Intuizione
- **Esistenza:** per induzione forte. Se $n+1$ non è primo, $n+1=ab$ con $a,b$ più piccoli, già fattorizzati.
- **Unicità:** un primo che divide un prodotto ne divide un fattore, quindi i primi delle due fattorizzazioni si possono cancellare a coppie.
- **Infinità dei primi:** se i primi fossero solo $p_1,\dots,p_n$, il numero $\prod p_i+1$ non sarebbe divisibile per nessuno di loro.

## Come si usa
- **Ipotesi necessaria nel lemma di Euclide:** $4\mid2\cdot6=12$, ma $4\nmid6$ perché $\mathrm{MCD}(2,4)\neq1$.
- **Ideali di $\mathbb Z$:** $(n)$ è primo $\iff n$ è primo.
- **Polinomi:** l'analogo in $K[x]$ è la fattorizzazione unica in polinomi irriducibili, dimostrata allo stesso modo.
- **Lemma di Gauss:** il MCD dei coefficienti di un polinomio intero si "raccoglie" come contenuto.

## Nei corsi
- **Istituzioni algebra** (triennale): esistenza e infinità dei primi nella lezione 3, enunciato completo e lemma di Euclide nelle lezioni 25-26. Fonti: `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, pp. 7-8, 13); `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 3, 9-11).

## Prerequisiti
- [[Principio di induzione]]: esistenza per induzione forte
- [[Identità di Bézout]]: dimostrazione del lemma di Euclide

## Porta a
- [[Lemma di Gauss sui polinomi]]: MCD dei coefficienti e polinomi primitivi

## Collegati
- [[Ideali primi e massimali]]: gli ideali primi di $\mathbb Z$ sono $(0)$ e $(p)$
- [[Polinomio irriducibile]]: fattorizzazione unica in $K[x]$, stessa struttura
