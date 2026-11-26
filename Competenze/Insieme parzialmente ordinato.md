---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["partially ordered set", "poset", "ordine parziale", "ordine totale", "relazione d'ordine parziale", "elemento massimale", "maximal element", "insieme induttivo"]
tags: [competenza, area/algebra-geometria]
---

# Insieme parzialmente ordinato

> Un insieme con una relazione riflessiva, antisimmetrica e transitiva in cui non tutti gli elementi sono per forza confrontabili. Qui si definiscono maggioranti, elementi massimali e insiemi induttivi.

## Definizione / enunciato
**Relazione d'ordine** $\prec$ su $X$ (Def. 10): riflessiva, transitiva e antisimmetrica. È **totale** se per ogni $x,y$ vale $x\prec y$ oppure $y\prec x$; in tal caso si scrive di solito $\leqslant$.

Def. 14, dato $(X,\prec)$:
- $x\in X$ è un **maggiorante** di $Y\subseteq X$ se $y\prec x$ per ogni $y\in Y$. Non deve necessariamente stare in $Y$.
- $m\in X$ è **massimale** se $m\prec x\Rightarrow x=m$.
- $X$ è **induttivo** se ogni sottoinsieme totalmente ordinato (catena) ha almeno un maggiorante in $X$.

Avvertenze delle dispense:
- un elemento massimale può non essere un maggiorante;
- possono esistere più elementi massimali;
- ogni insieme ordinato finito è induttivo.

## Formule chiave
$$m\ \text{massimale}\iff(\forall x\in X:\ m\prec x\Rightarrow x=m)$$

## Intuizione
"Massimale" significa che nessuno sta sopra $m$, non che $m$ sta sopra tutti. Nell'ordine parziale molti elementi possono essere massimali e tra loro non confrontabili.

## Come si usa
Esempi delle lezioni:
- $(\mathcal P(X),\subseteq)$ è un ordine, non totale se $|X|\ge2$;
- la divisibilità su $\mathbb N$ è un ordine;
- in $(\mathbb Z,\le)$ l'insieme $\mathbb N$ non ha maggioranti;
- $[0,1)\subseteq\mathbb R$ ha maggioranti in $\mathbb R$ ma non ha massimale.

L'induttività è proprio l'ipotesi del Lemma di Zorn.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 1-2, come preparazione al Lemma di Zorn. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 11-12, 15).

## Prerequisiti

## Porta a
- [[Lemma di Zorn]]: un insieme induttivo ha elementi massimali

## Collegati
- [[Relazione di equivalenza]]: stesse proprietà, con antisimmetria al posto della simmetria
- [[Estremo superiore e inferiore]]: maggioranti nell'ordine totale di $\mathbb R$
- [[Teorema di Cantor-Schröder-Bernstein]]: antisimmetria del confronto tra cardinalità
