---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Banach space", "spazio normato completo", "complete normed space", "sottospazio chiuso di uno spazio di Banach"]
tags: [competenza, area/analisi]
---

# Spazio di Banach

> Uno spazio normato completo: l'ambiente naturale in cui costruire soluzioni come limiti di approssimazioni (serie, iterazioni, estensioni).

## Definizione / enunciato
Uno **spazio di Banach** è uno spazio normato $(X,\|\cdot\|)$ completo rispetto alla distanza $d(x,y)=\|x-y\|$.
**Prop. 4.16.** Sia $Y$ un sottospazio vettoriale di $X$ normato: (i) se $Y$ è completo, è chiuso in $X$; (ii) se $\dim Y<\infty$, $Y$ è chiuso; (iii) se $X$ è di Banach, $Y$ è chiuso $\iff$ $Y$ è completo.
**Prop. 4.20.** In uno spazio di Banach ogni serie assolutamente convergente ($\sum\|x_n\|<\infty$) converge.

## Formule chiave
Esempi: $(\mathbb F^n,\|\cdot\|_2)$; $(C_{\mathbb F}(M),\|\cdot\|_\infty)$ con $M$ compatto; il prodotto di due Banach con $\|(x,y)\|=\max\{\|x\|,\|y\|\}$; $\ell^p$, $c_0$, $L^p$ per $p\in[1,\infty]$; $\mathcal B(X,Y)$ se $Y$ è di Banach; ogni duale $X'$.
Non esempio (Es. 4.17): i polinomi ristretti a $[a,b]$ con $\|\cdot\|_\infty$ non sono di Banach, perché sono densi ma non chiusi in $C[a,b]$.

## Intuizione
La completezza è ciò che rende utilizzabile l'analisi: se una successione di approssimazioni è di Cauchy, il limite esiste nello spazio. I sottospazi "buoni" (chiusi) ereditano la completezza; quelli densi propri no.

## Come si usa
Nei teoremi fondamentali la completezza è un'ipotesi essenziale: Banach-Steinhaus, isomorfismo di Banach e grafico chiuso (via lemma di Baire), estensione per continuità (completezza del codominio), criterio di Neumann (convergenza della serie $\sum T^n$). Per verificare che un sottospazio è di Banach basta mostrare che è chiuso (es. $c_0$ in $\ell^\infty$).

## Nei corsi
- **Analisi funzionale** (triennale): Def. 4.4, Es. 4.5, §4.3 (Prop. 4.16, Es. 4.17), §4.4 (Prop. 4.20). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 29, 36-37); `triennale/ANNO 3/analisi funzionale/03_spazinormati_handout.pdf` (pp. 2-3, 6-7).

## Prerequisiti
- [[Spazio normato]]: struttura di base
- [[Spazio metrico completo]]: completezza rispetto alla distanza indotta

## Porta a
- [[Spazi di successioni lp]]: esempi fondamentali di Banach
- [[Estensione per continuità]]: richiede codominio di Banach
- [[Teorema di Banach-Steinhaus]]: richiede dominio di Banach
- [[Teorema dell'isomorfismo di Banach]]: dominio e codominio di Banach
- [[Criterio di invertibilità di Neumann]]: serie di operatori in B(X)

## Collegati
- [[Convergenza assoluta di una serie]]: in un Banach la convergenza assoluta implica la convergenza
- [[Spazio di Hilbert]]: uno spazio di Hilbert è un Banach con norma da prodotto scalare
- [[Spazi Lp]]: Lp è di Banach per ogni p
