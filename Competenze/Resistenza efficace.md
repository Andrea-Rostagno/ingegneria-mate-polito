---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["effective resistance", "resistenza effettiva", "principio di Thomson", "Thomson's principle", "principio di Rayleigh", "Rayleigh monotonicity principle", "monotonia di Rayleigh"]
tags: [competenza, area/network]
---

# Resistenza efficace

> La differenza di tensione tra $i$ e $j$ quando si immette una corrente unitaria in $i$ e la si preleva in $j$: si calcola con la matrice di Green ed è il minimo dell'energia dissipata tra tutti i flussi unitari da $i$ a $j$.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ non orientato senza cappi. Con $\nu=\delta^{(i)}-\delta^{(j)}$ e tensione $x=Z\nu$:
$$R^{\mathcal G}_{ij}=x_i-x_j=Z_{ii}-Z_{ij}-Z_{ji}+Z_{jj}=Z_{ii}+Z_{jj}-2Z_{ij}.$$
**Teorema (principio di Thomson).**
$$R^{\mathcal G}_{ij}=\min_{f\ge0,\ Bf=\delta^{(i)}-\delta^{(j)}}\ \sum_{(h,k)\in\mathcal E}\frac1{W_{hk}}f_{hk}^2 .$$
**Corollario (principio di Rayleigh).** $R^{\mathcal G}_{ij}$ è monotona decrescente rispetto alle conduttanze $\{W_{hk}\}$.

## Formule chiave
Prova di Thomson con la dualità: $M(\delta^{(i)}-\delta^{(j)})=M^*=-\frac14\sum W_{hk}[\lambda^*_h-\lambda^*_k]^2+\lambda^*_i-\lambda^*_j=-M(\delta^{(i)}-\delta^{(j)})+R^{\mathcal G}_{ij}$, quindi
$$R^{\mathcal G}_{ij}=2M(\delta^{(i)}-\delta^{(j)}).$$
*(Nella slide il minimo è scritto su $f\in\mathbb R^{\mathcal V}_+$; i flussi stanno in $\mathbb R^{\mathcal E}_+$.)*

## Intuizione
La corrente sceglie la distribuzione che dissipa meno energia. Aumentare una conduttanza allarga l'insieme delle "strade economiche", quindi l'energia minima, cioè la resistenza, non può crescere.

## Come si usa
- Si calcola $R_{ij}$ riducendo la rete con leggi serie e parallelo, oppure dalla matrice di Green.
- Rayleigh permette confronti: togliere archi aumenta la resistenza, aggiungerli la diminuisce.
- Nella centralità di influenza armonica la somma $\sum_iR^{\mathcal G}_{iv}$ decide dove piazzare un agente testardo.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 6, "Effective resistance". Fonti: `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 56-58).

## Prerequisiti
- [[Rete elettrica su un grafo]]: tensioni, matrice di Green, potenza dissipata

## Porta a
- [[Centralità di influenza armonica]]: espressa con le resistenze efficaci

## Collegati
- [[Principio variazionale di Dirichlet]]: anche lì la soluzione minimizza un'energia
- [[Dualità lagrangiana]]: la prova passa per il duale del problema di flusso
