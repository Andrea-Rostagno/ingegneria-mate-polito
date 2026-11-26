---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["VC dimension", "Vapnik-Chervonenkis dimension", "dimensione di Vapnik-Chervonenkis", "VCdim", "shattering", "frantumazione", "insieme frantumato", "shattered set", "bound di generalizzazione VC"]
tags: [competenza, area/data-ml]
---

# Dimensione VC

> Cardinalità del più grande insieme di punti che $H$ riesce a etichettare in tutti i $2^m$ modi possibili; misura combinatoria della capacità di un insieme di ipotesi.

## Definizione / enunciato
(Vapnik e Chervonenkis, 1968-1971) Un insieme di $m$ punti è **frantumato** (*shattered*) da $H$ se $H$ realizza tutte le $2^m$ dicotomie. La dimensione VC è
$$\mathrm{VCdim}(H)=\max\{m:\Pi_H(m)=2^m\}.$$
Per un **limite inferiore** $\mathrm{VCdim}(H)\ge d$ basta esibire un insieme di $d$ punti frantumato; per un **limite superiore** bisogna provare che **nessun** insieme di $d+1$ punti è frantumato (di solito più difficile).

## Formule chiave
Esempi delle slide:
- intervalli di $\mathbb R$: $\mathrm{VCdim}=2$ (la dicotomia "+ − +" su tre punti non è realizzabile);
- iperpiani in $\mathbb R^d$: $\mathrm{VCdim}=d+1$ (in $\mathbb R^2$ tre punti non allineati sono frantumati, quattro no);
- rettangoli allineati agli assi nel piano: $\mathrm{VCdim}=4$ (con cinque punti si etichetta negativo quello non vicino ai lati);
- $d$-goni convessi: $\mathrm{VCdim}=2d+1$ (punti su una circonferenza); poligoni convessi: $+\infty$;
- seni $\{t\mapsto\sin(\omega t):\omega\in\mathbb R\}$: $+\infty$, pur con un solo parametro.

**Bound di generalizzazione VC.** $H$ a valori in $\{-1,+1\}$ con $\mathrm{VCdim}(H)=d$: con probabilità almeno $1-\delta$, per ogni $h\in H$,
$$R(h)\le\hat R(h)+\sqrt{\frac{2d\log\frac{em}{d}}{m}}+\sqrt{\frac{\log\frac1\delta}{2m}},\qquad\text{cioè}\quad R(h)\le\hat R(h)+O\Big(\sqrt{\frac{\log(m/d)}{m/d}}\Big).$$
Bound standard: $R(h)\le\hat R(h)+\sqrt{\frac{8d\log\frac{2em}{d}+8\log\frac4\delta}{m}}$.

## Intuizione
La dimensione VC non conta i parametri ma la capacità di adattarsi a etichette arbitrarie (i seni ne sono il controesempio). Il rapporto $m/d$ fa da "numero effettivo di esempi per grado di libertà".

## Come si usa
Esercizio tipico: determinare la VC di una classe esibendo un insieme frantumato e una dicotomia non realizzabile su $d+1$ punti; poi sostituire $d$ nel bound per ottenere la complessità campionaria.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 93-107, 113-114); `FML.pdf` §3.3.

## Prerequisiti
- [[Funzione di crescita]]: la definizione usa $\Pi_H(m)=2^m$

## Porta a
- [[Lemma di Sauer]]: $\Pi_H(m)=O(m^d)$ se $d<\infty$
- [[Lower bound VC]]: $d$ esempi sono anche necessari
- [[Structural risk minimization]]: famiglie annidate di VC crescente

## Collegati
- [[Modello PAC]]: VC finita come criterio di apprendibilità
- [[Teorema no free lunch]]: la classe di tutte le funzioni ha VC infinita
- [[Support vector machine]]: classificatori lineari, VC degli iperpiani $d+1$
