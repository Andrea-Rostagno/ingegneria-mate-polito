---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["quantization of the electromagnetic field", "field quantization", "stati di Fock", "Fock states", "fotoni come eccitazioni del campo", "photons as field excitations", "modi del campo", "field modes", "gauge di Coulomb", "Coulomb gauge"]
tags: [competenza, area/fisica]
---

# Quantizzazione del campo elettromagnetico

> Nel vuoto il potenziale vettore si scompone in modi di onda piana, ognuno dei quali è un oscillatore armonico: quantizzando con la regola canonica si ottiene $H=\sum_{k\sigma}\hbar\omega_k(b^+_{k\sigma}b_{k\sigma}+\frac12)$, e i numeri di occupazione $n_{k\sigma}$ sono i fotoni.

## Definizione / enunciato
Senza sorgenti, con $\Phi=0$ e $\mathrm{div}\vec A=0$ (**gauge di Coulomb**), $\vec E=-\partial_t\vec A$, $\vec B=\mathrm{rot}\vec A$ e $\vec A$ soddisfa l'equazione di d'Alembert $-\Delta\vec A+\frac{1}{c^2}\partial_t^2\vec A=0$. Sviluppando in onde piane $\vec A=\sum_k a_k(t)e^{i\vec k\cdot\vec x}\vec u_k$:
$$\ddot a_k+c^2k^2a_k=0,\qquad \omega_k^2=c^2k^2,$$
cioè un oscillatore per ogni modo; $\vec k\cdot\vec u_k=0$ lascia due polarizzazioni $\vec u_{k\sigma}$, $\sigma=1,2$, e la realtà di $\vec A$ lega i modi $\vec k$ e $-\vec k$.

## Formule chiave
$$H=\int_Vd^3x\left(\frac{\varepsilon_0}{2}E^2+\frac{1}{2\mu_0}B^2\right)=\sum_{k\sigma}2\varepsilon_0\omega_k^2L^3|B_{k\sigma}|^2=\sum_{k\sigma}\hbar\omega_k|b_{k\sigma}|^2,\quad b_{k\sigma}=\left(\frac{2L^3\varepsilon_0\omega_k}{\hbar}\right)^{1/2}B_{k\sigma}$$
$$\{b_{k\sigma},b^*_{n\gamma}\}=\frac{1}{i\hbar}\delta_{\sigma\gamma}\delta_{kn}$$
$$[b_{k\sigma},b^+_{n\gamma}]=\delta_{\sigma\gamma}\delta_{kn},\qquad H=\sum_{k\sigma}\hbar\omega_k\left(b^+_{k\sigma}b_{k\sigma}+\tfrac12\right)$$
$$|\mathbf n\rangle=\prod_{s,k}|n_{s,k}\rangle,\qquad E(\{n_{s,k}\})=E_0+\sum_{s,k}\hbar\omega_kn_{s,k}$$
## Intuizione
Il campo elettromagnetico è un insieme infinito di oscillatori indipendenti. Ogni modo $(k,\sigma)$ ha un operatore numero $\hat n_{s,k}=b^+_{s,k}b_{s,k}$: lo stato $|n_{s,k}\rangle$ contiene $n_{s,k}$ fotoni di energia $\hbar\omega_k$. Il termine $1/2$ è l'energia di punto zero dello stato fondamentale.

## Come si usa
Le parentesi di Poisson per $b,b^*$ si ricavano da quelle canoniche $\{q_k,p_k\}=\delta$ con $q_k\propto(b_k+b_k^*)$, $p_k\propto i(b_k^*-b_k)$, e riproducono $\dot b_q=-i\omega_qb_q$, cioè le equazioni del moto del modo; la simmetrizzazione $b^*b\to\frac12(b^+b+bb^+)$ fissa l'ordinamento (`2022_QP.pdf` pp. 183-185). Il calcolo di $\int E^2$ e $\int B^2$ con i modi è svolto a pp. 186-187.

## Nei corsi
- **Quantum physics** (triennale): cap. 16 della dispensa di V. Penna (riduzione a oscillatori, quantizzazione, stati di Fock). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 181-187).

## Prerequisiti
- [[Equazioni di Maxwell]]: dinamica classica del campo
- [[Equazione delle onde]]: d'Alembert per il potenziale vettore
- [[Oscillatore armonico quantistico]]: ogni modo è un oscillatore
- [[Quantizzazione canonica]]: le parentesi di Poisson diventano commutatori

## Porta a
- [[Modello di Jaynes-Cummings]]: un singolo modo del campo che interagisce con un atomo

## Collegati
- [[Quantizzazione dell'energia e fotoni]]: il fotone di energia ħω come quanto del campo
- [[Onde elettromagnetiche]]: modi di onda piana trasversali con due polarizzazioni
- [[Stati coerenti]]: stati di ogni modo con comportamento classico
