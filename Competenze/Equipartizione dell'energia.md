---
tipo: competenza
area: fisica
corsi: [Fisica 1, Fisica 2]
livello: [triennale]
aliases: ["equipartition theorem", "principio di equipartizione", "degrees of freedom", "costante di Boltzmann"]
tags: [competenza, area/fisica]
---

# Equipartizione dell'energia

> In un gas l'energia cinetica media di una molecola si distribuisce ugualmente tra i suoi gradi di libertà, con $\tfrac12k_BT$ per ciascuno.

## Definizione / enunciato
Il numero di gradi di libertà $f$ è il numero minimo di parametri per individuare la posizione del sistema: monoatomico $f=3$; biatomico rigido $f=6-1=5$; molecola rigida con tre o più atomi $f=9-3=6$ (vale per ogni corpo rigido). **Principio di equipartizione** (Maxwell, Boltzmann): ogni grado di libertà porta in media un'energia $\tfrac12k_BT$ per molecola.

## Formule chiave
$$U=nN_A\frac f2k_BT=n\frac f2RT,\qquad c_V=\frac1n\frac{dU}{dT}=\frac f2R$$
Monoatomico $c_V=\tfrac32R$, biatomico $c_V=\tfrac52R$.

## Intuizione
Più modi ha una molecola di "muoversi", più energia assorbe per scaldarsi di un grado: per questo i biatomici hanno $c_V$ maggiore.

## Come si usa
Giustifica teoricamente i valori di $c_V$, $c_p$ e $\gamma$ usati negli esercizi.

## Nei corsi
- **Fisica 1** (triennale): lezione del 23/05/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione4.pdf` (pp. 15-20).
- **Fisica 2** (triennale): energia media di un oscillatore armonico 1D classico $\langle E_{osc}\rangle=\tfrac12k_BT+\tfrac12k_BT=k_BT$ (cinetica più elastica), usata per lo spettro classico del corpo nero. Per $N$ atomi e $M$ oscillatori $\langle U\rangle=3N\left[\tfrac12kT\right]+M\left[\tfrac12kT\right]$: per una mole di H₂ ($3N=2(3N_A)$, $M=N_A$) $c_V=\tfrac72R$, per un solido $c_V=3R$, entrambi indipendenti da $T$, smentiti dai dati a bassa temperatura. Fonti: `triennale/ANNO 2/fisica 2/lezioni/43&44&45. LEZIONE.pdf` (pp. 12, 28); `triennale/ANNO 2/fisica 2/lezioni/46&49&50. LEZIONE.pdf` (pp. 17-19, 28).

## Prerequisiti
- [[Modello cinetico del gas ideale]]: energia cinetica media delle molecole

## Porta a
- [[Teoria quantistica dei calori specifici]]: previsione classica cV = 7R/2 e 3R

## Collegati
- [[Energia interna di un gas ideale]]: interpretazione microscopica di U
- [[Relazione di Mayer]]: spiega i valori di cV per mono e biatomici
