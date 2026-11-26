---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["first-order characterization of convexity", "second-order characterization of convexity", "caratterizzazione al primo ordine", "caratterizzazione al secondo ordine", "condizione di stazionarietà nel caso convesso", "effetto di convessità"]
tags: [competenza, area/ottimizzazione]
---

# Convessità di funzioni differenziabili

> Per funzioni differenziabili la convessità equivale a stare sopra ogni iperpiano tangente, e per funzioni $C^2$ è garantita da un'hessiana semidefinita positiva; di conseguenza la stazionarietà è condizione necessaria e sufficiente di minimo globale.

## Definizione / enunciato
**Teorema (primo ordine).** Sia $f$ differenziabile sul convesso aperto $S$. $f$ è convessa se e solo se
$$f(\mathbf z)\ge f(\mathbf x)+(\mathbf z-\mathbf x)^T\nabla f(\mathbf x)\qquad\forall\mathbf x,\mathbf z\in S;$$
se la disuguaglianza è stretta per $\mathbf x\ne\mathbf z$, $f$ è strettamente convessa.

**Teorema (secondo ordine).** Sia $f\in C^2$ su un aperto $S$. (1) $\nabla^2f(\mathbf x)$ semidefinita positiva $\forall\mathbf x\in S$ ⇒ $f$ convessa; (2) definita positiva ⇒ strettamente convessa; (3) se $S=\mathbb R^n$ e $f$ è convessa, $\nabla^2f$ è semidefinita positiva ovunque.

**Teorema (stazionarietà).** Con $f$ convessa e differenziabile sul convesso aperto $S$, $\mathbf x^*$ è di minimo globale se e solo se $\nabla f(\mathbf x^*)=\mathbf 0$.

## Formule chiave
Derivata direzionale: $\lim_{\lambda\downarrow0}\frac{f(\mathbf x+\lambda(\mathbf z-\mathbf x))-f(\mathbf x)}\lambda=(\mathbf z-\mathbf x)^T\nabla f(\mathbf x)$. La forma $\frac12\mathbf x^TQ\mathbf x$ è convessa se e solo se $Q\succeq0$, strettamente se e solo se $Q\succ0$.

## Intuizione
La tangente sottostima sempre una funzione convessa. La condizione (2) è solo sufficiente: $f(x)=x^4$ è strettamente convessa ma $f''(0)=0$.

## Come si usa
Esempio delle slide: $f=\frac12(x_1^2+x_2^2)$ ha hessiana $I$ (autovalore doppio 1), strettamente convessa; $g=\frac12(x_1^2-2x_1x_2-x_2^2)$ ha hessiana con autovalori $\pm\sqrt2$, non convessa. **Effetto di convessità in finanza:** zero coupon $P(y)=F/(1+y)^T$ con $F=1000$, $T=5$, $y_0=3\%$: $P_0=862.61$, $P(0.04)=821.93$, $P(0.02)=905.73$, mentre l'approssimazione lineare $\hat P=P_0-\frac{TF}{(1+y_0)^{T+1}}\delta y$ dà $820.73$ e $904.48$: la tangente è pessimistica in entrambi i versi.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 14-20).

## Prerequisiti
- [[Funzione convessa]]: definizione con le corde
- [[Gradiente]]: compare nella caratterizzazione al primo ordine
- [[Formula di Taylor in più variabili]]: giustifica il criterio dell'hessiana

## Porta a
- [[Subgradiente]]: generalizza il gradiente al caso non differenziabile
- [[Condizioni di Karush-Kuhn-Tucker]]: sufficienti nel caso convesso

## Collegati
- [[Classificazione dei punti critici]]: criterio dell'hessiana per i minimi locali
- [[Segnatura di una forma quadratica]]: segno degli autovalori dell'hessiana
- [[Programmazione quadratica]]: convessità di $\frac12\mathbf x^TQ\mathbf x$
