---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi funzionale]
livello: [triennale]
aliases: ["sigma-algebra", "σ-algebra", "sigma-algebra generata", "algebra di insiemi", "spazio misurabile", "insieme misurabile", "measurable space"]
tags: [competenza, area/analisi]
---

# Sigma-algebra

> Famiglia di sottoinsiemi chiusa per complementare e unioni numerabili: è il dominio naturale di una misura e lo "spazio degli eventi" della probabilità.

## Definizione / enunciato
Sia $X\neq\emptyset$. Una **σ-algebra** di parti di $X$ è $\mathcal A\subseteq\mathcal P(X)$ tale che
1. $X\in\mathcal A$;
2. $A\in\mathcal A\Rightarrow A^c\in\mathcal A$;
3. $(A_m)_{m\ge1}\subseteq\mathcal A\Rightarrow\bigcup_{m\ge1}A_m\in\mathcal A$.

$(X,\mathcal A)$ è uno **spazio misurabile**, i suoi elementi sono gli insiemi misurabili. Se la 3) vale solo per unioni finite, $\mathcal A$ è un'**algebra** (σ-algebra $\Rightarrow$ algebra; il viceversa vale se $X$ è finito).
Dato $\mathcal E\subseteq\mathcal P(X)$, la **σ-algebra generata** $\sigma(\mathcal E)$ è l'intersezione di tutte le σ-algebre che contengono $\mathcal E$: la più piccola che lo contiene.

## Formule chiave
$$\bigcap_{m\ge1}A_m=\Big(\bigcup_{m\ge1}A_m^c\Big)^c\in\mathcal A,\qquad \sigma(\{A\})=\{\emptyset,X,A,A^c\}.$$
Se $\mathcal E\subseteq\sigma(\mathcal E')$ e $\mathcal E'\subseteq\sigma(\mathcal E)$ allora $\sigma(\mathcal E)=\sigma(\mathcal E')$.

## Intuizione
È la "quantità di informazione" su cui si può calcolare una misura: si può complementare e passare al limite numerabile senza uscire dalla famiglia. L'intersezione di σ-algebre è una σ-algebra, l'unione in generale nemmeno un'algebra.

## Come si usa
Esempi della lezione 1: su $X=\{a,b,c\}$, $\{X,\emptyset,\{a\},\{b,c\}\}$ è una σ-algebra, $\{X,\emptyset,\{a\},\{b\},\{c\}\}$ no. Su $[0,1)$ le unioni finite disgiunte di $[a_i,b_i)$ formano un'algebra ma non una σ-algebra: $\bigcup_m[\frac1m,1)=(0,1)$ non vi appartiene. Gli insiemi finiti o cofiniti di $\mathbb N$ sono un'algebra ma non una σ-algebra (pari = unione dei $\{2m\}$).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 1-2 della parte di teoria della misura; fonte manoscritta (appunti scansionati). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione01(08-03-23) (2).pdf` (lezione 1, pp. 1-7), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione02(09-03-23) (2).pdf` (lezione 2, p. 1).
- **Analisi funzionale** (triennale): richiamo nel cap. 3 (Def. 3.1(b), senza dimostrazioni): $\mathcal M\subseteq\mathcal P(M)$ con $\emptyset,M\in\mathcal M$, chiusa per complementare e unioni numerabili; base per spazi di misura, funzioni misurabili ($f^{-1}(A)\in\mathcal M$ per ogni aperto $A$) e spazi $L^p$. Con $\mathcal P(\mathbb N)$ e la misura che conta si ottengono gli spazi $\ell^p$. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 22-23); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (p. 5).

## Prerequisiti
- [[Operazioni sugli insiemi]]: chiusura per complementare e unioni

## Porta a
- [[Sigma-algebra di Borel]]: generata dagli aperti
- [[Spazio di misura]]: dominio della misura
- [[Funzione misurabile]]: controimmagini misurabili
- [[Spazi Lp]]: spazi di funzioni misurabili rispetto a M (Analisi funzionale)

## Collegati
- [[Filtrazione]]: famiglia crescente di sigma-algebre
