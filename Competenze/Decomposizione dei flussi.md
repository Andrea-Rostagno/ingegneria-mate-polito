---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["flow decomposition theorem", "teorema di decomposizione dei flussi", "network flow", "flusso di rete", "o-d flow", "flusso o-d", "throughput", "flusso unitario", "unitary o-d flow", "assegnazione dei flussi ai cammini"]
tags: [competenza, area/ottimizzazione]
---

# Decomposizione dei flussi

> Ogni flusso $o$-$d$ sugli archi si ottiene assegnando flusso ai cammini $o$-$d$ e ai cicli orientati; viceversa da un'assegnazione ai cammini si ricava un unico flusso sugli archi.

## Definizione / enunciato
Su un multigrafo con matrice di incidenza $B$, sia $\nu\in\mathbb R^{\mathcal V}$ il vettore dei flussi netti esogeni, con $\sum_i\nu_i=0$ (conservazione della massa); i nodi con $\nu_i>0$ sono sorgenti, quelli con $\nu_i<0$ pozzi. Il **throughput** è
$$\tau=\sum_i\nu_i^+=\sum_i\nu_i^-=\tfrac12\|\nu\|_1 .$$
Un **flusso** è $f\in\mathbb R^{\mathcal E}_+$ con $Bf=\nu$. Un **flusso $o$-$d$** ha $Bf=\tau(\delta^{(o)}-\delta^{(d)})$; è **unitario** se $\tau=1$.

**Assegnazione e decomposizione.** Se $z\in\mathbb R^{\Gamma_{od}}_+$ assegna flusso ai cammini,
$$f=\sum_{\gamma\in\Gamma_{od}}z_\gamma A\delta^{(\gamma)}=Az,\qquad Bf=BAz=\tau(\delta^{(o)}-\delta^{(d)}),\quad \tau=\sum_\gamma z_\gamma .$$
Viceversa (**teorema di decomposizione**), ogni flusso $o$-$d$ $f$ si scrive come assegnazione a cammini $o$-$d$ e a cicli orientati, in generale in modo non unico.

## Formule chiave
Ogni colonna $A\delta^{(\gamma)}$ della matrice arco-cammino è un flusso unitario $o$-$d$. Con un ciclo orientato di vettore $C$: $f=Az+Cw$ con $z\ge0$, $w\ge0$.

## Intuizione
Sui cammini il flusso è "chi va dove", sugli archi è "quanto traffico c'è su ogni strada". Passare da cammini ad archi è una moltiplicazione; tornare indietro ha molte soluzioni, perché diversi instradamenti producono lo stesso carico.

## Come si usa
Esempio delle slide (nodi $o,a,b,c,d$, archi $e_1,\dots,e_7$, quattro cammini e un ciclo $(e_3,e_4,e_5)$): con $z=(1,2,3,1)$ e $w=1$ si ottiene $f=(4,3,4,5,1,3,4)$; per un $f$ generico la decomposizione è $z(\alpha)=(\alpha,f_6-\alpha,f_1-\alpha,f_2+\alpha-f_6)$, $w=f_5$, per ogni $0\le\alpha\le\min\{f_1,f_6\}$. Nell'esempio a 4 nodi due flussi diversi hanno throughput 3 e 4.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 3, "Network flows", "Unitary o-d flows", "Network Flow Assignment (and Decomposition)". Fonti: `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 16-22).

## Prerequisiti
- [[Matrice di incidenza]]: bilancio $Bf=\nu$ e matrice arco-cammino

## Porta a
- [[Teorema max-flow min-cut]]: massimizzare il throughput di un flusso $o$-$d$
- [[Equilibrio di Wardrop]]: i guidatori scelgono i cammini, $f=Az$

## Collegati
- [[Flusso massimo]]: lo stesso flusso con vincoli di capacità
