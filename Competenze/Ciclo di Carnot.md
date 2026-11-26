---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["Carnot cycle", "rendimento del ciclo di Carnot", "Carnot efficiency", "ciclo reversibile a due sorgenti"]
tags: [competenza, area/fisica]
---

# Ciclo di Carnot

> Ciclo reversibile di un gas ideale tra due sorgenti, formato da due isoterme e due adiabatiche; il suo rendimento dipende solo dalle temperature delle sorgenti.

## Definizione / enunciato
Tra le sorgenti $T_1<T_2$:
1. A→B espansione isoterma a $T_2$: $Q_{AB}=W_{AB}=nRT_2\ln(V_B/V_A)>0$;
2. B→C espansione adiabatica: $W_{BC}=-nc_V(T_1-T_2)$;
3. C→D compressione isoterma a $T_1$: $Q_{CD}=nRT_1\ln(V_D/V_C)<0$;
4. D→A compressione adiabatica: $W_{DA}=-nc_V(T_2-T_1)=-W_{BC}$.
Dalle adiabatiche $T_2V_B^{\gamma-1}=T_1V_C^{\gamma-1}$ e $T_2V_A^{\gamma-1}=T_1V_D^{\gamma-1}$ segue $V_C/V_B=V_D/V_A$, cioè $V_B/V_A=V_C/V_D$.

## Formule chiave
$$\eta=\frac{Q_{AB}+Q_{CD}}{Q_{AB}}=\frac{T_2-T_1}{T_2}=1-\frac{T_1}{T_2}$$

## Intuizione
Il rendimento non dipende dal fluido usato ma solo dalle temperature degli scambi isotermi; nel piano $(T,S)$ il ciclo è un rettangolo.

## Come si usa
Percorso al contrario (A→D→C→B→A) diventa il frigorifero di Carnot. È il termine di confronto per tutte le macchine reali (teorema di Carnot).

## Nei corsi
- **Fisica 1** (triennale): lezione del 18/05/2022 (fonte citata: Mazzoldi, Nigro, Voci). Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione3.pdf` (pp. 7-20).

## Prerequisiti
- [[Macchina termica]]: definizione di rendimento
- [[Trasformazione adiabatica reversibile]]: due lati del ciclo
- [[Trasformazioni notevoli dei gas ideali]]: due isoterme reversibili

## Porta a
- [[Macchina frigorifera]]: percorso in senso antiorario
- [[Teorema di Carnot]]: fornisce il valore del rendimento

## Collegati
- Nessuno.
