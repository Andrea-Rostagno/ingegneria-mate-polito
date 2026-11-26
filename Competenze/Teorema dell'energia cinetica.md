---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["work-energy theorem", "teorema del lavoro", "teorema delle forze vive", "energia cinetica", "kinetic energy", "teorema dell'energia cinetica per sistemi"]
tags: [competenza, area/fisica]
---

# Teorema dell'energia cinetica

> Il lavoro totale di tutte le forze agenti su un punto (o su un sistema) è uguale alla variazione della sua energia cinetica; vale per qualsiasi tipo di forza.

## Definizione / enunciato
Energia cinetica $E_k=\tfrac12mv^2$. **Teorema:** se il punto si muove da A a B lungo $\gamma$ sotto le forze $\vec F_1,\vec F_2,\dots$, il lavoro della risultante è $W_{AB}=E_k(B)-E_k(A)$. Dimostrazione: si scrive $F_{T,x}dx=m\frac{dv_x}{dt}v_xdt=mv_xdv_x$ per ogni componente e si integra.
**Sistemi di punti:** sommando sui punti, $W=W^{(E)}+W^{(I)}=\Delta E_k$; il lavoro delle forze interne dipende dalla variazione delle mutue distanze e quindi è nullo per un corpo rigido.

## Formule chiave
$$W_{AB}=\tfrac12mv_B^2-\tfrac12mv_A^2,\qquad W^{(E)}+W^{(I)}=E_{k,B}-E_{k,A}$$

## Intuizione
È la versione "integrata nello spazio" del secondo principio: il teorema dell'impulso integra $F$ nel tempo, questo la integra lungo il cammino.

## Come si usa
È il punto di partenza per la conservazione dell'energia meccanica e per il teorema di Bernoulli (applicato a una porzione di fluido).

## Nei corsi
- **Fisica 1** (triennale): lezioni del 21/03 (punto) e del 4/04/2022 (sistemi). Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_Puntomateriale_Lezione2.pdf` (pp. 10, 31); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione1.pdf` (pp. 48-57).
- **Meccanica** (triennale): forma in potenza, $\dot T=\Pi$ con $\Pi$ potenza di tutte le forze (Thm 7.6, eq. 7.44); Thm 7.9: $\Delta T$ è uguale al lavoro di tutte le forze interne ed esterne. La potenza di un vincolo ideale, bilatero e fisso è nulla (Thm 7.7) e quella delle forze conservative è $\Pi_U=\dot U$ (Thm 7.8). Il manoscritto, per un moto rigido con vincoli ideali, bilateri e fissi, scrive $\dot T=\Pi^{(a,e)}$, potenza delle sole forze attive esterne (pagina letta a bassa risoluzione, da verificare sul PDF). Fonti: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 73-74, numerazione stampata); `triennale/ANNO 2/Meccanica/Lez11-PotenzaEqLagrangeLagrangiana.pdf` (pp. 1-2, dal manoscritto 2017).

## Prerequisiti
- [[Lavoro di una forza]]: lavoro della risultante
- [[Leggi di Newton]]: si sostituisce F=ma nell'integrale

## Porta a
- [[Conservazione dell'energia meccanica]]: si spezza il lavoro in conservativo e non
- [[Teoremi di König]]: energia cinetica di un sistema
- [[Teorema di Bernoulli]]: applicato alla massa di fluido spostata

## Collegati
- Nessuno.
