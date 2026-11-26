---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["HMC", "Hybrid Monte Carlo", "Monte Carlo hamiltoniano", "leap-frog", "leapfrog", "integratore leap-frog"]
tags: [competenza, area/statistica]
---

# Hamiltonian Monte Carlo

> Metropolis con una proposta "furba": si introduce un momento ausiliario e si segue la dinamica hamiltoniana con il leap-frog, così da proporre punti lontani accettati con probabilità alta, anche in dimensione elevata.

## Definizione / enunciato
Per campionare da $f(\boldsymbol\theta\mid\mathbf y)$, $\boldsymbol\theta\in\mathbb R^d$, si introduce un vettore latente $\mathbf p$ della stessa dimensione con $f(\mathbf p)\propto\exp(-\mathbf p'\mathbf p/2)$ e si campiona da $f(\mathbf p)f(\boldsymbol\theta\mid\mathbf y)$. La **hamiltoniana** è
$$H(\mathbf p,\boldsymbol\theta)=-\log f(\mathbf p)-\log f(\boldsymbol\theta\mid\mathbf y)=K(\mathbf p)+V(\boldsymbol\theta),$$
energia cinetica più potenziale, e $f(\mathbf p)f(\boldsymbol\theta\mid\mathbf y)\propto\exp(-H(\mathbf p,\boldsymbol\theta))$. Il moto segue
$$\frac{d\boldsymbol\theta}{dt}=\frac{\partial K(\mathbf p)}{\partial\mathbf p},\qquad\frac{d\mathbf p}{dt}=-\frac{\partial V(\boldsymbol\theta)}{\partial\boldsymbol\theta}.$$

## Formule chiave
**Leap-frog** con passo $\epsilon$:
$$\mathbf p\leftarrow\mathbf p-\frac\epsilon2\frac{\partial V(\boldsymbol\theta)}{\partial\boldsymbol\theta},\qquad\boldsymbol\theta\leftarrow\boldsymbol\theta+\epsilon\mathbf p,\qquad\mathbf p\leftarrow\mathbf p-\frac\epsilon2\frac{\partial V(\boldsymbol\theta)}{\partial\boldsymbol\theta}.$$
Un passo: scegliere $\epsilon$; generare $\mathbf p^b\sim N(\mathbf 0,\mathbf I)$; fare $L$ iterazioni di leap-frog ottenendo $(\mathbf p^*,\boldsymbol\theta^*)$; accettare con probabilità
$$\alpha\bigl((\mathbf p^b,\boldsymbol\theta^b),(\mathbf p^*,\boldsymbol\theta^*)\bigr)=\min\{1,\exp(H(\mathbf p^b,\boldsymbol\theta^b)-H(\mathbf p^*,\boldsymbol\theta^*))\}.$$

## Intuizione
Con le equazioni di Hamilton esatte $H$ si conserverebbe e si accetterebbe sempre; il leap-frog introduce un piccolo errore, quindi $\alpha$ è vicino a 1 ma non uguale. Con $L$ grande i campioni sono quasi indipendenti pur accettando molto. La proposta è **deterministica**: nel rapporto andrebbe lo jacobiano della trasformazione, che vale 1 perché il leap-frog non cambia i volumi.

## Come si usa
Alternativa al Gibbs (o un suo singolo passo) quando i blocchi sono grandi e il Metropolis accetterebbe poco: funziona in qualsiasi dimensione e permette di aggiornare tutta la posteriori insieme. Limite: vale solo per variabili continue.

## Nei corsi
- **Statistica computazionale** (magistrale): sezione "Hamiltonian Monte Carlo" degli algoritmi MCMC. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 37-41).

## Prerequisiti
- [[Algoritmo di Metropolis-Hastings]]: HMC è un Metropolis con proposta speciale
- [[Equazioni di Hamilton]]: la dinamica usata per proporre

## Collegati
- [[Gibbs sampler]]: alternativa o passo interno
- [[Metodo dello jacobiano]]: correzione per proposte deterministiche, qui pari a 1
- [[Metropolis adattivo]]: altra soluzione al problema della scelta della proposta
