---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["derangements", "dismutazione di una permutazione", "permutazioni senza punti fissi", "sconvolgimenti", "problema dei cappelli", "hat-check problem"]
tags: [competenza, area/algebra-geometria]
---

# Dismutazioni

> Una dismutazione è una permutazione in cui nessun elemento resta al suo posto. Il loro numero si trova con l'inclusione-esclusione, e la probabilità di estrarne una tende a $1/e$.

## Definizione / enunciato
Una permutazione $f$ di $\{1,\dots,n\}$ ha un **punto fisso** $j$ se $f(j)=j$. È una **dismutazione** se non ne ha. Ad esempio $(1,2,3)\mapsto(1,3,2)$ non lo è perché 1 è fisso, mentre $(1,2,3)\mapsto(2,3,1)$ lo è.

**Conteggio.** Sia $A$ l'insieme delle permutazioni con almeno un punto fisso e sia $A_j=\{f: f(j)=j\}$. Allora $A=A_1\cup\dots\cup A_n$, che non è una partizione, e
$$|A_{j_1}\cap\dots\cap A_{j_k}|=(n-k)!.$$
Per l'inclusione-esclusione,
$$|A|=\sum_{k=1}^n(-1)^{k-1}\binom nk(n-k)!=n!\sum_{k=1}^n\frac{(-1)^{k-1}}{k!}.$$

## Formule chiave
$$D_n=n!-|A|=n!\sum_{k=0}^n\frac{(-1)^k}{k!},\qquad p_n=\frac{D_n}{n!}=\sum_{k=0}^n\frac{(-1)^k}{k!}\ \xrightarrow[n\to\infty]{}\ \frac1e\approx0.37.$$

## Intuizione
**Problema dei cappelli** (Tilli 2.7.1): $n$ persone ricevono a caso i loro $n$ cappelli. $p_n$ è la probabilità che nessuno riceva il proprio. Se gli eventi "la persona $j$ non riceve il suo cappello" fossero indipendenti, si avrebbe $p_n=(1-1/n)^n\to1/e$. Non lo sono: sapendo che la persona 1 ha il suo cappello, per la persona 2 la probabilità diventa $1-1/(n-1)$. Il limite però è lo stesso, quindi asintoticamente si comportano come indipendenti.

## Come si usa
- Si passa al complementare: si contano le permutazioni con almeno un punto fisso, e $D_n=n!-|A|$.
- $|A_j|=(n-1)!$: si fissa $j$ e si permutano liberamente gli altri $n-1$ elementi.
- Il limite $1/e$ è quasi raggiunto già per $n$ piccolo, perché la serie converge molto velocemente.

## Nei corsi
- **Matematica discreta** (triennale): lezione 4, come applicazione dell'inclusione-esclusione. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 26-27); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§2.7, pp. 39-42).

## Prerequisiti
- [[Principio di inclusione-esclusione]]: conteggio delle permutazioni con almeno un punto fisso
- [[Calcolo combinatorio]]: le permutazioni di $n$ oggetti sono $n!$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Gruppo simmetrico]]: le dismutazioni sono gli elementi di $S_n$ senza punti fissi
- [[Spazio di probabilità]]: $p_n$ è una probabilità uniforme sulle $n!$ permutazioni (regola di Laplace)
