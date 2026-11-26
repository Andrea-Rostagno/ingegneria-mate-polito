---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["first-order optimality condition on a convex set", "condizione necessaria e sufficiente su insieme convesso", "disequazione variazionale", "variational inequality", "punto stazionario vincolato", "stationary point on a convex set"]
tags: [competenza, area/ottimizzazione]
---

# Condizione di ottimalità su insieme convesso

> Per minimizzare $f$ su un insieme $X$ chiuso, convesso e non vuoto, la condizione $\nabla f(x^*)=0$ va sostituita da $\nabla f(x^*)^T(x-x^*)\ge0$ per ogni $x\in X$. È necessaria in generale e anche sufficiente se $f$ è convessa su $X$.

## Definizione / enunciato
Problema $(P)$: $\min_{x\in X}f(x)$, con $f\in C^1$ e $X\subset\mathbb R^n$ chiuso, convesso, non vuoto (per esempio $X=\mathbb R^n_+$). Un punto ammissibile $x^*\in X$ è minimo locale se $f(x^*)\le f(x)$ per ogni $x\in X$ con $\|x-x^*\|<\varepsilon$; è globale se la disuguaglianza vale per ogni $x\in X$.

**Proposizione.**
a) (necessaria) Se $x^*$ è minimo locale per $(P)$, allora
$$\nabla f(x^*)^T(x-x^*)\ge0\qquad\forall x\in X.\qquad(\star)$$
b) (sufficiente) Se $f$ è convessa su $X$, la condizione $(\star)$ è anche sufficiente.

Un $x^*$ che soddisfa $(\star)$ si chiama punto stazionario di $f$ su $X$.

## Formule chiave
Caratterizzazione con la proiezione (DS, Prop. 10.1): $x^*\in X$ è stazionario se e solo se
$$\Pi_X\big(x^*-\alpha\nabla f(x^*)\big)=x^*\qquad\forall\alpha>0.$$

## Intuizione
- Se $x^*$ è **interno** a $X$, la condizione si riduce a $\nabla f(x^*)=0$, perché $x-x^*$ varia in tutte le direzioni.
- Se $x^*$ è **sul bordo**, il gradiente può essere non nullo, purché formi un angolo acuto con ogni direzione ammissibile $x-x^*$. Ci si può muovere solo in direzioni in cui $f$ non decresce al primo ordine.

## Come si usa
Esempi delle note:
- $\min_{[-1,1]}x^2+1$: l'unico candidato è $x^*=0$, interno, mentre $\pm1$ violano $(\star)$;
- $\min_{[1,2]}x^2+1$: $x^*=1$ è sul bordo con $f'(1)=2>0$ e soddisfa $(\star)$, nessun altro punto la soddisfa;
- $\min_{[0,2\pi]}\sin x$: $(\star)$ vale in $0$, $\pi/2$ e $3\pi/2$, ma $\pi/2$ è un massimo. Senza convessità la condizione non è sufficiente.

Nel gradiente proiettato la caratterizzazione con $\Pi_X$ serve come criterio di arresto.

## Nei corsi
- **Numerical opt** (magistrale): apre la parte vincolata delle lezioni Pieraccini, con esempi 1D e un esercizio su $[-1,1]\times[-1,1]$. Fonti: `magistrale/Numerical opt/Pieraccini/Part_5_Constrained_Optimization_General_Theory_and_Proj_Grad.pdf` (p. 1-4); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§10.1, eq. 67-68).

## Prerequisiti
- [[Insieme convesso]]: ipotesi su $X$
- [[Punti critici in più variabili]]: caso non vincolato $\nabla f(x^*)=0$, che si ritrova per i punti interni

## Porta a
- [[Metodo del gradiente proiettato]]: converge a punti stazionari nel senso $(\star)$

## Collegati
- [[Problema di ottimizzazione convessa]]: con $f$ convessa la condizione è anche sufficiente
- [[Teorema della proiezione]]: caratterizzazione equivalente tramite $\Pi_X$
