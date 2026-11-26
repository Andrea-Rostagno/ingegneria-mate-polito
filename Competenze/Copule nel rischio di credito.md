---
tipo: competenza
area: finanza
corsi: [Prova finale]
livello: [triennale]
aliases: ["copulas in credit risk", "modello di Li", "Li's model", "Li copula model", "default correlation", "dipendenza tra default", "CDO", "collateralized debt obligation", "obbligazioni garantite da crediti", "tempi di default"]
tags: [competenza, area/finanza]
---

# Copule nel rischio di credito

> I tempi di default di più emittenti si legano con una copula; il caso classico è il modello di Li con copula gaussiana, usato per le CDO e criticato perché non produce default a grappolo.

## Definizione / enunciato
**Modello di Li (2000)** (Pellerey, slide 49). Portafoglio di $d$ obbligazioni di società $Z_i$ con tempi di default $T_i$:
$$\mathbb P[T_1\le t_1,\dots,T_d\le t_d]=C^{Ga}\big(F_1(t_1),\dots,F_d(t_d)\big),\qquad F_i\sim\mathrm{Exp}(\lambda_i),$$
con $C^{Ga}$ copula gaussiana. Il valore del portafoglio dipende dalla legge congiunta di $\mathbf T=(T_1,\dots,T_d)$.

## Formule chiave
- Quantità di interesse (slide 6): nel rischio di credito, il numero di default nell'insieme di società.
- Il rischio di una CDO (obbligazioni garantite da un pool di mutui o prestiti alle imprese) dipende dalla dipendenza fra le insolvenze delle attività sottostanti (tesi §3.3.2).

## Intuizione
**Difetti del modello di Li** (slide 50, Donnelly-Embrechts 2010): in crisi i default arrivano a grappoli, ma con la copula gaussiana i default diventano indipendenti man mano che l'evento si fa estremo, cioè manca la dipendenza di coda. "Very few people understand the essence of the model" (Li, 2005). Per questo Pellerey la chiama "ricetta per un disastro".

## Come si usa
Nella tesi (§1.1, §3.3.2) le copule servono a stimare la probabilità di default congiunta di attività o controparti, a modellare la dipendenza fra tipi di rischio diversi (mercato, credito, operativo; per esempio insolvenze sui prestiti e movimenti dei tassi) e a valutare rischio e rendimento delle CDO. Per i tempi di vita con shock comune la tesi indica la famiglia di Marshall-Olkin.

## Nei corsi
- **Prova finale** (triennale): §3.3.2 "Gestione dei rischi"; esempio del modello di Li nelle slide del relatore. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§1.1, p. 12; §3.3.2, p. 23); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 4, 6, 49-51).

## Prerequisiti
- [[Copula gaussiana]]: copula del modello di Li
- [[Distribuzione esponenziale]]: marginali dei tempi di default
- [[Teorema di Sklar]]: costruzione della legge congiunta dei default

## Porta a
- [[Value at Risk]]: rischio di portafogli con dipendenze complesse

## Collegati
- [[Dipendenza di coda]]: ciò che manca alla gaussiana
- [[Copula di Marshall-Olkin]]: tempi di vita con shock comune
- [[Pricing di opzioni multi-asset con copule]]: altra applicazione finanziaria della tesi
