---
tipo: competenza
area: network
corsi: [Matematica discreta, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["handshaking lemma", "somma dei gradi", "sum of degrees", "grado di un nodo", "degree of a vertex", "nodo isolato", "foglia", "nodi di grado dispari"]
tags: [competenza, area/network]
---

# Lemma delle strette di mano

> In ogni grafo indiretto la somma dei gradi dei nodi è il doppio del numero di archi. Quindi i nodi di grado dispari sono sempre in numero pari.

## Definizione / enunciato
In un grafo indiretto il **grado** $\deg(v)$ di un nodo è il numero di archi che vi incidono. Se $\deg(v)=0$ il nodo è **isolato**, se $\deg(v)=1$ è una **foglia**. Due nodi sono **adiacenti** se c'è un arco fra loro.

**Teorema 5.1.5** (Tilli). Sia $G=(V,E)$ un grafo. Allora:
1. $\displaystyle\sum_{v\in V}\deg(v)=2|E|$;
2. la somma dei gradi è pari;
3. il numero dei nodi di grado dispari è pari.

## Formule chiave
$$\sum_{v\in V}\deg(v)=2|E|,\qquad \sum_{v\in V_{\text{dispari}}}\deg(v)=2|E|-\sum_{v\in V_{\text{pari}}}\deg(v)\ \text{è pari}.$$
Numero massimo di archi con $n$ nodi (grafo completo $K_n$): $\binom n2=\frac{n(n-1)}2$, che è il numero delle strette di mano fra $n$ persone.

## Intuizione
Ogni arco $(v,w)$ ha due estremi e contribuisce 1 a $\deg(v)$ e 1 a $\deg(w)$: sommando i gradi ogni arco viene contato due volte. Il nome viene dal contare le strette di mano a una festa: ogni stretta coinvolge due mani.

## Come si usa
- **Esistenza di grafi con gradi assegnati** (lezione 7). Un grafo con 5 nodi tutti di grado 3 non esiste, perché $\sum\deg=15$ è dispari. La partizione $V=V_{\text{pari}}\cup V_{\text{dispari}}$ dimostra il punto 3.
- **Grafi $k$-regolari:** con $n$ nodi hanno $|E|=nk/2$, quindi $nk$ deve essere pari (conseguenza ricavata qui, generalizza l'esempio precedente).
- **Versione spettrale:** $\operatorname{tr}A^2=\sum_v\deg(v)=2|E|=\sum_i\lambda_i^2$.
- **Percorsi euleriani:** l'esistenza dipende solo dalla parità dei gradi.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, subito dopo le definizioni di base. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 2, 5-6); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Teor. 5.1.5, p. 89).
- **Dinamiche su network** (magistrale): $\mathcal E$ contiene le coppie ordinate, quindi un arco non orientato conta due volte e $m=|\mathcal E|/2$. Per ogni grafo $\sum_iw_i=\sum_iw_i^-=\sum_{i,j}W_{ij}$; per un grafo semplice $\sum_iw_i=|\mathcal E|$ è pari (handshaking lemma), e $i$ è una foglia se $|N_i|=1$. Con la stessa convenzione, $(W^2)_{ii}=w_i$ e $\operatorname{Tr}(W^2)=|\mathcal E|$. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 13, 45); `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (p. 23).

## Prerequisiti
- [[Grafo]]: nodi, archi e grado

## Porta a
- [[Percorso euleriano]]: la condizione è sulla parità dei gradi

## Collegati
- [[Calcolo combinatorio]]: $|E(K_n)|=\binom n2$, il conteggio delle strette di mano
- [[Spettro di un grafo]]: $\sum_i\lambda_i^2=2|E|$
- [[Potenze della matrice di adiacenza]]: $\operatorname{Tr}(W^2)$ conta gli archi (Dinamiche su network)
