---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["cardinality of a finite set", "cardinalità di un insieme", "insieme finito", "insieme infinito", "numero di elementi"]
tags: [competenza, area/algebra-geometria]
---

# Cardinalità di un insieme finito

> Dire che un insieme "ha $n$ elementi" significa che esiste una biiezione fra $\{1,\dots,n\}$ e l'insieme. È la definizione su cui si fonda tutto il contare.

## Definizione / enunciato
Sia $\mathbb N_n=\{1,2,\dots,n\}$ con $n\ge1$.
- **Cardinalità.** $|A|=n$ se e solo se esiste una funzione biiettiva $f:\mathbb N_n\to A$. Per convenzione $|\emptyset|=0$ (Tilli, Def. 1.1.1 e Oss. 1.1.2).
- **Insieme finito.** $A$ è finito se $|A|=n$ per qualche $n\ge0$. Altrimenti è **infinito**: lo sono $\mathbb N$, $\mathbb Q$ e $\mathbb R$ (Def. 1.1.3).
- **Teorema 1.1.4.** Se $|B|=n$ ed esiste una biiezione $g:A\to B$, allora $|A|=n$. Infatti $g^{-1}\circ f:\mathbb N_n\to A$ è biiettiva.
- **Equipotenza** (lezione 3). $A$ e $B$ sono equipotenti, $A\sim B$, se esiste una biiezione $A\to B$. La relazione è riflessiva (identità), simmetrica (inversa) e transitiva (composizione), quindi è una relazione di equivalenza. **Corollario:** tutti gli insiemi equipotenti a uno stesso insieme finito hanno la stessa cardinalità.

## Formule chiave
$$|A|=n\iff\exists\,f:\mathbb N_n\to A\ \text{biiettiva},\qquad A=\{f(1),\dots,f(n)\}=\{a_1,\dots,a_n\}.$$

## Intuizione
La biiezione assegna a ogni elemento un'etichetta da 1 a $n$, come i numeri di maglia ai giocatori. Contare con le dita è proprio costruire questa $f$. Per contare $A$ basta quindi trovare una corrispondenza biunivoca con un insieme già contato.

## Come si usa
- **Esempio della lezione 3:** i numeri pari fra 52 e 126 (estremi compresi). Con $n\mapsto 2n$ corrispondono agli interi fra 26 e 63, e traslando a $\{1,\dots,38\}$; quindi sono 38.
- **Contare per biiezione:** i sottoinsiemi di $A$ corrispondono alle stringhe binarie di lunghezza $|A|$ (vedi [[Insieme delle parti]]). Le funzioni $\mathbb N_k\to\mathbb N_n$ corrispondono agli elementi del prodotto cartesiano $\mathbb N_n^k$.
- La lezione 3 enuncia anche il caso infinito: $A$ è infinito se e solo se contiene un sottoinsieme numerabile, se e solo se è equipotente a un suo sottoinsieme proprio.

## Nei corsi
- **Matematica discreta** (triennale): lezione 3, dopo gli assiomi di Peano, e capitolo 1 delle dispense. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/03 -Insiemi equipotenti e cardinalitá.pdf` (lezione 3, pp. 4-6, manoscritto); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§1.1, pp. 4-6).

## Prerequisiti
- [[Funzioni iniettive e suriettive]]: la cardinalità è definita tramite una biiezione
- [[Relazione di equivalenza]]: l'equipotenza è riflessiva, simmetrica e transitiva

## Porta a
- [[Regola della somma]]: contare un insieme spezzandolo in parti
- [[Insieme delle parti]]: $|\mathcal P(A)|=2^{|A|}$

## Collegati
- [[Insieme numerabile]]: estensione dell'equipotenza agli insiemi infiniti
- [[Teorema di Cantor-Schröder-Bernstein]]: confronto $|A|\le|B|$ tramite iniezioni (lezione 3)
