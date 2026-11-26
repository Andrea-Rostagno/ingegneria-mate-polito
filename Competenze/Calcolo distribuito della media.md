---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["average consensus", "distributed averaging", "consenso sulla media", "calcolo decentralizzato", "decentralized computation", "algoritmi distribuiti di consenso", "lazy random walk matrix"]
tags: [competenza, area/network]
---

# Calcolo distribuito della media

> Usare la dinamica di media come algoritmo: una rete di sensori, comunicando solo con i vicini, calcola la media $\bar x=n^{-1}\sum_ix_i$ delle proprie misure. Qui $P$ è una scelta di progetto.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E)$ non orientato e connesso, ogni unità $i$ ha uno stato $x_i$. Obiettivo: calcolare una funzione globale (media, varianza, max, min, frazione di nodi con $x_i\ge\alpha$) senza supervisione, usando solo i link disponibili, con complessità che scala bene in $n$. Proposta per la media: con $W$ matrice di adiacenza,
$$P=\tfrac12(D^{-1}W+I),\qquad x_i(t+1)=\tfrac12x_i(t)+\frac1{2w_i}\sum_{j\in N_i}x_j(t).$$
$\mathcal G_P=\mathcal G\cup\{\text{cappi}\}$: si comunica solo lungo gli archi, i cappi non costano nulla e rendono il grafo aperiodico.

## Formule chiave
$$x_i(t)\to x^*=\sum_j\pi_jx_j,\qquad \pi_j=\frac{w_j}{|\mathcal E|},$$
quindi $x^*=\bar x$ se e solo se $\mathcal G$ è regolare.
Rimedi se $\mathcal G$ non è regolare:
- due dinamiche parallele $x(t+1)=Px(t)$ con $x_i(0)=x_i/w_i$ e $y(t+1)=Py(t)$ con $y_i(0)=1/w_i$: allora $x_i(t)/y_i(t)\to\bar x$ (esercizio nelle slide);
- trovare $Q$ stocastica **simmetrica** con $\mathcal G_Q\subseteq\mathcal G\cup\{\text{cappi}\}$ aperiodico: $Q\mathbb 1=\mathbb 1$ e $Q'=Q$ danno $\pi=\frac1n\mathbb 1$ e $x(t)\to\bar x$.

## Intuizione
Il consenso pesa i nodi con $\pi$; per avere la media aritmetica serve $\pi$ uniforme, cioè una matrice doppiamente stocastica. Il rapporto tra due dinamiche corregge il peso $w_j$ al numeratore e al denominatore.

## Come si usa
Applicazioni delle slide: calcolo decentralizzato nelle reti di sensori (temperatura, rilevazione incendi), bilanciamento del carico, sincronizzazione di orologi, localizzazione relativa, coordinamento di robot. La complessità dipende dal tempo di convergenza, che dipende dal gap spettrale di $P$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 5, "Decentralized computation of global functions", "Average computation". Fonti: `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (pp. 93-113).

## Prerequisiti
- [[Modello di French-DeGroot]]: convergenza al consenso pesato da $\pi$

## Porta a
- [[Velocità di convergenza al consenso]]: tempo e complessità del calcolo

## Collegati
- [[Grafo regolare]]: solo lì la dinamica standard dà la media esatta
- [[Bilancio dettagliato]]: $P$ è reversibile rispetto ai gradi
