---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["electrical network", "rete elettrica", "reti elettriche su grafi", "leggi di Kirchhoff e Ohm su grafo", "equazione di Laplace su grafo", "Laplace equation on graphs", "matrice di Green", "Green matrix", "legge serie e parallelo", "series and parallel laws", "glueing"]
tags: [competenza, area/network]
---

# Rete elettrica su un grafo

> Un grafo non orientato con conduttanze sugli archi e correnti esogene: minimizzando la potenza dissipata si ottengono le leggi di Kirchhoff e di Ohm, e le tensioni risolvono l'equazione di Laplace $Lx=\nu$.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ connesso, non orientato, senza cappi; $W_{ij}=W_{ji}$ conduttanza, $1/W_{ij}$ resistenza; correnti esogene $\nu$ con $\sum_i\nu_i=0$. Problema di flusso:
$$M(\nu)=\inf_{f\ge0,\ Bf=\nu}\ \sum_{(i,j)\in\mathcal E}\frac1{2W_{ij}}f_{ij}^2\quad\text{(potenza dissipata)}.$$
Duale: $D(\lambda,\nu)=-\frac14\sum_{(i,j)}W_{ij}(\lambda_i-\lambda_j)^2+\sum_i\lambda_i\nu_i$. All'ottimo, con $x=\lambda^*$ tensioni:
$$\sum_jf^*_{ij}-\sum_jf^*_{ji}=\nu_i\ \text{(Kirchhoff)},\qquad f^*_{ij}=W_{ij}[x_i-x_j]_+\ \text{(Ohm)}.$$

## Formule chiave
Sostituendo: $\nu_i=\sum_jW_{ij}(x_i-x_j)$, cioè
$$Lx=\nu\qquad\text{(Laplace}\iff\text{Kirchhoff + Ohm)}.$$
$L$ simmetrica: $L=\sum_{k\ge2}\lambda_kz_{(k)}z_{(k)}'$ con $0=\lambda_1<\lambda_2\le\dots\le\lambda_n$ e $z_{(1)}=n^{-1/2}\mathbb 1$. **Matrice di Green**
$$Z=\sum_{k\ge2}\frac1{\lambda_k}z_{(k)}z_{(k)}',\qquad ZL=LZ=I-n^{-1}\mathbb 1\mathbb 1',\quad Z\mathbb 1=0 .$$
**Teorema.** $Lx=\nu$ se e solo se $x=Z\nu+c\mathbb 1$, $c$ costante.
Riduzioni: serie $\tilde W^{-1}=W_{ji}^{-1}+W_{ik}^{-1}$; parallelo $\tilde W=W'+W''$; nodi alla stessa tensione si possono incollare.

## Intuizione
La corrente va dalle tensioni alte alle basse in proporzione alla differenza; la tensione di un nodo senza corrente esterna è la media pesata delle tensioni dei vicini, cioè una funzione armonica sul grafo.

## Come si usa
- **Problema di Dirichlet:** fissate le tensioni $u$ su $\mathcal S$, si risolve $(Lx)_{|\mathcal R}=0$, $x_{|\mathcal S}=u$; è lo stesso sistema delle opinioni asintotiche con agenti testardi (tensioni ↔ opinioni). Esempio della linea $0..n$ con $u_0=0$, $u_n=1$: $x_k=k/n$.
- Esempio delle slide (7 nodi, conduttanze unitarie, corrente $+1$ entrante in 3 e $-1$ uscente in 6; il nodo 7 è una foglia appesa a 6): con serie e parallelo la rete si riduce a un solo arco 3-6 di conduttanza $11/18$, quindi $x_3-x_6=\phi_{36}/W_{36}=18/11$ e $\phi_{67}=0$, $x_6=x_7$. Risalendo: $x_3-x_5=7/11$, correnti $\phi^{up}_{35}=4/11$, $\phi^{down}_{35}=7/11$, poi $\phi^{up}_{34}=1/11$, $\phi^{down}_{34}=3/11$; con $x_6=x_7=0$ si ottiene $x_5=1$, $x_3=18/11$, $x_4=15/11$ e, lungo 3-1-2-4, salti di $1/11$ (le slide scrivono "$x_2=16/11$, $x_2=17/11$": il secondo è $x_1$).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 6, "Electrical networks", "Computational tricks", "The Dirichlet problem"; Slides 4 per la legge di Ohm come condizione CS. Fonti: `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 37-54); `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 8, 21).

## Prerequisiti
- [[Laplaciano di un grafo]]: $Lx=\nu$ e spettro di $L$
- [[Ottimizzazione convessa di flussi su rete]]: potenza dissipata e dualità

## Porta a
- [[Resistenza efficace]]: tensione prodotta da una corrente unitaria tra due nodi

## Collegati
- [[Legge di Ohm]]: la stessa legge in elettromagnetismo
- [[Agenti testardi]]: tensioni assegnate = opinioni testarde
- [[Funzione armonica]]: le tensioni sono armoniche fuori dalle sorgenti
- [[Problema di Dirichlet per l'equazione di Poisson]]: analogo continuo di $Lx=\nu$ con dati al bordo
