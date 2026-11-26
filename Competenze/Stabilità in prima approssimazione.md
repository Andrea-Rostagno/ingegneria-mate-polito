---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["linearization theorem", "stabilità per linearizzazione", "teorema di stabilità in prima approssimazione", "linearizzazione attorno all'equilibrio", "principio di linearizzazione"]
tags: [competenza, area/analisi]
---

# Stabilità in prima approssimazione

> Vicino a un equilibrio di $\dot x=f(x)$ la stabilità si decide dagli autovalori della jacobiana $J_f(\bar x)$, purché la parte non lineare sia trascurabile al primo ordine.

## Definizione / enunciato
**Teorema (L10 pp. 7-8).** Sia $f(\bar x)=0$ e
$$f(x)=A(x-\bar x)+\tilde f(x),\qquad \tilde f(\bar x)=0,\quad\lim_{x\to\bar x}\frac{\|\tilde f(x)\|}{\|x-\bar x\|}=0,$$
con $A\in\mathbb R^{n\times n}$ costante. Allora:
1. se tutti gli autovalori di $A$ hanno parte reale negativa, $\bar x$ è (localmente) asintoticamente stabile;
2. se esiste un autovalore di $A$ con parte reale positiva, $\bar x$ è instabile.

## Formule chiave
Per $f\in C^2$ vicino a $\bar x$: $f(x)=f(\bar x)+J_f(\bar x)(x-\bar x)+H(x,\bar x)$, quindi $A=J_f(\bar x)$ e $\tilde f=H$.
Dimostrazione di 1 (L10 pp. 9-12): con $V(x)=[P(x-\bar x)]\cdot(x-\bar x)$, $PA+A^TP=-I$ e $P$ simmetrica,
$$\frac{d}{dt}V(x(t))=-\|x-\bar x\|^2+2P\tilde f(x)\cdot(x-\bar x)\le\|x-\bar x\|^2\Big(-1+2\|P\|_2\frac{\|\tilde f(x)\|}{\|x-\bar x\|}\Big),$$
negativo se $\frac{\|\tilde f(x)\|}{\|x-\bar x\|}<\frac1{2\|P\|_2}$, cioè vicino a $\bar x$.

## Intuizione
Se la parte principale di $f$ in $\bar x$ è lineare, gli autovalori della linearizzata dominano il comportamento locale. Il teorema non copre il caso di autovalori con parte reale nulla e nessuno con parte reale positiva (osservazione nostra).

## Come si usa
Si trovano gli equilibri ($f(\bar x)=0$), si calcola la jacobiana in ciascuno e se ne guardano gli autovalori: tutti con $\mathrm{Re}<0$ → asintoticamente stabile; uno con $\mathrm{Re}>0$ → instabile; altrimenti il teorema non conclude, e si può provare con una funzione di Lyapunov (osservazione nostra: il caso non è discusso a lezione).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonte `triennale/ANNO 3/eq fisica matematica/10 - Lezione 25_10_23.pdf` (pp. 7-12). Dimostrato solo il punto 1.

## Prerequisiti
- [[Equazione matriciale di Lyapunov]]: fornisce la V quadratica
- [[Teoremi di Lyapunov]]: secondo teorema applicato alla V
- [[Stabilità dei sistemi lineari di ODE]]: criterio sugli autovalori del sistema lineare
- [[Matrice jacobiana]]: A = J_f(x̄)

## Collegati
- [[Condizionamento dei problemi di Cauchy]]: stesso criterio di prima approssimazione per le perturbazioni del dato
