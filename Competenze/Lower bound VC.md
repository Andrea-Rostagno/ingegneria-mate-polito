---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["VC dimension lower bound", "limite inferiore VC", "lower bound di apprendimento", "complessità campionaria minima"]
tags: [competenza, area/data-ml]
---

# Lower bound VC

> Per ogni algoritmo esiste una distribuzione su cui servono almeno dell'ordine di $d$ esempi (o $d/\epsilon^2$ nel caso agnostico): la dimensione VC misura anche la difficoltà minima di apprendimento.

## Definizione / enunciato
**Caso realizzabile** (Ehrenfeucht et al., 1988). Sia $H$ con $\mathrm{VCdim}(H)=d>1$. Per ogni algoritmo $\mathcal A$
$$\exists D,\ \exists f\in H:\qquad\Pr_{S\sim D^m}\Big[R_D(h_S,f)>\frac{d-1}{32m}\Big]\ge\frac1{100}.$$
**Caso non realizzabile** (Anthony e Bartlett, 1999). Per ogni algoritmo esiste $D$ su $\mathcal X\times\{0,1\}$ con
$$\Pr_{S\sim D^m}\Big[R_D(h_S)-\inf_{h\in H}R_D(h)>\sqrt{\frac d{320m}}\Big]\ge\frac1{64},\qquad\text{equivalentemente}\quad m\ge\frac d{320\epsilon^2}.$$

## Formule chiave
Costruzione della distribuzione nel caso realizzabile: $\bar{\mathcal X}=\{x_0,x_1,\dots,x_{d-1}\}$ insieme frantumato,
$$\Pr_D[x_0]=1-8\epsilon,\qquad\Pr_D[x_i]=\frac{8\epsilon}{d-1}\quad(i\in[1,d-1]).$$

## Intuizione
Sui punti rari dell'insieme frantumato le etichette possono essere qualsiasi: se il campione non li contiene, l'algoritmo non può fare meglio di lanciare una moneta. Con poche osservazioni molti di quei punti restano non visti.

## Come si usa
Si dimostra che, mediando su $f$ uniforme fra le dicotomie, l'errore atteso resta grande finché più di $(d-1)/2$ punti rari non sono osservati, e si stima dal basso la probabilità di questo evento. Insieme ai bound superiori mostra che il bound VC è stretto a meno di fattori logaritmici.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 116-122); `FML.pdf` §3.4.

## Prerequisiti
- [[Dimensione VC]]: il lower bound è in funzione di $d$
- [[Modello PAC]]: si limita la complessità campionaria PAC

## Porta a
- [[Apprendimento PAC agnostico]]: versione non realizzabile

## Collegati
- [[Teorema no free lunch]]: stesso spirito, per ogni learner esiste una distribuzione difficile
