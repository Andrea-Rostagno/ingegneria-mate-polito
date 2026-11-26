---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Gauss-Bonnet theorem", "Gauss-Bonnet", "curvatura totale integrale", "∫K dS = 2πχ(S)"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Gauss-Bonnet

> Su una superficie compatta senza bordo, l'integrale della curvatura gaussiana vale $2\pi$ per la caratteristica di Eulero. Una quantità locale e metrica dà un numero topologico.

## Definizione / enunciato
**Teorema (senza dimostrazione).** Sia $S$ una superficie compatta senza bordo e $K$ la sua curvatura di Gauss, che è una funzione su $S$. Allora
$$\int_SK\,dS=2\pi\,\chi(S),$$
dove $\chi(S)$ è la caratteristica di Eulero di $S$.

## Formule chiave
$$\int_SK\,dS=\iint_\Omega K(P(u,v))\,\|P_u\times P_v\|\,du\,dv=\iint_\Omega K\sqrt{EG-F^2}\,du\,dv$$

## Intuizione
Deformare la superficie cambia $K$ punto per punto, ma l'aumento in una zona è compensato altrove: il totale dipende solo dal numero di "buchi". Sulla sfera $K>0$ dà $4\pi$; sul toro le regioni a $K>0$ e $K<0$ si compensano esattamente.

## Come si usa
Verifiche svolte a lezione:
- **Sfera di raggio $r$:** $K=\frac1{r^2}$ e l'area è $4\pi r^2$, quindi $\int K=4\pi=2\pi\cdot2$, in accordo con $\chi(S^2)=2$.
- **Ellissoide** $(a\sin u\cos v,b\sin u\sin v,c\cos u)$: il risultato non cambia; i conti sono omessi ("un po' lunghi").
- **Toro** $((R+r\cos u)\cos v,(R+r\cos u)\sin v,r\sin u)$: si ha $K=\frac{\cos u}{r(R+r\cos u)}$ e $\sqrt{\det g}=r(R+r\cos u)$, quindi
$$\int_SK\,dS=\int_0^{2\pi}\!\!\int_0^{2\pi}\cos u\,du\,dv=0=2\pi\cdot\chi(T^2).$$

## Nei corsi
- **Geometria differenziale** (triennale): è il risultato finale del corso. Fonte `triennale/ANNO 2/geometria differenziale/Lezione27_GD.pdf` (pp. 3, 10-13).

## Prerequisiti
- [[Curvatura gaussiana]]: si integra K
- [[Integrale di superficie]]: ∫_S f dS con elemento d'area
- [[Caratteristica di Eulero]]: il membro destro

## Porta a
- Nessuno.

## Collegati
- [[Teorema Egregio]]: entrambi dicono che K è più intrinseca di quanto sembri
