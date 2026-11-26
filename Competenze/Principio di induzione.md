---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Matematica discreta, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["mathematical induction", "induzione matematica", "induzione forte", "strong induction", "principio del buon ordinamento", "well-ordering principle", "assiomatica di Peano", "assiomi di Peano", "Peano axioms", "passo base", "passo induttivo", "ipotesi induttiva"]
tags: [competenza, area/algebra-geometria]
---

# Principio di induzione

> Per dimostrare una proprietà per ogni naturale basta verificarla per 1 e mostrare che passa da $n$ a $n+1$. È equivalente al principio del buon ordinamento.

## Definizione / enunciato
Notazioni: $\mathbb N=\{1,2,3,\dots\}$, $\mathbb N_0=\mathbb N\cup\{0\}$, $I_n=\{1,\dots,n\}$.

**Induzione (forma debole).** Sia $P(k)$ una proprietà dei naturali. Se
1. $P(1)$ è vera;
2. per ogni $n\ge1$, $P(n)$ vera implica $P(n+1)$ vera;

allora $P(k)$ è vera per ogni $k\in\mathbb N$.

Variante: si parte da $n_0$ e la tesi vale per ogni $k\ge n_0$.

**Induzione (forma forte).** Il punto 2 diventa: "$P(m)$ vera per ogni $m\le n$ implica $P(n+1)$ vera". Le due forme sono equivalenti.

**Prop. 9 (buon ordinamento).** Ogni sottoinsieme non vuoto $S\subseteq\mathbb N$ ha un primo elemento. Il principio di induzione implica il buon ordinamento, e viceversa (pp. 9-10).

## Formule chiave
$$\big[P(1)\ \wedge\ \forall n\,(P(n)\Rightarrow P(n+1))\big]\ \Longrightarrow\ \forall k\in\mathbb N\ P(k)$$
$$\textstyle\sum_{i=1}^n i=\frac{n(n+1)}2,\qquad (a+b)^n=\sum_{i=0}^n\binom ni a^ib^{n-i}$$

## Intuizione
Come una fila di domino: il primo cade e ognuno fa cadere il successivo. La forma forte permette di appoggiarsi su tutti i casi precedenti, non solo sull'ultimo.

## Come si usa
Applicazioni nelle dispense:
- **somma dei primi $n$ naturali**: $\sum_{i=1}^{n+1}i=\frac{n(n+1)}2+(n+1)=\frac{(n+2)(n+1)}2$;
- **binomio di Newton**, usando $\binom n{i-1}+\binom ni=\binom{n+1}i$; da qui $|\mathcal P(I_n)|=\sum_i\binom ni=2^n$;
- $I_n\approx I_m\iff n=m$, e la distributività generalizzata;
- **forma forte**: ogni $n\ge2$ è prodotto di primi, perché se $n+1=ab$ non è primo si applica l'ipotesi ad $a$ e $b$;
- il **buon ordinamento** sostituisce l'induzione nella divisione euclidea, nella formula di Bézout ($d=\min S$) e nei sottogruppi di $\mathbb Z$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 3, sui numeri naturali con assiomatica di Peano. Fonti: `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, pp. 2-10; copertina sbiadita).
- **Matematica discreta** (triennale): qui $\mathbb N=\{0,1,2,\dots\}$. La lezione 2 lo enuncia prima con gli insiemi e poi con un **predicato** $P(n)$ con base $n_0$: (a) $P(n_0)$ vera; (b) per $n\ge n_0$, $P(n)\Rightarrow P(n+1)$; allora (c) $P(n)$ è vera per ogni $n\ge n_0$. Dimostra che **buon ordinamento ⇔ induzione** (per assurdo sul minimo dell'insieme dei controesempi) e che il buon ordinamento **non** vale in $\mathbb Z$. Con la **forma forte** dimostra che ogni $n\ge2$ è prodotto di primi, e che nel gioco con due mucchi di $n$ oggetti uguali il secondo giocatore ha una strategia vincente (rifà la mossa dell'avversario sull'altro mucchio). Distingue anche il ragionamento deduttivo da quello induttivo empirico. La lezione 3 presenta gli **assiomi di Peano**: la terna $(\mathbb N,0,\sigma)$ con $\sigma$ iniettiva e $0\notin\sigma(\mathbb N)$; il terzo assioma ($0\in S$ e $\sigma(S)\subseteq S\Rightarrow S=\mathbb N$) è esattamente l'induzione; la terna è unica a meno di isomorfismi. Nelle dispense l'induzione dimostra la Torre di Hanoi, la tassellazione con le L e il falso paradosso "tutti i cavalli hanno lo stesso colore". Fonti: `triennale/ANNO 1/Matematica discreta/teoria/02 - Principio di induzione.pdf` (pp. 1-12); `triennale/ANNO 1/Matematica discreta/teoria/03 -Insiemi equipotenti e cardinalitá.pdf` (pp. 1-2); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (cap. 4, Teor. 4.1.1 e 4.3.1).
- **Programmazione e calcolo scientifico** (triennale): strumento per la **correttezza degli algoritmi**. Gli invarianti di ciclo (BubbleSort, Fusione) si dimostrano con inizializzazione e mantenimento, cioè caso base e passo induttivo; la correttezza di MergeSort si dimostra per induzione (forte) sulla lunghezza dell'array: un array di un elemento è ordinato e, se MergeSort ordina correttamente ogni array di lunghezza minore di $n$, le due chiamate ricorsive e la Fusione corretta ordinano l'array di lunghezza $n$ ("l'induzione giustifica il salto di fede nella ricorsione"). Nei lucidi Crescenzi il numero di mosse $2^n-1$ della Torre di Hanoi è dimostrato per induzione. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_mergesort.pdf` (p. 1-2); `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_bubblesort.pdf` (p. 2-3); `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 10).

## Prerequisiti

## Porta a
- [[Divisione euclidea]]: dimostrata con il buon ordinamento
- [[Teorema fondamentale dell'aritmetica]]: esistenza della fattorizzazione per induzione forte
- [[Insieme numerabile]]: costruzioni ricorsive di iniezioni da $\mathbb N$
- [[Successione definita per ricorrenza]]: l'induzione garantisce che la successione è definita per ogni $n$ (Matematica discreta)
- [[Torre di Hanoi]]: $2^n-1$ mosse bastano e sono necessarie, per induzione su $n$ (Matematica discreta)
- [[Albero (teoria dei grafi)]]: $|E|=|V|-1$ per induzione sul numero di nodi, togliendo una foglia (Matematica discreta)
- [[Potenze della matrice di adiacenza]]: $(A^k)_{ij}$ conta i percorsi, per induzione su $k$ (Matematica discreta)
- [[Monotonia delle successioni ricorsive]]: le disuguaglianze si propagano per induzione (Matematica discreta)

## Collegati
- [[Calcolo combinatorio]]: binomio di Newton e coefficienti binomiali dimostrati per induzione
