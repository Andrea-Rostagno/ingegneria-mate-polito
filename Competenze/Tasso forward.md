---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [forward rate, tasso a termine, tasso forward implicito, "y(0,t,T)", FRA, forward rate agreement, fattore di sconto forward]
tags: [competenza, area/finanza]
---

# Tasso forward

> Il tasso che si può bloccare oggi per un prestito su un periodo futuro $[t,T]$, implicito nella curva dei tassi spot.

## Definizione / enunciato
Il **tasso forward** in $0$ per $[t,T]$ è $y(0,t,T)$ con (def. c04-tasso-forward)
$$e^{-y(0,T)T}=e^{-y(0,t)t}\,e^{-y(0,t,T)(T-t)},\qquad y(0,t,T)=\frac{y(0,T)\,T-y(0,t)\,t}{T-t},$$
cioè $e^{-y(0,t,T)(T-t)}=B(0,T)/B(0,t)$.

**Forward e spot** (prop. c04-forward-spot): per $0<t<T$
1. $y(0,t,T)-y(0,T)=\frac{t}{T-t}\big(y(0,T)-y(0,t)\big)$: con curva crescente i forward stanno sopra la curva spot, con curva decrescente sotto;
2. con $f_k=y(0,t_{k-1},t_k)$, $\ y(0,t_n)\,t_n=\sum_kf_k(t_k-t_{k-1})$: lo spot è la media dei forward pesata con le durate.

## Formule chiave
Con tassi annui composti: $(1+y(0,T))^T=(1+y(0,t))^t(1+y(0,t,T))^{T-t}$.

## Intuizione
Il forward è un tasso **fissato oggi**, non una previsione del tasso spot futuro $y(t,T)$, che è aleatorio. Si blocca comprando ZCB a scadenza $t$ e finanziandosi fino a $T$.

## Come si usa
Esempio del libro: prestito di 100000 tra un anno per un anno, $y(0,1)=8\%$, $y(0,2)=9\%$. Si comprano ZCB a un anno per $92311.63$ prendendo a prestito la stessa somma a due anni; in $t=2$ si restituiscono $110517$: tasso $\ln(1.10517)=10\%=y(0,1,2)$. Tassi zero 2, 3, 3.7, 4.2, 4.5% a 1-5 anni: forward 4.0, 5.1, 5.7, 5.7%. Da $B(0,1)=0.95$, $B(0,2)=0.90$: $y(0,1,2)=\ln(0.95/0.90)=5.407\%$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 4 §Tassi forward, def. c04-tasso-forward, prop. c04-forward-spot. Fonti: `Libri/Financial engineering/capitoli/cap04.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/12 - lez 06 marzo a - struttura a termine yield.pdf`.

## Prerequisiti
- [[Struttura a termine dei tassi]]: forward implicito nei tassi spot
- [[Zero-coupon bond]]: rapporto dei fattori di sconto

## Collegati
- [[Prezzo forward]]: stessa logica di "bloccare oggi" un prezzo futuro
- [[Bootstrap della curva dei tassi]]: i forward si calcolano dalla curva costruita
