---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["voter model", "modello del voto", "votante", "opinion copying"]
tags: [competenza, area/network]
---

# Modello del votante

> Dinamica di opinione stocastica: quando suona il link $(i,j)$, il nodo $i$ copia l'opinione di $j$. Si arriva sempre al consenso, e la probabilità che vinca un'opinione è la massa della distribuzione Laplace-invariante sui nodi che inizialmente la sostengono.

## Definizione / enunciato
Grafo $\mathcal G=(\mathcal V,\mathcal E,W)$, $\beta>0$, opinioni $X_i(t)\in\mathcal A$. Link con orologi di tasso $\beta W_{ij}$; se suona $(i,j)$:
$$X_i(t)=X_j(t^-),\qquad X_{-i}(t)=X_{-i}(t^-)\quad\text{(copia)}.$$
Nel formalismo a coppie: $\psi=I$, $\varphi(c)=\mathbb 1\delta^{(c)\prime}$. Configurazioni assorbenti: i consensi $c\mathbb 1$, $c\in\mathcal A$.

**Teorema.** Su $\mathcal G$ connesso,
$$\mathbb P_x\Big(\lim_{t\to+\infty}X(t)=a\mathbb 1\Big)=\sum_{i:\,x_i=a}\pi_i,$$
con $\pi$ distribuzione Laplace-invariante di $\mathcal G$ ($L'\pi=0$, $\mathbb 1'\pi=1$).

## Formule chiave
Prova: $p^a_i(t)=\mathbb P_x(X_i(t)=a)$ soddisfa $p^a_i(0)=\delta^{(a)}_{x_i}$ e
$$\frac{d}{dt}p^a_i(t)=\beta\sum_jW_{ij}\big(p^a_j(t)-p^a_i(t)\big),$$
quindi $\frac{d}{dt}\sum_i\pi_ip^a_i(t)=0$; la quantità conservata tende alla probabilità di assorbimento in $a\mathbb 1$.
**Corollario.** Se $\mathcal G$ è connesso e bilanciato (in particolare non orientato), $\pi$ è uniforme e la probabilità è $\frac1n|\{i:x_i=a\}|$.

## Intuizione
Le probabilità marginali evolvono con la dinamica di consenso in tempo continuo $\dot p=-\beta Lp$; la media pesata da $\pi$ si conserva come nel modello di French-DeGroot, che è la versione deterministica del votante.

## Come si usa
Per calcolare la probabilità che vinca un'opinione basta $\pi$: su grafi bilanciati è la frazione iniziale di sostenitori, indipendentemente da dove stanno. Nel limite di campo medio sul grafo completo la deriva è nulla, $\dot z_1=(1-z_1)z_1-z_1(1-z_1)=0$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 8, "Voter model", "Absorbing probabilities for the voter model"; Slides 11 per il campo medio. Fonti: `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 21, 28, 73-74); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (p. 46).

## Prerequisiti
- [[Sistemi di interazione a coppie]]: formalismo e consensi assorbenti
- [[Laplaciano di un grafo]]: distribuzione Laplace-invariante

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Modello di French-DeGroot]]: analogo deterministico con opinioni continue
- [[Dinamica evolutiva su rete]]: copia pesata dalla fitness
