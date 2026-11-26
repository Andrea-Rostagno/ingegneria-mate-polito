---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Heisenberg picture", "Heisenberg representation", "rappresentazione di Schrödinger", "Schrödinger picture", "equazione di Heisenberg", "Heisenberg equation of motion", "operatori dipendenti dal tempo"]
tags: [competenza, area/fisica]
---

# Rappresentazione di Heisenberg

> Descrizione dell'evoluzione temporale in cui gli stati restano fissi e gli operatori evolvono, $A_t=e^{itH/\hbar}Ae^{-itH/\hbar}$, secondo l'equazione di Heisenberg $\frac{dA_t}{dt}=\frac{1}{i\hbar}[A_t,H]+\partial_tA_t$.

## Definizione / enunciato
**Schrödinger:** gli stati evolvono, $\psi(t)=e^{-itH/\hbar}\psi(0)$, gli operatori sono fissi; $\langle A\rangle_t=\sum_{rs}c_r^*(0)c_s(0)e^{it(E_r-E_s)/\hbar}A_{rs}$ nella base dell'energia.
**Heisenberg:** riscrivendo $\langle A\rangle_t=(\psi_0e^{-itH/\hbar},Ae^{-itH/\hbar}\psi_0)=(\psi_0,A_t\psi_0)$ tutta la dipendenza dal tempo passa nell'operatore
$$A_t=e^{+itH/\hbar}A\,e^{-itH/\hbar}.$$
Derivando si ottiene l'equazione di Heisenberg.

## Formule chiave
$$\frac{d}{dt}A_t=\frac{1}{i\hbar}[A_t,H]+\frac{\partial}{\partial t}A_t,\qquad H_t=H$$
$$[A_t,H]=0\iff[A,H]=0\ \Rightarrow\ A_t\ \text{costante del moto}$$
Analogo classico: $\dot f=\{f,H\}+\partial_tf$.

## Intuizione
Le due rappresentazioni sono equivalenti (danno gli stessi valori medi), ma Heisenberg rende evidente il parallelo con la meccanica hamiltoniana: le leggi di conservazione classiche si estendono a quella quantistica con le parentesi di Poisson sostituite dai commutatori. $H$ non evolve perché commuta con sé stessa, $H(x_t,p_t)=H$.

## Come si usa
Per tempi lunghi i termini con $r\ne s$ in $\langle A\rangle_t$ oscillano rapidamente e si possono trascurare: $\langle A\rangle_t\simeq\sum_s|c_s(0)|^2A_{ss}$. Con $|c_s(0)|^2=e^{-\beta E_s}/Z$ si ritrova la formula della meccanica statistica quantistica $\langle A\rangle=\mathrm{Tr}(\rho A)$, $\rho=e^{-\beta H}/Z$ (`2022_QP.pdf` p. 135).

## Nei corsi
- **Quantum physics** (triennale): §11.4 della dispensa di V. Penna. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 134-136).

## Prerequisiti
- [[Operatore di evoluzione temporale]]: $A_t=U_t^+AU_t$
- [[Trasformazione unitaria]]: gli operatori si trasformano con una matrice unitaria
- [[Teorema di Ehrenfest]]: l'evoluzione dei valori medi

## Porta a
- Nessuno.

## Collegati
- [[Parentesi di Poisson]]: l'equazione di Heisenberg è l'analogo di $\dot f=\{f,H\}+\partial_tf$
- [[Modello cinetico del gas ideale]]: pesi di Boltzmann $e^{-\beta E}$ nelle medie statistiche
