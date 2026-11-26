---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Harnack inequality", "teorema di Harnack", "Harnack's convergence theorem", "principio di Harnack"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Harnack

> Per una funzione armonica non negativa, massimo e minimo su un compatto sono confrontabili con una costante che dipende solo dalla geometria: le armoniche positive non possono oscillare troppo.

## Definizione / enunciato
**Teorema 3.5.1 (palla).** Sia $u$ armonica in $B_R$ con $u\ge0$. Se $|x|=r<R$:
$$\frac{1-\frac rR}{\big(1+\frac rR\big)^{n-1}}u(0)\le u(x)\le\frac{1+\frac rR}{\big(1-\frac rR\big)^{n-1}}u(0).\qquad(3.32)$$
**Lemma 3.5.4.** Dato $r\in(0,R)$ esiste $c(r,R)>0$ con $\sup u\le c(r,R)\inf u$ per ogni armonica $u\ge0$ in $B_R$, con $c(r,R)=(R+r)^n/(R-r)^n$ (la fonte scrive sup e inf su $B_R$; dal contesto sulla palla di raggio $r$, da verificare sul PDF). Per $r=R/2$: $c=3^n$.

**Lemma 3.5.6.** Se $\Omega$ è aperto connesso e $K\subset\Omega$ compatto, esiste $c(K,\Omega)>0$ tale che per ogni $u\ge0$ armonica in $\Omega$
$$\max_Ku\le c(K,\Omega)\min_Ku.\qquad(3.34)$$
**Teorema 3.5.7 (Harnack).** Se $u_k$ armoniche in $\Omega$ connesso, $u_k\le u_{k+1}$, e $\sup_ku_k(x_0)<+\infty$ in un punto $x_0$, allora $u_k\to u$ uniformemente sui compatti, con $u$ armonica.

## Formule chiave
Dimostrazione di (3.32): formula di Poisson su $\partial B_{R'}$, $R'\in(r,R)$, con $|x-y|\ge R'-r$ e la media di superficie:
$$u(x)\le\frac1{R'\sigma_{n-1}}\int_{\partial B_{R'}}\frac{(R')^2-r^2}{(R'-r)^n}u(y)\,d\sigma(y)=(R')^{n-2}\frac{R'+r}{(R'-r)^{n-1}}\,\Big(\text{media di }u\text{ su }\partial B_{R'}\Big),$$
dove la media vale $u(0)$; per $R'\to R$ si ottiene il membro destro di (3.32); il sinistro con $|x-y|\le R'+r$. Lemma 3.5.6: si ricopre $K$ con $m$ palle di raggio $R/2$ e si concatena (3.35) lungo una catena di palle, ottenendo $c(K,\Omega)=3^{mn}$. Teor. 3.5.7: $\max_K|u_k-u_h|\le c(K,\Omega)(u_k(x_0)-u_h(x_0))$, condizione di Cauchy uniforme.

## Intuizione
Una armonica positiva è media di valori positivi: se fosse piccolissima in un punto, sarebbe piccola su tutta una palla attorno, e con una catena di palle su tutto il compatto. La costante dipende dalla forma di $K$ e di $\Omega$ tramite il numero di palle.

## Come si usa
- Liouville "dal basso" (Teor. 3.5.3): se $u$ armonica in $\mathbb R^n$ e $u\ge m$, Harnack per $u-m$ e $R\to\infty$ danno $u(x)=u(0)$.
- Teorema 3.5.7: esistenza di limiti di successioni monotone di armoniche.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.5 "La disuguaglianza di Harnack" (Teor. 3.5.1, Oss. 3.5.2, Teor. 3.5.3, Lemmi 3.5.4 e 3.5.6, Oss. 3.5.5, Teor. 3.5.7; Lezioni 6-7). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 30-34).

## Prerequisiti
- [[Nucleo di Poisson per la palla]]: rappresentazione di $u$ sulla sfera $\partial B_{R'}$
- [[Proprietà di media delle funzioni armoniche]]: l'integrale sulla sfera vale $u(0)$
- [[Convergenza di successioni di funzioni armoniche]]: armonicità del limite nel Teor. 3.5.7

## Porta a
- [[Teorema di Liouville]]: versione per armoniche limitate dal basso

## Collegati
- [[Compattezza in spazi metrici]]: sottoricoprimento finito di $K$ con palle
