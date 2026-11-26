---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Poisson brackets", "parentesi di Poisson canoniche", "canonical Poisson brackets", "costante del moto", "constant of motion", "identità di Jacobi"]
tags: [competenza, area/fisica]
---

# Parentesi di Poisson

> Operazione bilineare tra funzioni delle variabili canoniche che dà la loro evoluzione temporale: $\dot A=\{A,H\}$; se $\{A,H\}=0$, $A$ è una costante del moto.

## Definizione / enunciato
Per $A(q,p)$, usando le equazioni di Hamilton,
$$\frac{dA}{dt}=\sum_k\left(\frac{\partial A}{\partial q_k}\frac{\partial H}{\partial p_k}-\frac{\partial H}{\partial q_k}\frac{\partial A}{\partial p_k}\right),$$
che definisce le parentesi di Poisson canoniche di due funzioni qualsiasi.

## Formule chiave
$$\{A,B\}=\sum_k\left(\frac{\partial A}{\partial q_k}\frac{\partial B}{\partial p_k}-\frac{\partial B}{\partial q_k}\frac{\partial A}{\partial p_k}\right),\qquad \{x_k,p_j\}=\delta_{kj}$$
Proprietà: $\{A,B\}=-\{B,A\}$; bilinearità; $\{AB,F\}=A\{B,F\}+B\{A,F\}$; identità di Jacobi $\{A,\{B,F\}\}+\{B,\{F,A\}\}+\{F,\{A,B\}\}=0$.
$$\dot q_k=\{q_k,H\},\quad \dot p_k=\{p_k,H\},\qquad \{A,H\}=0\Rightarrow A=\text{costante}$$

## Intuizione
Permettono di scoprire le simmetrie e le grandezze conservate **senza risolvere** le equazioni del moto. La loro struttura algebrica è identica a quella dei commutatori quantistici (a meno del fattore $i\hbar$).

## Come si usa
Per il potenziale centrale $H=p^2/2m+V(r)$ si mostra che $\{L_k,p^2\}=2\varepsilon_{kmn}p_np_m=0$ e $\{L_k,r^2\}=0$, quindi $\{L_k,V(r)\}=\frac{1}{2r}\frac{\partial V}{\partial r}\{L_k,r^2\}=0$ e $\{L_k,H\}=0$, $\{L^2,H\}=0$: $L^2$ e $L_3$ sono costanti del moto (`2022_QP.pdf` pp. 110-112). Per i campi complessi del campo e.m. si definiscono $\{b_{k\sigma},b^*_{n\gamma}\}=\frac{1}{i\hbar}\delta_{\sigma\gamma}\delta_{kn}$ (p. 183).

## Nei corsi
- **Quantum physics** (triennale): §3.1 della dispensa di V. Penna; usate poi nella quantizzazione canonica (§4.3), nel potenziale centrale (§10.1), nel campo magnetico ($\{P_1,P_2\}=qB/c$, p. 153) e nella quantizzazione del campo e.m. (§16). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 27-28, 40-41, 110-112, 183-185).

## Prerequisiti
- [[Equazioni di Hamilton]]: la derivata temporale si calcola con esse

## Porta a
- [[Quantizzazione canonica]]: le parentesi diventano commutatori, $[\,,]=i\hbar\{\,,\}$
- [[Teorema di Ehrenfest]]: analogo quantistico $\frac{d}{dt}\langle A\rangle=\frac1{i\hbar}\langle[A,H]\rangle$
- [[Rappresentazione di Heisenberg]]: l'equazione di Heisenberg ha la stessa forma di $\dot f=\{f,H\}+\partial_tf$

## Collegati
- [[Commutatore di operatori]]: stessa algebra (antisimmetria, Leibniz, Jacobi)
- [[Conservazione del momento angolare]]: $\{L_k,H\}=0$ per forze centrali
