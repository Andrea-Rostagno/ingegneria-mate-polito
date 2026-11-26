---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["reversible adiabatic process", "trasformazione adiabatica", "adiabatic process", "equazione di Poisson dei gas", "pV^gamma = costante", "isoentropica"]
tags: [competenza, area/fisica]
---

# Trasformazione adiabatica reversibile

> Trasformazione senza scambio di calore e per stati di equilibrio: lungo di essa $pV^\gamma$ resta costante.

## Definizione / enunciato
**Adiabatica generica:** $Q=0$, quindi $W_{AB}=-\Delta U=-nc_V(T_B-T_A)$; in un'espansione il gas si raffredda, in una compressione si scalda.
**Reversibile:** $0=nc_VdT+p\,dV=nc_VdT+\frac{nRT}{V}dV$. Con Mayer $\frac{dT}{T}+(\gamma-1)\frac{dV}{V}=0$, e integrando tra A e B:
$$\left(\frac{V_B}{V_A}\right)^{\gamma-1}=\frac{T_A}{T_B}.$$

## Formule chiave
$$TV^{\gamma-1}=\text{cost},\qquad pV^\gamma=\text{cost},\qquad Tp^{\frac{1-\gamma}{\gamma}}=\text{cost}$$
$$W_{AB}=-nc_V(T_B-T_A)$$

## Intuizione
Nel piano di Clapeyron le adiabatiche sono più ripide delle isoterme ($\gamma>1$): senza calore in ingresso, la pressione cala più in fretta all'espandersi del gas. Sono trasformazioni isoentropiche.

## Come si usa
Nel ciclo di Carnot le due adiabatiche danno $V_C/V_B=V_D/V_A$; nell'esercizio di `Termodinamica_Lezione3.pdf` (pp. 22-31) un'adiabatica di gas biatomico collega un'isobara e un'isoterma.

## Nei corsi
- **Fisica 1** (triennale): lezione del 16/05/2022 (fonte citata: Mazzoldi, Nigro, Voci); all'orale si chiede la dimostrazione di $pV^\gamma=$ costante. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione2.pdf` (pp. 28-41).

## Prerequisiti
- [[Relazione di Mayer]]: si sostituisce R = cp - cV
- [[Lavoro termodinamico]]: dW = p dV nel primo principio

## Porta a
- [[Ciclo di Carnot]]: due lati del ciclo

## Collegati
- [[Trasformazioni notevoli dei gas ideali]]: quarta trasformazione notevole
