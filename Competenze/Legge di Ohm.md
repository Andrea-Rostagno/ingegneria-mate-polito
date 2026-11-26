---
tipo: competenza
area: fisica
corsi: [Fisica 2, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["Ohm's law", "resistenza elettrica", "resistività", "conducibilità elettrica", "electrical conductivity", "velocità di deriva", "drift velocity", "mobilità", "effetto Joule", "Joule heating", "potenza elettrica", "forza elettromotrice"]
tags: [competenza, area/fisica]
---

# Legge di Ohm

> A temperatura costante il rapporto tra differenza di potenziale e corrente è una costante, la resistenza; in forma locale $j=\sigma E$, ricavata dal moto di deriva delle cariche tra un urto e l'altro.

## Definizione / enunciato
In un conduttore con elettroni liberi, il campo $\vec E$ dà origine a un moto ordinato (moto di **deriva**) che si sovrappone al moto termico casuale. **Legge di Ohm:** a temperatura costante $\Delta V=RI$, con $R$ resistenza elettrica, misurata in ohm (Ω).
**Modello microscopico:** con la meccanica newtoniana sulle singole cariche, si suppone che le cariche urtino periodicamente gli atomi (tempo medio $\tau$), cedendo l'energia cinetica acquisita e ripartendo. $v_{Deriva}$ è la velocità stazionaria raggiunta; $\sigma$ è la conducibilità, in $(\Omega\,m)^{-1}$; $\rho=1/\sigma$ la resistività, in Ω·m.
**Effetto Joule:** l'energia fornita alle cariche è persa negli urti con gli atomi sotto forma di calore: il conduttore si scalda. In un circuito chiuso l'energia va fornita dall'esterno: la $\Delta V$ che la fornisce è la **forza elettromotrice** (fem).

## Formule chiave
$$qE=m_q\frac{v_{Deriva}}{\tau},\qquad v_{Deriva}=\frac{qE\tau}{m_q},\qquad j=nqv_{Deriva}=\frac{nq^2\tau}{m_q}E=\sigma E$$
$$I=\frac1R\Delta V,\qquad R=\frac{l}{\sigma S}=\rho\frac lS,\qquad v=\frac{\sigma}{nq}E\ \text{(mobilità }\sigma/nq)$$
$$P=\frac{\Delta Q\,\Delta V}{\Delta t}=I\Delta V=RI^2$$

## Intuizione
Senza urti il campo accelererebbe le cariche indefinitamente; gli urti con il reticolo fanno da "attrito" e fissano una velocità media costante proporzionale a $E$. L'energia persa negli urti è il calore Joule.

## Come si usa
Esempi delle slide (`13.  LEZIONE.pdf` p. 12):
- **Filo di rame:** $I=100$ A, $d=5$ mm, $l=1$ m, $V=86$ mV. Risultati riportati: $v=3.7\cdot10^{-4}$ m/s, tempo di transito 45 min, $\rho=1.69\cdot10^{-8}$ Ω·m.
- **Semisfera con liquido:** semisfera di raggio $r_1=1$ m rivestita di conduttore, riempita di liquido con $\rho=5\cdot10^{10}$ Ω·m, elettrodo emisferico concentrico di raggio $r_2=0.5$ m, tensione $V=50$ V. Risultati: $R=8$ GΩ, $I=6.3$ nA.

## Nei corsi
- **Fisica 2** (triennale): lezione 13 (legge di Ohm, conducibilità, potenza, fem, esercizi IV A e IV B). Fonti: `triennale/ANNO 2/fisica 2/lezioni/13.  LEZIONE.pdf` (pp. 6-13).
- **Dinamiche su network** (magistrale): ricavata come condizione di ottimo. Su un grafo non orientato con conduttanze $W_{ij}$ si minimizza la potenza dissipata $\sum_{(i,j)}f_{ij}^2/(2W_{ij})$ sotto il vincolo di Kirchhoff $Bf=\nu$; le condizioni di complementary slackness danno $f^*_{ij}=W_{ij}[x_i-x_j]_+$, con le tensioni $x$ uguali ai moltiplicatori di Lagrange dei nodi. Più in generale, per reti DC ($\alpha=1$ nel costo $f^{\alpha+1}/((\alpha+1)h^\alpha)$) il flusso netto è $z_{ij}=W_{ij}(\lambda_i-\lambda_j)$. Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 8, 21); `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 38-40).

## Prerequisiti
- [[Corrente elettrica]]: j = nqv con la velocità di deriva
- [[Leggi di Newton]]: moto delle cariche tra un urto e l'altro

## Porta a
- [[Circuito RL]]: V0 + V_L = R i
- [[Circuito RC]]: caduta R i nel circuito
- [[Conduzione elettrica nei metalli]]: modello classico di Drude, σ = Ne²τ/m

## Collegati
- Nessuno.
- [[Rete elettrica su un grafo]]: Ohm + Kirchhoff equivalgono all'equazione di Laplace $Lx=\nu$ (Dinamiche su network)
- [[Ottimizzazione convessa di flussi su rete]]: Ohm come condizione di complementary slackness per la dissipazione di potenza (Dinamiche su network)
