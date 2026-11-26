---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["SIR model", "modello di Kermack-McKendrick", "Kermack-McKendrick model", "suscettibili infetti rimossi", "modello epidemiologico SIR", "SIR epidemics", "SIR su rete", "SIR di campo medio", "numero finale di rimossi"]
tags: [competenza, area/analisi]
---

# Modello SIR

> Sistema di tre ODE (Kermack-McKendrick, 1927) per un'epidemia: suscettibili, infetti e rimossi, con popolazione totale costante.

## Definizione / enunciato
$S(t)$, $I(t)$, $R(t)$ = numero di individui suscettibili, infetti, rimossi al tempo $t$:
$$\begin{cases}\dfrac{dS}{dt}=-\beta SI\\[4pt]\dfrac{dI}{dt}=\beta SI-\gamma I\\[4pt]\dfrac{dR}{dt}=\gamma I\end{cases}\qquad\beta,\gamma>0\ \text{costanti}.$$

## Formule chiave
Sommando: $\frac{d}{dt}(S+I+R)=0$, quindi
$$S(t)+I(t)+R(t)=N_0\quad\Rightarrow\quad R(t)=N_0-(S(t)+I(t)).$$
In forma vettoriale (L02 p. 1): $x=(S,I,R)\in\mathbb R^3$ e
$$\frac{dx}{dt}=f(t,x),\qquad f(t,x)=\begin{pmatrix}-\beta x_1x_2\\\beta x_1x_2-\gamma x_2\\\gamma x_2\end{pmatrix}.$$
$f$ non dipende da $t$: il sistema è **autonomo**.

## Intuizione
Il contagio è proporzionale agli incontri tra suscettibili e infetti ($\beta SI$); gli infetti guariscono o vengono rimossi a tasso $\gamma$. La conservazione di $N_0$ permette di ridurre il sistema a due equazioni.

## Come si usa
È l'esempio con cui il corso introduce la forma generale $\dot x=f(t,x)$ di un sistema di ODE. Poiché $f$ è polinomiale, è localmente lipschitziana e il teorema di Cauchy garantisce esistenza e unicità locale (osservazione nostra, non esplicitata a lezione).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/01 - Lezione 03_10_23 (2).pdf` (pp. 3-4); `triennale/ANNO 3/eq fisica matematica/02 - Lezione 04_10_23 (1).pdf` (p. 1).
- **Dinamiche su network** (magistrale): due versioni. (1) **Stocastica su rete**: stati $\{S,I,R\}$, link con orologi di tasso $\beta W_{ij}$ (contagio S→I), nodi con orologi di tasso 1 (rimozione I→R); configurazioni assorbenti $\{S,R\}^{\mathcal V}$; si studia il numero finale $N$ di rimossi partendo da un solo infetto. Sulla linea: $\mathbb P(N\ge k)=(\beta/(1+\beta))^{k-1}$, $\mathbb P(N=k)=\beta^{k-1}/(1+\beta)^k$ per $1\le k<n$, $\mathbb P(N=n)=(\beta/(1+\beta))^{n-1}$. Sulla stella con il centro infetto: $\mathbb P(N=1)=\frac1{1+(n-1)\beta}$, $\mathbb P(N\ge k+1)=\frac{(n-k)\beta}{1+(n-k)\beta}\mathbb P(N\ge k)$, $\mathbb P(N=k+1\mid N\ge k+1)=\frac1{1+(n-k-1)\beta}$. (2) **Campo medio** sul grafo completo con $\beta=\alpha/n$, stati $0,1,2$ (S, I, R), $\Psi_{01}(\theta)=\alpha\theta_1$, $\Psi_{12}=1$: limite idrodinamico $\dot z_0=-\alpha z_0z_1$, $\dot z_1=\alpha z_0z_1-z_1$, $\dot z_2=z_1$, cioè il sistema di Kermack-McKendrick con $\gamma=1$ e frazioni di popolazione. Fonti: `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 3, 15, 27, 77-84); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (p. 55).

## Prerequisiti
- [[Problema di Cauchy]]: sistema di ODE con dati iniziali

## Collegati
- [[Modello di Verhulst]]: altro modello di popolazione con ODE
- [[Teorema di esistenza e unicità locale]]: SIR è l'esempio di forma ẋ = f(t,x) a cui si applica
- [[Sistemi di interazione a coppie]]: versione stocastica su rete (Dinamiche su network)
- [[Teorema di Kurtz]]: le ODE sono il limite idrodinamico della versione stocastica (Dinamiche su network)
