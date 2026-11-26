---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["communication classes", "irriducibilità", "classe chiusa", "catene finite"]
tags: [competenza, area/probabilita]
---

# Classi di comunicazione

> Partizione dello spazio degli stati in classi di stati che si raggiungono a vicenda; la classificazione ricorrente/transiente si legge classe per classe.

## Definizione / enunciato
- $y$ è **raggiungibile** da $x$ ($x\Rightarrow y$) se esiste $m\ge0$ con $p^{(m)}(x,y)>0$; equivalentemente $x=y$ oppure $\rho_{xy}>0$.
- $i$ e $j$ **comunicano** ($i\Leftrightarrow j$) se $i\Rightarrow j$ e $j\Rightarrow i$. È una relazione di equivalenza; le sue classi sono le **classi di comunicazione**.
- La catena è **irriducibile** se tutti gli stati comunicano.
- $A\subseteq S$ è **chiuso** (o assorbente) se partendo in $A$ non si può uscire.

**Spazi finiti.**
1. Una classe chiusa finita contiene solo stati ricorrenti.
2. Se $S$ è finito, $S=T\cup R_1\cup\dots\cup R_k$, con $T$ gli stati transienti e $R_i$ classi chiuse ricorrenti.
3. Una DTMC irriducibile su spazio finito è ricorrente.

## Formule chiave
Transitività: $p^{(m+n)}(i,k)\ge p^{(m)}(i,j)\,p^{(n)}(j,k)>0$.
Prova del punto 1: partendo in $A$ non si esce, quindi $\sum_{y\in A}\mathbb E_x[N(y)]=\infty$; essendo $A$ finito, qualche $\hat y$ ha $\mathbb E_x[N(\hat y)]=\infty$.

## Intuizione
Su spazi finiti la struttura del grafo decide tutto. Su spazi infiniti no: la passeggiata su $\mathbb Z$ è irriducibile ma transiente se $p\ne1/2$.

## Come si usa
Es. A di `suggested_exercises_DTMC.pdf`:
$$P=\begin{pmatrix}0&0&1&0&0\\0.3&0.2&0.1&0.4&0\\0&1&0&0&0\\0&0&0&0.3&0.7\\0&0&0&0.2&0.8\end{pmatrix}.$$
- $\{1,2,3\}$ è una classe ($1\to3\to2\to1$), ma $2\to4$ esce: la classe non è chiusa, quindi è transiente.
- $\{4,5\}$ è chiusa e finita, quindi ricorrente.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 7 ("Communication classes", "Communication classes, irreducibility", "Finite state spaces and recurrence", "Communication and transience"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Classificazione degli stati; argomento 3 di `magistrale/Processi stocastici/topics_2025_26.pdf` ("rapporto con le classi di comunicazione"). Fonti principali: `magistrale/Processi stocastici/Lezione_07_13_10.pdf` (lezione 7); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Classificazione degli stati; `magistrale/Processi stocastici/suggested_exercises_DTMC.pdf (es. A)`.
- **Matematica per l'AI** (triennale): $i$ conduce a $j$ ($i\to j$) se $\exists n\ge0$: $P_i(X_n=j)>0$; teorema di equivalenza: $i\to j$ ⇔ $p_{ii_1}p_{i_1i_2}\cdots p_{i_{n-1}j}>0$ per qualche cammino ⇔ $p^{(n)}_{ij}>0$ per qualche $n$. Classe chiusa ($i\in C$, $i\to j\Rightarrow j\in C$), stato assorbente ($\{i\}$ chiusa), classe aperta; irriducibilità = un'unica classe. Esempio con sei stati e classi $\{1,2,3\}$, $\{4\}$, $\{5,6\}$ ($\{5,6\}$ chiusa). Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 1-3).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: raggiungibilità sul grafo di transizione

## Porta a
- [[Esistenza e unicità della distribuzione stazionaria]]: richiede una catena irriducibile
- [[Periodo di uno stato]]: il periodo è proprietà di classe
- [[Ricorrenza e transienza di una CTMC]]: irriducibilità uguale a quella embedded

## Collegati
- [[Ricorrenza e transienza]]: ricorrenza è proprietà di classe
- [[Probabilità di impatto e tempo medio di impatto]]: assorbimento nelle classi chiuse (Matematica per l'AI)
