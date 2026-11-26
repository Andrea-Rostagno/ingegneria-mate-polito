---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Matematica discreta]
livello: [triennale]
aliases: ["probability space", "modello probabilistico", "spazio campionario", "evento", "regola di Laplace", "spazio uniforme", "eventi incompatibili", "probabilità discreta"]
tags: [competenza, area/probabilita]
---

# Spazio di probabilità

> La terna $(\Omega,\mathcal F,\mathbb P)$ che modella un esperimento aleatorio: è uno spazio di misura finito di massa 1.

## Definizione / enunciato
Uno **spazio di probabilità** (modello probabilistico) è uno spazio di misura $(\Omega,\mathcal F,\mathbb P)$ con $\mathbb P(\Omega)=1$:
- $\Omega$ = **spazio campionario**, insieme dei possibili esiti $\omega$ (discreto o continuo);
- $\mathcal F$ = **spazio degli eventi**, la σ-algebra degli insiemi di cui si vuole la probabilità (per $\Omega$ finito o numerabile di solito $\mathcal P(\Omega)$);
- $\mathbb P$ = **misura di probabilità**: gode di tutte le proprietà delle misure finite.

Terminologia: $A$ **si realizza** se l'esito $\omega\in A$; $\Omega$ evento certo, $\emptyset$ evento impossibile; $A\subseteq B$: $A$ implica $B$; $A,B$ **incompatibili** se $A\cap B=\emptyset$.

## Formule chiave
Probabilità discreta su $\Omega=\{\omega_i\}_{i\in I}$: $\mathbb P(\{\omega_i\})=p_i\in[0,1]$, $\sum_{i\in I}p_i=1$.
Caso equiprobabile ($\operatorname{card}\Omega=N$), **regola di Laplace**:
$$\mathbb P(A)=\frac{\operatorname{card}A}{\operatorname{card}\Omega}=\frac{\text{casi favorevoli}}{\text{casi possibili}}\qquad\text{(spazio uniforme)}.$$
Dalle proprietà delle misure: $\mathbb P(A^c)=1-\mathbb P(A)$, $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B)$.

## Intuizione
La probabilità è una misura di massa totale 1: tutta la teoria della misura (monotonia, sub-additività, continuità) si trasferisce agli eventi.

## Come si usa
Esempi della lezione 4: dado con $\Omega=\{1,\dots,6\}$, $A$ = "pari" $=\{2,4,6\}$, $\mathbb P(A)=\frac36=\frac12$; durata di una lampadina con $\Omega=(0,+\infty)$, $\mathcal F=\mathcal B((0,+\infty))$, $A$ = "dopo 2 ore funziona" $=(2,+\infty)$. Problema dei compleanni (Foglio 1, es. 11, svolto a lezione): con $k$ persone $\mathbb P(\text{almeno due coincidono})=1-\frac{365!}{(365-k)!\,365^k}$, che per $k=23$ vale $0.507$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 4 (appunto manoscritto). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione04(23-03-23) (6).pdf` (lezione 4, pp. 4-8; esercizi pp. 9-15).
- **Matematica discreta** (triennale): solo la **definizione classica di Laplace**, come applicazione del contare: probabilità = esiti favorevoli / esiti possibili, supponendo gli esiti equiprobabili. Esempi della lezione 4: un dado non truccato dà un numero dispari con probabilità $3/6=1/2$; 4 carte dello stesso seme da un mazzo di 52 hanno probabilità $4\binom{13}4\big/\binom{52}4$. Nelle dispense la stessa regola dà la probabilità di una dismutazione, che tende a $1/e$. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 22-23); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§2.7).

## Prerequisiti
- [[Spazio di misura]]: misura finita di massa 1

## Porta a
- [[Probabilità condizionata]]: nuova misura di probabilità
- [[Variabile aleatoria]]: dominio della v.a.

## Collegati
- [[Calcolo combinatorio]]: conteggi nello spazio uniforme
- [[Dismutazioni]]: probabilità che una permutazione casuale non abbia punti fissi, che tende a $1/e$ (Matematica discreta)
- [[Principio di inclusione-esclusione]]: la stessa formula vale per la probabilità di un'unione. Il collegamento è concettuale: in Matematica discreta la formula è usata solo per contare.
