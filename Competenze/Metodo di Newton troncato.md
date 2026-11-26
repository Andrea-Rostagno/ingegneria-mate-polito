---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["truncated Newton method", "Newton troncato", "line search Newton-CG", "Newton-CG", "metodo Newton-CG"]
tags: [competenza, area/ottimizzazione]
---

# Metodo di Newton troncato

> Newton inesatto in cui il sistema di Newton si risolve con il gradiente coniugato, interrotto appena si incontra una direzione di curvatura non positiva. La direzione restituita è sempre di discesa, anche se l'hessiana non è definita positiva.

## Definizione / enunciato
Al passo $k$ si risolve $B_kz=c_k$, con $B_k=\nabla^2f(x^{(k)})$ e $c_k=-\nabla f(x^{(k)})$, applicando il CG "sperando" che $B_k$ sia definita positiva. A ogni iterazione interna $j$, con direzione CG $d^{(j)}$, si controlla:
$$d^{(j)T}B_kd^{(j)}>0.$$
- **Condizione vera:** si prosegue con il CG.
- **Condizione falsa:** $B_k$ non è definita positiva e non ha senso continuare. Se $j=0$ si restituisce $z=c_k=-\nabla f(x^{(k)})$; se $j>0$ si restituisce l'ultimo iterato $z^{(j)}$.

Il ciclo interno si ferma anche con il criterio inesatto $\|B_kz-c_k\|\le\eta_k\|c_k\|$. Poi $p_{TN}^{(k)}=z$ e $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p_{TN}^{(k)}$, con $\alpha^{(k)}$ da backtracking e Armijo.

## Formule chiave
Inizializzazione del ciclo interno: $z^{(0)}=0$, $d^{(0)}=-\nabla f(x^{(k)})$, $r^{(0)}=c_k$. Se $d^{(j)T}B_kd^{(j)}>0$:
$$\alpha^{(j)}=\frac{r^{(j)T}r^{(j)}}{d^{(j)T}B_kd^{(j)}},\qquad z^{(j+1)}=z^{(j)}+\alpha^{(j)}d^{(j)},$$
$$\beta^{(j+1)}=\frac{r^{(j+1)T}r^{(j+1)}}{r^{(j)T}r^{(j)}},\qquad d^{(j+1)}=r^{(j+1)}+\beta^{(j+1)}d^{(j)}.$$
Le note (P3 p. 27) aggiornano il residuo con $r^{(j+1)}=r^{(j)}+\alpha^{(j)}B_kd^{(j)}$. Però, con $r^{(0)}=c_k-B_kz^{(0)}$, il residuo $r=c_k-B_kz$ si aggiorna con il segno meno, $r^{(j+1)}=r^{(j)}-\alpha^{(j)}B_kd^{(j)}$, come nel CG lineare. Il segno è da verificare sul PDF.

## Intuizione
Tre casi possibili:
1. la curvatura resta sempre positiva: si ottiene il normale passo di Newton inesatto;
2. la curvatura è non positiva già a $j=0$: si usa la direzione dello steepest descent;
3. la curvatura diventa non positiva a $j>0$: si accetta l'ultimo $z^{(j)}$, costruito su direzioni a curvatura positiva.

Si dimostra che in tutti e tre i casi $p_{TN}^{(k)}$ è una direzione di discesa.

## Come si usa
È la versione da usare **con solutori iterativi** per problemi di grande scala, mentre il Newton modificato si usa con i solutori diretti. Non serve fattorizzare né formare esplicitamente $B_k$: bastano i prodotti $B_kd$.

## Nei corsi
- **Numerical opt** (magistrale): algoritmo completo nelle note, che avvertono che differisce leggermente da quello della 1ª edizione di Nocedal-Wright: seguire le note. Fonti: `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 25-29).

## Prerequisiti
- [[Metodo di Newton inesatto]]: criterio di arresto con termine forzante $\eta_k$
- [[Metodo del gradiente coniugato]]: il solutore interno, con test di curvatura

## Collegati
- [[Metodo di Newton modificato]]: stessa finalità, ma con solutori diretti
- [[Metodo del gradiente]]: direzione di ripiego $-\nabla f$ (caso $j=0$)
- [[Backtracking line search]]: scelta del passo esterno
