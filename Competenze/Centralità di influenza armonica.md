---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["harmonic influence centrality", "optimal targeting", "targeting ottimo", "problema di piazzamento dei testardi", "optimal stubborn placement"]
tags: [competenza, area/network]
---

# Centralità di influenza armonica

> Quanto riesce a spostare l'opinione media della rete un agente testardo con opinione 1 contro uno con opinione 0: si scrive con le resistenze efficaci e risponde al problema di dove piazzare un testardo.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ non orientato senza cappi; due testardi $v_0\neq v_1$ con $u_{v_0}=0$, $u_{v_1}=1$; $x$ vettore delle opinioni asintotiche. **Centralità di influenza armonica**:
$$H(v_0,v_1)=\frac1n\sum_{i\in\mathcal V}x_i\in[0,1].$$
**Teorema.**
1. $$H(v_0,v_1)=\frac12+\frac{\frac1n\sum_iR^{\mathcal G}_{iv_0}-\frac1n\sum_iR^{\mathcal G}_{iv_1}}{2R^{\mathcal G}_{v_0v_1}};$$
2. per il problema $\min_{v_0\in\mathcal V}\max_{v_1\in\mathcal V\setminus\{v_0\}}H(v_0,v_1)$ la scelta ottima di $v_0$ minimizza $\sum_iR^{\mathcal G}_{iv_0}$;
3. con questa scelta $H(v_0,v_1)\le1/2$: chi piazza per primo il testardo ha un vantaggio.

## Formule chiave
Le opinioni $x$ risolvono il problema di Dirichlet $(Lx)_{|\mathcal R}=0$, $x_{v_0}=0$, $x_{v_1}=1$, cioè sono le tensioni della rete elettrica con quei valori fissati.

## Intuizione
Un testardo "vicino a tutti" in senso elettrico (piccola resistenza media verso gli altri nodi) attira l'opinione media verso di sé. Il primo che sceglie si mette nel nodo elettricamente più centrale e l'avversario non può fare meglio di pareggiare.

## Come si usa
Problemi di targeting ottimo (marketing, campagne di opinione): si calcolano le resistenze efficaci $R_{iv}$ per ogni nodo candidato e si sceglie quello che minimizza $\sum_iR_{iv}$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 6, "Optimal targeting problems". Fonti: `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (p. 59).

## Prerequisiti
- [[Resistenza efficace]]: la formula usa $R^{\mathcal G}_{ij}$
- [[Agenti testardi]]: opinioni asintotiche con due testardi

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Centralità di Bonacich]]: altra centralità legata ai modelli con testardi
