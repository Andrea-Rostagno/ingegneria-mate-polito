---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["time-dependent variational principle", "TDVP", "dinamica semiclassica variazionale", "hamiltoniana efficace", "effective Hamiltonian", "lagrangiana efficace"]
tags: [competenza, area/fisica]
---

# Principio variazionale dipendente dal tempo

> Si sceglie uno stato di prova con parametri dipendenti dal tempo e si impone la forma debole dell'equazione di Schrödinger $\langle\psi|i\hbar\partial_t-H|\psi\rangle=0$: i parametri obbediscono a equazioni di Hamilton classiche con un'hamiltoniana efficace.

## Definizione / enunciato
Esempio di Dirac riportato nella dispensa: per $H=p^2/2m+U(x)$ con $U$ complicato si prova
$$\psi(x)=\Lambda\,e^{i\varphi}e^{i\alpha x}e^{-\frac{(x-\beta)^2}{2\sigma^2}},\qquad \Lambda=\frac{1}{\sqrt{\sigma\sqrt\pi}},$$
onda piana per pacchetto gaussiano, con parametri funzioni del tempo. I valori medi danno il loro significato: $\langle p\rangle$ dato da $\alpha$ (a meno del fattore $\hbar$), $\langle x\rangle=\beta$, $\langle(x-\beta)^2\rangle=\sigma^2/2$.

## Formule chiave
Dalla condizione $\langle\psi|[i\hbar\partial_t-H]|\psi\rangle=0$:
$$-\hbar\dot\varphi=\dot\alpha\beta+\frac{\alpha^2}{2m}+\mathcal U(\beta),\qquad \hbar\varphi=C+\int_0^td\tau\left[\dot\beta\alpha-\frac{\alpha^2}{2m}-\mathcal U(\beta)\right]$$
La fase $\hbar\varphi$ è un'azione efficace con lagrangiana e hamiltoniana
$$\mathcal L=\dot\beta\alpha-\frac{\alpha^2}{2m}-\mathcal U(\beta),\qquad \mathcal H=\frac{\alpha^2}{2m}+\mathcal U(\beta)$$
e la stazionarietà dà $\dot\alpha=-\partial\mathcal H/\partial\beta$, $\dot\beta=\partial\mathcal H/\partial\alpha$ (forma hamiltoniana). Nella dispensa, a p. 192, $\alpha$ compare già come impulso medio; a p. 191 la fase dell'onda piana è scritta $e^{i\alpha x}$ (la convenzione sui fattori $\hbar$ va verificata sul PDF).

## Intuizione
La dinamica quantistica, ristretta a una famiglia di stati, diventa una dinamica classica per i parametri: $\alpha$ fa da impulso e $\beta$ da posizione. Il metodo si generalizza in principio a sistemi quantistici arbitrariamente complessi.

## Come si usa
Il problema quantistico si riformula con le parentesi di Poisson efficaci tra $\beta$ e $\alpha$: $\dot\alpha=\{\alpha,\mathcal H\}$, $\dot\beta=\{\beta,\mathcal H\}$ (`2022_QP.pdf` pp. 191-192).

## Nei corsi
- **Quantum physics** (triennale): appendice B della dispensa di V. Penna. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 191-192).

## Prerequisiti
- [[Metodo variazionale]]: stessa idea di stazionarietà ristretta a una famiglia di stati
- [[Equazioni di Lagrange]]: la fase è un'azione efficace

## Porta a
- Nessuno.

## Collegati
- [[Pacchetto d'onda gaussiano]]: lo stato di prova è un pacchetto gaussiano
- [[Equazioni di Hamilton]]: le equazioni per α e β hanno forma hamiltoniana
- [[Teorema di Ehrenfest]]: anche qui ⟨x⟩ e ⟨p⟩ seguono equazioni classiche efficaci
