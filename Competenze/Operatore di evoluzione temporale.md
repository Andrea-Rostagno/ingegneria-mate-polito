---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["time-evolution operator", "propagatore", "propagator", "soluzione formale dell'equazione di Schrödinger", "formal solution", "serie di Neumann", "Neumann series", "evoluzione unitaria"]
tags: [competenza, area/fisica]
---

# Operatore di evoluzione temporale

> L'operatore unitario $U_t=e^{-itH/\hbar}$ trasporta lo stato iniziale allo stato al tempo $t$; è la soluzione formale dell'equazione di Schrödinger e conserva la norma.

## Definizione / enunciato
Per $H$ indipendente dal tempo, dato $\psi(\vec x,0)$,
$$\psi(\vec x,t)=e^{-itH/\hbar}\psi(\vec x,0)=\sum_{s=0}^\infty\frac{(-it)^sH^s}{\hbar^s s!}\psi(\vec x,0).$$
Derivando la serie termine a termine si verifica $i\hbar\partial_t\psi=H\psi$. Su un autostato $H\psi_E=E\psi_E$ si ha $F(H)\psi_E=F(E)\psi_E$, quindi si ritrova $e^{-iEt/\hbar}\psi_E$; sviluppando lo stato iniziale sugli autostati si ritrova la soluzione generale.
**Unitarietà:** $U_t^+=e^{+itH^+/\hbar}=e^{+itH/\hbar}=U_t^{-1}$ grazie a $H=H^+$, quindi $(\psi(t),\psi(t))=(\psi(0),U_t^+U_t\psi(0))=1$.

## Formule chiave
$$U_t^+U_t=I,\qquad \psi(\vec x,t+\Delta t)\simeq\left(I-\frac{i\Delta t}{\hbar}H\right)\psi(\vec x,t)$$
Hamiltoniana dipendente dal tempo, serie di Neumann (iterando $\psi(t)=\psi(0)+\int_0^tdt_1\frac{H(t_1)}{i\hbar}\psi(t_1)$):
$$\psi(\vec x,t)=\left[I+\sum_{k=1}^\infty\int_0^tdt_1\frac{H(t_1)}{i\hbar}\int_0^{t_1}dt_2\frac{H(t_2)}{i\hbar}\cdots\int_0^{t_{k-1}}dt_k\frac{H(t_k)}{i\hbar}\right]\psi(\vec x,0)$$
Se $H$ è costante, il $k$-esimo termine si riduce a $\frac{H^kt^k}{(i\hbar)^kk!}$ e si ritrova l'esponenziale.

## Intuizione
L'evoluzione temporale è una "rotazione" nello spazio di Hilbert generata dall'hamiltoniana, come una rotazione spaziale è generata dal momento angolare. Lo schema iterativo è lo stesso che dà la serie geometrica da $S=1+xS$.

## Come si usa
Troncando la serie per tempi piccoli si approssima $\psi(t)$; con gli stati coerenti la serie si somma esattamente e $e^{-itH/\hbar}\psi_{z_0}=e^{-i\omega t/2}\psi_{z_0e^{-i\omega t}}$ (`2022_QP.pdf` p. 95). Da $U_t$ si costruisce la rappresentazione di Heisenberg $A_t=U_t^+AU_t$; dal confronto tra $U(t+\Delta t)$ e lo sviluppo di Taylor si riottiene l'equazione di Schrödinger (p. 139). È anche il punto di partenza dell'integrale sui cammini di Feynman (citato a p. 44).

## Nei corsi
- **Quantum physics** (triennale): §4.4 della dispensa di V. Penna (soluzione formale, unitarietà, serie di Neumann) e §11.5 (propagatore come trasformazione unitaria generata da H). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 44-47, 139).

## Prerequisiti
- [[Stati stazionari]]: su ogni autostato l'operatore è una fase
- [[Operatori quantistici]]: l'hermiticità di H garantisce l'unitarietà

## Porta a
- [[Rappresentazione di Heisenberg]]: $A_t=e^{itH/\hbar}Ae^{-itH/\hbar}$
- [[Stati coerenti]]: evoluzione esatta di uno stato coerente

## Collegati
- [[Trasformazione unitaria]]: è la trasformazione unitaria generata da H
- [[Serie numerica]]: sviluppo in serie dell'esponenziale di un operatore
