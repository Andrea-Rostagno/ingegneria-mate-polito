---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI, Dinamiche su network]
livello: [magistrale, triennale]
aliases: ["stationary distribution", "pi = pi P", "matrici doppiamente stocastiche"]
tags: [competenza, area/probabilita]
---

# Distribuzione stazionaria di una DTMC

> Distribuzione $\pi$ invariante per la dinamica, $\pi=\pi P$: se la catena parte da $\pi$ vi resta per sempre.

## Definizione / enunciato
$\pi$ distribuzione su $S$ è **stazionaria** se
$$\pi=\pi P,\qquad\sum_{i\in S}\pi(i)=1,\qquad\text{cioè}\quad\pi(i)=\sum_j\pi(j)p(j,i).$$
$\pi$ è un autovettore sinistro di $P$ di autovalore 1. Se $X_0\sim\pi$, allora $X_n\sim\pi$ per ogni $n$.

**Lemma.** Se $\pi$ è stazionaria e $\pi(y)>0$, allora $y$ è ricorrente.

**Catene finite non irriducibili.** Con $S=T\cup R_1\cup\dots\cup R_k$ ogni $R_i$ ha una stazionaria $\pi_i$ con supporto $R_i$, e le stazionarie sono esattamente le combinazioni convesse delle $\pi_i$.

## Formule chiave
- Due stati, $P=\begin{pmatrix}1-a&a\\b&1-b\end{pmatrix}$, con $a+b>0$: $\pi=\big(\tfrac b{a+b},\tfrac a{a+b}\big)$, unica. Se $a+b=0$ ogni vettore di probabilità è stazionario.
- Matrice doppiamente stocastica $k\times k$: $\pi(i)=1/k$.
- Esempio: $P=\begin{pmatrix}0.7&0.2&0.1\\0.3&0.5&0.2\\0.2&0.4&0.4\end{pmatrix}$ dà $\pi=\big(\tfrac{22}{47},\tfrac{16}{47},\tfrac9{47}\big)$.

## Intuizione
È l'equilibrio statistico della catena: il flusso di probabilità entrante in ogni stato bilancia quello uscente. È anche la candidata a descrivere frequenze e limiti di lungo periodo.

## Come si usa
Procedura (dal `.tex`):
1. scrivere $P$;
2. provare il bilancio dettagliato, sempre per nascita-morte;
3. risolvere $\pi=\pi P$;
4. normalizzare;
5. verificare la ricorrenza positiva.

Es. G di `suggested_exercises_DTMC.pdf`: trovare **tutte** le stazionarie di una catena non irriducibile, cioè le combinazioni convesse.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 8 ("Stationary distributions", esempi "2-state DTMCs" e "doubly stochastic matrices", "Stationary distributions and recurrence"), lezione 9 ("Finite chains"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Distribuzioni stazionarie e limiti. Fonti principali: `magistrale/Processi stocastici/Lezione_08_14_10.pdf` (lezione 8); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Distribuzioni stazionarie e limiti.
- **Matematica per l'AI** (triennale): "esiste una o più distribuzioni iniziali che si trasformano in sé stesse?" $\pi A=\pi$; casi semplici $A=I$ (ogni $\lambda$ invariante) e $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ (orbite periodiche di periodo 2); per la catena a due stati $\pi=\big(\frac\beta{\alpha+\beta},\frac\alpha{\alpha+\beta}\big)$ e $\lambda P^n\to\pi$ per ogni $\lambda$. Esempio svolto con riduzione di Gauss: $P$ $3\times3$ con righe $(\frac12,\frac14,\frac14)$, $(\frac14,\frac12,\frac14)$, $(0,\frac14,\frac34)$ dà $\pi=(\frac16,\frac13,\frac12)$. Casi non irriducibili: se nessuna classe è positivo ricorrente $\pi$ non esiste; se esattamente una lo è, $\pi$ esiste con supporto su quella classe; se più di una, infinite distribuzioni stazionarie (esempio a blocchi con $\pi=(\frac12\alpha,\frac12\alpha,\frac25(1-\alpha),\frac35(1-\alpha))$). Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 1 (2).pdf` (p. 5); `De Gregorio Mia 2 (1).pdf` (p. 1, 8-11).
- **Dinamiche su network** (magistrale): $\pi$ stazionaria se $\pi(0)=\pi\Rightarrow\pi(t)=\pi$ per ogni $t$. Teorema: se il grafo del random walk è connesso esiste un'unica stazionaria $\pi=P'\pi$ con $\pi_i>0$; se è anche aperiodico $\pi(t)\to\pi$ per ogni $\pi(0)$, cioè $X(t)$ converge in distribuzione. È la stessa $\pi$ che fa da centralità, da peso del consenso e da frazione di tempo; con più pozzi nel grafo di condensazione le stazionarie formano un simplesso. Esempio a 8 nodi con $\pi=(0.1887,0.2264,\dots,0.0566)$. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 7, 11, 36); `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 36, 46).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: vettore invariante della matrice P

## Porta a
- [[Misura stazionaria]]: versione non normalizzata
- [[Bilancio dettagliato]]: condizione sufficiente di stazionarietà
- [[Distribuzione stazionaria di una CTMC]]: estende pi = pi P al continuo

## Collegati
- [[Random walk su un grafo]]: stazionaria di una passeggiata su grafo
- [[Matrice stocastica]]: Perron-Frobenius per matrici stocastiche e simplesso delle invarianti (Dinamiche su network)
- [[Autovalori e autovettori]]: pi è autovettore sinistro di P per l'autovalore 1 (collegamento dal corso Algebra lineare)
- [[Misura invariante di un sistema dinamico]]: analogo per mappe deterministiche, $\mu(A)=\mu(F^{-1}(A))$ (Matematica per l'AI)
