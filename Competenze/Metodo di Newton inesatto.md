---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["inexact Newton method", "Newton inesatto", "INM", "forcing terms", "termini forzanti", "termine forzante", "forcing term", "inexact Newton-tangent method"]
tags: [competenza, area/ottimizzazione]
---

# Metodo di Newton inesatto

> Metodo di Newton in cui il sistema $\nabla^2f(x^{(k)})p=-\nabla f(x^{(k)})$ si risolve con un metodo iterativo fino a una tolleranza relativa $\eta_k$, il termine forzante. La scelta di $\eta_k$ determina l'ordine di convergenza.

## Definizione / enunciato
Per problemi di grandissime dimensioni il sistema di Newton si risolve con un metodo iterativo, arrestato quando
$$\|\nabla^2f(x^{(k)})\,p+\nabla f(x^{(k)})\|\le\eta_k\,\|\nabla f(x^{(k)})\|,\qquad \eta_k>0.$$
La quantità a sinistra è il residuo del sistema lineare; $\eta_k$ fissa la tolleranza sul residuo relativo.

**Teorema** (NW 6.1-6.2, risultato locale). Sia $f$ sufficientemente regolare vicino a un minimo $x^*$ con $\nabla^2f(x^*)$ definita positiva. Sia $x^{(k+1)}=x^{(k)}+p_{IN}^{(k)}$ con $p_{IN}^{(k)}$ che soddisfa il criterio sopra. Se $x^{(0)}$ è abbastanza vicino a $x^*$:
1. se $0<\eta_k\le\eta<1$ (fissato), $x^{(k)}\to x^*$ con convergenza lineare;
2. se inoltre $\eta_k\to0$, la convergenza è superlineare;
3. se inoltre $\eta_k=O(\|\nabla f(x^{(k)})\|)$, la convergenza è quadratica.

## Formule chiave
Scelte tipiche:
$$\eta_k=0.5\ \text{(lineare)},\qquad \eta_k=\min\big(0.5,\sqrt{\|\nabla f(x^{(k)})\|}\big)\ \text{(superlineare)},\qquad \eta_k=\min\big(0.5,\|\nabla f(x^{(k)})\|\big)\ \text{(quadratica)}.$$
Il $\min$ con $0.5$ è una salvaguardia che garantisce $\eta_k\le\eta<1$.

## Intuizione
Lontano da $x^*$ è inutile risolvere il sistema con precisione: si usa una tolleranza alta e un passo economico. Vicino a $x^*$, dove $\|\nabla f\|$ è piccolo, conviene essere accurati. In pratica:
- $\eta_k$ costante dà molte iterazioni esterne e poche interne;
- $\eta_k=O(\|\nabla f\|)$ dà poche iterazioni esterne e molte interne;
- la scelta superlineare è spesso il compromesso migliore.

## Come si usa
- Si combina con backtracking e Armijo per convergere da punti iniziali arbitrari (Zoutendijk).
- Se l'hessiana non è definita positiva si passa al Newton troncato.
- **Attenzione in Matlab:** `pcg` e `gmres` usano il residuo relativo $\|Ax-b\|/\|b\|$. Per ottenere il criterio sopra bisogna tarare la tolleranza.
- **Stessa idea per equazioni non lineari:** $\|J_F(x^{(k)})p+F(x^{(k)})\|\le\eta_k\|F(x^{(k)})\|$, con le stesse tre scelte di $\eta_k$ in funzione di $\|F(x^{(k)})\|$.
- L'ordine si verifica sperimentalmente con la stima $q\approx\log(\|e^{(k+1)}\|/\|e^{(k)}\|)/\log(\|e^{(k)}\|/\|e^{(k-1)}\|)$.

## Nei corsi
- **Numerical opt** (magistrale): teoria nelle lezioni Pieraccini, implementazione nel laboratorio 7 di Della Santa. La dispensa nota che l'ordine osservato dipende anche dal solutore, se questo restituisce residui molto più piccoli della tolleranza. Fonti: `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 17-24); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§7.1-7.2, §8.2.1); codice d'esempio `DellaSanta/labs/innewton_bcktrck.m`, `innewtonsolve_bcktrck.m`.

## Prerequisiti
- [[Metodo di Newton in ottimizzazione]]: il passo che si approssima
- [[Metodo del gradiente coniugato]]: solutore iterativo interno (`pcg`)
- [[Criteri di arresto dei metodi iterativi]]: il criterio sul residuo con tolleranza adattiva

## Porta a
- [[Metodo di Newton troncato]]: Newton inesatto con CG che gestisce hessiane non definite positive

## Collegati
- [[Ordine di convergenza di un metodo iterativo]]: lineare, superlineare o quadratico secondo $\eta_k$
- [[Metodo di Newton per sistemi]]: versione inesatta del metodo di Newton-tangente
- [[Teorema di Zoutendijk]]: globalizzazione con line search
