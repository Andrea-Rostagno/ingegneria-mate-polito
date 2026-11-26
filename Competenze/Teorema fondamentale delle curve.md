---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["fundamental theorem of space curves", "teorema fondamentale della teoria delle curve", "curve sovrapponibili", "esistenza di una curva con curvatura e torsione assegnate"]
tags: [competenza, area/algebra-geometria]
---

# Teorema fondamentale delle curve

> Curvatura e torsione, come funzioni dell'ascissa curvilinea, determinano una curva a meno di movimenti rigidi. Ogni coppia "ragionevole" $(K,\tau)$ si realizza.

## Definizione / enunciato
Due teoremi, entrambi **senza dimostrazione** a lezione:
1. **Unicità.** Una curva è determinata, a meno di movimenti rigidi di $\mathbb R^3$ (isometrie), da curvatura e torsione. Due curve con stessa curvatura e torsione sono sovrapponibili.
2. **Esistenza.** Siano $f(s)$ e $g(s)$ funzioni continue su un intervallo $I\subseteq\mathbb R$, con $f(s)>0$ per ogni $s\in I$. Allora esiste una curva $P(s)$, parametrizzata con l'ascissa curvilinea su $I$, con $K(s)=f(s)$ e $\tau(s)=g(s)$.

## Formule chiave
Equazioni intrinseche (convenzione del docente):
$$\frac{dT}{ds}=f(s)N,\qquad \frac{dN}{ds}=-f(s)T-g(s)B,\qquad \frac{dB}{ds}=g(s)N.$$
Sono un sistema lineare del primo ordine di 9 equazioni nelle 9 incognite $T_1,T_2,T_3,N_1,N_2,N_3,B_1,B_2,B_3$.

## Intuizione
Assegnate $K$ e $\tau$, le formule di Frenet sono un sistema di EDO. Fissando un punto iniziale e una terna ortonormale iniziale (cioè una posizione nello spazio), la soluzione è unica; poi $P(s)=P_0+\int T$. Cambiare il dato iniziale equivale a muovere rigidamente la curva. Questa intuizione è un commento: a lezione la dimostrazione non c'è.

## Come si usa
Giustifica l'affermazione dell'introduzione: curvatura e torsione "caratterizzano univocamente la curva" (L01 p. 3). Casi particolari dimostrati a lezione:
- $K=0$: retta;
- $K$ costante e $\tau=0$: circonferenza;
- $K,\tau$ costanti con $\tau\neq0$: elica circolare.

## Nei corsi
- **Geometria differenziale** (triennale): enunciati alla fine della parte sulle curve. Fonti: `triennale/ANNO 2/geometria differenziale/Lezione08_GD.pdf` (pp. 10-11); `triennale/ANNO 2/geometria differenziale/Lezione01_GD.pdf` (p. 3).

## Prerequisiti
- [[Formule di Frenet]]: il sistema delle equazioni intrinseche

## Porta a
- Nessuno.

## Collegati
- [[Problema di Cauchy]]: esistenza e unicità per il sistema di 9 EDO con dato iniziale
- [[Elica circolare]]: l'unica curva sghemba con K e τ costanti
