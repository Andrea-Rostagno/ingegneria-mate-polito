---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Grönwall's lemma", "lemma di Grönwall", "disuguaglianza di Gronwall", "disuguaglianza di Grönwall", "Gronwall inequality"]
tags: [competenza, area/analisi]
---

# Lemma di Gronwall

> Se una funzione non negativa è controllata da una costante più un multiplo del suo integrale, allora è controllata esplicitamente da una crescita esponenziale.

## Definizione / enunciato
**Lemma (L03 pp. 4-5).** Sia $u:[0,\bar T]\to\mathbb R$, $\bar T>0$, integrabile e non negativa: $u(t)\ge0$ e $\int_0^{\bar T}u(t)\,dt<+\infty$. Se
$$u(t)\le c_1+c_2\int_0^tu(\tau)\,d\tau\qquad\forall t\in[0,\bar T]$$
con $c_1,c_2\ge0$ costanti, allora
$$u(t)\le c_1\big(1+c_2te^{c_2t}\big)\qquad\forall t\in[0,\bar T].$$

## Formule chiave
Dimostrazione: posto $v(t)=\int_0^tu$, si ha $v'\le c_1+c_2v$; moltiplicando per $e^{-c_2t}$,
$$\frac{d}{dt}\big(ve^{-c_2t}\big)\le c_1e^{-c_2t}\le c_1 .$$
Integrando tra 0 e $t$ (con $v(0)=0$): $v(t)\le c_1te^{c_2t}$, e ritornando a $u$: $u\le c_1+c_2v\le c_1(1+c_2te^{c_2t})$.

## Intuizione
È il "fattore integrante" applicato a una disuguaglianza invece che a un'equazione: chi cresce al più come il proprio integrale non può crescere più che esponenzialmente.

## Come si usa
Nella dipendenza continua dai dati: con $u(t)=\|y(t)-x(t)\|$, $c_1=\|y_0-x_0\|$, $c_2=L$ dalla forma integrale si ottiene $\|y(t)-x(t)\|\le\|y_0-x_0\|(1+Lte^{Lt})$ e, passando al sup su $[0,T]$, $\|y-x\|_\infty\le(1+LTe^{LT})\|y_0-x_0\|$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): nella forma con $c_1(1+c_2te^{c_2t})$ (non nella forma $c_1e^{c_2t}$ di molti testi). Fonte: `triennale/ANNO 3/eq fisica matematica/03 - Lezione 06_10_23.pdf` (pp. 4-6).

## Prerequisiti
- [[Teorema fondamentale del calcolo integrale]]: v' = u e integrazione della disuguaglianza

## Porta a
- [[Condizionamento dei problemi di Cauchy]]: stima di dipendenza continua dal dato iniziale

## Collegati
- [[Teorema di esistenza e unicità locale]]: la lipschitzianità di f dà la disuguaglianza integrale di partenza
