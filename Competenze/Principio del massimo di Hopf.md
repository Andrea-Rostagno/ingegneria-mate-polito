---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Hopf's lemma", "lemma di Hopf", "principio di Hopf", "condizione della palla interna", "interior ball condition"]
tags: [competenza, area/analisi]
---

# Principio del massimo di Hopf

> Se una funzione armonica non costante raggiunge il massimo in un punto del bordo dove si può appoggiare una palla interna, la sua derivata normale esterna lì è strettamente positiva.

## Definizione / enunciato
**Teorema 3.5.14 (forma forte).** Sia $\Omega\subset\mathbb R^n$ aperto connesso limitato con $\partial\Omega$ di classe $C^1$, $u\in C^2(\Omega)\cap C^1(\overline\Omega)$ armonica e non costante. Sia $x_0\in\partial\Omega$ con $u(x_0)\ge u(x)$ per ogni $x\in\Omega$ (quindi $u(x_0)>u(x)$ per il principio del massimo forte), e supponiamo esista una palla aperta $B\subset\Omega$ con $x_0\in\partial B$. Allora $\partial_\nu u(x_0)>0$.

**Teorema 3.5.15 (forma debole).** Sia $\Omega$ aperto, $u$ armonica, $x_0\in\partial\Omega$ con $\lim_{x\to x_0}u(x)=:u(x_0)$ e $u(x)<u(x_0)$ in $\Omega$; esista $B\subset\Omega$ palla con $x_0\in\partial B$, $\nu$ normale esterna a $B$ in $x_0$. Allora
$$\liminf_{t\to0^+}\frac{u(x_0-t\nu)-u(x_0)}{-t}>0.\qquad(3.39)$$

## Formule chiave
Dimostrazione ($n>2$, $B=B_R$ centrata nell'origine): funzione barriera, armonica nell'anello $B_R\setminus B_{R/2}$,
$$v(x)=u(x_0)-\varepsilon\Big(\frac1{|x|^{n-2}}-\frac1{R^{n-2}}\Big).$$
Su $\partial B_R$: $v=u(x_0)\ge u$; su $\partial B_{R/2}$: $v=u(x_0)-\varepsilon(2^{n-2}-1)/R^{n-2}$, che supera $\max u$ per $\varepsilon$ piccolo. Il principio del massimo debole su $u-v$ dà $u\le v$ nell'anello e, poiché $u(x_0)=v(x_0)$,
$$\liminf_{t\to0^+}\frac{u(x_0-t\nu)-u(x_0)}{-t}\ge\partial_\nu v(x_0)>0.$$

## Intuizione
La barriera è una soluzione fondamentale traslata e riscalata: confrontando $u$ con essa si "spinge" la pendenza di $u$ al bordo lontano da zero. La palla interna impedisce che il bordo abbia cuspidi in cui la derivata normale potrebbe annullarsi.

## Come si usa
Gli appunti (§3.7) propongono di usarlo per l'unicità a meno di costanti del problema di Neumann, su $\Omega$ connesso con la condizione della palla interna. Ragionamento nostro, non svolto nella fonte: la differenza $w$ di due soluzioni è armonica con $\partial_\nu w=0$; se non fosse costante, nel punto di massimo al bordo si avrebbe $\partial_\nu w>0$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.5, Teor. 3.5.14 (solo enunciato, Lezione 8) e Teor. 3.5.15 (con dimostrazione). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 34-35, 38).

## Prerequisiti
- [[Principio del massimo per le funzioni armoniche]]: debole per il confronto, forte per la stretta disuguaglianza
- [[Soluzione fondamentale del laplaciano]]: la barriera ha la forma di $1/|x|^{n-2}$

## Collegati
- [[Derivata direzionale]]: la tesi riguarda la derivata nella direzione normale
- [[Problema ai limiti]]: unicità a meno di costanti per le condizioni di Neumann
