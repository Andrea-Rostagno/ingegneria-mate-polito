---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["Zoutendijk's theorem", "teorema di Zoutendijk", "condizione di Zoutendijk", "Zoutendijk condition", "convergenza globale dei metodi line search"]
tags: [competenza, area/ottimizzazione]
---

# Teorema di Zoutendijk

> Risultato di convergenza globale per i metodi di tipo line search: con passi che soddisfano Wolfe, la serie $\sum_k\cos^2\theta_k\|\nabla f(x^{(k)})\|^2$ converge. Se le direzioni non diventano ortogonali al gradiente, allora $\nabla f(x^{(k)})\to0$ da qualunque punto iniziale.

## Definizione / enunciato
Si consideri un metodo $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p^{(k)}$ per $\min_{x\in\mathbb R^n}f(x)$, in cui:
- $p^{(k)}$ è una direzione di discesa;
- $\alpha^{(k)}>0$ soddisfa le condizioni di Wolfe con $0<c_1<c_2<1$.

Se $f$ soddisfa opportune ipotesi di regolarità (NW, Teorema 3.2), allora
$$\sum_{k=0}^{+\infty}\cos^2\theta^{(k)}\,\|\nabla f(x^{(k)})\|^2<+\infty,\qquad \cos\theta^{(k)}=\frac{-\nabla f(x^{(k)})^Tp^{(k)}}{\|\nabla f(x^{(k)})\|\,\|p^{(k)}\|}.$$

## Formule chiave
Conseguenza: $\cos\theta^{(k)}\,\|\nabla f(x^{(k)})\|\to0$.
**Corollario.** Se $|\cos\theta^{(k)}|\ge\text{cost}>0$ per ogni $k$, allora $\|\nabla f(x^{(k)})\|\to0$.
Per lo steepest descent $p^{(k)}=-\nabla f(x^{(k)})$ si ha $\cos\theta^{(k)}=1$.

## Intuizione
"$\cos\theta$ lontano da 0" vuol dire $\theta$ lontano da $90°$: la direzione non diventa quasi ortogonale al gradiente. È un risultato debole: garantisce che il gradiente tenda a zero, non che $x^{(k)}$ converga a un minimo. Risultati più forti richiedono ipotesi più forti.

## Come si usa
- **Steepest descent con Wolfe:** converge nel senso $\nabla f(x^{(k)})\to0$, indipendentemente da $x^{(0)}$.
- **Newton con line search:** se $\nabla^2 f(x^{(k)})$ è definita positiva, $p_N^{(k)}$ è di discesa e si applica il teorema. Da qui nascono Newton modificato e troncato, che garantiscono direzioni di discesa anche quando l'hessiana non è definita positiva.
- **Newton inesatto con backtracking:** converge da punti iniziali arbitrari.
- In pratica Wolfe è sostituita da Armijo con backtracking.

## Nei corsi
- **Numerical opt** (magistrale): risposta alla domanda "lo steepest descent converge?", come corollario del Teorema 3.2 di Nocedal-Wright. Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 25-27); uso per Newton in `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 5-6, 24-25).

## Prerequisiti
- [[Condizioni di Wolfe]]: ipotesi sul passo
- [[Metodi di discesa]]: ipotesi sulla direzione

## Porta a
- [[Metodo del gradiente]]: convergenza globale dello steepest descent
- [[Metodo di Newton in ottimizzazione]]: convergenza della versione con line search
- [[Metodo di Newton inesatto]]: convergenza da punti iniziali arbitrari con backtracking

## Collegati
- [[Metodo di Newton modificato]]: risultato globale analogo ($\nabla f\to0$) sotto l'ipotesi di condizionamento limitato
