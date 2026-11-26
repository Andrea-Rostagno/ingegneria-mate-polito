---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["integral operator", "nucleo integrale", "integral kernel", "T_K"]
tags: [competenza, area/analisi]
---

# Operatore integrale

> L'operatore $T_Kf(x)=\int K(x,y)f(y)\,dy$ definito da un nucleo $K$: è il modello di operatore limitato e compatto, l'analogo continuo di una matrice.

## Definizione / enunciato
Dati $[a,b],[c,d]\subset\mathbb R$ e un **nucleo integrale** $K$, si pone
$$T_Kf(x)=\int_c^dK(x,y)f(y)\,dy.$$
- Se $K\in C([a,b]\times[c,d])$: $T_K\in\mathcal B(C[c,d],C[a,b])$ e $\|T_K\|_{op}\le\sup_x\int_c^d|K(x,y)|\,dy\le(d-c)\|K\|_\infty$.
- Se $K\in L^2((a,b)\times(c,d))$: $T_K\in\mathcal B(L^2(c,d),L^2(a,b))$ con $\|T_K\|_{op}\le\|K\|_{L^2}$; lo stesso vale su spazi di misura $\sigma$-finiti con la misura prodotto.

## Formule chiave
$$T_K^*=T_{K^*},\qquad K^*(y,x)=\overline{K(x,y)}\qquad(\text{Es. 10.4})$$
- Su $L^2$: $T_K$ è **compatto** (Es. 11.15); in particolare $\mathrm{id}_{L^2(I)}$ non è un operatore integrale.
- Su $C$: con $K$ continuo $T_K$ è compatto (Ascoli-Arzelà).

## Intuizione
Una matrice agisce come $(Ax)_j=\sum_ka_{j,k}x_k$; l'operatore integrale sostituisce la somma con un integrale e la matrice con $K$. Il nucleo "regolare" (continuo o $L^2$) liscia la funzione, ed è per questo che l'operatore è compatto.

## Come si usa
Es. 11.29: su $L^2(0,1)$ con $K(x,y)=e^{x-y}=\phi(x)\psi(y)$ si ha $T_Kf=\langle f,\psi\rangle\phi$, quindi $\operatorname{Ker}T_K=\psi^\perp$ e $\phi$ è autovettore con autovalore $\langle\phi,\psi\rangle=\int_0^1e^xe^{-x}dx=1$: $\sigma(T_K)=\sigma_p(T_K)=\{0,1\}$. Gli autospazi non sono ortogonali, quindi $T_K$ non è normale.

## Nei corsi
- **Analisi funzionale** (triennale): Es. 7.8(5)-(7), Es. 10.4(4), Es. 11.15, Es. 11.29; Prop. 6.54 usa la stessa stima. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 92-94, 148, 168, 178-179); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 5); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (p. 4).

## Prerequisiti
- [[Operatore lineare limitato]]: stima della norma
- [[Spazi Lp]]: nucleo e funzioni in L^2
- [[Teorema di Fubini]]: scambio degli integrali nelle stime
- [[Misura prodotto]]: il nucleo K sta in L^2 dello spazio prodotto
- [[Teorema di Ascoli-Arzelà]]: compattezza su C[c,d]

## Collegati
- [[Operatore compatto]]: gli operatori integrali L^2 sono compatti
- [[Operatore aggiunto]]: l'aggiunto ha nucleo trasposto coniugato
- [[Matrice associata a un'applicazione lineare]]: analogo discreto del nucleo
