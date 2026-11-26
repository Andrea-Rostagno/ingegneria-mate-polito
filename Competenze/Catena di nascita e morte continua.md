---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: [continuous-time birth and death chain, birth-death CTMC, catena birth-death a tempo continuo, CT B&D chain]
tags: [competenza, area/probabilita]
---

# Catena di nascita e morte continua

> CTMC su un intervallo di interi che salta solo ai vicini; la stazionaria si scrive in forma chiusa come prodotto di rapporti fra tassi di nascita e di morte.

## Definizione / enunciato
CTMC la cui embedded è una catena di nascita e morte, su $S=\{a,\dots,b\}$ ($b$ eventualmente $\infty$), con
$$q(j,j+1)=\alpha_j\ (a\le j<b),\qquad q(j,j-1)=\beta_j\ (a<j\le b),\qquad \lambda(j)=\alpha_j+\beta_j,$$
$\beta_a=0$, $\alpha_b=0$. Embedded: $r(j,j+1)=\frac{\alpha_j}{\alpha_j+\beta_j}$, $r(j,j-1)=\frac{\beta_j}{\alpha_j+\beta_j}$.

**Teorema.** Esiste $\gamma\ge0$ con $\gamma Q=0$ e $\sum_j\gamma(j)=1$ se e solo se
$$M=\sum_{j=a}^{b}\prod_{i=a}^{j-1}\frac{\alpha_i}{\beta_{i+1}}<\infty\qquad\Big(\textstyle\prod_{i=a}^{a-1}=1\Big),$$
e allora $\gamma(j)=\frac1M\prod_{i=a}^{j-1}\frac{\alpha_i}{\beta_{i+1}}$. **Se inoltre la catena è non esplosiva**, $\gamma$ è l'unica distribuzione stazionaria.

## Formule chiave
Bilancio dettagliato: $\pi(i)q(i,j)=\pi(j)q(j,i)$; se la CTMC è non esplosiva una $\pi$ bilanciata è stazionaria, e una nascita-morte non esplosiva con stazionaria è sempre bilanciata:
$$\pi(j)\alpha_j=\pi(j+1)\beta_{j+1}.$$

## Intuizione
Ogni "taglio" fra $j$ e $j+1$ è attraversato solo da salti $j\to j+1$ e $j+1\to j$, quindi i flussi devono bilanciarsi coppia per coppia. La misura si ottiene da quella della embedded dividendo per $\lambda(j)$, e i fattori si semplificano.

## Come si usa
1. Escludere l'esplosione (tassi limitati, o embedded ricorrente). 2. Calcolare $M$. 3. Classificare con la embedded.
- Es. 1: $\alpha_j=\alpha$, $\beta_j=\beta$, $\alpha<\beta$: $M=\frac1{1-\alpha/\beta}$, $\pi(j)=(1-\frac\alpha\beta)(\frac\alpha\beta)^j$.
- Es. 2: $\alpha_j=2\cdot3^j$, $\beta_j=3^j$: $M=3$, ma la embedded è una passeggiata riflessa con $p=2/3$, transiente, quindi la catena **esplode** e $\gamma$ non è stazionaria.
- Es. G: tassi limitati, $M=\infty$, embedded ricorrente: stati ricorrenti nulli.
- Programma, argomento 5: embedded transiente e $M<\infty$ $\Rightarrow$ esplosiva.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 8 ("birth and death chains sia a tempo discreto che a tempo continuo"). Fonti: `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14), `riassunto_del_corso.tex` §Birth-death a tempo continuo (notazione $\lambda_n,\mu_n$; il `.tex` omette l'ipotesi di non esplosività, le slide la richiedono), `topics_2025_26.pdf` (argomenti 5 e 8), `suggested_exercises_CTMC.pdf` (es. G, L, M).
- **Dinamiche su network** (magistrale): su $\{0,\dots,n\}$ finito con $\Lambda_{k,k+1}=\lambda_k$, $\Lambda_{k,k-1}=\mu_k$: $\pi_i=\frac1\zeta\prod_{j=0}^{i-1}\frac{\lambda_j}{\mu_{j+1}}$. Caso costante $\rho=\lambda/\mu$: $\pi_i=\rho^i/(1+\rho+\dots+\rho^n)\to(1-\rho)\rho^i$ per $n\to\infty$ se $\rho<1$, con occupazione media $\rho/(1-\rho)$ e tempo di soggiorno $1/(\mu-\lambda)$ (coda M/M/1). È lo strumento principale nei sistemi epidemici: sul grafo completo il numero di infetti SIS è una nascita-morte con $\lambda_k=\beta k(n-k)$, $\mu_k=k$, e nei modelli di campo medio il processo delle frequenze binarie $Z_1$ è una nascita-morte su $\{0,1/n,\dots,1\}$ con tassi $n(1-z_1)\Psi_{01}(z_1)$ e $nz_1\Psi_{10}(z_1)$. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 50-53); `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 64-65); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (p. 30).

## Prerequisiti
- [[Generatore di una CTMC]]: tassi di nascita e di morte
- [[Bilancio dettagliato]]: stazionaria come prodotto di rapporti

## Porta a
- [[Coda M-M-1]]: nascita-morte con tassi costanti
- [[Coda M-M-infinito]]: tasso di morte proporzionale a $n$
- [[Epidemia SIS su rete]]: numero di infetti sul grafo completo (Dinamiche su network)
- [[Sistemi multi-agente anonimi]]: frequenza empirica nel caso binario (Dinamiche su network)

## Collegati
- [[Catena di nascita e morte discreta]]: versioni a tempo discreto e continuo
- [[Esplosione di una CTMC]]: criterio di esplosione per nascita-morte
