---
tipo: competenza
area: fisica
corsi: [Chimica]
livello: [triennale]
aliases: ["Gibbs free energy", "energia libera", "free energy", "equazione di Gibbs-Helmholtz", "spontaneità delle reazioni", "spontaneity", "ΔG", "energia libera standard di formazione"]
tags: [competenza, area/fisica]
---

# Energia libera di Gibbs

> Funzione di stato $G=H-TS$ la cui variazione a T e P costanti decide la spontaneità di una reazione: $\Delta G<0$ spontanea, $\Delta G>0$ non spontanea, $\Delta G=0$ equilibrio.

## Definizione / enunciato
ΔH da solo non basta a prevedere la spontaneità: ci sono reazioni spontanee sia esotermiche sia endotermiche (es. la fusione). Ogni sistema tende a uno stato più stabile ($\Delta H<0$) e a una distribuzione dell'energia più dispersa ($\Delta S>0$); una grandezza predittiva deve tenere conto di entrambi.
**Entropia di reazione:** $\Delta S^\circ_r$ si calcola dalle entropie molari standard $S^\circ$ tabulate; le entropie degli elementi, a differenza delle entalpie di formazione, non sono nulle.
**Energia libera:** a P e T costanti vale l'equazione di Gibbs-Helmholtz. Quattro casi (p. 45): $\Delta H<0,\Delta S>0$ spontanea a ogni T; $\Delta H>0,\Delta S<0$ mai spontanea; $\Delta H>0,\Delta S>0$ spontanea ad alte T ($T>\Delta H/\Delta S$); $\Delta H<0,\Delta S<0$ spontanea a basse T ($T<\Delta H/\Delta S$). Quando ΔH e ΔS hanno lo stesso segno decide la temperatura.

## Formule chiave
$$\Delta G=\Delta H-T\Delta S,\qquad \Delta S^\circ_r=\sum_i n_iS^\circ(\text{prodotti})-\sum_j n_jS^\circ(\text{reagenti})$$

## Intuizione
ΔH misura la "discesa" energetica, $T\Delta S$ la spinta verso il disordine; ad alta temperatura il termine entropico pesa di più.

## Come si usa
$\mathrm{C(s)+O_2(g)\rightleftharpoons CO_2(g)}$: $\Delta G^\circ_f(\mathrm{CO_2})=-394{,}36$ kJ (p. 47). Entropie molari standard (cal K$^{-1}$ mol$^{-1}$, p. 42): $\mathrm{H_2O(l)}$ 16,7, $\mathrm{H_2O(g)}$ 45,1, C(grafite) 1,4. La dissoluzione endotermica di $\mathrm{NH_4NO_3}$ è spontanea perché il termine entropico prevale (lezione 13, p. 31).

## Nei corsi
- **Chimica** (triennale): Lezione 17. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 17 - T.chimica T.dinamica.pdf` (lezione 17, pp. 38-48).

## Prerequisiti
- [[Entalpia di reazione]]: termine ΔH
- [[Entropia]]: termine TΔS

## Porta a
- [[Energia libera e costante di equilibrio]]: all'equilibrio ΔG = 0

## Collegati
- [[Solubilità]]: dissoluzioni endotermiche spontanee per l'entropia
- [[Cella galvanica]]: la pila converte energia libera in lavoro elettrico
