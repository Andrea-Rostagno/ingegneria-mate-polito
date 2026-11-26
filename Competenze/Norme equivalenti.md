---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["equivalent norms", "equivalenza delle norme", "teorema di equivalenza delle norme in dimensione finita", "norme equivalenti in dimensione finita"]
tags: [competenza, area/analisi]
---

# Norme equivalenti

> Due norme sono equivalenti se ciascuna è controllata da un multiplo dell'altra; allora danno la stessa topologia, e in dimensione finita tutte le norme lo sono.

## Definizione / enunciato
Due norme $\|\cdot\|$, $\|\cdot\|'$ su $X$ sono **equivalenti** se esistono $A,B\in(0,\infty)$ con
$$\|x\|\le A\|x\|',\qquad\|x\|'\le B\|x\|\qquad\forall x\in X.$$
Equivalentemente $\mathrm{id}_X:(X,\|\cdot\|)\to(X,\|\cdot\|')$ è bilipschitziana (Prop. 4.10). È una relazione di equivalenza.
**Teor. 4.13.** Se $\dim X<\infty$, due norme qualsiasi su $X$ sono equivalenti.

## Formule chiave
Cor. 4.11: norme equivalenti inducono la stessa topologia (stesse successioni convergenti, funzioni continue, aperti, chiusi, compatti, densi), gli stessi limitati e le stesse successioni di Cauchy; $(X,\|\cdot\|)$ è di Banach $\iff$ $(X,\|\cdot\|')$ lo è.
Cor. 4.14: se $\dim X<\infty$, $(X,\|\cdot\|)$ è di Banach separabile e ogni chiuso e limitato è compatto.

## Intuizione
In dimensione finita ci si riduce a $\mathbb F^n$ con la norma euclidea: la sfera unitaria è compatta, quindi una norma continua su di essa ha minimo positivo e massimo finito, che danno le costanti $A$ e $B$. In dimensione infinita questo argomento cade.

## Come si usa
Es. 4.15 su $C[0,1]$: $\|f\|_*=\sup|(1+t)f(t)|$ è equivalente a $\|\cdot\|_\infty$ ($\|f\|_\infty\le\|f\|_*\le2\|f\|_\infty$), mentre $\|f\|_\dagger=\sup|tf(t)|$ non lo è: $f_n(t)=\max\{0,1-nt\}$ ha $\|f_n\|_\infty=1$ ma $\|f_n\|_\dagger\le1/n\to0$, e le norme equivalenti hanno le stesse successioni convergenti.
Per stabilire proprietà topologiche in dimensione finita si sceglie la norma più comoda. In dimensione finita ogni sottospazio è chiuso (Prop. 4.16(ii)) e ogni operatore lineare è limitato (Prop. 7.9).

## Nei corsi
- **Analisi funzionale** (triennale): §4.2 (Def. 4.7, Prop. 4.10, Cor. 4.11, Teor. 4.13, Cor. 4.14). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 32-35); `triennale/ANNO 3/analisi funzionale/03_spazinormati_handout.pdf` (pp. 5-6).

## Prerequisiti
- [[Spazio normato]]: si confrontano due norme
- [[Funzione lipschitziana tra spazi metrici]]: equivalenza come bilipschitzianità dell'identità

## Porta a
- [[Lemma di Riesz]]: in dimensione infinita chiuso e limitato non basta

## Collegati
- [[Omeomorfismo]]: l'identità fra norme equivalenti è un omeomorfismo
- [[Norme vettoriali]]: equivalenza delle norme 1, 2, ∞ su R^n
- [[Base e dimensione]]: il teorema usa la dimensione finita
