---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["internal energy of an ideal gas", "espansione libera di Joule", "Joule free expansion", "U dipende solo da T", "calori specifici molari cV e cp"]
tags: [competenza, area/fisica]
---

# Energia interna di un gas ideale

> L'energia interna di un gas ideale dipende solo dalla temperatura e vale $\Delta U=nc_V\Delta T$ per qualsiasi trasformazione.

## Definizione / enunciato
**Calori specifici molari:** $c_V=\frac1n\left(\frac{dQ}{dT}\right)_V$, $c_p=\frac1n\left(\frac{dQ}{dT}\right)_p$; $Q_V=nc_V\Delta T$, $Q_p=nc_p\Delta T$, e $c_p>c_V$.
**Espansione libera di Joule:** un gas in un contenitore adiabatico rigido si espande nel vuoto; trasformazione irreversibile con $Q=0$, $W=0$, quindi $\Delta U=0$. La temperatura non cambia mentre variano $p$ e $V$: $U$ è funzione solo di $T$.
Per calcolarla si va da A a B con un'isocora AC e un'isoterma CB: $\Delta U=U_C-U_A=Q_{AC}=nc_V(T_B-T_A)$.

## Formule chiave
$$\Delta U=nc_V\Delta T,\qquad \Delta U=n\int_{T_A}^{T_B}c_V\,dT\ \ (c_V\ \text{variabile})$$
$$\text{primo principio reversibile: } dQ=nc_VdT+p\,dV$$

## Intuizione
Nel gas ideale non ci sono forze tra le molecole, quindi niente energia potenziale interna: l'energia interna è tutta energia cinetica, legata solo a $T$.

## Come si usa
Vale per ogni trasformazione, anche irreversibile, perché $U$ è funzione di stato: basta conoscere gli stati iniziale e finale.

## Nei corsi
- **Fisica 1** (triennale): lezione del 16/05/2022; all'orale si chiede la dimostrazione che $U$ dipende solo da $T$. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione2.pdf` (pp. 9-21).

## Prerequisiti
- [[Primo principio della termodinamica]]: ΔU = Q - W applicato alle trasformazioni
- [[Equazione di stato dei gas ideali]]: stati di equilibrio del gas

## Porta a
- [[Relazione di Mayer]]: dU = n cV dT anche nell'isobara
- [[Trasformazioni notevoli dei gas ideali]]: ΔU = n cV ΔT

## Collegati
- [[Equipartizione dell'energia]]: interpretazione microscopica di U
